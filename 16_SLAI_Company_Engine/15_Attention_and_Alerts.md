# 15 — Attention and Alerts

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define how the future SLAI Company Engine should decide what deserves Jamie's attention.

---

## Core Purpose

The attention system should reduce noise.

It should not show everything. It should surface what needs action, review, or a decision.

```text
Not everything is urgent.
Not everything deserves attention.
The system should protect focus.
```

---

## Attention Categories

### 1. Product Blocker

Something is blocking a product milestone.

Examples:

- ServicesOS admin workflow blocked
- Stripe/payment issue unresolved
- Beta tester cannot complete workflow
- Build validation failure later

### 2. Decision Needed

Jamie needs to choose a direction.

Examples:

- Active vs future scope decision
- Pricing decision
- Product naming decision
- Customer workflow decision
- GrowthAI approval decision

### 3. Follow-Up Due

A lead, customer, or internal task needs follow-up.

Examples:

- GrowthAI lead follow-up
- ServicesOS beta tester feedback follow-up
- Potential customer reply waiting
- Planning doc needs review

### 4. Feedback Needs Review

A customer, beta tester, or internal user provided useful feedback.

Examples:

- Wife beta feedback
- Customer portal confusion
- Admin workflow complaint
- Feature request

### 5. Handoff Ready

A task is ready for Codex, developer, or future implementation.

Examples:

- Codex prompt ready
- Acceptance criteria written
- Planning complete enough for build

### 6. Priority Conflict

A future idea is trying to become active too early.

Examples:

- New module idea before ServicesOS beta
- GrowthAI build request before ServicesOS stability
- RetailOS idea competing with ServicesOS work

---

## Alert Fields

Future alert record:

```text
alertId
title
productArea
category
severity
reason
suggestedAction
relatedEntityType
relatedEntityId
status
createdAt
resolvedAt
```

---

## Severity Levels

```text
Low:
Useful but not urgent.

Medium:
Should be reviewed soon.

High:
Blocks current priority or customer progress.

Critical:
Requires immediate attention before continuing.
```

---

## Statuses

```text
Open
In Review
Snoozed
Resolved
Parked
```

---

## What Should Trigger Attention

Trigger attention when:

- ServicesOS current priority is blocked
- customer/beta workflow breaks
- follow-up is due
- decision is needed
- payment issue appears
- planning conflict appears
- handoff is ready
- customer feedback changes product direction

---

## What Should Not Trigger Attention

Do not alert for:

- every new idea
- every minor doc edit
- every old note
- future module ideas with no current action
- duplicate reminders
- low-value metrics

The system should avoid becoming another source of stress.

---

## SLAI OS Dashboard Behavior

Founder Home should show:

```text
Top 3 Attention Items
High/Critical blockers
Follow-ups due today
Decision needed
```

Everything else can live in a filtered list.

---

## GrowthAI Alert Examples

```text
Follow-up due:
ABC Cleaning has not responded after 5 days.
Suggested action: Review follow-up draft.

Lead ready:
Research summary complete for XYZ Cleaning.
Suggested action: Approve or edit outreach draft.
```

---

## ServicesOS Alert Examples

```text
Beta blocker:
Customer quote request flow works, but admin approval path is incomplete.
Suggested action: Focus next coding task on admin review workflow.

Payment issue:
Stripe status needs manual verification.
Suggested action: Review payment test checklist.
```

---

## Priority Guardrail Alert

The system should be able to flag scope drift.

Example:

```text
Priority conflict:
New RetailOS feature planning is being discussed while ServicesOS beta is not stable.
Suggested action: Document as future planning only.
```

---

## MVP Boundary

First version later:

```text
Manual alerts
Simple severity
Product area
Suggested action
Resolved/parked status
```

Do not start with complex automated alert rules.

---

## Future Planning Only

```text
This is a future attention system design.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
