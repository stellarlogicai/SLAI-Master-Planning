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
