# ServicesOS Barbershop Pricing and Value Strategy

**Document Status:** Strategic pricing hypothesis / future vertical planning  
**Implementation Status:** Future Roadmap — do not build from this document yet  
**Last Updated:** 2026-09-16  
**Owner:** Jamie Brown / Stellar Logic AI  
**Related Vertical:** ServicesOS Appointment Services / Barber & Salon

## Purpose

Preserve the current Barbershop pricing, packaging, payment-provider, communication-cost, founder-beta, SLAI Web, onboarding, and future hosted-page strategy without converting it into active ServicesOS V1 implementation work.

This document records future product direction and validation hypotheses. It does not authorize active Barbershop implementation while ServicesOS V1 remains the priority.

## Current Pricing Direction

Company-wide SLAI pricing now provides the default commercial baseline:

```text
ServicesOS
$100/month
or
$1,000/year
```

The annual option provides the same normal entitlement and represents the standard two-month-free annual discount.

Barbershop should use the company-wide default unless Jamie explicitly approves a documented exception based on real economics or validation evidence.

The pricing goal is not to win by being the cheapest booking calendar. The goal is to provide strong operational value at a simple price.

## Staff-Inclusive Pricing Direction

Adding another barber to an existing tenant is expected to add relatively little direct platform cost compared with adding another business tenant or consuming provider-backed services.

A new barber primarily adds:

- staff/provider profile data,
- availability/calendar context,
- appointment records,
- permissions,
- notifications,
- normal database/storage activity.

ServicesOS should therefore avoid aggressive per-seat pricing for ordinary team growth unless real cost or support evidence requires it.

Current planning direction:

> **One shop. One simple price. Grow the team without the software bill jumping every time another barber is added.**

A practical included-provider allowance can still be validated before public launch; do not promise unlimited staff without usage evidence.

## Founder / Design-Partner Pricing

American Barbershop or another early validation partner should not receive an automatic permanent family discount.

Jamie may explicitly approve a temporary founder/design-partner rate when the customer provides meaningful feedback and helps validate the vertical.

Any temporary rate should:

- preserve the standard list price,
- have a defined duration or end condition,
- keep provider-backed costs bounded,
- avoid unlimited manual support,
- generate real unit-economics evidence.

Useful pilot measurements:

- cloud/infrastructure cost,
- AI/provider cost,
- SMS/communication cost,
- payment-provider cost,
- support minutes,
- onboarding/migration hours,
- active barber count,
- appointment volume,
- payment volume,
- bug/revision burden,
- retention and owner-perceived value.

---

## Existing Square / Tap to Pay Compatibility

A real adoption consideration for the Barbershop vertical is that many shops may already use Square for card-present payments and may use Tap to Pay directly on staff phones.

American Barbershop is a concrete validation lead for this possibility. The exact provider, account structure, and payment method should be verified with the shop before implementation rather than assumed.

### Product principle

> **Do not require a business to replace working payment hardware or a payment provider solely to adopt ServicesOS when a safe integration path exists.**

Current ServicesOS V1 payment work remains centered on Stripe / Stripe Connect. Square support is a future V2/payment-provider expansion candidate.

Preferred future architecture:

```text
ServicesOS
        ↓
Payment Provider Layer
   ┌───────────────┐
   │               │
Stripe           Square
   │               │
Stripe Connect   Square seller authorization
Stripe Tap to Pay
                 Square Tap to Pay where supported
Stripe Terminal  Square Terminal / Reader where supported
```

### Barbershop payment flow concept

```text
Appointment / service is already in ServicesOS
        ↓
Barber taps Collect Payment
        ↓
ServicesOS starts the connected provider's in-person checkout
        ↓
Customer taps card / phone
        ↓
Provider processes payment
        ↓
Provider sends authoritative result
        ↓
ServicesOS marks appointment/invoice paid
        ↓
Reporting and customer history update
```

For a Square-connected shop, the intended customer experience is:

> **Already use Square Tap to Pay? Keep it. Connect Square to ServicesOS.**

### Provider-specific truth remains separate

ServicesOS should normalize the business workflow, but the selected payment provider remains authoritative for the underlying card transaction.

Do not assume Square hardware can be used as Stripe hardware or vice versa. Each provider's supported Tap to Pay, reader, terminal, authentication, refund, event, and application/platform-fee rules must remain provider-native.

Exact Square APIs, SDKs, permissions, device support, application-fee support, and event names must be verified against current Square documentation when the feature is actually implemented.

---

## Payment Provider Abstraction Direction

Long-term ServicesOS should avoid hard-coding all business logic directly to one payment processor.

Conceptual application-level operations:

