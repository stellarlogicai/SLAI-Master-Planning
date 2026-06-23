# ServicesOS Future Module Overlap Index

**Status:** Future planning only  
**Active build priority:** ServicesOS cleaning beta remains priority one.  
**Purpose:** Track future ServicesOS modules that may overlap with POS, RetailOS, EducationOS, GrowthAI, ComplianceAI, or other SLAI products.

---

## Guiding Rule

ServicesOS is the service-workflow anchor.

If a future business type sells products directly to customers, start with a POS add-on before splitting into RetailOS.

```text
ServicesOS Module + POS Add-On now.
RetailOS linkage later if retail complexity grows.
```

This keeps early modules simple while preserving the long-term SLAI vision of connected products.

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

### ServicesOS + POS Add-On

Best when the business mainly sells services but also sells products directly.

Examples:

- Laundry / laundromat
- Barbershop
- Food truck
- Cleaning company selling supplies
- Lawn care selling materials
- Handyman billing parts/materials

### ServicesOS + RetailOS Later

Best when the retail side becomes complex enough to justify full RetailOS.

Signals:

- Large product catalog
- Barcode scanning
- Cash drawer/register sessions
- Supplier purchasing
- Multi-location retail reporting
- Product margins
- Stock transfers

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

## Module Map

## 1. Laundry / Laundromat

```text
Primary anchor:
ServicesOS Laundry Module

Add-on:
POS Add-On

Future linkage:
RetailOS if retail complexity grows
```

ServicesOS handles:

- Wash-and-fold orders
- Pickup/delivery
- Drop-off intake
- Customer laundry preferences
- Employee checklist
- Order status tracking
- Commercial laundry accounts
- Recurring laundry service

POS add-on handles:

- Detergent sales
- Fabric softener sales
- Vending items
- Counter checkout
- Receipts
- Refunds
- Tips

RetailOS later handles:

- Advanced product catalog
- Vending inventory
- Machine revenue tracking
- Multi-location retail reporting
- Supplier purchasing

Planning doc:

```text
ServicesOS/FutureModules/Laundry_RetailOS_Bundle.md
```

---

## 2. Barbershop

```text
Primary anchor:
ServicesOS Barbershop Module

Add-on:
POS Add-On

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

POS add-on handles:

- Hair product sales
- Beard oil sales
- Shampoo/conditioner sales
- Merch
- Walk-in checkout
- Receipts
- Product refunds

RetailOS later handles:

- Larger product catalog
- Barcode scanning
- Supplier orders
- Product margins
- Multi-chair / multi-location retail reports

Notes:

Barbershop is one of the cleanest ServicesOS + POS overlaps because it sells both time/service and physical products.

---

## 3. Food Truck

```text
Primary anchor:
ServicesOS Food Truck Module

Add-on:
POS Add-On

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

POS add-on handles:

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

Notes:

Food truck is more POS-heavy than some service modules, but ServicesOS still matters for catering, events, scheduling, and preparation workflows.

---

## 4. Cleaning Company Selling Supplies

```text
Primary anchor:
ServicesOS Cleaning Module

Add-on:
POS Add-On

Future linkage:
RetailOS if product sales become meaningful
```

ServicesOS handles:

- Leads
- Quotes
- Cleaning jobs
- Recurring service
- Employee checklists
- Customer portal
- Service inventory usage

POS add-on handles:

- Cleaning product sales
- Starter kits
- Replacement supplies
- Add-on supply purchases
- Customer receipts

RetailOS later handles:

- Product catalog
- Stock management
- Supplier orders
- Margin reporting

---

## 5. Lawn Care / Landscaping

```text
Primary anchor:
ServicesOS Lawn Care Module

Add-on:
POS Add-On or material billing

Future linkage:
RetailOS if material/product resale grows
```

ServicesOS handles:

- Quotes
- Routes
- Jobs
- Recurring mowing
- Seasonal services
- Crews
- Checklists

POS/material billing handles:

- Mulch
- Seed
- Fertilizer
- Parts
- Customer add-ons

RetailOS later handles:

- Bulk material inventory
- Supplier pricing
- Seasonal stock reporting
- Product resale reporting

---

## 6. Handyman

```text
Primary anchor:
ServicesOS Handyman Module

Add-on:
POS Add-On or job material billing

Future linkage:
RetailOS if parts catalog grows
```

ServicesOS handles:

- Job requests
- Quotes
- Scheduling
- Contractor/employee assignment
- Tasks
- Completion tracking
- Customer history

POS/material billing handles:

- Parts
- Materials
- Customer-purchased hardware
- Add-on items
- Material markup

RetailOS later handles:

- Parts catalog
- Supplier orders
- Truck inventory
- Margin tracking

---

## 7. Window Cleaning / Pressure Washing / Carpet Cleaning

```text
Primary anchor:
ServicesOS specialized service module

Add-on:
Optional POS Add-On

Future linkage:
RetailOS only if product/treatment sales grow
```

ServicesOS handles:

- Quotes
- Jobs
- Routes
- Checklists
- Employee assignments
- Recurring service

POS add-on may handle:

- Upsells
- Treatments
- Protectants
- Customer add-ons

RetailOS is not needed unless the business develops meaningful product sales.

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

RetailOS handles:

- POS
- Inventory
- Buy/sell/trade
- Product catalog
- Pricing

GrowthAI handles:

- Customer outreach
- Events
- Promotions
- Lead generation
- Referral programs

ServicesOS may help with:

- Event booking
- Tournament scheduling
- Coaching sessions
- Repairs/services
- Paid appointments

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

RetailOS handles:

- Front-store POS
- Inventory
- Sales
- Returns

PharmacyOS handles:

- Pharmacy task queues
- Prescription-adjacent workflows
- Patient service operations
- Pharmacy-specific workflow support

ComplianceAI handles:

- Outdates
- Temperature logs
- Audit trails
- Regulated workflow evidence
- Rules and lifecycle tracking

ServicesOS may help with:

- Vaccination appointments
- Consultations
- Delivery tasks
- Patient service scheduling

---

## 10. Training-Heavy Service Businesses

```text
Primary anchor:
ServicesOS

Related product:
EducationOS
```

ServicesOS handles:

- Jobs
- Customers
- Scheduling
- Employees
- Operations

EducationOS handles:

- Training modules
- Slideshows
- Quizzes
- SOP completion
- Employee learning progress
- Company-specific training

Examples:

- Cleaning company
- Pharmacy operations
- Food truck safety training
- Field service teams
- Multi-location service businesses

---

## 11. Multi-Location Operator

```text
Primary anchor:
Depends on main workflow

Likely bundle:
ServicesOS + POS Add-On + RetailOS + ComplianceAI + GrowthAI
```

A multi-location operator may need:

- Service operations
- Counter sales
- Inventory
- Compliance tracking
- Customer acquisition
- Analytics
- Employee training

This should remain modular, not one overbuilt product.

---

## Future Bundle Examples

```text
Laundry / Laundromat Bundle:
ServicesOS Laundry + POS Add-On + optional RetailOS

Barbershop Bundle:
ServicesOS Barber + POS Add-On + optional RetailOS

Food Truck Bundle:
ServicesOS Food Truck + POS Add-On + optional RetailOS

Cleaning Growth Bundle:
ServicesOS Cleaning + GrowthAI + optional EducationOS

Pharmacy Operations Bundle:
RetailOS + PharmacyOS + ComplianceAI + optional ServicesOS appointments
```

---

## Build Boundary

This index is for future planning and architecture only.

Current priority remains:

1. ServicesOS cleaning beta
2. Wife beta testing
3. ServicesOS UI hardening
4. Payments/Stripe stability
5. Then future modules and cross-product linking

```text
Do not convert these ideas into active build work until Jamie explicitly promotes them.
```
