# SLAI Platform Core V1 — Execution Plan

**Status:** Authoritative pre-extraction execution plan  
**Created:** 2026-09-17  
**Owner:** Jamie Brown / Stellar Logic AI  
**Expected active window:** after ServicesOS customer-ready V1 stabilizes; target planning assumption is early November 2026  
**Active priority until promotion:** ServicesOS remains priority one

---

## 1. Purpose

This document converts the existing SLAI Core strategy and ServicesOS extraction map into a controlled implementation sequence.

The objective is to make the Core phase an **execution project**, not another architecture brainstorm.

When Core work is promoted, Jamie/Codex should already know:

- the exact source baseline,
- what belongs in Core V1,
- what stays out,
- which implementation is authoritative,
- the extraction order,
- the acceptance gates,
- the stop conditions,
- the required validation,
- and what must be reported after every slice.

This plan works with:

- `SLAI_Core_V1_Scope_and_Contracts.md`
- `ServicesOS_to_Core_Extraction_Map.md`
- `SLAI_Security_Foundation.md`
- `Cross_Product_Linking_Principles.md`
- SLAI Web V1 planning under `../02_Website/`

---

# 2. Execution Principle

> **Extract one proven capability at a time. Make ServicesOS consume it. Prove zero unacceptable regression. Then move to the next slice.**

Do not perform a giant framework rewrite.

Do not extract all candidate modules in parallel.

Do not mix unrelated ServicesOS feature work into the Core extraction branch.

Do not broaden scope merely because nearby code looks reusable.

---

# 3. Entry Gate — Core Work Does Not Start Until

All should be true unless Jamie explicitly waives a specific item:

- ServicesOS V1 is customer-ready and deployed or otherwise frozen as the known-good release baseline.
- Wife/current V1 acceptance has completed enough real workflow testing to expose beta-critical defects.
- Beta-critical defects are fixed or explicitly contained.
- ServicesOS owner SaaS billing and payment-critical flows are stable enough for customer use.
- Current tenant-isolation/privacy/security release checks pass.
- Current employee authorization/field workflow checks pass for the shipped V1 scope.
- A final customer-ready ServicesOS source commit is identified.
- That exact commit is tagged or otherwise protected as the extraction reference baseline.
- `ServicesOS_to_Core_Extraction_Map.md` receives a final delta audit against that exact commit.
- Jamie explicitly says to promote SLAI Platform Core V1 into active implementation.

### Current planning audit baseline

```text
Repository: stellarlogicai/ServicesOS
Branch: feature/owner-onboarding-v1
Application checkpoint:
8bce3919d8e26d2643a476e44b89ed34b7d34718
Add employee extra-work request review
```

This checkpoint is **planning evidence only**. Replace it with the final stabilized V1 application commit at extraction start.

---

# 4. Required Branch / Repository Setup

## 4.1 Protect the ServicesOS baseline

At Core start:

```text
final customer-ready ServicesOS V1 commit
        ↓
protected/tagged reference baseline
```

Recommended reference naming concept:

```text
servicesos-v1-customer-ready
```

Exact tag/release naming can follow the repo's active convention.

## 4.2 ServicesOS extraction integration branch

Create a dedicated branch/worktree from the final V1 baseline, for example:

```text
feature/slai-core-extraction
```

Purpose:

- migrate ServicesOS imports/consumption,
- remove promoted duplicates only after replacement is proven,
- run regression/security validation,
- keep Core migration isolated from normal product changes.

## 4.3 Core repository

Create:

```text
stellarlogicai/SLAI-Platform-Core
```

Initial structure should follow `SLAI_Core_V1_Scope_and_Contracts.md` and remain intentionally small.

## 4.4 Worktree strategy

Preferred active setup:

```text
workspace/
├── ServicesOS/              # extraction integration branch/worktree
└── SLAI-Platform-Core/      # Core repo
```

Codex should be told explicitly which repository(s) a slice may touch.

Do not let a Core task modify SLAI Web before Core V1 is released and Web is promoted to active work.

---

# 5. Pre-Extraction Audit — Milestone 0

## Goal

Freeze the final implementation truth before moving code.

## Tasks

