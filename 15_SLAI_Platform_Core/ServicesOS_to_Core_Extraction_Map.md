# ServicesOS → SLAI Platform Core V1 Extraction Map

**Status:** Pre-extraction planning baseline / read-only architecture audit  
**Created:** 2026-09-17  
**Owner:** Jamie Brown / Stellar Logic AI  
**Active product priority:** ServicesOS customer-ready V1 remains priority one.  
**Implementation gate:** Do not begin Core extraction until ServicesOS V1 is customer-ready, stabilized, and Jamie explicitly promotes the extraction phase.

---

## 1. Purpose

This document maps the **actual current ServicesOS V1 implementation** to the future **SLAI Platform Core V1**.

Its purpose is to make the post-V1 extraction phase fast and controlled by answering, before active work begins:

- what proven shared capabilities already exist,
- where those capabilities currently live,
- which implementations are duplicated or stale,
- which capabilities belong in Platform Core V1,
- which capabilities should remain ServicesOS-specific,
- which capabilities may become optional reusable modules later,
- what dependency cleanup is required,
- and what order the extraction should follow.

This is not permission to refactor ServicesOS before V1 stabilizes.

---

## 2. Authoritative implementation source

The extraction map must be based on the **current ServicesOS V1 branch**, not `master`.

Current audited source:

```text
Repository: stellarlogicai/ServicesOS
V1 branch: feature/owner-onboarding-v1
Current-state document: docs/servicesos-beta/SERVICESOS_V1_CURRENT_STATE.md
Application checkpoint recorded there:
8bce3919d8e26d2643a476e44b89ed34b7d34718
"Add employee extra-work request review"
```

Documentation-only commits follow the recorded application checkpoint. At extraction start, always read the branch itself and record the final stabilized V1 commit rather than assuming the above SHA is still current.

### Source-of-truth rule

> **The final stabilized ServicesOS V1 branch/commit is the extraction source of truth. `master`, old framework docs, and older `/shared` implementations are historical evidence only when they conflict with the proven V1 implementation.**

---

## 3. Updated Core strategy

ServicesOS is the **reference implementation** from which SLAI Platform Core V1 will be promoted.

SLAI Web is planned as the **first independent product consumer** that validates whether the extracted platform is genuinely reusable.

Target sequence:

```text
Finish ServicesOS V1
↓
Customer-ready release
↓
Stabilize early real use
↓
Freeze/reference a known-good V1 baseline
↓
Create dedicated SLAI Core extraction branch/worktree
↓
Extract Core V1 in small validated slices
↓
ServicesOS consumes extracted Core successfully
↓
Full ServicesOS regression + security + tenant-isolation validation
↓
Freeze/release SLAI Platform Core V1
↓
Start SLAI Web V1 using Core from day one
↓
Use SLAI Web as the second-product validation of Core boundaries
```

### Critical architecture rule

> **Shared platform does not mean one giant shared product database.**

Core should provide reusable identity concepts, contracts, packages/services, security patterns, entitlements, audit/event conventions, and infrastructure adapters while products retain explicit product/environment data boundaries.

ServicesOS and SLAI Web remain sibling products.

---

## 4. Current ServicesOS architecture layers

The V1 repository already contains three distinct reusable-looking layers plus newer server-authoritative implementations.

### Layer A — ServicesOS operational core

Current location:

```text
servicesos-web/src/core/
```

Observed modules include:

```text
checklists/
contracts/
customers/
dashboard/
employees/
estimates/
leads/
messaging/
migrations/
notifications/
payments/
permissions/
photos/
reviews/
scheduling/
time-tracking/
training/
```

These modules demonstrate strong domain separation, but **being inside `core/` does not automatically make a module global SLAI Platform Core**.

Most are better classified as reusable product/domain modules unless a second product proves universal need.

### Layer B — shared technical primitives inside the web application

Current location:

```text
servicesos-web/src/shared/
```

Observed modules:

```text
api/
decisions/
events/
features/
logging/
schemas/
seed/
utils/
```

