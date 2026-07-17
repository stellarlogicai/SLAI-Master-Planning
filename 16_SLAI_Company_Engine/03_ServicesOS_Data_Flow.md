# 03 — ServicesOS Data Flow

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define how ServicesOS operating data can later power SLAI OS and GrowthAI without forcing a rebuild.

---

## Core Idea

ServicesOS is the first real product and the first source of real operating data.

That data should eventually power:

```text
SLAI OS = command center
GrowthAI = revenue engine
EducationOS = training insights
ComplianceAI = checklist/evidence intelligence
Future products = linked modules
```

This does not mean building all integrations now. It means ServicesOS should keep clean IDs, statuses, events, and records so future linking is possible.

---

## ServicesOS Data Sources

Important ServicesOS data categories:

- Tenants / businesses
- Users
- Customers
- Leads
- Quote requests
- Estimates
- Jobs
- Appointments
- Employees
- Checklists
- Payments
- Invoices/receipts
- Inventory usage
- Customer messages
- Reviews/feedback
- Beta issues
- Audit logs

---

## Data That Matters Most to SLAI OS

SLAI OS needs operational status and attention signals.

Useful ServicesOS signals:

- Quote request submitted
- Quote pending owner review
- Quote approved
- Job scheduled
- Job completed
- Payment issue
- Customer feedback received
- Beta bug reported
- Customer stuck in workflow
- Admin task overdue

SLAI OS should not need every detail at first. It needs enough to answer:

```text
What needs attention?
What is blocked?
What changed?
Who needs a decision?
```

---

## Data That Matters Most to GrowthAI

GrowthAI needs revenue and customer signals.

Useful ServicesOS signals:

- Lead created
- Quote requested
- Quote sent
- Quote not accepted
- Customer completed first job
- Customer became recurring
- Customer stopped booking
- Review received
- Referral opportunity detected
- High-value customer identified
- Service area or service type performing well

GrowthAI should turn this into next actions:

- follow up
- ask for review
- request referral
- offer recurring service
- recover lost lead
- target similar businesses

---

## Shared IDs

ServicesOS should preserve clean identifiers so other systems can link later:

- `tenantId`
- `locationId`
- `customerId`
- `leadId`
- `quoteId`
- `jobId`
- `employeeId`
- `paymentId`
- `invoiceId`
- `source`
- `module`
- `createdAt`
- `updatedAt`

This is what prevents future products from needing messy migrations.

---

## Future Event Examples

ServicesOS can eventually emit simple business events.

Examples:

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
customer.inactive
```

These events can feed SLAI OS and GrowthAI later.

Example:

```text
ServicesOS emits quote.review_needed.
SLAI OS shows pending admin action.
GrowthAI waits until outcome before recommending follow-up.
```

---

## Do Not Overbuild Now

This document does not require ServicesOS to build a full event bus now.

Near-term ServicesOS priority is still:

- customer quote workflow
- admin review
- scheduling
- UI cleanup
- payment stability
- wife beta testing

Future linking can be planned without adding active complexity.

---

## Future Planning Only

```text
Keep ServicesOS data clean.
Do not build Company Engine integrations until ServicesOS beta is stable and Jamie explicitly promotes them.
```
