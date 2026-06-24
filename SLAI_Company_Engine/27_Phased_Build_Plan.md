# 27 — Phased Build Plan

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Convert the Company Engine planning into a controlled future build order.

---

## Build Rule

```text
Do not build everything at once.
Each phase should produce useful value before the next phase starts.
```

---

## Phase 1 — Internal Shell

Goal:

Create the app shell and navigation.

Build:

- app layout
- navigation
- empty screens
- founder-only first use

Acceptance:

- all core screens are reachable
- no live integrations
- no AI required

---

## Phase 2 — Manual Records

Goal:

Make the app useful with manual data entry.

Build:

- product statuses
- leads
- decisions
- handoffs
- knowledge entries
- alerts

Acceptance:

- Jamie can add/edit/archive records
- active/future labels exist
- product area filters exist

---

## Phase 3 — Founder Home

Goal:

Make the dashboard actionable.

Build:

- priority stack
- top actions
- ServicesOS status card
- follow-ups due
- open blockers
- decisions pending

Acceptance:

- dashboard shows what matters today
- dashboard avoids unnecessary noise

---

## Phase 4 — GrowthAI Lead Workflow

Goal:

Support SLAI customer acquisition.

Build:

- lead pipeline
- lead research notes
- fit score fields
- outreach draft status
- follow-up status
- outcome log

Acceptance:

- a lead can move from New to Research to Outreach to Follow-Up
- messages require approval

---

## Phase 5 — AI Assistance

Goal:

Add controlled AI support.

Build:

- draft outreach
- summarize research
- summarize product status
- suggest next action
- draft handoff

Acceptance:

- AI suggestions are visible as suggestions
- no automatic sending
- no automatic priority changes

---

## Phase 6 — Read-Only ServicesOS Connection

Goal:

Use ServicesOS data without risking ServicesOS stability.

Build:

- read ServicesOS status later
- read beta feedback later
- read lead/quote/job status later

Acceptance:

- read-only first
- no ServicesOS workflow changes
- no payment changes

---

## Phase 7 — Team Roles

Goal:

Prepare for future team use.

Build:

- simple roles
- view/edit boundaries
- founder approval controls

Acceptance:

- founder can manage all areas
- limited roles start simple

---

## Future Planning Only

```text
This is a future build plan.
Do not begin until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