1. Record final V1 application commit SHA.
2. Compare final V1 against current planning checkpoint `8bce391`.
3. Re-read:
   - current `SERVICESOS_V1_CURRENT_STATE.md`,
   - root and nested `AGENTS.md`,
   - `docs/FRAMEWORK_EXTRACTION.md`,
   - current root `/shared/`,
   - `servicesos-web/src/shared/`,
   - candidate auth/tenant/permission/billing/audit/credit modules,
   - relevant Cloud Functions/gateways and tests.
4. Update every entry in `ServicesOS_to_Core_Extraction_Map.md` with exact final paths.
5. Mark each duplicate as:
   - current authority,
   - compatibility layer,
   - historical/stale,
   - safe to remove later.
6. Record current test/build/rules baselines from the final V1 branch.
7. Record final ServicesOS production/security invariants that must not change during extraction.

## Exit criteria

- no candidate Core slice points to an unknown/stale implementation,
- exact dependencies are understood well enough to extract the first slice,
- test commands are known,
- rollback target is protected,
- no product feature work is mixed into the extraction plan.

## Stop condition

Stop if final V1 reality materially contradicts the current Core scope. Update planning first; do not improvise architecture during extraction.

---

# 6. Milestone 1 — Core Repository and Contracts Foundation

## Goal

Create the independent package/release skeleton without changing ServicesOS behavior.

## Implement

Initial packages:

```text
packages/contracts
packages/platform
packages/firebase-adapter
packages/stripe-adapter
```

Foundation includes:

- package/build/test configuration,
- versioning strategy,
- lint/format conventions,
- minimal release notes/changelog approach,
- public API/export boundaries,
- no ServicesOS application imports,
- Core-level test harness.

Move/copy only the first approved low-risk contracts/primitives needed by the next milestone.

## Acceptance criteria

- Core repository builds/tests independently,
- no product-specific imports exist,
- package public APIs are explicit,
- product-neutral contracts can be imported into a small test fixture,
- nothing in production ServicesOS has changed yet.

## Stop conditions

Stop if packaging choices require broad ServicesOS rewrites before any functional capability is extracted.

---

# 7. Milestone 2 — Shared Contracts, Errors, Logging, Events

## Goal

Extract the lowest-risk product-neutral primitives first.

## Candidate sources

```text
servicesos-web/src/shared/api/
servicesos-web/src/shared/schemas/
servicesos-web/src/shared/logging/
servicesos-web/src/shared/events/
servicesos-web/src/shared/features/
selected product-neutral utils
```

## Extract

- shared identifiers/references,
- schema/version helpers,
- service/API result shapes,
- structured errors,
- safe logging primitives,
- event envelope/naming conventions,
- capability/feature evaluation primitives where genuinely generic.

## ServicesOS migration

Update ServicesOS to consume the extracted package(s) for only the promoted primitives.

Do not delete local code until tests prove the new path is authoritative.

## Acceptance criteria

- ServicesOS behavior remains unchanged,
- full affected web/unit tests pass,
- Core tests pass,
- build passes,
- no ServicesOS domain event names are forced into universal Core contracts unless intentionally namespaced/treated as product events,
- no browser singleton event bus is misrepresented as a durable cross-product transport.

---

# 8. Milestone 3 — Identity and Tenant Context

## Goal

Separate platform identity/session/tenant concepts from ServicesOS onboarding/product orchestration.

## Candidate sources

```text
servicesos-web/src/contexts/AuthContext.jsx
activeTenant helpers
servicesos-web/src/services/tenantService.js
servicesos-web/src/services/multiTenantService.js
shared/tenants/
server-side token/profile/tenant verification patterns
employee authorization/session gateways
owner onboarding bootstrap gateway
```

## Extract

Core contracts/helpers for:

- auth provider adapter,
- session/user identity,
- profile resolution,
- tenant/business membership,
- product membership references,
- tenant context,
- safe active-tenant resolution,
- recent-auth hook/interface.

Firebase-specific behavior belongs in the Firebase adapter, not the contract package.

## Keep in ServicesOS

- owner onboarding orchestration,
- business profile setup,
- ServicesOS SaaS agreement flow,
- ServicesOS role wording,
- ServicesOS subscription UI,
- booking/customer/employee product workflows.

## Acceptance criteria

