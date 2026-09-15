# SLAI Web V1 Open Decisions Checklist

**Status:** Planning checklist / resolve during Milestone 0 or before the related feature ships  
**Updated:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

## Purpose

Track the remaining SLAI Web V1 decisions that still need explicit definitions after the V1 scope, provider baseline, architecture decisions, Website Profile schema, operations boundaries, pricing model, and QA gates were established.

This file is not permission to reopen the whole product design.

> **Default rule: preserve locked decisions unless a concrete requirement forces a documented change.**

---

# A. Locked before implementation

## 1. Firebase / Google Cloud project boundary — LOCKED

Decision:

```text
Stellar Logic AI cloud / billing account
├── ServicesOS project(s)
└── SLAI Web
    ├── slai-web-staging
    └── slai-web-prod

Local development
└── Firebase Emulator Suite / local tooling
```

Rules:

- same Firebase / Google Cloud provider ecosystem as ServicesOS,
- separate SLAI Web production resources,
- separate staging and production boundaries,
- separate secrets/rules/deployments/data,
- SLAI Web costs attributable separately,
- no broad direct access to ServicesOS private operational data.

See `SLAI_Web_V1_Architecture_Decisions.md` and `SLAI_Web_V1_Provider_Baseline.md`.

## 2. Application framework / runtime — LOCKED

Decision:

```text
Next.js + TypeScript
```

Public sites should be static-first. Dynamic/server execution is reserved for workflows that actually require fresh or authoritative state.

See `SLAI_Web_V1_Architecture_Decisions.md`.

## 3. Production delivery topology — LOCKED

Decision:

- dynamic/authenticated SLAI Web control platform,
- static-first customer public websites,
- dynamic APIs only where needed,
- immutable versioned published releases,
- rollback to prior known-good releases without erasing history,
- provider/deployment-target abstraction so customer identity is not tied to a single hosting resource.

See `SLAI_Web_V1_Architecture_Decisions.md`.

## 4. Canonical Website Profile schema v1 — LOCKED

The V1 typed semantic contract is now defined in:

`SLAI_Web_V1_Website_Profile_Schema.md`

Locked concepts include:

- schema version `1.0`,
- stable IDs,
- money stored in minor units,
- standalone versus ServicesOS-connected modes,
- business facts separated from website-owned content/presentation,
- service/team presentation overlays rather than fact overrides,
- typed pages/sections/navigation/CTAs/forms/SEO/integrations,
- source-authority map,
- publish-readiness versus schema-validity distinction,
- separate platform records for billing, deployment, audit, domains, support sessions, and form submissions,
- explicit ServicesOS disconnect transition.

Standalone SLAI Web owns its public business facts. In connected mode, ServicesOS owns overlapping business/operational truth and SLAI Web owns website presentation/publication.

---

# B. Remaining decisions required before implementation begins

## 5. Minimal role / permission set — NEXT

Current V1 roles:

- Owner,
- Editor,
- Viewer,
- controlled SLAI Support Mode.

Still define the exact permission matrix for:

- edit standalone business facts,
- view ServicesOS-authoritative facts,
- edit website presentation/content,
- upload/delete assets,
- preview,
- request publication,
- publish,
- rollback,
- manage domains,
- manage billing,
- invite/remove users,
- connect/disconnect ServicesOS,
- access/approve support-mode functions.

## 6. Billing / entitlement state mapping

Stripe remains default authority.

Still define:

- Stripe product/price structure,
- recurring subscription mapping,
- one-time implementation/custom payment flow,
- webhook events used,
- canonical internal billing states,
- idempotency rules,
- entitlement behavior per state,
- whether a trial exists,
- exact past-due grace behavior,
- reactivation behavior.

---

# C. Decisions that can wait until the related feature is being built

## 7. Custom domain / DNS workflow

Define:

- customer-owned domain connection flow,
- supported DNS instructions,
- verification mechanism,
- canonical domain rules,
- www/apex redirect behavior,
- SSL provisioning state,
- disconnect/transfer flow,
- what SLAI can do automatically versus what requires customer action.

V1 does not need automated support for every registrar.

## 8. Media rules and numeric limits

Set actual V1 numbers for:

- max file size,
- allowed formats,
- max dimensions,
- compression/derivative behavior,
- per-site storage allowance,
- asset count if needed,
- deletion/retention behavior,
- warning thresholds,
- exceptional media-heavy pricing/scope.

Do not promise unlimited storage.

