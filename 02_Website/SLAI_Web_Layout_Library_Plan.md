# SLAI Web Layout Library Plan

**Status:** Future planning / target library  
**Implementation:** Parked until SLAI Web is promoted to active build under the existing V1 entry gate  
**Last Updated:** 2026-09-18  
**Owner:** Jamie Brown / Stellar Logic AI  

## 1. Purpose

Define the target reusable layout library for SLAI Web service-business websites and the controlled path for expanding from the first proven layouts into a broader catalog.

This document does **not** change the current V1 execution guardrail:

> Build one or two excellent production layouts before expanding the library.

The 10-layout catalog below is the **target library**, not permission to build all 10 before demand and production evidence justify them.

## 2. Relationship to Existing Contracts

This plan extends, but does not replace:

- `SLAI_Web_V1_Execution_Plan.md`
- `SLAI_Web_V1_Website_Profile_Schema.md`
- `SLAI_Web_Layout_Contract.md`
- `SLAI_Web_Engine.md`
- `SLAI_Web_Architecture_Spec.md`
- `SLAI_Web_QA_and_Release_Gates.md`

The authoritative V1 Website Profile remains schema version `1.0`.

The layout library must consume the existing semantic separation:

```text
businessFacts
+ websiteContent
+ presentation.brand
+ presentation.layout
+ presentation.pages / sections / variantId
+ conversion CTAs / forms
        ↓
validated layout + theme composition
        ↓
preview / publish / immutable release
```

Do not create a second template-specific business-data model.

## 3. Core Design Rule

SLAI Web should not maintain ten independent websites.

The desired model is:

```text
Canonical Website Profile
        ↓
Shared Web Core
        ↓
Reusable section/component library
        ↓
Versioned layout family
        ↓
Theme / brand tokens
        ↓
Customer-specific site
```

A new layout may control composition, ordering, supported variants, responsive behavior, and presentation rules. It must not own customer facts, booking truth, payment logic, tenant identity, or duplicated connector code.

## 4. Existing Source Layouts

Two real site layouts already being worked on should become source material for the first reusable layout families.

### Source A — SLAI Website

Use the current SLAI website layout as design evidence for a generalized **Modern Professional** family.

Do not copy SLAI-specific product language or company-specific assumptions into the reusable layout.

### Source B — Aunt B's Website

Use the current Aunt B's website layout as design evidence for a generalized **Warm Local Service** family.

Preserve the approachable local-service design strengths while removing business-specific content and assumptions.

These source sites should be audited for reusable sections, spacing rules, typography behavior, navigation patterns, CTA treatment, responsive behavior, and design tokens before their patterns are promoted into SLAI Web.

## 5. Target 10-Layout Library

### Layout 01 — Modern Professional

**Source inspiration:** SLAI website  
**Best fit:** professional services, consultants, commercial services, agencies, technology services, contractors.

Primary traits:

- strong modern hero,
- clean navigation,
- bold typography,
- split content/media sections,
- structured service cards,
- proof/trust sections,
- professional CTA treatment,
- polished modern footer.

Typical section flow:

```text
Header
→ Hero
→ Trust / proof
→ Services
→ About / positioning
→ Featured work or capabilities
→ Reviews
→ CTA
→ Contact
→ Footer
```

### Layout 02 — Warm Local Service

**Source inspiration:** Aunt B's website  
**Best fit:** cleaning, home services, pet services, organizing, care businesses, family-owned local services.

Primary traits:

- approachable local-business feel,
- warm imagery,
- simple service presentation,
- strong trust messaging,
- business story,
- easy contact or booking path.

Typical section flow:

```text
Header
→ Hero
→ Service highlights
→ About / business story
→ Why choose us
→ Gallery
→ Reviews
→ Service area / hours
→ CTA
→ Footer
```

### Layout 03 — Booking First

**Best fit:** barbershops, salons, groomers, massage, detailing, trainers, appointment-driven cleaners.

Primary objective: reduce friction between landing and booking.

Typical section flow:

```text
Compact Header
→ Booking-focused Hero
→ Popular Services
→ Team / Provider Selection
→ Booking CTA / Availability Surface
→ Gallery
→ Reviews
→ Hours / Location
→ FAQ
→ Footer
```

Signature behavior: booking actions are visually primary while authoritative availability remains outside static layout truth.

### Layout 04 — Visual Showcase

**Best fit:** landscaping, painting, detailing, remodeling, cleaning, pressure washing, photography, beauty.

Primary objective: sell through visible work quality.

Typical section flow:

```text
Minimal Header
→ Visual Hero
→ Featured Work
→ Services
→ Before / After
→ Process
→ Reviews
→ About
→ Service Area
→ Quote / Booking CTA
→ Footer
```

Signature behavior: large galleries, featured work, and before/after variants.

### Layout 05 — Local Trust

**Best fit:** lawn care, HVAC, plumbing, electricians, cleaners, repair companies, local contractors.

Primary objective: establish local credibility quickly.

Typical section flow:

```text
Local-Service Header
→ City / Service-Area Hero
→ Trust Metrics
→ Services
→ About
→ Why Choose Us
→ Reviews
→ Service Area / Map
→ Gallery
→ FAQ
→ Contact CTA
→ Footer
```

Signature behavior: prominent location, service-area, review, and reputation context.

### Layout 06 — Team First

**Best fit:** salons, barbershops, photographers, trainers, tattoo studios, wellness and provider-led businesses.

Primary objective: help the customer understand and select the person delivering the service.

Typical section flow:

```text
Header
→ Hero
→ Team Cards
→ Services / Specialties
→ Gallery
→ Business Story
→ Reviews
→ Hours / Location
→ FAQ
→ Booking CTA
→ Footer
```

Signature behavior: rich team/provider cards with public specialties, bios, photos, and optional booking actions.

### Layout 07 — Service Catalog

**Best fit:** cleaning, landscaping, HVAC, construction, repair, commercial and multi-service businesses.

Primary objective: make a larger service catalog easy to navigate.

Typical section flow:

```text
Header + Service Navigation
→ Hero
→ Service Categories
→ Featured Services
→ Service Detail Cards
→ Process
→ Why Choose Us
→ Reviews
→ Recent Work
→ Service Area
→ Contact / Quote CTA
→ Footer
```

Signature behavior: grouped service categories and scalable service presentation.

### Layout 08 — Premium Editorial

**Best fit:** luxury salons, upscale landscaping, premium cleaners, photographers, spas, boutique contractors.

Primary objective: communicate higher-end positioning through presentation quality rather than extra functionality.

Typical section flow:

```text
Minimal Premium Header
→ Photography-led Hero
→ Brand Story
→ Editorial Service Sections
→ Selected Work
→ Feature Testimonial
→ Team
→ Hours / Location
→ Booking CTA
→ Footer
```

Signature behavior: large imagery, editorial spacing, restrained UI, premium typography.

### Layout 09 — Fast Conversion

**Best fit:** lead-based contractors, cleaners, lawn services, pressure washing, repair, mobile services.

Primary objective: generate calls and quote/request submissions quickly.

Typical section flow:

```text
Header + Phone / Quote CTA
→ Conversion Hero
→ Trust Proof
→ Services
→ Benefits
→ Recent Work
→ Reviews
→ Quote / Request Form
→ Service Area / Hours
→ Footer
```

Signature behavior: clear conversion path with persistent or highly visible call/request actions.

### Layout 10 — Dynamic Dashboard

**Best fit:** customers using ServicesOS or future approved SLAI product connectors.

Primary objective: make the public site feel current and operationally connected without exposing private system data.

Typical section flow:

```text
Header
→ Smart Hero
→ Public Status / Context Cards
→ Services
→ Featured Work
→ Team
→ Reviews
→ About
→ FAQ
→ Contact / Location
→ Footer
```

Potential public-safe cards may include:

- open today,
- next valid public booking availability,
- popular service,
- current approved promotion,
- service area,
- review summary where supported.

V1 may render deterministic/static profile data first. Fresh operational values require the existing connector/public-data authority rules and must never be hardcoded into the layout.

## 6. Shared Section / Component Vocabulary

The layout library should reuse common section primitives rather than creating page-specific implementations.

Target reusable sections include:

- Header / Navigation
- Hero
- Trust / Proof Bar
- Services
- Service Categories
- About
- Team
- Gallery
- Before / After
- Testimonials / Reviews
- Process
- Benefits / Why Choose Us
- FAQ
- Hours
- Location
- Service Area
- Map
- Announcement / Promotion
- Booking CTA
- Request / Quote Form
- Contact
- CTA
- Footer

The authoritative V1 `SectionType` remains defined by `SLAI_Web_V1_Website_Profile_Schema.md`. New section types require an explicit schema revision rather than silent template-only expansion.

## 7. Section Variants

Layouts should primarily differ by composition and approved section variants.

Conceptual examples:

```tsx
<Hero variant="split" />
<Hero variant="centered" />
<Hero variant="imageOverlay" />
<Hero variant="booking" />

<Services variant="cards" />
<Services variant="catalog" />
<Services variant="alternating" />
<Services variant="compact" />

<Gallery variant="grid" />
<Gallery variant="masonry" />
<Gallery variant="beforeAfter" />
<Gallery variant="featured" />
```

These examples are design intent, not a requirement for exact component names.

Each implemented variant must be declared through the layout contract/manifest and validated rather than accepted as arbitrary runtime state.

## 8. Layout and Theme Must Stay Separate

Structural layout and visual style should not be the same concept.

A layout controls composition and supported behavior.

A theme/style preset controls approved visual tokens such as:

- color treatment,
- typography pairing,
- spacing density,
- button treatment,
- card treatment,
- border radius,
- shadows,
- section background treatment,
- image treatment.

Initial style directions may include:

- Clean
- Bold
- Friendly
- Professional
- Luxury
- Minimal
- Industrial

