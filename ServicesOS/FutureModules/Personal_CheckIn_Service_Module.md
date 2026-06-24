# ServicesOS Personal Check-In Service Module

**Status:** Future planning only  
**Active build priority:** Do not build before ServicesOS cleaning beta, wife beta testing, UI hardening, and payments stability.  
**Primary product anchor:** ServicesOS

---

## Purpose

This document captures a future ServicesOS module for trusted scheduled check-in services. The idea is to support small service operators who provide recurring or temporary care-oriented visits for customers.

This should remain future planning only until ServicesOS cleaning is stable.

---

## Product Classification

```text
Primary bucket:
ServicesOS future module

Possible future names:
Personal Check-In Module
Care Visit Module
Vacation Check-In Module

Build timing:
After ServicesOS cleaning beta, wife beta testing, admin workflow, scheduling, UI hardening, and payment stability
```

This module is mostly service workflow, so it does not require POS or RetailOS by default.

---

## Why This Fits ServicesOS

Personal check-in services use the same ServicesOS backbone:

- Customer profile
- Service profile
- Scheduling
- Staff assignment
- Checklists
- Notes
- Customer updates
- Issue reporting
- Payment status
- Recurring service
- Tenant/business structure

```text
Cleaning business today.
Personal check-in services later.
Same ServicesOS backbone.
```

---

## Core Workflow

```text
Customer request
↓
Service instructions
↓
Schedule visit dates
↓
Assign staff
↓
Per-visit checklist
↓
Customer update sent
↓
Issue reporting if needed
↓
Completion summary
↓
Payment
↓
Repeat customer preferences saved
```

---

## Primary Use Cases

### 1. Scheduled Check-In Service

A customer requests scheduled visits while away or unavailable.

Tasks may include:

- Customer-requested checklist items
- General care tasks
- Notes and updates
- Issue reporting

### 2. Pet-Care-Adjacent Visit

A customer requests basic pet-related tasks during a scheduled visit.

Tasks may include:

- Feed pets
- Refresh water
- Follow customer pet-care notes
- Send pet update
- Report concerns

### 3. Recurring Customer

A customer uses the service repeatedly and wants saved preferences reused.

Potential features:

- Saved service instructions
- Saved pet notes
- Saved contact preferences
- Recurring visit schedule
- Preferred staff member
- Standard checklist template

---

## Intake Fields

First-time intake should capture enough detail to schedule and complete the service.

### Customer Details

- Name
- Phone
- Email
- Preferred contact method
- Backup contact

### Service Details

- Service location label
- General visit instructions
- Customer-requested tasks
- Important care notes

Sensitive visit details should be handled carefully in final product design and shown only to assigned staff who need them.

### Visit Details

- Start date
- End date
- Visit frequency
- Visit time window
- Number of visits per day
- Expected visit duration

### Task Details

- Customer-requested checklist items
- Pet care notes if applicable
- General notes

---

## Returning Customer Flow

```text
Use saved service profile?
Use saved pet profile?
Any changes this visit?
Confirm dates and visit schedule.
Submit request.
```

This mirrors the long-term ServicesOS pattern:

```text
Detailed first intake
↓
Saved profile
↓
Future requests only ask what changed
```

---

## Admin / Owner Workflow

Admin should be able to:

- Review request
- Confirm dates
- Review instructions
- Assign staff
- Set price
- Approve service
- Send confirmation
- Monitor visit completion
- Review issues
- Mark completed
- Request/send payment

---

## Staff Workflow

The staff app should be simple:

```text
Today's visits
↓
Open assigned visit
↓
See customer instructions
↓
Complete checklist
↓
Add notes/update
↓
Flag issues
↓
Mark visit complete
```

---

## Statuses

Potential service statuses:

- New Request
- Pending Owner Review
- Quote/Price Pending
- Scheduled
- Assigned
- In Progress
- Visit Completed
- Issue Reported
- Completed
- Paid
- Cancelled

---

## Pricing Model

Possible pricing structures:

- Per visit
- Per day
- Pet add-on
- Extra pet fee
- Holiday rate
- Rush/short-notice fee
- Travel distance fee
- Recurring customer discount

Example placeholders:

```text
Basic check-in: $20–$40 per visit
Pet care visit: $25–$50 per visit
Holiday surcharge: +20–50%
```

Exact pricing should be based on local market research and real customer feedback later.

---

## Customer Portal Experience

Customer Portal could support:

- Request check-in service
- Save service instructions
- Save pet profiles
- View visit schedule
- View staff notes/updates
- Approve quote
- Pay invoice
- Request repeat service

---

## Trust Layer

Trust is critical for this service type.

Potential trust features:

- Timestamped visit completion
- Checklist completion
- Issue notes
- Customer-visible visit summary
- Optional customer update attachments later

This overlaps lightly with ComplianceAI principles, but should stay simple at first.

```text
Human remains responsible.
AI can assist with summaries later.
```

---

## GrowthAI Opportunities Later

GrowthAI could eventually help with:

- Seasonal campaigns
- Holiday promotions
- Follow-ups after completed visits
- Referral requests
- Repeat customer reminders
- Local lead discovery

---

## AI Features Later

AI should not be MVP. Later opportunities:

- Generate customer visit summaries from staff notes
- Flag missing checklist items
- Detect recurring issue patterns
- Suggest pricing based on visit count and distance
- Summarize repeat customer preferences
- Recommend follow-up timing
- Draft customer updates

---

## Not MVP

Avoid early overbuild:

- Marketplace matching
- Advanced automation integrations
- Real-time route optimization
- AI image inspection
- Complex insurance/compliance automation
- Advanced recurring subscriptions

---

## Cross-Product Overlap

Personal Check-In overlaps with:

```text
ServicesOS:
Core workflow, scheduling, checklists, assignments, payments, customer portal

Pet Care future module:
Pet feeding, walking, behavior notes, customer pet-care instructions

GrowthAI:
Seasonal campaigns, repeat customers, referrals, follow-ups

ComplianceAI-lite:
Timestamped checklists, audit trail, incident evidence

SLAI OS:
Internal alerts, issue tracking, customer feedback, service health visibility
```

This module does not require RetailOS or POS by default unless the business also sells related supplies.

---

## MVP Recommendation

If this is ever promoted after ServicesOS cleaning stabilizes, start with:

```text
Personal Check-In MVP:
Customer request
Service profile
Optional pet profile
Schedule visits
Assign staff
Checklist
Customer update
Issue flag
Completion summary
Payment status
```

Do not start with marketplace features, advanced integrations, AI review, or complicated automation.

---

## Priority Note

This is a useful future ServicesOS vertical because it reuses the same core workflow engine.

Current priority remains:

1. Stabilize ServicesOS cleaning beta
2. Complete wife beta testing
3. Finish admin quote review and scheduling workflows
4. Fix UI hardening issues
5. Stabilize payments/Stripe
6. Then revisit future modules

```text
This document is for future planning only.
Do not convert to active build work until Jamie explicitly promotes it.
```
