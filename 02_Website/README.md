# SLAI Website Planning

**Status:** Support / future go-to-market work.  
**Active build priority:** ServicesOS remains priority one.

This folder covers two related but distinct website lanes:

1. the public Stellar Logic AI company/product website,
2. the future **SLAI Web** productized website platform and managed-web service for small-business customers.

Website work may support ServicesOS launch and customer acquisition, but active SLAI Web implementation does not begin until ServicesOS V1 is stable enough to release engineering focus **and SLAI Platform Core V1 has been extracted/stabilized from the final ServicesOS V1 implementation**.

## SLAI Web — Current Execution Order

```text
Finish / stabilize ServicesOS V1
→ customer-facing launch
→ stabilize early usage
→ freeze/reference the final customer-ready ServicesOS V1 baseline
→ extract SLAI Platform Core V1 in controlled slices
→ migrate and fully revalidate ServicesOS against extracted Core
→ release/freeze Core V1
→ promote SLAI Web V1 to active build
→ build SLAI Web V1 using Core from day one
→ use SLAI Web as the first independent validation of Core boundaries
→ launch and validate SLAI Web with a real customer / revenue path
→ measure build time, direct cost, support burden, and self-service behavior
→ then return to larger ServicesOS V2 expansion as priorities allow
```

The revenue purpose is intentional: SLAI Web is expected to create earlier implementation revenue, recurring managed-web/platform revenue, and a customer-acquisition path into ServicesOS.

### Core prerequisite

SLAI Web should **consume** shared platform foundations rather than copy them out of ServicesOS.

Authoritative Core planning lives under `../15_SLAI_Platform_Core/`:

- `ServicesOS_to_Core_Extraction_Map.md`
- `SLAI_Core_V1_Scope_and_Contracts.md`
- `SLAI_Core_V1_Execution_Plan.md`

Core V1 is expected to provide the reusable platform mechanisms for identity/session, tenant/membership context, authorization, audit/event/logging contracts, SLAI product billing/entitlements, and applicable metering/notification foundations while SLAI Web retains its own product roles, Website Profile, publishing, deployment, domains, forms, layouts, and ServicesOS connector.

SLAI Web remains a sibling product with separate product/environment authority; using Core does not mean sharing one production database with ServicesOS.

## SLAI Web — Locked V1 Architecture Baseline

Current approved architecture direction:

```text
Firebase / Google Cloud provider ecosystem
+ separate slai-web-staging and slai-web-prod product projects
+ Next.js + TypeScript
+ dynamic authenticated control platform
+ static-first customer public sites
+ dynamic APIs only for authoritative/fresh workflows
+ Stripe billing
+ $100/month or $1,000/year recurring platform pricing
+ bounded product connectors, with ServicesOS first
```

SLAI Web remains fully standalone-capable. When a customer also uses ServicesOS, ServicesOS owns overlapping business/operational truth and SLAI Web owns website presentation/publication.

The connector/authority model is intentionally product-generic so future approved SLAI products can connect through bounded adapters without forcing a redesign of the Website Profile core. **V1 still implements only the ServicesOS connector; future integrations remain parked until their own priority gate.**

The active-build stack gate is a **verification gate, not a broad architecture/provider-shopping exercise**. Locked decisions should reopen only for a documented blocker.

See:

- `SLAI_Web_V1_Architecture_Decisions.md`
- `SLAI_Web_V1_Provider_Baseline.md`
- `SLAI_Web_V1_Website_Profile_Schema.md`
- `SLAI_Web_V1_Product_Connector_and_Authority_Contract.md`
- `SLAI_Web_V1_Permissions_and_Authority_Matrix.md`
- `SLAI_Web_V1_Billing_and_Entitlement_Contract.md`

## SLAI Web — Pre-Build Decision Status

All six primary V1 pre-build architecture/product decisions are now locked:

```text
1. Firebase / Google Cloud project boundary
2. Next.js + TypeScript runtime
3. Static-first hybrid production delivery
4. Website Profile schema 1.0
5. Permissions and authority matrix
6. Stripe billing and SLAI Web entitlement mapping
```

At active-build start, these decisions should be verified against current provider/API reality and the released Core V1 contracts rather than redesigned without a concrete blocker.

## SLAI Web — Authoritative Planning Set

### Execution / scope

- `SLAI_Web_V1_Execution_Plan.md` — authoritative V1 scope lock, build order, milestone gates, acceptance criteria, first-customer proof, and Codex stop conditions. Its active-build gate is now preceded by the Core V1 extraction/revalidation sequence documented under `../15_SLAI_Platform_Core/`.
- `SLAI_Web_V1_Open_Decisions_Checklist.md` — records the six locked pre-build decisions plus the remaining just-in-time decisions that may be resolved before their dependent features ship.
- `SLAI_Web_Platform_V1_and_Customer_Control_Model.md` — detailed product model: DIY/done-for-you/custom paths, dashboard, shared profile, page/section system, evolving design system, support mode, SLAI Intelligence, ownership/handoff, and product sequencing.

### Core product / data contracts

