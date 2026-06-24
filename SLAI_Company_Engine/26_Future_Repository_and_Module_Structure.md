# 26 — Future Repository and Module Structure

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Give future Codex/developer work a clean structure before any active build begins.

---

## Build Location Decision Later

When promoted, choose one:

```text
Option A:
New standalone repo for SLAI Company Engine

Option B:
SLAI OS monorepo with Company Engine as first app

Option C:
Internal app inside a broader SLAI OS repo
```

Recommendation:

```text
Start as standalone internal app or SLAI OS app.
Do not put this inside the active ServicesOS repo.
```

Reason:

ServicesOS must stay focused and stable.

---

## Suggested Future Folder Structure

```text
slai-company-engine/
├── src/
│   ├── app/
│   ├── components/
│   ├── modules/
│   │   ├── dashboard/
│   │   ├── products/
│   │   ├── leads/
│   │   ├── research/
│   │   ├── decisions/
│   │   ├── handoffs/
│   │   ├── knowledge/
│   │   ├── alerts/
│   │   └── settings/
│   ├── services/
│   │   ├── ai/
│   │   ├── github/
│   │   ├── servicesos/
│   │   └── growthai/
│   ├── data/
│   ├── schemas/
│   ├── utils/
│   └── tests/
├── docs/
├── package.json
└── README.md
```

---

## Module Boundary Rule

Each module should own its own:

- UI components
- service functions
- schema/types
- tests
- documentation

Avoid one giant dashboard file.

---

## Early Modules

Build order later:

```text
1. dashboard
2. products
3. leads
4. decisions
5. handoffs
6. knowledge
7. alerts
8. AI assistance
9. integrations
```

---

## Files to Avoid Early

Do not touch active ServicesOS files from this repo unless explicitly doing a read-only integration task later.

Do not start with:

- Stripe mutation code
- customer messaging mutation code
- ServicesOS write actions
- autonomous outreach code

---

## Future Planning Only

```text
This is a future repo/module guide.
Do not create the active codebase until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
