# ServicesOS Vertical Strategy

Project: Stellar Logic AI / ServicesOS  
Status: Active ServicesOS planning  
Priority: Supports ServicesOS wife beta and first-customer strategy  
Last Updated: 2026-06-28

## Purpose

This document preserves the ServicesOS vertical-entry research and decision logic.

ServicesOS started cleaning-first because Jamie's wife provides a real beta user, real workflow, real feedback, and real credibility. That does not mean ServicesOS should become generic cleaning software forever.

The goal is to use cleaning as the first proof environment, then expand only where the current ServicesOS foundation naturally fits.

## Core Decision

Do not abandon cleaning yet. Do not worship cleaning either.

The safest path is:

```text
Cleaning proof first.
Adjacent cleaning-like verticals second.
Generic ServicesOS later.
```

## First External Wedge

The first external wedge is not all cleaning businesses.

The first wedge is:

```text
Small owner-operated cleaning businesses doing recurring residential cleaning,
move-out cleaning, real-estate prep cleaning, and short-term rental turnover-style work.
```

## Why This Wedge

This wedge has the best mix of:

- wife beta proof
- strong workflow fit
- reachable customers
- low product change
- recurring revenue potential
- photo/checklist proof value
- real payment tracking need
- local referral access
- easy demo flow

## Ideal First Customer

The best first customer is a local or relationship-based cleaning owner who:

- has recurring clients
- has 1–5 helpers
- uses texts, calendars, paper, spreadsheets, Square, QuickBooks, Wave, Cash App, Venmo, or memory
- struggles with notes, photos, job proof, helper accountability, scheduling, estimates, or payment status
- is willing to give feedback
- is not already happy with mature software
- wants one recurring workflow, not a giant system

## Customers To Avoid Early

Avoid early:

- franchises
- large commercial janitorial companies
- multi-location maid companies
- cleaning companies that need payroll immediately
- cleaning companies that need advanced SMS marketing immediately
- cleaning companies already happy with Jobber, ZenMaid, Launch27, BookingKoala, or Housecall Pro
- bargain users who will not pay after a free trial
- owners with no recurring clients

## Top Ranked Verticals

Strategic scoring used:

- Pain intensity: 20
- ServicesOS workflow fit: 20
- Willingness to pay: 15
- Ease of customer acquisition: 15
- Competition difficulty: 10
- Recurring revenue potential: 10
- Required product changes: 10

| Rank | Vertical | Score | Confidence | Near-Term Verdict |
|---:|---|---:|---|---|
| 1 | Short-term rental turnover cleaning | 86 | Medium | Best pain/workflow fit, but Turno-style competition exists. |
| 2 | Residential / move-out / real-estate prep cleaning | 84 | High | Best first external path because wife beta gives direct proof. |
| 3 | Carpet cleaning | 80 | Medium | Strong fit, higher ticket, fewer recurring visits. |
| 4 | Mobile detailing | 78 | Medium | Strong photo/proof/payment fit, but auto-specific tools exist. |
| 5 | Window washing | 76 | Medium | Good cleaning-adjacent fit; seasonal but simple. |
| 6 | Pressure washing | 75 | Medium | Good estimate/photo/deposit fit; seasonal. |
| 7 | Lawn care | 73 | Medium | Huge recurring market, but route density/weather/seasonality create product gaps. |
| 8 | Commercial cleaning / janitorial | 72 | Medium | Strong recurring pain, but more complex contracts/inspections/overnight work. |
| 9 | Junk removal | 71 | Medium | Simple workflow, lower recurring potential. |
| 10 | Pool service | 71 | Medium | Strong recurring, but needs chemical/service logs and route workflows. |
| 11 | Property maintenance | 70 | Medium | Good pain, too broad early. |
| 12 | Handyman | 69 | Medium | High pain, but estimates/materials/scope vary too much. |
| 13 | Pest control | 68 | Medium | High willingness to pay, but compliance/treatment logs create product gaps. |
| 14 | Home maintenance | 67 | Medium | Too broad unless narrowed. |
| 15 | Mobile pet grooming | 65 | Medium | Good recurring mobile market, but pet-specific software is strong. |
| 16 | Painting | 63 | Medium | Higher ticket but project-heavy, less recurring. |
| 17 | Appliance repair | 60 | Low/Medium | Higher value, but parts/equipment/diagnostics gaps. |
| 18 | HVAC / plumbing / electrical | 58 | High | Strong markets, wrong early target. |
| 19 | Moving services | 55 | Low/Medium | Scheduling/payment fit, but less recurring and different ops. |
| 20 | Landscaping projects | 54 | Medium | Too project/material/crew-heavy for current V1. |

