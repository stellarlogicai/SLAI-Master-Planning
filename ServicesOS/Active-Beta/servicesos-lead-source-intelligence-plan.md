# ServicesOS Lead Source Intelligence Plan

Project: Stellar Logic AI / ServicesOS  
Status: ServicesOS beta growth-intelligence planning  
Priority: ServicesOS beta data foundation, not full GrowthAI build  
Last Updated: 2026-06-28

## Purpose

Aunt B’s Cleaning Services is using Facebook and Angi to generate early leads. This creates a real beta need for ServicesOS:

```text
ServicesOS should help small service businesses understand which lead sources are worth their time and money.
```

The goal is not to build GrowthAI yet. The goal is to add the data hooks and workflows inside ServicesOS so GrowthAI can exist later with real operating data.

Core rule:

```text
Build the ServicesOS lead-tracking foundation now.
Park full GrowthAI automation until ServicesOS reaches customer-ready V1.
```

## Problem

Small owner-operator service businesses do not just need more leads.

They need to know:

- Which lead sources produce real customers
- Which leads waste time
- Which platforms are too expensive
- Which jobs become recurring
- Which customers are worth pursuing
- Whether paid leads are profitable after lead fees
- How fast they need to respond
- Why leads are lost

Example from Aunt B’s:

```text
Angi may charge $20+ for a lead even if the job is not booked.
For a new cleaning company, that can be risky unless the lead becomes a profitable job or recurring customer.
```

## Beta Use Case

Aunt B’s Cleaning Services will act as the first real beta environment for this workflow:

```text
Facebook / Angi / Website / Referral
→ ServicesOS Lead Inbox
→ Quote
→ Schedule
→ Job
→ Payment
→ Review
→ Recurring offer
→ Lead source performance report
```

## Implementation Scope

This is a ServicesOS feature set, not a separate GrowthAI product.

### In Scope for ServicesOS Beta

- Manual lead source tracking
- Quick lead intake
- Facebook and Angi source fields
- Paid lead cost tracking
- Lead status tracking
- Quote conversion tracking
- Lost reason tracking
- Revenue by lead source
- Recurring customer conversion tracking
- Basic lead source reporting
- Paste-message lead parser later

### Out of Scope for Beta

- Direct Facebook API integration
- Direct Angi API integration
- Automated ad buying
- Autonomous marketing decisions
- Full GrowthAI dashboard
- AI-driven spend recommendations without enough data

## Lead Source Fields

Add or confirm support for these lead fields:

```ts
leadSource:
  | "website"
  | "facebook"
  | "angi"
  | "google_business"
  | "referral"
  | "phone_text"
  | "repeat_customer"
  | "other"

leadCost?: number
sourceDetail?: string
respondedAt?: timestamp
quoteSentAt?: timestamp
bookedAt?: timestamp
lostAt?: timestamp
lostReason?: string
quoteAmount?: number
finalJobAmount?: number
actualJobTimeMinutes?: number
becameRecurring?: boolean
reviewRequested?: boolean
reviewReceived?: boolean
customerQualityScore?: 1 | 2 | 3 | 4 | 5
```

## Lead Statuses

Use a simple status pipeline:

```ts
leadStatus:
  | "new"
  | "needs_response"
  | "contacted"
  | "quote_needed"
  | "quote_sent"
  | "scheduled"
  | "won"
  | "lost"
```

## Lost Reasons

Track why leads do not convert:

```ts
lostReason:
  | "no_response"
  | "too_expensive"
  | "chose_someone_else"
  | "outside_service_area"
  | "wanted_sooner_than_available"
  | "bad_lead"
  | "job_not_fit"
  | "duplicate"
  | "other"
```

## Angi-Specific Tracking

Because Angi can charge per lead, ServicesOS should track Angi leads more carefully.

For Angi leads, capture:

- lead cost
- whether the lead responded
- whether the job booked
- quote amount
- final job amount
- whether the customer became recurring
- reason lost
- profit after lead cost

Example report:

```text
Angi leads this month: 10
Total Angi spend: $220
Booked jobs: 2
Cost per booked job: $110
Revenue from Angi jobs: $360
Recurring customers gained: 0
Recommendation: pause or cap Angi until conversion improves.
```

## Facebook-Specific Tracking

For Facebook leads, capture source details:

```ts
facebookSourceDetail:
  | "page_message"
  | "local_group"
  | "friend_share"
  | "facebook_recommendation"
  | "marketplace"
  | "other"
```

Facebook should be compared against Angi because it may produce cheaper, warmer local leads.

## Lead Inbox Screen

Add or improve a Lead Inbox screen.

Each lead card should show:

- name
- lead source
- service requested
- location
- pets
- status
- next step
- lead cost, if any

Lead card actions:

- copy response
- create quote
- schedule estimate/job
- mark lost
- convert to customer
- add note

## Quick Add Lead Flow

The beta lead intake form should be fast.

Minimum required fields:

- name
- phone or email
- lead source
- service type
- city/location
- status

