# SLAI Web End-Customer Account and Portal Model

**Status:** Future cross-product planning; not a ServicesOS V1 or SLAI Web V1 launch blocker  
**Purpose:** Define the customer-facing account experience for people who buy services from SLAI-powered businesses.  
**Priority:** Build only after the current ServicesOS V1 / Core / SLAI Web sequence earns the capability.

---

## 1. Terminology

SLAI planning currently uses "customer" in two different ways.

Use these terms in this document:

- **Business customer** — a business that buys SLAI Web, ServicesOS, or another SLAI product.
- **End customer** — a person or organization buying services from that business.

The end-customer portal must not be confused with the SLAI Web business-owner dashboard or the SLAI Platform customer/billing account.

---

## 2. Product Thesis

> **SLAI Web should be able to give an end customer one clean account experience while ServicesOS remains the operational authority for the business relationship.**

The end-customer experience may include:

- profile and contact preferences,
- saved service addresses/properties where appropriate,
- active quotes/estimates,
- approvals,
- appointments/jobs,
- current status,
- approved scope,
- change requests,
- proof/revision approvals where a vertical needs them,
- payments/receipts,
- files/photos supplied by the customer,
- messages/notifications,
- completed-service history,
- rebooking/request-service actions.

SLAI Web owns the presentation and portal experience.

ServicesOS owns the operational records when the business uses ServicesOS.

---

## 3. Relationship to Existing ServicesOS V1

ServicesOS already has important foundations:

- authenticated customer role,
- tenant-scoped customer records,
- exact customer identity linking through `authUid`,
- Customer Portal,
- quote/request intake,
- customer scope approval,
- booking/payment/job truth.

Those foundations should be audited and promoted/reused rather than replaced.

The future SLAI Web portal should not create a second competing customer record for the same ServicesOS-connected business relationship.

---

## 4. Account Model

A future end customer may have one SLAI identity with one or more explicit business relationships.

Conceptually:

```text
SLAI End-Customer Identity
        |
        +-- Relationship: Business A / ServicesOS tenant A
        |     +-- quotes
        |     +-- bookings/jobs
        |     +-- approvals
        |     +-- payments
        |     +-- messages
        |
        +-- Relationship: Business B / ServicesOS tenant B
              +-- completely separate operational records
```

### Privacy rule

> **A business may see only the end-customer information and history that belongs to that business relationship.**

Business A must never gain access to Business B history merely because the same person uses one SLAI identity.

A shared login is not shared tenant data.

---

## 5. Authority Boundary

### SLAI Platform/Core identity layer — future-capable

May eventually own or provide:

- authenticated end-customer identity,
- session/security primitives,
- basic user-controlled profile/contact preferences,
- explicit product/business relationship references,
- recent-auth/recovery primitives.

This does **not** require expanding Core V1 before evidence justifies it.

### SLAI Web

Owns:

- customer-facing portal UX,
- navigation/presentation,
- public/business branding,
- website-to-portal transitions,
- display of approved operational projections,
- safe account/profile controls that are Web-owned.

### ServicesOS

When connected, owns:

- business-specific customer record,
- quote/estimate truth,
- booking/job truth,
- approved scope,
- extra-work/change state,
- payment truth,
- business-specific service history,
- operational messages/events,
- vertical-specific workflow state.

### Vertical pack/module

Defines which customer-facing stages/actions are relevant.

Examples:

```text
Cleaning
request → estimate → approve → scheduled → service → change approval → complete

Signs
request → estimate → proof → revision/approve → production → pickup/install → complete

Landscaping
request → estimate → approve → scheduled → crew/work → change approval → complete

Barbershop
book → appointment → service → payment → rebook
```

---

## 6. Customer Profile

The end customer should have a small reusable profile where appropriate.

Potential user-owned fields:

- preferred display/name,
- email,
- phone,
- communication preference,
- accessibility/contact preferences where explicitly supplied,
- saved addresses/properties where supported,
- default contact preference.

Business-specific notes, internal flags, service history, pricing, and operational records remain business/ServicesOS-owned.

Do not turn a global SLAI profile into a cross-business CRM record visible to businesses.

---

## 7. Customer Portal Surface

A connected customer-facing portal may expose:

```text
My Account
├── Profile
├── Saved locations/properties
└── Communication preferences

My Services
├── Requests / Quotes
├── Approvals
├── Upcoming
├── In progress
├── Changes needing approval
├── Payments / Receipts
├── Messages
├── Files / Proofs
└── Completed history
```

The exact surface is capability-driven by the connected business/vertical. Do not show empty irrelevant modules.

---

## 8. Communication Principle

The portal should reduce dependence on a single delivery channel.

Important actions such as quote approval, proof approval, change approval, scheduling, and payment may be surfaced through:

- authenticated portal,
- email,
- SMS where enabled/consented,
- future push where supported.

The portal is the durable source for "what needs me"; email/SMS are notification channels.

---

## 9. Incremental Delivery

Do not wait for a giant ServicesOS V2 release to deliver every useful capability.

A possible progression is:

```text
ServicesOS V1
→ stable customer identity + current Customer Portal

ServicesOS V1.x
→ targeted customer-account/portal improvements where justified

SLAI Web V1
→ business websites + public/customer-facing entry points

SLAI Web V1.x / ServicesOS V1.x bridge
→ authenticated end-customer portal integration

ServicesOS V2
→ richer vertical/customer workflow states exposed through the same portal
```

Version numbers are planning labels, not committed release numbers.

Each 1.x release must be independently useful, backward-compatible where practical, tested, and small enough to ship without turning "V2" into one long invisible development period.

---

## 10. Non-Goals for the First Portal Release

Do not begin with:

- consumer marketplace/discovery,
- social network features,
- cross-business purchase history visible to merchants,
- universal loyalty currency,
- autonomous customer messaging,
- broad document vault,
- unrestricted cross-product data sharing,
- every future vertical workflow,
- a second operational database duplicating ServicesOS.

---

## 11. Success Criteria

This direction is successful when:

1. An end customer can use one clean branded account/portal experience.
2. ServicesOS-connected operational truth is not duplicated or contradicted.
3. A customer can act on quotes, approvals, jobs, payments, or vertical-specific steps without relying only on email.
4. One end-customer identity can safely relate to multiple businesses without cross-tenant leakage.
5. Businesses cannot see another business's relationship/history.
6. Vertical packs can change the visible workflow without forking the portal core.
7. The capability can grow through small V1.x/V2.x releases instead of requiring one giant rewrite.

---

## Final Principle

> **SLAI Web is the customer's window into the work. ServicesOS is the business's operational truth. Shared identity should improve convenience without weakening tenant isolation.**
