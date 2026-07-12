# 06 — AI Agents and Human Approval

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define how AI assistance should support SLAI Company Engine while keeping humans responsible for important decisions.

---

## Core Philosophy

SLAI's AI philosophy applies directly here:

```text
AI should amplify humanity, not replace it.
Humans remain responsible for important decisions.
Data informs decisions, but humans interpret them.
```

The Company Engine should use AI as an assistant layer, not an unchecked autopilot.

---

## Agent Categories

### 1. Founder Assistant

Helps Jamie stay focused.

Tasks:

- summarize priorities
- identify blockers
- suggest next actions
- organize planning notes
- draft Codex prompts
- summarize decisions

### 2. Product Status Agent

Tracks project status across SLAI products.

Tasks:

- summarize product phase
- identify stale priorities
- surface open blockers
- link related docs
- detect when an idea is future planning vs active build

### 3. ServicesOS Beta Agent

Later supports ServicesOS beta tracking.

Tasks:

- summarize beta issues
- organize wife feedback
- track customer/admin workflow status
- surface payment/UI blockers
- prepare developer handoffs

### 4. GrowthAI Research Agent

Studies leads and markets.

Tasks:

- research business context
- summarize likely fit
- identify possible pain points
- recommend outreach angle
- prepare lead notes

### 5. Outreach Drafting Agent

Drafts but does not send.

Tasks:

- draft email/message
- draft call script
- draft follow-up
- personalize outreach using approved context

### 6. Company Memory Agent

Keeps durable context organized.

Tasks:

- summarize key decisions
- classify planning docs
- connect related ideas
- preserve product principles

---

## Human Approval Levels

### Low-risk AI assistance

Can be shown as suggestions:

- summaries
- draft notes
- planning organization
- next-action suggestions
- doc cross-references

### Medium-risk AI assistance

Requires review before use:

- outreach drafts
- customer-facing wording
- product roadmap recommendations
- lead fit scoring
- pricing suggestions

### High-risk AI assistance

Requires explicit human approval:

- contacting customers/leads
- changing product priorities
- creating coding tasks
- sending official communications
- changing pricing
- making compliance-related decisions

---

## Early Rule

```text
AI may research.
AI may summarize.
AI may draft.
AI may recommend.
Jamie approves important actions.
```

---

## What Not To Build Early

Avoid:

- autonomous outreach
- autonomous product decisions
- autonomous coding task creation without approval
- automated customer messaging
- hidden AI actions
- broad automation without audit trail

---

## Audit and Trust

Future AI-assisted actions should log:

- what AI suggested
- what human approved
- what action was taken
- when it happened
- what data was used

This keeps SLAI aligned with its own trust principles.

---

## MVP Boundary

First useful version later:

```text
AI summaries
AI draft suggestions
Human approval buttons
Decision notes
Basic audit trail
```

Do not start with full autonomy.

---

## Future Planning Only

```text
Plan AI roles now.
Build later.
Keep ServicesOS active priority one.
```
