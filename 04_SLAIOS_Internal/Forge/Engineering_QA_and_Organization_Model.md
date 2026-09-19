# SLAIOS Forge — Engineering, QA, and Organization Model

Status: Future organizational planning only.

## Purpose

Forge should increase the leverage of strong engineers.

The goal is not:

> one engineer literally equals ten engineers.

The goal is:

> one strong engineer can supervise multiple parallel engineering workers while remaining responsible for technical judgment.

## Engineer Role

A senior engineer should spend more time on:

- architecture,
- problem definition,
- scope,
- difficult debugging,
- product/technical tradeoffs,
- important code review,
- security/reliability judgment,
- and final engineering responsibility.

Forge may handle much of the repetitive work around that:

- implementation drafts,
- repetitive code edits,
- test scaffolding,
- regression runs,
- builds,
- documentation,
- change summaries,
- PR descriptions,
- release notes,
- QA handoff reports,
- evidence capture.

## Parallel Work Model

```text
Senior Engineer
      |
  defines scope
      |
 +----+----+----+
 |         |    |
Terra A  Terra B Luna
feature  tests   docs/report
 |         |    |
 +----+----+----+
      |
 automated QA
      |
 human QA
      |
 important engineering review
      |
 PR / release process
```

The engineer can begin the next issue while prior work moves through automated validation and QA.


## Clean Engineering Workflow

Forge should turn the current founder/ChatGPT/Codex/GitHub/test/report loop into a repeatable company workflow.

```text
Engineer defines desired outcome
        ↓
SLAIOS supplies:
- active product priority
- canonical current state
- architecture and semantic contracts
- repository instructions
- permissions
- relevant decision history
        ↓
Forge creates bounded task slices
        ↓
┌──────────────────────────────┐
│ implementation worker        │
│ test/validation worker       │
│ security/review worker       │
│ documentation/report worker  │
└──────────────────────────────┘
        ↓
Automated gates
- focused tests
- regression tests
- build/lint
- security/tenant checks
- scope compliance
        ↓
Consolidated evidence/report
        ↓
Senior engineer / founder review
        ↓
Approve / revise / reject
        ↓
PR / merge / release process
```

The purpose is to remove repeated coordination work around engineering, not to remove the engineer from responsibility.

As Forge matures, a human engineer should spend proportionally more time on:

- architecture,
- problem framing,
- acceptance criteria,
- difficult debugging,
- product/technical tradeoffs,
- security and reliability judgment,
- review of unusual output,
- release responsibility.

And proportionally less time on:

- restating stable repository context,
- collecting known project documents,
- writing repetitive implementation prompts,
- manually gathering test/build evidence,
- rewriting status reports,
- preparing routine handoffs.

### Shared-meaning requirement

Parallel workers should receive the same canonical definitions for important concepts and relationships. A worker should not independently reinterpret terms such as tenant, customer, booking, approved scope, payment, entitlement, or deployment state when those meanings are already defined.

SLAIOS should therefore build compact, permission-aware context packs from canonical schemas/relationships before Forge workers begin. This reduces contradictory assumptions and avoids wasting model context on rediscovering known meaning.

## Multi-Prompt Operating Mode

A future engineer should be able to submit one objective and have SLAIOS/Forge safely operate several bounded prompts at once.

Example:

```text
Engineer:
"Finish the onboarding release slice."

SLAIOS / Forge:
├── Prompt A — implementation
├── Prompt B — focused tests
├── Prompt C — security/tenant review
├── Prompt D — accessibility/UI review
└── Prompt E — documentation/report

Dependency controller:
- A and D may run in parallel
- B may scaffold independently, then validate against A's commit
- C reviews the resulting authority-sensitive diff
- E can prepare structure early but finalizes after validated state
```

The human interaction should emphasize the objective, boundaries, acceptance criteria, and final decision—not repeatedly copying stable context into five separate prompts.

### Required orchestration behavior

SLAIOS/Forge should:

- generate bounded work packages from an approved objective,
- give each worker the same canonical project/semantic context,
- assign explicit read/write scope,
- identify task dependencies before execution,
- detect likely file/schema/contract collisions,
- limit concurrency by risk, cost, and validation capacity,
- preserve independent evidence per worker,
- combine results into one release-level report,
- propose merge order without silently merging consequential changes.

A task being technically parallelizable does not mean it should run in parallel.

### Human review surface

The engineer should be able to see a compact state such as:

```text
Objective: Owner onboarding release

3 running
1 validating
1 blocked on schema decision
0 failed

Needs your decision:
- annual billing recovery behavior

Safe to continue without you:
- UI regression run
- onboarding docs
- accessibility review
```

This is the desired founder/senior-engineer leverage: several prompts can make progress while the engineer is occupied elsewhere, but uncertainty and consequential decisions return to a human instead of being silently guessed.

## QA Model

A small QA team can be highly leveraged when automated workers handle predictable checks.

Automated QA may cover:

- regression suites,
- API contracts,
- builds,
- linters,
- browser flows,
- known mobile breakpoints,
- tenant/permission tests,
- repeatable payment test scenarios where safe.

Human QA should focus on:

- exploratory behavior,
- confusing UX,
- unusual workflows,
- device differences,
- edge cases,
- "technically works but feels wrong" problems,
- and real-user thinking.

## Failure Handoff

When QA finds a defect, SLAIOS/Forge should package:

- reproduction steps,
- relevant screenshots/logs,
- failing test when available,
- affected commit,
- environment,
- severity,
- expected vs actual behavior,
- related task/requirement.

This reduces the "what exactly happened?" loop.

## Reports

Forge should generate routine engineering reports from execution evidence instead of asking humans to rewrite facts that the system already knows.

Reports may include:

- what changed,
- why,
- files touched,
- tests run,
- build result,
- QA result,
- risks,
- remaining work,
- contributors,
- AI assistance,
- timeframe,
- required approval.

Humans review the report before it becomes authoritative.

## Contribution Attribution

Record separately:

Human contribution:
- architecture,
- scope,
- problem definition,
- review,
- key decisions,
- QA findings,
- final approval.

AI assistance:
- generated implementation,
- tests,
- documentation,
- analysis.

Do not erase human engineering contribution because the human did not physically type every line.

## Early Hiring Strategy

If founder engineering + AI leverage can safely carry the product for longer, SLAI may be able to hire earlier in areas that directly improve traction:

- sales,
- onboarding/implementation,
- customer success,
- support,
- operations.

This is a capital-allocation option, not a rule.

## Engineering Hiring Trigger

Hire experienced human engineering capacity when engineering becomes a genuine constraint, for example:

- review queue becomes a bottleneck,
- important work waits on one technical owner,
- production complexity exceeds safe single-owner capacity,
- security/infrastructure/payments need dedicated ownership,
- incident load rises,
- customer growth creates more engineering demand than the current human team can responsibly supervise.

The likely first technical hires should be strong senior engineers capable of independent ownership and supervising their own AI workers.

## Scaled Human Team Example

```text
Founder / Engineering Director
 |
 +-- Senior Engineer — Platform
 |     +-- AI workers
 |
 +-- Senior Engineer — Product
 |     +-- AI workers
 |
 +-- Senior Engineer — Infrastructure/Security
 |     +-- AI workers
 |
 +-- QA Lead
       +-- QA engineers
       +-- automated QA workers
```

The desired result is a relatively small, experienced human team with strong AI leverage.

## Efficiency Principle

Faster does not mean removing quality gates.

The goal is to remove waiting and repetitive clerical engineering work while preserving human judgment, review, QA, security, and accountability.

> Humans solve problems. SLAIOS and Forge reduce the operational friction around solving them.
