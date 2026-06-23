# ServicesOS Folder Structure

## Purpose

ServicesOS is not designed to support only cleaning companies.

ServicesOS is a service business platform.

Cleaning is the first vertical.

Future verticals should activate modules on top of the same platform.

The folder structure must support:

* Multiple verticals
* Shared code
* Web app
* Employee app
* Shared business logic
* Shared schemas
* AI integrations
* Future expansion

---

# Root Structure

```text
SLAI_REAL

├── Planning

│   ├── ServicesOS

│   └── SLAIOS


├── ServicesOS

│   ├── web-app

│   ├── employee-app

│   ├── shared

│   ├── cloud-functions

│   ├── tests

│   └── docs


├── AntiCheatOS

├── FPSCoach

├── RetailOS

└── SLAIOS
```

---

# ServicesOS Structure

```text
ServicesOS

├── web-app

├── employee-app

├── shared

├── cloud-functions

├── tests

└── docs
```

---

# web-app

Purpose:

Customer facing business management dashboard.

Contains:

```text
web-app

└── src

    ├── core

    ├── modules

    ├── shared

    ├── components

    ├── hooks

    ├── contexts

    ├── services

    ├── pages

    ├── config

    └── assets
```

---

## core

Contains shared features.

Never place vertical specific code here.

Features:

* Customers
* Leads
* Estimates Engine
* Contracts
* Scheduling
* Employees
* Payments
* Reviews
* Messaging
* Notifications
* Training Framework
* Dashboard Framework
* Time Tracking
* Photos
* Permissions

---

## modules

Contains verticals.

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

Each module contains:

```text
module.config.js

estimateFields.js

serviceTypes.js

pricingRules.js

checklistTemplates.js

trainingModules.js

dashboardWidgets.js

jobRequirements.js
```

---

## shared

Shared UI and helpers.

Examples:

```text
Buttons

Tables

Modals

Loading Components

Date Helpers

Currency Helpers

Validation

Image Compression
```

---

## contexts

React Contexts.

Examples:

```text
AuthContext

TenantContext

ModuleContext

NotificationContext

ThemeContext
```

---

## services

Business logic.

Examples:

```text
customerService

leadService

estimateService

contractService

paymentService

employeeService

photoService

trainingService

messagingService
```

---

# employee-app

Purpose:

Mobile application for employees.

Structure:

```text
employee-app

└── src

    ├── core

    ├── modules

    ├── shared

    ├── screens

    ├── contexts

    ├── services

    ├── navigation

    └── assets
```

---

## employee-app core

Shared employee features.

Examples:

```text
Authentication

Today's Jobs

Job Details

Photos

Checklist

Time Tracking

Messaging

Training

Notifications

Payments

Settings
```

---

## employee-app modules

Vertical specific employee workflows.

Examples:

Cleaning:

```text
Bathroom Checklist

Kitchen Checklist

Pet Notes

Move Out Checklist
```

Lawn Care:

```text
Yard Measurements

Chemical Tracking

Equipment Checklist
```

Window Cleaning:

```text
Window Count

Ladder Safety

Exterior Checklist
```

---

# shared folder

Purpose:

Used by BOTH web-app and employee-app.

Structure:

```text
shared

├── schemas

├── permissions

├── constants

├── utilities

├── validators

└── verticals
```

---

## schemas

Shared Firestore models.

Examples:

```text
Customer

Lead

Estimate

Contract

Employee

Job

Review

Message

Training

Tenant

Subscription
```

---

## permissions

Permission system.

Examples:

```text
Founder

Super Admin

Admin

Manager

Employee

Customer
```

---

## verticals

Module registration.

Example:

```javascript
cleaning

lawnCare

windowCleaning

carpetCleaning

junkRemoval
```

The system loads enabled modules automatically.

---

# cloud-functions

Purpose:

Backend APIs.

Examples:

```text
Stripe

Twilio

AI

Notifications

Email

Scheduled Jobs

Data Cleanup

Reports
```

---

# tests

Purpose:

Centralized testing.

Structure:

```text
tests

├── web-app

├── employee-app

├── cloud-functions

├── smoke

├── integration

└── e2e
```

---

# docs

Purpose:

Technical documentation.

Examples:

```text
Architecture

Database Schema

API Documentation

Permissions

Module Development

Deployment

Security

Testing
```

---

# Golden Rule

Never ask:

```text
How does cleaning do this?
```

Ask:

```text
How does ServicesOS do this?

What changes for cleaning?
```

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

Customer Configurations

↓

AI Assisted Operations

↓

Industry Agnostic Service Business Platform
```

Cleaning proves the platform.

Future industries activate modules.

Build once.

Reuse forever.