This is the strongest current candidate area for low-level Platform Core primitives.

### Layer C — root shared platform library

Current location:

```text
/shared/
```

Observed modules:

```text
audit/
billing/
credits/
crm/
notifications/
reporting/
tenants/
firestore.rules
firestore.indexes.json
storage.rules
```

This is evidence that framework extraction was already started.

However, the folder must **not** be treated as automatically authoritative. Several modules have since diverged from the active ServicesOS implementation.

### Layer D — newer server-authoritative V1 patterns

Current V1 development has also moved critical authority into Cloud Functions/gateways, including examples such as:

```text
owner onboarding/bootstrap
owner SaaS billing
subscription activation
employee authorization/session
employee field execution
field-photo upload authorization
GrowthAI provider + credit entitlement
job-scope control
extra-work gateways
```

For security-sensitive Core capabilities, these newer server-owned patterns may be more valuable than older code already labeled `shared`.

---

# 5. Core V1 classification

Classification labels used below:

- **CORE V1** — should be deliberately promoted into SLAI Platform Core before SLAI Web.
- **CORE V1 CANDIDATE** — likely shared, but inclusion requires final V1 + SLAI Web need verification.
- **REUSABLE MODULE LATER** — potentially reusable across products, but should not block Core V1/SLAI Web.
- **SERVICESOS PRODUCT** — remains ServicesOS-owned unless future evidence proves otherwise.
- **REPLACE / DO NOT PROMOTE AS-IS** — current implementation is historical, duplicated, unsafe, or superseded.

---

## 5.1 Identity, authentication, session, and user profile

**Classification:** CORE V1

### Current sources

```text
servicesos-web/src/contexts/AuthContext.jsx
servicesos-web/src/contexts/activeTenant.*
servicesos-web/src/services/multiTenantService.js
Firebase Auth / users/{uid}
server-side gateway identity verification patterns
employee server-side session/authorization gateways
```

### Current strengths

- Firebase Auth integration is proven.
- User profile loading is tenant-aware.
- Active/suspended/invalid profile states are handled.
- Customer, employee, admin, and super-admin behavior exists.
- Tenant switching exists for super-admin behavior.
- Current server gateways verify Firebase ID tokens for protected actions.

### Current coupling / extraction problem

`AuthContext.jsx` currently mixes platform concerns with ServicesOS product orchestration, including:

- ServicesOS owner onboarding bootstrap,
- ServicesOS business-profile onboarding,
- ServicesOS SaaS agreement flow,
- ServicesOS subscription checkout,
- ServicesOS-specific user-facing messages,
- ServicesOS role assumptions,
- direct Firestore/Firebase imports,
- local tenant-service imports.

The root `shared/README.md` documents a future `shared/auth/` module, but the actual current root `/shared/` tree does **not** contain `auth/`.

### Extraction target

Split the proven concepts into a product-neutral identity/session layer such as:

```text
Identity provider adapter
User/session contract
User profile resolver
Tenant/product membership resolver
Authentication lifecycle
Recent-auth / sensitive-action hooks
Product-neutral authorization context
```

Keep ServicesOS onboarding orchestration outside the generic identity package.

### Acceptance principle

A new SLAI product must be able to authenticate and resolve user/product/tenant authority without importing ServicesOS onboarding, booking, cleaning, or payment-workflow code.

---

## 5.2 Tenant / business identity and membership

**Classification:** CORE V1

### Current sources

```text
servicesos-web/src/services/tenantService.js
shared/tenants/tenantService.js
servicesos-web/src/services/multiTenantService.js
cloud-functions/ownerOnboardingBootstrapGateway.js
users/{uid}.tenantId
canonical tenant membership structures used by server gateways
```

### Current duplication

There are two similar tenant services:

```text
servicesos-web/src/services/tenantService.js
shared/tenants/tenantService.js
```

The local ServicesOS version has evolved beyond the root shared version and includes ServicesOS subscription configuration and current diagnostics.

