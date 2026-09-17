# SLAI Platform Core V1 — Scope and Contracts

**Status:** Authoritative pre-extraction planning contract  
**Created:** 2026-09-17  
**Owner:** Jamie Brown / Stellar Logic AI  
**Active priority:** ServicesOS customer-ready V1 remains priority one  
**Execution gate:** Core extraction begins only after ServicesOS V1 is customer-ready, stable enough for controlled refactoring, and Jamie explicitly promotes Core work.

---

## 1. Purpose

This document locks the **minimum useful boundary for SLAI Platform Core V1** so the post-ServicesOS extraction phase can execute quickly without reopening basic architecture decisions.

It works with:

- `ServicesOS_to_Core_Extraction_Map.md` — where the proven implementations currently live,
- `SLAI_Core_V1_Execution_Plan.md` — how extraction should be performed,
- `SLAI_Security_Foundation.md` — company-wide security principles,
- `Cross_Product_Linking_Principles.md` — future linking rules,
- the SLAI Web V1 planning contracts under `../02_Website/`.

Core V1 is **not** a universal framework for every future SLAI idea.

It is the smallest stable shared platform foundation proven by ServicesOS and needed to let SLAI Web begin as a sibling product without rebuilding the same platform plumbing.

---

# 2. Reference Implementation

Current read-only audit baseline:

```text
Repository: stellarlogicai/ServicesOS
Branch: feature/owner-onboarding-v1
Application-code checkpoint:
8bce3919d8e26d2643a476e44b89ed34b7d34718
Add employee extra-work request review
```

Documentation-only commits exist after that application checkpoint.

At extraction start, the exact **final customer-ready ServicesOS V1 application commit** replaces this checkpoint as the source of truth.

Rule:

> **Promote the proven final V1 implementation. Do not prefer an older `/shared` implementation merely because it already looks generic.**

---

# 3. Core Thesis

```text
Build product capability where it is first proven.
Keep the boundary clean.
Promote only what is genuinely shared.
Keep product workflows outside universal Core.
```

SLAI Platform Core should stay:

- boring,
- stable,
- security-conscious,
- product-neutral,
- small enough to understand,
- versioned,
- independently testable.

Product complexity belongs in products and optional domain modules.

---

# 4. Core V1 Must Include

## 4.1 Shared contracts and technical primitives

Core V1 owns reusable contracts for:

- identifiers and references,
- typed/versioned schemas,
- service/API result shapes,
- structured errors/error codes,
- event envelopes and naming conventions,
- audit envelopes,
- safe logging conventions,
- capability/feature evaluation conventions,
- request/correlation IDs where useful.

The contract layer must not depend on React, ServicesOS routes, cleaning workflows, or product UI.

---

## 4.2 Identity / authentication abstraction

Core V1 owns:

- authenticated-user/session contract,
- auth-provider interface,
- user/profile resolution contract,
- recent-auth/sensitive-action hooks,
- product-neutral auth lifecycle behavior,
- Firebase adapter for the first implementation.

Core V1 does **not** own ServicesOS onboarding screens, ServicesOS business setup, cleaning-specific roles, or product-specific messages.

### V1 identity decision

Core V1 reuses the **identity implementation pattern and contract**, but it does not require every SLAI product to share one production Firebase project or one operational user database.

SLAI Web remains isolated in its own Firebase/GCP product projects as already planned.

Future single-sign-on/account federation may be added when justified, but Core V1 must not delay SLAI Web by building a company-wide identity service that has not been proven necessary.

---

## 4.3 Tenant / business / membership contract

Core V1 owns reusable concepts for:

- `tenantId` / business identity,
- user-to-tenant membership,
- product membership,
- active/suspended membership state,
- tenant context resolution,
- tenant-aware authorization context,
- explicit cross-product references,
- safe tenant switching where a product supports it.

### V1 data-boundary decision

> **Shared tenant identity does not mean shared product databases.**

Each product keeps its private operational data under its own product/environment authority.

Core may define stable references such as:

```text
slaiBusinessId
productId
productTenantId
userId
membershipId
```

but a ServicesOS tenant record must not become the universal database document that SLAI Web, GrowthAI, EducationOS, and every future product directly mutate.

