# ServicesOS Laundry Module + POS Add-On

**Status:** Future planning only  
**Active build priority:** Do not build before ServicesOS cleaning beta, wife beta testing, UI hardening, and payments stability.  
**Primary product anchor:** ServicesOS  
**Retail path:** POS add-on first; RetailOS linkage later if retail complexity grows  
**Strategic layer:** SLAI cross-product linking

---

## Purpose

This document captures a future laundromat / laundry services concept for SLAI.

The key architecture decision is:

```text
ServicesOS already owns the service workflow, customers, employees, inventory-style tracking, payments, scheduling, analytics, and tenant structure.

The missing retail layer is POS.
```

So the correct future framing is not to immediately split laundromats into two separate products. The better model is:

```text
ServicesOS Laundry Module
+
POS Add-On
=
Laundry / Laundromat Operations Bundle

RetailOS linkage comes later only if retail complexity grows.
```

This preserves ServicesOS as the operational anchor while keeping RetailOS available for deeper retail/POS complexity later.

---

## Product Classification

```text
Primary bucket:
ServicesOS future module

Add-on bucket:
POS add-on

Future linkage:
RetailOS if retail complexity grows

Bundle opportunity:
Laundry / Laundromat Operations Bundle

Build timing:
After ServicesOS beta, wife beta testing, UI hardening, and payments stability
```

This must remain future planning until ServicesOS cleaning is stable.

---

## Core Architecture Decision

Laundromat/laundry businesses have service operations and retail operations. ServicesOS can already cover much of the shared operational foundation.

### ServicesOS already supports or is designed to support

- Customers
- Employees
- Service orders/jobs
- Scheduling
- Checklists
- Payments
- Inventory-style tracking
- Tenant structure
- Notifications
- Analytics foundation

### POS add-on adds

- Product catalog
- Cart/checkout flow
- Receipt generation
- Sales tax handling
- Refunds/returns
- Counter sales
- Cash/card tracking
- End-of-day summary
- Optional barcode/SKU support later

### RetailOS linkage later adds deeper retail complexity

- Advanced SKU inventory
- Supplier/vendor purchasing
- Register sessions
- Multi-location retail reporting
- Product margin reporting
- Barcode workflows
- Retail-specific analytics

---

## Service Inventory vs Retail Inventory

This distinction should become a general SLAI product rule.

```text
Service inventory = supplies used to complete jobs/orders.
Retail inventory = products sold directly to customers.
```

Example:

```text
Detergent used by employees for wash-and-fold = ServicesOS inventory.
Detergent sold to walk-in customers = POS / Retail inventory.
```

This allows the same business to track supplies without confusing internal usage with direct retail sales.

---

## Business Types Covered

Laundry/laundromat businesses usually split into two operational sides.

### 1. Laundry Service Operations

Best fit: ServicesOS.

Examples:

- Wash-and-fold orders
- Drop-off orders
- Pickup and delivery laundry
- Commercial laundry accounts
- Recurring laundry service
- Employee task checklists
- Order status tracking
- Customer preferences
- Ready-for-pickup notifications

### 2. Laundromat Retail / POS Operations

Best fit: POS add-on first, RetailOS linkage later.

Examples:

- Walk-in product transactions
- Detergent and fabric softener sales
- Vending inventory
- Machine refunds
- Cash/card counter activity
- Product stock
- Daily sales reports

---

## Future Bundle Concept

```text
ServicesOS Laundry Module
+
POS Add-On
=
Laundry / Laundromat Operations Bundle
```

The bundle would allow a laundromat or laundry service business to manage service orders, counter sales, employees, customers, payments, and inventory from a connected SLAI ecosystem.

The modules should not become a tangled product. They should share the right core data while keeping workflows separate.

---

## SLAI Cross-Product Linking Principle

Every SLAI product should be able to stand alone, but related SLAI products should be linkable when their data naturally overlaps.

Core principle:

```text
Do not merge products too early.
Do make products linkable later.
```

The product that owns the main workflow should remain the anchor.

For laundromats:

```text
ServicesOS owns laundry service operations.
POS add-on owns counter checkout.
RetailOS becomes relevant if the retail side grows into advanced inventory, register, supplier, and multi-location retail workflows.
```

---

## Example Customer Journey

A customer buys detergent at the counter:

```text
POS add-on transaction
```

The same customer drops off clothes for wash-and-fold:

```text
ServicesOS laundry order
```

The customer pays for the service order:

```text
Shared customer/payment history
```

Later, the owner can see a combined customer view:

```text
Retail purchase: $6 detergent
Laundry service: $42 wash-and-fold
Delivery fee: $8
Total customer value: $56
```

This is the long-term value of SLAI cross-product linking: the business sees the full operational picture instead of disconnected systems.

---

## ServicesOS Laundry Module MVP

The MVP should focus on service operations, not full laundromat POS, vending, machine IoT, or advanced retail.

### MVP Features

- Customer profile
- Saved laundry preferences
- Create laundry order
- Pickup/drop-off choice
- Bag count
- Weight after intake
- Service type
- Wash/dry/fold preferences
- Stain or special instructions
- Employee checklist
- Order status tracking
- Ready notification
- Payment status
- Basic owner/admin dashboard

### MVP Workflow

```text
Customer request/order
↓
Pickup or drop-off scheduled
↓
Laundry intake recorded
↓
Weight / bag count / service type captured
↓
Preferences confirmed
↓
Employee processes order
↓
Quality check
↓
Ready for pickup/delivery
↓
Payment
↓
Customer notification
↓
Recurring customer preferences saved
```

### Order Statuses

