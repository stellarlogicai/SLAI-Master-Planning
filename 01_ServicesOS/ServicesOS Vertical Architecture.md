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
