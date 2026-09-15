# SLAI Web V1 Product Connector and Authority Contract

**Status:** Authoritative planning contract / V1 foundation  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

## 1. Purpose

SLAI Web must work as a complete standalone product today while remaining ready to connect to future SLAI products without rewriting its core data model.

ServicesOS is the first and only required V1 product connector. Future products must be able to integrate through the same connector/authority framework when they are actually promoted for implementation.

> **Do not hard-code the SLAI Web core around ServicesOS as the only possible upstream product. Hard-code the connector contract, not the product list.**

This contract does not authorize building future product integrations before their priority gate.

---

## 2. Core Modes

SLAI Web supports two conceptual modes:

```text
standalone
SLAI Web owns public business facts + website presentation

connected
One or more approved product connectors may supply authoritative business/operational facts
SLAI Web continues to own website presentation + publication
```

V1 implementation only needs these concrete operating cases:

```text
standalone
servicesos_connected
```

The underlying schema, provenance, and connector APIs must nevertheless remain generic enough that a future approved SLAI product can be added without replacing the Website Profile model.

---

## 3. Connector Principle

Every product integration should enter SLAI Web through a bounded adapter/connector.

Conceptually:

```text
Source Product
    ↓
Product-Specific Adapter
    ↓
Versioned SLAI Web Connector Contract
    ↓
Authority / Provenance Resolution
    ↓
Website Profile Draft
    ↓
Preview / Publish
```

SLAI Web must not read arbitrary private collections or internal tables from another product simply because both systems are owned by Stellar Logic AI or use the same cloud provider.

---

## 4. Generic Connection Record

A product connection should conceptually support:

```ts
type ProductConnection = {
  connectionId: string;
  productKey: string;              // e.g. "servicesos"
  connectorVersion: string;
  remoteTenantId?: string;
  status: "pending" | "active" | "degraded" | "disconnected";
  capabilities: ConnectorCapability[];
  connectedAt?: Timestamp;
  updatedAt: Timestamp;
};
```

`productKey` must be treated as a namespaced/stable identifier rather than an enum that assumes ServicesOS is the only possible product forever.

V1 known product key:

```text
servicesos
```

Future product keys are added only when those products are actually implemented and approved.

---

## 5. Capability Model

A connector must explicitly declare what it can provide or receive.

Possible capabilities include:

```text
business_public_data
service_catalog
public_pricing
business_hours
public_team_profiles
public_media
public_policies
booking
lead_intake
contact_requests
location_service_area
commerce_or_product_catalog
```

V1 should implement only the ServicesOS capabilities that are actually needed.

Do not enable a future capability merely because the contract names it.

---

## 6. Authority Must Be Domain-Specific

Connecting a product does not automatically make that product authoritative for every Website Profile field.

Authority must be explicit by domain or field family.

Conceptual example:

```ts
type AuthorityBinding = {
  domain: string;
  sourceType: "slai_web" | "slai_product" | "external_integration";
  connectionId?: string;
  productKey?: string;
  sourceReleaseId?: string;
};
```

Example with ServicesOS:

```text
services/prices         → ServicesOS
business hours          → ServicesOS
provider identity       → ServicesOS
booking authority       → ServicesOS
website pages           → SLAI Web
layout/theme            → SLAI Web
website copy            → SLAI Web
SEO presentation        → SLAI Web
publish/release history → SLAI Web
```

This prevents a future connector from accidentally taking ownership of unrelated website state.

---

## 7. Single Authority Per Domain

At any given moment, one canonical authority should exist for a business fact domain.

If multiple connected products can theoretically provide the same domain:

1. SLAI Web must not silently merge contradictory canonical values,
2. an explicit authority binding must select the authoritative source,
3. non-authoritative sources may be displayed as informational only where useful,
4. source changes require explicit authorized confirmation,
5. provenance/history must record the authority transition.

Presentation remains owned by SLAI Web regardless of upstream business authority.

---

## 8. Generic Provenance

Website Profile provenance must not be ServicesOS-specific.

A sourced value should be able to identify:

```ts
type SourceReference = {
  sourceType: "slai_web" | "slai_product" | "external_integration" | "import";
  productKey?: string;
  connectionId?: string;
  sourceRecordId?: string;
  sourceReleaseId?: string;
  confirmedBy?: string;
  confirmedAt?: Timestamp;
};
```

For ServicesOS in V1:

```text
sourceType = slai_product
productKey = servicesos
```

A future SLAI product uses the same structure with a different `productKey` and connector implementation.

---

## 9. Public Projection Boundary

A connected SLAI product should expose only an approved, versioned public projection or a bounded server-side API.

Preferred data flow:

```text
Private Product Data
        ↓
Product Public-Field Policy
        ↓
Approved / Versioned Public Projection
        ↓
SLAI Web Connector
        ↓
Website Draft
```

