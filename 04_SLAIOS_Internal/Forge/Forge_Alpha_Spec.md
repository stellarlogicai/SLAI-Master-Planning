# Forge Alpha Specification

**Status:** Future implementation specification  
**Parent system:** SLAIOS  
**Priority guardrail:** ServicesOS remains the active build.

## Purpose

Forge Alpha proves that SLAIOS can execute one bounded engineering task with materially less founder coordination while preserving or improving the validation quality of the current Jamie + ChatGPT + Codex workflow.

Core rule:

> **Forge executes. SLAIOS governs.**

## Initial Boundary

Alpha begins with:

- one approved repository,
- one isolated worker,
- one bounded task slice,
- one pinned starting commit,
- one explicit permission envelope,
- one approved validation profile,
- one evidence bundle,
- human approval before merge/release.

No production credentials. No autonomous production deployment. No large worker pool.

## Codex / Engineering Agent Integration

Forge must not depend on automating the Codex desktop UI.

Use a provider abstraction such as:

~~~text
EngineeringAgentProvider

startJob()
streamEvents()
pauseJob()
resumeJob()
cancelJob()
requestRevision()
getUsage()
getResult()
~~~

A Codex programmatic provider may use the supported Codex SDK, app-server, agent interface, or equivalent supported programmatic surface available at implementation time.

This keeps Forge independent from one UI or one permanent provider contract.

A future Codex/SLAIOS plugin may be useful as a human-facing doorway into SLAIOS context, but it is not required for Forge execution.

## Founder-Funded Mode

Alpha should assume that SLAI may still be primarily founder-funded.

Default policy:

~~~text
included Codex/engineering capacity     PRIMARY
paid API automatic fallback            DISABLED
task usage forecasting                 ENABLED
capacity reservation                   ENABLED
founder emergency reserve              ENABLED
over-budget execution                  JAMIE APPROVAL REQUIRED
~~~

Running out of included capacity should normally produce a safe queue/wait state rather than silently generating API charges.

## Task Preflight

Before dispatch, Forge should evaluate:

- product/repository,
- task class,
- risk class,
- recommended model/reviewer,
- context size,
- expected files/contracts,
- validation burden,
- comparable historical jobs,
- estimated capacity use,
- available unreserved capacity,
- budget envelope.

Output:

~~~text
START
SPLIT
WAIT_FOR_CAPACITY
WAIT_FOR_RESET
REQUIRES_FOUNDER_APPROVAL
BLOCKED_POLICY
~~~

## Usage Forecasting

Forge should learn from completed jobs.

Useful historical inputs include:

- task class,
- risk class,
- model/reasoning level,
- context-pack size,
- files inspected,
- files changed,
- validation profile,
- tests/build workload,
- repair loops,
- elapsed time,
- actual measured usage/cost,
- success/failure.

Prefer distributions over one-point guesses:

~~~text
P50 expected usage
P80 expected usage
P95 expected usage
forecast confidence
~~~

Do not downgrade a security/payment/auth task below its required model/review level merely to fit a capacity budget.

## Capacity Reservation

Queued/running jobs must not all assume the same remaining allowance.

Forge should support CapacityReservation so schedulable capacity can be derived from:

~~~text
available capacity
- active reservations
- founder emergency reserve
= schedulable capacity
~~~

If exact provider quota data is unavailable programmatically, the capacity provider should degrade safely and use available telemetry/manual account state rather than invent a precise value.

## Deterministic Collision Enforcement

Before a worker starts:

- check active resource leases,
- declared read/write surfaces,
- contract/schema ownership,
- migration/security/payment/identity boundaries,
- known dependencies.

Known unsafe conflicts prevent dispatch.

Runtime write tools should enforce approved write scope; out-of-scope writes are denied and audited.

SLAIDIL may help identify likely semantic collisions, but probabilistic intelligence cannot bypass deterministic locks.

## Validation and Evidence

Each Alpha job should preserve:

- task/objective IDs,
- context snapshot ID,
- permission envelope,
- starting commit,
- ending commit,
- files changed,
- diff,
- tests,
- lint,
- build,
- security checks where relevant,
- warnings,
- model/provider,
- measured usage/cost,
- worker/runtime usage,
- manual QA requirement,
- approval state.

## Alpha Acceptance

Forge Alpha passes only if it demonstrates:

- correct product/repo selection,
- pinned start commit,
- instruction hierarchy loaded,
- no unauthorized file changes,
- no production credentials,
- correct risk/model/validation selection,
- required tests/build/lint,
- accurate failure reporting,
- understandable evidence bundle,
- task usage/cost telemetry,
- capacity preflight,
- human pre-merge approval,
- replayable result,
- interrupted-run recovery,
- intentional out-of-scope write blocked,
- intentional conflicting task blocked.

Routine well-understood task setup/coordination should target less than roughly 10 founder minutes before final review once the system has enough history.