# ServicesOS Database Schema

## Purpose

This document tracks the planned Firestore / backend data structure for ServicesOS.

Goal:

```text
Make the database understandable enough that Jamie, future developers, and AI assistants can build safely without guessing.
```

---

# Database Principles

- Every tenant/business must be isolated by `companyId`
- Every major record should include timestamps
- Every record should track who created or updated it when useful
- Employee app should only access assigned data
- Payment records must tie back to customer, job, company, and Stripe IDs
- Avoid duplicate data unless it improves performance or preserves history
- Keep schemas simple for V1

---

# Core Collections

Suggested top-level collections:

```text
companies
users
employees
customers
leads
properties
estimates
contracts
jobs
payments
subscriptions
trainingModules
trainingAssignments
jobMessages
timeEvents
notifications
auditLogs
```

---

# companies

Represents each cleaning business using ServicesOS.

```js
companies/{companyId} = {
  name: string,
  ownerUserId: string,
  email: string,
  phone: string,
  address: string,

  stripeAccountId: string,
  stripeConnectStatus: "not_started" | "pending" | "active" | "restricted",
  chargesEnabled: boolean,
  payoutsEnabled: boolean,

  subscriptionStatus: "trial" | "active" | "past_due" | "cancelled",
  planId: string,

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# users

Represents authenticated platform users.

```js
users/{userId} = {
  companyId: string,
  email: string,
  displayName: string,
  role: "owner" | "admin" | "manager" | "employee" | "customer",
  status: "active" | "inactive" | "invited",

  createdAt: timestamp,
  updatedAt: timestamp,
  lastLoginAt: timestamp
}
```

---

# employees

Represents employees/cleaners.

```js
employees/{employeeId} = {
  companyId: string,
  userId: string,
  name: string,
  email: string,
  phone: string,

  role: "owner" | "manager" | "team_lead" | "cleaner",
  status: "active" | "inactive" | "terminated",

  allowedServices: array,
  certifications: array,
  availability: object,

  emergencyContactName: string,
  emergencyContactPhone: string,

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# customers

Represents paying customers.

```js
customers/{customerId} = {
  companyId: string,
  name: string,
  email: string,
  phone: string,

  status: "lead" | "active" | "inactive",
  source: string,

  notes: string,
  petNotes: string,
  accessNotes: string,

  stripeCustomerId: string,

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# properties

Customer properties / service locations.

```js
properties/{propertyId} = {
  companyId: string,
  customerId: string,

  addressLine1: string,
  addressLine2: string,
  city: string,
  state: string,
  zip: string,

  bedrooms: number,
  bathrooms: number,
  squareFeet: number,

  hasPets: boolean,
  petDetails: string,

  notes: string,

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# leads

Optional if leads are separate from customers.

```js
leads/{leadId} = {
  companyId: string,
  name: string,
  email: string,
  phone: string,
  source: string,

  status: "new" | "contacted" | "quoted" | "won" | "lost",
  notes: string,

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# estimates

```js
estimates/{estimateId} = {
  companyId: string,
  customerId: string,
  propertyId: string,

  serviceType: "standard" | "deep_clean" | "move_out" | "recurring" | "custom",
  rooms: array,
  lineItems: array,

  subtotal: number,
  discountAmount: number,
  taxAmount: number,
  total: number,

  status: "draft" | "sent" | "accepted" | "declined" | "expired",

  createdBy: string,
  acceptedAt: timestamp,

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# contracts

```js
contracts/{contractId} = {
  companyId: string,
  estimateId: string,
  customerId: string,

  contractType: "one_time" | "recurring",
  status: "draft" | "sent" | "signed" | "cancelled",

  documentUrl: string,
  signedDocumentUrl: string,

  signedAt: timestamp,
  signedByName: string,
  signedByEmail: string,

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# jobs

Main scheduled service record.

```js
jobs/{jobId} = {
  companyId: string,
  customerId: string,
  propertyId: string,
  estimateId: string,
  contractId: string,

  customerName: string,
  address: string,

  serviceType: string,
  assignedEmployeeIds: array,

  scheduledDate: "YYYY-MM-DD",
  startTime: "HH:mm",
  estimatedDurationMinutes: number,

  status: "scheduled" | "in_progress" | "paused" | "completed" | "cancelled",

  checklistTemplateId: string,

  subtotal: number,
  balanceDue: number,
  currency: "usd",

  notes: string,
  accessNotes: string,
  petNotes: string,

  createdAt: timestamp,
  updatedAt: timestamp,
  completedAt: timestamp
}
```

---

# jobs/{jobId}/checklistItems

```js
jobs/{jobId}/checklistItems/{itemId} = {
  area: string,
  title: string,
  description: string,

  required: boolean,
  photoRequired: boolean,

  completed: boolean,
  completedBy: string,
  completedAt: timestamp,

  notes: string
}
```

---

# jobs/{jobId}/photos

```js
jobs/{jobId}/photos/{photoId} = {
  companyId: string,
  jobId: string,
  employeeId: string,

  category: "before" | "after" | "damage" | "issue" | "supply" | "other",
  url: string,
  storagePath: string,
  notes: string,

  createdAt: timestamp
}
```

---

# payments

```js
payments/{paymentId} = {
  companyId: string,
  customerId: string,
  jobId: string,
  estimateId: string,

  stripePaymentIntentId: string,
  stripeChargeId: string,
  stripeCustomerId: string,

  amount: number,
  platformFee: number,
  currency: "usd",

  type: "deposit" | "final" | "tap_to_pay" | "subscription",
  status: "created" | "processing" | "succeeded" | "failed" | "refunded",

  paymentMethod: "card" | "card_present" | "ach" | "cash" | "other",

  createdBy: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# subscriptions

For ServicesOS business subscriptions.

```js
subscriptions/{subscriptionId} = {
  companyId: string,
  stripeSubscriptionId: string,
  stripeCustomerId: string,

  planId: string,
  status: "trialing" | "active" | "past_due" | "cancelled",

  currentPeriodStart: timestamp,
  currentPeriodEnd: timestamp,

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# trainingModules

```js
trainingModules/{moduleId} = {
  companyId: string | null,
  title: string,
  description: string,
  category: string,

  type: "universal" | "company_custom",
  requiredForRoles: array,

  contentUrl: string,
  quizId: string,

  status: "draft" | "active" | "archived",

  createdAt: timestamp,
  updatedAt: timestamp
}
```

---

# trainingAssignments

```js
trainingAssignments/{assignmentId} = {
  companyId: string,
  employeeId: string,
  moduleId: string,
  moduleTitle: string,

  status: "assigned" | "in_progress" | "completed",
  quizScore: number,
  completedAt: timestamp,

  assignedBy: string,
  assignedAt: timestamp
}
```

---

# jobMessages

```js
jobMessages/{messageId} = {
  companyId: string,
  jobId: string,

  senderId: string,
  senderRole: "owner" | "manager" | "employee" | "system",

  body: string,

  createdAt: timestamp,
  readBy: array
}
```

---

# timeEvents

```js
timeEvents/{eventId} = {
  companyId: string,
  employeeId: string,
  jobId: string | null,

  type: "clock_in" | "clock_out" | "break_start" | "break_end" | "job_start" | "job_end",

  source: "web_app" | "employee_app" | "manual_adjustment",

  createdAt: timestamp,
  createdBy: string
}
```

---

# notifications

```js
notifications/{notificationId} = {
  companyId: string,
  userId: string,

  type: "job_assigned" | "schedule_changed" | "payment_received" | "message" | "training_assigned",

  title: string,
  body: string,
  read: boolean,

  relatedType: "job" | "payment" | "training" | "message",
  relatedId: string,

  createdAt: timestamp
}
```

---

# auditLogs

```js
auditLogs/{logId} = {
  companyId: string,
  actorId: string,
  actorRole: string,

  action: string,
  entityType: string,
  entityId: string,

  before: object,
  after: object,

  createdAt: timestamp
}
```

---

# Open Questions

- Should customers eventually have login accounts?
- Should properties be top-level or subcollection under customers?
- Should job photos be subcollection under jobs or top-level for easier querying?
- Should checklist templates be separate from job checklist instances?
- Should training modules be global templates copied into company-specific modules?

---

# Rule

Do not change schema names casually after beta users start using the platform.

Schema changes after launch need:

```text
Migration plan
Testing
Backup
Rollback plan
```
