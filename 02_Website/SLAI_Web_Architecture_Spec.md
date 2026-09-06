# SLAI Web Architecture Specification

**Status:** Planning contract  
**Implementation:** Future / post-ServicesOS-V1  
**Last Updated:** 2026-09-06  
**Owner:** Jamie Brown / future Web Platform owner  
**Priority Guardrail:** ServicesOS remains priority one.

## Purpose

Operationalize the existing SLAI Web vision into enforceable production boundaries.

Target architecture:

> **Versioned shared core + declarative layout + structured customer layer + published ServicesOS public-data release + bounded integrations.**

A normal customer website should be reproducible from explicit versions and customer configuration without modifying shared platform code.

## Architectural Layers

### 1. Shared Web Core

Owns reusable code and policy:

- responsive shell,
- accessibility primitives,
- SEO/schema infrastructure,
- analytics hooks,
- forms,
- shared components,
- ServicesOS public-data connector,
- booking connector,
- deployment adapter,
- error handling,
- security defaults.

**Rule:** routine customer jobs must not modify the shared core.

### 2. Layout Layer

A layout is declarative composition, not a forked site.

It may define:

- section order,
- supported variants,
- spacing/typography behavior,
- content requirements,
- optional sections,
- image-placement rules,
- responsive composition.

It must not own:

- customer facts,
- private ServicesOS data,
- booking truth,
- payment truth,
- tenant secrets,
- duplicated connector logic.

### 3. Customer Layer

Owns customer-specific presentation/configuration:

- tenant/customer ID,
- layout selection,
- brand tokens,
- logo/asset IDs,
- copy overrides,
- enabled sections,
- CTA choices,
- public integration settings,
- approved local overrides.

Routine customer work should be limited to this layer whenever possible.

## Versioning Contract

Each production site should record at minimum:

- web core version,
- layout ID/version,
- ServicesOS public-data release ID when used,
- customer manifest version,
- booking connector version,
- deployment/build ID,
- source commit/reference,
- approval record ID.

A deployment must be reproducible from these references.

## Protected-Boundary Rule

Customer jobs should classify files/components as:

- **allowed** — customer-layer edits permitted,
- **protected** — no edits without higher-authority approval,
- **generated** — deterministic output; do not hand-edit,
- **integration-owned** — connector/config only.

Shared-core, booking connector, deployment, auth, and security changes require higher-authority review.

## Public Data Boundary

ServicesOS websites must not read directly from the operational database.

Preferred flow:

```text
Owner edits ServicesOS
→ Save Draft
→ Review
→ Publish
→ immutable/versioned public content release
→ SLAI Web consumes release
```

Operational truth may change continuously. Public truth changes only through an explicit publication boundary.

## Booking Boundary

The website owns customer-facing UX.

ServicesOS owns:

- availability truth,
- scheduling rules,
- final validation,
- atomic reservation,
- booking creation,
- duplicate prevention.

Final booking submission must be server-validated and idempotent.

## AI Boundary

AI should not perform deterministic work that configuration/scripts can perform exactly.

Use deterministic mechanisms for:

- copying verified tenant fields,
- loading assets,
- applying tokens,
- instantiating known layouts,
- build/test/link checks,
- content-release diffs.

Use AI for:

- awkward-copy refinement,
- unusual responsive issues,
- business-specific section emphasis,
- failure diagnosis after deterministic evidence,
- bounded customer-layer implementation.

Shared-core architecture changes require senior human review plus appropriate high-capability AI support.

## Release Principle

No customer-facing production deployment is complete until:

1. automated gates pass,
2. human QA passes,
3. client approval is recorded when required,
4. production approval is recorded,
5. production smoke test passes,
6. rollback reference is known.

## Scope Guardrail

This document defines the future production contract. It does not authorize building the Web Engine before ServicesOS V1 is stable.