The locked V1 profile already provides `fontPairingId` and `stylePresetId` under `presentation.brand`. Use those existing seams rather than adding layout-specific brand data.

## 9. Configuration Direction

Where practical, layouts should become declarative configuration over stable components.

Conceptual example:

```ts
const bookingFirst = {
  layoutId: "booking-first",
  sectionOrder: [
    "hero",
    "services",
    "team",
    "gallery",
    "testimonials",
    "location",
    "faq",
    "footer"
  ],
  variants: {
    hero: "booking",
    services: "cards",
    team: "booking-cards",
    gallery: "grid"
  }
};
```

The production implementation must still comply with the authoritative layout manifest contract:

- `layout_id`
- `version`
- `core_compatibility`
- `required_sections`
- `optional_sections`
- `required_content_fields`
- `supported_variants`
- `asset_requirements`
- performance/accessibility constraints
- known constraints

## 10. Controlled Build Sequence

The target order is:

1. Modern Professional
2. Warm Local Service
3. Booking First
4. Fast Conversion
5. Visual Showcase
6. Local Trust
7. Team First
8. Service Catalog
9. Premium Editorial
10. Dynamic Dashboard

This is a **library expansion sequence**, not the V1 implementation sequence.

The V1 execution rule remains:

```text
Shared Web Core
→ Layout 01
→ real-customer QA / proof
→ Layout 02 only when justified
→ stabilize reusable section variants
→ expand additional layout families from evidence
```

## 11. Source Audit Before Layout Extraction

When SLAI Web becomes active and the two source websites are stable enough to inspect, perform a controlled source audit.

For each source site, record:

- reusable section patterns,
- navigation behavior,
- hero structure,
- CTA placement,
- spacing scale,
- typography scale,
- cards,
- image behavior,
- responsive breakpoints,
- mobile behavior,
- accessibility behavior,
- footer pattern,
- business-specific assumptions that must be removed.

Do not rewrite either source site merely to make extraction easier.

Promote only proven reusable patterns into SLAI Web.

## 12. Acceptance Criteria for Every Layout Family

A layout family is not production-ready until:

- it consumes the canonical Website Profile rather than template-owned business facts,
- its layout/version is explicit,
- required and optional sections are declared,
- supported variants are declared,
- unsupported states fail validation,
- the same layout supports at least two materially different business brands without code forks,
- company branding changes centrally,
- optional/missing content has a clean behavior,
- long names and large service lists do not break the layout,
- desktop/tablet/mobile behavior is validated,
- baseline accessibility checks pass,
- baseline performance requirements pass,
- CTA behavior respects configured conversion state,
- ServicesOS-connected dynamic facts remain bounded by the connector/public-data contracts,
- production output remains reproducible from explicit versions.

## 13. Multi-Business QA Matrix

As the library expands, test representative profiles such as:

- cleaning company,
- landscaper,
- barbershop,
- salon,
- contractor / home-service company,
- professional service company.

Include edge cases:

- no public team,
- no gallery,
- sparse reviews,
- many services,
- long service names,
- long business name,
- storefront,
- service-area-only business,
- booking CTA,
- request/quote CTA,
- standalone SLAI Web,
- ServicesOS-connected SLAI Web.

## 14. Future Tier Direction

### Tier 1 — Template Driven

- choose an approved layout,
- apply verified company profile,
- choose approved style preset,
- adjust supported section order/variants,
- preview,
- human approval,
- publish.

### Tier 2 — AI-Assisted / Generative Composition

AI may recommend or compose:

- approved section variants,
- approved section ordering,
- style combinations,
- imagery usage,
- copy treatment,
- multiple site directions.

AI should compose **vetted SLAI Web components and valid profile state**, not generate unrestricted replacement website code for routine builds.

Deterministic validation and human release approval remain mandatory.

### Tier 3 — Professional / Custom

Future advanced tooling may support:

- deeper layout composition,
- custom responsive arrangements,
- advanced section configuration,
- unique visual systems,
- developer/superadmin controls,
- promotion of repeated successful patterns into approved reusable variants/layouts.

Custom work should remain on the common SLAI Web platform wherever practical rather than creating permanent customer forks.

## 15. Deferred From Initial Layout-Library Work

Do not allow layout expansion to pull these forward without a real requirement:

- unrestricted drag-and-drop builder,
- unrestricted HTML/CSS/JS editing,
- arbitrary AI-generated production code,
- advanced animation system,
- ecommerce platform,
- full CRM,
- complex custom integrations,
- marketplace,
- multi-language platform,
- advanced A/B testing,
- live operational widgets without approved authority contracts.

## 16. Strategic Outcome

The immediate target is a reusable service-business design library.

The long-term architecture is more valuable than the number of templates:

```text
Verified business data
→ canonical Website Profile
→ stable shared components
→ versioned layout configuration
→ theme system
→ deterministic renderer
→ QA
→ publish
```

That foundation can later support rapid onboarding, AI-assisted composition, ServicesOS-connected public sites, professional custom work, reusable layouts captured from production experience, and a standalone SLAI Web SaaS offering.
