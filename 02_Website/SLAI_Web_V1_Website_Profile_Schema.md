# SLAI Web V1 Website Profile Schema

**Status:** Authoritative V1 planning schema / implementation contract  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI  
**Schema version:** `1.0`

## 1. Purpose

This document locks the V1 shape of the canonical SLAI Web Website Profile before dashboard implementation begins.

It defines:

- the exact top-level domains,
- field types and requiredness,
- standalone versus ServicesOS-connected authority,
- public versus system-only fields,
- version/provenance rules,
- publish-readiness rules,
- what belongs in the Website Profile versus separate platform records.

The implementation may choose Firestore document boundaries, collections, indexes, and TypeScript file organization that fit the final codebase, but it must preserve this semantic contract unless Jamie explicitly approves a schema revision.

---

# 2. Core Authority Rule

SLAI Web has two first-class modes.

```text
standalone
SLAI Web owns the website's public business facts + presentation

servicesos_connected
ServicesOS owns overlapping business/operational truth
SLAI Web owns website presentation + publication
```

A ServicesOS-projected value may be mirrored into a SLAI Web draft/release for reproducible publishing, but that mirror is **not** a second source of truth.

When connected, SLAI Web must not offer an independently editable canonical value for a ServicesOS-authoritative field.

---

# 3. Modeling Rules

## 3.1 IDs

All reusable entities require stable IDs.

IDs must not depend on display names, array positions, or page slugs.

Examples:

- `siteId`
- `serviceId`
- `teamMemberId`
- `assetId`
- `pageId`
- `sectionId`
- `ctaId`
- `policyId`

## 3.2 Money

Do not store money as floating-point dollars.

```ts
type Money = {
  currency: string;      // ISO-4217, V1 normally "USD"
  amountMinor: number;   // cents for USD
};
```

## 3.3 Timestamps

Persist authoritative timestamps as server-generated timestamps.

Conceptual type:

```ts
type TimestampValue = Timestamp | ISO8601String;
```

The storage implementation chooses the concrete representation.

## 3.4 URLs

Public URLs must be normalized and validated before publication.

Secrets, API keys, access tokens, and private webhook URLs never belong in the Website Profile.

## 3.5 Public projection

The Website Profile may contain system metadata needed to govern the site, but production public output must be generated from an explicit public allowlist/projection. Never serialize the entire stored profile to the public browser by default.

---

# 4. Shared Types

```ts
type WebsiteMode = "standalone" | "servicesos_connected";

type SourceAuthority =
  | "slai_web"
  | "servicesos"
  | "imported"
  | "slai_supported";

type SourceRef = {
  authority: SourceAuthority;
  sourceRecordId?: string;
  sourceReleaseId?: string;
  sourceSchemaVersion?: string;
  confirmedBy?: string;
  confirmedAt?: TimestampValue;
  syncedAt?: TimestampValue;
};

type Visibility = "public" | "hidden";

type Address = {
  line1: string;
  line2?: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string; // ISO-3166 alpha-2
};

type TimeRange = {
  opensAt: string; // HH:mm local time
  closesAt: string; // HH:mm local time
};

type DayHours = {
  closed: boolean;
  ranges: TimeRange[];
};

type WeeklyHours = {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
};

type SpecialHours = {
  id: string;
  date: string; // YYYY-MM-DD in site timezone
  closed: boolean;
  ranges: TimeRange[];
  label?: string;
};
```

V1 assumes one primary site timezone. Multi-timezone location management is future scope.

---

# 5. Canonical Top-Level Shape

```ts
type WebsiteProfileV1 = {
  schemaVersion: "1.0";

  siteId: string;
  tenantId: string;
  mode: WebsiteMode;

  businessFacts: BusinessFactsV1;
  websiteContent: WebsiteContentV1;
  presentation: WebsitePresentationV1;
  conversion: WebsiteConversionV1;
  seo: WebsiteSeoV1;
  integrations: WebsiteIntegrationsV1;
  sourceState: WebsiteSourceStateV1;
  publicationPreferences: PublicationPreferencesV1;

  createdAt: TimestampValue;
  updatedAt: TimestampValue;
};
```

The Website Profile does **not** own subscription billing state, deployment history, DNS verification state, support-elevation sessions, audit-event history, or secret credentials. Those belong in separate platform records.

---

# 6. Business Facts

