# 22 — Outreach Approval Workflow

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define how GrowthAI can draft outreach while keeping Jamie in control of customer-facing communication.

---

## Core Rule

```text
AI drafts.
Jamie approves.
Nothing sends without human approval.
```

This protects SLAI's reputation and keeps outreach founder-led.

---

## Workflow

```text
Lead selected
↓
Research summary reviewed
↓
Outreach angle chosen
↓
AI creates draft
↓
Jamie reviews
↓
Jamie edits if needed
↓
Jamie approves
↓
Message sent manually or through approved workflow later
↓
Follow-up scheduled
↓
Outcome logged
```

---

## Draft Types

GrowthAI may draft:

- cold email
- LinkedIn message
- SMS template
- call script
- follow-up message
- referral request
- demo invite

---

## Required Draft Fields

Each draft should include:

- leadId
- draftType
- subject line if email
- message body
- outreach angle
- reason for personalization
- suggested follow-up date
- status
- createdAt
- approvedAt

---

## Approval Statuses

```text
Draft
Needs Review
Edited
Approved
Sent
Follow-Up Scheduled
Closed
Archived
```

---

## What Jamie Reviews

Before approval, Jamie should review:

- Does this sound like SLAI?
- Is it honest?
- Is it relevant to the business?
- Is it too pushy?
- Does it overpromise?
- Does it mention only features ServicesOS can actually support?
- Is the call to action simple?

---

## Messaging Principles

SLAI outreach should be:

- short
- human
- honest
- founder-led
- low pressure
- specific to the business
- focused on solving real admin/growth pain

Avoid:

- spammy wording
- fake familiarity
- exaggerated claims
- mass-blast language
- promising unfinished features

---

## ServicesOS-Specific Outreach Angle

Early ServicesOS outreach should focus on:

- quote requests
- scheduling
- customer follow-up
- payments
- reducing admin work
- cleaning-business workflow
- replacing scattered tools later

Do not pitch every future module at once.

---

## Follow-Up Rule

Every approved outreach should create a follow-up record.

Follow-up fields:

- due date
- reason
- suggested message
- status
- outcome

---

## MVP Boundary

First future version:

```text
AI draft field
Human approval status
Manual send tracking
Follow-up date
Outcome log
```

Do not build automatic sending first.

---

## Future Planning Only

```text
This is a future workflow.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes GrowthAI work.
```
