# 25 — System Architecture

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define the future architecture shape for SLAI Company Engine so Codex or a developer can build from a clearer blueprint later.

---

## Core Architecture

```text
SLAI Company Engine
├── SLAI OS command center
├── GrowthAI revenue engine
├── Research Agent
├── Client Finder
├── Company knowledge system
├── Decision log
├── Attention/alert system
├── Developer/Codex handoffs
└── ServicesOS data connector later
```

The first build should be internal-only and manual-first.

---

## Suggested App Areas

Future app modules:

```text
/home
/products
/leads
/research
/decisions
/handoffs
/knowledge
/alerts
/settings
```

---

## Frontend Responsibilities

The frontend should handle:

- founder dashboard
- product cards
- lead list
- lead detail
- research summaries
- decision log views
- handoff builder
- alert review
- simple filters

Keep the first UI simple and functional.

---

## Backend Responsibilities

The backend should handle:

- authentication/roles
- record storage
- status changes
- audit trail later
- AI request handling later
- ServicesOS read-only connector later
- GrowthAI record management

---

## AI Layer Responsibilities

AI should be isolated from core data writes at first.

AI may:

- summarize lead research
- draft outreach
- suggest follow-up
- summarize product status
- draft handoff text

AI should not:

- send outreach automatically
- change priorities automatically
- mutate ServicesOS data automatically
- approve decisions

---

## Data Storage Areas

Future collections/tables:

```text
product_statuses
founder_tasks
decisions
leads
lead_research
followups
handoffs
company_knowledge
attention_alerts
users
roles
```

---

## First Build Principle

```text
Build records and dashboard first.
Add AI after manual workflow proves useful.
Add integrations after ServicesOS is stable.
```

---

## Future Planning Only

```text
Do not build this architecture until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
