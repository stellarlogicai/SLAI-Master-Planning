# 11 — Dashboard and Screens

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define the future screens for the SLAI Company Engine without starting active UI/code work.

---

## Design Goal

The dashboard should reduce founder overload.

It should not become a giant analytics product at first.

```text
Show what matters.
Hide what can wait.
Separate active work from future planning.
```

---

## Screen List

Future MVP screens:

1. Founder Home
2. Product Status
3. ServicesOS Beta Panel
4. GrowthAI Leads
5. Research Queue
6. Decision Log
7. Developer / Codex Handoffs
8. Company Memory
9. Attention Needed
10. Settings / Permissions

---

## 1. Founder Home

Purpose:

Show Jamie the most important company status in one place.

Sections:

- Current priority
- Today's top actions
- ServicesOS status
- GrowthAI opportunities
- Open blockers
- Recent decisions
- Planning docs touched recently

Example layout:

```text
Current Priority:
ServicesOS beta hardening

Today:
1. Review admin workflow blockers
2. Capture wife beta feedback
3. Review one GrowthAI lead

Attention Needed:
- 2 ServicesOS blockers
- 1 planning doc needs update
- 3 leads waiting for research
```

---

## 2. Product Status

Purpose:

Track the status of each SLAI product without mixing active and future work.

Product cards:

- ServicesOS
- SLAI Website
- GrowthAI
- EducationOS
- RetailOS / PharmacyOS
- ComplianceAI
- FutureAI
- SLAI OS

Each card should show:

- product name
- status
- current phase
- priority level
- next action
- blocker
- last updated

---

## 3. ServicesOS Beta Panel

Purpose:

Because ServicesOS is priority one, it gets a dedicated panel.

Sections:

- Customer workflow status
- Admin workflow status
- Scheduling status
- Payment/Stripe status
- UI cleanup status
- Wife beta feedback
- Known blockers
- Validation status later

This panel should make it clear when ServicesOS is ready for testing.

---

## 4. GrowthAI Leads

Purpose:

Track future customer/revenue opportunities.

Lead fields shown:

- lead name
- business type
- location
- source
- fit status
- research status
- outreach status
- follow-up date
- next action

Lead statuses:

- New
- Research Needed
- Researched
- Outreach Drafted
- Waiting on Jamie
- Contacted
- Follow-Up Due
- Not a Fit
- Converted

---

## 5. Research Queue

Purpose:

Show leads or markets that need AI-assisted research.

Queue fields:

- item name
- type: lead, market, competitor, vertical
- requested by
- priority
- status
- summary
- recommended action

Statuses:

- Queued
- Researching Later
- Draft Summary Ready
- Reviewed
- Archived

---

## 6. Decision Log

Purpose:

Capture major product/company decisions.

Decision fields:

- decision title
- product area
- active or future
- reason
- impact
- related docs
- date
- next action

Example:

```text
Decision:
GrowthAI helps SLAI first, ServicesOS customers second.

Reason:
SLAI needs customers before customer-facing growth add-ons matter.

Status:
Future planning.
```

---

## 7. Developer / Codex Handoffs

Purpose:

Convert planning into future controlled build tasks.

Handoff fields:

- title
- product
- scope
- files to touch
- files to avoid
- acceptance criteria
- validation commands
- report-back instructions
- status

This keeps coding tasks small and safe.

---

## 8. Company Memory

Purpose:

Store durable company context.

Memory categories:

- product principles
- pricing principles
- architecture decisions
- customer insights
- founder rules
- active priorities
- future module notes
- lessons learned

This should not become a junk drawer. It should store durable context only.

---

## 9. Attention Needed

Purpose:

Surface items requiring action.

Alert types:

- blocker
- overdue follow-up
- decision needed
- beta feedback needs review
- documentation needed
- handoff ready
- product priority conflict

Each alert should have:

- severity
- product
- reason
- suggested next action
- created date

---

## 10. Settings / Permissions

Purpose:

Prepare for future team access.

Possible settings:

- roles
- product visibility
- notification preferences
- AI approval rules
- data/source connections later

Keep this minimal in early versions.

---

## Navigation Principle

Early navigation should be simple:

```text
Home
Products
Leads
Research
Decisions
Handoffs
Memory
Settings
```

---

## MVP Boundary

Do not build advanced dashboards first.

First useful version later:

```text
Founder Home
Product Status
Leads
Decision Log
Handoffs
```

Add the rest after real usage proves value.

---

## Future Planning Only

```text
This is a future UI map.
No active build work until ServicesOS beta is stable and Jamie explicitly promotes it.
```
