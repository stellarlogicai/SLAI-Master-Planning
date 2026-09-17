# ServicesOS Future Module Overlap Index

**Status:** Future planning only  
**Active build priority:** ServicesOS cleaning beta remains priority one.  
**Purpose:** Track future ServicesOS modules that may overlap with POS, payment providers, RetailOS, EducationOS, GrowthAI, ComplianceAI, or other SLAI products.

---

## Guiding Rules

ServicesOS is the service-workflow anchor.

If a future business type sells products directly to customers, start with bounded POS/payment integration before splitting into RetailOS.

```text
ServicesOS Module
+
POS / payment-provider integration where needed
+
RetailOS later only if retail complexity grows
```

A business should not be forced to replace working payment hardware or its existing processor solely to adopt ServicesOS when a secure supported integration path exists.

Current payment direction:

```text
V1
→ stabilize Stripe / Stripe Connect

V2 / later
→ introduce a payment-provider abstraction
→ add Square when validated by real customer need
→ preserve provider-native hardware / Tap to Pay paths
```

ServicesOS should normalize the business workflow while the selected payment provider remains authoritative for the actual card transaction.

---

## Overlap Categories

### ServicesOS Only

Best when the business mainly sells labor/service.

Examples:

- Cleaning
- Window cleaning
- Pressure washing
- Carpet cleaning
- Basic lawn care
- Junk removal
- Snow removal

### ServicesOS + POS / Payment Provider Integration

Best when the business sells services but also needs in-person checkout, tips, retail items, or already has established payment hardware.

Examples:

- Laundry / laundromat
- Barbershop
- Food truck
- Cleaning company selling supplies
- Lawn care selling materials
- Handyman billing parts/materials

### ServicesOS + RetailOS Later

Best when retail complexity becomes substantial.

Signals:

- large product catalog,
- barcode scanning,
- cash drawer/register sessions,
- supplier purchasing,
- multi-location retail reporting,
- product margins,
- stock transfers.

### ServicesOS + EducationOS

Best when training, SOPs, quizzes, and employee learning are central.

Examples:

- Cleaning companies
- Pharmacy operations
- Food trucks with safety training
- Field service teams
- Multi-location service businesses

### ServicesOS + GrowthAI

Best when customer acquisition, follow-ups, referrals, or outreach become important.

Examples:

- Cleaning companies
- Lawn care
- Barbershop
- Food truck catering
- Commercial laundry
- Local service providers

### ServicesOS + ComplianceAI

Best when task evidence, regulatory steps, inspections, or audit logs matter.

Examples:

- Pharmacy operations
- Food safety workflows
- Outdate management
- Temperature logs
- Commercial cleaning compliance
- Regulated inventory workflows

---

## Payment Provider Abstraction Direction

Long-term ServicesOS should avoid scattering one provider's assumptions throughout appointment, job, invoice, and reporting logic.

Conceptual product-level operations:

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

Provider adapters translate those operations into Stripe or Square-specific behavior.

Important rules:

- Stripe remains the current V1 payment implementation and must be stabilized first.
- Square is a future V2/payment-provider candidate, not current V1 scope.
- Square hardware is not treated as Stripe hardware and vice versa.
- Tap to Pay remains provider-native.
- Existing customer hardware/investment should be preserved where practical.
- Exact APIs, SDKs, fee models, permissions, device support, and webhook/event names must be re-verified against current provider documentation at implementation time.
- Provider support should be driven by real customer adoption barriers, not by feature accumulation.

---

# Module Map

## 1. Laundry / Laundromat

```text
Primary anchor:
ServicesOS Laundry Module

Add-ons / integrations:
Payment provider + bounded POS

Future linkage:
RetailOS if retail complexity grows
```

ServicesOS handles:

- Wash-and-fold orders
- Pickup/delivery
- Drop-off intake
- Customer laundry preferences
- Employee scheduling/checklists
- Order status tracking
- Commercial laundry accounts
- Recurring laundry service
- Service inventory
- Machine/asset records
- Maintenance/downtime/issues

POS/payment integration may handle:

- Detergent/fabric-softener sales
- Vending items
- Counter checkout
- Receipts
- Refunds
- Tips
- Card-present payments

### Existing Square laundromat direction

If a laundromat already uses Square at the counter, future ServicesOS should prefer connecting that Square seller account rather than forcing a migration to Stripe.

```text
ServicesOS order / sale
        ↓
Square-connected checkout where supported
        ↓
Square remains payment authority
        ↓
ServicesOS receives authoritative payment result
        ↓
Order / invoice / reporting update
```

The washer/dryer payment system may be separate from the counter system and should not be replaced in the first laundromat release.

RetailOS later handles:

- Advanced product catalog
- Vending inventory
- Multi-location retail reporting
- Supplier purchasing
- Product margins

Detailed planning doc:

```text
01_ServicesOS/FutureModules/Laundry_RetailOS_Bundle.md
```

---

## 2. Barbershop

```text
Primary anchor:
ServicesOS Barbershop Module

Add-ons / integrations:
Payment provider + bounded POS

Future linkage:
RetailOS if product sales grow
```

ServicesOS handles:

- Appointments
- Barber schedules
- Services
- Deposits
- Reminders
- Recurring clients
- Client history
- Tips tied to service
- Operational/customer context

POS/payment integration may handle:

- Card-present service checkout
- Tap to Pay
- Hair product sales
- Beard oil sales
- Shampoo/conditioner sales
- Merch
- Walk-in checkout
- Receipts
- Refunds

### Square / Tap to Pay validation direction

American Barbershop is a concrete future validation target because it may already use Square and phone-based Tap to Pay. Verify the exact setup before coding.

