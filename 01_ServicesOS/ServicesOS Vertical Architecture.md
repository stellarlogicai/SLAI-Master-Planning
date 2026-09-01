# ServicesOS Vertical Architecture

## Purpose

ServicesOS is NOT cleaning software.

ServicesOS is a **service business platform**.

Cleaning is simply the first vertical module.

The goal of this architecture is:

* Reuse as much code as possible
* Allow rapid expansion into adjacent service industries
* Keep business logic centralized
* Prevent hardcoded cleaning workflows throughout the app
* Enable new industries through configuration instead of rewrites

---

# Core Philosophy

```text
ServicesOS

=

Core Platform

+

Vertical Modules
```

The Core Platform contains features every service business needs.

Vertical Modules contain only what makes that industry unique.

---

# Folder Structure

```text
ServicesOS

├── web-app

│   └── src

│       ├── core

│       ├── modules

│       ├── shared

│       └── config


├── employee-app

│   └── src

│       ├── core

│       ├── modules

│       ├── shared

│       └── config


├── shared

│   ├── schemas

│   ├── permissions

│   ├── verticals

│   └── constants


└── cloud-functions
```

---

# Core Platform

The Core Platform contains features shared by ALL service businesses.

Core features:

* Customers
* Leads
* Estimates
* Contracts
* Scheduling
* Employees
* Payments
* Photos
* Reviews
* Training
* Messaging
* Time Tracking
* Notifications
* Dashboard
* Permissions
* Stripe Integration

These features should never belong to a specific vertical.

---

# Vertical Modules

Each vertical modifies the application through:

* Estimate fields
* Checklist templates
* Training content
* Pricing rules
* Service types
* Dashboard widgets
* Job requirements

Folder layout:

```text
modules

├── cleaning

├── lawn-care

├── carpet-cleaning

├── window-cleaning

├── pressure-washing

├── junk-removal

├── handyman

└── snow-removal
```

---

# Cleaning Module

Adds:

* Room-based estimates
* Kitchen/bathroom checklists
* Pet notes
* Access notes
* Before/after photos
* Deep cleaning
* Move-out cleaning
* Chemical safety training

Example:

```javascript
{
  bedrooms: 3,
  bathrooms: 2,
  pets: true,
  serviceType: "deep_clean"
}
```

---

# Lawn Care Module

Adds:

* Yard size
* Mowing frequency
* Fertilizer options
* Fence and gate notes
* Seasonal scheduling
* Weather awareness

Example:

```javascript
{
  yardSize: "medium",
  mowingFrequency: "weekly",
  fencedYard: true,
  fertilizerRequested: false
}
```

---

# Window Cleaning Module

Adds:

* Interior/exterior windows
* Window count
* Ladder requirements
* Second story flag
* Weather delays
* Photo proof

Example:

```javascript
{
  windowCount: 24,
  exteriorOnly: false,
  secondStory: true,
  ladderRequired: true
}
```

---

# Carpet Cleaning Module

Adds:

* Room count
* Stain treatment
* Pet odor treatment
* Equipment tracking
* Dry time notes

Example:

```javascript
{
  roomCount: 4,
  stainTreatment: true,
  petOdorTreatment: true
}
```

---

# Junk Removal Module

Adds:

* Truck size
* Item photos
* Heavy item warnings
* Dump fee estimates
* Crew size

Example:

```javascript
{
  truckLoad: "half",
  heavyItems: true,
  dumpFeeEstimate: 45
}
```

---

# Module Configuration

Every module should expose:

```text
module.config.js

estimateFields.js

checklistTemplates.js

trainingModules.js

serviceTypes.js

pricingRules.js

jobRequirements.js

dashboardWidgets.js
```

---

Example:

```javascript
export const cleaningModule = {

  id: "cleaning",

  name: "Cleaning",

  enabledFeatures: [

    "room_estimates",

    "cleaning_checklists",

    "pet_notes",

    "before_after_photos",

    "training"

  ],

  serviceTypes: [

    "standard_clean",

    "deep_clean",

    "move_out_clean",

    "recurring_clean"

  ],

  estimateFields: [

    "bedrooms",

    "bathrooms",

    "pets",

    "squareFeet",

    "difficulty"

  ]

};
```

