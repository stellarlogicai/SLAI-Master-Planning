# SLAI Web V1 Product and Data Contracts

**Status:** Planning contract / required before implementation  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Purpose:** Define the product-state, source-of-truth, profile, publication, permissions, media, and form contracts that SLAI Web V1 should implement.

---

## 1. Core Product Rule

> **Business facts are durable. Presentation is replaceable. Public state changes only through explicit publish actions.**

SLAI Web must not confuse operational truth, website content, presentation configuration, or deployed output.

---

# 2. Canonical Website Profile

The canonical Website Profile is the structured source for what a site may present and how it may present it.

It should be versioned and tenant-scoped.

Conceptual top-level shape:

```text
WebsiteProfile
├── identity
├── contact
├── locationAndServiceArea
├── hours
├── services
├── team
├── brand
├── media
├── policies
├── social
├── testimonials
├── faqs
├── announcements
├── callsToAction
├── bookingOrContactSettings
├── pages
├── navigation
├── themeAndLayout
├── seo
├── integrations
├── provenance
├── schemaVersion
└── timestamps
```

The exact implementation schema should be finalized after the V1 stack/data-store decision, but the contract below should remain stable.

---

## 3. Required Website Profile Domains

### Identity

- stable tenant/business ID,
- public business name,
- optional legal/display distinction,
- business type/vertical,
- public short description/tagline where used.

### Contact

- public phone,
- public email,
- contact preference,
- optional public contact labels.

Do not expose private account/support emails merely because they exist in the tenant record.

### Location / service area

Support the distinction between:

- public street location,
- service-area business,
- hidden/private physical address,
- multiple public service areas where future-compatible.

V1 may limit editing to one primary location/service-area model if needed, but the schema should not force private residential addresses into public output.

### Hours

- regular hours,
- closed days,
- optional holiday/special hours,
- timezone.

Hours displayed publicly must be explicit public facts, not inferred from internal staffing schedules.

### Services

Each public service should have a stable ID and support:

- name,
- description,
- public price display mode,
- price/value when public,
- duration when relevant,
- category,
- availability/public visibility,
- CTA/booking behavior where relevant,
- source/provenance.

A website price must not silently drift from its approved source.

### Team / staff public profiles

Support public-only fields such as:

- public display name,
- role/title,
- bio,
- approved photo,
- public specialties/services,
- display order,
- public visibility.

Do not expose employee operational/private fields.

### Brand

- logo/brand asset IDs,
- primary/secondary/accent tokens,
- approved font pairing,
- style preferences,
- optional brand notes.

Customer-entered colors must pass deterministic validation/contrast rules before being allowed in supported placements.

### Media

Media entries should reference managed assets rather than raw ad hoc URLs wherever practical.

Metadata should support:

- asset ID,
- type,
- source/provenance,
- rights confirmation state,
- alt text,
- crop/focal hints where supported,
- public visibility,
- created/updated timestamps.

### Policies

Public policy documents/sections may include:

- cancellation,
- service policies,
- privacy notice,
- terms/website-specific notices,
- business-specific customer policies.

SLAI Web should provide structure/display capability, not fabricate legal text as authoritative legal advice.

### Social links

- platform/type,
- verified URL,
- public visibility/order.

### Testimonials / reviews

Only approved, attributable content may be displayed.

Store:

- text/excerpt,
- attribution/display name when permitted,
- source,
- approval state,
- source link where applicable,
- date where known.

Do not fabricate or materially alter review meaning.

### FAQs

- stable FAQ ID,
- question,
- answer,
- category/order,
- public visibility.

### Announcements / specials

- title,
- content,
- optional start/end visibility,
- CTA,
- explicit approval.

V1 does not need a full campaign-management system.

### Calls to action

Support deterministic CTA types such as:

- call,
- email/contact,
- request service,
- book now,
- get estimate,
- external approved booking link.

CTA destinations must be validated and tenant-owned/approved.

### Booking / contact settings

The website stores presentation/integration configuration only.

When ServicesOS booking is used, ServicesOS remains authority for:

- availability,
- scheduling rules,
- final validation,
- reservation creation,
- duplicate prevention,
- booking truth.

### Pages

Each page should have:

- stable page ID,
- approved page type,
- slug,
- title,
- enabled state,
- ordered section references,
- SEO override fields where supported,
- navigation visibility,
- version/updated metadata.