- `SLAI_Web_V1_Architecture_Decisions.md` — locked V1 cloud/environment, Next.js + TypeScript, static-first hybrid delivery, deployment-target abstraction, ServicesOS relationship, and provider strategy.
- `SLAI_Web_V1_Website_Profile_Schema.md` — authoritative typed semantic Website Profile schema `1.0`, including standalone/connected authority, business facts, website-owned content, presentation, CTAs/forms, SEO, integrations, source-state, publish readiness, and separate platform-record boundaries.
- `SLAI_Web_V1_Product_Connector_and_Authority_Contract.md` — generic product connector seam, domain-specific authority, product-generic provenance, bounded capabilities, versioning, failure behavior, and the rule that ServicesOS is the first concrete connector without making it the only possible future source product.
- `SLAI_Web_V1_Permissions_and_Authority_Matrix.md` — authoritative V1 Owner/Editor/Viewer permissions, scoped SLAI Support Mode, emergency Platform Operator boundary, publish/rollback authority, billing/domain/user/connector controls, AI permission inheritance, and audit/re-auth rules.
- `SLAI_Web_V1_Product_and_Data_Contracts.md` — product-state, source-of-truth, operating-mode, publication/version, role, media/form, and public/private data contracts.
- `SLAI_Web_Architecture_Spec.md` — shared core/layout/customer-layer boundaries, protected paths, versioning, public-data and booking boundaries.
- `SLAI_Web_Layout_Contract.md` — layout responsibilities, compatibility, manifest fields, and customer-override rules.
- `../01_ServicesOS/Website_Public_Data_and_Booking_Contract.md` — ServicesOS public-data projection and booking source-of-truth contract.

### Deployment / billing / operations

- `SLAI_Web_V1_Provider_Baseline.md` — default reuse of Firebase/Google Cloud + Stripe, project-separation preference, usage-based cost philosophy, and provider-replacement gate.
- `SLAI_Web_V1_Billing_and_Entitlement_Contract.md` — authoritative monthly/annual pricing, no-trial launch, one-time versus recurring payment separation, billing states, 7-day past-due grace, cancellation/reactivation, comped entitlement, and server-authoritative publish entitlement.
- `SLAI_Web_V1_Deployment_Billing_and_Operations_Contracts.md` — deployment/domain/SSL, broader operations, cancellation/handoff, support boundaries, variable-cost controls, monitoring, and recovery.
- `SLAI_Web_QA_and_Release_Gates.md` — automated/human release evidence required before production.
- `../03_SLAI_Company/SLAI_Web_Services_Business_Model.md` — revenue model, pricing hypotheses, founder-compensation intent, managed-web economics, and ServicesOS acquisition strategy.

### Production system / templates

- `SLAI_Web_Engine.md` — reusable web platform, layout library concept, ServicesOS integration, booking architecture, AI-assisted build workflow, human QA, and scale model.
- `SLAI_Web_Layout_Library_Plan.md` — target 10-layout service-business catalog, SLAI/Aunt B's source-layout extraction plan, shared section/theme model, evidence-gated build sequence, and future AI-composition direction.
- `Templates/Website_Intake_and_Readiness.md` — launch-data readiness and provenance checklist.
- `Templates/Web_Job_Packet.md` — scoped worker/Codex task contract with protected paths, tests, stop conditions, and report-back.
- `Templates/Human_QA_Checklist.md` — human QA evidence.
- `Templates/Client_Approval_and_Deployment_Record.md` — client/release approval and deployment evidence.
- `Templates/Website_Pricing_and_Scope_Matrix.md` — current DIY/done-for-you/custom build pricing plus $100/month or $1,000/year recurring pricing.
- `Templates/Website_Customer_Control_Matrix.md` — high-level customer vs SLAI vs custom-work authority; defer to the V1 permissions matrix for role-specific access.
- `Templates/Website_Proof_Metrics_Record.md` — early-customer production, cost, support, self-service, and commercial validation metrics.
- `Templates/Customer_Site_Manifest.example.yaml` — example customer-site manifest direction.

### Validation case

- `American_Barbershop_Concept_and_Validation.md` — potential first real-world website/ServicesOS-Barber validation case; concept/design-partner planning only until the business agrees.

## Core Boundary

SLAI Web should not become a traditional founder-time-heavy agency.

The desired model is:

```text
SLAI Platform Core
+
Reusable Web Core
+
versioned approved layout system
+
canonical Website Profile
+
customer branding/content
+
bounded product connector(s) when applicable
+
deterministic preview/publish/deploy
+
bounded AI assistance
+
human QA
```

`SLAI Platform Core` and `SLAI Web Core` are different layers:

```text
SLAI Platform Core
= shared cross-product identity/tenancy/authorization/billing/audit/etc.

SLAI Web Core
= shared website rendering/publishing/design infrastructure inside SLAI Web
```

## Build Guardrail

Do not begin by building ten layouts, unrestricted page-builder functionality, broad custom integrations, or unused future-product adapters.

Prove one or two excellent layouts and one real customer workflow first. Every significant variable-cost feature must be attributable and bounded, and normal website operation must remain functional without AI.
