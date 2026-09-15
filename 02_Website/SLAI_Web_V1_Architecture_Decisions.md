# SLAI Web V1 Architecture Decisions

**Status:** Locked V1 planning decisions / verify implementation details at active-build start  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

## Purpose

Record the architecture decisions Jamie explicitly approved before SLAI Web becomes the active build.

These decisions should not be reopened casually during implementation. They may be revised only when a concrete technical, security, reliability, cost, or product requirement proves the current decision unsuitable.

---

# Decision 1 — Cloud / Firebase project structure

## Decision

Reuse the same Firebase / Google Cloud provider ecosystem already used by ServicesOS, while isolating SLAI Web in separate product projects.

Preferred V1 environment structure:

```text
Stellar Logic AI cloud / billing account
│
├── ServicesOS project(s)
│
└── SLAI Web
    ├── slai-web-staging
    └── slai-web-prod

Local development
└── Firebase Emulator Suite / local development tools
```

## Rules

- SLAI Web production resources must not share a production Firebase project with ServicesOS.
- Staging and production must use separate project/resource boundaries.
- Local development should prefer emulators/local tooling instead of creating unnecessary always-on cloud resources.
- Product costs must be attributable separately from ServicesOS.
- Service accounts, secrets, rules, deployments, domains, and production data must remain product/environment scoped.
- Using the same company billing relationship does not imply sharing databases or security boundaries.

## Reason

This preserves the low-fixed-cost/pay-as-used provider strategy while reducing blast radius, improving cost attribution, and keeping ServicesOS production protected from SLAI Web changes.

---

# Decision 2 — Application framework / language

## Decision

Use:

```text
Next.js
+
TypeScript
```

for the SLAI Web V1 application/platform unless active-build verification identifies a concrete blocker.

## Reason

SLAI Web is a public website platform, not only an internal SPA. The implementation needs strong support for:

- SEO/indexable public pages,
- static-first rendering,
- server-side behavior where truly needed,
- predictable metadata generation,
- preview/publish flows,
- React-family reuse from ServicesOS experience,
- maintainable typed contracts for Website Profile, releases, connectors, and permissions.

## Rule

Do not use dynamic/server rendering merely because the framework supports it.

Prefer static output for stable public website content and reserve dynamic/server execution for workflows that actually require authority or fresh state.

---

# Decision 3 — Production delivery model

## Decision

Use a **hybrid, static-first architecture**.

```text
SLAI Web control platform
(dynamic/authenticated)
├── onboarding
├── dashboard/editor
├── billing/account
├── preview orchestration
├── publishing
└── support/admin controls

Customer public website
(static-first)
├── public pages
├── SEO metadata
├── brand/layout
├── images/assets
└── published business/content snapshot

Dynamic server/API paths only where required
├── contact/request forms
├── ServicesOS booking
├── ServicesOS public-data synchronization
├── billing webhooks
└── other explicitly approved server-authoritative actions
```

## Publish model

A publish operation should conceptually produce a reproducible immutable public release from:

```text
Website Profile snapshot
+ Website content/presentation snapshot
+ exact layout version
+ exact Web Core version
+ approved assets
+ ServicesOS public-data release reference when connected
+ connector versions
        ↓
validate
        ↓
preview / QA evidence
        ↓
immutable published release
        ↓
production deployment
        ↓
post-deploy smoke
        ↓
known-good live release
```

Draft changes must never mutate the currently live release.

## Rollback model

Rollback selects a prior known-good immutable release and creates/promotes a controlled deployment from it.

Rollback must not erase release history.

---

# Decision 4 — Deployment-target abstraction

## Decision

Do not encode the business model as `one customer = one hard-coded provider site/resource` inside core product logic.

Use a provider/deployment abstraction conceptually similar to:

```ts
type DeploymentTarget = {
  targetId: string;
  siteId: string;
  tenantId: string;
  provider: string;
  providerProjectRef: string;
  providerTargetRef: string;
  environment: "staging" | "production";
};
```

The exact implementation may differ, but customer/site identity must remain independent from a particular hosting-provider resource identifier.

## Reason

This allows SLAI Web to:

- shard hosting resources later,
- move a customer/site between deployment targets,
- adapt to provider quotas/limits,
- isolate exceptional sites,
- change delivery topology later without rewriting Website Profile or customer ownership.

---

# Decision 5 — ServicesOS relationship

## Decision

SLAI Web remains fully usable as a standalone product.

```text
Standalone customer
SLAI Web owns public business facts + website presentation

ServicesOS-connected customer
ServicesOS owns overlapping business/operational truth
SLAI Web owns website presentation + publication
```

ServicesOS private operational records are never exposed directly to public websites.

The connector uses approved public-data releases and bounded server-side booking interfaces.

---

# Decision 6 — Provider strategy

## Decision

Reuse the ServicesOS provider ecosystem by default:

- Firebase / Google Cloud for applicable auth/data/storage/hosting/server workloads,
- Stripe for SLAI billing,
- existing SLAI provider patterns where they fit.

A new provider requires documented justification rather than convenience or popularity.

See `SLAI_Web_V1_Provider_Baseline.md` for the provider-replacement gate.

---

# Active-Build Verification

When SLAI Web becomes the active build, Milestone 0 should verify these decisions against current provider capabilities/pricing and final ServicesOS V1 reality.

Verification is not permission to restart architecture selection from scratch.

Only reopen a locked decision when a concrete blocker is documented.
