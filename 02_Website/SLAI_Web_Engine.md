# SLAI Web Engine

**Document Status:** Strategic planning  
**Implementation Status:** Future / post-ServicesOS-V1 support system  
**Last Updated:** 2026-09-01  
**Owner:** Jamie Brown / Stellar Logic AI  
**Primary Rule:** ServicesOS remains priority one. Do not build this engine before ServicesOS reaches stable customer-ready V1 unless Jamie explicitly promotes a small supporting task.

## Purpose

SLAI Web is a productized website and managed-web service designed to do four jobs at once:

1. give small businesses a professional owned web presence,
2. create near-term cash flow for Stellar Logic AI,
3. act as a customer-acquisition and workflow-discovery channel for ServicesOS,
4. become a customer-facing surface powered by ServicesOS when the customer uses both.

Core framing:

> **The website is the front door. ServicesOS is the operating engine behind the business.**

SLAI Web should not become a traditional custom web agency that consumes the founder's time. The system should be standardized, AI-assisted, reusable, and human-QA controlled.

## Productized Architecture

```text
SLAI Web Platform
|
+-- Stable Core
|   +-- responsive shell
|   +-- accessibility
|   +-- SEO/schema
|   +-- analytics hooks
|   +-- deployment/hosting conventions
|   +-- forms and shared components
|   +-- ServicesOS connector
|
+-- Layout Library
|   +-- Layout 01
|   +-- Layout 02
|   +-- ...
|   +-- Layout 10
|
+-- Customer Layer
    +-- business identity
    +-- logo
    +-- colors
    +-- fonts
    +-- imagery
    +-- copy
    +-- section choices
    +-- ServicesOS tenant configuration
```

The shared core should be protected from routine customer-specific edits.

The goal is for most new websites to be configuration and presentation work rather than newly generated application logic.

## Initial Layout Library

The exact designs may evolve, but the first library can target up to ten reusable layout systems:

1. **Bold Local** — strong hero, reviews, services, large calls to action.
2. **Premium Dark** — barbers, detailing, tattoo, premium trades, high-contrast visual brands.
3. **Clean Professional** — cleaning, consulting, home services, professional service firms.
4. **Visual Portfolio** — landscaping, contractors, remodeling, before/after-heavy businesses.
5. **Booking First** — barber, salon, massage, appointment-driven services.
6. **Service Area** — cleaning, lawn care, pressure washing, mobile services.
7. **Trust First** — reputation-heavy or high-trust service businesses.
8. **Team Focused** — businesses where the customer chooses or evaluates staff.
9. **Modern Minimal** — simple, polished, higher-end local businesses.
10. **Community / Story** — family businesses, legacy shops, local-community brands.

These are **layout systems, not clone templates**. Shared structure may be reused while typography, colors, imagery, spacing, section order, copy, and visual treatment remain customer-specific.

## ServicesOS as Canonical Business Data

For customers using ServicesOS, ServicesOS should eventually become the single source of truth for approved public business information.

Potential canonical fields:

- business name,
- logo,
- brand colors,
- phone/email,
- address and service area,
- normal and holiday hours,
- social links,
- staff/team members,
- staff photos and public bios,
- services,
- pricing,
- service duration,
- public service descriptions,
- booking rules,
- availability,
- photos/gallery assets,
- amenities,
- announcements,
- public policies,
- review/testimonial selections where supported.

The website consumes **approved public data**. It should not expose private operational data.

### Publish Control

Routine edits should support:

```text
Edit
↓
Save Draft
↓
Review
↓
Publish Changes
↓
Website reflects approved public data
```

Not every ServicesOS edit should instantly become public.

## Website Integration Boundary

Automatic website synchronization is available only when the website is integrated with ServicesOS.

Three future levels:

1. **SLAI-built / SLAI-managed website** — deepest native integration and automatic public-data sync.
2. **Third-party website** — may later use a supported API, SDK, widget, or embed.
3. **No website integration** — ServicesOS still runs the business; website changes remain manual.

ServicesOS must never depend on the SLAI website service to function.

## Booking Architecture

For appointment or request-based businesses, the website should own the customer experience while ServicesOS owns availability and booking truth.

Example barber flow:

```text
Customer visits branded website
↓
Choose barber
↓
Choose service
↓
Website requests valid availability from ServicesOS
↓
Choose slot
↓
Customer confirms
↓
ServicesOS re-validates slot
↓
Atomic reservation / appointment creation
↓
Slot becomes unavailable
↓
Owner and assigned barber see appointment in ServicesOS
↓
Confirmation/reminders/payment/rebooking workflows continue
```

The website should never hardcode schedule truth.

At final submission, ServicesOS must confirm that the slot is still open and reserve it atomically to prevent double-booking.

The same pattern can support other verticals:

- cleaning: request or book service window,
- landscaping: estimate/service request,
- barber/salon: staff + service + time,
- other service businesses: vertical-specific customer flow using the same ServicesOS operating backbone.

