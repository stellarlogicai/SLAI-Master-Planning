# Forge Capacity and Budget Governance

**Status:** Future SLAIOS/Forge planning  
**Priority guardrail:** Planning only. Do not expand current ServicesOS scope.

## Purpose

Forge should make engineering leverage financially survivable even if SLAI customer growth is slower than planned.

Core principle:

> **Execution capacity grows when the business earns the ability to pay for it.**

Forge must not turn technically available parallelism into uncontrolled founder-funded spending.

## Founder-Funded Mode

Default early-company behavior:

~~~text
Included ChatGPT/Codex capacity    use first where supported
Paid API fallback                  OFF by default
Monthly paid-AI budget             $0 until explicitly approved
Capacity forecasting               ON
Capacity reservations              ON
Emergency founder reserve          ON
Over-budget execution              founder approval required
~~~

The exact provider/account mechanism may change over time. Forge should therefore use provider abstractions rather than hard-coding a permanent billing assumption.

## Canonical Capacity Objects

### UsageEstimate

Candidate fields:

- taskSliceId,
- provider,
- model,
- taskClass,
- riskClass,
- comparableJobCount,
- p50Usage,
- p80Usage,
- p95Usage,
- unit,
- confidence,
- assumptions,
- generatedAt,
- estimatorVersion.

### CapacityReservation

Candidate fields:

- id,
- taskSliceId,
- provider,
- reservedAmount,
- unit,
- confidenceBasis,
- createdAt,
- expiresAt,
- state: RESERVED | CONSUMING | RELEASED | EXPIRED | RECONCILED.

### BudgetEnvelope

Candidate fields:

- id,
- scopeType: COMPANY | PRODUCT | PROJECT | MILESTONE | TASK,
- scopeId,
- period,
- hardLimit,
- softWarning,
- spent,
- committed,
- remaining,
- currencyOrCapacityUnit,
- paidFallbackAllowed,
- founderOverrideRequired,
- version,
- approvedBy.

### CostEvent

Candidate fields:

- id,
- productId,
- projectId,
- milestoneId,
- taskSliceId,
- provider,
- category,
- quantity,
- unit,
- amount,
- currency,
- sourceReference,
- incurredAt.

## Preflight Decision

Before a job starts:

~~~text
historical comparable jobs
+ task/risk characteristics
+ model/reasoning requirement
+ context size
+ validation burden
+ current unreserved capacity
+ applicable budget envelopes
        ↓
usage forecast
        ↓
START
SPLIT
WAIT_FOR_CAPACITY
WAIT_FOR_RESET
REQUIRES_FOUNDER_APPROVAL
~~~

SLAIDIL may assist with classification and forecast selection, but hard budget limits are deterministic.

## Reserve Before Dispatch

Do not let multiple workers double-count the same remaining allowance.

Example:

~~~text
available capacity          32
active reservations         11
founder reserve              5
schedulable capacity        16
~~~

A new job cannot consume the founder reserve without explicit authorization.

Reservations should be reconciled to actual use after the job finishes.

## Safe Exhaustion

Capacity exhaustion should produce:

~~~text
checkpoint safe state
→ stop/queue new work
→ preserve evidence
→ show reset/budget status
→ resume only when capacity returns or founder approves spend
~~~

Forbidden default behavior:

~~~text
included allowance exhausted
→ silently switch to paid API
→ continue spending
~~~

## Model Routing Under Budget Pressure

Budget pressure may choose among already-safe options.

Example:

~~~text
R2 task
Terra satisfies policy
Sol also could perform task

→ choose Terra if materially cheaper
~~~

But:

~~~text
R3 auth/payment/security task
Sol review required
capacity insufficient

→ split, wait, or request approval
→ never weaken the required review merely to save usage
~~~

## Budget Hierarchy

Long-term SLAIOS budgeting should support:

~~~text
Company budget
   ↓
Product budget
   ↓
Project budget
   ↓
Milestone / release budget
   ↓
Task-slice budget
~~~

Unused higher-level capacity is not automatically available to lower-level scopes if the governing envelope forbids it.

Budgets should support both:

- monetary limits,
- provider/included-capacity limits.

## Maturity Path

