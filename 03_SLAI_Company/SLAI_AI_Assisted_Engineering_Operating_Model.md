# SLAI AI-Assisted Engineering Operating Model

**Document Status:** Complete planning baseline  
**Implementation Status:** Active operating method / future Forge reference  
**Last Updated:** 2026-09-22  
**Owner:** Jamie Brown / Stellar Logic AI  
**Primary Active Product:** ServicesOS  

---

## Purpose

This document captures the engineering method Jamie Brown has developed while building ServicesOS with ChatGPT and Codex.

The goal is not to describe "AI writes code."

The actual operating model is:

> **Jamie retains product and engineering judgment. ChatGPT maintains planning, architecture, context, scope, review, and task preparation. Codex performs bounded repository-level implementation and validation. GitHub, tests, documentation, and handoffs preserve authoritative state between runs.**

This system was developed under real constraints:

- one founder/developer,
- another full-time job,
- limited Codex usage on the ChatGPT Plus plan,
- multiple repositories,
- long-running product context,
- security-sensitive multi-tenant software,
- the need to move quickly without allowing AI to improvise architecture.

The method should be preserved because it is already a working precursor to the future SLAIOS Forge engineering system.

---

# 1. Core Engineering Principle

SLAI does not use AI as an unsupervised software factory.

The operating principle is:

```text
Human defines the problem and desired outcome
        ↓
AI helps structure the problem
        ↓
Architecture and scope become explicit
        ↓
Coding agent receives a bounded task
        ↓
Implementation is validated
        ↓
Human reviews behavior and UX
        ↓
Decision is accepted, revised, or rejected
        ↓
Repository and planning state are updated
```

The purpose is to amplify one capable engineer/founder, not remove engineering responsibility.

---

# 2. Role Separation

## Jamie — Founder / Product Owner / Engineering Authority

Jamie is responsible for:

- deciding what should exist,
- product priorities,
- customer/user needs,
- business tradeoffs,
- architecture direction,
- approving changes to high-risk boundaries,
- real-world workflow judgment,
- manual exploratory testing,
- UX/UI judgment,
- accepting or rejecting completed work,
- deciding when a release is ready,
- and final responsibility for the product.

Jamie does not need to physically type every line of code to perform engineering work.

His contribution includes:

- problem definition,
- system design,
- workflow design,
- scope control,
- acceptance criteria,
- architecture decisions,
- QA findings,
- product judgment,
- and release approval.

---

## ChatGPT — Planning / Architecture / Context / Review Layer

ChatGPT is primarily used for:

- brainstorming,
- product planning,
- pressure-testing ideas,
- architecture,
- security reasoning,
- sequencing work,
- scope control,
- research,
- requirements,
- acceptance criteria,
- reviewing Codex reports,
- diagnosing failures,
- preparing Codex prompts,
- updating planning documents,
- comparing current implementation against intended design,
- and preserving long-running product context.

A major efficiency advantage is that the planning work is already in front of ChatGPT.

Detailed project instructions, canonical planning files, product priorities, architecture rules, current state, and past decisions mean Jamie usually does **not** need to re-explain the product before every coding task.

The normal interaction becomes:

```text
Jamie:
"Let's do this next."

ChatGPT:
- already understands the product context,
- identifies the correct bounded slice,
- checks relevant architecture/planning,
- creates the Codex prompt,
- includes the correct constraints and validation.

Jamie:
copies prompt into Codex.
```

This deliberately moves ambiguity resolution **before** expensive coding-agent usage.

---

## Codex — Repository-Level Implementation Worker

Codex is primarily used for:

- inspecting the repository,
- implementing the approved slice,
- making controlled code edits,
- adding/updating tests,
- running focused validation,
- running broader regressions when required,
- lint/build checks,
- reporting files changed,
- identifying blockers,
- creating validated commits when authorized,
- and producing an exact technical handoff/report.

Codex should not be asked to invent the product roadmap or redesign major architecture while implementing an ordinary feature.

The ideal Codex task is already well specified before execution.

---

# 3. Why Two AI Roles Are More Efficient Than One

The system deliberately separates **thinking/context work** from **repository execution**.