## Near-Term Vertical Order

1. Residential / move-out / real-estate prep cleaning
2. Short-term rental turnover cleaning
3. Carpet cleaning
4. Mobile detailing
5. Window washing / pressure washing

## Avoid Early

Avoid these until ServicesOS has real retained customer proof:

- HVAC
- plumbing
- electrical
- pest control
- pool service
- large commercial janitorial
- landscaping projects
- appliance repair
- moving services
- mobile pet grooming

These markets may be good later, but they pull ServicesOS away from the current V1 workflow.

## Cleaning Reality Check

Cleaning software is saturated.

ServicesOS should not try to pull happy Jobber, ZenMaid, Launch27, BookingKoala, or Housecall Pro users away in the first stage.

ServicesOS can win:

- cleaners using paper/texts/spreadsheets
- cleaners using Square/QuickBooks/Wave only
- solo owners adding their first helper
- cleaners doing recurring plus move-out jobs
- cleaners who hate bloated software
- cleaners who want hands-on founder support
- cleaners who need job proof/photos/checklists more than marketing automation

## Best Positioning

```text
Simple job workflow software for small cleaning owner-operators.
```

Better homepage direction:

```text
Run cleaning jobs from estimate to payment without losing notes, photos, schedules, or payment status in texts.
```

## Product Implications

ServicesOS should support vertical expansion through templates, not separate products.

Build core-ready primitives:

- Customer
- Property
- ServiceType
- Estimate
- Job
- Schedule
- Assignment
- ChecklistTemplate
- ChecklistItem
- JobNote
- JobIssue
- MediaAttachment
- PaymentStatus
- RecurringRule
- ReportEvent

Use templates for vertical differences:

| Capability | Core-Ready Design | First Cleaning Template |
|---|---|---|
| Service type templates | Generic serviceType with category and default checklist | Standard clean, deep clean, move-out clean |
| Estimate templates | Reusable line items/add-ons | rooms, bathrooms, pets, clutter, move-out |
| Checklist templates | Vertical-specific checklist sets | bathroom, kitchen, bedrooms, turnover |
| Recurring schedule templates | Generic recurring rule | weekly/biweekly/monthly |
| Photo proof templates | Before/after/photo categories | kitchen before, bathroom after, issue photo |
| Job status model | Generic statuses | scheduled, assigned, in progress, completed, reviewed, paid |
| Payment status model | Generic payment states | deposit requested/paid, final requested/paid |
| Customer/property notes | Generic notes + tags | pets, access, alarm, supplies, lockbox |
| Vertical fields | JSON/config fields, not hardcoded tables yet | cleaning difficulty, pet hair, access instructions |
| Reporting events | Generic event log | estimate created, job completed, photos uploaded |
| Onboarding/import templates | CSV format per vertical | cleaning customer import |

## Do Not Overbuild Yet

Avoid building now:

- route optimization engine
- payroll engine
- chemical compliance engine
- inventory system
- equipment tracking
- multi-vertical marketplace
- AI estimating
- vertical-specific apps
- full customer portal
- custom field builder with unlimited complexity

## Wife Beta Tracking Questions

During wife beta, track:

- Did the workflow actually help wife run jobs?
- Which part saved the most time?
- Which part caused frustration?
- Did checklists matter?
- Did photos matter?
- Did notes/access instructions matter?
- Did recurring jobs matter?
- Did owner review matter?
- Did payment tracking matter?
- Did it reduce text/message chaos?
- Would another cleaner understand it without Jamie explaining everything?
- Which job type felt most valuable: recurring clean, deep clean, move-out, or turnover?
- What would wife pay for if it were not built by Jamie?
- What would make her stop using it?

## Final Rule

```text
Cleaning proof first.
Adjacent cleaning-like verticals second.
Generic ServicesOS later.
```
