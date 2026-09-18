# SLAI Web V1 Execution Plan

**Status:** Future active-build execution plan  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI  
**Priority gate:** Do not begin SLAI Web implementation until ServicesOS V1 is customer-facing, payment-ready, security/tenant-isolation checked, and stable enough that it no longer requires constant beta-critical intervention.

---

## 1. Purpose

This document converts the existing SLAI Web strategy, architecture, customer-control model, QA gates, pricing hypotheses, and production templates into one controlled V1 implementation sequence.

SLAI Web V1 exists to prove a revenue-producing web platform without turning Stellar Logic AI into a founder-time-heavy custom web agency.

Primary business objective:

> **Generate near-term build/platform revenue, create recurring web revenue, and create a practical acquisition path into ServicesOS while preserving founder focus.**

The product should be capable of serving customers who use SLAI Web alone and customers who use both SLAI Web and ServicesOS.

---

## 2. Authoritative Product Sequence

```text
Finish ServicesOS V1
        ↓
Wife beta complete
        ↓
Beta-critical fixes complete
        ↓
Onboarding usable
        ↓
Payments stable
        ↓
Security / tenant isolation / production employee workflow proven
        ↓
Customer-facing ServicesOS V1 launch
        ↓
Stabilize early usage
        ↓
Promote SLAI Web V1 to active build
        ↓
Build SLAI Web V1 in controlled milestones
        ↓
Launch first real customer / design partner
        ↓
Measure revenue, support burden, build time, hosting cost, AI use, and self-service behavior
        ↓
Correct platform defects and scope assumptions
        ↓
Prove at least one real revenue path
        ↓
Only then consider larger ServicesOS V2 expansion
```

ServicesOS remains maintained during SLAI Web development for security, payments, customer-critical defects, and small V1 usability fixes.

---

## 3. Relationship to Existing Planning

This execution plan is the implementation companion to:

- `SLAI_Web_Platform_V1_and_Customer_Control_Model.md`
- `SLAI_Web_Engine.md`
- `SLAI_Web_Architecture_Spec.md`
- `SLAI_Web_Layout_Contract.md`
- `SLAI_Web_Layout_Library_Plan.md` — target 10-family service-business layout catalog and evidence-gated expansion order; does not override the one-or-two-layout V1 start.
- `SLAI_Web_QA_and_Release_Gates.md`
- `SLAI_Web_V1_Product_and_Data_Contracts.md`
- `SLAI_Web_V1_Deployment_Billing_and_Operations_Contracts.md`
- `Templates/Website_Intake_and_Readiness.md`
- `Templates/Web_Job_Packet.md`
- `Templates/Human_QA_Checklist.md`
- `Templates/Client_Approval_and_Deployment_Record.md`
- `Templates/Website_Pricing_and_Scope_Matrix.md`
- `Templates/Website_Customer_Control_Matrix.md`
- `Templates/Website_Proof_Metrics_Record.md`
- `../01_ServicesOS/Website_Public_Data_and_Booking_Contract.md`
- `../03_SLAI_Company/SLAI_Web_Services_Business_Model.md`

The existing platform document remains the product vision. This document controls build order and release gates.

---

# 4. SLAI Web V1 Scope Lock

## V1 must include

### Account / tenant / entitlement foundation

- authenticated customer account,
- tenant/business identity,
- SLAI Web subscription entitlement,
- supported customer roles,
- secure SLAI support/delegated-access mode,
- cross-tenant isolation,
- audit events for consequential platform actions.

### Guided onboarding

- business identity,
- contact information,
- location/service area,
- hours,
- services and displayed pricing,
- staff/team where applicable,
- logo and brand assets,
- photos,
- social links,
- primary CTA,
- contact/booking preference,
- style preferences,
- launch-readiness validation.

Onboarding must not begin from an unrestricted blank page builder.

### Canonical Website Profile

- versioned structured business/public data,
- structured website presentation configuration,
- clear source-of-truth/provenance rules,
- explicit public/private classification,
- draft and published states,
- compatibility/version fields.

