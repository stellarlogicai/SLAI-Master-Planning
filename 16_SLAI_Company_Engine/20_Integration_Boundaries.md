# 20 — Integration Boundaries

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define what the future Company Engine may connect to, and what it must avoid touching early.

---

## Core Rule

Integrations should start read-only and low-risk.

```text
Read first.
Suggest second.
Write later only after trust is earned.
```

---

## Safe Early Integrations Later

### Planning Repo

Purpose:

- link docs
- reference decisions
- find planning context
- prepare handoffs

Early mode:

```text
Read/reference first.
Manual doc updates with approval.
```

### GitHub / Codex Handoffs

Purpose:

- track PRs/commits later
- track handoffs
- record validation status
- summarize code changes

Early mode:

```text
Read-only status and manual handoff notes.
```

### ServicesOS

Purpose:

- show beta status
- surface blockers
- later read quote/lead/customer/job signals

Early mode:

```text
Read-only.
No workflow mutations.
No payment mutations.
```

### GrowthAI Lead Data

Purpose:

- track leads
- track research
- track follow-ups
- store outreach drafts

Early mode:

```text
Manual records first.
AI suggestions only.
```

---

## Integrations to Avoid Early

Avoid early write access to:

- ServicesOS payments
- customer messaging
- Stripe actions
- automated outreach sending
- production customer records
- scheduling mutations
- destructive GitHub actions

---

## ServicesOS Boundary

ServicesOS must stay stable.

Company Engine should not change ServicesOS workflows until:

- ServicesOS beta is stable
- wife beta testing has produced feedback
- payment flow is stable
- Jamie explicitly promotes integration work

Early ServicesOS connection should be:

```text
Read status.
Read metrics later.
Read feedback later.
Do not change records automatically.
```

---

## GrowthAI Boundary

GrowthAI should not send messages automatically in early phases.

Allowed early:

- draft messages
- suggest follow-ups
- summarize leads
- score fit manually/with review

Not allowed early:

- autonomous outreach
- mass sending
- unapproved customer messages
- scraping-heavy workflows without review

---

## SLAI OS Boundary

SLAI OS should coordinate work, not own every workflow.

It should show:

- status
- next action
- blockers
- decisions
- alerts

It should not become:

- a full CRM replacement
- a full project management clone
- a payment processor
- a customer operations app

---

## MVP Boundary

First future integration version:

```text
Manual records
Planning doc references
Read-only ServicesOS status later
Read-only GitHub references later
Human-approved GrowthAI drafts
```

---

## Future Planning Only

```text
This is an integration guardrail document.
Do not build integrations until ServicesOS beta is stable and Jamie explicitly promotes the work.
```
