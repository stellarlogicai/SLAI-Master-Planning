# SLAI Web V1 Provider Baseline

**Status:** Authoritative planning baseline / verify at active-build start  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

## Core Rule

> **Reuse the proven ServicesOS provider ecosystem by default. Add or replace a provider only when there is a concrete technical, security, reliability, cost, or operational reason.**

SLAI Web should not create a second vendor stack simply because it is a separate product.

The goal is to keep fixed cost near zero before customer usage, reuse operating knowledge already gained through ServicesOS, and reduce the number of providers Jamie must configure, secure, monitor, and support.

## Default V1 Provider Baseline

The starting assumption for SLAI Web V1 is:

```text
SLAI Web
│
├── Firebase / Google Cloud
│   ├── Authentication
│   ├── Firestore / structured application data
│   ├── Storage / customer media
│   ├── Hosting / custom domains / SSL where suitable
│   └── Cloud Functions or Cloud Run for server-side work where needed
│
├── Stripe
│   ├── recurring SLAI Web subscriptions
│   └── one-time implementation/custom charges
│
└── ServicesOS Connector
    └── approved public-data and booking interfaces only
```

This is a baseline, not permission to copy ServicesOS architecture blindly. Each service must still be verified against the actual SLAI Web requirement before implementation.

## Cost Model Preference

Prefer services that:

- have no required large prepaid commitment,
- provide useful no-cost allowances where available,
- charge primarily from actual usage,
- can scale gradually with customer count and traffic,
- expose usage/cost telemetry,
- allow budget alerts and application-level safeguards,
- do not require enterprise commitments before revenue.

A provider requiring a payment method or billing account is acceptable if the service remains usage-based and does not create a meaningful fixed monthly obligation merely for existing.

## Firebase / Google Cloud Boundary

Current planning preference:

> **Use the same provider ecosystem as ServicesOS, but prefer a separate SLAI Web Firebase/Google Cloud project unless the final architecture audit identifies a stronger reason to share a project.**

Conceptually:

```text
Shared company billing / cloud account
        │
        ├── ServicesOS project
        │
        └── SLAI Web project
```

Benefits of separation include:

- clearer SLAI Web cost attribution,
- separate security rules and deployment scope,
- reduced blast radius,
- cleaner environment/configuration boundaries,
- easier profitability measurement,
- less risk that Web changes disturb ServicesOS production.

This does **not** mean duplicating business data or exposing ServicesOS operational collections to SLAI Web.

## ServicesOS Integration Rule

SLAI Web and ServicesOS remain sibling products.

For connected customers:

```text
ServicesOS private/operational truth
        ↓
approved public-data release / bounded booking interface
        ↓
SLAI Web public presentation
```

SLAI Web must not receive broad direct access to private ServicesOS tenant data merely because both products use Firebase/Google Cloud.

## Stripe Rule

Stripe remains the default SLAI payment/billing provider unless a future requirement proves otherwise.

SLAI Web should use Stripe for:

- recurring platform subscriptions,
- one-time done-for-you/custom implementation charges,
- authoritative payment/subscription events,
- billing state used by the SLAI Web entitlement layer.

SLAI Web billing is separate from ServicesOS product entitlement even when the same customer buys both products.

Do not create a second payment provider merely to separate products.

## Provider-Replacement Gate

Do not introduce another provider unless the active-build architecture review documents:

1. the requirement the current provider cannot reasonably satisfy,
2. the operational/cost/security downside of staying with the current provider,
3. the expected fixed and variable cost of the replacement,
4. migration/lock-in implications,
5. monitoring/support burden,
6. why an adapter around the existing provider is not enough.

Examples of legitimate reasons might include a material custom-domain limitation, unsupported deployment behavior, unacceptable cost at measured scale, compliance requirements, or a reliability need the current stack cannot meet.

"This service is popular" is not sufficient justification.

## Active-Build Verification Gate

When ServicesOS V1 is stable and SLAI Web becomes the active build, Milestone 0 should **verify** rather than broadly re-shop the stack.

Confirm:

- Firebase/Google Cloud still fits authentication, structured data, media, hosting and server-side workload needs,
- whether Firebase Hosting, Cloud Run, or a controlled hybrid best fits production site delivery,
- whether SLAI Web should use a separate Firebase project under the same company billing account,
- Stripe product/price and webhook architecture,
- actual free/no-cost allowances and current provider pricing,
- custom-domain and SSL behavior,
- environment separation,
- monitoring/error reporting,
- backup/recovery,
- numeric storage/bandwidth/request safeguards.

Only reopen provider selection if one of those checks produces a concrete blocker.

## Acceptance Principle

The provider plan is ready when SLAI can answer:

- what provider performs each V1 infrastructure responsibility,
- which costs are fixed versus usage-based,
- which project/account owns each resource,
- how ServicesOS and SLAI Web stay isolated,
- how usage is attributed to SLAI Web and, where practical, individual tenants,
- what safeguards prevent runaway usage,
- what would justify introducing a new provider.
