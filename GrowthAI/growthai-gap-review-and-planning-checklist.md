# GrowthAI Gap Review and Planning Checklist

Document Status: Draft
Implementation Status: Parked / Future Planning
Last Updated: 2026-06-25
Implementation Repo: none yet
Related Commits:
- pending
Validation:
- Planning review only; no code changes
Remaining Follow-Ups:
- Locate any older GrowthAI notes if they exist outside this repo
- Promote to a full GrowthAI README only after ServicesOS beta-critical work is stable

## Priority Guardrail

GrowthAI is not the active build right now.

Current SLAI priority remains:

1. ServicesOS
2. ServicesOS wife beta testing
3. ServicesOS UI fine-tuning
4. ServicesOS payments / Stripe / Stripe Connect
5. ServicesOS Tap to Pay later
6. SLAI website
7. GrowthAI

This document exists to preserve GrowthAI thinking without distracting from ServicesOS.

## Current Review Status

No complete GrowthAI planning document was found during the initial repo/Drive search pass.

This means GrowthAI currently appears under-documented compared with ServicesOS.

This file captures what is likely missing so the idea can be revisited later.

## Working Definition

GrowthAI should be treated as a future SLAI growth and business-development intelligence layer.

Possible product direction:

```text
GrowthAI helps small businesses understand where growth is coming from, what follow-ups are needed, what campaigns or offers are working, and what actions the owner should approve next.
```

For ServicesOS specifically, GrowthAI could eventually become a module that helps cleaning businesses:

- Track lead sources.
- Improve quote follow-up.
- Identify lost quote patterns.
- Recommend customer reactivation campaigns.
- Suggest seasonal or recurring-service offers.
- Measure marketing return.
- Turn customer/job/payment data into owner-approved growth actions.

## Missing Core Documents

GrowthAI should eventually have these docs:

1. Product Overview
2. Ideal Customer Profile
3. Problem Statement
4. MVP Scope
5. ServicesOS Integration Plan
6. Data Sources and Events
7. Human Approval / AI Guardrails
8. Metrics and Success Criteria
9. Compliance / Consent / Messaging Rules
10. Pricing / Packaging Hypothesis
11. Future Roadmap

## Missing Product Decisions

### 1. Product Positioning

Need to decide whether GrowthAI is:

- A standalone SLAI product.
- A ServicesOS module.
- A shared engine reused across future OS products.
- All of the above, phased over time.

Recommended answer for now:

```text
GrowthAI starts as a ServicesOS module later, then becomes a reusable SLAI growth engine across future verticals.
```

### 2. First Target Customer

Need to define the first GrowthAI user.

Recommended first user:

```text
small owner-operator service businesses already using ServicesOS
```

Reason:

- ServicesOS already has leads, estimates, customers, jobs, and payments.
- GrowthAI can use real operational data instead of becoming a generic marketing tool.
- Owner approval remains central.

### 3. First Job To Be Done

GrowthAI should not start as broad marketing automation.

Recommended first job:

```text
Help the owner know who to follow up with, why, and what message/action to approve.
```

Examples:

- Quote sent but not accepted.
- Repeat customer inactive for 60+ days.
- Deep clean customer could convert to recurring service.
- Customer has pet/hair/clutter notes and may need recurring maintenance.
- Seasonal cleaning offer may fit a past customer.

### 4. Human Approval Rule

GrowthAI must not automatically spam customers.

Recommended rule:

```text
AI notices.
AI suggests.
Human approves.
System records.
```

GrowthAI can draft messages, recommend follow-ups, and explain why an action may help, but the owner should approve outbound communication.

### 5. Data Source Rule

GrowthAI should use first-party ServicesOS data first.

Useful ServicesOS data later:

- Lead source.
- Estimate status.
- Estimate amount.
- Quote sent date.
- Follow-up history.
- Job type.
- Job frequency.
- Customer notes.
- Property notes.
- Payment status.
- Customer lifecycle stage.
- Recurring vs one-time customer.
- Lost quote reasons if captured.

