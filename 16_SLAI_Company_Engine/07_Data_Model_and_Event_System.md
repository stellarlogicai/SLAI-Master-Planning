# 07 — Data Model and Event System

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define the shared IDs, data concepts, and future event model that make SLAI products linkable.

---

## Core Principle

SLAI products should not be forced together after they are complete.

They should share clean identifiers and event concepts from the start.

```text
Build products as standalone modules.
Use shared core IDs.
Emit clean events later.
Connect products through SLAI Core instead of rebuilding each system.
```

---

## Shared Identifiers

Core IDs that should remain consistent across products:

- `tenantId`
- `locationId`
- `userId`
- `customerId`
- `employeeId`
- `leadId`
- `quoteId`
- `jobId`
- `paymentId`
- `invoiceId`
- `receiptId`
- `inventoryItemId`
- `auditLogId`
- `module`
- `source`
- `eventType`

These IDs let GrowthAI, SLAI OS, ServicesOS, RetailOS, EducationOS, and ComplianceAI reference the same real-world entities.

---

## Shared Record Concepts

### Tenant

Represents a business using SLAI.

Possible shared fields:

- tenantId
- businessName
- businessType
- locations
- ownerUserId
- activeModules
- billingStatus

### Customer

Represents a customer/client/patient/buyer depending on product context.

Possible shared fields:

- customerId
- tenantId
- name
- contact info
- source
- status
- tags
- lifetime value later

### Employee / Staff

Represents a worker, admin, contractor, or internal team member.

Possible shared fields:

- employeeId
- tenantId
- userId
- role
- permissions
- active status
- training status later

### Lead

Represents a potential customer or prospect.

Possible shared fields:

- leadId
- tenantId
- source
- business/customer name
- contact info
- fit score later
- research notes
- follow-up status

### Event

Represents something meaningful that happened.

Possible shared fields:

- eventId
- tenantId
- module
- eventType
- entityType
- entityId
- createdAt
- actorType
- actorId
- summary
- metadata

---

## Future Event Examples

ServicesOS events:

```text
lead.created
quote.requested
quote.review_needed
quote.approved
job.scheduled
job.completed
payment.received
customer.feedback_received
customer.became_recurring
```

GrowthAI events:

```text
lead.researched
growth.followup_recommended
outreach.draft_created
outreach.approved
referral.opportunity_detected
```

EducationOS events:

```text
training.assigned
training.completed
quiz.failed
certification.expiring
```

ComplianceAI events:

```text
compliance.task_created
compliance.task_completed
compliance.task_overdue
audit.evidence_uploaded
```

SLAI OS events:

```text
priority.updated
decision.recorded
handoff.created
incident.opened
incident.resolved
```

---

## Event Flow Example

```text
ServicesOS emits quote.review_needed
↓
SLAI OS shows admin action needed
↓
Jamie/admin approves quote
↓
ServicesOS emits quote.approved
↓
GrowthAI can later recommend follow-up if customer does not respond
```

---

## MVP Boundary

Do not build a full event bus early.

Early planning requirement:

```text
Use clean IDs.
Use clear statuses.
Preserve source/module fields where useful.
Document future event names.
```

Build event automation only when it solves a real post-beta problem.

---

## Why This Matters

This is what makes future add-ons easier:

- GrowthAI can use ServicesOS data
- SLAI OS can surface cross-product alerts
- EducationOS can connect training to employee performance
- ComplianceAI can connect checklist evidence to audit logs
- RetailOS/POS can share customers and payments

---

## Future Planning Only

```text
Plan the linking structure now.
Do not add unnecessary architecture to active ServicesOS beta work.
```
