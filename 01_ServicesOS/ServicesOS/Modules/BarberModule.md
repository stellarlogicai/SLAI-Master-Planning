# ServicesOS Barber Module

## Purpose

The Barber Module is a future vertical module for ServicesOS.

It is designed for:

- Independent barbers
- Barbershops
- Small appointment-based grooming businesses
- Multi-chair shops
- Mobile barbers
- Future expansion into salons, nail techs, tattoo shops, massage, and pet grooming

The module should prove that ServicesOS can support more than field-service businesses.

Cleaning proves the platform for job-based service businesses.

Barber proves the platform for appointment-based service businesses.

---

# Core Idea

```text
ServicesOS Core Platform
+
Barber Module
=
Barbershop Operating System
```

Core handles:

- Customers
- Employees
- Scheduling
- Payments
- Photos
- Reviews
- Messaging
- Training
- Dashboard
- Permissions
- Tips
- Notifications
- Reports

Barber Module adds:

- Appointments
- Walk-in queue
- Chair management
- Style profiles
- Haircut history
- Barber preferences
- Commission tracking
- Product sales
- Loyalty rewards
- Barber-specific service menu

---

# Why This Module Makes Sense

A barbershop needs many of the same core systems as cleaning:

```text
Customer
↓
Service
↓
Schedule
↓
Employee
↓
Payment
↓
Tip
↓
Review
↓
Return Customer
```

The difference is the workflow.

Cleaning is usually:

```text
Job-based
Location-based
Checklist-heavy
Photo proof
Travel required
```

Barber is usually:

```text
Appointment-based
Chair-based
Style-history-heavy
Tip-heavy
Repeat-customer-heavy
Walk-in friendly
```

This makes Barber a strong test for the vertical module system.

---

# Folder Structure

Suggested module location:

```text
ServicesOS/
└── web-app/
    └── src/
        └── modules/
            └── barber/
                ├── module.config.js
                ├── serviceTypes.js
                ├── pricingRules.js
                ├── appointmentRules.js
                ├── chairManagement.js
                ├── walkInQueue.js
                ├── styleProfiles.js
                ├── commissionRules.js
                ├── loyaltyRules.js
                ├── dashboardWidgets.js
                ├── trainingModules.js
                └── index.js
```

Employee/mobile app:

```text
ServicesOS/
└── employee-app/
    └── src/
        └── modules/
            └── barber/
                ├── screens/
                │   ├── BarberScheduleScreen.jsx
                │   ├── WalkInQueueScreen.jsx
                │   ├── ClientStyleProfileScreen.jsx
                │   ├── BarberPaymentScreen.jsx
                │   └── CommissionSummaryScreen.jsx
                ├── components/
                ├── services/
                └── module.config.js
```

Shared schemas:

```text
ServicesOS/
└── shared/
    └── verticals/
        └── barber/
            ├── barberSchemas.js
            ├── barberPermissions.js
            └── barberConstants.js
```

---

# Module Configuration

```javascript
export const barberModule = {
  id: "barber",
  name: "Barber",
  displayName: "Barbershop",
  description: "Appointment, walk-in, style profile, chair, tip, and commission management for barbershops.",

  enabledFeatures: [
    "customers",
    "appointments",
    "walk_in_queue",
    "chair_management",
    "style_profiles",
    "photos",
    "payments",
    "tips",
    "reviews",
    "messaging",
    "loyalty",
    "product_sales",
    "commission_tracking",
    "training"
  ],

  serviceTypes: [
    "haircut",
    "beard_trim",
    "haircut_beard_combo",
    "kids_cut",
    "senior_cut",
    "skin_fade",
    "line_up",
    "shampoo",
    "hot_towel_shave",
    "design_work"
  ],

  defaultAppointmentDurationMinutes: 30,

  supportsWalkIns: true,
  supportsTips: true,
  supportsCommission: true,
  supportsProducts: true,
  supportsBeforeAfterPhotos: true
};
```

---

# Core Services Reused

The Barber Module should NOT rebuild these systems.

It should reuse ServicesOS core:

```text
core/customers
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
```

Barber-specific logic should only live in:

```text
modules/barber
```

Golden rule:

```text
Core owns the business system.
Barber customizes the workflow.
```

---

# Main Workflows

## Appointment Workflow

```text
Customer requests appointment
↓
Select service
↓
Select barber
↓
Select time
↓
Appointment created
↓
Reminder sent
↓
Customer arrives
↓
Barber completes service
↓
Payment + tip
↓
Style profile updated
↓
Review request sent
```

## Walk-In Workflow

```text
Customer walks in
↓
Added to queue
↓
Assigned barber or next available
↓
Estimated wait time shown
↓
Customer receives queue position
↓
Barber starts service
↓
Payment + tip
↓
Customer history updated
```

