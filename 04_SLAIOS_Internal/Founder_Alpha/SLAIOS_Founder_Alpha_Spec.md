# SLAIOS Founder Alpha Specification

**Status:** Future implementation specification  
**Priority guardrail:** ServicesOS remains the active build. Founder Alpha begins only after the approved sequence reaches this gate.

## Activation Sequence

Current approved sequence:

~~~text
ServicesOS customer-ready V1
→ SLAI Platform Core extraction/revalidation
→ SLAI Web V1
→ ServicesOS V2
→ SLAIOS Founder Alpha
→ Forge Alpha
~~~

The timing is intentional: by this point founder coordination, product/repository count, engineering context, and operating complexity are expected to become real bottlenecks.

## Alpha Purpose

Founder Alpha is the smallest SLAIOS version that helps Jamie answer:

> **What are we building, what is true right now, what needs me, what can AI safely do, what does the business cost to operate, and what should happen next?**

It is not the full future company OS.

## Alpha Capabilities

### Founder cockpit

The preferred Founder Alpha experience is a **desktop-first SLAIOS client** connected to the persistent SLAIOS control plane.

The desktop client may run on Jamie's high-trust workstation, but authoritative company state, decisions, budgets, permissions, and Forge authority must remain outside the UI itself so secure web/employee clients can be added later without redesigning the system.

See `../SLAIOS_Desktop_and_Workstation_Architecture.md`.

Primary areas:

- **Today**
- **Products**
- **Engineering**
- **Decisions**
- **Memory**

The Today view should emphasize exceptions and founder decisions rather than information overload.

### Business-health analytics

Founder Alpha should support a small operational analytics set:

- new businesses,
- active businesses,
- new users,
- users active now,
- users active in the last 24 hours,
- MRR where authoritative billing data exists,
- direct operating cost,
- fully allocated operating cost,
- average cost per active business,
- high-cost tenant exceptions,
- basic product health.

Canonical metric definitions are maintained in Founder_Analytics_and_Unit_Economics.md.

### Company intelligence

Founder Alpha should provide:

- Master Planning retrieval,
- approved decision history,
- current product priority,
- repository/branch state,
- architecture/contract references,
- permission-aware context packs,
- work/task state,
- model/risk routing,
- engineering approvals,
- provenance for retrieved facts.

### Decision intelligence

SLAIOS should consume the canonical **SLAI Decision Intelligence Layer (SLAIDIL)** from Platform Core planning.

Hard authority remains deterministic.

Bounded intelligence may assist with classification, semantic-risk detection, context relevance, confidence scoring, routing, and escalation recommendations.

Uncertainty defaults to **block / verify / escalate**, not silent continuation.

### Engineering-capacity awareness

Founder Alpha should understand that SLAI may remain founder-funded for a meaningful period.

It should therefore surface:

- included Codex/engineering capacity where supported,
- current estimated remaining capacity,
- reserved capacity for active/queued Forge work,
- founder emergency reserve,
- optional paid API budget,
- current engineering AI/tooling spend,
- tasks that fit current capacity,
- tasks waiting for reset or budget approval.

Paid API fallback is **disabled by default** in founder-funded mode.

## Workstation Boundary

Founder Alpha should assume the intended two-machine founder topology:

~~~text
Jamie's workstation
→ high-trust SLAIOS Desktop / approvals / architecture / sensitive administration

Second PC / Forge host
→ lower-trust isolated execution workers / builds / tests / coding-agent execution
~~~

Employees are not granted general access to the founder workstation. Future employee access should be mediated by SLAIOS identity/permissions into authorized worker sessions.

## SaaS-Ready Foundation

Founder Alpha is internal-first, but its core entities should include organization/tenant ownership even while Stellar Logic AI is the only organization.

This is a schema/authority boundary, not a requirement to build customer billing, white-label controls, enterprise onboarding, or other external product features in Alpha.

## Explicit Alpha Exclusions

Do not include merely because they exist in the long-term vision:

- full HR/payroll,
- employee-performance systems,
- rewards/leaderboards,
- full company chat replacement,
- full Product Studio,
- full Product Fleet analytics,
- external/white-label SLAIOS,
- large worker farms,
- autonomous production deployment,
- unrestricted AI authority.

## Core Data Objects

Founder Alpha planning should support versioned contracts for at least:

- Product, Repository, Decision, Objective, TaskSlice, ContextSnapshot, PermissionEnvelope, Approval, ForgeJob, WorkerAttempt, ResourceLease, EvidenceBundle, ValidationResult, Blocker, ArtifactReference, ReleaseCandidate, UsageEstimate, CapacityReservation, BudgetEnvelope, CostEvent, UsageEvent, and ProductMetric.

These schemas should become explicit before implementation.

## Human-Control Rule

> **SLAIOS prepares, evaluates, routes, records, and enforces approved boundaries. Jamie remains the final authority for consequential founder decisions.**

## Alpha Success

Founder Alpha succeeds when Jamie can operate the active engineering/company workflow with materially less manual context reconstruction while retaining clearer cost, authority, and review control than the current manual process.