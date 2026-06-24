# 17 — Future Codex Task List

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Preserve future implementation tasks for the SLAI Company Engine without turning them into active build work.

---

## Important Guardrail

```text
This is not an active coding plan.
Do not use Codex credits on this until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```

The purpose of this file is to make future execution faster when the time is right.

---

## Future Build Phase 1 — Internal Shell

Goal:

Create the internal application shell for Jamie only.

Tasks:

- Create app structure
- Add basic navigation
- Add Founder Home screen
- Add Product Status screen
- Add Leads screen
- Add Decision Log screen
- Add Handoffs screen
- Add Company Knowledge screen

Acceptance criteria:

- App loads
- Navigation works
- Screens are empty but reachable
- No customer-facing access
- No live integrations yet

---

## Future Build Phase 2 — Manual Records

Goal:

Add manual CRUD for core records.

Tasks:

- ProductStatus records
- FounderTask records
- DecisionLog records
- Lead records
- LeadResearch records
- FollowUp records
- Handoff records
- CompanyKnowledge records
- AttentionAlert records

Acceptance criteria:

- Jamie can create/edit/archive records
- Records have productArea and active/future labels
- Records can be filtered
- No AI required yet

---

## Future Build Phase 3 — Founder Dashboard

Goal:

Make the home dashboard useful.

Tasks:

- Show current priority stack
- Show top attention items
- Show ServicesOS status card
- Show follow-ups due
- Show recent decisions
- Show handoffs ready

Acceptance criteria:

- Jamie can see what matters today
- Dashboard does not show excessive noise
- Active/future distinction is visible

---

## Future Build Phase 4 — GrowthAI Manual Lead Workflow

Goal:

Support lead tracking before automation.

Tasks:

- Add lead statuses
- Add research notes
- Add outreach draft field
- Add follow-up date
- Add outcome tracking
- Add fit status

Acceptance criteria:

- Jamie can track a lead from New to Follow-Up or Closed
- Outreach remains human-approved
- No automatic sending

---

## Future Build Phase 5 — AI Assistance

Goal:

Add AI help only after manual workflows are useful.

Tasks:

- Summarize lead research
- Draft outreach message
- Suggest follow-up message
- Summarize product status
- Suggest next action
- Draft Codex handoff from planning notes

Acceptance criteria:

- AI suggestions are clearly labeled
- Human approval required for outreach or handoff use
- No hidden actions

---

## Future Build Phase 6 — ServicesOS Data Connection

Goal:

Connect real ServicesOS data after ServicesOS is stable.

Tasks:

- Pull ServicesOS product status
- Surface beta blockers
- Surface quote/admin workflow status
- Surface customer feedback
- Surface lost leads later
- Surface payment status later

Acceptance criteria:

- Connection is read-only at first
- No ServicesOS workflow is altered
- Data shown is accurate enough to support decisions

---

## Future Build Phase 7 — Alerts

Goal:

Add attention alerts after enough manual data exists.

Tasks:

- Manual alert creation
- Severity levels
- Product area filter
- Suggested action field
- Resolve/park status
- Later automated alert rules

Acceptance criteria:

- Alerts help focus
- Alerts can be resolved or parked
- System does not flood dashboard

---

## Future Build Phase 8 — Team Permissions

Goal:

Prepare for future team use.

Tasks:

- Founder role
- Developer role
- Growth role
- Support role
- Product visibility rules
- Record-level ownership later

Acceptance criteria:

- Jamie can control who sees what
- Sensitive founder/company decisions remain protected
- Roles remain simple at first

---

## Files to Avoid During Early Build

When this project is eventually built, avoid touching active ServicesOS production workflows unless the task explicitly requires it.

Do not connect to:

- payment mutation workflows
- live customer messaging
- automatic outreach systems
- ServicesOS write operations

Start read-only and manual.

---

## Validation Rule

Future coding should follow the ServicesOS discipline:

```text
Small task.
Clear acceptance criteria.
Run checks.
No green checks = no commit.
```

---

## Future Planning Only

```text
This file preserves future Codex/developer tasks.
It is not permission to start building now.
```
