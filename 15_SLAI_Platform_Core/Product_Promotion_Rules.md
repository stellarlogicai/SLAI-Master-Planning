# SLAI Product Promotion Rules

**Status:** Strategic planning  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define when a SLAI idea moves from future idea to planning, prototype, active build, beta, and customer-facing product.

---

## Core Rule

```text
Ideas are cheap.
Planning is useful.
Active builds are expensive.
Customer-facing products must earn their place.
```

No product should become an active build just because it is exciting.

---

## Promotion Stages

### Stage 0 — Future Idea

Definition:

A useful idea worth preserving.

Allowed work:

- quick notes
- rough concept
- parking-lot documentation

Not allowed:

- active code work
- architecture sprawl
- distracting from ServicesOS

---

### Stage 1 — Planning

Definition:

The idea has enough promise to deserve structured planning.

Required:

- purpose
- target users
- pain points
- basic workflow
- MVP boundary
- active/future label

Allowed work:

- Markdown docs
- diagrams
- workflow notes
- Codex task sketches

Not allowed:

- active code work unless explicitly promoted

---

### Stage 2 — Validated Need

Definition:

There is evidence that the problem is real.

Evidence can include:

- customer/beta feedback
- founder work experience
- repeated pain observed
- manual workflow tested
- willingness to pay
- strategic fit with ServicesOS/SLAI

Required:

- problem statement
- who needs it
- why now
- how it supports SLAI

---

### Stage 3 — Prototype Candidate

Definition:

The idea may deserve a small prototype later.

Required:

```text
MVP scope
files or repo location
acceptance criteria
validation steps
files-to-avoid
security/permission expectations
human approval boundaries
```

Prototype must be small and isolated.

---

### Stage 4 — Active Build

Definition:

Jamie explicitly promotes it into active coding work.

Required before promotion:

```text
1. ServicesOS current milestone is stable or intentionally paused.
2. Jamie explicitly says to work on it now.
3. MVP scope is written.
4. Acceptance criteria are written.
5. Files-to-avoid are listed.
6. Validation steps are defined.
7. Security boundaries are defined.
8. The work can be done without damaging ServicesOS focus.
```

---

### Stage 5 — Beta

Definition:

A real user can test the product or module.

Required:

- stable core workflow
- known limitations
- user checklist
- feedback capture
- rollback plan if needed
- no critical blockers

---

### Stage 6 — Customer-Facing

Definition:

The product or module can be used by paying or external users.

Required:

- tested workflow
- support path
- security expectations met
- pricing or packaging decision
- onboarding flow
- basic documentation
- issue reporting path

---

## ServicesOS Protection Rule

ServicesOS is the active build and first proof of SLAI.

No other product should become active build unless:

```text
ServicesOS current milestone is stable
or
Jamie intentionally pauses ServicesOS for a defined reason
```

Even then, the new work must be scoped tightly.

---

## Security Promotion Rule

Security Foundation is special.

Security expectations can be baked into active products without becoming a separate product build.

Security / Integrity Products become active only when:

- ServicesOS priority allows it
- product scope is separate
- customer/user need is clear
- build boundary is clear
- it does not destabilize existing products

---

## GrowthAI Promotion Rule

GrowthAI should first help SLAI internally before becoming customer-facing.

Promotion path:

```text
Planning
↓
Manual internal lead workflow
↓
AI-assisted internal workflow
↓
ServicesOS customer add-on later
```

No autonomous outreach at early stages.

---

## Codex Guardrail

Codex prompts should always include:

```text
scope
files to touch
files to avoid
acceptance criteria
test/build commands
what to report back
```

Codex should not infer promotion status.

---

## Final Rule

```text
Document broadly.
Build narrowly.
Promote deliberately.
ServicesOS first.
```