The root shared version is therefore evidence of the intended boundary, not the final implementation to promote unchanged.

### Extraction target

Core V1 should define:

- stable tenant/business identity contract,
- membership contract,
- tenant resolution,
- product membership/entitlement references,
- safe tenant switching rules where supported,
- tenant-aware data-access context,
- product/environment isolation rules.

### Important boundary

Do not make one product's tenant document the universal operational database for every SLAI product.

A shared SLAI business/account identity may link product-specific tenant/product records, but each product keeps its own private operational authority.

---

## 5.3 Roles, permissions, and authorization

**Classification:** CORE V1

### Current sources

```text
servicesos-web/src/core/permissions/permissionService.js
ROLE_PERMISSIONS inside servicesos-web/src/contexts/AuthContext.jsx
Firestore rules
server-side gateway authorization checks
employeeAuthorization.js
owner onboarding authorization patterns
GrowthAI gateway authorization
```

### Current duplication / mismatch

Permissions currently exist in multiple forms:

- boolean permission objects in `core/permissions/permissionService.js`,
- string permissions in `AuthContext.jsx`,
- server-side role/membership checks in gateways,
- Firestore/Storage rule enforcement.

The role model is also ServicesOS-shaped (`customer`, `employee`, `admin`, `super-admin`). SLAI Web already plans a different customer-facing role model (`Owner`, `Editor`, `Viewer`) plus separate SLAI Support/Platform Operator authority.

### Extraction target

Core V1 should own the **authorization mechanism and contracts**, not force every product into identical role names.

Target concepts:

```text
identity
+ product membership
+ tenant/business membership
+ role/capabilities
+ entitlement
+ resource/source authority
+ operation sensitivity
= allowed action
```

Products define product-specific roles/capabilities against the shared authorization framework.

### Security rule

> **UI visibility is never the authorization boundary. Consequential authority must be enforced by trusted server/platform checks.**

---

## 5.4 Tenant isolation and shared security primitives

**Classification:** CORE V1

### Current sources

```text
shared/firestore.rules
shared/storage.rules
cloud-functions/firestore.rules
cloud-functions/storage.rules
rules tests
server-side tenant/actor authorization helpers
idempotency and fail-closed gateway patterns
```

### Extraction target

Promote shared **security contracts, test patterns, authorization helpers, naming rules, and policy expectations**.

Do **not** assume every product should deploy one identical giant Firestore rules file.

SLAI Web is already planned for separate production project/resource boundaries, so Core should help products implement consistent isolation while allowing product-specific rules/deployments.

### Core V1 requirement

Core security foundations should make cross-tenant access difficult by default and testable before release.

---

## 5.5 API response, schema, logging, and error primitives

**Classification:** CORE V1

### Current sources

```text
servicesos-web/src/shared/api/
servicesos-web/src/shared/schemas/
servicesos-web/src/shared/logging/
servicesos-web/src/shared/utils/
```

### Current evidence

`core/permissions/permissionService.js` and `core/payments/paymentService.js` already consume shared response/schema/logging conventions.

### Extraction target

Promote only proven low-level primitives needed across products:

- versioned schema helpers,
- standardized service/API result contracts,
- structured error codes,
- safe logging conventions,
- correlation/request identifiers where justified,
- data validation helpers that are genuinely product-neutral.

Avoid creating a huge utility package.

---

## 5.6 Event contracts

**Classification:** CORE V1 for event **contracts/conventions**; transport may remain product-local initially

### Current source

```text
servicesos-web/src/shared/events/eventBus.js
```

### Current strength

The existing event bus was explicitly designed to reduce direct feature dependencies and already defines standardized business event names.

### Current limitation

The current event bus is an in-memory browser singleton. It is not a cross-product durable event transport.

### Extraction target

Core V1 should define:

- event naming convention,
- event envelope/schema,
- actor/tenant/product/source references,
- versioning,
- audit/correlation requirements,
- adapter contract for local or future durable transports.