- New Request
- Pickup Scheduled
- Picked Up
- Received / Checked In
- Washing
- Drying
- Folding
- Quality Check
- Ready for Pickup
- Out for Delivery
- Completed
- Paid
- Issue / Hold
- Cancelled

---

## Customer Intake Fields

First-time customer intake should capture detailed preferences:

- Name
- Phone/email
- Pickup/drop-off preference
- Address if pickup/delivery
- Service type
- Bag count
- Estimated weight
- Wash temperature preference
- Dry temperature preference
- Detergent preference
- Fabric softener preference
- Scent-free preference
- Bleach allowed
- Separate whites/colors
- Fold or hang preference
- Special items
- Stain notes
- Pickup/delivery time window
- Payment method
- Recurring schedule preference

Returning customers should be able to reuse saved preferences and only answer what changed.

```text
Detailed first intake
↓
Saved preference profile
↓
Future orders only ask what changed
```

---

## Employee Workflow

The employee experience should stay simple.

The employee should see:

- Customer name
- Order type
- Bag count
- Weight
- Preferences
- Special instructions
- Current step
- Next action

Example employee checklist:

- Confirm customer/order label
- Confirm bag count
- Weigh order
- Check pockets
- Note stains/damage
- Sort laundry
- Wash
- Dry
- Fold/hang
- Quality check
- Bag/package
- Mark ready

This supports one of the most important laundromat requirements: preventing order mix-ups.

---

## Order Labels and Tracking

A simple MVP label could include:

- Order number
- Customer initials
- Bag count
- Status
- Pickup/delivery date

Future enhancements:

- QR code labels
- Bag stickers
- Printable receipts
- Scan-to-update status
- Photo proof at pickup/delivery

---

## Pricing Model

Laundry pricing differs from cleaning because the final price often depends on weight.

Potential pricing fields:

- Price per pound
- Minimum order fee
- Pickup fee
- Delivery fee
- Rush fee
- Special item fee
- Comforter/bedding fee
- Stain treatment fee
- Hang-dry fee
- Hypoallergenic detergent fee
- Commercial account pricing
- Recurring customer discount

Example model:

```text
Base: $1.75/lb
Minimum: $25
Pickup/delivery: $5–$15
Rush: +25%
Comforter: flat $20
Stain treatment: $5/item
```

Important product note:

```text
Customer estimate happens before weighing.
Final price is confirmed after intake/weight is recorded.
```

---

## POS Add-On Scope

Minimum POS add-on:

- Product catalog
- Cart
- Checkout
- Receipt
- Sales tax
- Refunds
- Cash/card tracking
- End-of-day summary

Later POS features:

- Barcode scanning
- Cash drawer
- Register sessions
- Vending inventory
- Machine payments
- Multi-location retail reporting

---

## RetailOS Linkage Later

RetailOS should become involved only when the business has enough retail complexity to justify it.

Examples that may justify RetailOS linkage:

- Multiple retail locations
- Large product catalog
- Supplier/vendor management
- Advanced stock reporting
- Barcode-heavy workflows
- Product margin tracking
- Retail-specific analytics
- Front-counter POS becomes as important as service workflow

---

## Shared Data

A laundromat bundle should link data through shared identifiers.

Shared data examples:

- `tenantId`
- `customerId`
- `employeeId`
- `paymentId`
- `invoiceId`
- `receiptId`
- `auditLogId`

Example linked records:

```text
POS transaction:
customerId = customer_123
items = detergent, dryer sheets

ServicesOS laundry order:
customerId = customer_123
serviceType = wash_and_fold
status = ready_for_pickup

SLAI analytics:
customer_123 total value = retail + service revenue
```

---

## Commercial Laundry Accounts

Commercial laundry could become a strong later feature because it creates recurring revenue.

Potential commercial customers:

- Salons
- Barbers
- Massage therapists
- Gyms
- Airbnbs
- Small hotels
- Restaurants
- Clinics
- Cleaning companies

Commercial workflow:

- Recurring pickup
- Bulk pricing
- Invoice billing
- Service agreement
- Linen count
- Missing/damaged item tracking
- Scheduled route
- Account-level reporting

---

## AI Features Later

AI should not be overbuilt into the first version. Long-term AI opportunities include:

- Price estimate from bag count and customer history
- Busy day prediction
- Pickup/delivery route suggestions
- Delayed order detection
- Staffing suggestions
- Repeat customer preference suggestions
- Unusual weight/order anomaly detection
- Customer update generation
- Issue order summaries

Photo AI later:

- Stain photo notes
- Damage documentation
- Pickup/drop-off proof photos
- AI-assisted stain category suggestions

---

## Not MVP

Avoid these until ServicesOS and the laundry workflow prove demand:

- Full RetailOS rollout
- Machine IoT integrations
- Vending automation
- Route optimization
- QR code label printing
- Commercial contracts
- AI stain detection
- Multi-location analytics
- Advanced machine revenue forecasting

---

## Architecture Note for SLAI

This idea reinforces a broader SLAI architecture philosophy:

```text
SLAI products should be modular, linkable, tenant-aware, and workflow-owned.
```

The future SLAI Core should make it possible for a business to activate multiple modules without duplicating customers, employees, permissions, billing, inventory, or analytics.

The main workflow determines the product anchor. POS can be added as an add-on when direct customer sales are needed. RetailOS linkage comes later if the retail side grows into a full retail business.

---

## Priority Note

This is a strong future vertical and bundle concept, but it should not distract from the current ServicesOS beta path.

Current priority remains:

1. Stabilize ServicesOS cleaning beta
2. Complete wife beta testing
3. Fix UI and workflow blockers
4. Stabilize payments/Stripe
5. Only then revisit future modules and cross-product linking

```text
This document is for future planning only.
Do not convert to active build work until Jamie explicitly promotes it.
```