- ServicesOS login/logout/session behavior remains correct,
- active/suspended/invalid profiles behave the same or more safely,
- tenant switching remains correct where currently supported,
- customer/employee/admin access remains properly bounded,
- cross-tenant negative tests pass,
- no ServicesOS onboarding dependency exists inside Core identity packages,
- a minimal second-product test fixture can authenticate/resolve tenant context without importing ServicesOS.

## Security stop condition

Any weakening of tenant isolation, identity verification, or server authority stops the milestone immediately.

---

# 9. Milestone 4 — Authorization / Permissions

## Goal

Promote the authorization mechanism without forcing ServicesOS role names onto future products.

## Candidate sources

```text
servicesos-web/src/core/permissions/
ROLE_PERMISSIONS in AuthContext
server-side owner/employee authorization helpers
Firestore/Storage authorization tests
GrowthAI/field/owner gateway permission patterns
```

## Extract

- capability/permission contract,
- role-to-capability evaluation helpers,
- resource/operation checks,
- entitlement-aware authorization hook/interface,
- sensitive-operation/re-auth contract,
- server-side fail-closed authorization helpers where generic.

## Product-owned

ServicesOS keeps its role definitions/capability mapping.

SLAI Web later defines Owner/Editor/Viewer and internal support/operator behavior against the same mechanism.

## Acceptance criteria

- all existing ServicesOS protected workflows preserve authority,
- UI permission checks remain aligned with server authority,
- cross-tenant and wrong-role denial tests pass,
- Core can express a mock Owner/Editor/Viewer role set without changing package code,
- no universal hard-coded ServicesOS role enum is required.

---

# 10. Milestone 5 — Audit, Security Helpers, and Idempotency Patterns

## Goal

Consolidate the strongest proven security/audit patterns.

## Candidate sources

```text
shared/audit/
servicesos-web/src/services/auditTrailService.js
newer Cloud Function gateway evidence/audit patterns
current idempotency/validation helpers
rules/security tests
```

## Extract

- audit event contract,
- server-safe audit writer abstraction,
- correlation/request reference helpers,
- idempotency key/result conventions,
- validated bounded payload helpers where generic,
- security-test fixtures/patterns that are product-neutral.

## Acceptance criteria

- one authoritative audit contract exists,
- sensitive writes can create server-authoritative audit evidence,
- no secrets/payment data leak into logs/audit payloads,
- ServicesOS audit behavior remains available,
- duplicate stale audit implementations are removed only after migration is proven.

---

# 11. Milestone 6 — SLAI Product Billing and Entitlements

## Goal

Extract the pattern for a customer paying SLAI for a product without mixing it with merchant payment processing.

## Prefer current V1 server-authoritative sources

```text
servicesos-web/src/services/ownerBillingService.js
cloud-functions/ownerOnboardingBillingGateway.js
cloud-functions/ownerSubscriptionActivationWebhook.js
current entitlement/activation state
current billing tests
```

Older browser-side shared Stripe helpers are reference material, not automatic authority.

## Extract

- product entitlement contract,
- subscription lifecycle contract,
- provider customer linkage,
- approved price/product mapping interface,
- checkout gateway pattern,
- verified webhook processing,
- idempotency,
- cancellation/reactivation hooks,
- entitlement evaluation,
- Stripe adapter implementation.

## Keep in ServicesOS

- ServicesOS plan/price IDs,
- monthly/annual ServicesOS product configuration,
- ServicesOS onboarding wording/UI,
- Stripe Connect merchant onboarding,
- customer invoice/payment workflows,
- Tap to Pay/merchant card-present payments.

## Acceptance criteria

- browser state cannot fabricate paid entitlement,
- verified provider events remain authoritative,
- duplicate/stale webhooks are safe,
- ServicesOS subscription lifecycle remains correct,
- SLAI Web can later define its own plans using the same Core billing contract,
- no merchant-payment concepts leak into universal product-entitlement APIs.

## Security stop condition

Any regression in entitlement authority, webhook verification, ownership checks, or payment metadata validation stops the milestone.

---

# 12. Milestone 7 — AI Metering / Credits

## Goal

Promote the generic server-authoritative metering pattern without copying GrowthAI product rules into Core.

## Prefer newer sources

```text
cloud-functions/growthAICreditEntitlement.js
cloud-functions/growthAIGateway.js
current GrowthAI credit/balance tests
```

