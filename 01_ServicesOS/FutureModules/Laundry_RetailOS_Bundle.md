# ServicesOS Laundry Module + POS Add-On

**Status:** Future planning only  
**Active build priority:** Do not build before ServicesOS V1 is stable, wife beta is complete, UI/payment hardening is complete, and Jamie explicitly promotes the vertical.  
**Primary product anchor:** ServicesOS  
**Retail path:** POS add-on first; RetailOS linkage later if retail complexity grows  
**Payment direction:** Provider-flexible; preserve existing Stripe or Square investment where practical  
**Strategic layer:** SLAI cross-product linking

---

## Purpose

This document captures the future laundromat / laundry-services vertical for ServicesOS.

The core product decision is that laundromats should not automatically become a separate SLAI product. They are a strong ServicesOS vertical because they combine customers, employees, recurring service work, checklists, inventory, payments, physical assets, maintenance, commercial accounts, and optional retail/POS activity.

```text
ServicesOS Laundry Module
+
POS / payment-provider integration
+
optional RetailOS linkage later
=
Laundry / Laundromat Operations Bundle
```

ServicesOS remains the operating layer. Existing payment hardware or machine-payment systems should be preserved when practical rather than forcing a business to replace working systems simply to adopt ServicesOS.

---

## Product Classification

```text
Primary bucket:
ServicesOS future vertical/module

Optional add-on bucket:
POS / counter-sales capability

Payment-provider direction:
Stripe and/or Square through a provider abstraction

Future linkage:
RetailOS if retail complexity grows

Build timing:
After ServicesOS V1 stability and later roadmap gates
```

This is future planning only.

---

## Why Laundromats Fit ServicesOS

A laundromat may look like a retail/POS business from the counter, but many of its hardest operational problems are service-business problems.

Potential ServicesOS-owned workflows include:

- customer records,
- wash-and-fold orders,
- drop-off intake,
- pickup and delivery,
- commercial laundry accounts,
- recurring service,
- employee scheduling,
- employee task lists and checklists,
- order status,
- customer preferences,
- inventory/supply usage,
- notifications,
- payment status,
- machine/asset records,
- maintenance and downtime tracking,
- issue history,
- analytics.

The goal is not to build a laundromat-specific monolith. Reuse ServicesOS core and add the smallest vertical-specific layer required.

---

## Payment Provider and Existing Hardware Strategy

A future laundromat customer should not have to abandon a working payment setup just to use ServicesOS.

Preferred architecture:

```text
ServicesOS
        ↓
Payment Provider Layer
   ┌───────────────┐
   │               │
Stripe           Square
   │               │
Stripe account   Square seller account
Stripe Tap to Pay / Terminal
                 Square Tap to Pay / Terminal / Reader where supported
```

### Provider abstraction principle

ServicesOS should think in product-level payment actions rather than scattering Stripe-specific assumptions throughout the application.

Conceptual provider operations:

```text
connectMerchant()
createPayment()
startInPersonCheckout()
getPaymentStatus()
refundPayment()
collectPlatformFee()
handleWebhook()
disconnectMerchant()
```

Each payment-provider adapter translates those operations into the provider-specific API.

### Existing Square businesses

If a laundromat already uses Square at the counter, the future goal should be:

> **Keep the Square setup they already use. Connect it to ServicesOS.**

Planning direction:

- owner authorizes the business's Square seller account through the provider's supported authorization flow,
- ServicesOS stores the provider connection and relevant merchant/location identifiers,
- ServicesOS can initiate or track supported Square payments,
- provider-originated payment events update ServicesOS payment/invoice/order state,
- refunds and reconciliation remain provider-aware,
- SLAI platform/application fees may be used only where supported and commercially appropriate,
- exact Square APIs, SDKs, fee mechanics, hardware support, permissions, and event names must be verified against current Square documentation at implementation time.

### Stripe businesses

Businesses already using the ServicesOS Stripe/Stripe Connect path should continue using Stripe without being forced onto Square.

The goal is provider choice, not provider duplication in every screen.

### Square hardware cannot be treated as Stripe hardware