### Page / section system

Initial approved page types should support the most common small-business needs:

- Home,
- About,
- Services,
- Team where applicable,
- Gallery,
- Reviews/testimonials where legally/permissibly sourced,
- FAQ,
- Contact,
- Policies,
- Service Area / Location where applicable,
- structured custom-content page.

V1 does not need every conceptual page type if the first customers do not require it.

### Initial layout / design system

- one or two excellent production-ready layout systems,
- approved section variants,
- approved typography pairings,
- brand tokens,
- validated colors/contrast,
- responsive behavior,
- desktop/tablet/mobile preview,
- explicit layout versioning.

Do not build ten layouts before demand proves the need.

### Customer dashboard

- onboarding/readiness,
- business/public data editing,
- page management,
- section order/variants within supported rules,
- branding/theme controls,
- asset management,
- preview,
- publish,
- version history,
- rollback where safely exposed,
- domain/launch status,
- subscription/account status,
- standard help/support entry point.

### Draft / preview / publish / rollback

- mutable draft state,
- reproducible preview,
- explicit publish action,
- immutable/versioned published release,
- prior known-good release tracking,
- rollback by creating/restoring a controlled published version,
- audit trail.

### Hosting / deployment / domain support

- production hosting,
- SSL,
- custom-domain connection,
- preview/staging behavior,
- build/deployment identity,
- deployment history,
- health/smoke checks,
- known rollback path.

### Media

- safe image upload,
- approved formats and validation,
- deterministic image optimization,
- asset metadata/provenance,
- alt text support,
- bounded storage/asset rules,
- deletion/reference safety.

### Forms / contact flow

- standard contact/lead form,
- anti-spam/rate-limit protections,
- customer notification/delivery handling,
- clear submission result/error behavior,
- ServicesOS lead/request handoff where connected and explicitly supported.

### SEO / metadata / analytics foundation

- title/meta controls,
- canonical metadata,
- sitemap/robots where applicable,
- structured data/schema where appropriate,
- basic analytics/search-health integration hooks,
- verified business facts only.

### Billing

- SLAI Web recurring subscription,
- one-time implementation/custom charges where used,
- entitlement changes based on authoritative payment/subscription state,
- cancellation/reactivation behavior,
- clear site-state handling if subscription ends.

### ServicesOS connector

For customers using both products:

- consume only approved public-data releases,
- never read ServicesOS private operational data directly from a public site,
- preserve ServicesOS as scheduling/booking authority,
- preserve SLAI Web as website presentation/publication authority,
- use explicit source/provenance rules for shared fields.

### Secure support mode

- named SLAI staff identity,
- MFA where platform/account system supports it,
- permission checks,
- support reason/context,
- time-bounded elevation,
- visible Support Mode indicator,
- complete audit trail,
- no password/payment-secret access,
- automatic session close/expiry.

### Bounded SLAI Intelligence

Allowed V1 assistance may include:

- explain settings,
- identify missing business information,
- suggest page/section choices,
- draft/refine copy,
- suggest SEO metadata,
- explain style choices,
- flag accessibility/usability concerns,
- help diagnose unusual layout/content issues.

Normal site rendering, validation, publishing, versioning, deployment, metadata generation from verified fields, and standard layout instantiation should remain deterministic.

### QA / release process

Every production site must use the established automated + human QA gates and retain release/approval evidence.

---

## V1 explicitly does not include

Unless a real paying customer proves one is necessary for V1 viability, defer:

- Wix/Webflow-level unrestricted drag-and-drop design,
- unrestricted raw HTML/CSS/JS customer editing,
- large marketplace/app ecosystem,
- advanced ecommerce platform,
- complex inventory/catalog management,
- full blogging/CMS publishing suite,
- multi-language localization platform,
- enterprise multi-site governance,
- advanced A/B testing,
- fully autonomous AI site generation/publishing,
- unlimited custom integrations,
- unlimited revisions/custom development,
- consumer marketplace/discovery product,
- dozens of layout families,
- fully automated domain transfer/migration for every registrar,
- custom email hosting,
- custom CRM replacement,
- ServicesOS dependency for standalone Web customers.