```ts
type BusinessFactsV1 = {
  identity: BusinessIdentityV1;
  contact: PublicContactV1;
  location: PublicLocationV1;
  hours: PublicHoursV1;
  services: PublicServiceV1[];
  team: PublicTeamMemberV1[];
  policies: PublicPolicyV1[];
  socialLinks: SocialLinkV1[];
};
```

These are public business facts, not internal account/employee/customer records.

## 6.1 Identity

```ts
type BusinessIdentityV1 = {
  publicName: string;              // required for publish
  businessType?: string;           // e.g. cleaning, barber, lawn care
  publicCategoryLabel?: string;    // optional customer-facing category
  source: SourceRef;
};
```

Website marketing taglines/descriptions are not canonical identity facts; they live under website content.

## 6.2 Public contact

```ts
type PublicContactV1 = {
  publicPhone?: string;
  publicEmail?: string;
  preferredPublicContact?: "phone" | "email" | "form" | "booking";
  source: SourceRef;
};
```

Publish readiness requires at least one valid customer-contact or booking path, but does not require both phone and email.

Private account email, owner personal email, billing contact, and support contact are excluded unless explicitly approved as public business contact information.

## 6.3 Location / service area

```ts
type PublicLocationMode = "storefront" | "service_area" | "hybrid" | "online";

type ServiceArea = {
  id: string;
  label: string;
  description?: string;
};

type PublicLocationV1 = {
  mode: PublicLocationMode;
  publicAddress?: Address;
  serviceAreas: ServiceArea[];
  mapDisplayEnabled: boolean;
  source: SourceRef;
};
```

V1 UI may support one primary public address plus multiple simple service-area labels. Private residential addresses must never be inferred into `publicAddress`.

## 6.4 Hours

```ts
type PublicHoursV1 = {
  timezone: string; // IANA timezone, required when hours are displayed
  weekly: WeeklyHours;
  special: SpecialHours[];
  displayEnabled: boolean;
  source: SourceRef;
};
```

Public business hours are not employee schedules.

## 6.5 Services

```ts
type PublicPriceMode =
  | "hidden"
  | "fixed"
  | "starting_at"
  | "range"
  | "contact_for_quote";

type PublicPriceV1 = {
  mode: PublicPriceMode;
  fixed?: Money;
  minimum?: Money;
  maximum?: Money;
  labelOverride?: string; // presentation-safe label such as "From"
};

type PublicServiceV1 = {
  serviceId: string;
  name: string;
  factualSummary?: string;
  category?: string;
  publicPrice: PublicPriceV1;
  durationMinutes?: number;
  bookable?: boolean;
  sourceRecordId?: string;
  source: SourceRef;
};
```

Rules:

- In standalone mode, SLAI Web owns these facts.
- In ServicesOS-connected mode, ServicesOS owns overlapping canonical service facts.
- Website-specific marketing copy, images, featured state, ordering, page placement, and visibility live under presentation/content rather than modifying this record.

## 6.6 Team / public provider profiles

```ts
type PublicTeamMemberV1 = {
  teamMemberId: string;
  displayName: string;
  roleTitle?: string;
  factualBio?: string;
  serviceIds: string[];
  sourceRecordId?: string;
  source: SourceRef;
};
```

No employee private contact information, compensation, schedule, HR notes, login data, or other operational fields may be projected here.

## 6.7 Policies

```ts
type PolicyScope = "operational" | "website";

type PublicPolicyV1 = {
  policyId: string;
  type: string; // cancellation, privacy, service-policy, etc.
  scope: PolicyScope;
  title: string;
  body: string;
  source: SourceRef;
};
```

When a policy controls ServicesOS behavior, ServicesOS is authoritative in connected mode. Website-only privacy/terms/content notices may remain SLAI Web-owned.

## 6.8 Social links

```ts
type SocialLinkV1 = {
  id: string;
  platform: string;
  url: string;
  label?: string;
  visibility: Visibility;
  source: SourceRef;
};
```

---

# 7. Website-Owned Content

Website-owned content may exist in both standalone and connected modes as long as it does not contradict authoritative business facts.

```ts
type WebsiteContentV1 = {
  tagline?: string;
  shortDescription?: string;
  aboutContent?: string;
  servicePresentation: ServicePresentationV1[];
  teamPresentation: TeamPresentationV1[];
  testimonials: TestimonialV1[];
  faqs: FaqV1[];
  announcements: AnnouncementV1[];
  customContentBlocks: CustomContentBlockV1[];
};
```