## Repeat Customer Workflow

```text
Customer returns
↓
Barber opens style profile
↓
Views last haircut notes/photos
↓
Confirms same style or changes
↓
Service completed
↓
Updated photos/notes saved
```

---

# Customer Profile Additions

The core customer schema remains shared.

Barber adds a style profile extension.

```javascript
const barberCustomerProfile = {
  customerId: "customer_123",
  tenantId: "tenant_abc",
  moduleId: "barber",

  preferredBarberId: "employee_456",

  styleNotes: {
    general: "Low fade, textured top",
    clipperGuard: "#2 on sides",
    fadeHeight: "mid",
    topLength: "leave 2 inches",
    beardNotes: "short boxed beard",
    lineupNotes: "sharp natural line"
  },

  preferences: {
    likesConversation: true,
    prefersQuietAppointment: false,
    favoriteProductIds: ["product_001"],
    preferredAppointmentTime: "morning"
  },

  photoHistory: [
    {
      photoId: "photo_001",
      type: "after",
      serviceId: "appointment_001",
      uploadedAt: "2026-06-16T00:00:00Z"
    }
  ],

  lastVisitAt: "2026-06-16T00:00:00Z",
  visitCount: 7,
  averageSpend: 38,
  loyaltyPoints: 70,

  schemaVersion: 1
};
```

---

# Appointment Schema

```javascript
const barberAppointment = {
  id: "appointment_001",
  tenantId: "tenant_abc",
  moduleId: "barber",

  customerId: "customer_123",
  barberId: "employee_456",
  chairId: "chair_1",

  serviceType: "haircut_beard_combo",
  serviceName: "Haircut + Beard Trim",

  startTime: "2026-06-16T14:00:00Z",
  endTime: "2026-06-16T14:45:00Z",
  durationMinutes: 45,

  status: "scheduled",
  // scheduled | checked_in | in_progress | completed | cancelled | no_show

  pricing: {
    basePrice: 35,
    addOnsTotal: 5,
    discountTotal: 0,
    tipAmount: 10,
    totalPaid: 50
  },

  notes: "Customer wants same fade as last visit.",
  source: "online_booking",
  schemaVersion: 1,

  createdAt: "2026-06-16T00:00:00Z",
  updatedAt: "2026-06-16T00:00:00Z"
};
```

---

# Walk-In Queue Schema

```javascript
const walkInQueueItem = {
  id: "queue_001",
  tenantId: "tenant_abc",
  moduleId: "barber",

  customerId: "customer_123",
  customerName: "John Smith",

  requestedServiceType: "haircut",
  preferredBarberId: null,

  queuePosition: 2,
  estimatedWaitMinutes: 25,

  status: "waiting",
  // waiting | called | in_chair | completed | left

  checkedInAt: "2026-06-16T15:00:00Z",
  calledAt: null,
  startedAt: null,
  completedAt: null,

  schemaVersion: 1
};
```

---

# Chair Management

Chair management tracks physical barber chairs.

```javascript
const barberChair = {
  id: "chair_1",
  tenantId: "tenant_abc",
  name: "Chair 1",

  assignedBarberId: "employee_456",
  status: "occupied",
  // available | occupied | cleaning | unavailable

  currentAppointmentId: "appointment_001",

  createdAt: "2026-06-16T00:00:00Z",
  updatedAt: "2026-06-16T00:00:00Z"
};
```

Dashboard example:

```text
Chair 1: Mike - Busy - 22 min remaining
Chair 2: Sarah - Available
Chair 3: Cleaning
```

---

# Service Types

```javascript
export const barberServiceTypes = [
  {
    id: "haircut",
    name: "Haircut",
    defaultDurationMinutes: 30,
    defaultPrice: 25,
    allowTips: true,
    photoOptional: true
  },
  {
    id: "beard_trim",
    name: "Beard Trim",
    defaultDurationMinutes: 15,
    defaultPrice: 12,
    allowTips: true,
    photoOptional: true
  },
  {
    id: "haircut_beard_combo",
    name: "Haircut + Beard Trim",
    defaultDurationMinutes: 45,
    defaultPrice: 35,
    allowTips: true,
    photoOptional: true
  },
  {
    id: "design_work",
    name: "Design Work",
    defaultDurationMinutes: 60,
    defaultPrice: 50,
    allowTips: true,
    photoRequired: true
  }
];
```

---

# Pricing Rules

