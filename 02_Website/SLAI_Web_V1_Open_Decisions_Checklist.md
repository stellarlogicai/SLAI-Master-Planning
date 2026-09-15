# SLAI Web V1 Open Decisions Checklist

**Status:** Planning checklist / resolve during Milestone 0 or before the related feature ships  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

## Purpose

Track the remaining SLAI Web V1 decisions that still need explicit definitions after the V1 scope, data contracts, provider baseline, operations boundaries, pricing model, and QA gates were established.

This file is not permission to reopen the whole product design. Most of the product direction is already decided.

> **Default rule: preserve the current SLAI Web plan and ServicesOS provider ecosystem unless a real requirement forces a change.**

---

# A. Decisions that should be resolved before implementation begins

## 1. Firebase / Google Cloud project boundary

Current planning preference:

- reuse Firebase / Google Cloud,
- use Stripe for billing,
- prefer a separate SLAI Web Firebase/Google Cloud project under the same company cloud/billing ecosystem,
- keep ServicesOS private operational data behind the approved public-data / booking boundary.

Still define:

- final project/account layout,
- dev/test/staging/production environment strategy,
- which resources are shared at company-account level versus isolated by product,
- how service accounts/secrets are separated,
- how costs are attributed to SLAI Web.

## 2. Application framework / runtime

Define the exact implementation framework only when SLAI Web becomes active.

Decision should consider:

- reuse of Jamie/Codex knowledge from ServicesOS,
- Firebase compatibility,
- SEO/server-rendering needs,
- static generation versus dynamic rendering,
- preview/publish requirements,
- custom-domain behavior,
- deployment simplicity,
- rollback/reproducibility,
- low fixed cost.

Do not change providers merely because a framework has a fashionable default host.

## 3. Production delivery topology

Choose between:

- shared multi-tenant rendering,
- generated/static per-site output,
- controlled hybrid.

Must define:

- what a published release produces,
- how preview differs from production,
- how a release is promoted,
- how rollback works,
- how one tenant failure is contained,
- how deployments are identified/versioned.

## 4. Canonical Website Profile schema v1

The conceptual contract exists. Before implementation, lock the actual typed schema for:

- identity,
- contact,
- location/service area,
- hours,
- services/pricing,
- team/providers,
- brand,
- media,
- social links,
- policies,
- pages,
- sections,
- CTAs,
- SEO metadata,
- forms,
- integrations,
- layout/theme/version references,
- provenance,
- public/private classification.

Also define required versus optional fields and schema-version migration behavior.

## 5. Minimal role / permission set

Current likely V1 shape:

- Owner,
- Editor,
- Viewer,
- controlled SLAI Support Mode.

Still define exact permission matrix for:

- edit business facts,
- edit presentation,
- upload/delete assets,
- preview,
- publish,
- rollback,
- manage domains,
- manage billing,
- invite/remove users,
- access support-mode functions.

## 6. Billing / entitlement state mapping

Stripe remains default authority.

Define:

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

Provider family is expected to remain Firebase/Google Cloud unless proven otherwise.

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

Avoid arbitrary customer-facing limits until real traffic data exists, but the system must still have cost-protection controls.

## 10. Forms / notification delivery

Define:

- where standalone Web form submissions are stored,
- when connected submissions become ServicesOS leads/requests,
- customer notification channel,
- spam/bot protection,
- rate limits,
- duplicate suppression,
- retention/deletion,
- failed-delivery behavior,
- whether email requires a new provider or can reuse an existing SLAI/ServicesOS mechanism.

Provider reuse is preferred.

## 11. SEO / analytics baseline

Define the minimum V1 feature set for:

- page titles/descriptions,
- canonical URLs,
- sitemap,
- robots behavior,
- structured data,
- social/share metadata,
- Search Console setup assistance,
- analytics provider/integration,
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

Reuse Firebase/Google Cloud tooling where practical before adding another paid monitoring provider.

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

Technical retention must match future customer terms/privacy policy.

## 14. AI allowance / model policy

Normal Web operation remains deterministic.

Define only after measured use:

- which V1 AI actions are included,
- which model/provider is used by default,
- monthly included allowance/credit model,
- tenant usage metering,
- behavior when allowance is exhausted,
- whether extra AI use can be purchased,
- provider failover only if actually needed.

AI must never be required for a live site to function.

## 15. Standard support boundaries

Planning boundaries already exist. Before public sale, define customer-facing terms for:

- support channel,
- expected response target,
- what counts as platform support,
- what becomes custom work,
- revision expectations for done-for-you/custom builds,
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

# C. Decisions best validated with the first real customer

## 17. One versus two launch layouts

Default:

- build one excellent layout first,
- add a second only when the first real customer/vertical proves it materially useful.

Validate whether one layout system with section variants provides enough visual differentiation.

## 18. Done-for-you revision count

Pricing scope exists, but exact revision terms should be based on real delivery behavior.

Track:

- number of requested changes,
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

Internal safeguards should exist before public numeric allowances are advertised.

## 20. SLAI Web pricing validation

Current planning authority remains:

- DIY: $0 build / $100 month,
- Done-for-you: approximately $750-$1,000 build / $100 month,
- Custom: approximately $1,500-$2,000+ build / $100 month,
- true exceptions quoted separately.

Validate against:

- conversion,
- human build time,
- direct infrastructure cost,
- support minutes,
- customer willingness to self-serve,
- retention,
- ServicesOS conversion.

Do not lower price merely because automation makes SLAI faster.

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
- every future ServicesOS vertical integration,
- future SLAIOS orchestration.

Those are earned by real demand.

---

# Milestone 0 Exit Rule

SLAI Web implementation may move from architecture setup into core product work when Jamie can answer, at minimum:

1. Which Firebase/Google Cloud project(s) are being used?
2. What framework/runtime delivers SLAI Web?
3. What does a publish produce and how is it rolled back?
4. What is the typed Website Profile v1 schema?
5. What are the V1 roles/permissions?
6. How does Stripe state map to Web entitlement?
7. How are dev/test/preview/production separated?
8. How are ServicesOS public-data/booking boundaries enforced?
9. How are variable costs measured and guarded?
10. What must be proven by the first real customer before scaling?

Everything else may be resolved just-in-time before its dependent feature ships, provided the decision does not force a broad architectural rewrite.
