# ServicesOS Route Helper, Crew Scheduling, GPS, Mileage, and Job Timeline Design

Status: Design notes — discuss further before implementation
Date: 2026-06-24
Owner: Jamie Brown / Stellar Logic AI

## Why This Matters

Routing is not just a future convenience feature for ServicesOS. It may be beta-critical because:

- Jamie's wife may have health conditions that make driving unsafe sometimes.
- The business may need a helper/employee early.
- Jobs may be solo, two-person, three-person, or larger crew jobs.
- A team can clean more jobs with less physical strain.
- Directions, mileage, arrival timestamps, and departure timestamps affect operations, safety, payroll, trust, and reporting.

Route support should reduce stress and steps. It should not make the owner bounce between ServicesOS and external maps repeatedly.

## Product Decision

Do not build this as a standalone `Route Optimization` feature first.

Build it as:

```text
Route Helper + Crew Scheduling + Job Timeline
```

External maps may handle turn-by-turn driving, but ServicesOS should remain the workflow command center.

## Location in the App

Route Helper should live inside:

```text
Schedule → Route Helper
```

Schedule should eventually include:

```text
Calendar
Jobs
Crews
Route Helper
```

Do not expose Route Optimization as a standalone wife-beta sidebar item.

## Core Workflow

Ideal simple beta flow:

```text
Open Schedule
↓
Route Helper
↓
Start Today's Route
↓
Select/confirm crew
↓
Select driver / GPS source
↓
GPS captures current location
↓
ServicesOS recommends first stop
↓
Open directions
↓
Arrived
↓
Start Job
↓
Complete Job
↓
Depart / Next Stop
```

The owner should not need to manually type latitude/longitude.

## GPS Starting Point Decision

The starting point should use GPS to determine where the route is actually starting.

A saved default such as a business address may be wrong because the cleaner or crew may be:

- at home
- at the office
- at a supply store
- finishing another job
- already near the next customer
- riding with a helper/driver

### Starting location priority

Use this fallback order:

1. Current GPS location from active GPS source
2. Last known active route location
3. Tenant/business home base
4. Manual starting address fallback

Rules:

- Never default to NYC or any hardcoded city.
- Do not expose latitude/longitude fields to the owner.
- Ask for location permission in plain language.
- If GPS fails, provide simple fallback buttons.
- GPS should be used for active route/job workflows, not silent background tracking.

## GPS Tracking Should Be Part of the App

GPS should not only open a map. It should support the job workflow.

ServicesOS should know:

```text
Where is the crew now?
When did they arrive?
When did they start the job?
When did they finish?
When did they leave?
How much mileage was driven?
Was the job completed on schedule?
```

## Job Timeline Events

For each active route/job, ServicesOS should eventually track:

```text
routeStartedAt
routeStartedLocation

arrivedAt
arrivedLocation

jobStartedAt
jobStartedLocation

jobCompletedAt
jobCompletedLocation

departedAt
departedLocation

estimatedMileage
actualMileage
estimatedDriveTime
actualDriveTime
lateArrivalFlag
addressConfidence
manualOverrideReason
```

## Auto vs Manual Tracking

Do not make everything automatic first.

| Event | Beta Method | Later Method |
| --- | --- | --- |
| Start route | Manual button + GPS capture | Same |
| Arrive at job | Manual Arrived button | GPS geofence suggestion |
| Start job | Manual button | Manual confirmation stays important |
| Complete job | Manual button | Manual with checklist/photos |
| Leave job | Manual button or prompt | GPS/geofence detection |
| Mileage | Estimated first | GPS-based actual later |

This keeps the feature reliable and avoids making it feel creepy or buggy.

## Privacy and Trust Rule

GPS should assist the worker and owner. It should not feel like secret surveillance.

Plain-language app copy:

```text
ServicesOS uses location during active routes to calculate mileage, confirm job arrival/departure, and support scheduling. Location tracking is only used while route/job tracking is active.
```

Long-term employee use requires clear consent and visibility.

