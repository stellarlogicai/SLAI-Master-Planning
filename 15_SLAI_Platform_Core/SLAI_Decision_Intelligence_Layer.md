# SLAI Decision Intelligence Layer

**Status:** Future shared-platform planning  
**Implementation status:** Specification only; not part of active Platform Core V1 extraction  
**Priority guardrail:** ServicesOS remains the active build.

## Purpose

The **SLAI Decision Intelligence Layer** is the reusable company-wide layer for fast, structured, low-cost operational decisions that do not require a frontier model by default.

It generalizes the earlier inventory-specific concept named **SLAI Deterministic Intelligence Layer** so SLAIOS, Forge, ServicesOS, inventory intelligence, RetailOS, and future SLAI products can share one stable architectural name before implementation begins.

## Core Rule

> **Enforce deterministically when the system can know the answer. Use bounded intelligence when judgment is probabilistic. Escalate only when capability or risk requires it. Humans remain responsible for consequential decisions.**

The rename does **not** weaken deterministic enforcement. Deterministic policy remains the hard foundation for permissions, authority, resource locks, budgets, exact contract rules, and other boundaries the system can enforce directly.

## Layered Decision Model

```text
Request / Event / State
        ↓
Tier 0 — Deterministic policy and calculations
        ↓
Tier 0.5 — Bounded decision/scoring intelligence where needed
        ↓
Structured result + confidence + reason codes
        ↓
Optional local/shared SLAI communication model
        ↓
Frontier-model escalation only when needed
        ↓
Human approval where consequence requires it
```

### Tier 0 — Deterministic

Examples:

- permissions and authority,
- exact repository/path write boundaries,
- resource leases and concurrency locks,
- known dependency edges,
- schema/version checks,
- budgets and spending caps,
- fixed calculations,
- exact policy rules,
- validation requirements,
- blocked/prohibited actions.

A model must never be allowed to override a deterministic denial.

### Tier 0.5 — Bounded Decision Intelligence

Use lightweight statistical, ML, classifier, scoring, or other bounded intelligence only where the answer cannot be known safely from exact rules alone.

Potential examples:

- task classification,
- semantic dependency detection,
- unusual-risk detection,
- context relevance,
- routing confidence,
- anomaly scoring,
- escalation recommendation,
- likely contract impact.

Outputs should be structured and auditable, for example:

```text
outcome
confidence
reasonCodes[]
evidenceRefs[]
recommendedNextState
```

Low-confidence or high-risk results should move to a conservative path, stronger review, or human decision rather than silently continuing.

## Relationship to Language Models

The Decision Intelligence Layer is not a general-purpose chatbot.

Preferred routing remains:

```text
deterministic code
→ bounded decision intelligence where justified
→ local/shared SLAI communication model
→ lower-cost frontier model
→ strongest frontier model
```

The communication model explains structured truth. Frontier models handle genuinely difficult reasoning, implementation, architecture, security review, or other work that earns the cost.

## SLAIOS / Forge Use

Future SLAIOS and Forge are expected to use this layer for decisions such as:

- task/risk classification,
- required validation profile,
- model/reviewer routing,
- repository eligibility,
- exact and semantic collision detection,
- dependency state,
- approval requirement,
- retry/escalation policy,
- cost/budget thresholds,
- context relevance.

Known conflicts should be blocked deterministically. Bounded intelligence may discover likely undeclared conflicts, but it cannot bypass locks or authority rules.

## Capacity and Budget Decisions

SLAIDIL may support Forge/SLAIOS preflight decisions by combining historical job evidence, task classification, model requirements, context size, validation burden, current capacity, and applicable budget envelopes.

Candidate outputs include:

~~~text
START
SPLIT
WAIT_FOR_CAPACITY
WAIT_FOR_RESET
REQUIRES_FOUNDER_APPROVAL
BLOCKED_POLICY
~~~

Important boundary:

> **Forecasting may be probabilistic. Budget enforcement is deterministic.**

A bounded model may estimate likely usage or detect that a task resembles an expensive class of work. It may not raise a hard spending limit, consume founder reserve, enable paid fallback, or weaken a required security/review policy.


## Human-Control Boundary

The layer may calculate, classify, score, recommend, and route.

It does not independently authorize consequential public, financial, legal, employment, destructive, production, security, or shared-platform actions.

## Evaluation Requirement

Before any learned/bounded component is trusted, SLAI should maintain evaluation fixtures covering:

- classification accuracy,
- confidence calibration,
- false-safe rate,
- escalation correctness,
- semantic collision detection,
- context relevance,
- risk routing,
- reproducibility,
- latency,
- operating cost.

For security-sensitive or authority-bearing decisions, deterministic enforcement remains the final control.

## Adoption Rule

Do not force every product to use this layer merely because it exists.

A capability should move into the shared Decision Intelligence Layer only when repeated product/internal use proves that shared implementation reduces duplication without creating harmful coupling.

## Naming Rule

**SLAI Decision Intelligence Layer** is the canonical name going forward.

The older phrase **SLAI Deterministic Intelligence Layer** should be treated as the predecessor name. Its deterministic philosophy remains foundational, but new planning and future implementation should use the new canonical name to avoid expensive code and contract renames later.