Do not design around the assumption that Stripe processing can simply run through Square-branded hardware. Each provider's supported hardware and Tap to Pay path should remain provider-native.

ServicesOS can normalize the business workflow while the payment provider remains authoritative for the actual card transaction.

---

## Laundromat Machine Payments Are a Separate Boundary

The front-counter payment provider and the washer/dryer payment system may be completely different.

Example:

```text
Counter / wash-and-fold
→ Square or Stripe

Washers and dryers
→ coins / laundry card / proprietary app / machine vendor system

Employees
→ ServicesOS

Inventory
→ ServicesOS / future RetailOS depending on use

Maintenance
→ ServicesOS asset and issue records
```

ServicesOS should not require replacement of a proprietary washer/dryer payment system in the first laundromat release.

Machine-payment integration, if ever justified, should be a separate future connector with a clear source-of-truth contract.

---

## Machine / Asset Operations

Physical machines make the laundromat vertical especially interesting for ServicesOS.

A future asset record could include:

- asset ID,
- location,
- washer/dryer/type,
- manufacturer/model,
- capacity,
- serial/reference number,
- active/out-of-service state,
- last inspection,
- last maintenance,
- open issue,
- repair history,
- notes/photos,
- vendor/service contact.

Potential workflows:

```text
Employee reports machine issue
        ↓
Machine marked degraded/out of service
        ↓
Owner/manager reviews
        ↓
Repair task/vendor visit recorded
        ↓
Resolution documented
        ↓
Machine returned to service
```

This is operational asset management, not machine-control IoT. Remote machine control should remain out of scope unless real customer demand and vendor access justify it.

---

## Service Inventory vs Retail Inventory

This distinction should remain a general SLAI product rule.

```text
Service inventory = supplies consumed to perform work.
Retail inventory = products sold directly to customers.
```

Examples:

```text
Detergent used by employees for wash-and-fold
→ ServicesOS service inventory

Detergent sold to a walk-in customer
→ POS / Retail inventory
```

This allows one business to track internal supply usage separately from merchandise sales.

---

## Business Types Covered

### 1. Laundry Service Operations

Best fit: ServicesOS.

Examples:

- wash-and-fold,
- drop-off laundry,
- pickup/delivery laundry,
- commercial laundry,
- recurring laundry service,
- employee task checklists,
- order status,
- saved customer preferences,
- ready-for-pickup notifications.

### 2. Laundromat Retail / POS Operations

Best fit: bounded POS capability first, RetailOS only when justified.

Examples:

- detergent/fabric-softener sales,
- vending items,
- counter checkout,
- receipts,
- refunds,
- tips,
- daily sales summary.

### 3. Physical Asset Operations

Best fit: ServicesOS asset/maintenance layer.

Examples:

- washer/dryer records,
- downtime,
- maintenance,
- repair history,
- inspections,
- issue evidence.

---

## ServicesOS Laundry Module MVP

The first validated laundry vertical should focus on service operations rather than trying to replace every machine, POS, vending, inventory, and retail system at once.

### MVP Features

- customer profile,
- saved laundry preferences,
- create laundry order,
- pickup/drop-off choice,
- bag count,
- weight after intake,
- service type,
- wash/dry/fold preferences,
- stain/special instructions,
- employee checklist,
- order status,
- ready notification,
- payment status,
- basic owner/admin dashboard,
- basic machine/asset issue logging if validated as high-value.

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

First-time customer intake may capture:

- name,
- phone/email,
- pickup/drop-off preference,
- address when needed,
- service type,
- bag count,
- estimated weight,
- wash temperature,
- dry temperature,
- detergent preference,
- fabric softener preference,
- scent-free preference,
- bleach allowed,
- whites/colors separation preference,
- fold/hang preference,
- special items,
- stain notes,
- pickup/delivery window,
- payment preference,
- recurring schedule preference.

Returning customers should reuse saved preferences and only confirm what changed.

---

## Employee Workflow

The employee experience should stay simple and step-based.

Employee-visible context may include:

- customer,
- order type,
- bag count,
- weight,
- preferences,
- special instructions,
- current step,
- next action.