```javascript
export function calculateBarberPrice({ serviceType, addOns = [], discount = 0, tipAmount = 0 }) {
  const baseService = barberServiceTypes.find(service => service.id === serviceType);

  if (!baseService) {
    throw new Error("Invalid barber service type");
  }

  const basePrice = baseService.defaultPrice;

  const addOnsTotal = addOns.reduce((total, addOn) => {
    return total + Number(addOn.price || 0);
  }, 0);

  const subtotal = basePrice + addOnsTotal - discount;
  const total = subtotal + tipAmount;

  return {
    basePrice,
    addOnsTotal,
    discount,
    tipAmount,
    subtotal,
    total
  };
}
```

---

# Add-Ons

Examples:

```javascript
export const barberAddOns = [
  {
    id: "shampoo",
    name: "Shampoo",
    price: 5,
    durationIncreaseMinutes: 10
  },
  {
    id: "hot_towel",
    name: "Hot Towel",
    price: 8,
    durationIncreaseMinutes: 10
  },
  {
    id: "beard_oil",
    name: "Beard Oil Finish",
    price: 4,
    durationIncreaseMinutes: 5
  },
  {
    id: "design_detail",
    name: "Design Detail",
    price: 20,
    durationIncreaseMinutes: 20,
    photoRequired: true
  }
];
```

Rule:

```text
Barbers can select approved add-ons.
Custom prices require manager approval.
```

---

# Tipping

Tips should be stored separately from service revenue.

```javascript
const paymentRecord = {
  appointmentId: "appointment_001",
  tenantId: "tenant_abc",

  baseServiceTotal: 35,
  addOnsTotal: 5,
  taxTotal: 0,
  tipAmount: 10,
  totalPaid: 50,

  paymentMethod: "tap_to_pay",
  barberId: "employee_456",

  tipDistribution: {
    employeeId: "employee_456",
    amount: 10
  },

  createdAt: "2026-06-16T00:00:00Z"
};
```

Benefits:

- Cleaner reporting
- Tip payout tracking
- Commission calculation
- Tax reporting later

---

# Commission Tracking

Different shops may pay barbers differently.

Support basic commission rules.

```javascript
const commissionRule = {
  tenantId: "tenant_abc",
  employeeId: "employee_456",

  type: "percentage",
  serviceCommissionPercent: 50,
  productCommissionPercent: 10,
  tipsPaidDirectly: true,

  active: true,
  schemaVersion: 1
};
```

Commission calculation:

```javascript
function calculateCommission({ serviceTotal, productTotal, tipAmount, rule }) {
  const serviceCommission = serviceTotal * (rule.serviceCommissionPercent / 100);
  const productCommission = productTotal * (rule.productCommissionPercent / 100);

  return {
    serviceCommission,
    productCommission,
    tips: rule.tipsPaidDirectly ? tipAmount : 0,
    totalOwed: serviceCommission + productCommission + (rule.tipsPaidDirectly ? tipAmount : 0)
  };
}
```

---

# Product Sales

Barbershops may sell:

- Pomade
- Beard oil
- Shampoo
- Conditioner
- Brushes
- Gift cards

```javascript
const productSale = {
  tenantId: "tenant_abc",
  appointmentId: "appointment_001",
  employeeId: "employee_456",

  items: [
    {
      productId: "product_001",
      name: "Beard Oil",
      quantity: 1,
      price: 14
    }
  ],

  subtotal: 14,
  employeeCommission: 1.4,
  createdAt: "2026-06-16T00:00:00Z"
};
```

This could later reuse RetailOS inventory systems.

---

# Loyalty Rewards

```javascript
const loyaltyRule = {
  tenantId: "tenant_abc",
  moduleId: "barber",

  pointsPerDollar: 1,
  rewardThreshold: 100,
  rewardValue: 10,

  rewardType: "discount",
  active: true
};
```

Example:

```text
Customer spends $35.
Customer earns 35 points.
At 100 points, customer gets $10 off.
```

---

# Barber Dashboard Widgets

```javascript
export const barberDashboardWidgets = [
  {
    id: "appointments_today",
    name: "Appointments Today",
    type: "count"
  },
  {
    id: "walk_in_queue",
    name: "Walk-In Queue",
    type: "list"
  },
  {
    id: "chair_status",
    name: "Chair Status",
    type: "status_board"
  },
  {
    id: "daily_revenue",
    name: "Daily Revenue",
    type: "currency"
  },
  {
    id: "tips_today",
    name: "Tips Today",
    type: "currency"
  },
  {
    id: "barber_performance",
    name: "Barber Performance",
    type: "table"
  }
];
```

---

# Mobile App Screens

## Barber Schedule Screen

Shows:

- Today's appointments
- Customer name
- Service
- Time
- Barber
- Chair
- Status

## Walk-In Queue Screen

Shows:

- Queue order
- Estimated wait
- Requested service
- Preferred barber if any
- Call next customer

## Style Profile Screen

Shows:

- Last haircut notes
- Photo history
- Preferred barber
- Favorite services
- Product preferences

## Payment Screen

Shows:

- Base service
- Add-ons
- Product sales
- Tip options
- Final total
- Tap to Pay

## Commission Summary Screen

Shows:

- Services completed
- Revenue
- Tips
- Product sales
- Estimated commission

---

# Permissions

```javascript
export const barberPermissions = {
  owner: [
    "manage_barbers",
    "manage_chairs",
    "manage_services",
    "manage_pricing",
    "view_all_commissions",
    "view_reports"
  ],

  manager: [
    "manage_schedule",
    "manage_walkins",
    "edit_appointments",
    "approve_custom_discounts",
    "view_daily_reports"
  ],

  barber: [
    "view_own_schedule",
    "view_customer_style_profiles",
    "update_style_notes",
    "upload_photos",
    "process_payment",
    "view_own_commission"
  ],

  receptionist: [
    "create_appointments",
    "manage_walkins",
    "check_in_customers",
    "message_customers"
  ]
};
```

Rule:

```text
Barbers should only see their own commission unless given manager access.
```

---

# Events

The Barber Module should use the core event bus.

```javascript
eventBus.emit("BARBER_APPOINTMENT_CREATED", appointment);
eventBus.emit("BARBER_APPOINTMENT_COMPLETED", appointment);
eventBus.emit("WALK_IN_ADDED", queueItem);
eventBus.emit("STYLE_PROFILE_UPDATED", profile);
eventBus.emit("TIP_COLLECTED", paymentRecord);
eventBus.emit("COMMISSION_CALCULATED", commissionRecord);
```

Other systems can listen:

```javascript
eventBus.on("BARBER_APPOINTMENT_COMPLETED", updateDashboard);
eventBus.on("BARBER_APPOINTMENT_COMPLETED", sendReviewRequest);
eventBus.on("TIP_COLLECTED", updatePayrollSummary);
```

---

# Seed Data

```javascript
export const barberSeedData = {
  services: barberServiceTypes,

  chairs: [
    { name: "Chair 1", status: "available" },
    { name: "Chair 2", status: "available" },
    { name: "Chair 3", status: "available" }
  ],

  employees: [
    {
      displayName: "Mike Barber",
      role: "barber",
      specialties: ["fade", "beard_trim"]
    }
  ],

  customers: [
    {
      displayName: "John Smith",
      styleNotes: "Low fade, textured top"
    }
  ]
};
```

---

# Module Isolation Rules

Barber Module must not break ServicesOS Core.

Tests:

```text
Disable barber module
↓
Customers still work

Disable barber module
↓
Payments still work

Disable barber module
↓
Scheduling still works

Enable barber module
↓
Appointments appear

Enable barber module
↓
Walk-in queue appears

Enable barber module
↓
Style profiles appear
```

---

# MVP Build Order

## Phase 1: Module Registration

- Create barber module folder
- Add module config
- Register services
- Register dashboard widgets
- Add permissions

## Phase 2: Appointment System

- Add appointment fields
- Add barber service menu
- Add barber assignment
- Add chair assignment
- Add appointment statuses

## Phase 3: Style Profiles

- Add style notes
- Add before/after photos
- Add preferred barber
- Add visit history

## Phase 4: Payments + Tips

- Reuse core payment system
- Add tip option
- Add add-ons
- Store tips separately
- Generate receipt

## Phase 5: Walk-In Queue

- Add queue screen
- Add estimated wait time
- Add call next customer
- Convert walk-in to appointment/service

## Phase 6: Commission Tracking

- Add commission rules
- Calculate daily barber totals
- Show barber summary

## Phase 7: Product Sales + Loyalty

- Add product sales
- Add loyalty points
- Add rewards

---

# What NOT To Build First

Do not build these in MVP:

- AI haircut recommendation
- Advanced inventory
- Payroll automation
- Public customer booking app
- Full marketing automation
- Multi-location franchise tools
- Complex booth rental accounting

Document them for later.

---

# Future Expansion

The Barber Module can later help create modules for:

- Hair salons
- Nail salons
- Tattoo shops
- Massage therapy
- Pet grooming
- Estheticians
- Mobile grooming

These all share:

```text
Customer
↓
Appointment
↓
Provider
↓
Service
↓
Payment
↓
Tip
↓
Repeat Visit
```

---

# Final Rule

The Barber Module should prove that ServicesOS can support appointment-based businesses, not just cleaning or field-service businesses.

```text
Cleaning proves job-based services.
Barber proves appointment-based services.
RetailOS proves storefront commerce later.
```

This module should stay documented until ServicesOS Cleaning launches and stabilizes.

Brother Beta can come after Wife Beta.
