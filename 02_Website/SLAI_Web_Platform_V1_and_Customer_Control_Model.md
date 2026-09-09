# SLAI Web Platform V1 and Customer Control Model

**Status:** Strategic planning / future active build after ServicesOS V1  
**Last Updated:** 2026-09-09  
**Owner:** Jamie Brown / Stellar Logic AI  
**Priority Gate:** Do not begin active SLAI Web implementation until ServicesOS V1 is stable, customer-facing, payment-ready, and no longer requiring constant beta-critical intervention.

## Executive Direction

SLAI Web has evolved from a managed website service into a future **managed website platform plus optional professional services**.

Core positioning:

> **SLAI Web gives small businesses a professionally managed website platform that stays easy to operate, easy to restyle, and easy to connect to the wider SLAI ecosystem.**

SLAI Web should support three customer paths on the same platform:

1. **DIY** — customer builds and manages the site through the SLAI Web dashboard.
2. **Done-for-you** — SLAI uses the same platform to build the customer's site for a one-time implementation fee.
3. **Custom** — SLAI creates a custom presentation/layout while preserving the same platform, content model, publishing, hosting, support, and maintenance architecture.

The underlying platform should be the same in all three cases.

## Product Sequence

Current strategic sequence:

```text
Finish ServicesOS V1
→ wife beta complete
→ beta-critical bugs fixed
→ onboarding usable
→ payments stable
→ security/tenant-isolation checks complete
→ customer-facing launch
→ stabilize early usage
→ promote SLAI Web to active build
→ build and validate SLAI Web V1
→ then return to larger ServicesOS V2 expansion
```

ServicesOS remains maintained during SLAI Web development for security, payments, customer-critical defects, and small V1 usability fixes.

## Shared SLAI Platform Foundation

SLAI Web should reuse proven SLAI platform primitives rather than rebuild account infrastructure.

Potential shared foundations:

- SLAI identity/authentication,
- tenant/business identity,
- user/customer records,
- roles and permissions,
- subscription and entitlement patterns,
- Stripe customer linkage where appropriate,
- audit-event conventions,
- support-staff identities,
- asset/storage conventions,
- common security controls.

Architectural rule:

> **ServicesOS and SLAI Web should be sibling products over shared SLAI platform primitives. SLAI Web must not depend on ServicesOS internals to function.**

```text
SLAI Platform Core
├── Identity / authentication
├── Tenant / customer foundation
├── Billing / entitlements
├── Audit / security patterns
│
├── ServicesOS
└── SLAI Web
```

A customer may subscribe to one or both products under the same SLAI identity.

## Canonical Website Data Model

SLAI Web should own a canonical public website/business profile independent of any single control surface.

Candidate domains:

- business identity,
- logo and brand assets,
- brand colors,
- typography tokens,
- phone/email/contact,
- address/service area,
- hours and holiday hours,
- services,
- prices,
- service descriptions,
- staff/team public profiles,
- photos/gallery,
- policies,
- social links,
- announcements/specials,
- FAQs,
- testimonials/reviews where permitted,
- CTA configuration,
- booking/request integration settings,
- page configuration,
- navigation,
- layout/theme selections.

Core rule:

> **Content and business facts should be durable. Presentation should be replaceable.**

## Two Control Surfaces, One Website Model

Standalone SLAI Web customers should use the SLAI Web Dashboard.

ServicesOS customers may manage the same website-compatible data through ServicesOS Business Settings or an integrated website section.

```text
                    Canonical Website Profile
                         /              \
                        /                \
             SLAI Web Dashboard      ServicesOS
```

Do not create two competing website databases that must be synchronized forever.

When ServicesOS contributes business information, it should publish approved public data through a defined interface/release boundary.

## Guided Onboarding and Recommended Website

SLAI Web should not open to a blank page builder.

The customer should complete a business-first onboarding flow similar in spirit to ServicesOS onboarding.

Candidate intake:

- business type/vertical,
- business name,
- services and pricing,
- staff/team,
- hours,
- location/service area,
- logo,
- colors/branding,
- photos,
- social links,
- primary customer action,
- booking/contact preference,
- style preferences.

The system should then generate a **recommended website starting point**.

Most initial recommendations should be deterministic.

Examples:

- appointment business → booking-first CTA,
- multiple providers → team section suggested,
- visual business with strong photos → gallery/portfolio emphasis,
- service-area company → service-area section,
- trust-heavy business → reviews/testimonials emphasis,
- limited imagery → text/trust-forward composition,
- logo available → derive or suggest validated brand tokens.

AI may assist with copy, style explanation, or ambiguous recommendations, but it should not be required to instantiate a normal site.

## Page and Section System