Do not require external ad-platform integrations for the first version.

### 6. Messaging / Consent Rule

GrowthAI may eventually suggest emails/SMS, but it needs communication guardrails.

Missing decisions:

- What channels are allowed first: email only, SMS later?
- How is customer consent captured?
- Where is opt-out stored?
- How are messages logged?
- Who approves messages?
- What happens if a message fails?

Recommended first version:

```text
Email suggestions only.
Owner approves before sending.
SMS is later because of cost and compliance.
```

### 7. Measurement Rule

GrowthAI should prove value with simple numbers.

Potential metrics:

- Follow-ups suggested.
- Follow-ups approved.
- Follow-ups sent.
- Quotes recovered.
- Inactive customers reactivated.
- One-time customers converted to recurring.
- Revenue influenced.
- Average time from quote to follow-up.
- Owner time saved.

### 8. UI Placement

Potential ServicesOS placement later:

- Dashboard widget: Growth Opportunities.
- Customers page: customer-specific growth suggestions.
- Estimate page: follow-up recommendations.
- Schedule page: recurring-service opportunities.
- Future GrowthAI tab only after enough value exists.

Recommended first placement:

```text
Small Dashboard widget or owner task list, not a full new section.
```

Reason:

- Avoid overbuilding.
- Put suggestions where the owner already works.

### 9. Owner Trust / Explainability

GrowthAI needs to explain its reasoning simply.

Example:

```text
Suggested action: Follow up with Sarah about recurring monthly cleaning.
Why: She booked a deep clean 45 days ago, has pet hair notes, and no recurring service is scheduled.
Suggested message: draft only; owner must approve.
```

### 10. Reusable Engine Later

GrowthAI should eventually be reusable across SLAI products:

- ServicesOS
- RetailOS
- PharmacyOS
- EducationOS
- Future appointment-service verticals

Reusable pattern:

```text
data events
→ opportunity detection
→ suggested action
→ human approval
→ communication/task creation
→ outcome tracking
```

## Recommended GrowthAI MVP Later

Do not build now.

When ServicesOS is stable, the smallest useful GrowthAI MVP would be:

```text
Growth Opportunities panel
```

Minimum features:

- Show 3-5 suggested follow-up opportunities.
- Explain why each opportunity appears.
- Let owner approve, dismiss, or edit.
- Create a follow-up task or email draft.
- Track whether the suggestion led to acceptance/payment/scheduling.

Example opportunities:

- Estimate sent 7 days ago with no response.
- Customer completed one-time clean and may fit recurring service.
- Customer inactive for 60 days.
- High-value customer has not booked again.
- Past customer has seasonal cleaning opportunity.

## Deferred GrowthAI Features

Do not build these in the first GrowthAI version:

- Automated outbound campaigns.
- Autonomous SMS sending.
- Ad buying.
- Social media auto-posting.
- Complex attribution modeling.
- Full CRM replacement.
- AI sales agent pretending to be the owner.
- External lead scraping.
- Cold outreach automation.
- Paid ad optimization.

These may be future ideas, but they are riskier and can distract from the first useful module.

## Risks To Avoid

- Turning GrowthAI into spam automation.
- Recommending actions without enough data.
- Hiding why a recommendation was made.
- Making customers feel like they are talking to a fake human.
- Building a generic marketing SaaS before ServicesOS proves the operating workflow.
- Adding SMS/compliance complexity too early.
- Creating a separate product before ServicesOS has real customers.

## Best Next Step Later

After ServicesOS wife beta and first real usage, create:

```text
GrowthAI/product-overview.md
GrowthAI/servicesos-growthai-mvp.md
GrowthAI/data-events-and-opportunity-model.md
GrowthAI/human-approval-and-messaging-guardrails.md
```

## Current Decision

GrowthAI is a strong future SLAI module, but it should stay parked until ServicesOS beta is stable.

The best future version is not generic marketing automation.

The best future version is:

```text
first-party business-growth intelligence
for small service owners
with human-approved actions
inside ServicesOS first
then reusable across SLAI products
```
