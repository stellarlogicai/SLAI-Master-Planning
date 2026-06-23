# RetailOS Firestore Schema and Services

## Purpose

This document defines the starting Firestore structure and service layer for RetailOS.

RetailOS should be multi-tenant from day one.

Every document should include:

```js
tenantId
schemaVersion
createdAt
updatedAt
createdBy
```

---

# Firestore Collections

```txt
tenants/{tenantId}

tenants/{tenantId}/products/{productId}
tenants/{tenantId}/inventory/{inventoryId}
tenants/{tenantId}/transactions/{transactionId}
tenants/{tenantId}/customers/{customerId}
tenants/{tenantId}/employees/{employeeId}
tenants/{tenantId}/vendors/{vendorId}
tenants/{tenantId}/loyaltyAccounts/{loyaltyId}
tenants/{tenantId}/returns/{returnId}
tenants/{tenantId}/auditLogs/{auditId}
```

---

# Product Document

```js
{
  tenantId: "tenant_123",
  schemaVersion: 1,

  name: "Pokemon Booster Pack",
  sku: "PKM-BOOST-001",
  barcode: "123456789012",
  category: "Trading Cards",
  brand: "Pokemon",

  cost: 3.25,
  retailPrice: 5.99,

  taxable: true,
  active: true,

  createdAt: Timestamp,
  updatedAt: Timestamp,
  createdBy: "user_123"
}
```

---

# Inventory Document

```js
{
  tenantId: "tenant_123",
  schemaVersion: 1,

  productId: "product_123",
  quantityOnHand: 42,
  reorderPoint: 10,
  reorderQuantity: 24,

  location: "Main Store",
  aisle: "A3",
  shelf: "S2",

  lastCountedAt: Timestamp,
  updatedAt: Timestamp
}
```

---

# Transaction Document

```js
{
  tenantId: "tenant_123",
  schemaVersion: 1,

  transactionNumber: "TXN-10001",
  cashierId: "employee_123",
  customerId: "customer_456",

  items: [
    {
      productId: "product_123",
      name: "Pokemon Booster Pack",
      quantity: 2,
      unitPrice: 5.99,
      total: 11.98
    }
  ],

  subtotal: 11.98,
  tax: 0.92,
  discountTotal: 0,
  total: 12.90,

  paymentMethod: "card",
  paymentStatus: "paid",

  createdAt: Timestamp
}
```

---

# Product Service Example

```js
// src/modules/retail/products/productService.js

import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../../../core/firebase/firebaseConfig";

export async function createProduct({ tenantId, userId, product }) {
  if (!tenantId) throw new Error("tenantId is required");

  const productRef = collection(db, "tenants", tenantId, "products");

  const payload = {
    tenantId,
    schemaVersion: 1,

    name: product.name,
    sku: product.sku || "",
    barcode: product.barcode || "",
    category: product.category || "",
    brand: product.brand || "",

    cost: Number(product.cost || 0),
    retailPrice: Number(product.retailPrice || 0),

    taxable: product.taxable ?? true,
    active: true,

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdBy: userId
  };

  return await addDoc(productRef, payload);
}

export async function getActiveProducts({ tenantId }) {
  const productRef = collection(db, "tenants", tenantId, "products");

  const q = query(productRef, where("active", "==", true));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data()
  }));
}

export async function updateProduct({ tenantId, productId, updates }) {
  const ref = doc(db, "tenants", tenantId, "products", productId);

  return await updateDoc(ref, {
    ...updates,
    updatedAt: serverTimestamp()
  });
}
```

---

# Inventory Service Example

```js
// src/modules/retail/inventory/inventoryService.js

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  increment
} from "firebase/firestore";

import { db } from "../../../core/firebase/firebaseConfig";

export async function createInventoryRecord({ tenantId, productId, quantity }) {
  const ref = doc(db, "tenants", tenantId, "inventory", productId);

  return await setDoc(ref, {
    tenantId,
    schemaVersion: 1,
    productId,
    quantityOnHand: Number(quantity || 0),
    reorderPoint: 0,
    reorderQuantity: 0,
    location: "Main Store",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function decreaseInventory({ tenantId, productId, quantity }) {
  const ref = doc(db, "tenants", tenantId, "inventory", productId);

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    throw new Error("Inventory record not found");
  }

  const current = snap.data().quantityOnHand || 0;

  if (current < quantity) {
    throw new Error("Not enough inventory");
  }

  return await updateDoc(ref, {
    quantityOnHand: increment(-quantity),
    updatedAt: serverTimestamp()
  });
}
```

---

# POS Transaction Service Example

```js
// src/modules/retail/pos/posService.js

import {
  collection,
  addDoc,
  serverTimestamp,
  runTransaction,
  doc
} from "firebase/firestore";

import { db } from "../../../core/firebase/firebaseConfig";

export async function completeSale({ tenantId, cashierId, customerId, cart }) {
  if (!cart.length) throw new Error("Cart is empty");

  const subtotal = cart.reduce((sum, item) => {
    return sum + item.unitPrice * item.quantity;
  }, 0);

  const tax = subtotal * 0.0775;
  const total = subtotal + tax;

  return await runTransaction(db, async (transaction) => {
    for (const item of cart) {
      const inventoryRef = doc(
        db,
        "tenants",
        tenantId,
        "inventory",
        item.productId
      );

      const inventorySnap = await transaction.get(inventoryRef);

      if (!inventorySnap.exists()) {
        throw new Error(`Inventory not found for ${item.name}`);
      }

      const currentQty = inventorySnap.data().quantityOnHand || 0;

      if (currentQty < item.quantity) {
        throw new Error(`Not enough inventory for ${item.name}`);
      }

      transaction.update(inventoryRef, {
        quantityOnHand: currentQty - item.quantity,
        updatedAt: serverTimestamp()
      });
    }

    const transactionRef = doc(collection(db, "tenants", tenantId, "transactions"));

    transaction.set(transactionRef, {
      tenantId,
      schemaVersion: 1,
      cashierId,
      customerId: customerId || null,

      items: cart.map((item) => ({
        productId: item.productId,
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        total: item.unitPrice * item.quantity
      })),

      subtotal,
      tax,
      discountTotal: 0,
      total,

      paymentMethod: "pending",
      paymentStatus: "pending",

      createdAt: serverTimestamp()
    });

    return transactionRef.id;
  });
}
```