Customers should be able to create normal pages without requiring SLAI intervention.

Approved page types may include:

- Home,
- About,
- Services,
- individual service pages,
- Team,
- Gallery,
- Reviews,
- FAQ,
- Contact,
- Policies,
- Locations,
- Service Area,
- Promotions/Specials,
- structured custom-content page.

Pages should be built from approved, tested sections rather than unrestricted raw-code editing.

Example:

```text
About Page
├── Hero
├── Story
├── Team
├── Reviews
└── CTA
```

Customers may reorder or choose compatible sections within safe rules.

New functionality, unsupported components, unusual integrations, and bespoke experiences remain SLAI custom work.

## Design System and UI/UX Lifecycle

SLAI Web must continuously evolve visually so customer websites do not become stale.

The platform should support:

- layout families,
- hero variants,
- service-card variants,
- team/staff presentation styles,
- review/testimonial variants,
- typography systems,
- spacing/density systems,
- button/CTA variants,
- navigation styles,
- gallery systems,
- responsive treatments,
- bounded animation presets,
- light/dark theme families.

Customers should be able to preview and adopt newer approved styles without rebuilding their content.

Versioning rule:

```text
Layout 03 v1 → existing site remains stable
Layout 03 v2 → available for preview
Customer/SLAI approves
→ publish upgrade
```

Do not silently force visual migrations on live sites.

## Safe Customer Control

Customers should have meaningful design control without being able to easily break accessibility or responsive behavior.

Safe self-service examples:

- colors within contrast validation,
- logo,
- approved font pairings,
- theme/layout selection,
- hero variant,
- section variants,
- page order/navigation,
- photos/gallery,
- service/staff/business facts,
- selected CTA behavior.

SLAI-controlled examples:

- new platform components,
- shared-core changes,
- custom integrations,
- unusual animations,
- bespoke layouts,
- security/auth changes,
- deployment architecture.

Principle:

> **Give customers ownership of their business identity and choices, while SLAI protects system quality.**

## Preview, Publish, Versioning, and Rollback

Every meaningful change should follow:

```text
Edit
→ Draft
→ Preview
→ Publish
→ Version recorded
```

Presentation changes should support desktop/tablet/mobile preview.

The platform should keep previous known-good releases so a customer or SLAI support can restore a prior version.

## SLAI Intelligence Assistance

SLAI Intelligence should assist customers without becoming the autonomous authority over their websites.

Useful assistance:

- explain settings,
- detect missing business information,
- suggest appropriate sections/pages,
- flag poor color contrast,
- suggest CTA placement,
- help rewrite About/service copy,
- suggest SEO metadata,
- identify disabled sections that match existing data,
- explain why a website recommendation was made,
- warn before a change likely reduces usability.

Preferred support ladder:

```text
Self-service
→ deterministic guidance
→ SLAI Intelligence assistance
→ SLAI human support
```

Use deterministic rules first. Use a small/shared communication model for routine explanation when appropriate. Use frontier AI only for genuinely complex work.

## Secure SLAI Support Mode

Do not create a hidden backdoor.

Provide a secure support/delegated-access mode for authorized SLAI staff.

Requirements:

- named staff identity,
- MFA,
- role/permission checks,
- explicit support reason/ticket,
- time-limited access,
- clear Support Mode indicator,
- audit trail of actions,
- no access to passwords/payment secrets,
- elevated approval for sensitive actions,
- automatic session close,
- customer-visible history where appropriate.

Common support actions:

- restore a prior version,
- repair navigation,
- fix layout/theme settings,
- correct published presentation,
- help with assets,
- resolve publishing/domain issues.

## Managed Web Subscription

Working target remains **$100/month**, subject to validation.

The subscription should be a real platform/service bundle rather than passive maintenance.

Potential included value:

- SLAI Web dashboard,
- hosting,
- SSL,
- publishing,
- version history/rollback,
- backups/recovery,
- monitoring,
- routine technical maintenance,
- approved layouts/themes/section styles,
- continued design-system updates,
- customer self-service controls,
- domain/DNS assistance,
- basic analytics/search-health tooling,
- bounded SLAI Intelligence help,
- standard support,
- ServicesOS connector when applicable.

Dashboard/publishing/platform access exists as part of an active SLAI Web subscription.

## Build / Implementation Options

Working packaging hypotheses to validate:

### DIY
- **$0 build fee**
- **$100/month SLAI Web**
- customer completes onboarding, chooses recommended/alternate style, builds and publishes through the platform.

### Done-for-you
- working target **~$750-$1,000 one-time**
- **$100/month SLAI Web**
- SLAI configures and QA-checks the site using the same platform.

