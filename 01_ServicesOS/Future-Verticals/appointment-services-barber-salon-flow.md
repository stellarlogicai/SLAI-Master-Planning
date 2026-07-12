# ServicesOS Future Vertical: Appointment Services / Barber & Salon Flow

Document Status: Complete
Implementation Status: Future Roadmap
Last Updated: 2026-06-24
Implementation Repo: N/A
Planning Repo: `stellarlogicai/SLAI-Master-Planning`
Related Commits:
- pending future implementation
Validation:
- planning observation only
Remaining Follow-Ups:
- revisit after ServicesOS cleaning beta is stable and at least one paying customer validates the core workflow

## Purpose

Capture the future ServicesOS opportunity around appointment-based service businesses such as barbershops, salons, nail techs, massage therapists, estheticians, tattoo artists, pet groomers, personal trainers, and other appointment-driven local services.

This is a future vertical note, not an active ServicesOS build task.

## Origin / Observation

Jamie has previously discussed a barbershop vertical. A fresh observation came from Jamie's brother's barber shop using Booksy.

Observed pain point:

```text
Booksy feels clunky and appears to have a weird customer/user route.
```

This suggests there may be room for a cleaner ServicesOS-style appointment flow for small service businesses that need booking, customer history, staff scheduling, payments, tips, and reminders without bloated or confusing UX.

## Product Opportunity

The opportunity is not simply to copy a barber booking app.

The larger insight:

```text
Small service businesses are still stuck using clunky vertical SaaS.
```

A future ServicesOS appointment mode could focus on:

- simpler booking flow
- cleaner owner dashboard
- better staff scheduling
- better payment/tip handling
- repeat-client history
- reminders and no-show tracking
- service menu management
- customer preferences and notes
- review and rebooking prompts
- lightweight analytics

## Shared ServicesOS Backbone

Appointment businesses share much of the ServicesOS foundation:

- customer profiles
- service menu / service catalog
- booking and scheduling
- staff assignment
- reminders
- payments
- tips
- reviews
- repeat customer tracking
- analytics
- owner dashboard

This supports the long-term idea that ServicesOS can become a service-business operating system with different workflow modes rather than separate unrelated products.

## Workflow Difference From Cleaning

Cleaning workflow:

```text
Lead -> Estimate -> Approval -> Schedule -> Crew -> Job -> Payment
```

Appointment-services workflow:

```text
Service Menu -> Pick Staff -> Pick Time -> Confirm -> Appointment -> Payment/Tip -> Rebook
```

The backend concepts overlap, but the front-end route and owner/customer experience are different enough that the vertical should be designed deliberately later.

## Potential Niches

Appointment-based ServicesOS may apply to:

- barbershops
- hair salons
- nail techs
- massage therapists
- estheticians
- tattoo artists
- piercers
- pet groomers
- personal trainers
- small wellness studios
- mobile detailers with appointment slots
- independent service providers with repeat clients

## Possible Future Product Names

Do not choose a final name yet.

Possible labels for planning only:

- ServicesOS Appointment Mode
- AppointmentOS
- BarberOS
- SalonOS
- ChairOS
- BookingOS

Recommendation for now: keep it under `ServicesOS Future Vertical: Appointment Services` until the core ServicesOS product is stable.

## MVP Concepts For Later

A future MVP should be simple and owner-focused:

1. Business profile
2. Service menu
3. Staff/chair setup
4. Public booking route
5. Customer profile and visit history
6. Appointment calendar
7. Confirm/reschedule/cancel flow
8. Payment/tip capture
9. Reminder messages
10. Rebook prompt
11. Basic dashboard

Do not start with advanced marketplace features, public discovery, ads, influencer tools, or complex membership systems.

## UX Principle

The key differentiator should be clarity.

A customer should quickly understand:

```text
What service am I booking?
Who am I booking with?
What time is available?
What will it cost?
How do I confirm?
How do I rebook?
```

An owner should quickly understand:

```text
Who is coming in?
Which staff member is booked?
Who has paid?
Who no-showed?
Who should be prompted to rebook?
How is the business performing?
```

## Guardrails

Do not build this now.

This should not distract from ServicesOS cleaning beta.

Do not promote this to a coding task until:

- ServicesOS cleaning beta is stable
- wife beta has produced real workflow feedback
- at least one paying ServicesOS customer validates the core workflow
- current beta smoke tests exist and pass
- Jamie explicitly promotes appointment-services work

## Future Research Questions

When this vertical becomes active, research:

- what Booksy users dislike most
- where the customer booking route feels clunky
- how barbers/salons handle tips and repeat clients
- what no-show prevention features matter most
- whether independent barbers need full POS or only lightweight payments
- whether chair rental / booth rental needs to be tracked
- whether staff manage their own schedules or owner manages everything
- whether customers strongly prefer app-based booking or web/SMS booking

## Current Status

Documented for future planning only.

Current ServicesOS priority remains:

```text
Finish wife-beta smoke tests.
Validate owner workflow.
Stabilize cleaning-business beta.
Then revisit future verticals later.
```
