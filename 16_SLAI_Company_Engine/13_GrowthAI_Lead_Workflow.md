# 13 — GrowthAI Lead Workflow

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define the future lead workflow for GrowthAI inside the SLAI Company Engine.

---

## Core Goal

GrowthAI should help SLAI find and convert good-fit customers without becoming spammy or uncontrolled.

```text
Find good leads.
Research the lead.
Draft a thoughtful message.
Jamie approves.
Track follow-up.
Learn from outcome.
```

---

## Workflow Overview

```text
Lead created
↓
Research needed
↓
AI-assisted research summary
↓
Fit reviewed
↓
Outreach angle suggested
↓
Draft created
↓
Jamie reviews/approves
↓
Outreach sent manually or through approved workflow later
↓
Follow-up scheduled
↓
Outcome recorded
↓
GrowthAI learns what worked
```

---

## Step 1 — Lead Capture

Lead can come from:

- Jamie manually entering a business
- Client Finder suggestions later
- Website contact form later
- Referral
- ServicesOS customer network
- Local research
- Future inbound interest

Minimum fields:

- business name
- business type
- location
- source
- website or contact link if known
- notes

---

## Step 2 — Research Queue

New leads should enter a research queue before outreach.

Research queue statuses:

- Research Needed
- Research In Progress Later
- Summary Ready
- Reviewed
- Archived

The goal is to avoid contacting businesses with generic messages.

---

## Step 3 — Research Summary

Research Agent should produce a short useful summary.

Fields:

- business summary
- likely pain points
- why ServicesOS may help
- possible objections
- outreach angle
- confidence level
- recommended next action

Example:

```text
Business Type: Residential cleaning
Likely Pain: quoting, scheduling, customer follow-up
ServicesOS Angle: replace scattered admin tools with one cleaning-business workflow
Recommended Action: founder-led message asking about quote/admin workflow pain
```

---

## Step 4 — Fit Review

Fit should be reviewed before outreach.

Fit statuses:

- High Fit
- Medium Fit
- Low Fit
- Not a Fit
- Needs More Info

High-fit signals:

- service business
- recurring customer workflow
- manual scheduling
- manual quoting
- visible growth opportunity
- likely small business admin burden

Low-fit signals:

- not service-based
- too enterprise-heavy
- needs complex features ServicesOS does not support yet
- no clear operational pain

---

## Step 5 — Outreach Draft

AI can draft messages, but Jamie approves before use.

Draft types:

- cold email
- LinkedIn message
- text message template
- call script
- follow-up message
- referral request

Draft should include:

- short intro
- reason for reaching out
- relevant pain point
- simple ServicesOS value
- low-pressure ask

---

## Step 6 — Human Approval

Early rule:

```text
AI drafts.
Jamie reviews.
Jamie edits.
Jamie approves.
Message is sent only after approval.
```

This protects SLAI's brand and avoids spammy outreach.

---

## Step 7 — Follow-Up

After outreach, GrowthAI should help schedule a follow-up.

Follow-up fields:

- leadId
- due date
- reason
- suggested message
- status
- outcome

Follow-up statuses:

- Scheduled
- Due
- Draft Ready
- Completed
- Skipped
- Closed

---

## Step 8 — Outcome Tracking

Track outcomes so the system can improve.

Outcomes:

- No response
- Responded interested
- Responded not interested
- Demo requested
- Trial/beta interest
- Not a fit
- Converted
- Follow-up later

This creates the learning loop.

---

## Step 9 — Learning Loop

Later, GrowthAI can learn from:

- which business types respond
- which outreach angles work
- which services are requested
- which objections appear often
- which leads convert
- which follow-ups revive interest

This should inform future recommendations, not replace human judgement.

---

## SLAI OS Integration

SLAI OS should surface only the most useful actions.

Examples:

```text
3 leads need research.
2 follow-ups are due.
1 outreach draft needs Jamie approval.
1 lead became high fit after research.
```

SLAI OS should not flood Jamie with every possible lead.

---

## MVP Boundary

First version later:

```text
Manual lead entry
Research notes
Outreach draft
Human approval
Follow-up date
Outcome tracking
```

Not first version:

- mass outreach
- autonomous sending
- advanced enrichment
- paid ads
- automated qualification decisions
- complex CRM replacement

---

## Future Planning Only

```text
This is the future workflow plan.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes GrowthAI work.
```
