# SLAI Web V1 Product and Data Contracts

**Status:** Planning contract / required before implementation  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Purpose:** Define the product-state, source-of-truth, profile, publication, permissions, media, and form contracts that SLAI Web V1 should implement.

---

## 1. Core Product Rule

> **SLAI Web must work as a complete standalone website platform. When a customer also uses ServicesOS, ServicesOS becomes the authority for overlapping business and operational truth, while SLAI Web remains the authority for website presentation and publication.**

Business facts are durable. Presentation is replaceable. Public state changes only through explicit publish actions.

SLAI Web must not confuse operational truth, website content, presentation configuration, or deployed output.

---

# 2. Canonical Website Profile

The canonical Website Profile is the structured source for what a site may present and how it may present it.

It should be versioned and tenant-scoped.

Conceptual top-level shape:

```text
WebsiteProfile
├── siteMode
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

`siteMode` should distinguish at minimum:

```text
standalone
servicesos_connected
```

This mode determines where overlapping business facts are authoritative.

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

When ServicesOS is connected, operational service facts such as canonical service name, configured price, duration, availability rules, and booking identifiers should come from the approved ServicesOS public projection. SLAI Web may still own website-specific presentation such as featured state, display order, section placement, image choice, and marketing copy that does not contradict the ServicesOS facts.

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

When ServicesOS is connected, the underlying person/provider identity and operational relationship remain ServicesOS-owned. SLAI Web may control website-only presentation fields for the approved public projection.

### Brand

- logo/brand asset IDs,
- primary/secondary/accent tokens,
- approved font pairing,
- style preferences,
- optional brand notes.

Customer-entered colors must pass deterministic validation/contrast rules before being allowed in supported placements.

Connected customers may receive approved base brand facts/assets from ServicesOS where supported, while SLAI Web continues to own the website-specific application of those assets, layout, typography, section styling, and presentation-safe overrides.

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

Where a customer uses ServicesOS and a policy also controls an operational ServicesOS workflow, the operational policy value must come from ServicesOS. SLAI Web may present that approved policy but must not create a contradictory operational rule.

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

For standalone SLAI Web customers, SLAI Web may support contact/request forms and approved external booking links without requiring ServicesOS.

When ServicesOS booking is connected, ServicesOS remains authority for:

- availability,
- scheduling rules,
- final validation,
- reservation creation,
- duplicate prevention,
- booking truth.

SLAI Web stores only the website-side integration/presentation configuration for that connected booking path.

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

# 4. Operating Modes and Authority

SLAI Web must support two first-class operating modes.

## Standalone mode

A customer may buy and operate SLAI Web without ServicesOS.

In standalone mode:

- SLAI Web owns the canonical Website Profile,
- SLAI Web is authoritative for the public business facts stored for the website,
- the customer edits those facts through SLAI Web,
- contact/request forms remain SLAI Web workflows unless connected to another explicitly supported integration,
- external booking links may be used,
- ServicesOS is not required for the site to function.

Conceptually:

```text
Customer
   ↓
SLAI Web Website Profile
   ↓
Draft / Preview / Publish
   ↓
Public Website
```

## ServicesOS-connected mode

If the same customer also uses ServicesOS, ServicesOS becomes the authority for overlapping business and operational truth.

Examples of ServicesOS-owned truth when connected include, where the field exists in ServicesOS:

- business identity and operational contact facts,
- locations/service areas,
- business hours used operationally,
- services,
- operational/public prices,
- service durations,
- staff/provider identity,
- booking availability/rules,
- appointment/job records,
- operational customer policies,
- payment/booking truth.

SLAI Web remains authoritative for website-only concerns such as:

- pages,
- section order,
- layout/theme,
- website-specific copy,
- visual presentation,
- featured service/team selections,
- gallery composition,
- image crops/focal points,
- navigation,
- SEO presentation fields,
- website-only FAQs/testimonials/announcements where not supplied by ServicesOS,
- preview/publish/release history,
- domain/deployment state.

Conceptually:

```text
ServicesOS operational truth
        ↓
approved public-data projection
        ↓
SLAI Web presentation layer
        ↓
Draft / Preview / Publish
        ↓