## 9. Bandwidth / request / traffic safeguards

Define:

- expected normal traffic range,
- usage monitoring,
- anomaly thresholds,
- abuse/rate limiting,
- high-traffic handling,
- when a site moves into exception/custom infrastructure pricing.

Internal safeguards should exist before public numeric limits are marketed.

## 10. Forms / notification delivery

Define:

- standalone form-submission storage,
- ServicesOS lead/request handoff when connected,
- customer notification channel,
- spam/bot protection,
- rate limits,
- duplicate suppression,
- retention/deletion,
- failed-delivery behavior,
- provider reuse for email/notification delivery where practical.

## 11. SEO / analytics baseline

Define minimum V1 behavior for:

- page titles/descriptions,
- canonical URLs,
- sitemap,
- robots behavior,
- structured data,
- social/share metadata,
- Search Console setup assistance,
- analytics integration,
- privacy/consent requirements where applicable.

Do not build an enterprise SEO suite.

## 12. Monitoring / error reporting

Define the smallest reliable set for:

- site availability,
- failed deployment,
- form failures,
- domain/SSL issues,
- ServicesOS connector failures,
- billing webhook failures,
- unusual usage/cost,
- security/tenant-isolation alerts.

Reuse Firebase/Google Cloud tooling where practical before adding another paid provider.

## 13. Backup / retention / deletion periods

Define exact policy for:

- Website Profile history,
- published releases,
- uploaded assets,
- form submissions,
- audit records,
- cancelled-customer data,
- deleted sites,
- export/handoff window.

## 14. AI allowance / model policy

Normal Web operation remains deterministic.

Define after measured use:

- which V1 AI actions are included,
- default model/provider,
- monthly included allowance/credit model,
- tenant usage metering,
- behavior when allowance is exhausted,
- whether additional AI use can be purchased.

AI must never be required for a live site to function.

## 15. Standard support boundaries

Before public sale, define customer-facing terms for:

- support channel,
- response target,
- platform support versus custom work,
- revision expectations,
- emergency/production-defect handling,
- domain/DNS assistance boundaries.

Avoid promising 24/7 support before staffing supports it.

## 16. Cancellation / suspension / handoff timing

Define exact timing for:

- cancel-at-period-end,
- payment-failure grace period,
- editor/publish restrictions,
- live-site suspension/unpublish,
- export/handoff window,
- data retention/deletion,
- domain transition.

Do not immediately delete customer-owned content for a transient billing failure.

---

# D. Decisions best validated with the first real customer

## 17. One versus two launch layouts

Default:

- build one excellent layout first,
- add a second only when the first real customer/vertical proves it materially useful.

## 18. Done-for-you revision count

Track real:

- requested changes,
- QA fixes versus preference changes,
- founder minutes,
- whether a formal included-round limit is necessary.

## 19. Numeric plan limits

Use first-customer telemetry before locking marketing claims for:

- storage,
- bandwidth,
- AI assistance,
- form volume,
- build/publish frequency,
- support usage.

## 20. SLAI Web pricing validation

Current working authority remains:

- DIY: $0 build / $100 month,
- Done-for-you: approximately $750-$1,000 build / $100 month,
- Custom: approximately $1,500-$2,000+ build / $100 month,
- true exceptions quoted separately.

Validate against conversion, build time, direct cost, support burden, self-service, retention, and ServicesOS conversion.

---

# E. Decisions explicitly not required before V1 starts

Do not block SLAI Web V1 waiting to define:

- ecommerce platform strategy,
- marketplace/discovery product,
- ten-layout library,
- multilingual platform,
- advanced A/B testing,
- enterprise multi-site controls,
- custom email hosting,
- complex analytics warehouse,
- autonomous AI publishing,
- every future ServicesOS vertical integration,
- future SLAIOS orchestration.

Those are earned by real demand.

---

# Milestone 0 Exit Rule

Four of the six primary architecture questions are now locked.

Remaining mandatory questions before implementation begins:

1. What are the exact V1 roles/permissions?
2. How does Stripe state map to SLAI Web entitlement?

At active-build start, also verify rather than redesign:

- Firebase project/environment setup,
- Next.js + TypeScript fit,
- static-first hybrid publishing/deployment,
- Website Profile schema `1.0`,
- ServicesOS public-data/booking boundary,
- variable-cost safeguards,
- first-customer validation plan.

Everything else may be resolved just-in-time before its dependent feature ships, provided it does not force a broad architectural rewrite.