### Navigation

- ordered nav entries,
- internal page target or approved external target,
- display label,
- enabled state.

Navigation must not reference unpublished/missing pages without explicit safe handling.

### Theme / layout

- layout ID,
- exact layout version,
- theme/token version where applicable,
- supported section variants,
- safe customer overrides.

### SEO

- site title pattern,
- default description,
- page title/description overrides,
- social preview asset references where supported,
- structured-data configuration from verified fields,
- canonical/public base URL.

### Integrations

Integration settings should use references/configuration, not embedded secrets in customer-facing data.

### Provenance

Every field that may come from multiple sources should be able to answer:

- source type,
- source record/release reference where applicable,
- who last confirmed/approved it,
- confirmation timestamp,
- whether it is customer-entered, ServicesOS-projected, SLAI-supported, imported, or externally researched/unverified.

---

# 4. Source-of-Truth Matrix

SLAI Web and ServicesOS must not become competing databases.

Default V1 ownership model:

| Domain | Primary authority | Notes |
|---|---|---|
| Website pages/sections/navigation | SLAI Web | Website presentation/content structure |
| Layout/theme/branding presentation | SLAI Web | ServicesOS may expose compatible controls later |
| Website-specific copy | SLAI Web | May be AI-assisted, human approved |
| Public business identity/contact | Canonical Website Profile with provenance | May be populated from ServicesOS public release or standalone onboarding |
| Services and public prices | Source-dependent; ServicesOS authoritative when connected and configured as source | Conflicts must be surfaced |
| Staff public profiles | Source-dependent; operational employee record remains ServicesOS/private when connected | Only public projection enters Web |
| Business hours | Source-dependent public fact | Do not equate staffing schedule with public business hours |
| Website assets/gallery | SLAI Web unless explicitly imported/projected | ServicesOS may contribute approved assets |
| Booking availability | ServicesOS when native connector used | Web never becomes availability authority |
| Booking record/status | ServicesOS | Web may show submission result only |
| Payment truth | Product owning the payment workflow | Web must not infer paid state from browser-controlled signals |
| Website subscription | SLAI Web billing authority | Separate from ServicesOS subscription |
| Domain connection | SLAI Web platform record + DNS provider/customer ownership | Customer retains domain ownership |

### Conflict rule

If two sources disagree on a public fact:

1. do not silently overwrite,
2. identify the conflicting field and sources,
3. require an authorized human to choose/resolve,
4. record the decision/provenance,
5. publish only after resolution.

---

# 5. Website State Model

A tenant's website lifecycle should distinguish configuration state from deployment state.

Suggested configuration states:

```text
not_started
onboarding
ready_for_draft
draft
ready_for_review
approved_for_publish
published
suspended
archived
```

These are planning labels, not mandatory implementation enums. The implementation may use smaller composable state fields if safer.

Important rule:

> A website is not "published" merely because a draft exists or a build succeeds.

---

# 6. Publication State Machine

Preferred flow:

```text
Mutable Website Profile / Draft
        ↓
Validate
        ↓
Preview Snapshot
        ↓
Human Review
        ↓
Publish Request
        ↓
Immutable Published Release
        ↓
Production Build/Deploy
        ↓
Post-deploy Smoke
        ↓
Live Known-Good Release
```

### Draft

- mutable,
- tenant-authorized,
- not public by default,
- may contain incomplete fields.

### Preview snapshot

- references a known draft/profile version,
- reproducible for QA,
- must not expose private fields,
- should be isolated from production indexing where applicable.

### Published release

Immutable/versioned record containing or referencing all public presentation inputs needed to reproduce the site.

Record at minimum:

- release ID,
- tenant/site ID,
- schema version,
- Website Profile version,
- page/navigation version,
- layout ID/version,
- theme/token version where applicable,
- public-data release references,
- asset set references,
- core version,
- connector versions,
- approval record,
- created/published timestamp.

### Rollback

Rollback must not erase history.

Preferred behavior:

- choose prior known-good release,
- validate compatibility,
- create/record a new deployment pointing to that release or a new release derived from it,
- retain the failed/current release in history,
- record actor/reason.

---

# 7. Versioning and Migration

Every persisted contract should carry a schema/version marker where breaking changes may occur.

Breaking changes require:

- explicit new schema/layout/core version,
- deterministic migration or compatibility adapter,
- migration test fixtures,
- rollback/recovery consideration,
- no silent reinterpretation of old customer releases.