If the coding agent must repeatedly:

- rediscover product history,
- infer priorities,
- decide feature scope,
- reconstruct architecture,
- guess intended UX,
- decide which systems are protected,

then scarce coding-agent usage is consumed before useful implementation begins.

The SLAI model instead uses:

```text
ChatGPT
high-context planning / architecture / review
        ↓
well-defined task delta
        ↓
Codex
repository execution / tests / build
```

This improves:

- speed,
- token/usage efficiency,
- consistency,
- security,
- handoff quality,
- and the probability that a coding run produces acceptable work on the first pass.

---

# 4. Instruction Hierarchy as Persistent Engineering Context

The workflow depends on writing stable knowledge into durable instructions rather than repeating it in every prompt.

For ServicesOS, Codex should read the appropriate instruction hierarchy before acting, including:

1. `$HOME/.codex/AGENTS.md`
2. repository root `AGENTS.md`
3. nearest nested `AGENTS.md`
4. `docs/servicesos-beta/SERVICESOS_V1_CURRENT_STATE.md`
5. task-specific planning or contract documents

This means a task prompt does not need to contain the entire history of ServicesOS.

The stable information lives in:

- repository instructions,
- canonical current-state docs,
- architecture contracts,
- tests,
- planning docs,
- commit history,
- and handoff files.

The prompt contains mostly the **task delta**.

---

# 5. Task-Delta Prompting

A normal Codex prompt should not re-explain months of project history.

It should communicate only what has changed or what must happen now.

Preferred structure:

```text
Recommended model
+ one-sentence reason

Goal

Current branch / baseline

Required documents to read

Scope

Task-specific exclusions / protected areas

Acceptance criteria

Validation commands

Stop conditions

Required report
```

This improves usage efficiency because stable context is loaded from authoritative files rather than duplicated in every prompt.

---

# 6. Model Routing by Risk

SLAI routes work to different model capability levels based on task risk and complexity.

Current convention:

```text
Luna
→ documentation
→ inventories
→ low-risk audits
→ planning cleanup

Terra
→ ordinary implementation
→ testing
→ UI
→ workflow changes
→ normal refactoring

Sol
→ production-sensitive architecture
→ Firebase/security rules
→ identity
→ tenant isolation
→ Stripe/payments
→ release/security
→ other high-risk boundaries
```

The goal is not to always use the strongest model.

The goal is:

> **Use enough intelligence for the task without wasting constrained high-capability coding usage.**

---

# 7. Small Controlled Engineering Slices

Large vague prompts are intentionally avoided.

Bad:

```text
Fix onboarding.
Improve the app.
Build the customer portal.
Make payments production ready.
```

Preferred:

```text
Add the server-derived branding readiness projection.
Do not build the branding-stage UI yet.
Preserve the existing gateway and storage contracts.
Add focused tests.
Run the required regression/build checks.
Report exact behavior and remaining work.
```

Each slice should be small enough that:

- scope can be understood,
- risks can be identified,
- tests can cover the change,
- regressions can be attributed,
- review is practical,
- and the work can end at a clean checkpoint.

---

# 8. Validation Before Expansion

The normal loop is:

```text
Define slice
↓
Implement
↓
Focused tests
↓
Relevant regression tests
↓
Lint/build/security checks
↓
Review report
↓
Manual QA where needed
↓
Commit/checkpoint
↓
Next slice
```

A new feature should not begin merely because code was written.

The previous slice should be:

- validated,
- committed,
- or explicitly handed off with exact resume instructions.

---

# 9. GitHub as Shared External Memory

SLAI does not rely on either AI assistant remembering everything indefinitely.

Important state is externalized into:

- Git commits,
- current-state documents,
- architecture contracts,
- tests,
- progress documents,
- handoff files,
- issue/PR history where used,
- and planning repositories.

This allows another assistant or later session to reconstruct:

- what exists,
- why it exists,
- what was validated,
- what is incomplete,
- and what must happen next.

The repository is part of the engineering memory system.

---

# 10. Usage-Limit Resilience

The workflow was specifically designed around constrained Codex usage.