## Crew-Based Scheduling Decision

ServicesOS should not assume every job has one worker or exactly two workers.

Cleaning jobs may be:

- solo jobs
- two-person jobs
- three-person jobs
- larger crew jobs later

A job should support an assigned crew.

## Crew Model

Instead of assigning a job to only one employee:

```text
job.employeeId = employee123
```

Use a flexible crew list:

```text
job.assignedCrew = [
  {
    employeeId: employee123,
    displayName: Lead Cleaner Name,
    roleOnJob: Lead Cleaner,
    isDriver: true,
    isGpsSource: true
  },
  {
    employeeId: employee456,
    displayName: Helper Name,
    roleOnJob: Cleaner,
    isDriver: false,
    isGpsSource: false
  }
]
```

The exact schema can be refined before coding.

## Crew Member Roles

Possible roles:

- Owner
- Lead Cleaner
- Cleaner
- Helper
- Driver
- Cleaner + Driver
- Trainee
- Admin

One person may have multiple practical roles.

Examples:

```text
Solo job:
Crew: Wife
Driver: Wife
GPS Source: Wife

Two-person job:
Crew: Wife + Helper
Driver: Helper
GPS Source: Helper

Three-person job:
Crew: Wife + Helper + Extra Cleaner
Driver: Helper
GPS Source: Helper
```

## GPS Source Rule

Each active route should have one selected GPS source.

The GPS source is usually the driver, but it should be changeable.

Prompt concept:

```text
Who is driving / whose phone should track today's route?
```

Options could include:

- Wife's phone
- Helper's phone
- Crew lead's phone
- Manual fallback

Only one GPS source needs to control the route. Everyone else remains part of the crew/job record.

## Route Helper Beta MVP

First useful version:

- Show today's scheduled jobs in order.
- Show each job as a card.
- Include customer name.
- Include service time.
- Include service type.
- Include full address.
- Include phone number.
- Include job notes.
- Include assigned crew.
- Include driver/GPS source.
- Include Open Directions.
- Include Copy Address.
- Include Call Customer if phone exists.
- Include Text Customer if phone exists.
- Include Mark Arrived.
- Include Start Job.
- Include Complete Job.
- Include Leaving / Next Stop.

Do not require coordinates for the beta MVP.

If address is missing or incomplete, show:

```text
Needs address check
```

## Address Confidence

Before route optimization, add address confidence.

Examples:

```text
Address ready
```

or

```text
Needs address check
```

Incomplete addresses should not silently flow into route guidance.

## Mileage

GPS and route tracking should support mileage calculation.

Beta can begin with estimated mileage based on route legs.

Later versions can support:

- actual GPS mileage during active route
- mileage reimbursement reports
- tax/expense reporting
- per-route mileage summaries
- per-job travel cost estimates

## What To Avoid Early

Avoid early:

- manual latitude/longitude entry
- owner-facing coordinate fields
- complex map screen before job cards work
- requiring coordinates before directions work
- making route optimization the main action
- hardcoded starting city defaults
- silent background tracking
- too many map app handoffs

## Future Features

Later Route Helper can add:

- saved crew templates
- recurring crews
- geofence arrival/departure suggestions
- auto-ordering jobs by distance
- route recalculation after cancellations
- customer ETA notifications
- running-late warnings
- payroll support
- mileage reimbursement exports
- productivity analytics by crew size
- cleaner mobile app route mode

## Open Design Questions

Discuss before implementation:

1. Should the first beta route use only the web app, or should this wait for the mobile employee app?
2. How should GPS permissions work for wife-beta if the app is still web-first?
3. Should route tracking belong to a route day, a crew, or each job stop?
4. Should employees clock in separately, or should the first version only timestamp job events?
5. Should the owner be able to override arrival/departure times manually?
6. What should happen if the selected driver loses GPS during the route?

## Implementation Rule

Do not implement full route optimization yet.

First implement reliable Route Helper/job cards and crew assignment. Then layer GPS capture, timestamps, and mileage in controlled steps.