Example checklist:

- confirm customer/order label,
- confirm bag count,
- weigh order,
- check pockets,
- note stains/damage,
- sort,
- wash,
- dry,
- fold/hang,
- quality check,
- bag/package,
- mark ready.

Preventing order mix-ups is a primary workflow requirement.

---

## Order Labels and Tracking

A simple label may include:

- order number,
- customer initials,
- bag count,
- status,
- pickup/delivery date.

Later enhancements may include QR labels, scan-to-update status, printable receipts, and pickup/delivery proof.

---

## Pricing Model for Laundry Services

Laundry pricing often depends on weight and may not be final until intake.

Potential fields:

- price per pound,
- minimum order,
- pickup fee,
- delivery fee,
- rush fee,
- special item fee,
- bedding/comforter fee,
- stain treatment,
- hang dry,
- special detergent,
- commercial-account pricing,
- recurring-customer discount.

Core rule:

```text
Customer estimate may occur before weighing.
Final price is confirmed after authoritative intake/weight is recorded.
```

Exact market pricing belongs in future validation, not hard-coded planning assumptions.

---

## POS / Counter Sales Scope

Minimum bounded POS capability may include:

- product catalog,
- cart,
- checkout,
- receipt,
- sales tax support,
- refunds,
- cash/card tracking,
- tips,
- end-of-day summary.

Later only if justified:

- barcode scanning,
- cash drawer/register sessions,
- vending inventory,
- machine-payment connectors,
- multi-location retail reporting.

A future Square connection may satisfy much of the card-present checkout need without SLAI rebuilding the payment hardware layer.

---

## RetailOS Linkage Later

RetailOS should become involved only when the business has enough retail complexity to justify it.

Signals include:

- multiple retail locations,
- large merchandise catalog,
- supplier/vendor purchasing,
- advanced stock reporting,
- barcode-heavy workflows,
- product margins,
- stock transfers,
- retail-specific analytics,
- front-counter retail becoming as important as service workflow.

---

## Commercial Laundry Accounts

Commercial laundry is a strong later opportunity because it creates recurring service relationships.

Potential customers:

- salons,
- barbers,
- massage businesses,
- gyms,
- Airbnbs,
- small hotels,
- restaurants,
- clinics,
- cleaning companies.

Potential workflow:

- recurring pickup,
- bulk pricing,
- invoice billing,
- service agreement,
- linen count,
- missing/damaged-item tracking,
- scheduled route,
- account reporting.

---

## AI Features Later

AI should not be required for core laundry operations.

Possible later uses:

- estimate assistance from bag count/history,
- busy-day prediction,
- route suggestions,
- delayed-order detection,
- staffing suggestions,
- customer update drafting,
- issue summaries,
- anomaly detection.

Deterministic workflow and human responsibility remain primary.

---

## Explicitly Not MVP

- full RetailOS rollout,
- machine IoT/control,
- replacement of proprietary washer/dryer payment systems,
- vending automation,
- route optimization,
- advanced QR/label infrastructure,
- AI stain detection,
- multi-location analytics,
- advanced machine-revenue forecasting,
- building both Stripe and Square simultaneously before the existing payment foundation is stable.

---

## Implementation Sequence

If Jamie later promotes Laundry/Laundromat:

```text
1. Validate one real laundromat/laundry operator
2. Document current software/payment/machine stack
3. Identify which workflows ServicesOS replaces vs integrates with
4. Reuse ServicesOS core
5. Add smallest laundry-specific workflow layer
6. Add payment-provider connector only when the real customer requires it
7. Add asset/maintenance workflow if validated
8. Add bounded POS only where existing provider integration is insufficient
9. Consider RetailOS only after retail complexity is proven
```

Do not build a speculative full laundromat suite first.

---

## Priority Guardrail

This remains a future vertical.

Current execution priority remains ServicesOS V1, wife beta, beta-critical fixes, UI fine-tuning, and payment stability before future vertical expansion.

Square support is a strong V2/future payment-provider candidate because it can lower switching friction for real businesses already invested in Square, but it must not derail the current Stripe/Stripe Connect stabilization work.