Do not promote the old direct-client Firestore credit mutation model as authoritative.

## Extract

- product-scoped balance/allowance contract,
- reservation/available concepts,
- idempotent consume/restore flow,
- reset/period contract,
- server-authoritative mutation helper/interface,
- usage event/audit reference.

## V1 rule

```text
Shared metering engine
+
product-specific balances / allowances / action costs
```

No universal pooled wallet in V1.

## Acceptance criteria

- ServicesOS/GrowthAI balance behavior remains correct,
- failed provider calls preserve proper restore semantics,
- duplicate requests cannot double-spend credits,
- product action names/costs remain product configuration,
- a second mock product can define a separate balance/allowance using the same engine.

---

# 13. Milestone 8 — Notification Foundation

## Goal

Extract only the notification primitives clearly useful across products.

## Extract

- notification envelope,
- recipient/tenant references,
- channel/provider interface,
- template identifier contract,
- send/result state,
- dedupe/idempotency convention,
- safe logging/audit behavior.

## Keep product-owned

- copy,
- trigger rules,
- recipient selection,
- service-business messaging workflows,
- marketing campaigns.

## Acceptance criteria

- ServicesOS current notifications remain functional,
- product-specific content does not move into Core,
- SLAI Web can later send product-specific notifications through the same foundation.

This milestone may be deferred to Core V1.1 if SLAI Web can begin safely without it and final V1 evidence does not justify immediate extraction.

---

# 14. Milestone 9 — Duplicate Cleanup and ServicesOS Full Migration

## Goal

Remove competing authoritative implementations only after all promoted slices are proven.

Known historical duplicate areas include:

```text
/shared/audit vs local audit service
/shared/billing vs active ServicesOS billing
/shared/tenants vs active tenant services
historical shared credits vs current server-authoritative credits
```

## Tasks

- identify every remaining duplicate for promoted capabilities,
- keep compatibility shims only where required,
- delete/retire stale code with clear migration notes,
- make dependency direction explicit,
- update ServicesOS docs/import examples,
- update `docs/FRAMEWORK_EXTRACTION.md` to point to the modern Core contracts rather than act as competing authority.

## Acceptance criteria

- one authoritative path per promoted capability,
- no ServicesOS application file is imported by Core,
- no stale shared helper remains likely to be chosen accidentally,
- ServicesOS build/tests use the extracted packages.

---

# 15. Milestone 10 — Full ServicesOS Regression and Security Gate

## Goal

Prove the extraction did not damage the first product.

## Required validation categories

Run the current authoritative commands from repository instructions; report actual current totals rather than reusing old counts.

At minimum validate:

- full ServicesOS web tests,
- Cloud Functions tests,
- Employee App tests where affected,
- Firestore rules tests,
- Storage rules tests,
- lint,
- production build,
- tenant-isolation negatives,
- customer identity/privacy,
- employee authorization/session,
- owner/admin permissions,
- billing/entitlement activation/lifecycle,
- GrowthAI credit behavior,
- field-photo/job-scope/other security-sensitive gateway checks touched by shared identity/authorization changes,
- production-like smoke in a controlled non-production environment where appropriate.

## Required manual acceptance

Check at least:

- owner login/session,
- customer/employee login boundaries,
- tenant switching if supported,
- owner billing/entitlement state,
- core owner workflow,
- employee field workflow,
- any consequential action whose authority path moved into Core.

## Exit criteria

- no critical regression,
- no weakened security boundary,
- no unexplained tenant isolation difference,
- rollback path remains known,
- ServicesOS can be considered stable on extracted Core.

---

# 16. Milestone 11 — Core V1 Release

## Goal

Produce a stable, documented Core version that a second product may consume.

## Required deliverables

- Core V1 package release/tag,
- package/API documentation,
- changelog/release notes,
- migration notes from ServicesOS local/shared paths,
- compatibility matrix,
- test evidence summary,
- known limitations,
- explicit deferred modules,
- rollback/reference information.

## V1 release rule

Do not call Core `1.0.0` merely because files were moved.

Release only when ServicesOS is actually consuming the promoted packages and the full gate passes.

---

# 17. Milestone 12 — SLAI Web Bootstrap Validation

## Goal

Use SLAI Web as the first independent consumer without reopening Core into a universal rewrite.