SLAI Web must not bypass the source product's public-data policy.

The current ServicesOS public-data and booking contract is the reference implementation for this pattern.

---

## 10. Website Presentation Always Stays Local

Even when an upstream product owns the facts, SLAI Web continues to own:

- pages,
- page/section structure,
- navigation,
- layout/theme,
- website-specific copy,
- visual emphasis,
- gallery composition,
- image crop/focal settings,
- featured-item selection,
- SEO presentation fields,
- preview/publish/release history,
- domain/deployment state.

A product connector may provide source content/assets, but it does not take control of SLAI Web presentation unless an explicit future feature says otherwise.

---

## 11. Connector Actions Must Be Bounded

A connector may support read and write actions only when explicitly designed.

Examples:

### Safe read examples

- fetch approved public services,
- fetch public pricing,
- fetch public business hours,
- fetch approved staff profiles,
- fetch approved media.

### Bounded write examples

- create a ServicesOS lead from a website form,
- submit a booking request to the ServicesOS booking authority.

A connector must not receive broad write access to another product.

---

## 12. Booking / Transaction Authority

Where another product owns a transactional workflow, SLAI Web is only the website interaction layer.

For ServicesOS booking:

```text
SLAI Web UI
    ↓
ServicesOS booking connector
    ↓
ServicesOS server-side validation / atomic reservation
    ↓
canonical booking result
```

Future products should follow the same principle for their own authoritative workflows.

SLAI Web must never pretend a transaction succeeded based only on browser state.

---

## 13. Disconnect / Product Removal

If an upstream product is disconnected while SLAI Web remains active:

1. preserve the latest approved public values and source references,
2. mark the connection disconnected,
3. identify which Website Profile domains lose their upstream authority,
4. transition those domains to SLAI Web ownership only after authorized confirmation,
5. retain historical provenance,
6. preserve the public site where commercially and technically appropriate.

Removing one product connection must not destroy unrelated SLAI Web content or presentation state.

---

## 14. Connector Versioning

Every connector requires its own version independent of:

- Website Profile schema version,
- SLAI Web Core version,
- layout version,
- source product version.

Breaking connector changes require:

- explicit new connector version,
- compatibility or migration plan,
- contract tests,
- rollback consideration,
- no silent reinterpretation of previously published releases.

A published website release should record the connector version and source release references that produced it.

---

## 15. Failure Behavior

If a connected product or connector is unavailable:

- existing live published sites should continue serving the last known-good release,
- SLAI Web must not replace valid facts with empty/unknown values,
- connected authoritative fields should show degraded/stale status in the dashboard where useful,
- new authoritative transactions such as booking must fail safely if authority cannot be validated,
- deterministic website editing for unrelated presentation fields should remain usable where safe.

Connector downtime must not unnecessarily take down static public content.

---

## 16. Security Boundary

Every connector must enforce:

- tenant identity mapping,
- server-side authorization,
- least privilege,
- explicit public-data allowlisting,
- rate limits where public-facing,
- no provider secrets in browser state,
- no cross-tenant source access,
- auditable consequential writes,
- fail-closed behavior for authoritative transactions.

Shared ownership by SLAI does not weaken product boundaries.

---

## 17. Future SLAI Product Readiness

The connector framework should be capable of later supporting approved products such as other SLAI vertical or operational systems without redesigning SLAI Web core.

This means future products should implement adapters to the stable connector contract rather than causing SLAI Web to add product-specific fields throughout its Website Profile and UI.

Conceptually:

```text
ServicesOS ─────┐
Future SLAI A ──┼─→ Product Connector Contract → SLAI Web
Future SLAI B ──┘
```

The actual future integrations remain parked until their product priority is promoted.

---

## 18. V1 Scope Guardrail

Future-compatible does **not** mean building a generic integration platform now.

V1 should build:

- the generic connection/provenance/authority primitives,
- the ServicesOS connector as the first concrete implementation,
- only the capability types required by V1.

V1 should **not** build:

- UI for arbitrary third-party connectors,
- a connector marketplace,
- configuration for nonexistent SLAI products,
- generic workflow scripting,
- cross-product data synchronization beyond current requirements.

Build the seam now. Build additional adapters later.

---

## 19. Acceptance Criteria

The connector foundation is ready when:

- SLAI Web works fully without any connected product,
- ServicesOS can connect without ServicesOS-specific assumptions leaking across the Website Profile core,
- source/provenance records use generic product references,
- authority is explicit per domain,
- one connector cannot silently override unrelated domains,
- live static sites survive temporary connector/source outages,
- a future SLAI product can theoretically implement the same connector contract without a Website Profile redesign,
- no future product integration is actually built before its priority gate.