Public Website
```

### Connected-mode edit rule

If a field is ServicesOS-authoritative, SLAI Web should not provide a second editable canonical value for that same fact.

Instead, SLAI Web should either:

- display the projected value as read-only with a clear source indicator, or
- route the customer to the appropriate ServicesOS setting/workflow to change it.

After ServicesOS publishes/updates the approved public projection, SLAI Web can incorporate the new fact into the next website draft/release.

### Presentation overrides are not fact overrides

SLAI Web may present ServicesOS facts differently without changing their meaning.

Examples:

- reorder services on the website,
- feature one service on the homepage,
- choose a marketing image,
- use a shorter website heading,
- add website-specific descriptive copy,
- hide a service from a particular page while it remains operationally available,
- choose staff display order,
- change layout/theme/section style.

SLAI Web must not use presentation controls to contradict authoritative ServicesOS facts such as price, duration, availability, address, or booking rules.

### Disconnect transition

If a customer disconnects ServicesOS but keeps SLAI Web:

1. preserve the last approved public values and their provenance,
2. create an explicit transition from `servicesos_connected` to `standalone`,
3. copy/normalize the last approved shared facts into SLAI Web-owned standalone fields where appropriate,
4. require an authorized confirmation before those formerly connected facts become independently editable,
5. retain the historical source references in version/audit history.

Disconnecting ServicesOS must not silently erase the website or silently create conflicting editable values.

---

# 5. Source-of-Truth Matrix

SLAI Web and ServicesOS must not become competing databases.

| Domain | Standalone SLAI Web | ServicesOS-connected customer |
|---|---|---|
| Public business identity/contact | SLAI Web | ServicesOS owns overlapping facts; Web presents approved projection |
| Locations/service areas | SLAI Web | ServicesOS when represented there |
| Business hours | SLAI Web | ServicesOS for connected operational/public hours |
| Services | SLAI Web | ServicesOS owns service truth; Web owns presentation |
| Public prices/durations | SLAI Web | ServicesOS |
| Staff/provider identity | SLAI Web public profile | ServicesOS identity/projection; Web owns website presentation |
| Website pages/sections/navigation | SLAI Web | SLAI Web |
| Layout/theme/site styling | SLAI Web | SLAI Web |
| Website-specific copy | SLAI Web | SLAI Web, provided it does not contradict ServicesOS facts |
| Website assets/gallery | SLAI Web | SLAI Web unless an approved asset is projected/imported from ServicesOS |
| FAQs/testimonials/announcements | SLAI Web | SLAI Web unless explicitly supplied from ServicesOS |
| Operational customer policies | SLAI Web website fact only | ServicesOS where policy affects ServicesOS workflows |
| Booking availability/rules | External integration or no native booking authority | ServicesOS |
| Booking record/status | External provider if used | ServicesOS |
| ServicesOS payment/job/appointment truth | Not applicable | ServicesOS |
| Website subscription | SLAI Web billing authority | SLAI Web billing authority; separate from ServicesOS subscription |
| Domain connection/deployment | SLAI Web | SLAI Web |
| Publish/release history | SLAI Web | SLAI Web |

### Conflict rule

#### Standalone mode

SLAI Web is the authority for its stored public business facts, subject to normal customer/SLAI review and provenance rules.

#### ServicesOS-connected mode

For overlapping ServicesOS-authoritative facts, SLAI Web does **not** offer a competing canonical override.

If an authoritative ServicesOS value appears wrong:

1. surface the field and its ServicesOS source,
2. direct the authorized user to correct the value in ServicesOS,
3. wait for/refresh the approved ServicesOS public projection,
4. update the SLAI Web draft from that authoritative projection,
5. require normal website review/publish before the public site changes.

A human may approve presentation choices, but should not choose SLAI Web as a competing fact source while the ServicesOS connection remains authoritative.

---

# 6. Website State Model

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

# 7. Publication State Machine

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

# 8. Versioning and Migration

Every persisted contract should carry a schema/version marker where breaking changes may occur.

Breaking changes require:

- explicit new schema/layout/core version,
- deterministic migration or compatibility adapter,
- migration test fixtures,
- rollback/recovery consideration,
- no silent reinterpretation of old customer releases.

---

# 9. Customer Roles and Authority

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

For ServicesOS-connected authoritative fields, Owner edits the source in ServicesOS rather than creating a competing Web value.

### Editor

May:

- edit approved website content/configuration,
- upload/manage permitted assets,
- create preview,
- possibly request publication.

By default, Editor should not manage billing, user authority, sensitive integration secrets, or high-risk support controls.

Editors also may not override ServicesOS-authoritative facts in connected mode.

### Viewer

Read-only dashboard/preview/history access where needed.

### SLAI Support

Not a normal tenant member. Uses controlled delegated access with explicit reason, duration, audit, and bounded authority.

### Authority rule

Publishing, billing, domain, user-management, support-elevation, and security-sensitive actions must have explicit permission checks independent of visible UI.

---

# 10. Entitlement Model

An authenticated user may have a valid tenant membership without having an active SLAI Web product entitlement.

V1 should distinguish:

- identity,
- tenant membership,
- role/permission,
- product entitlement,
- billing state,
- site state,
- site mode (`standalone` or `servicesos_connected`),
- integration/link authority.

This prevents "user exists" from being treated as "user may publish a paid website" and prevents a connected Web user from silently overriding ServicesOS-owned facts.

---

# 11. Media Contract

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

# 12. Form / Lead Contract

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

### Standalone intake

For a standalone SLAI Web customer, SLAI Web is the authoritative intake system for the website form unless another explicitly supported external integration is configured.

### ServicesOS handoff

When ServicesOS is connected, supported contact/request forms should create the corresponding ServicesOS lead/request through a defined server-side connector when that workflow is enabled.

ServicesOS then becomes the operational authority for the resulting lead/request.

Do not write directly into arbitrary ServicesOS collections from public browser code.

---

# 13. Public / Private Data Boundary

Every field exposed publicly should be allowlisted from the public Website Profile/release.

Private tenant/account/operational fields must never become public merely because they are stored near public records.

For ServicesOS-connected customers, the Web layer must consume only the approved public projection or explicitly bounded server-side connector response, not broad ServicesOS operational records.

Public release generation should prefer explicit projection over broad object serialization.

---

# 14. Deterministic vs AI Boundary

## Deterministic

- schema validation,
- source-authority enforcement,
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

AI must never overwrite a ServicesOS-authoritative fact in connected mode.

---

# 15. Contract Acceptance Criteria

This product/data contract is implementation-ready when the chosen stack can demonstrate:

- a typed/versioned Website Profile,
- first-class standalone operation without ServicesOS,
- explicit `standalone` versus `servicesos_connected` authority behavior,
- ServicesOS ownership of overlapping business/operational truth when connected,
- SLAI Web ownership of presentation/publication in both modes,
- explicit provenance for shared facts,
- strict tenant isolation,
- separate membership/role/entitlement concepts,
- mutable draft + immutable published release behavior,
- reproducible old releases,
- safe media references,
- server-authoritative form intake,
- explicit public projection,
- clean disconnect transition without data loss or silent authority drift,
- no competing Web override for ServicesOS-authoritative facts,
- no required AI dependency for normal website operation.