---

# 5. Entry Gate — Definition of Ready for Active Build

Do not create the main SLAI Web implementation branch until all are true or explicitly waived by Jamie:

- ServicesOS V1 is customer-facing.
- Wife beta has completed a meaningful real workflow.
- Beta-critical defects are resolved or contained.
- ServicesOS payments are stable enough for customer use.
- Tenant-isolation/security release checks are complete.
- ServicesOS no longer needs constant high-priority intervention.
- Current ServicesOS public-data/booking contract is refreshed against final V1 reality.
- SLAI Web V1 scope is re-read and confirmed.
- The initial implementation stack/deployment decision is recorded.
- The first validation customer/design-partner path is identified or a generic first-customer test plan exists.

---

# 6. Cross-Cutting Architecture Invariants

These rules apply to every milestone.

1. **Content and business facts are durable. Presentation is replaceable.**
2. **A custom site remains on the common SLAI Web platform.**
3. **Routine customer work must not fork the shared core.**
4. **ServicesOS and SLAI Web remain sibling products.**
5. **Public websites never directly expose private operational data.**
6. **Published state changes only through an explicit publication boundary.**
7. **Booking truth remains with ServicesOS when native ServicesOS booking is used.**
8. **Deterministic systems perform deterministic work.**
9. **AI may assist interpretation/drafting; humans approve consequential public release decisions.**
10. **Every significant variable-cost surface must be measurable and bounded.**
11. **Every production deployment must be reproducible and rollback-capable.**
12. **Tenant isolation and entitlement checks are server/authority boundaries, not UI assumptions.**

---

# 7. Implementation Milestones

## Milestone 0 — Final pre-build architecture audit

### Goal

Translate final ServicesOS V1 reality and current SLAI Web planning into an implementation baseline without writing production features yet.

### Tasks

- confirm repository strategy,
- confirm framework/runtime choice,
- confirm hosting/deployment model,
- confirm data store/storage approach,
- confirm authentication/shared-identity reuse boundary,
- confirm Stripe billing/entitlement approach,
- confirm environment model,
- confirm first production domain flow,
- confirm ServicesOS connector contract against shipped V1,
- record architectural decisions and alternatives rejected.

### Exit criteria

- no unresolved decision prevents schema/identity implementation,
- expected recurring infrastructure components and likely variable-cost surfaces are identified,
- local/dev/test/staging/production boundaries are understood,
- rollback strategy exists at design level.

---

## Milestone 1 — Canonical Website Profile and state contracts

### Goal

Create the authoritative versioned data model before building dashboard UI.

### Implement

- Website Profile schema,
- website presentation configuration,
- content/public-fact provenance,
- asset references,
- layout/theme references,
- page/section configuration,
- draft release model,
- published release model,
- audit/version identifiers,
- schema versioning/migration hooks.

### Acceptance criteria

- one sample business can be represented without custom code,
- presentation can change without rewriting business facts,
- changing future profile data does not silently mutate an old published release,
- private/internal fields cannot be emitted into a public release by default,
- schema validation rejects malformed/unsupported state.

---

## Milestone 2 — Identity, tenancy, permissions, entitlements

### Goal

Make account authority safe before customers can create/edit sites.

### Implement

- account authentication,
- tenant membership,
- owner/editor/viewer or equivalent minimal role set,
- SLAI support identity/elevation boundary,
- SLAI Web entitlement state,
- cross-tenant guards,
- audit events for permission/entitlement-sensitive actions.

### Acceptance criteria

- Tenant A cannot read/write Tenant B website drafts, assets, domains, releases, or billing references.
- Unsupported/expired authority cannot publish.
- Support access requires explicit controlled elevation.
- UI visibility is not the only authorization enforcement.

---

## Milestone 3 — Billing lifecycle

### Goal

Make SLAI Web a real sellable product rather than a free website tool.

### Implement

