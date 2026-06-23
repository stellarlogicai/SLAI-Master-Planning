# ServicesOS Lawn Care Module

## Purpose

The Lawn Care Module is a future ServicesOS vertical module.

It should reuse the ServicesOS Core Platform and only add the industry-specific workflows, fields, checklists, pricing logic, training, and dashboard widgets needed for lawn care businesses.

Core rule:

```text
Core owns the business system.
The module customizes the workflow.
```

Do not build this module until the Cleaning module is launched, tested, and stable.

---

# Core Services Reused

This module should reuse:

```text
core/customers
core/leads
core/estimates
core/contracts
core/scheduling
core/employees
core/payments
core/photos
core/reviews
core/messaging
core/notifications
core/dashboard
core/permissions
core/training
core/time-tracking
```

The module should not duplicate core systems.

---
# Module Adds

This module adds:

- Yard size and property measurements
- Mowing frequency
- Seasonal recurring scheduling
- Fertilizer and treatment tracking
- Gate/fence/access notes
- Weather delay handling
- Equipment checklist
- Route/map importance
- Before/after photos for premium work

---

# Service Types

```javascript
export const serviceTypes = ['mowing', 'edging', 'weed_eating', 'leaf_cleanup', 'fertilizer', 'aeration', 'mulch_install', 'hedge_trimming'];
```

---

# Module Config Example

```javascript
export const moduleConfig = {
  id: "lawn-care",
  name: "Lawn Care",
  moduleType: "servicesos_vertical",

  enabledFeatures: [
    "customers",
    "leads",
    "estimates",
    "contracts",
    "scheduling",
    "employees",
    "payments",
    "photos",
    "reviews",
    "messaging",
    "notifications",
    "dashboard",
    "training",
    "time_tracking"
  ],

  serviceTypes,
  supportsMobileEmployeeApp: true,
  supportsAddOns: true,
  supportsTips: true,
  supportsBeforeAfterPhotos: true
};
```

---

# Industry-Specific Schema

```javascript
const lawnCareJobDetails = {
  tenantId: "tenant_abc",
  jobId: "job_001",
  moduleId: "lawn-care",

  yardSize: "medium",
  mowingFrequency: "weekly",
  fencedYard: true,
  gateCode: "1234",
  petsOutside: false,

  services: ["mowing", "edging", "weed_eating"],
  equipmentRequired: ["mower", "trimmer", "blower"],

  weatherSensitive: true,
  estimatedDurationMinutes: 75,

  schemaVersion: 1
};
```

---

# Primary Workflow

```text
Customer requests lawn service → property details entered → estimate generated → recurring schedule created → crew assigned → employee opens job → completes equipment checklist → completes yard work → photos optional → payment collected.
```

---

# Dashboard Widgets

Suggested dashboard widgets:

- Jobs Today
- Recurring Lawn Routes
- Weather Delays
- Crew Workload
- Equipment Needed
- Revenue by Service Type

---

# Employee App Changes

The employee app should reuse the core employee workflow:

```text
Login
↓
Today's Jobs
↓
Job Details
↓
Checklist
↓
Photos
↓
Time Tracking
↓
Add-ons
↓
Payment / Tip
↓
Complete Job
```

This module should only change:

- Job detail fields
- Checklist templates
- Required equipment
- Photo requirements
- Safety requirements
- Pricing/add-on options

---

# Add-On Examples

```javascript
export const moduleAddOns = [
  {
    id: "extra_service",
    name: "Extra Service",
    price: 25,
    durationIncreaseMinutes: 30,
    managerApprovalRequired: false
  },
  {
    id: "premium_service",
    name: "Premium Service",
    price: 75,
    durationIncreaseMinutes: 60,
    managerApprovalRequired: true
  }
];
```

Rule:

```text
Employees can select approved add-ons.
Custom pricing requires manager approval.
```

---

# Permissions

```javascript
export const modulePermissions = {
  owner: ["manage_module", "manage_pricing", "view_reports"],
  manager: ["schedule_jobs", "assign_employees", "approve_addons"],
  employee: ["view_assigned_jobs", "complete_checklists", "upload_photos", "collect_payment"],
  customer: ["view_estimate", "approve_work", "make_payment"]
};
```

---

# Events

This module should use the core event bus:

```javascript
eventBus.emit("MODULE_JOB_CREATED", job);
eventBus.emit("MODULE_JOB_COMPLETED", job);
eventBus.emit("MODULE_ADDON_ADDED", addOn);
eventBus.emit("MODULE_PAYMENT_COLLECTED", payment);
```

Core systems can listen without the module directly controlling them.

---

# Module Isolation Tests

This module must pass:

```text
Disable module → Core customers still work
Disable module → Core scheduling still works
Disable module → Core payments still work
Enable module → Module fields appear
Enable module → Module checklist appears
Enable module → Module dashboard widgets appear
```

---

# Build Order

## Phase 1: Documentation Only

- Keep this module as planning only.
- Do not build until Cleaning launches and stabilizes.

## Phase 2: Module Registration

- Add module folder.
- Add module config.
- Add service types.
- Add dashboard widgets.
- Add permissions.

## Phase 3: Estimate + Job Fields

- Add industry fields.
- Add pricing rules.
- Add add-ons.

## Phase 4: Employee Workflow

- Add checklist templates.
- Add photo requirements.
- Add equipment/safety fields.
- Test mobile workflow.

## Phase 5: Payments + Reporting

- Add module-specific reporting.
- Reuse core payments, tips, and add-ons.
- Add customer receipt details.

---

# Do Not Build First

Do not build these until real users request them:

- Advanced AI optimization
- Complex payroll
- Multi-location enterprise tools
- Deep analytics
- Automated marketing
- Full inventory automation

---

# Final Rule

This module should prove ServicesOS can expand by configuration and module logic, not by rewriting the whole app.

```text
Build core once.
Customize by module.
Launch one vertical at a time.
```