SLAI Web should consume Core for applicable platform foundations such as:

- identity/session pattern,
- tenant/membership pattern,
- authorization mechanism,
- product billing/entitlement foundation,
- audit/event/logging contracts,
- metering if used.

SLAI Web still owns its website-specific roles, Website Profile, publishing, domains, deployment, layouts, forms, and connector logic.

## Validation questions

- Can SLAI Web start without importing ServicesOS application code?
- Can SLAI Web define Owner/Editor/Viewer roles without changing Core?
- Can SLAI Web define its own subscription plans without changing Core contracts?
- Can it use separate Firebase/GCP projects while reusing Core?
- Can it audit consequential actions using the same contract?
- Can it remain standalone while connecting to ServicesOS only through explicit bounded interfaces?

## If a boundary defect appears

Fix only the proven shared abstraction defect.

Do not automatically move SLAI Web-specific behavior into Core.

---

# 18. Codex Execution Standard

Core extraction touches identity, tenancy, permissions, billing, release behavior, and security. Default model recommendation for consequential extraction slices:

```text
Recommended model: Sol
Reason: Core extraction changes shared production/security boundaries that will affect multiple SLAI products.
```

Lower-risk documentation/inventory work may use Luna. Ordinary isolated implementation can use Terra only when the slice does not involve consequential auth/tenant/billing/security authority.

## Every Codex prompt must instruct Codex to read

1. `$HOME/.codex/AGENTS.md`
2. ServicesOS repository root `AGENTS.md`
3. nearest relevant nested `AGENTS.md`
4. `docs/servicesos-beta/SERVICESOS_V1_CURRENT_STATE.md`
5. relevant Core planning document(s)
6. task-specific implementation files/tests

## Required prompt shape

```text
Recommended model: Sol
Reason: ...

Goal
<one extraction delta>

Scope
<exact capability and allowed areas>

Do not touch
<unrelated products/features/files>

Acceptance criteria
<behavior + security + dependency requirements>

Validation
<exact current repo test/build commands>

Stop conditions
<what requires stopping rather than improvising>

Report back
- files changed
- tests/build run and results
- public contract changed, if any
- migrations/compatibility shims added
- remaining duplicate code
- security/tenant/billing implications
- blockers or assumptions
- commit SHA if committed
```

Do not ask Codex to "extract SLAI Core" as one task.

---

# 19. Slice-Level Stop Conditions

Codex should stop and report rather than continue when:

- the final V1 implementation differs materially from the planning map,
- the slice requires changing unrelated product behavior,
- tenant isolation would need to be weakened,
- a provider/API assumption is unverified and consequential,
- a migration would require destructive production data changes not already planned,
- tests reveal an existing production-critical defect unrelated to the extraction,
- multiple competing authoritative implementations cannot be reconciled safely,
- the task unexpectedly expands into another Core capability,
- a public package API would need a breaking redesign before the first consumer migration is complete.

---

# 20. Core V1 Release Gate Checklist

Before Core V1 is considered complete:

```text
[ ] Final ServicesOS V1 source commit recorded
[ ] Extraction map updated against final V1
[ ] Core repository exists with controlled package surface
[ ] Contracts/errors/logging/events promoted where required
[ ] Identity/session extracted
[ ] Tenant/membership extracted
[ ] Authorization framework extracted
[ ] Audit/security helpers extracted
[ ] SLAI product billing/entitlements extracted
[ ] Credits/metering extracted if retained in V1
[ ] Notification foundation extracted or explicitly deferred
[ ] ServicesOS consumes promoted Core packages
[ ] Competing stale implementations removed/retired
[ ] Full ServicesOS regression passes
[ ] Tenant isolation/security tests pass
[ ] Billing/entitlement tests pass
[ ] Core package tests pass
[ ] Documentation/API contracts complete
[ ] Version/release created
[ ] Known limitations recorded
[ ] Rollback/reference path recorded
[ ] SLAI Web entry gate updated to require Core V1
```

---

# 21. Definition of Done

Core V1 is done when:

> **ServicesOS still works as the proven first product, the shared platform capabilities have clean product-neutral ownership, and SLAI Web can begin without copying those capabilities out of ServicesOS.**

The goal is not maximum abstraction.

The goal is a proven foundation that makes the next product materially faster and safer to build.