```text
connectMerchant()
createPayment()
startInPersonCheckout()
getPaymentStatus()
refundPayment()
collectPlatformFee()
handleWebhook()
disconnectMerchant()
```

Provider adapters translate those actions into Stripe or Square-specific behavior.

This keeps the rest of ServicesOS focused on invoices, appointments, jobs, customers, and payment state rather than provider-specific implementation details.

### V2 scope guardrail

Square should only become active V2 work after:

1. current Stripe/Stripe Connect behavior is stable,
2. final V1 payment invariants are documented,
3. at least one real target customer confirms Square is a meaningful switching barrier or retention advantage,
4. current Square developer capabilities are re-verified,
5. provider abstraction can be introduced without destabilizing V1 tenants.

Do not build Stripe and Square simultaneously during the current V1 stabilization phase.

---

## Communication Pricing Philosophy

Messaging should primarily be a customer-value and cost-recovery feature, not a major profit center.

Preferred structure:

```text
Base subscription
→ useful included communication allowance
→ optional larger communication package
→ modest overage where needed
→ owner-visible usage and spending controls
```

Exact SMS pricing remains TBD until current provider/carrier/A2P/segment economics are verified.

Required future controls should include:

- usage meter,
- remaining allowance,
- reset date,
- warnings,
- owner-set overage permission,
- spending cap,
- hard stop or fallback where appropriate.

## AI Usage Philosophy

Barbershop value should not require paid model usage for every observation.

Preferred pattern:

```text
Deterministic detection
→ identify rebooking/open-slot/cancellation/review opportunity
→ optional AI drafting or interpretation
→ human approval
```

Provider-backed generation should remain bounded by credits/allowances and cost controls.

## Detailed Onboarding as Cost Reduction

ServicesOS onboarding should collect structured business information once, including where appropriate:

- business identity,
- services,
- prices,
- hours,
- staff/providers,
- contact information,
- policies,
- branding,
- logo,
- social links,
- customer-facing information,
- website-ready assets/data,
- payment-provider choice/connection status when that capability exists.

Long-term effect:

```text
Customer completes ServicesOS onboarding
→ canonical structured business data exists
→ SLAI Web starts from verified inputs
→ less manual discovery/chasing
→ faster website production
→ lower support burden
```

## ServicesOS-Driven Website Maintenance

Routine website facts should increasingly be edited in ServicesOS rather than through manual SLAI support.

Examples:

- hours,
- services,
- prices,
- barber/provider profiles,
- staff photos,
- contact information,
- public policies,
- social links,
- gallery/media,
- approved announcements.

Preferred publication boundary:

```text
Owner edits ServicesOS
→ Save Draft
→ Review
→ Publish
→ approved public-data release
→ website consumes approved release
```

Core operating principle:

> **Customers manage their business facts. SLAI manages the system.**

## SLAI Web Turnaround Advantage

SLAI Web is intended to achieve fast production through reusable core, approved layouts/components, structured onboarding, website-ready data, deterministic checks, and human QA.

The under-an-hour production goal refers to SLAI active build/configuration time after required customer information is available; customer intake time is a separate part of the workflow.

Goal:

> **Template speed without template-looking websites.**

## Future Hosted Page / Marketplace Option

A future optional ServicesOS hosted-business-page or marketplace layer could reuse the same approved public-data architecture.

Possible surfaces:

```text
ServicesOS public business data
        ↓
Hosted ServicesOS branded business page
        ↓
SLAI Web custom-domain site
        ↓
Optional marketplace/discovery surface later
```

Do not build a consumer marketplace early.

## Competitive Philosophy

ServicesOS should compete through reusable SaaS economics, vertical-specific workflow quality, interoperability with existing business tools where practical, and strong value per dollar.

For Barbershop, intended differentiation is broader than scheduling:

- booking,
- operational context,
- customer history,
- retention intelligence,
- GrowthAI,
- human-controlled automation,
- website/data integration,
- payment-provider flexibility,
- simple team-friendly pricing.

## Validation Before Lock

Before publicly locking the Barbershop vertical:

1. verify American Barbershop's current booking/payment stack,
2. confirm whether Square and Tap to Pay are actually used,
3. verify live competitor pricing,
4. validate exact ServicesOS scope,
5. validate provider/SMS economics,
6. test with at least one real barbershop,
7. measure onboarding/support/payment usage,
8. compare owner-perceived value against current software,
9. then lock the vertical-specific launch package.

## Priority Guardrail

This remains future Barbershop planning.

It does not alter the execution order:

```text
ServicesOS V1
→ wife beta
→ beta-critical fixes
→ UI fine-tuning
→ Stripe / Stripe Connect stability
→ customer-ready release
→ SLAI Web sequence
→ later ServicesOS V2 / vertical expansion when promoted
```