Do not build Kafka/Redis or a company-wide event platform merely because the contract exists.

---

## 5.7 Audit foundation

**Classification:** CORE V1

### Current sources

```text
shared/audit/auditTrailService.js
servicesos-web/src/services/auditTrailService.js
newer server gateway audit/evidence patterns
```

### Current duplication

A root shared audit implementation and an active local audit implementation both exist.

### Extraction target

Core V1 should define an authoritative audit contract for consequential actions including:

- actor identity,
- product,
- tenant/business,
- action,
- resource/entity,
- timestamp,
- result,
- reason/context where required,
- safe before/after references,
- correlation/request ID where useful,
- no secrets in audit payloads.

Prefer server-authoritative audit writes for security-sensitive actions.

Product-specific event categories remain product-owned.

---

## 5.8 SLAI product billing and entitlements

**Classification:** CORE V1

### Do not confuse two payment domains

There are two different concepts:

```text
A. SLAI product billing
   Customer pays SLAI for ServicesOS / SLAI Web subscription

B. Merchant/operational payments
   A ServicesOS business charges its own customers for services
```

Core V1 should prioritize **A: SLAI product billing + entitlements**.

Operational merchant payments belong to ServicesOS/reusable payment modules, not the universal Platform Core.

### Current sources for product billing pattern

```text
servicesos-web/src/services/ownerBillingService.js
cloud-functions/ownerOnboardingBillingGateway.js
cloud-functions/ownerSubscriptionActivationWebhook.js
owner onboarding entitlement/activation state
Stripe customer/subscription metadata validation
```

### Why the newer V1 pattern matters

The active owner subscription flow is server-authoritative and includes:

- Firebase identity verification,
- tenant/membership verification,
- Stripe customer ownership metadata,
- server-owned Price configuration,
- idempotency,
- verified webhook activation,
- fail-closed validation.

This is a stronger Core candidate than simply promoting the older generic browser-side Stripe helper.

### Extraction target

Core V1 should provide product-neutral concepts such as:

```text
Product entitlement
Subscription state
Provider customer linkage
Approved product/price mapping
Checkout gateway pattern
Webhook verification/idempotency
Cancellation/reactivation lifecycle hooks
Entitlement checks
```

ServicesOS and SLAI Web keep separate product entitlements even when the same customer buys both.

---

## 5.9 AI credits / metering

**Classification:** CORE V1 CANDIDATE — likely yes, but promote the current server-owned pattern, not the old shared client service

### Historical root shared implementation

```text
shared/credits/aiUsageEngineService.js
```

This implementation directly reads/writes credit balances from client-side Firestore code and contains speculative operation costs for multiple future products.

**Do not promote it as-is.**

### Proven newer ServicesOS pattern

```text
cloud-functions/growthAICreditEntitlement.js
cloud-functions/growthAIGateway.js
GrowthAI client gateway/presentation code
```

The newer system includes concepts such as:

- server-authoritative balances,
- credit buckets,
- reserved credits,
- monthly allowance,
- tenant-local renewal periods,
- canonical balance normalization,
- provider-backed action costs,
- authorization,
- idempotency,
- restore/failure behavior.

### Extraction target

If SLAI Web V1 needs bounded SLAI Intelligence credits/usage, promote the **generic metering/entitlement pattern** from the newer server implementation.

Keep ServicesOS GrowthAI action names and product-specific allowances/configuration outside the generic package.

### Open decision

Decide before extraction whether credits are:

- product-specific balances under one shared metering engine,
- a company-wide wallet,
- or some bounded hybrid.

Do not assume a universal wallet merely because multiple products use AI.

---

## 5.10 Notifications

**Classification:** CORE V1 CANDIDATE

### Current sources

```text
shared/notifications/
servicesos-web/src/core/notifications/
ServicesOS server email/provider patterns
```

### Extraction target

Likely Core value exists in:

- notification envelope/schema,
- recipient identity/reference,
- channel abstraction,
- delivery state,
- idempotency,
- provider adapter boundary,
- safe rate/cost controls.

