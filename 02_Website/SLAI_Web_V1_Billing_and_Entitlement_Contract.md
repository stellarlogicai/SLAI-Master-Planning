# SLAI Web V1 Billing and Entitlement Contract

**Status:** Authoritative V1 planning contract  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

## 1. Purpose

Lock the V1 commercial subscription and entitlement behavior before implementation begins.

This contract defines:

- monthly and annual recurring plans,
- one-time implementation/custom charges,
- canonical internal billing states,
- how verified Stripe state becomes SLAI Web entitlement,
- no-trial launch behavior,
- payment-failure grace behavior,
- cancellation and reactivation behavior,
- manual/comped entitlement controls,
- the separation between billing, permissions, and site state.

> **Stripe is the payment/subscription authority. SLAI Web is the entitlement authority. Browser state never creates paid access.**

---

# 2. V1 Recurring Subscription Offer

SLAI Web V1 offers two billing intervals for the same platform entitlement:

```text
Monthly
$100 / month

Annual
$1,000 / year
Equivalent to two months free compared with monthly billing
Effective monthly rate: ~$83.33
```

The monthly and annual plans provide the same normal V1 platform capabilities.

Do not create artificial feature differences merely to push annual billing.

Conceptually:

```text
SLAI Web Subscription
├── monthly: $100 / month
└── annual:  $1,000 / year

same product entitlement
same feature set
same support class
```

Annual pricing is a commitment/payment-frequency discount, not a separate product tier.

---

# 3. No Free Trial at V1 Launch

V1 does not require a free recurring-platform trial.

Preferred self-service path:

```text
Create account
→ configure/onboard
→ build draft
→ preview
→ start paid monthly or annual subscription
→ verified active entitlement
→ production publish
```

Draft/preview access may be available before the recurring subscription is active, but production publication and continued production platform service require valid entitlement.

This avoids taking on unlimited production hosting/support/abuse exposure before payment while still letting a customer see what they are buying.

A future trial may be added only if real conversion data justifies it.

---

# 4. One-Time Build Charges Are Separate

Done-for-you and custom work use one-time commercial charges separate from the recurring SLAI Web subscription.

Working examples:

```text
DIY
$0 implementation
+ monthly or annual SLAI Web subscription

Done-for-you
~$750-$1,000 one time
+ monthly or annual SLAI Web subscription

Custom
~$1,500-$2,000+ one time
+ monthly or annual SLAI Web subscription
```

A one-time implementation payment means SLAI owes the agreed implementation scope.

It does **not** create:

- lifetime hosting,
- lifetime editor/dashboard access,
- lifetime support,
- recurring platform entitlement.

A completed/paid implementation may produce a preview-ready site, but production service still requires the recurring SLAI Web entitlement unless Jamie explicitly authorizes another audited commercial arrangement.

---

# 5. Canonical Internal Billing States

SLAI Web should translate provider-specific Stripe status into a small internal state model.

```ts
type WebBillingState =
  | "setup"
  | "active"
  | "cancel_at_period_end"
  | "past_due_grace"
  | "suspended"
  | "cancelled"
  | "comped";

type BillingInterval = "monthly" | "annual";
```

Provider-specific Stripe statuses must not be interpreted independently throughout the UI.

Preferred flow:

```text
Verified Stripe event/state
        ↓
Canonical SLAI Web billing state
        ↓
Entitlement policy
        ↓
Allowed platform actions
```

---

# 6. Entitlement Matrix

| Billing state | Existing live site | Dashboard/edit | Preview | Production publish | Domain management | Billing recovery/portal | Notes |
|---|---|---|---|---|---|---|---|
| `setup` | No new production entitlement | Yes, setup/draft | Yes | No | Setup-only where safe | Yes | Account/site being prepared before paid activation |
| `active` | Yes | Yes | Yes | Yes | Yes | Yes | Normal paid entitlement |
| `cancel_at_period_end` | Yes through paid-through date | Yes | Yes | Yes | Yes | Yes | Full service remains through current paid period |
| `past_due_grace` | Yes | Yes | Yes | **No new production publish** | Limited/recovery-safe only | Yes | Payment failure recovery window |
| `suspended` | Last-known-good site preserved initially according to suspension policy | Limited/read/recovery/export | Limited | No | No normal changes | Yes | Grace expired/no current entitlement |
| `cancelled` | No indefinite ongoing hosting obligation; transition policy applies | Handoff/export/recovery only | No normal product use | No | Transition only | Restart flow if offered | Paid service ended |
| `comped` | Yes | Yes | Yes | Yes | Yes | As applicable | Explicit audited manual/free entitlement |