- recurring SLAI Web subscription product/price mapping,
- one-time implementation/custom charge support as needed,
- checkout/setup flow,
- verified subscription state updates,
- entitlement mapping,
- payment failure/past-due behavior,
- cancellation,
- reactivation,
- customer billing status view,
- audit/event records.

### Acceptance criteria

- browser-controlled query/state cannot fabricate paid entitlement,
- duplicate checkout/webhook events are safely idempotent,
- subscription cancellation does not silently delete customer-owned content/assets,
- live-site handling after subscription termination follows the operations contract,
- ServicesOS billing remains separate even if one customer uses both products.

---

## Milestone 4 — Shared Web Core

### Goal

Create the reusable production shell that normal customer sites never fork.

### Implement

- responsive shell,
- accessibility primitives,
- navigation,
- shared section/component primitives,
- SEO/schema infrastructure,
- analytics hooks,
- forms foundation,
- error/fallback handling,
- asset rendering,
- configuration loader,
- version/build metadata.

### Acceptance criteria

- a site can render entirely from validated configuration and a known layout version,
- customer-specific data does not require modifying shared core,
- errors fail safely without exposing secrets/private data,
- core can be versioned independently from customer content.

---

## Milestone 5 — First production layout + section system

### Goal

Prove the layout contract with one excellent real layout before creating a library.

### Implement

- Layout 01,
- required sections,
- optional sections,
- compatible variants,
- typography/spacing tokens,
- responsive rules,
- asset requirements,
- layout manifest,
- accessibility constraints,
- performance baseline.

A second layout may be added only after the first passes real-customer QA or when the first target customer's business type clearly requires a materially different system.

The broader target library is defined in `SLAI_Web_Layout_Library_Plan.md`. That document controls intended layout families and expansion order after this milestone proves the contract; it does not authorize building all target families before evidence.

When source designs are ready for extraction, the current SLAI website and Aunt B's website may be audited as source material for the first generalized layout families. Reuse proven patterns without importing business-specific content or creating customer forks.

### Acceptance criteria

- same layout supports at least two distinct brand/content profiles without code forks,
- customer overrides stay within supported contract,
- breaking layout behavior requires explicit version change,
- old manifests remain reproducible.

---

## Milestone 6 — Dashboard + guided onboarding

### Goal

Allow a small-business owner to reach a strong starting site without facing a blank designer.

### Implement

- onboarding workflow,
- readiness indicators,
- Website Profile editing,
- page management,
- section ordering/variants,
- brand/logo controls,
- approved fonts/colors,
- asset upload/selection,
- CTA settings,
- style preference input,
- deterministic recommended starting configuration.

### Acceptance criteria

- a new customer can complete onboarding without SLAI editing raw code,
- required missing data is clearly surfaced,
- recommendations never invent business facts,
- dashboard cannot create unsupported layout states.

---

## Milestone 7 — Draft, preview, publish, version history, rollback

### Goal

Create the core publishing lifecycle.

### Implement

```text
Edit
→ Draft
→ Validate
→ Preview
→ Publish
→ Immutable Published Release
→ Production Deploy
```

Include version history, approval references, rollback/reference behavior, and publication audit events.

### Acceptance criteria

- editing a draft does not change the current live release,
- preview corresponds to a known draft/version,
- publish validates before releasing,
- each published release can identify exact core/layout/profile/deploy versions,
- rollback returns to a known-good release without destroying history.

---

## Milestone 8 — Media and forms

### Goal

Support normal small-business content and lead capture safely.

### Media

- upload validation,
- deterministic optimization,
- safe file naming/paths,
- asset metadata/provenance,
- alt text,
- size/count/quota controls,
- referenced-asset protection,
- deletion lifecycle.

### Forms

- contact/lead form,
- validation,
- anti-spam/rate limiting,
- delivery/storage policy,
- customer notification,
- safe failure/retry behavior,
- ServicesOS handoff where explicitly connected.

### Acceptance criteria

