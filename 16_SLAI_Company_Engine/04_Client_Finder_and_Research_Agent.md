# 04 — Client Finder and Research Agent

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define how Client Finder and Research Agent support SLAI growth without becoming uncontrolled automation.

---

## Core Roles

### Client Finder

Client Finder identifies potential good-fit customers.

It answers:

- Who might need ServicesOS?
- What business type are they?
- Where are they located?
- Are they likely a good fit?
- Should Jamie research/contact them?

### Research Agent

Research Agent studies a selected lead or market area.

It answers:

- What does this business appear to do?
- What pain points might they have?
- What service vertical are they in?
- What outreach angle may make sense?
- What should Jamie know before contacting them?

---

## Relationship to GrowthAI

Client Finder and Research Agent are GrowthAI support systems.

```text
Client Finder finds possible leads.
Research Agent explains the lead.
GrowthAI turns the research into human-approved outreach.
SLAI OS surfaces the next action.
```

---

## Phase 1: Manual/Assisted Workflow

Early workflow should be simple and human-controlled.

```text
Jamie enters a lead or target category.
Client Finder suggests possible businesses.
Research Agent summarizes a selected business.
GrowthAI drafts outreach.
Jamie approves or edits.
SLAI OS tracks follow-up.
```

No autonomous mass outreach.

---

## Lead Fit Criteria

Potential fit signals for ServicesOS:

- Service business
- Small team or solo operator
- Repeating customer workflow
- Scheduling pain
- Manual quote process
- Needs customer follow-up
- Could benefit from payments/checklists/customer portal
- Local business with limited software stack

Bad-fit signals:

- Enterprise complexity too early
- No service workflow
- Very custom regulated needs before product maturity
- Needs features far outside ServicesOS beta scope

---

## Research Output

A useful research result should be short and actionable.

Suggested fields:

- Business name
- Location
- Business type
- Likely customer segment
- Possible pain points
- Why ServicesOS may help
- Outreach angle
- Confidence level
- Notes for Jamie
- Recommended next action

Example output:

```text
Lead: ABC Cleaning
Type: residential cleaning
Likely pain: quoting, scheduling, customer follow-up
Fit: medium/high
Recommended action: send short founder-led message about quote/admin workflow
```

---

## Human Approval

Client Finder and Research Agent should assist, not decide.

```text
AI can find.
AI can research.
AI can suggest.
Jamie approves who to contact and what to say.
```

---

## SLAI OS Integration Later

SLAI OS can surface:

- New leads ready for review
- Research completed
- Follow-up due
- High-fit lead waiting on Jamie
- Outreach draft needs approval

Example:

```text
SLAI OS Today:
3 leads ready for review
2 follow-ups due
1 high-fit prospect needs outreach approval
```

---

## MVP Boundary

Do not build early:

- autonomous outreach
- scraping-heavy workflows
- full CRM replacement
- ad management
- complex enrichment pipelines
- automated qualification decisions

First useful version:

```text
Manual lead entry
AI-assisted research
Draft outreach
Follow-up tracking
Human approval
```

---

## Future Planning Only

```text
Plan deeply.
Build later.
ServicesOS remains active priority one.
```