### Alpha

- overall founder-funded capacity visibility,
- task usage estimates,
- active reservations,
- founder reserve,
- hard paid-spend ceiling,
- safe wait/reset behavior.

### Later

- per-product budgets,
- project/milestone/task budgets,
- cost-to-complete forecasting,
- budget variance explanations,
- revenue-gated engineering budget growth,
- scenario planning.

## Forecast Learning

Forecasts should improve from real Forge history.

Do not use one global average. Maintain useful task classes such as:

- docs,
- frontend/UI,
- backend,
- integration,
- auth/security,
- payments,
- schema/migration,
- testing/QA,
- release-critical.

Store estimation error so the forecasting system learns whether it tends to under- or over-reserve.

## Founder Dashboard

Potential engineering-capacity view:

~~~text
Codex / provider capacity
available
reserved
founder reserve
schedulable

Paid AI
spent this month / hard limit

Engineering costs
Forge compute
CI/build/test
artifact storage
other tools

Queue
fits current capacity
waiting for reset
requires founder approval
~~~

## Long-Term Project Budgeting

As evidence grows, SLAIOS should answer:

- How much has this product/project cost to build?
- What is the remaining forecast?
- Which work class consumes the most capacity?
- Can the next release fit inside its budget?
- Would waiting for an included-usage reset materially reduce cash spend?
- Is customer revenue sufficient to expand engineering capacity?

The output is decision support, not automatic founder spending authority.

## Budget Adjustment Decision Flow

When a project or milestone is forecast to exceed an approved hard budget, SLAIOS should prepare the decision rather than force the founder to reconstruct the numbers manually.

Example:

~~~text
Current budget              $1,500
Spent                       $1,270
Committed                   $180
Remaining forecast P50      $190
Remaining forecast P80      $260
Remaining forecast P95      $340
Projected total             $1,710–$1,790
~~~

SLAIOS should explain:

- why the forecast changed,
- which work caused the variance,
- whether scope changed,
- whether provider/model usage changed,
- whether waiting for an included-capacity reset changes cash cost,
- whether scope can be reduced safely,
- the recommended revised budget,
- the confidence/risk behind the recommendation.

Possible founder actions:

~~~text
APPROVE_REVISED_BUDGET
SET_DIFFERENT_BUDGET
REDUCE_SCOPE
WAIT_FOR_RESET
PAUSE_PROJECT
REJECT
~~~

Approval creates a new version of the BudgetEnvelope and preserves the previous version and reason.

Core rule:

> **SLAIOS may recommend a larger budget. It may not grant itself one.**

## Subscription / Capacity Upgrade Recommendations

SLAIOS may also identify when recurring provider capacity is a proven bottleneck.

Examples:

- included Codex/agent capacity is repeatedly exhausted,
- work regularly waits for reset,
- paid overflow is repeatedly more expensive than a higher plan,
- SLAI revenue can support the recurring cost,
- higher capacity would materially reduce queue delay without weakening controls.

SLAIOS may compare:

~~~text
stay on current plan
vs
wait for reset
vs
buy occasional credits/usage
vs
upgrade recurring plan
~~~

The recommendation should show:

- incremental recurring cost,
- recent utilization,
- forecast demand,
- paid overflow avoided,
- expected queue/delay effect,
- impact on approved company/project budgets.

An account/plan upgrade remains a human-approved recurring budget change.

Provider plan names, limits, and prices must be refreshed from current provider information rather than hard-coded as permanent architecture.

## Multi-Dimensional Budgeting

Project health should track at least three separate dimensions:

~~~text
1. MONEY
API / cloud / CI / storage / provider spend

2. INCLUDED CAPACITY
subscription/provider allowance
remaining amount
reset timing
active reservations
founder reserve

3. WORK FORECAST
remaining task slices
required risk/model class
P50 / P80 / P95 usage
validation/retry expectations
~~~

A project may be within its cash budget while still lacking enough included capacity to finish safely before reset.

SLAIOS should be able to recommend splitting, waiting, buying approved capacity, or revising the budget depending on schedule and business priority.

## Final Rule

> **Forge may optimize within an approved budget. It may not create a larger budget for itself.**