- unsupported/malicious file types are rejected,
- oversized/abusive upload behavior is bounded,
- form spam cannot create unbounded cost/load,
- no secret/private operational data is returned to the browser,
- failures are visible and recoverable rather than silently losing leads.

---

## Milestone 9 — Hosting, custom domains, deployment, recovery

### Goal

Turn validated releases into stable customer websites.

### Implement

- environment separation,
- preview/staging URL behavior,
- production deployment adapter,
- custom-domain verification/connection,
- SSL provisioning/verification,
- deploy IDs/status,
- deployment logs/evidence,
- health checks,
- production smoke,
- rollback operation,
- backup/recovery procedure.

### Acceptance criteria

- deployment is repeatable from explicit references,
- failed deploy does not silently replace known-good production,
- rollback path is tested,
- domain ownership remains with customer,
- SLAI does not require possession of customer passwords where safer delegated/DNS mechanisms exist.

---

## Milestone 10 — SEO, analytics, and website health

### Goal

Provide useful baseline public-web quality without becoming a full marketing agency.

### Implement

- titles/meta,
- canonical metadata,
- sitemap/robots,
- structured data where applicable,
- basic analytics integration,
- search-console/search-health setup workflow where applicable,
- broken-link/basic health checks,
- simple customer-visible status where useful.

### Acceptance criteria

- metadata derives from verified fields or explicit approved copy,
- no fabricated reviews/claims/business data,
- analytics implementation respects configured privacy/consent obligations,
- SEO output passes defined automated checks.

---

## Milestone 11 — ServicesOS connector

### Goal

Make combined customers meaningfully easier to operate without coupling the products.

### Implement

- approved public-data release consumption,
- field provenance/source mapping,
- compatible website data projection,
- customer-controlled publish boundary,
- booking/request connector where supported,
- failure isolation if ServicesOS is unavailable.

### Acceptance criteria

- website does not read private ServicesOS operational collections directly,
- website cannot authoritatively invent availability or booking truth,
- ServicesOS outage does not corrupt already published website content,
- source conflicts are surfaced rather than silently overwritten,
- standalone SLAI Web customers remain fully supported.

---

## Milestone 12 — Secure SLAI Support Mode

### Goal

Allow support without a hidden universal backdoor.

### Implement

- named support identity,
- support role/permission checks,
- reason/ticket/context,
- time-bounded elevation,
- visual Support Mode indicator,
- audit history,
- restricted sensitive-data access,
- session expiration/close,
- customer-visible support history where appropriate.

### Acceptance criteria

- no shared support credential,
- no unrestricted silent impersonation,
- sensitive operations remain independently protected,
- every elevated action is attributable.

---

## Milestone 13 — Bounded SLAI Intelligence

### Goal

Add assistance only where it improves customer outcomes or support efficiency.

### Initial actions

- copy refinement/drafting,
- page/section suggestions,
- missing-content explanations,
- SEO copy assistance,
- style rationale,
- accessibility/usability explanations,
- support diagnosis summaries.

### Guardrails

- no auto-publish,
- no invention of business facts,
- usage metering,
- plan/feature caps,
- provider failure does not break deterministic site operation,
- manual/deterministic alternatives remain available where practical.

### Acceptance criteria

- customer can operate normal website functions when AI is unavailable,
- model use is attributable to tenant/feature,
- provider cost is bounded,
- consequential output remains reviewable before publication.

---

## Milestone 14 — Full release-gate automation + human QA workflow

### Goal

Implement the existing QA/release contracts as actual workflow evidence.

### Required gate families

- data readiness,
- build integrity,
- content integrity,
- responsive/visual,
- accessibility,
- SEO/public metadata,
- integrations/forms/booking,
- security,
- performance,
- approvals,
- deployment,
- recovery.

### Acceptance criteria

- a customer site cannot be considered production-ready based only on a successful build,
- human factual/visual QA is recorded,
- client approval is recorded when required,
- deployment references and rollback reference are stored.

---

# 8. First Real Customer / Design-Partner Proof

The first real site is a platform validation exercise, not permission to bypass platform rules.

American Barbershop may be used if the business agrees, but the architecture must remain reusable for other customers.

