# SLAI Web V1 — Core Prerequisite Amendment

**Status:** Authoritative sequencing amendment  
**Created:** 2026-09-17  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

---

## Purpose

This document updates only the **entry sequence / dependency gate** for `SLAI_Web_V1_Execution_Plan.md`.

The detailed SLAI Web V1 scope, milestones, product/data contracts, architecture decisions, billing rules, permissions, publishing model, deployment model, QA gates, and customer-validation plan remain in force.

This amendment exists because the platform plan has now matured to make **SLAI Platform Core V1 extraction a prerequisite to starting SLAI Web implementation**.

---

## Superseded Sequence

Any older SLAI Web planning language that implies:

```text
ServicesOS stable customer-facing V1
→ SLAI Web active build
```

is superseded by the sequence below.

---

## Authoritative Sequence

```text
Finish ServicesOS customer-ready V1
        ↓
Run current V1 acceptance / beta-critical fixes
        ↓
Complete UI, payment, tenant/security, and release hardening
        ↓
Customer-facing ServicesOS V1 release
        ↓
Stabilize early real use enough to protect the production baseline
        ↓
Freeze/reference the exact customer-ready ServicesOS V1 application commit
        ↓
Run final ServicesOS → Core delta/dependency audit
        ↓
Promote SLAI Platform Core V1 to active extraction
        ↓
Extract Core V1 in controlled slices
        ↓
Migrate ServicesOS onto extracted Core
        ↓
Run full ServicesOS regression/security/tenant/billing validation
        ↓
Release/freeze SLAI Platform Core V1
        ↓
Promote SLAI Web V1 to active build
        ↓
Bootstrap SLAI Web using Core from day one
        ↓
Use SLAI Web as the first independent validation of Core boundaries
```

---

## SLAI Web Entry Gate — Updated

Do not create the primary SLAI Web implementation branch until all are true or explicitly waived by Jamie:

- ServicesOS V1 is customer-facing.
- Current V1 acceptance has completed meaningful real workflows.
- Beta-critical defects are fixed or contained.
- ServicesOS payments/billing are stable enough for customer use.
- Tenant-isolation/security release checks are complete.
- ServicesOS no longer requires constant beta-critical intervention.
- The final customer-ready ServicesOS application baseline is recorded.
- SLAI Platform Core V1 extraction has completed for the required shared foundations.
- ServicesOS is consuming the extracted Core and has passed the Core-migration regression/security gate.
- Core V1 is versioned/released as the supported cross-product foundation.
- SLAI Web planning has been re-read against the released Core contracts.
- The ServicesOS public-data/booking connector contract has been refreshed against final shipped ServicesOS reality.
- The initial SLAI Web deployment/provider decisions have been verified against current provider/API reality.

---

## What SLAI Web Should Consume From Core

Where applicable, SLAI Web should consume the released Core foundation for:

- identity/session abstraction,
- tenant/business membership patterns,
- authorization/capability mechanism,
- shared schemas/errors/logging conventions,
- audit/event contracts,
- SLAI product billing/entitlement foundation,
- AI metering foundation if used,
- shared security patterns.

SLAI Web remains responsible for its own:

- Owner/Editor/Viewer role definitions,
- delegated SLAI Support Mode and Platform Operator rules,
- Website Profile,
- pages/sections/layouts,
- Web Core,
- media/assets,
- domains,
- forms,
- preview/publish/release/rollback,
- deployment targets,
- ServicesOS connector,
- website-specific subscriptions/pricing/product wording.

---

## Product Isolation Rule

Using SLAI Platform Core does **not** merge ServicesOS and SLAI Web into one application or one production database.

SLAI Web retains the already-approved separate product/environment model:

```text
SLAI company provider ecosystem
│
├── ServicesOS production authority
│
└── SLAI Web
    ├── staging authority
    └── production authority
```

Core provides shared contracts/packages/patterns. Products preserve explicit data and security boundaries.

---

## Relationship to Existing Web Milestones

After the Core prerequisite is satisfied, the existing `SLAI_Web_V1_Execution_Plan.md` milestone sequence continues.

Its Milestone 0 becomes a **post-Core verification/bootstrap audit**, not a decision about whether shared auth/tenant/billing foundations should be copied from ServicesOS.

Milestone 0 should verify:

- released Core package versions,
- SLAI Web compatibility with Core contracts,
- SLAI Web product-specific role definitions,
- product/environment Firebase configuration,
- Stripe/Web entitlement configuration,
- ServicesOS connector boundary,
- provider/API assumptions that may have changed.

Verification is not permission to redesign Core without a concrete blocker.

---

## Related Core Documents

Authoritative Core planning:

- `../15_SLAI_Platform_Core/ServicesOS_to_Core_Extraction_Map.md`
- `../15_SLAI_Platform_Core/SLAI_Core_V1_Scope_and_Contracts.md`
- `../15_SLAI_Platform_Core/SLAI_Core_V1_Execution_Plan.md`

---

## Final Rule

> **ServicesOS proves the foundation. Core promotes the proven foundation. SLAI Web is the first independent product that consumes and validates it.**
