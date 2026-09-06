# ServicesOS Website Public Data and Booking Contract

**Status:** Planning contract  
**Implementation:** Future / only when promoted  
**Last Updated:** 2026-09-06  
**Primary Rule:** ServicesOS remains the source of operational truth. Websites receive only approved public projections.

## Purpose

Define the future boundary between ServicesOS and customer-facing websites.

## Public Data Principle

ServicesOS operational data must not be exposed directly to websites.

Preferred flow:

```text
Operational records
→ public-field policy
→ draft public representation
→ owner review
→ publish
→ immutable/versioned public content release
→ website
```

## Public Release Requirements

A public content release should contain:

- release ID,
- tenant ID,
- published timestamp,
- publisher/actor reference,
- source/provenance references,
- explicitly public fields only,
- schema version,
- optional cache metadata,
- prior release reference where useful.

A release should never contain private employee/customer/operational data unless explicitly designed as public.

## Candidate Public Fields

Where approved:

- business name,
- logo,
- brand colors,
- tagline/descriptions,
- phone/email,
- public address/service area,
- hours,
- social links,
- services,
- public prices,
- service durations,
- staff/provider public profiles,
- approved photos/media,
- FAQs,
- public policies,
- testimonials/reviews,
- public CTA destinations,
- public booking configuration.

## Draft / Publish Semantics

Routine edits remain draft until published.

Publishing creates a new release rather than rewriting history.

Websites should reference a specific release ID so a production deployment can be reproduced and rolled back.

## Booking Authority

The website owns the interaction flow.

ServicesOS owns:

- availability rules,
- barber/provider schedule,
- time-off/blocks,
- service duration,
- provider-specific duration override,
- buffers,
- deposit/payment requirements,
- final slot validation,
- atomic reservation,
- booking creation.

The browser is never the booking source of truth.

## Final Booking Submission

A valid final booking operation should:

1. receive tenant/service/provider/time/customer inputs,
2. authenticate/authorize as required,
3. validate public-booking policy,
4. revalidate availability server-side,
5. use an idempotency key,
6. atomically reserve/create the appointment,
7. return a canonical booking result,
8. avoid duplicate appointments on retry/double-click.

## Failure and Retry

The API must distinguish at least:

- slot no longer available,
- invalid/expired request,
- payment/deposit failure where applicable,
- rate-limit/abuse rejection,
- server/provider failure,
- duplicate/idempotent replay.

A failed booking must not leave a partial appointment unless an explicit recoverable state is designed.

## Security Rules

- no direct public Firestore/database writes,
- no private tenant fields in website payloads,
- tenant isolation enforced server-side,
- rate limits/abuse controls for public endpoints,
- secrets never delivered to the browser,
- audit relevant writes,
- fail closed when booking authority cannot be verified.

## Compatibility

The public-data schema and booking contract should be independently versioned.

Breaking changes require an explicit version transition rather than silent behavior changes.