---

## 4.4 Authorization framework

Core V1 owns the mechanism for evaluating authority, not a fixed role list for every product.

Conceptually:

```text
authenticated identity
+ tenant/product membership
+ role/capabilities
+ entitlement
+ resource/source authority
+ operation sensitivity
+ recent-auth requirement where applicable
= allowed action
```

Products define their own supported roles and capabilities.

Examples:

```text
ServicesOS
admin / employee / customer / super-admin behavior

SLAI Web
Owner / Editor / Viewer
+ separate delegated SLAI Support Mode
+ separate Platform Operator authority
```

Core provides common authorization contracts and helpers while products own role meaning.

Rule:

> **UI visibility is never the authorization boundary. Consequential actions must fail closed at trusted server/platform authority.**

---

## 4.5 Security foundation primitives

Core V1 owns reusable security patterns and helpers for:

- tenant isolation,
- verified actor resolution,
- least privilege,
- server-authoritative writes for consequential actions,
- idempotency,
- safe retry patterns,
- request validation,
- bounded payloads,
- safe CORS/origin handling where relevant,
- no secret leakage,
- re-auth/confirmation hooks,
- audit requirements,
- cross-tenant denial tests,
- emulator/security-test patterns.

Core V1 does **not** impose one giant Firestore/Storage rules file on every product.

Each product deploys product-specific rules built against shared security expectations and tested with shared patterns.

---

## 4.6 Audit

Core V1 defines the audit contract and reusable implementation foundation.

Minimum audit fields should support:

```text
auditEventId
occurredAt
actor
productId
tenant/business reference
action
resource/entity reference
result
reason/context where required
correlation/request reference
safe before/after references where needed
metadata that contains no secrets
```

Security-sensitive audit records should be created by trusted/server authority where practical.

Products own their domain event names and human-readable product context.

---

## 4.7 Event contracts

Core V1 owns:

- event naming rules,
- versioned event envelope,
- actor/product/tenant/source references,
- correlation/audit references,
- schema validation,
- adapter interface for transport.

Core V1 does **not** require Kafka, Redis, or a company-wide durable event platform.

The first transport may remain local/product-specific.

The important V1 asset is a stable contract that avoids future tightly coupled rewrites.

---

## 4.8 SLAI product billing and entitlements

Core V1 owns shared platform concepts for **customers paying SLAI for SLAI products**.

Examples:

```text
ServicesOS subscription
SLAI Web subscription
future SLAI product subscription
```

Core V1 does not treat a ServicesOS business charging its own customer as the same domain.

Core V1 should provide:

- product entitlement contract,
- subscription state contract,
- approved product/price mapping pattern,
- provider-customer linkage,
- server-owned checkout/activation pattern,
- webhook verification pattern,
- idempotent lifecycle processing,
- cancellation/reactivation hooks,
- entitlement checks,
- Stripe adapter for the first provider implementation.

Product-specific price IDs, plan names, feature bundles, and customer-facing wording remain product-owned.

### Billing separation rule

```text
SLAI Platform Billing
    = customer pays SLAI for a product

Operational / Merchant Payments
    = a product customer charges their own customer
```

Do not merge those responsibilities into one ambiguous package.

---

## 4.9 AI usage metering / credits

Core V1 includes a shared **metering engine contract**, using the newer server-authoritative ServicesOS/GrowthAI pattern rather than the old client-authoritative shared implementation.

### V1 decision

Use:

> **Product-specific balances and allowances under one shared metering engine.**

Do not create one universal cross-product credit wallet in V1.

Why:

- different products may package AI differently,
- separate product economics remain measurable,
- one product cannot accidentally consume another product's included allowance,
- accounting/support is simpler,
- a future bundle can intentionally pool credits later if evidence supports it.

Core owns:

- metering event contract,
- balance/allowance/reservation concepts,
- idempotent consume/restore behavior,
- period/reset contract,
- server-authoritative mutation rules,
- usage/audit references.

Products own:

- action names,
- action costs,
- monthly allowances,
- included/free behavior,
- customer wording.

---

## 4.10 Notification foundation

