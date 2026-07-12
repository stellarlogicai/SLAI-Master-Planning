# SLAI Cross-Product Linking Principles

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one until beta-critical workflows are stable.  
**Purpose:** Define how SLAI products can stand alone while remaining linkable when workflows overlap.

---

## Core Principle

SLAI products should be modular, linkable, tenant-aware, and workflow-owned.

```text
Every SLAI product should be able to stand alone.
Related SLAI products should be linkable through shared core data when workflows naturally overlap.
```

Do not merge products too early. Do design them so they can connect later.

---

## Linkable From the Start

The purpose of cross-product linking is not to build every product at once. The purpose is to prevent future products from becoming isolated systems that must be forced together after they are already complete.

```text
Build simple products now.
Use shared identifiers and clean events from the start.
Add modules later without rebuilding the foundation.
```

This makes future add-ons easier because ServicesOS, GrowthAI, SLAI OS, RetailOS, EducationOS, and ComplianceAI can connect through the same core identifiers instead of each product inventing its own customer, tenant, employee, payment, and analytics models.

Core identifiers that should remain clean across SLAI products:

- `tenantId`
- `locationId`
- `customerId`
- `employeeId`
- `userId`
- `paymentId`
- `invoiceId`
- `receiptId`
- `inventoryItemId`
- `auditLogId`
- `module`
- `source`
- `eventType`

This is the difference between an ecosystem and a pile of disconnected apps.

---

## Main Workflow Ownership Rule

When a business overlaps multiple categories, the product that owns the main workflow should remain the anchor.

```text
Start with the product that owns the main workflow.
Add POS as a module when the business sells directly to customers.
Promote to RetailOS only when retail complexity becomes large enough.
Keep everything linkable through SLAI Core.
```

This avoids creating disconnected apps while also preventing early overbuilding.

---

## Shared SLAI Core Data

Future SLAI Core should make it possible for a business to activate multiple modules without duplicating foundational data.

Shared foundations:

- Tenant / business account
- Locations
- Customers
- Employees / staff / contractors
- Roles and permissions
- Payments
- Invoices and receipts
- Inventory foundations
- Notifications
- Files and documents
- Audit logs
- Analytics
- AI assistant context

The goal is not one giant product. The goal is a shared operating backbone with focused workflow modules.

---

## Product-Specific Ownership

### ServicesOS owns service operations

Examples:

- Leads
- Quotes / estimates
- Jobs / service orders
- Scheduling
- Route/task assignment
- Employee checklists
- Service completion
- Recurring service
- Customer service history
- Service inventory usage

### POS Add-On owns direct checkout

Examples:

- Product catalog
- Cart
- Checkout
- Sales tax
- Receipts
- Tips
- Refunds
- Counter sales
- End-of-day summary

### RetailOS owns deeper retail operations

Examples:

- Large product catalog
- SKU/barcode inventory
- Register sessions
- Stock adjustments
- Supplier/vendor purchasing
- Product margins
- Returns/exchanges
- Multi-location retail reporting

### EducationOS owns structured training and learning

Examples:

- Training modules
- Slideshows
- Quizzes
- Employee learning progress
- Certification-style completion
- Company-specific training content

### GrowthAI owns customer acquisition and growth workflows

Examples:

- Lead discovery
- Lead research
- Outreach drafts
- Follow-up recommendations
- Referral tracking
- Growth analytics

### ComplianceAI owns rules, audits, lifecycle, and evidence

Examples:

- Compliance tasks
- Outdate management
- Temperature monitoring
- Audit trails
- Rule-based workflows
- Lifecycle tracking
- Evidence storage

### PharmacyOS owns pharmacy-specific operations

Examples:

- Prescription workflow support
- Pharmacy task queues
- Regulated item workflows
- Patient-facing service operations
- Pharmacy-specific compliance needs

### SLAI OS owns internal command and coordination

Examples:

- Founder dashboard
- Internal tasks
- Product status
- Developer handoffs
- Company memory
- Incident tracking
- Customer/beta feedback routing
- Cross-product alerts
- Strategic planning context

SLAI OS should not replace the individual products. It should become the command layer that can see across them.

---

## Add-On Expansion Advantage: GrowthAI and SLAI OS

Linkable systems make future add-ons easier because each product can plug into real operational data instead of starting from scratch.

### Without linkable systems

```text
Build ServicesOS.
Build GrowthAI separately.
Build SLAI OS separately.
Later try to force them to talk.
Result: duplicate customers, duplicate permissions, duplicate billing, messy migrations, and disconnected analytics.
```

### With linkable systems

