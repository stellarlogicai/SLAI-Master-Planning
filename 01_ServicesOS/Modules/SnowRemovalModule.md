# ServicesOS Snow Removal Module

## Purpose

The Snow Removal Module is a future ServicesOS vertical module.

It should reuse the ServicesOS Core Platform and only add the industry-specific workflows, fields, checklists, pricing logic, training, and dashboard widgets needed for snow removal businesses.

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

- Weather-triggered jobs
- Property type
- Driveway/sidewalk details
- Salt/de-icer tracking
- Seasonal contracts
- Urgency levels
- Route priority
- Before/after proof

---

# Service Types

```javascript
export const serviceTypes = ['driveway_plow', 'sidewalk_shovel', 'salt_application', 'commercial_lot', 'seasonal_contract', 'emergency_clear'];
```

---

# Module Config Example

```javascript
export const moduleConfig = {
  id: "snow-removal",
  name: "Snow Removal",
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
const snowRemovalJobDetails = {
  tenantId: "tenant_abc",
  jobId: "job_001",
  moduleId: "snow-removal",

  propertyType: "residential",
  drivewaySize: "medium",
  sidewalksIncluded: true,
  saltApplication: true,

  triggerDepthInches: 2,
  urgency: "normal",
  seasonalContract: true,

  weatherTriggered: true,

  schemaVersion: 1
};
```

---

# Primary Workflow

```text
Customer signs seasonal or one-time service → weather event triggers job → route created → crew assigned → snow cleared/salt applied → photos optional → invoice/payment handled.
```

---

# Dashboard Widgets

Suggested dashboard widgets:

- Weather Triggered Jobs
- Route Priority
- Salt Usage
- Seasonal Contracts
- Emergency Requests
- Completed Storm Jobs

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