The exact long-term live-site suspension/unpublish and retention timing remains a lifecycle-policy decision that must be finalized before public launch, but payment failure must never directly equal destructive deletion.

---

# 7. Seven-Day Past-Due Grace Period

V1 planning decision:

> **Use a 7-day `past_due_grace` period after an authoritative recurring payment failure.**

During grace:

- the current live site remains online,
- the customer is clearly notified,
- the Owner can access billing recovery,
- normal editing may continue,
- preview may continue,
- **new production publishing is blocked**,
- normal domain changes are restricted unless needed for safe recovery,
- Stripe/provider retries may continue.

Rationale:

A transient card failure should not immediately take a small business website offline, but SLAI should not continue granting fresh production value indefinitely while unpaid.

Working principle:

> **Past due preserves existing value but pauses creation of new production value.**

---

# 8. Grace Recovery

When payment succeeds during `past_due_grace`:

```text
past_due_grace
→ verified successful provider payment/subscription recovery
→ active
```

Full entitled actions restore automatically after trusted billing processing.

No support ticket should be required for a normal successful recovery.

If a customer reaches `suspended` but later resolves payment while their site/data remains inside the recoverable retention window, the system should support a deterministic reactivation path rather than forcing a rebuild.

---

# 9. Suspension Is Not Deletion

These are separate states:

```text
past_due_grace = temporary payment problem
suspended      = no current normal platform entitlement
cancelled      = commercial subscription ended
deleted        = separate controlled lifecycle action
```

Do not implement:

```text
payment failed → delete site
```

Suspension should preserve customer-owned content, assets, version history, and domain-transition information according to the future retention/handoff policy.

Destructive deletion requires a separate controlled workflow and retention policy.

---

# 10. Cancellation Behavior

When a customer schedules cancellation:

```text
active
→ cancel_at_period_end
→ full service remains until paid-through date
→ cancelled at period end
```

This applies to both monthly and annual billing.

Example:

A customer who paid an annual plan through September 15, 2027 and cancels renewal in March 2027 remains fully entitled through September 15, 2027.

Do not reduce paid service merely because cancellation was scheduled early.

At the paid-through date, transition into the cancellation/handoff policy rather than silently continuing free recurring service.

---

# 11. Reactivation

Normal reactivation paths should be automatic where Stripe/provider state is authoritative and unambiguous.

Examples:

```text
past_due_grace → active
suspended → active (when still recoverable and payment restored)
cancel_at_period_end → active (if renewal cancellation is reversed before period end)
```

Reactivation must not fabricate entitlement from browser return parameters.

The server-side canonical billing record must reflect verified provider state first.

---

# 12. Comped / Manual Entitlement

V1 supports `comped` as a controlled exception for cases such as:

- approved design partner,
- promotional period,
- SLAI internal/demo tenant,
- service credit,
- special commercial agreement.

A comped grant must record at minimum:

- tenant/site,
- who authorized it,
- reason,
- start time,
- expiration or explicit no-expiration decision,
- audit reference.

Normal support staff must not be able to silently fabricate a paid/comped state.

`comped` grants platform entitlement without pretending Stripe received money.

---

# 13. Billing Interval Is Separate From Entitlement State

Do not create separate authorization logic such as `annual_active` and `monthly_active`.

Use separate concepts:

```ts
billingState: "active"
billingInterval: "monthly" | "annual"
```

This keeps platform authorization identical across monthly and annual customers.

The interval affects:

- charge cadence,
- renewal date,
- customer savings,
- reporting/accounting,

not normal feature authority.

---

# 14. Stripe Product / Price Structure

Planning direction:

- one SLAI Web recurring product concept,
- at least one monthly recurring price,
- at least one annual recurring price,
- one-time implementation/custom charges represented separately,
- complex/exception pricing may use quoted/custom one-time or recurring amounts when approved.

Exact Stripe object IDs, API version, and final Price object structure are implementation details to verify when SLAI Web becomes active.

Do not embed Stripe price IDs throughout UI components. Map provider IDs through centralized billing configuration.

---

# 15. Verified Billing Event Processing

The billing integration must process trusted server-side Stripe events/state.

At minimum the implementation must account for event classes covering:

