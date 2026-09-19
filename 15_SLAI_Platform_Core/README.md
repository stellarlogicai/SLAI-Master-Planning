# SLAI Platform Core

**Status:** Shared architecture and company-wide standards  
**Implementation status:** Planning foundation; not a standalone active build

## Purpose

This folder defines the shared principles, capabilities, standards, and architecture that SLAI software divisions may inherit.

It exists to reduce duplicated work, lower long-term operating cost, preserve consistent security and UX expectations, and let future divisions benefit from proven capabilities without forcing unfinished dependencies into active products.

## Core Rule

> Build simply where a capability is first needed. Keep it modular and core-ready. Promote it into shared infrastructure only after repeated use proves the value.

## Current Topics

- cross-product linking,
- product-promotion rules,
- ecosystem architecture,
- modular operating-system architecture,
- product ecosystem mapping,
- shared security foundations,
- transparent variable-cost governance,
- and future reusable platform boundaries.

## Core V1 Extraction Planning

ServicesOS is the reference implementation for the first real SLAI Platform Core extraction.

Authoritative Core V1 planning set:

1. `ServicesOS_to_Core_Extraction_Map.md` — read-only architecture audit of the active ServicesOS V1 implementation, current duplicate/superseded paths, Core classifications, and candidate extraction boundaries.
2. `SLAI_Core_V1_Scope_and_Contracts.md` — locks what belongs in Core V1, what stays outside, dependency direction, package/repository strategy, data ownership, versioning, credits strategy, and SLAI Web consumption boundaries.
3. `SLAI_Core_V1_Execution_Plan.md` — controlled post-V1 extraction milestones, branch/repository setup, acceptance gates, validation, Codex prompt standard, stop conditions, and release checklist.

Current planning audit source:

```text
ServicesOS repository: stellarlogicai/ServicesOS
Active V1 branch: feature/owner-onboarding-v1
Current application-code checkpoint:
8bce3919d8e26d2643a476e44b89ed34b7d34718
Add employee extra-work request review
```

Documentation-only commits follow that application checkpoint. At extraction start the final customer-ready ServicesOS V1 application commit replaces this checkpoint as the authoritative source.

Current intended sequence:

```text
Finish ServicesOS customer-ready V1
↓
Stabilize the proven V1 baseline
↓
Freeze/reference the exact extraction-source commit
↓
Run final ServicesOS → Core delta audit
↓
Extract SLAI Platform Core V1 in controlled slices
↓
Migrate and revalidate ServicesOS against extracted Core
↓
Release/freeze Core V1
↓
Start SLAI Web as the first independent Core consumer
↓
Use SLAI Web to validate and refine only proven cross-product boundaries
```

Do not begin the extraction early merely because the architecture has been documented.

## Core V1 Locked Direction

The first extraction is intentionally narrower than the full long-term SLAI vision.

Core V1 focuses on proven cross-product platform foundations such as:

- shared contracts/schemas/errors,
- identity/auth abstraction,
- tenant/business membership context,
- authorization mechanism,
- security primitives,
- audit/event/logging conventions,
- SLAI product billing and entitlements,
- product-scoped AI metering/credits,
- bounded notification foundations.

Operational product capabilities such as scheduling, jobs, estimates, field workflows, training, checklists, reviews, merchant payments, and website publishing remain product/domain modules unless repeated real use proves they should be promoted later.

Shared platform does **not** mean one giant shared operational database. Products retain explicit environment/data authority and connect through bounded contracts, APIs, projections, and future versioned events where justified.

## Shared-Capability Examples

Potential shared capabilities beyond or after V1 include:

- identity and permissions,
- billing and AI credits,
- notifications,
- audit logs,
- learning and certification interfaces,
- compliance interfaces,
- marketplace foundations,
- usage metering,
- data portability,
- and common security controls.

## Future Shared Semantic Layer — Not a Core V1 Requirement

A later SLAI architecture may promote proven schemas, references, relationships, authority rules, and domain terminology into a shared semantic layer that helps products and internal agents interpret the same concepts consistently.

Conceptually:

```text
canonical schemas
+ explicit entity relationships
+ authority/source-of-truth rules
+ versioned events/references
        ↓
deterministic entity resolution / traversal
        ↓
small permission-aware context packs
        ↓
AI reasoning only over the facts needed for the task
```

Potential benefits include:

- less repeated schema rediscovery,
- smaller model context,
- fewer contradictory agent interpretations,
- more reliable cross-product references,
- better auditability and replay,
- cleaner SLAIOS/Forge orchestration.

This is a **future semantic/ontology direction**, not permission to expand Core V1.

Core V1 should only expose the schemas/references/events already justified by ServicesOS → SLAI Web reuse. A richer semantic layer must be earned by repeated cross-product/internal-agent use.

## Guardrails

- ServicesOS remains the active product.
- Do not overbuild shared infrastructure before real product use proves the need.
- Shared services must reduce complexity for divisions and customers, not create new coupling.
- A product must not depend on an unfinished future division to complete its current MVP.
- Complexity belongs inside the platform, not inside the customer’s day.
- Core packages must never depend on ServicesOS or SLAI Web application code.
- A capability moves into universal Core because proven reuse justifies it, not because it sounds generally useful.

## 2026-09-09 New Shared Planning

New reusable platform planning:

- `SLAI_Inventory_Intelligence_and_Communication_Architecture.md` — independent inventory-intelligence service concept, event-ledger model, deterministic forecasting/exceptions, cross-product inventory APIs, shared communication SLM strategy, cheapest-capable routing, evaluation, and validation boundaries.

The inventory capability is intentionally not owned by RetailOS. RetailOS is a future consumer; ServicesOS and other products may consume it later where justified.

Shared intelligence principle:

> **The intelligence systems specialize; the communication model generalizes; frontier AI is an escalation layer, not the default engine behind every sentence.**