Preferred future adoption message:

> **Already use Square Tap to Pay? Keep it. Connect Square to ServicesOS.**

That reduces switching friction and lets ServicesOS own the appointment/customer workflow without pretending to own the underlying card network transaction.

Detailed planning doc:

```text
01_ServicesOS/Future-Verticals/ServicesOS_Barbershop_Pricing_and_Value_Strategy.md
```

RetailOS later handles:

- Larger product catalog
- Barcode scanning
- Supplier orders
- Product margins
- Multi-chair / multi-location retail reports

---

## 3. Food Truck

```text
Primary anchor:
ServicesOS Food Truck Module

Add-on:
POS / payment-provider integration

Future linkage:
RetailOS if menu/inventory complexity grows
```

ServicesOS handles:

- Event booking
- Catering requests
- Schedule/route planning
- Staff task lists
- Prep checklists
- Customer/event history
- Private event deposits

POS handles:

- Menu checkout
- On-site orders
- Receipts
- Tips
- Sales tax
- Refunds

RetailOS later handles:

- Ingredient inventory
- Menu cost tracking
- Vendor purchasing
- Multi-truck reporting
- Stock forecasting

Food truck is more POS-heavy than many service modules, so provider choice and real-time checkout needs should be validated before deciding how much POS belongs inside ServicesOS.

---

## 4. Cleaning Company Selling Supplies

```text
Primary anchor:
ServicesOS Cleaning Module

Add-on:
POS / material sale capability

Future linkage:
RetailOS if product sales become meaningful
```

ServicesOS handles leads, quotes, cleaning jobs, recurring service, employee checklists, customer portal, and service inventory usage.

POS/material sale capability may handle cleaning product sales, starter kits, replacement supplies, and receipts.

RetailOS later handles product catalog depth, supplier orders, stock management, and margin reporting.

---

## 5. Lawn Care / Landscaping

```text
Primary anchor:
ServicesOS Lawn Care Module

Add-on:
Material billing / optional POS

Future linkage:
RetailOS if material/product resale grows
```

ServicesOS handles quotes, routes, jobs, recurring mowing, seasonal services, crews, and checklists.

Material billing may handle mulch, seed, fertilizer, parts, and customer add-ons.

RetailOS later handles bulk material inventory, supplier pricing, seasonal stock reporting, and product resale reporting.

---

## 6. Handyman

```text
Primary anchor:
ServicesOS Handyman Module

Add-on:
Job material billing / optional POS

Future linkage:
RetailOS if parts catalog grows
```

ServicesOS handles job requests, quotes, scheduling, assignments, tasks, completion tracking, and customer history.

Material billing may handle parts, materials, customer-purchased hardware, add-ons, and markup.

RetailOS later handles parts catalogs, supplier orders, truck inventory, and margin tracking.

---

## 7. Window Cleaning / Pressure Washing / Carpet Cleaning

```text
Primary anchor:
ServicesOS specialized service module

Add-on:
Optional POS/payment-provider integration

Future linkage:
RetailOS only if meaningful product sales grow
```

ServicesOS handles quotes, jobs, routes, checklists, employee assignments, and recurring service.

POS may handle treatments, protectants, upsells, and customer add-ons.

---

## 8. Card Shop

```text
Primary anchor:
RetailOS

Related product:
GrowthAI

Optional:
ServicesOS for events or paid service workflows
```

RetailOS owns POS, inventory, buy/sell/trade, product catalog, and pricing.

ServicesOS may help with event booking, tournament scheduling, coaching, repairs, or paid appointments.

---

## 9. Pharmacy / Retail Pharmacy

```text
Primary anchor:
RetailOS + PharmacyOS

Related product:
ComplianceAI

Optional:
ServicesOS for appointments and service workflows
```

RetailOS handles front-store POS/inventory/sales/returns. PharmacyOS handles pharmacy task and patient-service workflows. ComplianceAI handles regulated evidence and lifecycle controls. ServicesOS may help with vaccination appointments, consultations, delivery tasks, and service scheduling.

---

## 10. Training-Heavy Service Businesses

```text
Primary anchor:
ServicesOS

Related product:
EducationOS
```

ServicesOS owns customers, jobs, scheduling, employees, and operations. EducationOS owns training modules, quizzes, SOP completion, and learning progress.

---

## 11. Multi-Location Operator

```text
Primary anchor:
Depends on main workflow

Possible bundle:
ServicesOS + payment/POS integration + RetailOS + ComplianceAI + GrowthAI
```

Multi-location complexity should remain modular rather than becoming one overbuilt product.

---

## Future Bundle Examples

```text
Laundry / Laundromat:
ServicesOS Laundry + provider/POS integration + optional RetailOS

Barbershop:
ServicesOS Barber + provider/POS integration + optional RetailOS

Food Truck:
ServicesOS Food Truck + POS + optional RetailOS

Cleaning Growth:
ServicesOS Cleaning + GrowthAI + optional EducationOS

Pharmacy Operations:
RetailOS + PharmacyOS + ComplianceAI + optional ServicesOS appointments
```

---

## Build Boundary

This index is for future planning and architecture only.

Current priority remains:

1. ServicesOS V1 / cleaning beta
2. Wife beta testing
3. Beta-critical fixes
4. UI hardening
5. Stripe / Stripe Connect stability
6. Customer-ready V1 release
7. SLAI Web sequence
8. Then later ServicesOS V2 / vertical expansion when Jamie explicitly promotes it

```text
Do not convert Square support, laundromat, barbershop, POS, or other future vertical ideas into current V1 implementation work.
```
