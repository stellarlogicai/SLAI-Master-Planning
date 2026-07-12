# 23 — Lead Scoring Model

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define a simple future lead scoring model for GrowthAI that helps Jamie prioritize good-fit prospects.

---

## Core Rule

Lead scoring should help prioritize attention. It should not make final decisions.

```text
AI can suggest fit.
Jamie decides who to contact.
```

---

## Scoring Categories

### 1. Business Fit

Does the business match ServicesOS or another SLAI product?

High score signals:

- service business
- cleaning, lawn care, laundry, handyman, home services, etc.
- needs scheduling or quoting
- has recurring customers

### 2. Pain Fit

Does the business likely have a problem SLAI can solve?

Signals:

- manual admin work
- scattered tools
- slow quoting
- missed follow-ups
- scheduling friction
- payment friction
- employee task tracking issues

### 3. Timing Fit

Is now a good time to contact them?

Signals:

- visible growth
- hiring
- new service launch
- weak online operations
- seasonal demand
- recent customer activity

### 4. Ability to Pay

Can the business likely afford software?

Signals:

- established business
- recurring customers
- visible service volume
- multi-person team
- professional online presence

### 5. Recurring Revenue Potential

Would this customer likely stay if the product works?

Signals:

- ongoing service workflow
- repeat customers
- monthly admin needs
- payment/scheduling/checklist needs

### 6. Relationship / Referral Potential

Could this lead create more opportunities?

Signals:

- local network
- related service providers
- community reputation
- friend/family connection
- strong referral possibility

---

## Simple Score Shape

Use a simple score first:

```text
Business Fit: 1–5
Pain Fit: 1–5
Timing Fit: 1–5
Ability to Pay: 1–5
Recurring Potential: 1–5
Referral Potential: 1–5
```

Total possible score:

```text
30 points
```

Suggested interpretation:

```text
24–30: High Fit
17–23: Medium Fit
10–16: Low Fit
Below 10: Not a priority
```

---

## Confidence Level

Fit score should also include confidence:

```text
High confidence:
Strong evidence from research.

Medium confidence:
Some evidence, needs Jamie review.

Low confidence:
Guess based on limited information.
```

---

## Recommended Action

Lead score should produce a recommended action:

- Research more
- Draft outreach
- Follow up later
- Park for now
- Not a fit
- Ask for referral path

---

## MVP Boundary

First future version:

```text
Manual scoring
AI-suggested score later
Jamie review required
Simple high/medium/low fit labels
```

Do not build complex ML scoring first.

---

## Future Planning Only

```text
This is a future scoring model.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes GrowthAI work.
```