## 7.1 Service presentation overlays

```ts
type ServicePresentationV1 = {
  serviceId: string;
  websiteTitle?: string;          // must not misrepresent canonical service
  marketingSummary?: string;
  assetId?: string;
  featured: boolean;
  websiteVisible: boolean;
  badgeText?: string;
};
```

This is deliberately separate from `PublicServiceV1` so connected customers can market a service without creating a second canonical price/duration/availability value.

## 7.2 Team presentation overlays

```ts
type TeamPresentationV1 = {
  teamMemberId: string;
  websiteBio?: string;
  assetId?: string;
  featured: boolean;
  websiteVisible: boolean;
};
```

## 7.3 Testimonials

```ts
type TestimonialV1 = {
  testimonialId: string;
  quote: string;
  attribution?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  originalDate?: string;
  approved: boolean;
};
```

Do not fabricate reviews or materially alter meaning.

## 7.4 FAQs

```ts
type FaqV1 = {
  faqId: string;
  question: string;
  answer: string;
  category?: string;
  visible: boolean;
};
```

## 7.5 Announcements

```ts
type AnnouncementV1 = {
  announcementId: string;
  title: string;
  body: string;
  startsAt?: TimestampValue;
  endsAt?: TimestampValue;
  ctaId?: string;
  visible: boolean;
};
```

## 7.6 Custom content blocks

```ts
type CustomContentBlockV1 = {
  contentBlockId: string;
  heading?: string;
  body: string;
  assetIds: string[];
};
```

V1 custom content is structured rich content, not unrestricted customer HTML/JS.

---

# 8. Website Presentation

```ts
type WebsitePresentationV1 = {
  brand: BrandPresentationV1;
  layout: LayoutSelectionV1;
  pages: WebsitePageV1[];
  navigation: NavigationItemV1[];
  assets: AssetMetadataV1[];
};
```

## 8.1 Brand

```ts
type BrandPresentationV1 = {
  logoAssetId?: string;
  alternateLogoAssetId?: string;
  faviconAssetId?: string;

  colors: {
    primary?: string;
    secondary?: string;
    accent?: string;
    background?: string;
    text?: string;
  };

  fontPairingId?: string;
  stylePresetId?: string;
};
```

Color values must pass deterministic validation/contrast rules for supported placements.

## 8.2 Layout

```ts
type LayoutSelectionV1 = {
  layoutId: string;
  layoutVersion: string;
  tokenVersion?: string;
};
```

Layout references are exact/versioned so a published release remains reproducible.

## 8.3 Pages

```ts
type PageType =
  | "home"
  | "about"
  | "services"
  | "team"
  | "gallery"
  | "testimonials"
  | "faq"
  | "contact"
  | "policies"
  | "location"
  | "custom";

type WebsitePageV1 = {
  pageId: string;
  type: PageType;
  slug: string;
  title: string;
  enabled: boolean;
  showInNavigation: boolean;
  sections: WebsiteSectionV1[];
  seoOverride?: PageSeoOverrideV1;
};
```

Page slugs must be unique within one site.

## 8.4 Sections

```ts
type SectionType =
  | "hero"
  | "about"
  | "services"
  | "team"
  | "gallery"
  | "testimonials"
  | "faq"
  | "announcement"
  | "contact"
  | "location"
  | "policies"
  | "cta"
  | "custom_rich_text";

type WebsiteSectionV1 = {
  sectionId: string;
  type: SectionType;
  variantId: string;
  enabled: boolean;
  heading?: string;
  subheading?: string;
  ctaIds?: string[];
  serviceIds?: string[];
  teamMemberIds?: string[];
  assetIds?: string[];
  testimonialIds?: string[];
  faqIds?: string[];
  policyIds?: string[];
  contentBlockIds?: string[];
};
```

The layout contract determines which fields/variants are valid for each section type. Unsupported combinations must fail schema/layout validation rather than render unpredictably.

## 8.5 Navigation

```ts
type NavigationItemV1 = {
  navItemId: string;
  label: string;
  target:
    | { type: "page"; pageId: string }
    | { type: "external"; url: string };
  enabled: boolean;
};
```

## 8.6 Asset metadata

