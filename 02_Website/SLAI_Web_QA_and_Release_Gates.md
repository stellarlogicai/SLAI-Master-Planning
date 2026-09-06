# SLAI Web QA and Release Gates

**Status:** Planning contract  
**Implementation:** Future  
**Last Updated:** 2026-09-06

## Purpose

Define the evidence required before an SLAI Web customer site can move from build to preview and from preview to production.

## Gate 1 — Data Readiness

Automated:
- required fields present,
- required assets present,
- content release/manifest references valid.

Human:
- verify ambiguous business facts,
- verify untrusted public research,
- confirm owner-approved prices/hours/policies.

## Gate 2 — Build Integrity

Automated:
- install/build succeeds,
- type/lint checks where applicable,
- unit tests,
- no unresolved imports,
- no forbidden-path changes.

## Gate 3 — Content Integrity

Automated:
- no missing required content,
- no broken local references,
- expected ServicesOS public release loaded.

Human:
- verify names,
- prices,
- hours,
- claims,
- spelling,
- contact information,
- image appropriateness.

## Gate 4 — Responsive / Visual

Automated:
- defined viewport smoke checks where tooling supports it.

Human:
- hierarchy,
- spacing,
- crop quality,
- overflow,
- mobile usability,
- tablet/desktop behavior,
- CTA clarity.

## Gate 5 — Accessibility

Automated:
- accessibility scan.

Human:
- keyboard/focus behavior,
- labels,
- semantic meaning,
- readable contrast/content,
- image alt-text appropriateness.

## Gate 6 — SEO / Public Metadata

Automated:
- title/meta presence,
- canonical rules,
- schema validation,
- sitemap/robots where applicable.

Human:
- business/marketing relevance,
- local-service intent,
- factual accuracy.

## Gate 7 — Integrations

Automated:
- form/booking/API checks,
- failure-path checks,
- booking idempotency/concurrency tests when native booking is used.

Human:
- customer journey makes sense,
- expected confirmations and error messages are understandable.

## Gate 8 — Security

Automated:
- no secrets in output,
- protected-file diff check,
- dependency/config checks when defined.

Human/higher authority:
- review any auth, connector, security, shared-core, or deployment exception.

## Gate 9 — Performance

Automated:
- layout-specific performance budget when the production stack is defined.

Human:
- approve documented justified exceptions.

Do not invent final numeric thresholds until the actual stack and baseline exist.

## Gate 10 — Approval

Required records:

- human Web QA approval,
- client approval when contract/process requires it,
- production approval,
- exceptions explicitly documented.

## Gate 11 — Deployment

Capture:

- build/deploy ID,
- commit/reference,
- manifest version,
- core/layout versions,
- public-data release ID,
- deployment timestamp.

Run production smoke checks after deploy.

## Gate 12 — Recovery

Before completion:

- known prior production release,
- rollback procedure/reference,
- incident owner.

## Release Rule

A site is not production-ready because “the build passed.”

Production requires automated evidence + human visual/factual QA + approval + post-deploy verification.