## ServicesOS-Powered Website Setup

ServicesOS onboarding can eventually make website production extremely fast because customer data already exists.

A future **Website Ready** checklist may include:

```text
Business name       ✅
Logo                ✅
Brand colors        ✅
Contact information ✅
Services            ✅
Pricing             ✅
Hours               ✅
Team                ✅
Photos              ⚠️
Social links        ✅
Booking settings    ✅
```

Once the required fields are complete, SLAI Web can provision a first draft from the approved layout library.

## AI-Assisted Build Workflow

Target workflow:

```text
Customer / ServicesOS tenant
↓
Verified business data
↓
Choose approved layout
↓
AI customizes customer layer
↓
Automated checks
↓
Human QA
↓
Client preview
↓
Human/client approval
↓
Deploy
↓
Managed website
```

AI may help with:

- content inventory,
- copy adaptation,
- section arrangement,
- branding application,
- component configuration,
- responsive refinements,
- SEO metadata,
- accessibility fixes,
- build/test fixes,
- deployment preparation,
- QA summaries.

AI must not invent unverified business facts.

## Low-AI-Usage Strategy

The Web Engine should minimize Codex/Claude/model usage by reusing stable infrastructure.

Instead of:

> Build a website from scratch.

The normal task should become:

> Use Layout 05. Apply this verified customer profile. Modify the customer layer only. Do not alter shared core or ServicesOS booking connector. Run the standard checks and report.

The stable core is solved once and reused.

This reduces:

- architecture reasoning,
- repeated code generation,
- token/model usage,
- regression risk,
- QA burden,
- deployment variation.

## Human QA Rule

Automation handles repetition. Humans retain responsibility for quality and consequential release decisions.

Before client preview or production deployment, a human should verify:

- visual quality,
- brand fit,
- factual business information,
- mobile/tablet/desktop behavior,
- booking or lead-flow behavior,
- accessibility basics,
- SEO basics,
- links,
- images,
- pricing/hours,
- customer-specific policies,
- ServicesOS integration health.

AI may prepare the evidence. Human QA decides whether it is ready.

## Managed Website Boundary

Routine business-data edits should increasingly be self-service through ServicesOS.

Examples:

- price changes,
- service changes,
- hours,
- staff changes,
- approved photos,
- business identity.

The managed-website service should focus on technical responsibility:

- hosting,
- SSL,
- uptime,
- backups/recovery,
- deployment,
- technical fixes,
- compatibility,
- security maintenance,
- DNS/domain assistance,
- analytics/search health,
- ServicesOS connector health,
- genuine design/technical issues.

Large redesigns, new pages, campaigns, or custom functionality should be scoped separately.

See: `../03_SLAI_Company/SLAI_Web_Services_Business_Model.md`.

## Domain Ownership Principle

Preferred model:

- customer owns the domain,
- SLAI manages DNS/hosting when contracted,
- customer can leave without SLAI holding the domain hostage,
- SLAI-managed hosting and maintenance remain a service, not ownership of the customer's identity.

## Scale Model

With the stable core, layout library, ServicesOS data, and AI-assisted customization, straightforward builds may eventually require about an hour or less of founder/employee hands-on production time.

The real bottlenecks at scale become:

- intake quality,
- missing assets,
- customer approvals,
- QA,
- domain access,
- unusual custom requests,
- support edge cases.

If demand grows, the first dedicated web hire may be better framed as **Web Implementation / QA Developer** rather than a traditional from-scratch website developer.

That role can:

- review generated builds,
- fix visual edge cases,
- validate responsive behavior,
- validate ServicesOS integrations,
- handle deployment/DNS,
- maintain the layout library,
- protect the shared core,
- escalate real platform bugs.

## Future SLAIOS Relationship

SLAIOS may eventually orchestrate the website-production queue.

See:

- `../04_SLAIOS_Internal/SLAIOS_Web_Production_Orchestration.md`
- `../16_SLAI_Company_Engine/05_Founder_Workflow.md`

Future flow:

```text
Website order
↓
SLAIOS gathers ServicesOS/company context
↓
Build job package
↓
AI customizes approved layout
↓
Automated QA
↓
Human web QA
↓
Client approval
↓
Deploy
↓
SLAIOS records status/history
```

## Guardrails

- ServicesOS V1 remains the priority.
- Do not build ten layout systems before demand proves the service.
- Prove the workflow with one or two real businesses first.
- Do not let website client work consume protected ServicesOS engineering time.
- Do not create unlimited-revision or unlimited-custom-development expectations.
- Do not auto-publish unverified AI-generated claims.
- Do not couple ServicesOS core operations to customer website code.
- Standardize the process, not the customer's identity.

## Success Definition

SLAI Web succeeds if it becomes:

```text
Cash-flow service
+
ServicesOS acquisition channel
+
Vertical discovery channel
+
Customer-facing ServicesOS surface
+
Low-touch recurring managed-web revenue
```

without becoming a founder-time-heavy agency.