Product-specific notification content and business triggers remain in the product.

### Gate

Include only what SLAI Web and ServicesOS both concretely need for V1-era workflows. Do not build every future SMS/push/channel abstraction before demand.

---

## 5.11 Feature/entitlement controls

**Classification:** CORE V1 CANDIDATE

### Current sources

```text
servicesos-web/src/shared/features/
tenant feature checks
subscription/entitlement logic
```

### Extraction target

A small product-neutral capability/feature gate may be useful if billing and roles both rely on it.

Do not create an elaborate experimentation/feature-flag platform unless needed.

---

# 6. Reusable modules that should NOT block Core V1

The following are important, already modular, and may be reused by future products — but they should not automatically become universal Platform Core before SLAI Web.

| Capability | Current area | V1 classification | Reason |
|---|---|---|---|
| Customers / CRM | `src/core/customers`, `shared/crm` | REUSABLE MODULE LATER | Operational customer model is not required identically by every SLAI product. |
| Employees | `src/core/employees` | REUSABLE MODULE LATER | Staff/provider concepts vary by product. |
| Scheduling | `src/core/scheduling` | REUSABLE MODULE LATER | Strong reuse potential, but SLAI Web does not need to own scheduling truth. |
| Merchant payments | `src/core/payments`, active Stripe/Connect services | REUSABLE MODULE LATER | Distinct from SLAI product subscription billing. |
| Estimates | `src/core/estimates` | REUSABLE MODULE LATER | Service-business domain capability. |
| Leads | `src/core/leads` | REUSABLE MODULE LATER | Growth/CRM domain capability, not universal platform plumbing. |
| Messaging | `src/core/messaging` | REUSABLE MODULE LATER | Business messaging semantics vary; notification transport may be shared separately. |
| Photos | `src/core/photos` | REUSABLE MODULE LATER | Asset primitives may be shared; field-photo evidence is ServicesOS workflow logic. |
| Reviews | `src/core/reviews` | REUSABLE MODULE LATER | Product/business-domain capability. |
| Time tracking | `src/core/time-tracking` | REUSABLE MODULE LATER | Workforce/domain capability. |
| Training | `src/core/training` | REUSABLE MODULE LATER | Candidate future EducationOS engine; not needed for initial Web validation. |
| Checklists | `src/core/checklists` | REUSABLE MODULE LATER | Strong workflow reuse potential, but not universal platform plumbing. |
| Contracts | `src/core/contracts` | REUSABLE MODULE LATER | Agreement/version/e-sign concepts may later generalize, but product/legal workflows differ. |
| Reporting | `shared/reporting` | REUSABLE MODULE LATER | Small pure utilities may promote; do not make one universal reporting model prematurely. |

### Rule

> **Do not delay SLAI Web to perfectly extract a ServicesOS domain module that SLAI Web does not need.**

---

# 7. ServicesOS-owned capabilities that remain product code

The following should remain ServicesOS-owned during Core V1 extraction unless a concrete shared contract is separately identified:

```text
cleaning/service-business onboarding workflow
service catalog and deterministic pricing setup
lead → estimate → booking/job workflow
booking/calendar authority
Field Mode
JobPacket projection
job-scope locking and agreements
extra-work requests and approvals
employee field execution
checklist completion rules
before/after field-photo evidence workflow
cleaning methods/product guidance
routing/day progression
field safety workflow
Tap to Pay / merchant collection workflow
ServicesOS customer portal
GrowthAI business capabilities and prompts
ServicesOS-specific dashboards
```

Generic primitives discovered inside these features may later be promoted independently.

---

# 8. Known duplication and cleanup targets

These are the most obvious consolidation points identified in the 2026-09-17 audit.

## 8.1 Auth is documented but not actually extracted

`shared/README.md` describes `shared/auth/`, but that directory is absent from the current root shared tree.

Active auth still lives primarily in `servicesos-web/src/contexts/AuthContext.jsx` and is coupled to ServicesOS onboarding/billing.

