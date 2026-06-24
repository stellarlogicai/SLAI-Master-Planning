# ServicesOS Schedule Planning + Crew Roll Call

Status: Product design notes
Date: 2026-06-24
Owner: Jamie Brown / Stellar Logic AI

## Core Problem

ServicesOS should not assume:

```text
Scheduled = actually working
```

A person can be assigned to a job or route, but until they confirm, ServicesOS should treat them as unconfirmed.

This matters because:

- a helper may call out
- the driver may not be available
- customer time slots should not be promised too early
- a day planned for two people may become unsafe or overloaded for one person
- the owner needs time to adjust before customers are notified

## Core Product Decision

Scheduling should have two phases:

```text
Draft Schedule
↓
Confirmed Schedule
```

The system should compile the day's jobs, crew, equipment, estimated durations, and route before customers are told final time slots.

## Draft Schedule

Draft Schedule is internal.

The owner can:

- review approved jobs
- place jobs on a target day
- assign crew
- pick/confirm driver
- request crew confirmation
- review estimated duration
- review equipment needs
- review route/time-window suggestions
- adjust before customer notification

Customer-facing status can be:

```text
Request received
Preferred window noted
Final time pending confirmation
```

## Confirmed Schedule

Confirmed Schedule happens after the owner approves the day plan.

Before confirming customer time slots, ServicesOS should verify:

- crew is confirmed or shortage is acknowledged
- driver/GPS source is confirmed or fallback is selected
- route order is acceptable
- job durations are realistic for crew size
- equipment checklist is reviewed
- customer windows are still feasible

Then the customer can receive a confirmed window.

Example:

```text
Your cleaning is scheduled for Tuesday between 10:00 AM and 12:00 PM.
```

Use windows instead of exact arrival times, especially early.

## Customer Time Slot Strategy

Avoid promising exact customer times too early.

Preferred customer-facing flow:

```text
Customer requests preferred window
↓
Owner reviews jobs
↓
ServicesOS compiles day
↓
Crew confirms
↓
Route/time slots are finalized
↓
Customer gets confirmed arrival window
```

Suggested customer window formats:

```text
Morning
Midday
Afternoon
Evening
```

or:

```text
8:00-10:00
10:00-12:00
12:00-2:00
2:00-4:00
```

## Crew Roll Call

Before finalizing the route, ServicesOS should perform a crew roll call.

Example:

```text
Today's Crew

Wife — Confirmed
Helper — Waiting for confirmation
Extra Cleaner — Not confirmed
```

The system should ping assigned crew members:

```text
You are scheduled today for Brown Cleaning Team.
Confirm you are working today.

[Confirm]
[Running Late]
[Can't Work]
```

If a non-driver employee is assigned, that person's phone should still be pinged to confirm they are actually working.

The system should not rely only on the driver/GPS phone.

## Crew Member Statuses

Suggested statuses:

```text
Assigned
Confirmation Sent
Confirmed
Running Late
Unavailable
No Response
Checked In
Active
Completed
```

## Route Statuses

Suggested statuses:

```text
Draft
Crew Pending
Ready
Started
In Progress
Completed
Needs Rework
```

## Job Scheduling Statuses

Suggested statuses:

```text
Requested
Needs Review
Draft Scheduled
Crew Pending
Ready to Confirm
Customer Confirmed
In Progress
Completed
Reschedule Needed
Canceled
```

These are conceptual planning statuses. Do not migrate backend status fields until implementation is planned carefully.

## Call-Out Handling

A call-out should trigger a workflow, not just become a note.

Example:

```text
Helper marked: Can't Work
```

ServicesOS should detect:

```text
Crew shortage detected
```

Then show owner options:

```text
Recalculate route with remaining crew
Find replacement
Move lowest-priority job
Shorten route
Delay customer confirmation
Notify affected customers manually
```

For beta, a simple version is enough:

```text
Helper called out.
Today was planned for 2 people.
Review schedule before confirming customer times.
```

## Route Should Not Finalize Until Crew Is Known

The route planner should use crew availability as an input.

Example:

```text
3 jobs scheduled
Expected crew: 2 people
Only 1 confirmed
```

ServicesOS should warn:

```text
This route was planned for 2 people, but only 1 is confirmed.
Estimated job times may be too short.
```

Owner options:

```text
Recalculate as solo route
Find replacement
Move one job
Delay customer confirmation
```

## AI Day Planner Role

AI should help the owner compile the day before customers are told final time slots.

AI should consider:

- approved jobs
- requested customer windows
- fixed vs flexible jobs
- job difficulty
- estimated cleaning duration
- drive time
- crew size
- crew confirmations
- driver/GPS source
- equipment needed
- owner preferences
- safety limits
- profitability

AI should produce a suggested day plan, not automatically finalize it.

Owner approves before customer notifications go out.

## AI Day Planner Questions

The AI should help answer:

```text
Can we safely do these jobs today?
Who should go?
What order should we do them in?
What equipment is needed?
What time window should we tell each customer?
What changes if someone calls out?
```

## Example AI Warning

```text
This day was planned for 2 cleaners, but only 1 has confirmed.
Suggested action: reduce today's workload, extend time windows, or reschedule the lowest-priority job.
```

## Main System vs Employee App

The main ServicesOS web app should be the source of truth.

Main system responsibilities:

```text
Create schedule
Assign crew
Build route
Confirm customer time slots
Monitor day
Handle call-outs
Review job timeline
Payments/settings/admin
```

Employee app responsibilities:

```text
Confirm shift
Confirm availability
Provide GPS source
View assigned jobs
Start route
Mark arrived
Start job
Complete job
Depart
Upload photos
Complete checklist
Add notes
```

Even if the employee app comes later, the main ServicesOS data model should support these concepts now.

## Why This Matters

This is the real operational core.

The route feature should not start with maps. It should start with:

```text
Who is actually working today?
Can we safely complete this route?
What time should we tell the customer?
```

That is what separates ServicesOS from a basic calendar or route app.

## Implementation Guardrail

Do not make this the first Codex task.

The first coding task should remain sidebar cleanup and visible workflow verification.

Then Schedule can be improved in layers:

1. Schedule grouping
2. jobs/crews tabs
3. draft vs confirmed schedule states
4. crew roll call
5. Route Helper job cards
6. event-based GPS timestamps
7. AI Day Planner suggestions
8. customer confirmation messaging