Core V1 includes only the shared notification foundation needed by products:

- notification envelope,
- recipient/user/tenant references,
- channel/provider interface,
- template identifier contract,
- send/result state,
- idempotency/deduplication conventions,
- audit/logging conventions.

Products own:

- actual message copy,
- business triggers,
- recipient selection rules,
- product-specific templates.

A universal marketing/communications engine is not Core V1.

---

# 5. Core V1 Candidates That Must Not Block SLAI Web

These may be promoted during Core V1 only when the final V1 dependency graph or SLAI Web bootstrap proves the need:

- generic reporting helpers,
- generic media/storage helpers,
- generic migration tooling,
- generic data-access helpers,
- reusable rate-limit helpers,
- generic webhook utilities beyond billing,
- generic support-session helpers.

The rule is:

> **Useful is not the same as required. Do not delay SLAI Web to perfect optional Core packages.**

---

# 6. Explicitly Outside Universal Core V1

The following remain ServicesOS product/domain logic or optional future reusable modules unless a second product proves shared need:

- leads,
- estimates/quotes,
- service jobs/bookings,
- scheduling/routing,
- employees/field-worker workflows,
- field photos/evidence workflow,
- customer operational CRM semantics,
- service checklists,
- cleaning methods/products,
- training workflows,
- time tracking,
- reviews/reputation workflow,
- job scope / extra-work workflow,
- service add-on catalog,
- merchant/customer payment records,
- Stripe Connect merchant workflows,
- Tap to Pay merchant workflows,
- ServicesOS dashboards,
- GrowthAI business-growth features,
- SLAI Web Website Profile/layout/publishing logic.

These may use Core. They do not belong in Core merely because more than one future product might eventually want something similar.

---

# 7. Repository and Package Strategy

## V1 decision

Create a dedicated repository when extraction becomes active:

```text
stellarlogicai/SLAI-Platform-Core
```

Do not turn the ServicesOS repository into the permanent source of truth for cross-product packages.

### Initial package shape

Keep the first package surface small:

```text
SLAI-Platform-Core/
├── packages/
│   ├── contracts/
│   ├── platform/
│   ├── firebase-adapter/
│   └── stripe-adapter/
├── tests/
├── docs/
└── package configuration
```

Conceptual ownership:

### `@slai/contracts`

- IDs/references,
- schemas,
- errors,
- audit/event envelopes,
- entitlement/metering contracts.

### `@slai/platform`

- identity/session abstractions,
- tenancy/membership,
- authorization helpers,
- audit/event/logging helpers,
- feature/capability evaluation,
- notification foundation.

### `@slai/firebase-adapter`

- Firebase Auth adapter,
- Firebase/Firestore-specific resolvers/helpers,
- Firebase security/test helpers that are genuinely reusable.

### `@slai/stripe-adapter`

- SLAI product-billing provider implementation,
- checkout/webhook/provider normalization helpers.

Do not split into dozens of micro-packages in V1.

### Consumption rule

Products consume versioned Core packages. They must not import another product's application code to obtain shared capability.

---

# 8. Versioning Contract

Use Semantic Versioning once packages are published.

```text
MAJOR = breaking public contract
MINOR = backward-compatible capability
PATCH = backward-compatible fix/hardening
```

During extraction, prereleases may use:

```text
0.x development versions
or
1.0.0-rc.N
```

Core V1 is ready for stable `1.0.0` when:

- ServicesOS is fully migrated to the extracted packages required by V1,
- ServicesOS regression/security/tenant-isolation gates pass,
- package APIs are documented,
- no duplicate authoritative ServicesOS implementation remains for the promoted capability,
- dependency direction is clean,
- the packages can be consumed without importing ServicesOS product code.

SLAI Web should start from stable Core V1 and may expose refinements that become `1.0.x` or `1.1.x` rather than reopening the entire architecture.

---

# 9. Dependency Direction

Allowed:

```text
Product
  ↓
Product domain module
  ↓
SLAI Platform Core
  ↓
Provider adapter
```

Also allowed:

```text
Product
  ↓
Core contract
  ↓
product-specific implementation
```

Forbidden:

