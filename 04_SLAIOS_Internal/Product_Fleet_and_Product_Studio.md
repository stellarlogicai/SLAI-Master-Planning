# SLAIOS Product Fleet and Product Studio

Status: Future planning only.

## Product Fleet

SLAIOS should become the control tower for every live SLAI product.

The goal is not a wall of metrics.

The goal is to answer:

> What changed? Why does it matter? What needs a human decision?

## Product Health Layers

### Technical Health

- uptime,
- errors,
- API/provider failures,
- deployment health,
- latency/performance,
- database/storage issues,
- security incidents.

### Customer Health

- active customers,
- onboarding completion,
- support volume,
- churn/retention,
- feature adoption,
- customer satisfaction signals,
- beta/pilot feedback.

### Business Health

- MRR/ARR,
- subscription movement,
- payment failures,
- refunds,
- infrastructure cost,
- AI cost,
- gross-margin signals where defensible.

### Product Health

- releases,
- critical bugs,
- beta blockers,
- feature usage,
- roadmap/milestone status,
- backlog pressure,
- release confidence.

### AI Health

- model/provider usage,
- latency,
- failure rate,
- credits/usage,
- fallback usage,
- deterministic vs paid AI workflows,
- spend.

## Executive Product Briefing

SLAIOS should summarize across products:

```text
3 things need attention

ServicesOS
Payment failures increased after latest release.

GrowthAI
Provider cost is above expected range.

EducationOS
Parked / no action required.

Everything else
Normal.
```

Recommendations must be grounded in authorized canonical data.

## Product Pages

Each product may have:

- current status,
- owner,
- customers,
- revenue,
- support,
- GitHub/release status,
- incidents,
- AI usage,
- current milestone,
- key decisions,
- risks,
- opportunities,
- recent contributions.

## Correlation and Decision History

Over time, SLAIOS may correlate product changes with outcomes.

Example:

```text
Release
  ->
workflow change
  ->
support volume increases
  ->
conversion drops
  ->
prior decision retrieved
  ->
human reviews recommendation
```

Correlation should be presented as evidence, not certainty.

---

# Product Studio

## Purpose

Product Studio helps authorized SLAI employees turn ideas into disciplined product work.

It should help create good products and stop weak ideas from becoming distractions.

## Workflow

```text
Idea
 -> Problem
 -> Target user
 -> Evidence
 -> User workflow
 -> MVP boundary
 -> UX concepts
 -> Architecture
 -> Security/privacy review
 -> Business model
 -> Implementation plan
 -> Prototype
 -> Testing
 -> Release
 -> Real-world outcome
```

Every stage should preserve ownership, evidence, decisions, and contributors.

## Idea Vault

Classify ideas so creativity does not become uncontrolled execution:

```text
ACTIVE
Approved current work

NEXT
Approved future candidate

PARKED
Worth preserving, not currently active

EXPERIMENTAL
Needs evidence

REJECTED
Intentionally not pursued + reason
```

SLAIOS should retrieve prior related ideas before creating duplicates.

## Challenge Function

SLAIOS should be allowed to say:

- this duplicates an existing capability,
- this conflicts with current priorities,
- evidence is too weak,
- complexity is too high for the current stage,
- extend an existing product instead,
- document and park this.

Ideas are not automatically tasks.

## Product Design Assistance

Authorized users may ask SLAIOS to:

- gather approved customer feedback,
- compare prior decisions,
- define user journeys,
- draft requirements,
- explore UX directions,
- generate visual concepts through approved creative tooling,
- create architecture options,
- identify dependencies,
- define acceptance criteria,
- and prepare a canonical Product Brief.

Keep separate states for:

- concept,
- proposed requirement,
- approved requirement,
- approved design,
- implementation,
- released behavior.

An AI mockup is not automatically a product contract.

## Product Brief

A mature concept may produce:

- problem,
- target user,
- evidence,
- goals,
- scope,
- non-goals,
- workflows,
- acceptance criteria,
- technical considerations,
- security/privacy considerations,
- risks,
- dependencies,
- success metrics,
- owners,
- contributors,
- required approvals.

This can become controlled input to Forge or another engineering workflow after human approval.

## Priority Rule

Product Studio should reinforce, not undermine, company focus.

If ServicesOS is the active priority, Product Studio may capture future ideas without promoting them into engineering work.