```text
Build ServicesOS cleanly.
Use shared tenant/customer/employee/payment IDs.
Expose clean operational events.
Later plug GrowthAI into the same business/customer data.
Later plug SLAI OS into the same operational command layer.
Result: add-ons become easier, cleaner, and cheaper to build.
```

### GrowthAI example

ServicesOS creates real operating data:

- Customers
- Leads
- Quotes
- Lost leads
- Approved jobs
- Completed jobs
- Recurring services
- Reviews
- Customer value
- Service frequency
- Service geography
- Follow-up history

GrowthAI can later use that data to answer practical business questions:

- Which leads went cold?
- Which customers should be followed up with?
- Which customers are likely to refer someone?
- Which service types sell best?
- Which neighborhoods or job types are most profitable?
- Which customers are overdue for repeat service?
- Which businesses should be targeted next?

This means GrowthAI becomes a growth intelligence layer on top of real operating data instead of a generic marketing tool.

### SLAI OS example

SLAI OS can become the internal command center when products emit clean events and share core identifiers.

SLAI OS could surface:

- ServicesOS beta issues
- GrowthAI lead opportunities
- EducationOS training gaps
- ComplianceAI audit tasks
- RetailOS inventory warnings
- Customer feedback trends
- Developer blockers
- Revenue signals
- Product health metrics

Example future command view:

```text
ServicesOS:
3 quote requests pending owner review

GrowthAI:
5 cold leads ready for follow-up

EducationOS:
2 cleaners have not completed chemical safety training

ComplianceAI:
1 outdate task overdue

RetailOS/POS:
Low stock on detergent
```

This is why the shared foundation matters. SLAI OS becomes the company brain only if the products emit usable linked data.

---

## Events as a Future Linking Layer

In addition to shared IDs, SLAI products should eventually emit clean events.

Example events:

- `lead.created`
- `quote.requested`
- `quote.approved`
- `job.scheduled`
- `job.completed`
- `payment.received`
- `inventory.low_stock`
- `training.completed`
- `compliance.task_overdue`
- `customer.feedback_received`
- `growth.followup_recommended`

These events allow future products to react without tightly coupling every codebase together.

Example:

```text
ServicesOS emits job.completed.
GrowthAI can suggest review request or referral follow-up.
SLAI OS can show completed revenue and customer status.
EducationOS can detect if the assigned employee needs more training.
```

The event layer should come later. The design principle should exist from the start.

---

## Service Inventory vs Retail Inventory

This is a key distinction across all SLAI products.

```text
Service inventory = supplies used to complete jobs/orders.
Retail inventory = products sold directly to customers.
```

Examples:

```text
Detergent used for wash-and-fold = ServicesOS inventory.
Detergent sold at counter = POS/Retail inventory.

Cleaning chemicals used on a job = ServicesOS inventory.
Cleaning product sold to a customer = POS/Retail inventory.

Mower part used for a repair = ServicesOS job material.
Mower part sold over the counter = POS/Retail inventory.
```

A business may need both views, but they should not be confused.

---

## POS Add-On vs RetailOS

The POS add-on should be treated as the light retail layer.

Use POS add-on when the business primarily sells services but also has direct checkout needs.

Use RetailOS when retail becomes a major operating system on its own.

### POS Add-On is enough when the business needs

- Simple product catalog
- Cart/checkout
- Receipts
- Tips
- Sales tax
- Refunds
- Basic daily sales summary

### RetailOS becomes justified when the business needs

- Barcode-heavy workflows
- Large catalog
- Supplier purchasing
- Advanced margin tracking
- Multi-location reporting
- Register sessions and cash drawer workflows
- Retail analytics
- Complex stock transfers

---

## Cross-Product Examples

### Laundromat / Laundry

```text
Anchor:
ServicesOS Laundry Module

Add-on:
POS Add-On

RetailOS later:
If detergent/vending/machine/counter sales become a full retail operation
```

ServicesOS handles wash-and-fold, pickup/delivery, customer preferences, employee checklists, and order tracking.

POS handles detergent sales, vending items, counter checkout, receipts, refunds, and tips.

RetailOS may later handle machine revenue, advanced retail inventory, supplier purchasing, and multi-location reporting.

---

### Barbershop

```text
Anchor:
ServicesOS Barbershop Module

Add-on:
POS Add-On

RetailOS later:
If product sales, supplier tracking, and multi-chair retail reporting grow
```

ServicesOS handles appointments, barber schedules, recurring clients, deposits, reminders, and service history.

POS handles hair products, beard oil, shampoo, merch, walk-in checkout, tips, and receipts.

RetailOS may later handle product catalog depth, barcode scanning, supplier orders, margins, and retail reports.

---

### Food Truck

```text
Anchor:
ServicesOS Food Truck Module

Add-on:
POS Add-On

RetailOS later:
If menu/product inventory and multi-truck reporting become complex
```