---

# Company Module Settings

A company chooses active modules.

Example:

```javascript
company.verticals = [

"cleaning"

];

company.activeModules = {

cleaning: true,

lawnCare: false,

windowCleaning: false

};
```

---

# Dynamic UI Rules

NEVER hardcode:

```javascript
if(cleaning)

showBathroomFields();
```

Instead:

```javascript
const activeModule =

getActiveModule(

company.vertical

);

const fields =

activeModule

.estimateFields;

const checklists =

activeModule

.checklistTemplates;

const services =

activeModule

.serviceTypes;
```

The UI should automatically adapt to the active module.

---

# Expansion Strategy

Step 1

Win Cleaning.

---

Step 2

Move to the easiest adjacent vertical.

Likely:

* Carpet Cleaning
* Window Cleaning
* Lawn Care

---

Step 3

Measure code reuse.

Example:

Cleaning → Carpet

95%

Cleaning → Window

90%

Cleaning → Lawn

85%

Cleaning → Handyman

70%

---

Step 4

Launch one vertical at a time.

DO NOT:

Launch five industries simultaneously.

---

# Long Term Vision

ServicesOS should eventually become:

```text
ServicesOS

↓

Core Platform

↓

Vertical Modules

↓

Customer Specific Configurations

↓

AI Assisted Operations

↓

Industry Agnostic Service Business Platform
```

Cleaning proves the platform.

Future verticals activate modules.

The goal is:

Build once.

Reuse forever.


---

# Appointment / Barber Vertical

Appointment-driven businesses are a deliberate future test of the vertical architecture because they reuse the ServicesOS core while changing the customer flow.

Shared core:

* Customers
* Staff
* Services
* Scheduling
* Payments
* Messaging
* Reviews
* Repeat-customer history
* GrowthAI / retention opportunities
* Business settings
* Permissions

Barber-specific or appointment-specific additions may include:

* staff/barber availability
* service duration
* staff-specific service/pricing eligibility
* preferred barber
* time off / blocked slots
* appointment buffers
* no-show/cancellation rules
* deposits
* tips
* fast rebooking
* public appointment booking flow

Example:

```text
Customer -> Service -> Barber -> Available Time -> Confirm
                                             ↓
                                      ServicesOS owns
                                      booking truth
```

See `Future-Verticals/appointment-services-barber-salon-flow.md`.

---

# Public Website Integration

ServicesOS may eventually power approved public business information on a connected customer website.

Core architectural rule:

> **ServicesOS owns canonical business data. The website displays approved public data.**

Potential shared fields:

* business name
* logo and brand colors
* contact information
* locations/service area
* hours/holiday hours
* staff profiles
* services
* pricing
* duration
* approved photos
* social links
* booking rules
* availability

A business should update this information once in ServicesOS and publish approved changes to connected surfaces.

Routine example:

```text
Owner updates service price in ServicesOS
↓
Save / Review / Publish
↓
ServicesOS booking uses new price
↓
Connected SLAI website reflects new price
```

The public website remains a separate customer-facing surface.

ServicesOS must continue to work when:

* the customer has no website,
* the customer uses a third-party website,
* the customer leaves SLAI managed-web service.

Future third-party integrations may use a supported API/widget/embed, but the deepest integration can be offered through SLAI-built/managed websites.

See `../02_Website/SLAI_Web_Engine.md`.

---

# Booking Source-of-Truth Rule

For connected booking websites, the website must not hardcode availability as truth.

At final booking:

1. website requests valid slots from ServicesOS,
2. customer selects a slot,
3. ServicesOS re-validates the slot,
4. ServicesOS atomically creates/reserves the appointment,
5. the slot becomes unavailable to other customers,
6. owner/staff see the booking inside ServicesOS.

This prevents double-booking and keeps all customer-facing surfaces aligned with the operating system.