Jamie may reach a weekly usage ceiling even while he still has engineering time available.

Therefore Codex usage is treated as a limited engineering resource.

The system optimizes for:

> **maximum validated production progress per unit of coding-agent usage.**

Practical consequences:

- ambiguity is solved in ChatGPT before Codex is invoked,
- tasks are narrow,
- stable context is not repeated unnecessarily,
- model capability is routed by risk,
- failed runs are diagnosed before blindly retrying,
- handoffs allow work to continue after a limit/reset,
- and large speculative coding sessions are avoided.

If a coding run cannot finish, the handoff must preserve:

- current goal,
- files changed,
- completed work,
- unfinished work,
- tests,
- validation,
- failures,
- next exact steps,
- protected files/areas,
- commit safety.

This allows work to resume without spending another large portion of usage reconstructing the task.

---

# 11. Manual Product Use Is Part of Engineering

SLAI deliberately does not postpone UX/UI evaluation until the end of development.

Jamie manually uses the product during development.

Typical cycle:

```text
Build workflow
↓
Jamie uses workflow
↓
notices confusion / friction / wasted space / bad wording
↓
fix immediately while context is fresh
↓
retest
↓
continue
```

This is why ServicesOS received continuous UX/UI refinement while being built.

Human exploratory QA focuses on things automation is weak at detecting:

- "technically works but feels wrong,"
- unclear wording,
- too many steps,
- bad information hierarchy,
- mobile friction,
- wasted screen space,
- confusing navigation,
- poor defaults,
- and workflows an average person would struggle to discover.

The long-term SLAI product standard is:

> **An average user should be able to accomplish the core task with very little instruction.**

---

# 12. Planning Before Coding

A large part of SLAI's engineering speed comes from detailed planning before implementation.

Jamie and ChatGPT frequently resolve:

- intended user workflow,
- architecture,
- source of truth,
- permissions,
- human/AI authority,
- failure behavior,
- future boundaries,
- deferred scope,
- acceptance criteria,

before code is touched.

This means implementation is more often execution of an already-understood design than simultaneous product discovery + architecture + coding.

The desired sequence is:

```text
idea
↓
brainstorm
↓
pressure-test
↓
document decision
↓
define architecture/boundaries
↓
split into small tasks
↓
Codex implementation
↓
validation
```

This is intentionally different from:

```text
idea
↓
tell coding agent to "build it"
↓
discover architecture problems inside the diff
```

---

# 13. Scope Control Protects Speed

Speed is not only produced by coding faster.

It is also produced by **not building unnecessary things**.

Rules:

- ServicesOS remains priority one until its current gates are complete.
- Future ideas are captured without automatically becoming active tasks.
- Unrelated defects discovered during a slice are documented unless they block the current work.
- Advanced functionality is not allowed to silently expand an MVP.
- Shared abstractions are extracted only after real reuse proves them valuable.

This reduces expensive rework and protects the founder's limited attention.

---

# 14. Engineering Judgment vs AI Labor

SLAI distinguishes between:

### Human engineering contribution

- architecture,
- problem framing,
- product intent,
- acceptance criteria,
- risk judgment,
- security/reliability decisions,
- UX evaluation,
- difficult debugging judgment,
- approval/rejection,
- release responsibility.

### AI-assisted labor

- implementation drafts,
- repetitive code edits,
- test scaffolding,
- regression runs,
- documentation drafts,
- repository inspection,
- status reports,
- change summaries.

AI assistance does not erase the human engineering work that directs, evaluates, and takes responsibility for the system.

---

# 15. Compounding Architecture

The workflow aims to solve reusable problems once.

```text
Solve real product problem
↓
prove implementation
↓
document contract
↓
stabilize tests
↓
extract reusable boundary when justified
↓
reuse in next product
```

ServicesOS is the first major proof engine.

Its proven platform patterns feed SLAI Platform Core.

SLAI Web should then begin with more of the foundation already solved.

The expectation is not that every future product becomes trivial.

The expectation is that SLAI progressively spends less time rebuilding:

- identity,
- tenancy,
- authorization,
- billing,
- audit,
- metering,
- notification patterns,
- testing conventions,
- and engineering coordination.