**November implication:** identity extraction is real work, not a path rename.

## 8.2 Tenant service duplication

```text
servicesos-web/src/services/tenantService.js
shared/tenants/tenantService.js
```

The implementations are similar but have diverged.

**November implication:** choose/promote the proven canonical contract; do not maintain both.

## 8.3 Audit duplication

```text
servicesos-web/src/services/auditTrailService.js
shared/audit/auditTrailService.js
```

**November implication:** consolidate around one authoritative audit contract and product adapters.

## 8.4 Billing has multiple meanings and generations

```text
shared/billing/stripeService.js
servicesos-web/src/services/stripeService.js
servicesos-web/src/services/ownerBillingService.js
server owner-subscription gateways/webhooks
ServicesOS merchant-payment flows
```

**November implication:** separate **SLAI product billing/entitlements** from **merchant operational payments** before extraction.

## 8.5 Credits root module is superseded by newer secure design

```text
shared/credits/aiUsageEngineService.js          # historical/client-owned pattern
cloud-functions/growthAICreditEntitlement.js    # newer server-owned pattern
cloud-functions/growthAIGateway.js              # newer authorization/idempotency pattern
```

**November implication:** promote the newer server-authoritative architecture, not the older shared file.

## 8.6 Permission logic exists in multiple authority layers

```text
AuthContext string permission map
core/permissions boolean permission map
Firestore/Storage rules
server gateway role/membership checks
```

**November implication:** define one permission/capability contract, then enforce it through the correct trusted layers.

## 8.7 Shared rules vs deployable rules

Root `shared/` and Cloud Functions/deployment areas both contain Firestore/Storage rules.

**November implication:** determine canonical ownership/parity strategy. Core should likely share security contracts/test helpers while each product owns its deployable ruleset.

---

# 9. Files/docs that should be treated as historical rather than authoritative

## `ServicesOS/docs/FRAMEWORK_EXTRACTION.md`

The document remains valuable as historical intent, but several assumptions should not control Core V1 without revalidation.

Examples of stale/broader assumptions:

- ten-layer framework extraction before demonstrated reuse,
- broad generic database-provider abstraction,
- broad UI component extraction,
- generalized service integrations before need,
- a separate framework repo as a pre-decided requirement,
- RetailOS/SLAIOS as the next validation product,
- old subscription-tier/credit assumptions,
- older ServicesOS architecture paths.

Current direction is narrower:

> **Extract only proven platform primitives needed by ServicesOS + SLAI Web first. Add more shared modules when later products prove the need.**

---

# 10. Proposed Core V1 boundary

Working Core V1 boundary to validate before active extraction:

```text
SLAI Platform Core V1
│
├── Identity / Session
│   ├── auth provider adapter
│   ├── user profile contract
│   ├── authentication lifecycle
│   └── sensitive-action/re-auth hooks
│
├── Tenant / Business Foundation
│   ├── stable business/tenant identity
│   ├── membership
│   ├── product linkage references
│   └── tenant context/isolation helpers
│
├── Authorization
│   ├── role/capability framework
│   ├── resource/source authority contract
│   └── trusted enforcement helpers
│
├── Product Billing / Entitlements
│   ├── Stripe/provider customer linkage
│   ├── product entitlement state
│   ├── checkout/webhook patterns
│   └── lifecycle/idempotency contracts
│
├── Audit / Security Primitives
│   ├── audit event contract
│   ├── actor/context references
│   ├── tenant-isolation conventions
│   └── secure gateway patterns
│
├── Technical Contracts
│   ├── API/result standard
│   ├── schema/version helpers
│   ├── error/logging standard
│   ├── event envelope/naming
│   └── common validation primitives
│
├── AI Metering / Credits          [verify inclusion]
│   └── server-authoritative generic metering pattern
│
├── Notifications                  [verify inclusion]
│   └── bounded notification/provider contract
│
└── Feature/Capability Gates       [verify inclusion]
    └── small entitlement-aware feature contract
```

