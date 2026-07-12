# 16 — Decision Log System

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define how the future SLAI Company Engine should record important decisions so product direction stays consistent.

---

## Core Purpose

Jamie makes important product and company decisions during planning. The Decision Log should preserve those choices in a structured way.

It should answer:

- What was decided?
- Why was it decided?
- What product does it affect?
- Is it active or future planning?
- What changed because of it?
- What doc or task should be updated?

---

## Decision Entry Fields

Future decision record:

```text
decisionId
title
productArea
decision
reason
impact
activeOrFuture
relatedDocs
relatedTasks
madeBy
madeAt
reviewDate
status
```

Optional fields:

```text
alternativesConsidered
risks
followUpAction
supersedesDecisionId
supersededByDecisionId
```

---

## Decision Categories

### Product Priority

Example:

```text
ServicesOS remains priority one. Other products remain future planning unless Jamie explicitly promotes them.
```

### Product Scope

Example:

```text
POS should begin as an add-on before becoming full RetailOS complexity.
```

### Architecture

Example:

```text
Products should be standalone but linkable through shared IDs and future event concepts.
```

### Customer / Market

Example:

```text
GrowthAI should help SLAI find customers first, then help ServicesOS customers later.
```

### Build Process

Example:

```text
No green validation checks means no commit and no beta release.
```

### Naming / Positioning

Example:

```text
SLAI Company Engine is the umbrella for SLAI OS + GrowthAI + Research Agent + Client Finder + ServicesOS data.
```

---

## Active vs Future Label

Each decision should be clearly labeled.

```text
Active:
Affects current ServicesOS work or immediate company operations.

Future:
Preserves direction for later, but should not affect current build scope.
```

This prevents future planning from accidentally becoming active work.

---

## Decision Workflow

```text
Decision made
↓
Create decision record
↓
Classify product area
↓
Mark active or future
↓
Explain reason and impact
↓
Link related docs
↓
Create follow-up task if needed
```

---

## Decision Review

Some decisions may need review later.

Examples:

- Pricing strategy after first customers
- GrowthAI customer-facing timing after ServicesOS traction
- RetailOS priority after ServicesOS revenue
- ComplianceAI timing after regulated workflow proof

Decision review fields:

```text
reviewDate
reviewReason
stillValid
changedDecision
newRelatedDoc
```

---

## Superseding Decisions

The system should support changes without losing history.

Example:

```text
Old decision:
GrowthAI remains future planning only.

New decision later:
GrowthAI internal MVP promoted after ServicesOS beta.

Result:
Old decision is superseded, not deleted.
```

---

## SLAI OS Use Later

SLAI OS can use decisions to:

- explain why something is parked
- prevent contradictory roadmap changes
- generate better handoffs
- show current company rules
- summarize product direction

---

## GrowthAI Use Later

GrowthAI can use decisions to:

- respect outreach approval rules
- follow pricing/positioning guidance
- use approved value propositions
- avoid bad-fit customer segments

---

## MVP Boundary

First version later:

```text
Manual decision entries
Product area
Active/future label
Reason
Impact
Related docs
Search/filter
```

Do not start with complex decision trees or automated governance.

---

## Future Planning Only

```text
This is a future decision log design.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
