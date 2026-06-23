# ServicesOS Laundry Module + RetailOS Laundromat Bundle

**Status:** Future planning only  
**Active build priority:** Do not build before ServicesOS cleaning beta, wife beta testing, UI hardening, and payments stability.  
**Primary product anchor:** ServicesOS  
**Related product:** RetailOS  
**Strategic layer:** SLAI cross-product linking

---

## Purpose

This document captures a future laundromat / laundry services concept for SLAI. The idea is not to force the business into either ServicesOS or RetailOS. A laundromat naturally has both a service workflow and a retail/POS workflow.

Long-term, the right model is:

```text
ServicesOS handles the service workflow.
RetailOS handles the retail/POS workflow.
SLAI Core links the related products together.
```

This keeps each product focused while allowing businesses with overlapping operations to use bundled SLAI modules.

---

## Product Classification

```text
Primary bucket:
ServicesOS future module

Related bucket:
RetailOS future module

Bundle opportunity:
Laundromat Operations Bundle

Build timing:
After ServicesOS beta, cleaning workflow stability, and payments stability
```

This should remain future planning until the core ServicesOS cleaning product is stable.

---

## Business Types Covered

Laundry/laundromat businesses usually split into two operational sides.

### 1. Laundry Service Operations

This is the best fit for ServicesOS.

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

This is the best fit for RetailOS.

Examples:

- Walk-in transactions
- Detergent and fabric softener sales
- Vending inventory
- Machine revenue
- Cash/card register activity
- Refunds
- Retail product stock
- Daily sales reports

---

## Future Bundle Concept

```text
ServicesOS Laundry Module
+
RetailOS POS / Inventory Module
=
Laundromat Operations Bundle
```

The bundle would allow a laundromat or laundry service business to manage service orders, retail transactions, employees, customers, and payments from one connected SLAI ecosystem.

The modules should not be merged into one tangled product. They should be linkable through shared SLAI Core data.

---

## SLAI Cross-Product Linking Principle

Every SLAI product should be able to stand alone, but related SLAI products should be linkable when their data naturally overlaps.

Core principle:

```text
Do not merge products too early.
Do make products linkable later.
```

Shared cross-product foundations should include:

- Tenant / business account
- Customer profile
- Employee profile
- Roles and permissions
- Billing and payments
- Invoices and receipts
- Notifications
- Files and documents
- Audit logs
- Analytics
- AI assistant context

Product-specific workflows should stay separated.

### ServicesOS owns:

- Service requests
- Quotes / estimates
- Jobs / orders
- Scheduling
- Employee assignments
- Checklists
- Service completion
- Recurring service workflows

### RetailOS owns:

- POS transactions
- Product catalog
- Inventory
- Register sessions
- Retail receipts
- Stock adjustments
- Vendor/supplier data

---

## Example Laundromat Customer Journey

A customer walks into a laundromat and buys detergent:

```text
RetailOS transaction
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

This is the long-term value of SLAI cross-product linking: the business sees the full operational picture instead of separate disconnected systems.

---

## ServicesOS Laundry Module MVP

The MVP should focus on service operations, not full laundromat machine/POS management.

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

Potential laundry order statuses:

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

First-time customer intake should capture detailed preferences.

Potential fields:

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

## RetailOS Side of the Bundle

RetailOS would handle the retail and counter-sales side of a laundromat.

Potential RetailOS laundromat features:

- Product catalog
- Detergent/softener sales
- Vending inventory
- Counter POS
- Cash/card sales
- Refunds
- Daily sales summary
- Low stock alerts
- Stock adjustments
- Product margin reporting

Future machine-related retail/payment features could include:

- Machine revenue tracking
- Washer/dryer status
- Manual machine assignment
- Maintenance logs
- Downtime tracking

Machine IoT integrations should not be MVP. They should come later only if real customers need them.

---

## Shared Data Between ServicesOS and RetailOS

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
RetailOS transaction:
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

This could be a premium module after the consumer wash-and-fold workflow is stable.

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

- Full laundromat POS
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
SLAI products should be modular, linkable, and tenant-aware.
```

The future SLAI Core should make it possible for a business to activate multiple modules without duplicating customers, employees, permissions, billing, or analytics.

This applies beyond laundromats:

```text
Laundromat:
ServicesOS + RetailOS

Cleaning company selling supplies:
ServicesOS + RetailOS

Pharmacy:
RetailOS + PharmacyOS + ComplianceAI

Card shop:
RetailOS + GrowthAI

Training-heavy service business:
ServicesOS + EducationOS

Multi-location operator:
ServicesOS + RetailOS + ComplianceAI + GrowthAI
```

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