---

# 8. Customer Roles and Authority

V1 should begin with the smallest useful role system.

Recommended conceptual roles:

### Owner

May:

- manage business/site configuration,
- manage authorized users,
- publish,
- manage domain connection,
- manage billing/subscription where account policy permits,
- request/cancel support access,
- view version history.

### Editor

May:

- edit approved website content/configuration,
- upload/manage permitted assets,
- create preview,
- possibly request publication.

By default, Editor should not manage billing, user authority, sensitive integration secrets, or high-risk support controls.

### Viewer

Read-only dashboard/preview/history access where needed.

### SLAI Support

Not a normal tenant member. Uses controlled delegated access with explicit reason, duration, audit, and bounded authority.

### Authority rule

Publishing, billing, domain, user-management, support-elevation, and security-sensitive actions must have explicit permission checks independent of visible UI.

---

# 9. Entitlement Model

An authenticated user may have a valid tenant membership without having an active SLAI Web product entitlement.

V1 should distinguish:

- identity,
- tenant membership,
- role/permission,
- product entitlement,
- billing state,
- site state.

This prevents "user exists" from being treated as "user may publish a paid website."

---

# 10. Media Contract

## Allowed behavior

V1 media handling should include:

- allowlisted formats,
- magic-byte/content validation where supported,
- file size limits,
- image dimension sanity limits,
- deterministic optimization/compression,
- generated responsive sizes where stack supports it,
- tenant-scoped storage paths,
- safe immutable/stable asset IDs,
- metadata/provenance,
- alt text,
- public/private status,
- storage usage attribution.

## Deletion rule

Deleting an asset referenced by a published release must not break historical reproducibility.

Options may include:

- prevent deletion while referenced,
- soft-delete and retain underlying object during retention window,
- copy/reference assets into versioned published storage.

Exact mechanism should be chosen with the deployment/storage architecture.

## Rights rule

Customer/SLAI must record confirmation that supplied media may be used. Do not treat scraping availability as usage permission.

---

# 11. Form / Lead Contract

Standard contact/request forms should support:

- tenant/site identifier,
- form type/version,
- name/contact fields as needed,
- message/request fields,
- optional service reference,
- consent acknowledgement where needed,
- created timestamp,
- delivery/storage status,
- spam/risk signals,
- idempotency or duplicate mitigation where applicable.

### Security / abuse rules

- server-side validation,
- rate limiting,
- spam/bot mitigation,
- bounded payload sizes,
- no arbitrary file upload in V1 unless separately designed,
- output encoding/sanitization,
- no secret leakage,
- no unbounded email/API fan-out.

### Delivery rule

A successful browser submission should only claim success when the authoritative backend accepts the submission.

If notification delivery fails after authoritative intake, retain enough status for SLAI/customer recovery rather than silently losing the lead.

### ServicesOS handoff

When connected, the Web form may create a supported ServicesOS lead/request through a defined server-side connector.

Do not write directly into arbitrary ServicesOS collections from public browser code.

---

# 12. Public / Private Data Boundary

Every field exposed publicly should be allowlisted from the public Website Profile/release.

Private tenant/account/operational fields must never become public merely because they are stored near public records.

Public release generation should prefer explicit projection over broad object serialization.

---

# 13. Deterministic vs AI Boundary

## Deterministic

- schema validation,
- page/layout instantiation,
- color/contrast checks,
- rendering,
- asset processing,
- metadata generation from verified fields,
- publication/versioning,
- deployment,
- link/build checks,
- entitlement/permission enforcement.

## AI-assisted

- copy drafting/refinement,
- ambiguous section recommendations,
- style explanation,
- SEO phrasing suggestions,
- unusual responsive/design diagnosis,
- support summaries.

AI output must remain distinguishable from verified business facts until approved.

---

# 14. Contract Acceptance Criteria

This product/data contract is implementation-ready when the chosen stack can demonstrate:

- a typed/versioned Website Profile,
- explicit provenance for shared facts,
- strict tenant isolation,
- separate membership/role/entitlement concepts,
- mutable draft + immutable published release behavior,
- reproducible old releases,
- safe media references,
- server-authoritative form intake,
- explicit public projection,
- conflict handling between SLAI Web and ServicesOS sources,
- no required AI dependency for normal website operation.
