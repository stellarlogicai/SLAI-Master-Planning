# SLAI Website Planning

**Status:** Support / future go-to-market work.  
**Active build priority:** ServicesOS remains priority one.

This folder covers two related but distinct website lanes:

1. the public Stellar Logic AI company/product website,
2. the future **SLAI Web** productized website platform and managed-web service for small-business customers.

Website work may support ServicesOS launch and customer acquisition, but active SLAI Web implementation does not begin until ServicesOS V1 is stable enough to release engineering focus.

## SLAI Web — Current Execution Order

```text
Finish / stabilize ServicesOS V1
→ customer-facing launch
→ stabilize early usage
→ promote SLAI Web V1 to active build
→ build and validate SLAI Web V1
→ prove at least one real customer / revenue path
→ measure build time, direct cost, support burden, and self-service behavior
→ then return to larger ServicesOS V2 expansion
```

The revenue purpose is intentional: SLAI Web is expected to create earlier implementation revenue, recurring managed-web/platform revenue, and a customer-acquisition path into ServicesOS.

## SLAI Web — Provider Baseline

SLAI Web should reuse the proven ServicesOS provider ecosystem by default rather than creating a separate vendor stack.

Current planning assumption:

```text
Firebase / Google Cloud
+ Stripe
+ bounded ServicesOS public-data / booking integration
```

Prefer a separate SLAI Web Firebase/Google Cloud project under the same company cloud/billing ecosystem unless the active-build architecture audit finds a stronger reason to share a project.

The active-build stack gate is therefore a **verification gate, not a broad provider-shopping exercise**. New providers require a documented technical, security, reliability, cost, compliance, or operational reason.

See `SLAI_Web_V1_Provider_Baseline.md`.

## SLAI Web — Authoritative Planning Set

### Execution / scope

- `SLAI_Web_V1_Execution_Plan.md` — authoritative V1 scope lock, build order, milestone gates, acceptance criteria, first-customer proof, and Codex stop conditions.
- `SLAI_Web_V1_Open_Decisions_Checklist.md` — remaining decisions to resolve in Milestone 0 or just before their dependent feature ships; prevents reopening already-settled product strategy.
- `SLAI_Web_Platform_V1_and_Customer_Control_Model.md` — detailed product model: DIY/done-for-you/custom paths, dashboard, shared profile, page/section system, evolving design system, support mode, SLAI Intelligence, ownership/handoff, and product sequencing.

### Core product / data contracts

- `SLAI_Web_V1_Product_and_Data_Contracts.md` — canonical Website Profile, source-of-truth matrix, draft/publish/version contracts, roles/entitlements, media/forms boundaries, and public/private data rules.
- `SLAI_Web_Architecture_Spec.md` — shared core/layout/customer-layer boundaries, protected paths, versioning, public-data and booking boundaries.
- `SLAI_Web_Layout_Contract.md` — layout responsibilities, compatibility, manifest fields, and customer-override rules.
- `../01_ServicesOS/Website_Public_Data_and_Booking_Contract.md` — ServicesOS public-data projection and booking source-of-truth contract.

### Deployment / billing / operations

- `SLAI_Web_V1_Provider_Baseline.md` — default reuse of Firebase/Google Cloud + Stripe, project-separation preference, usage-based cost philosophy, and provider-replacement gate.
- `SLAI_Web_V1_Deployment_Billing_and_Operations_Contracts.md` — stack verification gate, deployment/domain/SSL, billing/entitlements, cancellation/handoff, support boundaries, variable-cost controls, monitoring, and recovery.
- `SLAI_Web_QA_and_Release_Gates.md` — automated/human release evidence required before production.
- `../03_SLAI_Company/SLAI_Web_Services_Business_Model.md` — revenue model, pricing hypotheses, founder-compensation intent, managed-web economics, and ServicesOS acquisition strategy.

### Production system / templates

- `SLAI_Web_Engine.md` — reusable web platform, layout library concept, ServicesOS integration, booking architecture, AI-assisted build workflow, human QA, and scale model.
- `Templates/Website_Intake_and_Readiness.md` — launch-data readiness and provenance checklist.
- `Templates/Web_Job_Packet.md` — scoped worker/Codex task contract with protected paths, tests, stop conditions, and report-back.
- `Templates/Human_QA_Checklist.md` — human QA evidence.
- `Templates/Client_Approval_and_Deployment_Record.md` — client/release approval and deployment evidence.
- `Templates/Website_Pricing_and_Scope_Matrix.md` — current DIY/done-for-you/custom working pricing hypotheses.
- `Templates/Website_Customer_Control_Matrix.md` — customer vs SLAI vs custom-work authority.
- `Templates/Website_Proof_Metrics_Record.md` — early-customer production, cost, support, self-service, and commercial validation metrics.
- `Templates/Customer_Site_Manifest.example.yaml` — example customer-site manifest direction.

### Validation case

- `American_Barbershop_Concept_and_Validation.md` — potential first real-world website/ServicesOS-Barber validation case; concept/design-partner planning only until the business agrees.

## Core Boundary

SLAI Web should not become a traditional founder-time-heavy agency.

The desired model is:

```text
Reusable Web Core
+
versioned approved layout system
+
canonical Website Profile
+
customer branding/content
+
ServicesOS public-data/booking integration when applicable
+
deterministic preview/publish/deploy
+
bounded AI assistance
+
human QA
```

## Build Guardrail

Do not begin by building ten layouts, unrestricted page-builder functionality, or broad custom integrations.

Prove one or two excellent layouts and one real customer workflow first. Every significant variable-cost feature must be attributable and bounded, and normal website operation must remain functional without AI.
