# RetailOS Build Steps and AI Features

## Phase 1: Foundation

### Step 1: Create Retail Module Folder

```txt
src/modules/retail/
  products/
  inventory/
  pos/
  customers/
  employees/
  reports/
```

---

### Step 2: Build Product CRUD

Features:

* Add product
* Edit product
* Archive product
* Search products
* Barcode field
* SKU field
* Category field

---

### Step 3: Build Inventory Tracking

Features:

* Quantity on hand
* Reorder point
* Reorder quantity
* Inventory adjustment logs
* Low stock alerts

---

### Step 4: Build POS Cart

Flow:

```txt
Search Product
↓
Add to Cart
↓
Adjust Quantity
↓
Apply Discount
↓
Calculate Tax
↓
Complete Sale
↓
Inventory Decreases
↓
Transaction Saved
```

---

# React POS Cart Example

```jsx
import { useState } from "react";
import { completeSale } from "../pos/posService";

export default function POSScreen({ tenantId, cashierId }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce((sum, item) => {
    return sum + item.unitPrice * item.quantity;
  }, 0);

  const tax = subtotal * 0.0775;
  const total = subtotal + tax;

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.productId === product.id);

      if (existing) {
        return current.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        {
          productId: product.id,
          name: product.name,
          unitPrice: product.retailPrice,
          quantity: 1
        }
      ];
    });
  }

  async function handleCheckout() {
    try {
      setLoading(true);

      const transactionId = await completeSale({
        tenantId,
        cashierId,
        customerId: null,
        cart
      });

      console.log("Sale complete:", transactionId);
      setCart([]);
    } catch (error) {
      console.error("Checkout failed:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>RetailOS POS</h1>

      <div>
        {cart.map((item) => (
          <div key={item.productId}>
            {item.name} x {item.quantity} = $
            {(item.unitPrice * item.quantity).toFixed(2)}
          </div>
        ))}
      </div>

      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
      <h3>Tax: ${tax.toFixed(2)}</h3>
      <h2>Total: ${total.toFixed(2)}</h2>

      <button disabled={loading || cart.length === 0} onClick={handleCheckout}>
        Complete Sale
      </button>
    </div>
  );
}
```

---

# Phase 2: Reports

Build basic reports:

* Daily sales
* Weekly sales
* Top products
* Low stock
* Refunds
* Discounts used
* Employee sales

---

# Phase 3: AI Restock Assistant

## Purpose

AI watches inventory and recommends reorder actions.

---

# Restock Rule Engine First

Before AI, build deterministic logic.

```js
export function getRestockRecommendations(products, inventory) {
  return inventory
    .filter((item) => item.quantityOnHand <= item.reorderPoint)
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);

      return {
        productId: item.productId,
        productName: product?.name || "Unknown Product",
        currentQuantity: item.quantityOnHand,
        reorderPoint: item.reorderPoint,
        suggestedOrderQuantity: item.reorderQuantity,
        reason: "Inventory is below reorder point"
      };
    });
}
```

---

# AI Layer Later

Once deterministic recommendations work, AI can explain them.

Example AI prompt payload:

```js
const payload = {
  storeType: "card_shop",
  product: {
    name: "Pokemon Booster Pack",
    currentQuantity: 6,
    reorderPoint: 10,
    salesLast7Days: 22,
    salesLast30Days: 81
  },
  instruction:
    "Explain whether this store should reorder this product and why."
};
```

---

# Phase 4: Card Shop Module

Card shop-specific features:

* Singles inventory
* Market price lookup
* Buy price suggestion
* Sell price suggestion
* Condition grading
* Sealed product tracking
* Trade-in workflow

---

# Card Document Example

```js
{
  tenantId: "tenant_123",
  schemaVersion: 1,

  name: "Charizard ex",
  setName: "Obsidian Flames",
  cardNumber: "125/197",
  condition: "Near Mint",

  marketPrice: 42.00,
  suggestedBuyPrice: 28.00,
  suggestedSellPrice: 39.99,

  quantity: 1,
  graded: false,

  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

---

# Buy Price Formula

Start simple:

```js
export function calculateSuggestedBuyPrice(marketPrice, conditionMultiplier = 1) {
  const baseBuyRate = 0.65;

  return Number((marketPrice * baseBuyRate * conditionMultiplier).toFixed(2));
}
```

Example:

```txt
Market Price: $42.00
Buy Rate: 65%
Condition: Near Mint

Suggested Buy Price: $27.30
```

---

# Phase 5: Retail Security AI

Start with rule-based detection:

```js
export function detectSuspiciousActivity(transactions) {
  const employeeStats = {};

  for (const txn of transactions) {
    const id = txn.cashierId;

    if (!employeeStats[id]) {
      employeeStats[id] = {
        refunds: 0,
        voids: 0,
        discounts: 0,
        totalTransactions: 0
      };
    }

    employeeStats[id].totalTransactions++;

    if (txn.type === "refund") employeeStats[id].refunds++;
    if (txn.type === "void") employeeStats[id].voids++;
    if (txn.discountTotal > 0) employeeStats[id].discounts++;
  }

  return Object.entries(employeeStats).map(([employeeId, stats]) => {
    const refundRate = stats.refunds / stats.totalTransactions;
    const discountRate = stats.discounts / stats.totalTransactions;

    return {
      employeeId,
      refundRate,
      discountRate,
      flagged:
        refundRate > 0.15 ||
        discountRate > 0.4 ||
        stats.voids > 10
    };
  });
}
```

AI later explains:

```txt
Employee has refund rate 3x store average.
Recommend manager review.
Do not accuse automatically.
```

---

# RetailOS AI Principle

AI should never directly accuse employees.

AI should:

* Flag anomalies
* Explain evidence
* Recommend review
* Require manager decision

Human judgment remains required.

---

# Recommended Build Order

1. Product CRUD
2. Inventory CRUD
3. POS cart
4. Complete sale
5. Inventory decrement
6. Transaction history
7. Returns/refunds
8. Daily sales report
9. Low stock report
10. Employee permissions
11. Customer loyalty
12. Card shop module
13. AI restock assistant
14. Security anomaly detection
15. Multi-store support

---

# MVP Success Definition

RetailOS MVP is successful when:

```txt
A small shop can:

Add products
Track inventory
Ring up sales
Handle returns
View daily sales
Know what to reorder
```

Everything after that is expansion.
