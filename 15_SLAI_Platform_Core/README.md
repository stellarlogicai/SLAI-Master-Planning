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

Current planning source:

- `ServicesOS_to_Core_Extraction_Map.md` — read-only architecture audit of the active ServicesOS V1 branch, Core V1 classifications, duplicate/superseded implementations, target boundaries, provisional extraction order, and the final V1 delta-audit gate.

Current intended sequence:

```text
Finish ServicesOS customer-ready V1
↓
Stabilize the proven V1 baseline
↓
Freeze/reference the exact extraction-source commit
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

## Shared-Capability Examples

Potential shared capabilities include:

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

## Guardrails

- ServicesOS remains the active product.
- Do not overbuild shared infrastructure before real product use proves the need.
- Shared services must reduce complexity for divisions and customers, not create new coupling.
- A product must not depend on an unfinished future division to complete its current MVP.
- Complexity belongs inside the platform, not inside the customer’s day.

## 2026-09-09 New Shared Planning

New reusable platform planning:

- `SLAI_Inventory_Intelligence_and_Communication_Architecture.md` — independent inventory-intelligence service concept, event-ledger model, deterministic forecasting/exceptions, cross-product inventory APIs, shared communication SLM strategy, cheapest-capable routing, evaluation, and validation boundaries.

The inventory capability is intentionally not owned by RetailOS. RetailOS is a future consumer; ServicesOS and other products may consume it later where justified.

Shared intelligence principle:

> **The intelligence systems specialize; the communication model generalizes; frontier AI is an escalation layer, not the default engine behind every sentence.**
