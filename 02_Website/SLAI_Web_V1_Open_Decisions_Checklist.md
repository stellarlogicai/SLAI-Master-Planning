# SLAI Web V1 Open Decisions Checklist

**Status:** Planning checklist / resolve during Milestone 0 or before the related feature ships  
**Updated:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

## Purpose

Track the remaining SLAI Web V1 decisions that still need explicit definitions after the V1 scope, provider baseline, architecture decisions, Website Profile schema, permissions model, billing/entitlement model, operations boundaries, pricing model, and QA gates were established.

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

The V1 typed semantic contract is defined in:

`SLAI_Web_V1_Website_Profile_Schema.md`

Locked concepts include:

- schema version `1.0`,
- stable IDs,
- money stored in minor units,
- standalone versus connected modes,
- business facts separated from website-owned content/presentation,
- service/team presentation overlays rather than fact overrides,
- typed pages/sections/navigation/CTAs/forms/SEO/integrations,
- generic source-authority map,
- publish-readiness versus schema-validity distinction,
- separate platform records for billing, deployment, audit, domains, support sessions, and form submissions,
- explicit source-product disconnect transition.

Standalone SLAI Web owns its public business facts. In connected mode, the bound source product owns overlapping authoritative domains while SLAI Web owns website presentation/publication.

## 5. Minimal role / permission set — LOCKED

Authoritative contract:

`SLAI_Web_V1_Permissions_and_Authority_Matrix.md`

V1 persistent customer roles:

```text
Owner
Editor
Viewer
```

Internal access is separate:

```text
SLAI Support Mode
SLAI Platform Operator
```

Locked rules include:

- Owner controls publish, rollback, users, billing, domains, connectors, and support approval,
- Editor may edit/preview/request publication but cannot directly publish in V1,
- Viewer is read-only and does not receive form/lead PII by default,
- connected authoritative facts stay read-only regardless of SLAI Web customer role,
- Support Mode is scoped/time-bounded/audited rather than permanent tenant membership,
- Platform Operator authority is emergency/reliability/security-only and distinct from normal support,
- at least one Owner must always remain,
- AI inherits the invoking human's permission boundary,
- high-risk actions require server-authoritative checks and appropriate confirmation/re-authentication.

## 6. Billing / entitlement state mapping — LOCKED

Authoritative contract:

`SLAI_Web_V1_Billing_and_Entitlement_Contract.md`

Recurring V1 pricing:

```text
Monthly: $100/month
Annual:  $1,000/year
         = two months free vs monthly
```

Monthly and annual use the same normal platform entitlement and feature set.

Locked billing rules include:

- Stripe remains the payment/subscription authority,
- SLAI Web maintains a canonical internal billing/entitlement projection,
- browser state cannot fabricate paid access,
- V1 launch does not require a free recurring-platform trial,
- one-time implementation/custom charges remain separate from recurring platform entitlement,
- canonical states are `setup`, `active`, `cancel_at_period_end`, `past_due_grace`, `suspended`, `cancelled`, and `comped`,
- billing interval is separate from billing state (`monthly` or `annual`),
- `active`, `cancel_at_period_end`, and valid `comped` allow normal paid product entitlement,
- recurring payment failure enters a 7-day `past_due_grace`,
- during grace the existing live site remains online and editing/preview may continue, but new production publishing is blocked,
- successful verified payment recovery automatically restores active entitlement,
- suspension is not destructive deletion,
- cancellation preserves full service through the paid-through date,
- annual customers retain service through their paid annual term even if renewal is cancelled early,
- comped/manual entitlement is explicit, reason-bound, and audited,
- billing event handling must be server-authoritative and idempotent/duplicate-safe,
- permissions, billing entitlement, site state, source authority, and release gates remain separate checks.

---

# B. Decisions that can wait until the related feature is being built

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
- connected product lead/request handoff when supported,
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
- product connector failures,
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

The billing-state behavior is now locked, including paid-through cancellation and the 7-day past-due grace period.

Still define before public launch:

- exact post-suspension live-site duration,
- when a suspended/cancelled site is unpublished,
- export/handoff window,
- data retention/deletion timing,
- domain-transition timing,
- customer-facing notices and reminders.

Do not immediately delete customer-owned content for a transient billing failure.

---

# C. Decisions best validated with the first real customer

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

Current working authority:

- recurring monthly: $100/month,
- recurring annual: $1,000/year (two months free vs monthly),
- DIY: $0 build,
- Done-for-you: approximately $750-$1,000 build,
- Custom: approximately $1,500-$2,000+ build,
- true exceptions quoted separately.

Validate against conversion, annual-plan adoption, build time, direct cost, support burden, self-service, retention, and ServicesOS conversion.

---

# D. Decisions explicitly not required before V1 starts

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
- every future SLAI product integration,
- future SLAIOS orchestration.

Those are earned by real demand.

---

# Milestone 0 Exit Rule

**All six primary SLAI Web V1 pre-build architecture/product decisions are now locked.**

Locked set:

1. Firebase / Google Cloud project boundary
2. Next.js + TypeScript runtime
3. Static-first hybrid production delivery
4. Website Profile schema `1.0`
5. Permissions and authority matrix
6. Stripe billing and SLAI Web entitlement mapping

At active-build start, verify rather than redesign:

- Firebase project/environment setup,
- current provider pricing/capabilities,
- Next.js + TypeScript fit,
- static-first hybrid publishing/deployment,
- Website Profile schema `1.0`,
- permissions/authority matrix,
- monthly/annual Stripe product and price objects,
- billing webhook/API-version details,
- product connector/public-data boundary,
- variable-cost safeguards,
- first-customer validation plan.

Remaining items in this checklist may be resolved just-in-time before their dependent feature ships, provided they do not force a broad architectural rewrite.