```ts
type AssetMetadataV1 = {
  assetId: string;
  kind: "image" | "logo" | "icon";
  storageRef: string;        // managed storage reference, not arbitrary secret URL
  mimeType: string;
  width?: number;
  height?: number;
  altText?: string;
  rightsConfirmed: boolean;
  sourceLabel?: string;
  focalPoint?: { x: number; y: number };
  createdAt: TimestampValue;
  updatedAt: TimestampValue;
};
```

Actual storage objects and historical release-retention behavior are governed by the media/operations contracts.

---

# 9. Conversion / Calls to Action

```ts
type CtaType =
  | "call"
  | "email"
  | "contact_form"
  | "request_service"
  | "book"
  | "get_estimate"
  | "external_link";

type WebsiteCtaV1 = {
  ctaId: string;
  type: CtaType;
  label: string;
  enabled: boolean;
  destinationRef?: string;
};

type WebsiteConversionV1 = {
  primaryCtaId?: string;
  ctas: WebsiteCtaV1[];
  forms: WebsiteFormConfigV1[];
};

type WebsiteFormConfigV1 = {
  formId: string;
  type: "contact" | "request_service";
  enabled: boolean;
  heading?: string;
  successMessage?: string;
  servicesosHandoffEnabled: boolean;
};
```

`destinationRef` references a validated route, public contact method, form, ServicesOS booking connector, or approved external URL. It must not contain secrets.

Connected ServicesOS booking remains server-authoritative outside this profile.

---

# 10. SEO

```ts
type WebsiteSeoV1 = {
  defaultTitle: string;
  defaultDescription?: string;
  socialImageAssetId?: string;
  allowIndexing: boolean;
  structuredDataEnabled: boolean;
};

type PageSeoOverrideV1 = {
  title?: string;
  description?: string;
  socialImageAssetId?: string;
};
```

Canonical base URL is derived from the active deployment/domain record, not manually duplicated as Website Profile truth.

Structured data must be generated only from verified/profile facts and must not invent claims.

---

# 11. Integrations

```ts
type WebsiteIntegrationsV1 = {
  servicesos?: ServicesOSBindingV1;
  externalBooking?: ExternalBookingBindingV1;
  analytics?: AnalyticsBindingV1;
};

type ServicesOSBindingV1 = {
  connected: boolean;
  servicesosTenantId: string;
  publicDataReleaseId?: string;
  publicDataSchemaVersion?: string;
  bookingConnectorVersion?: string;
  lastSyncedAt?: TimestampValue;
};

type ExternalBookingBindingV1 = {
  enabled: boolean;
  providerLabel: string;
  publicUrl: string;
};

type AnalyticsBindingV1 = {
  enabled: boolean;
  providerRef?: string;
};
```

Provider secrets/configuration live in server-side integration records, not this profile.

A profile may not be both ServicesOS-native-booking authority and an unrelated external booking authority for the same CTA without an explicit supported product rule.

---

# 12. Source State / Authority Map

```ts
type BusinessFactDomain =
  | "identity"
  | "contact"
  | "location"
  | "hours"
  | "services"
  | "team"
  | "operational_policies"
  | "social_links";

type DomainAuthorityV1 = {
  domain: BusinessFactDomain;
  authority: "slai_web" | "servicesos";
  sourceReleaseId?: string;
  lastSyncedAt?: TimestampValue;
};

type WebsiteSourceStateV1 = {
  domainAuthorities: DomainAuthorityV1[];
  lastStandaloneConfirmationAt?: TimestampValue;
};
```

Rules:

- `standalone` normally maps all applicable business-fact domains to `slai_web`.
- `servicesos_connected` maps every overlapping ServicesOS-supplied domain to `servicesos`.
- A domain marked `servicesos` is read-only in SLAI Web at the canonical fact layer.
- Presentation overlays remain SLAI Web-owned.
- If a field/domain is not represented by ServicesOS, it may remain SLAI Web-owned even while the site is connected.

---

# 13. Publication Preferences

These are website behavior preferences, not deployment records.

```ts
type PublicationPreferencesV1 = {
  requireClientApproval: boolean;
  defaultPreviewDevice?: "desktop" | "tablet" | "mobile";
};
```

Actual approval records, build IDs, deployment IDs, domain/SSL states, release IDs, and rollback history live in separate publication/deployment records.

---

# 14. Standalone vs Connected Edit Behavior

## Standalone

The dashboard may edit:

- business facts,
- website-owned content,
- presentation,
- conversion configuration,
- SEO,
- supported integrations.

## ServicesOS-connected

For a ServicesOS-authoritative domain:

- show canonical value in SLAI Web,
- show clear `From ServicesOS` source state,
- do not expose a second canonical edit control,
- provide a route/link to change the source in ServicesOS when practical,
- sync a new approved public-data release into the next Web draft,
- keep current live site unchanged until normal SLAI Web publish occurs.

This preserves both operational truth and explicit website publishing.

---

# 15. ServicesOS Disconnect Transition

When changing from `servicesos_connected` to `standalone`:

1. retain the last approved projected facts in the draft,
2. preserve their original `SourceRef` in history,
3. change domain authority only after an authorized user confirms the transition,
4. normalize retained values into SLAI Web-owned standalone facts,
5. do not change the live public release merely because the connector was disconnected,
6. require normal review/publish for later site changes.

Disconnecting ServicesOS must not destroy the website.

---

# 16. Schema Validation vs Publish Readiness

These are different concepts.

## Schema-valid draft

A draft can be schema-valid while incomplete.

At minimum it must have:

- `schemaVersion`,
- `siteId`,
- `tenantId`,
- valid `mode`,
- valid source-state rules,
- valid IDs/references,
- supported layout/version reference,
- structurally valid pages/sections.

## Publish-ready site

Before production publish, require at minimum:

- public business name,
- at least one enabled page,
- a valid homepage,
- valid navigation/references,
- at least one customer contact/booking path,
- required rights confirmation for published assets,
- valid layout/section compatibility,
- SEO title,
- no unresolved ServicesOS source conflict,
- no private fields in public projection,
- automated QA gates required by the release plan.

Hours, address, services, team, pricing, testimonials, and other content are conditional based on the business/site configuration rather than universally mandatory.

---

# 17. Deliberately Separate Platform Records

Do not bloat `WebsiteProfileV1` with unrelated operational state.

Keep these as separate records/contracts:

- user accounts and tenant memberships,
- role/permission grants,
- Stripe customer/subscription/payment state,
- product entitlement,
- domain verification/DNS/SSL state,
- support-mode sessions,
- audit events,
- form submissions/leads,
- immutable published releases,
- deployment/build history,
- health/monitoring incidents,
- raw provider secrets,
- ServicesOS private operational records.

The Website Profile may reference safe IDs for those systems when needed, but is not their source of truth.

---

# 18. Firestore / Implementation Guidance

The semantic contract above does not require one giant Firestore document.

Implementation may split high-growth arrays into tenant-scoped subcollections when needed, for example:

```text
sites/{siteId}
  profile/core
  services/{serviceId}
  team/{teamMemberId}
  assets/{assetId}
  pages/{pageId}
  content/{contentBlockId}
```

or use another structure that better fits final query/security requirements.

Requirements regardless of physical layout:

- tenant isolation,
- stable IDs,
- deterministic validation,
- atomic/transactional updates where a cross-record invariant requires it,
- reproducible snapshots for preview/publish,
- explicit schema version,
- no dependence on array index identity.

The final Firestore shape should be chosen during implementation after security-rule/query review; it must not change the semantic ownership contract.

---

# 19. V1 Acceptance Criteria

The Website Profile schema is correctly implemented when all of the following are true:

1. A standalone business can create and publish a complete website without ServicesOS.
2. The same conceptual site can connect to ServicesOS without duplicating authoritative overlapping business facts.
3. ServicesOS-connected prices/durations/availability facts cannot be silently overridden in Web.
4. Web-owned presentation can feature, reorder, hide from a page, restyle, and describe connected services without changing their canonical operational truth.
5. Disconnecting ServicesOS can transition the site back to standalone without erasing the site.
6. Draft edits do not mutate an existing published release.
7. Every page/section/entity has stable identifiers and validated references.
8. Public output is explicitly projected rather than broad-serialized from stored profile state.
9. Private ServicesOS/account/employee information cannot leak through this schema.
10. Schema validation and publish readiness are independently enforced.
11. Old releases remain interpretable after future schema versions through explicit compatibility/migration behavior.

---

# 20. Decision Lock

For SLAI Web V1, the following is now locked unless Jamie explicitly reopens it:

> **The Website Profile is a versioned, tenant-scoped contract with separate business-fact, website-content, presentation, conversion, SEO, integration, source-authority, and publication-preference domains. Standalone SLAI Web owns its public business facts. When ServicesOS is connected, ServicesOS owns overlapping business/operational truth while SLAI Web owns website content, presentation, and publication.**