Not included merely because ServicesOS already has it:

```text
scheduling
CRM/customers
employees
estimates
leads
merchant payments
field execution
photos
reviews
training
checklists
time tracking
operational dashboards
```

Those can become optional shared modules when evidence requires them.

---

# 11. Dependency laws for extraction

These laws should govern Core V1.

### Law 1 — Core cannot depend on ServicesOS

```text
Allowed:
ServicesOS → SLAI Core
SLAI Web   → SLAI Core

Forbidden:
SLAI Core → ServicesOS product code
```

### Law 2 — Product isolation remains explicit

Shared code/contracts do not grant one product broad access to another product's data.

### Law 3 — Authority stays server-side for consequential actions

Do not reintroduce browser-authoritative billing, credit mutation, permission escalation, or sensitive cross-tenant decisions during extraction.

### Law 4 — Product roles are configurable consumers of shared authorization

Do not force ServicesOS `admin/employee/customer` or SLAI Web `Owner/Editor/Viewer` into a universal one-size-fits-all role list.

### Law 5 — Shared IDs do not imply shared operational ownership

A stable SLAI account/business reference can link product records without making Core the operational source of truth for bookings, jobs, website presentation, etc.

### Law 6 — Extract proven behavior before redesigning behavior

Core extraction should preserve customer behavior first. New product features wait until extraction/stabilization passes.

### Law 7 — Every slice must be reversible

Small extraction slices, compatibility adapters where needed, full tests, and known rollback points.

---

# 12. Recommended extraction order

The final order must be confirmed against the stabilized V1 dependency graph, but the current safest sequence is:

## Milestone 0 — Freeze and inventory the final V1 baseline

- record exact stabilized ServicesOS V1 commit,
- full tests/build/security evidence,
- dependency/import inventory,
- duplicate implementation inventory,
- create dedicated extraction branch/worktree,
- no customer-facing feature work mixed into extraction.

## Milestone 1 — Technical contracts first

Extract/promote the least behaviorally risky primitives:

```text
schemas/versioning
API/result contracts
logging/error contracts
common validation
base event envelope/naming
```

ServicesOS should consume these without behavior change.

## Milestone 2 — Identity + tenant foundation

- isolate auth provider adapter,
- isolate user/session/profile contract,
- isolate tenant/business identity and membership,
- remove owner-onboarding orchestration from generic auth,
- preserve ServicesOS login/session behavior exactly.

## Milestone 3 — Authorization + security primitives

- canonical capability model,
- trusted server authorization helpers,
- tenant isolation contracts,
- product-specific role mapping,
- rule/test conventions.

## Milestone 4 — Audit foundation

- canonical audit event contract,
- server-authoritative sensitive-action auditing,
- migrate ServicesOS audit consumers,
- remove duplicate implementations after parity is proven.

## Milestone 5 — SLAI product billing + entitlements

- separate SLAI product subscription billing from merchant payments,
- extract provider/customer/product/Price/entitlement contracts,
- preserve ServicesOS subscription lifecycle behavior,
- keep product-specific prices/config outside generic Core.

## Milestone 6 — AI metering/credits if confirmed for Core V1

- generalize the current secure server-owned entitlement/metering pattern,
- do not revive browser-side credit mutation,
- keep ServicesOS GrowthAI action catalog/config product-specific.

## Milestone 7 — Notifications / feature gates if confirmed

Only extract the smallest cross-product contract needed by ServicesOS + SLAI Web.

## Milestone 8 — ServicesOS full migration onto Core

- remove obsolete duplicate implementations only after consumers move,
- run complete regression,
- run tenant-isolation/security acceptance,
- run billing/payment/AI-credit acceptance,
- verify wife/customer workflows remain unchanged.

## Milestone 9 — Core V1 release/freeze

Core V1 is ready when ServicesOS is stable against it and the documented Core interfaces are independently consumable.

## Milestone 10 — SLAI Web bootstrap validation