### Custom
- working target **~$1,500-$2,000+ one-time**
- **$100/month SLAI Web**
- custom presentation/layout/components as scoped,
- still uses the same content, dashboard, hosting, publishing, maintenance, and versioning system.

Pricing is a hypothesis until real customer data validates conversion, support burden, and margins.

## Custom Websites Stay on the Platform

A custom website should not become a forked maintenance burden.

Custom means **bespoke presentation**, not a separate operating stack.

```text
SLAI Web Platform
├── Standard layouts
└── Custom customer layout
       ↓
same website profile
same dashboard
same publishing
same hosting
same versioning
same support
same ServicesOS/public-data integration
```

Customer-funded custom components that prove broadly reusable may later be promoted into the shared component library after accessibility, responsive, performance, and QA review.

## Ownership and Cancellation

Preferred ownership principle:

- customer owns their domain,
- customer owns customer-provided content, logos, photos, business facts, and other owned assets,
- SLAI owns its platform, editor, layouts, components, deployment tooling, connectors, and shared software.

If a customer cancels SLAI Web, the plan should not imply indefinite free hosting or editor access.

Cancellation should end, after the defined transition process:

- dashboard/editor access,
- SLAI publishing,
- managed hosting,
- ServicesOS-to-Web synchronization,
- design-system updates,
- technical maintenance/support.

The customer retains their domain and owned content/assets.

Where technically practical, SLAI should provide a documented export/handoff path for the last published website or customer content without transferring SLAI's proprietary platform source.

## Cross-Product Role

SLAI Web can become the public-facing presentation layer for multiple future SLAI products.

Pattern:

```text
SLAI Product
→ approved public-data projection
→ review/publish
→ SLAI Web
→ public website
```

Examples may eventually include:

- ServicesOS → services, staff, prices, booking, hours, policies,
- RetailOS → approved store/product/public information,
- EducationOS → public programs/events/enrollment information,
- ComplianceAI → approved public certifications/status where appropriate,
- GrowthAI → approved content drafts/recommendations.

Each operational product remains independently functional. SLAI Web must not become the source of private operational truth.

## One-Stop-Shop Strategy

Long-term company positioning:

> **SLAI can become a one-stop technology partner for small businesses while keeping focused products modular underneath.**

Potential customer journey:

```text
SLAI Account
├── SLAI Web — public website/presence
├── ServicesOS — operations, scheduling, customers, payments
├── GrowthAI — growth intelligence
└── future products/modules as justified
```

The ecosystem should work better together without trapping customers or forcing unrelated products.

## Low-AI Economics

Normal website operation should be predominantly deterministic.

No-model or rule-based work should include:

- loading business data,
- rendering layouts,
- applying brand tokens,
- page creation from known schemas,
- service/staff/hour updates,
- publishing,
- versioning,
- validation,
- build/link checks,
- metadata/schema generation from verified fields,
- deployment/rollback.

AI is reserved for:

- copy refinement,
- explanations,
- ambiguous style recommendations,
- unusual responsive diagnosis,
- customer-specific content assistance,
- complex custom work.

This keeps the $100/month platform economically controllable.

## V1 Build-Time Hypothesis

Once ServicesOS V1 is stable and shared platform patterns are reusable, a focused SLAI Web V1 may be achievable in roughly **6-10 weeks** as a planning hypothesis, not a promise.

V1 should focus on:

- shared auth/account integration,
- website profile/schema,
- onboarding/recommended site,
- a small excellent layout/section library,
- customer dashboard,
- pages/sections,
- theme/brand controls,
- preview/publish,
- version history/rollback,
- hosting/domain connection,
- billing/entitlements,
- support mode,
- bounded SLAI Intelligence,
- ServicesOS connector,
- security/QA.

Do not attempt to build Wix/Webflow-level unrestricted design tooling in V1.

## Validation Metrics

Early customers should measure:

- onboarding completion time,
- time to first publish,
- DIY completion rate,
- SLAI build time,
- AI/model usage,
- human QA minutes,
- revision count,
- deployment time,
- direct hosting/support cost,
- support contacts per customer,
- customer self-service edit rate,
- website uptime/incidents,
- ServicesOS conversion,
- Managed Web retention,
- founder/employee minutes per site per month.

A particularly important scaling metric:

> **Human support/maintenance minutes per active site per month.**

## Final Product Definition

SLAI Web should become:

> **A managed website platform for small businesses with guided onboarding, recommended professional designs, safe self-service customization, continuously evolving UI/UX, optional done-for-you/custom implementation, SLAI Intelligence assistance, human support, and native integration with the broader SLAI ecosystem.**

The active-build gate remains unchanged: **ServicesOS V1 first.**
