# ServicesOS Low-Overhead Cost Rules

Project: Stellar Logic AI / ServicesOS  
Status: Active ServicesOS operating rule  
Priority: Survival-mode cost control until revenue proves growth  
Last Updated: 2026-06-28

## Purpose

This document defines the cost-control rules for ServicesOS while Jamie is operating with almost no budget.

Core principle:

```text
Low overhead is not just survival.
Low overhead is how ServicesOS funds its own growth.
```

## Operating Rule

```text
Keep fixed costs as close to zero as possible.
Only allow costs to rise when customer revenue rises with them.
```

ServicesOS should not consume cash faster than it creates proof.

## Survival-Mode Rule

```text
If it costs money before revenue, avoid it unless it is absolutely required.
```

For wife beta and first customer, ServicesOS should aim for:

```text
Monthly infrastructure target: $0–$10
Emergency ceiling: $25
Anything above that needs a clear reason
```

Until ServicesOS has paying customers, even $25/month should feel like a warning light.

## Feature Cost Rule

Every new feature should be classified as:

- Free to operate
- Low-cost
- Usage-based cost
- Expensive/risky

## Free / Cheap Features

Prefer these:

- local demo mode
- manual payment tracking
- basic scheduling
- checklists
- customer records
- manual import/export
- simple dashboards
- founder-led support
- localStorage demo
- Markdown/spreadsheet tracking

## Usage-Based Features

Treat these carefully:

- photos
- AI estimates
- SMS
- email automation
- maps/routing
- payment processing
- file storage

## Expensive / Risky Features

Avoid until revenue supports them:

- live GPS
- AI at scale
- Tap to Pay complexity
- advanced route optimization
- heavy analytics
- full payroll/compliance automation
- paid CRM
- paid lead databases
- paid automation stack

## No-Spend List

Do not spend money on these before revenue:

| No-Spend Item | Why Avoid Now | When To Consider Later |
|---|---|---|
| Paid ads | Wastes money before message is proven | After conversion path works |
| Paid lead databases | Bad fit/spam risk | Maybe never |
| SEO agency | Too slow/expensive | After revenue |
| Marketing agency | Too expensive | After clear positioning/revenue |
| Paid CRM | Spreadsheet/Markdown is enough | After 20+ active leads |
| SMS automation | Recurring cost and compliance/support complexity | After customers request it repeatedly |
| AI at scale | Cost without proven need | After retention proof |
| Paid demo tools | localStorage demo is enough | After public launch |
| Paid analytics | Free/basic tracking is enough | After traffic matters |
| Paid support software | Email/text/manual is enough | After support load hurts |
| Trade shows | Expensive and broad | Much later |
| Swag | No ROI now | After brand/community proof |
| Expensive video | Interactive demo is better | After demo converts |
| Expensive website builder | Use existing low-cost stack | Avoid if possible |
| Influencer campaigns | Wrong stage | Maybe never |

## Current Feature Rules

### SMS

SMS should be:

```text
Off by default.
Manual/email-first.
Optional paid add-on later.
Tenant-level monthly cap.
Never unlimited.
```

### AI

AI should be:

```text
Off by default.
Manual trigger only if used.
Disabled in public demo.
Logged per use.
Limited by tenant.
```

Do not add paid AI calls to public demo or default workflows.

### Photos

Photos are useful but can become a storage cost risk.

Rules:

- compress before upload
- limit max images per job on starter plans
- use sample photos in public demo
- avoid real uploads in public demo
- delete orphaned uploads later
- keep original-size photos only if needed

Starter limits to consider later:

```text
Starter: 10 photos/job
Founder Access: 20 photos/job while testing
```

### Public Demo

Public demo must be almost free to run:

```text
localStorage fake backend
sample photos bundled with app
no Firebase writes
no Stripe
no SMS/email
no real uploads
no public account creation
no paid AI calls
```

### Stripe / Payments

Payments should be transparent.

Use:

```text
Customer pays cleaning business.
Stripe takes processing fee.
ServicesOS subscription is separate.
ServicesOS platform fee is reduced/waived early.
```

Avoid relying on a high platform fee before ServicesOS value is proven.

Recommended early platform fee:

```text
0%–1.5% early, or waived during Founder Access.
```

### Tap to Pay

Tap to Pay should wait until:

- core payments are stable
- a real customer asks for it
- transaction volume can justify complexity
- support burden is understood

## Revenue Reinvestment Ladder

Suggested reinvestment priorities:

| Monthly Revenue | Priority |
|---:|---|
| First $50/month | Cover hosting/tools only. |
| $100–$250/month | Keep app alive, pay basic software costs, maybe fund ChatGPT/Codex usage. |
| $500/month | More coding help, better testing, website polish. |
| $1,000/month | Dedicated developer budget starts becoming realistic. |
| $2,000+/month | Customer support, stronger infrastructure, more serious growth. |

## Cost Approval Rule

A feature that creates recurring cost must either:

1. be required for wife beta/customer retention, or
2. be paid for by the customer using it.

If neither is true, do not build it yet.

## Monthly Review Checklist

Review monthly:

- Firebase cost
- hosting cost
- storage cost
- Stripe fees and payment volume
- SMS cost, if any
- AI/API usage, if any
- domain/email/website costs
- coding assistant/tool costs
- customer revenue
- support time per customer

If cost rises without customer revenue or customer proof, stop and investigate.

## Final Rule

```text
Build lean.
Charge fairly.
Avoid recurring cost.
Reinvest early revenue into ServicesOS.
```