Start SLAI Web using Core from day one.

Any hidden ServicesOS assumptions discovered by SLAI Web become small Core boundary fixes, not permission for another giant rewrite.

---

# 13. Core V1 acceptance gate before SLAI Web

SLAI Platform Core V1 should be considered ready for SLAI Web when all are true:

- ServicesOS V1 customer behavior is preserved.
- ServicesOS full tests/build/security validation pass against extracted Core.
- Tenant A cannot access Tenant B data through Core consumers.
- Product-specific data remains behind product-specific authority boundaries.
- Auth/session logic no longer imports ServicesOS onboarding/payment workflow code.
- Product roles/capabilities can differ without changing the Core authorization mechanism.
- SLAI product billing/entitlements are separate from merchant operational payments.
- Consequential billing/permission/credit mutations remain server-authoritative.
- Duplicate legacy implementations are either removed or clearly deprecated.
- Core packages/interfaces have independent tests.
- Core has explicit version/compatibility metadata.
- A minimal second application can authenticate, resolve tenant/product authority, check entitlement, use audit/security primitives, and consume shared technical contracts without importing ServicesOS application code.

That minimal second application may be the first SLAI Web bootstrap itself.

---

# 14. Open decisions to resolve before November active extraction

These are real architecture decisions; do not guess them during implementation.

## A. Package / repository topology

Choose the smallest maintainable model for Core V1:

- separate repository,
- workspace/monorepo package,
- versioned internal package consumed by product repos,
- or another controlled arrangement.

The old framework guide pre-selected a separate repo. Revalidate rather than inheriting that decision automatically.

## B. Shared SLAI identity across separate product cloud projects

SLAI Web planning intentionally isolates Web production resources from ServicesOS.

Define how one SLAI customer identity/account maps safely across separate product projects without broad cross-product database access.

## C. Global business/account ID vs product tenant IDs

Define whether Core introduces a stable SLAI organization/business identifier that links product-specific tenant records.

Avoid silently making ServicesOS tenant IDs the permanent universal identity if that creates coupling.

## D. Product role model

Define Core capability/role contracts so ServicesOS and SLAI Web can use different role sets safely.

## E. Audit storage topology

Decide whether Core provides:

- a shared library with product-local audit storage first,
- a central audit aggregation service,
- or a later hybrid.

Prefer the simplest secure V1 that preserves product isolation.

## F. Event transport

Core V1 needs event contracts. Decide whether cross-product durable transport is required immediately or deferred until a real cross-product workflow needs it.

## G. AI credit scope

Decide product-specific vs cross-product credit balances and whether SLAI Web V1 needs the shared metering engine immediately.

## H. Notification scope

Determine the exact smallest notification contract both ServicesOS and SLAI Web need before promoting it into Core V1.

## I. Versioning policy

Define Core versioning, compatibility rules, deprecation window, and how ServicesOS/SLAI Web pin Core versions.

## J. Rules/security packaging

Decide what belongs in reusable security libraries/tests versus each product's deployable Firestore/Storage rules.

---

# 15. Work intentionally deferred

Do not use the Core extraction phase to simultaneously build:

- Square/Clover payment adapters,
- ServicesOS V2 features,
- broader GrowthAI,
- advanced route optimization,
- full offline Employee App,
- new RetailOS/EducationOS/ComplianceAI modules,
- universal analytics platform,
- universal workflow engine,
- company-wide event streaming infrastructure,
- unrestricted cross-product data access,
- one giant universal schema for every future SLAI product.

Core V1 exists to make the **next real product** faster, not to pre-build every possible future product.

---

# 16. Final working rule

> **Build ServicesOS for ServicesOS first. Extract only the platform patterns ServicesOS has proven and SLAI Web actually needs. Make ServicesOS the reference implementation, make SLAI Web the first independent validation consumer, and let later products earn the next additions to Core.**

This document should be refreshed once more against the exact customer-ready ServicesOS V1 commit immediately before active extraction begins.
