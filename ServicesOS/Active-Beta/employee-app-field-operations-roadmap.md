# ServicesOS Employee App + Field Operations Roadmap

Status: Product design notes
Date: 2026-06-24
Owner: Jamie Brown / Stellar Logic AI

## Why This Exists

Route, crew, employee, GPS, and job timeline work should not be forgotten or treated as a distant unrelated feature.

Even if the employee app comes later, the main ServicesOS system needs to be designed around field operations now.

The employee app will eventually become the field interface for:

- crew confirmation
- route participation
- driver/GPS source
- job timeline events
- checklists
- photos
- notes
- time/mileage records
- employee guidance

The main web app remains the owner/admin command center.

## Product Principle

The main system owns the truth.

The employee app collects field data.

```text
Main ServicesOS web app = plan, approve, monitor, review
Employee app = confirm, navigate, execute, record
```

Do not build the main app with assumptions that block the employee app later.

## Main ServicesOS Web App Responsibilities

The owner/admin system should handle:

- create jobs
- approve estimates
- assign target day/window
- build draft schedule
- assign crew
- select driver/GPS source
- request crew roll call
- review AI Day Planner suggestions
- approve final customer time windows
- monitor active jobs/routes
- handle call-outs
- review job timeline
- review payroll/time/mileage
- review profitability
- manage customer messaging
- manage settings/payments/company rules

## Employee App Responsibilities

The employee app should eventually handle:

- view assigned shifts/jobs
- confirm working today
- mark running late
- mark cannot work
- identify driver/GPS source when assigned
- start route
- open directions
- mark arrived
- start job
- complete checklist
- upload photos
- add job notes
- complete job
- depart / next stop
- report issues
- confirm breaks later
- capture GPS/timestamps during active workflows

## Crew Confirmation

Every assigned employee should confirm their participation.

The system should not assume that because someone is scheduled, they are actually working.

Employee app confirmation options:

```text
Confirm
Running Late
Can't Work
```

If the employee app is not available yet, fallback options can be SMS/email links or owner manual confirmation.

## Driver + GPS Source

A route should have one active GPS source.

Usually this is the driver, but it must be selectable.

The employee app should support:

- driver confirmation
- GPS permission prompt
- active route tracking mode
- manual fallback if GPS fails

Rules:

- GPS should only run during active route/job workflows.
- Do not silently track employees.
- Show clear copy explaining when location is active.
- If GPS fails, allow business/home-base or manual starting address fallback.

## Field Workflow

The employee app should guide the worker through one obvious next step at a time.

Example active job flow:

```text
Start Route
↓
Open Directions
↓
Arrived
↓
Start Job
↓
Checklist / Photos / Notes
↓
Complete Job
↓
Depart / Next Stop
```

The UI should avoid showing too many actions at once.

Primary action should be obvious.

## Job Timeline Events

The employee app should record job events into the main system:

```text
shiftConfirmedAt
routeStartedAt
arrivedAt
jobStartedAt
checklistCompletedAt
photosUploadedAt
jobCompletedAt
departedAt
routeEndedAt
```

Each event should capture:

- timestamp
- employeeId
- jobId / routeId
- GPS location if available
- device/source
- manual override flag if edited later

## Employee AI Assist

AI should help employees do the job better, not replace their judgment.

Examples:

```text
This job has pets and heavy dust. Bring pet hair tool and extra microfiber towels.
```

```text
This is a recurring customer. They prefer bathroom first and no strong fragrance products.
```

```text
You are running behind the planned route. Ask owner before sending customer message.
```

```text
Deep clean checklist is longer than standard clean. Confirm all add-ons before completing.
```

## Owner AI + Employee App Connection

The owner-facing AI Day Planner can produce the plan.

The employee app executes the approved plan.

Example:

```text
Owner approves AI Day Plan
↓
Employee app receives assigned jobs, route, equipment checklist, and notes
↓
Employee confirms shift
↓
Route/job events are recorded
↓
Owner reviews timeline, payroll, mileage, and job cost
```

## Employee App MVP Later

When promoted, the first employee app MVP should focus on:

1. login by employee
2. view today's assigned jobs
3. confirm shift
4. show crew/driver assignment
5. start route
6. open directions
7. mark arrived
8. start job
9. complete job
10. depart / next stop
11. basic notes/photos if simple

Do not start with advanced payroll, chat, training, or full automation unless the core route/job flow works.

## Main System Requirements Before Employee App

Before building the employee app, ServicesOS should support these concepts in the main data model/UI:

- employees
- crews
- assignedCrew on jobs/routes
- driver/GPS source
- draft vs confirmed schedule
- crew confirmation status
- route status
- job timeline events
- owner approval before customer time slots
- payroll/job-cost review placeholders

## Future Employee App Features

Later features:

- checklists by service type
- training module access
- supplies/equipment reminders
- before/after photo requirements
- issue reporting
- customer not home flow
- break/lunch tracking
- mileage tracking
- push notifications
- team chat
- route changes
- customer ETA messages with owner approval rules
- performance summaries
- employee certification/training status

## Guardrail

Do not let the employee app become scope creep before ServicesOS web beta is stable.

But do design the main system so the employee app has a clean path later.

The current order should remain:

1. sidebar cleanup and visible workflow verification
2. Schedule foundation
3. crews and crew confirmation
4. Route Helper job cards
5. event-based GPS/job timeline
6. employee app MVP