Optional fields:

- bedrooms
- bathrooms
- square footage
- pets
- preferred date
- notes
- lead cost

Beta success rule:

```text
A new lead should be enterable in under 60 seconds.
```

## Paste-Message Parser

Later beta feature.

User pastes a Facebook, Angi, text, or website message into ServicesOS.

Example:

```text
Hi, I need a deep clean for a 3 bed 2 bath house. We have two dogs and I’m in Bolivar. Looking for next Friday if possible.
```

ServicesOS suggests:

```text
Service: Deep clean
Bedrooms: 3
Bathrooms: 2
Pets: Yes, two dogs
Location: Bolivar
Preferred date: next Friday
Status: Quote Needed
Suggested response: ...
```

This provides integration-like value before needing direct Meta or Angi API access.

## Response Templates

### Facebook First Response

```text
Hi! Thank you for reaching out to Aunt B’s Cleaning Services. I’d be happy to get you a quote.

Could you send me:
1. City/location
2. Number of bedrooms and bathrooms
3. Type of cleaning needed
4. Any pets?
5. When you’d like the cleaning done
6. Any areas needing extra attention?

Photos are also helpful if you’re comfortable sending them.
```

### Angi First Response

```text
Hi! This is Aunt B’s Cleaning Services. I saw your cleaning request through Angi and would be happy to help.

To give you the most accurate quote, could you confirm:
1. Number of bedrooms and bathrooms
2. Approximate square footage
3. Standard, deep, move-in/move-out, or recurring cleaning
4. Any pets?
5. Preferred date or timeframe
6. Any specific areas needing extra attention?
```

### Follow-Up Response

```text
Hi! Just checking in to see if you’re still needing help with your cleaning quote. I’d be happy to get you scheduled if the timing still works.
```

## Reports Needed

Create simple reports first.

### Lead Source Report

Show:

- leads by source
- booked jobs by source
- revenue by source
- average quote by source
- cost per lead
- cost per booked job
- recurring customers by source
- lost leads by source

### Angi ROI Report

Show:

- total Angi leads
- total Angi spend
- booked Angi jobs
- revenue from Angi jobs
- average revenue per Angi job
- cost per booked Angi job
- recurring Angi customers
- profit estimate after lead fees

### Facebook Report

Show:

- Facebook leads
- booked Facebook jobs
- revenue from Facebook jobs
- recurring Facebook customers
- best Facebook source detail

## GrowthAI Future Connection

This feature creates the foundation for future GrowthAI.

GrowthAI should eventually analyze ServicesOS data and recommend actions like:

```text
Facebook brought 14 leads, 5 booked, 2 became recurring.
Angi brought 8 paid leads, 1 booked, 0 became recurring.
Referral brought 3 leads, 3 booked, 2 became recurring.

Recommendation:
Pause Angi.
Increase Facebook local group posting.
Ask recent happy customers for referrals.
Target biweekly recurring cleans.
```

But for now:

```text
AI notices.
AI suggests.
Human approves.
System records.
```

## Beta Success Criteria

For Aunt B’s beta, this feature succeeds if:

1. Every Facebook and Angi lead can be tracked in ServicesOS.
2. Aunt B’s can see which leads converted.
3. ServicesOS shows whether Angi is profitable.
4. ServicesOS shows whether Facebook produces better leads.
5. Leads can be converted into quotes and jobs without re-entering data.
6. Lost leads have reasons attached.
7. Lead source reports help make a real business decision.

Main beta question:

```text
Can ServicesOS make Facebook and Angi leads easier to manage without forcing the business to change how it already works?
```

## Priority Order

### Phase 1 — Required for Beta

- Add lead source field
- Add lead cost field
- Add lead status pipeline
- Add lost reason field
- Add quick add lead flow
- Add Lead Inbox cards
- Add source summary report

### Phase 2 — Strong Beta Improvement

- Add Facebook/Angi response templates
- Add quote conversion from lead
- Add recurring conversion tracking
- Add customer quality score
- Add Angi ROI report
- Add Facebook source detail report

### Phase 3 — Later

- Paste-message parser
- AI suggested response
- AI lead quality score
- Follow-up reminders
- Google Business Profile tracking
- Website form auto-import

### Phase 4 — Future Integrations

- Meta/Facebook Messenger integration
- Angi lead integration
- Google Business Profile reviews/messages
- SMS/email lead import
- GrowthAI dashboard

## Product Principle

Do not build paid-platform integrations too early.

First, ServicesOS should prove it can answer:

```text
Where did this lead come from?
How much did it cost?
Did it book?
Was it profitable?
Did it become recurring?
Should the business keep using that source?
```

That is the foundation for ServicesOS growth intelligence and future GrowthAI.

## Implementation Guardrail

This should be treated as ServicesOS beta growth-intelligence planning.

It is not permission to build GrowthAI now.

Full GrowthAI remains parked until ServicesOS reaches customer-ready V1 and has real usage data.