- successful checkout/subscription creation where Checkout is used,
- subscription creation/update,
- subscription cancellation/deletion,
- successful recurring invoice/payment,
- failed recurring invoice/payment,
- scheduled cancellation changes,
- reactivation/resumption where applicable.

Exact current Stripe event names must be verified against the Stripe API version chosen at implementation time.

Every processed billing event must be idempotent/duplicate-safe.

Store the provider event identifier or equivalent deduplication key so retries do not double-apply state changes.

---

# 16. Server-Authoritative Entitlement Record

SLAI Web should maintain a canonical internal entitlement/billing projection sufficient for application authorization.

Conceptual fields:

```ts
type WebSubscriptionRecord = {
  tenantId: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  recurringPriceId?: string;
  billingInterval?: "monthly" | "annual";
  billingState: WebBillingState;
  currentPeriodStart?: Timestamp;
  currentPeriodEnd?: Timestamp;
  cancelAtPeriodEnd: boolean;
  graceStartedAt?: Timestamp;
  graceEndsAt?: Timestamp;
  compedUntil?: Timestamp;
  lastVerifiedProviderEventId?: string;
  updatedAt: Timestamp;
};
```

This is a conceptual contract; final Firestore/document shape may differ while preserving semantics.

The website UI asks the entitlement layer whether an action is allowed. It does not independently interpret Stripe.

---

# 17. Permissions and Billing Remain Separate

Paid entitlement never replaces role authorization.

Example:

```text
subscription active = yes
user role = Editor
publish permission = no
→ publish denied
```

Another example:

```text
subscription active = yes
user role = Owner
site publish-ready = no
→ publish denied
```

Conceptually a consequential action evaluates:

```text
authenticated identity
+ tenant membership
+ role permission
+ billing entitlement
+ site state
+ source authority
+ release/QA validation
= allowed action
```

See `SLAI_Web_V1_Permissions_and_Authority_Matrix.md`.

---

# 18. Billing Portal / Payment Method Security

Where practical, Owners should use Stripe-hosted secure billing/portal flows for payment-method and subscription management.

SLAI Web must not expose or store raw card secrets.

Only Owner may initiate normal tenant billing-management actions in V1.

SLAI Support Mode may inspect limited billing status when explicitly scoped but cannot alter payment methods or fabricate entitlement.

---

# 19. Production Publish Gate

Production publishing requires at minimum:

- authorized Owner action,
- `active`, `cancel_at_period_end`, or valid `comped` entitlement,
- publish-ready Website Profile,
- required source/connector authority checks,
- required QA/release gates,
- valid deployment/domain state where applicable.

`past_due_grace`, `suspended`, `cancelled`, and `setup` do not permit new production publication.

Emergency SLAI Platform Operator restoration/rollback is governed by the permissions contract and is not normal paid publish authority.

---

# 20. Accounting / Revenue Reporting Boundary

Annual customers pay $1,000 upfront, but the billing system should preserve enough information to distinguish:

- one-time implementation revenue,
- monthly recurring subscription revenue,
- annual recurring subscription revenue,
- manual/comped entitlement,
- exceptional/custom infrastructure charges.

Accounting recognition/tax treatment should follow SLAI's accounting/legal guidance rather than application assumptions.

---

# 21. V1 Explicitly Deferred

Do not block implementation waiting to define:

- multiple paid feature tiers,
- three-year/five-year/lifetime plans,
- seat-based pricing,
- usage-based core website pricing,
- free recurring production tier,
- reseller billing,
- coupons/promotional engine beyond simple Stripe-supported needs,
- advanced enterprise invoicing,
- complex proration policies beyond what the chosen launch flows require.

These require real demand.

---

# 22. Acceptance Criteria

The V1 billing/entitlement design is ready when:

- monthly price is $100/month,
- annual price is $1,000/year and provides the same normal entitlement,
- V1 launch does not depend on a free trial,
- one-time build charges do not create recurring entitlement,
- Stripe/provider state is translated centrally into canonical SLAI Web state,
- browser state cannot fabricate paid access,
- payment failure creates a 7-day grace period,
- grace preserves the live site but blocks new production publication,
- successful recovery restores active entitlement automatically,
- suspension does not equal destructive deletion,
- cancellation preserves service through the paid-through date,
- monthly and annual use the same entitlement rules,
- comped access is explicit and audited,
- permission checks remain separate from billing checks,
- billing event processing is idempotent/duplicate-safe,
- production publish checks authoritative entitlement server-side.