ServicesOS handles event booking, catering requests, route/schedule, staff tasks, prep checklists, and customer/event history.

POS handles menu checkout, on-site orders, receipts, tips, and sales tax.

RetailOS may later handle ingredient inventory, menu cost tracking, vendor purchasing, and multi-truck reporting.

---

### Cleaning Company Selling Supplies

```text
Anchor:
ServicesOS Cleaning Module

Add-on:
POS Add-On

RetailOS later:
If product sales become a meaningful revenue line
```

ServicesOS handles quotes, cleaning jobs, recurring service, employees, customer portal, and service inventory.

POS handles direct sale of cleaning products, starter kits, replacement items, and customer add-ons.

RetailOS may later handle product catalog, stock, margins, and supplier orders.

---

### Lawn Care / Landscaping

```text
Anchor:
ServicesOS Lawn Care Module

Add-on:
POS Add-On or material billing

RetailOS later:
If bulk materials/product resale becomes significant
```

ServicesOS handles quotes, routes, jobs, recurring mowing, crews, checklists, and seasonal scheduling.

POS/material billing handles mulch, seed, fertilizer, parts, and customer add-ons.

RetailOS may later handle bulk material inventory, supplier pricing, and seasonal stock reporting.

---

### Handyman

```text
Anchor:
ServicesOS Handyman Module

Add-on:
POS Add-On or job material billing

RetailOS later:
If parts/product catalog becomes large enough
```

ServicesOS handles job requests, quotes, scheduling, task tracking, contractors, and completion records.

POS/material billing handles parts, materials, customer-purchased hardware, and add-on items.

RetailOS may later handle truck inventory, supplier orders, product margins, and parts catalog.

---

### Window Cleaning / Pressure Washing / Carpet Cleaning

```text
Anchor:
ServicesOS specialized service module

Add-on:
Optional POS Add-On

RetailOS later:
Only if product/treatment sales grow
```

ServicesOS handles quotes, jobs, routes, checklists, recurring service, and employee work.

POS can handle upsells, treatments, protectants, and small customer add-ons.

RetailOS is only needed if the business develops meaningful product sales.

---

### Card Shop

```text
Anchor:
RetailOS

Related:
GrowthAI

Optional:
ServicesOS for events, paid services, or tournaments
```

RetailOS handles POS, inventory, buy/sell/trade, product catalog, and pricing.

GrowthAI can handle customer outreach, events, promotions, and lead generation.

ServicesOS may be useful if the shop runs events, tournaments, coaching sessions, repairs, or scheduled services.

---

### Pharmacy / Retail Pharmacy

```text
Anchor:
RetailOS + PharmacyOS

Related:
ComplianceAI

Optional:
ServicesOS for appointments and delivery/service workflows
```

RetailOS handles front-store POS, inventory, sales, and returns.

PharmacyOS handles pharmacy-specific workflows and task queues.

ComplianceAI handles outdates, temperature logs, audit trails, regulated workflows, and evidence.

ServicesOS may support vaccinations, consultations, delivery tasks, or scheduled patient services.

---

### Training-Heavy Service Business

```text
Anchor:
ServicesOS

Related:
EducationOS
```

ServicesOS handles customers, jobs, schedules, employees, and service operations.

EducationOS handles training modules, quizzes, onboarding, compliance training, and employee progress.

This applies to cleaning companies, pharmacies, field service teams, food trucks, and other businesses with repeatable SOPs.

---

### Multi-Location Operator

```text
Anchor:
Depends on primary workflow

Likely bundle:
ServicesOS + POS Add-On + RetailOS + ComplianceAI + GrowthAI
```

A multi-location operator may need service operations, counter sales, inventory, compliance tracking, customer acquisition, and analytics.

This should be modular, not a single overbuilt app.

---

## Bundling Philosophy

Bundles should be built around real operational overlap.

Possible future bundle types:

- ServicesOS base module
- POS add-on
- Advanced inventory add-on
- Commercial account add-on
- RetailOS advanced module
- EducationOS training add-on
- ComplianceAI audit/rules add-on
- GrowthAI acquisition add-on
- SLAI OS internal command layer

Pricing should be fair and small-business friendly. Exact pricing should be decided later, after ServicesOS beta and real usage data.

---

## Build Boundary

This architecture should guide future design, but it must not distract from the active ServicesOS beta path.

Current priority remains:

1. Stabilize ServicesOS cleaning beta
2. Complete wife beta testing
3. Fix UI and workflow blockers
4. Stabilize payments/Stripe
5. Only then revisit future modules and cross-product linking

```text
Future planning only.
Do not convert into active build work until Jamie explicitly promotes it.
```
