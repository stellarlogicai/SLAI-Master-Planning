# 14 — Company Knowledge System

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define how the future SLAI Company Engine should preserve durable company context, product decisions, founder rules, customer insights, and planning references.

---

## Core Purpose

The Company Knowledge System should help SLAI avoid losing important decisions and product context.

It should answer:

- What did we decide?
- Why did we decide it?
- What product does it affect?
- Is it active work or future planning?
- What related planning docs exist?
- What should future Jamie, Codex, or a developer know?

---

## Knowledge Categories

### Founder Principles

Durable rules about how SLAI should operate.

Examples:

- ServicesOS remains priority one until stable.
- AI amplifies humans; it does not replace responsibility.
- Build simple first; complexity is earned.
- MVPs solve real problems.
- Do not overbuild before customer proof.

### Product Decisions

Specific decisions that affect product direction.

Examples:

- GrowthAI helps SLAI first, ServicesOS customers second.
- POS should be an add-on before full RetailOS linkage.
- ServicesOS future modules should stay anchored to service workflows.

### Architecture Decisions

Technical or structural rules.

Examples:

- Use shared IDs across future products.
- Keep products standalone but linkable.
- Use clean event names later instead of forcing integrations early.

### Customer and Beta Insights

Patterns from users and testers.

Examples:

- Wife beta feedback
- Cleaning business pain points
- Customer workflow friction
- Admin workflow confusion
- Pricing objections

### Growth Insights

Lessons from customer acquisition.

Examples:

- Which lead types respond
- Which outreach angles work
- Common objections
- High-fit customer traits
- Referral opportunities

### Developer / Codex Lessons

Useful development process knowledge.

Examples:

- Validation commands
- Files to avoid
- Patterns that broke builds
- Successful prompt structures
- Known repo rules

### Future Ideas

Ideas that should be preserved but not treated as active work.

Examples:

- FutureAI research
- RetailOS/PharmacyOS modules
- ComplianceAI lifecycle engine
- ServicesOS future verticals
- SLAI OS future features

---

## Entry Shape

A future knowledge entry should include:

```text
title
category
summary
productArea
activeOrFuture
importance
source
relatedDocs
createdAt
updatedAt
```

Optional fields:

```text
reason
impact
nextAction
relatedDecisionId
relatedTaskId
relatedLeadId
```

---

## What Should Be Stored

Store information when it is:

- durable
- repeated
- decision-changing
- product-shaping
- useful for future handoffs
- tied to a priority, rule, customer insight, or architecture direction

Good example:

```text
ServicesOS is active priority one. Other product ideas should remain future planning unless Jamie explicitly promotes them.
```

---

## What Should Not Be Stored

Avoid storing:

- every random thought
- duplicate notes
- unverified assumptions as facts
- outdated tasks
- every chat message
- details that do not help future decisions

The system should be curated, not a dump.

---

## Workflow

```text
Idea or decision happens
↓
Classify it
↓
Decide if it is durable
↓
Attach product area and active/future status
↓
Link related docs
↓
Store concise summary
↓
Review/update later if direction changes
```

---

## Active vs Future Label

Every entry should make clear whether it affects active work.

```text
Active:
Can affect ServicesOS current build or immediate company operations.

Future:
Preserve for later but do not act on now.
```

---

## SLAI OS Use Later

SLAI OS can use company knowledge to:

- show current priorities
- remind Jamie of decisions
- prevent contradictory planning
- draft better Codex prompts
- connect related docs
- summarize product direction
- explain why something is parked

---

## GrowthAI Use Later

GrowthAI can use company knowledge to:

- remember outreach lessons
- track customer objections
- preserve successful messaging angles
- identify recurring customer patterns
- improve future lead recommendations

---

## MVP Boundary

First version later should be simple:

```text
Manual entries
Categories
Product area
Active/future label
Related docs
Search/filter
```

Do not start with a complex knowledge graph. Add that later after the basic system proves useful.

---

## Priority Note

```text
Company knowledge should reduce repeated thinking.
It should not become another system Jamie has to manage constantly.
```

---

## Future Planning Only

```text
This is a future design.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