```text
SLAI Platform Core → ServicesOS application code
SLAI Platform Core → SLAI Web application code
SLAI Web → ServicesOS private application internals
ServicesOS → SLAI Web application internals
Core contract package → provider-specific UI
```

Provider adapters may depend on provider SDKs. The product-neutral contract layer should not.

---

# 10. Data Ownership and Cross-Product Linking

Core owns **references and contracts**, not all business data.

Preferred model:

```text
SLAI business/account identity
        │
        ├── ServicesOS product membership / tenant reference
        └── SLAI Web product membership / tenant reference
```

Each product owns its own private operational state.

Cross-product workflows use:

- explicit server APIs,
- approved public-data projections,
- explicit connector records,
- signed/verified server-to-server requests where needed,
- future versioned events where justified.

Never use direct browser reads into another product's private production database as the linking strategy.

---

# 11. SLAI Web Consumption Contract

SLAI Web is the first independent Core consumer.

At SLAI Web startup, Core should provide enough reusable foundation that Web does **not** rebuild from zero:

- authentication/session pattern,
- tenant/business membership pattern,
- authorization/capability engine,
- product entitlement/billing foundation,
- audit contract,
- logging/error contract,
- shared event/schema conventions,
- optional metering foundation if SLAI Intelligence credits are used.

SLAI Web remains responsible for:

- Website Profile,
- site roles/capability definitions,
- site/publication state,
- Web Core/layout system,
- assets,
- domains,
- forms,
- publishing/releases/rollback,
- ServicesOS connector,
- website-specific billing plans and product wording.

Core must not force ServicesOS role names, routes, onboarding, or data model into SLAI Web.

---

# 12. Definition of Core-Ready Code During Remaining ServicesOS V1 Work

Until extraction begins, new or modified ServicesOS platform-like code should prefer these characteristics when practical without delaying V1:

- product-specific orchestration stays outside reusable primitives,
- server authority stays explicit,
- tenant/user/role inputs are validated,
- provider-specific behavior has a clear boundary,
- schemas are explicit,
- side effects are auditable,
- errors are structured,
- dependencies flow inward cleanly,
- tests verify authorization and cross-tenant denial,
- no speculative abstraction is added merely for a future product.

This is a design discipline, not permission for pre-V1 refactoring.

---

# 13. Core V1 Success Definition

Core V1 succeeds when all are true:

1. ServicesOS continues to work correctly after migration.
2. Promoted capabilities have one authoritative implementation path.
3. Tenant isolation and authorization are at least as strong as the final ServicesOS V1 baseline.
4. Product billing/entitlement authority remains server-controlled.
5. Core packages contain no ServicesOS routes, cleaning UI, booking workflow, or other product assumptions.
6. Core can be versioned and tested independently.
7. SLAI Web can begin without copying ServicesOS platform code.
8. SLAI Web does not need direct access to ServicesOS private operational data.
9. Future products can adopt Core selectively rather than inheriting irrelevant product modules.
10. Core remains understandable enough that small, controlled changes can be reviewed and regression-tested.

---

# 14. Locked V1 Decisions Summary

```text
Reference implementation:
ServicesOS final customer-ready V1

First independent consumer:
SLAI Web

Shared database:
No giant shared operational database

Product cloud isolation:
Yes; product/environment boundaries remain explicit

Auth strategy:
Shared contract + Firebase adapter; no mandatory company-wide SSO service in Core V1

Role strategy:
Shared authorization mechanism; product-defined roles/capabilities

Billing strategy:
Shared SLAI product entitlement/billing foundation; merchant payments separate

Credits strategy:
Shared metering engine + product-specific balances/allowances

Events strategy:
Shared contracts first; durable company-wide event infrastructure later only if earned

Repo strategy:
Dedicated SLAI-Platform-Core repository at active extraction

Package strategy:
Small package set, not dozens of micro-packages

Versioning:
Semantic Versioning

Universal operational modules:
Deferred until proven by second-product need
```

---

# 15. Final Rule

> **Core V1 should make the second product faster without making the first product less stable.**

If an abstraction does not help ServicesOS remain correct and SLAI Web start cleanly, it does not belong in the first extraction merely because it might be useful someday.