---

# 16. Current Human + AI Engineering Loop

The current working loop can be summarized as:

```text
Jamie
product need / idea / manual QA finding
        ↓
Jamie + ChatGPT
brainstorm + architecture + scope + acceptance criteria
        ↓
canonical planning/instructions updated when needed
        ↓
ChatGPT
produces bounded Codex prompt
        ↓
Jamie
copies prompt to Codex
        ↓
Codex
inspects repo + implements + tests + builds + reports
        ↓
Jamie + ChatGPT
review technical result
        ↓
Jamie
manually uses the product where appropriate
        ↓
accept / fix / refine
        ↓
validated commit
        ↓
planning/current-state update
        ↓
next slice
```

A major property of this system is that Jamie usually does not need to act as a manual translator between every layer.

Because the planning and instructions are already explicit, ChatGPT can usually generate the correct engineering handoff from a short founder request.

---

# 17. Why the Method Has Worked

The method gains speed from several combined effects:

1. **Long-lived context** — product intent does not restart every session.
2. **Clear role separation** — planning AI and coding AI do different work.
3. **Bounded tasks** — less implementation drift.
4. **Persistent repository instructions** — less repeated context.
5. **Model routing** — expensive capability is reserved for risky work.
6. **Continuous validation** — regressions are caught near their source.
7. **Frequent checkpoints** — rollback/recovery is easy.
8. **Manual UX QA** — usability improves during development.
9. **Scope discipline** — less wasted implementation.
10. **Reusable architecture** — later products inherit proven foundations.
11. **Exact handoffs** — usage limits do not destroy momentum.
12. **Human authority** — consequential decisions are not delegated to opaque automation.

No single technique creates the speed. The operating system around the tools does.

---

# 18. Failure Modes to Avoid

Do not degrade this method into:

- one huge prompt for an entire feature set,
- allowing Codex to redefine architecture without approval,
- repeating months of stable context in every prompt,
- using Sol for every trivial task,
- skipping tests because implementation "looks right,"
- letting future-product ideas interrupt the current product,
- treating AI-generated code as automatically correct,
- allowing multiple agents to edit the same authority/schema boundary independently,
- delaying all UX review until the end,
- or relying on chat memory instead of repository state.

---

# 19. Future Evolution Into SLAIOS Forge

The current process is manual but already resembles the future Forge architecture.

Today:

```text
Jamie
+ ChatGPT
+ Codex
+ GitHub
+ tests/builds
+ manual QA
```

Future:

```text
Engineer / Founder
        ↓
SLAIOS
loads priority + architecture + decisions + permissions
        ↓
Forge
creates bounded work packages
        ↓
implementation / test / security / docs workers
        ↓
automated gates
        ↓
consolidated evidence
        ↓
human engineering review
        ↓
PR / merge / release
```

Forge should automate the repeated coordination work proven by the current process.

It should **not** remove the architecture, product, security, and release judgment that currently belongs to Jamie and future engineers.

---

# 20. Scaling to Future Engineers

When SLAI hires engineers, this operating model can become a standard engineering workflow.

A strong engineer should be able to:

- receive authoritative product context,
- define/approve a bounded objective,
- supervise one or more AI workers,
- review evidence rather than manually gather it,
- focus on architecture and difficult problems,
- and remain accountable for what ships.

The desired long-term advantage is not "no engineers."

It is:

> **A smaller strong engineering team can operate with much greater leverage because AI handles a large portion of repetitive implementation and coordination work inside clear boundaries.**

---

# 21. Success Metric

The engineering method is successful when it increases:

- validated throughput,
- product quality,
- security,
- continuity,
- founder leverage,
- and future reuse,

without decreasing:

- human judgment,
- accountability,
- maintainability,
- test coverage,
- or customer usability.

The target is not maximum code generated.

The target is:

> **maximum useful, validated, maintainable product progress from the available human time and AI capacity.**

---

# Final Principle

> **Plan deeply enough that implementation becomes a bounded execution problem. Use AI for leverage, preserve human engineering judgment, and store the truth outside the conversation so work can continue without rediscovery.**