The first proof must record the existing `Website_Proof_Metrics_Record.md` metrics, including:

- onboarding completion time,
- time to first draft,
- founder implementation minutes,
- AI/model usage,
- human QA minutes,
- revision rounds,
- deployment/domain time,
- direct hosting/storage/model costs,
- support contacts/minutes,
- customer self-service edits,
- build/implementation revenue,
- monthly recurring revenue,
- ServicesOS conversion status,
- 30/60/90-day retention when enough time passes.

### First-customer success criteria

A first customer is a successful SLAI Web V1 proof when:

- the site launches through the normal platform/release path,
- routine edits do not require core-code modifications,
- the customer can perform at least basic self-service updates,
- SLAI can restore/rollback a known release,
- support burden is measured,
- direct monthly cost is measured,
- revenue is real or a failed sale/launch produces documented business evidence,
- major defects/edge cases are captured before scaling sales.

---

# 9. Revenue / Scale Gate Before ServicesOS V2

SLAI Web does not need dozens of customers before ServicesOS V2 can resume.

However, before SLAI Web yields priority to larger ServicesOS V2 work, it should have produced enough evidence to answer:

- Can a customer be onboarded and launched reliably?
- Can SLAI charge for the platform and/or implementation?
- What is real founder/employee time per site?
- What is real monthly direct cost per site?
- What support burden does $100/month create?
- Do customers actually use self-service controls?
- Does SLAI Web create useful ServicesOS opportunities?
- Which requests repeatedly fall outside standard scope?
- Does the shared-core/layout/customer-layer architecture survive real use?

A minimum planning benchmark is at least one real customer/design-partner workflow and at least one tested revenue path or a documented reason it failed.

---

# 10. Codex / Implementation Rules

Future Codex tasks should be narrow slices, not "build SLAI Web."

Every task should include:

- recommended model and reason,
- exact goal,
- named planning/contracts to read,
- allowed scope/files,
- protected files/components,
- acceptance criteria,
- tests/build checks,
- security/tenant-isolation implications,
- deployment prohibition unless explicitly authorized,
- stop conditions,
- required report-back.

### Protected by default

Unless the task explicitly authorizes changes:

- authentication/security foundations,
- billing/webhook logic,
- shared deployment infrastructure,
- ServicesOS booking connector,
- cross-tenant rules,
- production environment/secrets,
- shared Web Core when task scope is customer/layout specific.

### Codex stop conditions

Stop and report rather than expanding scope if:

- a shared-core change appears necessary for one customer,
- the data contract is ambiguous,
- a requested feature creates a new variable-cost surface without metering/guardrails,
- auth/tenant/billing/security behavior would need to change unexpectedly,
- the task requires production deployment not explicitly approved,
- tests cannot pass without unrelated refactoring,
- customer facts conflict or cannot be verified,
- a third-party provider contract/behavior is unknown.

---

# 11. Final SLAI Web V1 Definition of Done

SLAI Web V1 is customer-ready when:

- a standalone customer can create/manage a website through the supported dashboard,
- guided onboarding can produce a credible recommended starting point,
- one or two production layouts are stable,
- customer data and presentation are separated,
- draft/preview/publish/version/rollback works,
- custom domain + SSL + production deployment works,
- standard media/forms/SEO/analytics work,
- subscription/entitlement lifecycle works,
- tenant isolation and support-mode boundaries are tested,
- ServicesOS integration works where connected without becoming a dependency,
- deterministic site operations remain functional if AI is unavailable,
- QA/release evidence is captured,
- at least one real customer/design-partner workflow has been completed,
- direct cost/support/build-time metrics have been recorded,
- the product has tested a real revenue path,
- remaining defects are non-critical and documented.

The V1 goal is not to compete feature-for-feature with Wix, Squarespace, or Webflow.

The V1 goal is to prove:

> **SLAI can repeatedly launch and manage professional small-business websites with low human overhead, controlled costs, safe self-service, strong human QA, and a natural path into ServicesOS.**
