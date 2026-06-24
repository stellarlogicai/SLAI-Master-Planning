# ServicesOS Payroll Assist + Job Costing Tracking Loop

Status: Product design notes
Date: 2026-06-24
Owner: Jamie Brown / Stellar Logic AI

## Core Idea

ServicesOS should track operational work once, then reuse that same data for:

- scheduling
- route history
- job timeline
- mileage
- payroll review
- job costing
- profitability
- future estimate improvement

The loop:

```text
Track the work once
↓
Use the same data for scheduling, mileage, payroll review, job costing, and profitability
```

## Important Product Boundary

ServicesOS should become a payroll assist and job-costing engine before it becomes a payroll processor.

First goal:

```text
Payroll Review + Payroll Export
```

Not:

```text
ServicesOS runs payroll automatically
```

Payroll has legal and compliance weight. The owner should review and approve payroll-related records before export or payment.

## Employee Tracking Data

For each employee or crew member, ServicesOS should eventually track:

```text
scheduled time
confirmed shift
route start time
arrival time
job start time
job complete time
departure time
breaks
mileage role
driver/non-driver
jobs completed
hours worked
estimated labor cost
actual labor cost
```

This data should come from the main system and eventually the employee app.

## Job Timeline Feeds Payroll

Event-based job tracking should feed payroll review.

Examples:

```text
Confirmed shift
Route started
Arrived at job
Started job
Completed job
Departed job
Route ended
```

Each event should record:

- timestamp
- user/employee who triggered it
- GPS location if available
- manual override flag if edited
- reason if corrected later

## Payroll Review Phase

ServicesOS should first create draft payroll records for owner review.

Example:

```text
Payroll Review

Employee: Helper
Scheduled: 8:00 AM - 3:00 PM
Confirmed: 7:34 AM
Route Started: 8:07 AM
Job Time: 5.5 hrs
Drive/Route Time: 1.1 hrs
Total Paid Time Draft: 6.6 hrs

[Approve]
[Edit]
[Flag for Review]
```

AI can summarize and flag issues, but the owner approves.

## Payroll Export Phase

After owner approval, ServicesOS can export approved records to:

- QuickBooks
- Gusto
- ADP
- CSV
- payroll provider API later

This is safer than replacing payroll providers early.

## Future Payroll Engine Phase

Much later, ServicesOS may support more payroll logic directly.

Do not prioritize this until compliance, taxes, overtime, state rules, filings, and employer obligations are deeply understood.

## Job Costing

Job costing tells the owner whether a job was profitable.

Example:

```text
Customer price: $180
Labor cost: $72
Mileage cost: $8
Supplies estimate: $12
Platform/payment fees: $7
Estimated profit: $81
```

ServicesOS should compare estimated vs actual.

Example AI insight:

```text
This job took 45 minutes longer than estimated.
Future quotes for similar homes should increase by $25-$40.
```

This feeds back into the Estimate Engine.

## AI Role In Payroll + Costing

AI should help with:

- spotting missing clock events
- spotting missing job timeline events
- estimating likely time when someone forgot to tap a button
- flagging jobs that ran long
- comparing estimated vs actual labor
- suggesting price adjustments
- warning when a day is overloaded
- identifying underpriced services
- preparing payroll review notes
- preparing profitability summaries

AI should not automatically finalize pay.

Safe pattern:

```text
AI calculates draft
Owner reviews
Owner approves
System exports/records
```

## Example AI Payroll Assist

```text
Payroll note:
Helper was scheduled for 6.0 hours but route/job timestamps suggest 6.8 hours.

Reason:
- Job 2 ran 42 minutes over estimate.
- Departure was logged late.
- No break was recorded.

Suggested action:
Review and approve 6.8 hours, or edit before payroll export.
```

## Job Cost Summary Object Direction

Future conceptual object:

```js
jobCostSummary = {
  jobId,
  customerId,
  bookingId,
  crew: [
    {
      employeeId,
      roleOnJob,
      scheduledMinutes,
      confirmedAt,
      clockedInAt,
      jobStartedAt,
      jobCompletedAt,
      clockedOutAt,
      paidMinutesDraft,
      hourlyRateSnapshot,
      laborCostDraft
    }
  ],
  mileage: {
    estimatedMiles,
    actualMiles,
    driverEmployeeId,
    mileageCostDraft
  },
  supplies: {
    estimatedSupplyCost,
    actualSupplyCost
  },
  payments: {
    customerPrice,
    depositPaid,
    balanceDue,
    stripeFees,
    platformFees
  },
  profitability: {
    grossRevenue,
    estimatedCost,
    estimatedProfit,
    marginPercent
  },
  approval: {
    payrollReviewedBy,
    payrollApprovedAt,
    ownerOverrideReason
  }
}
```

Important: use `hourlyRateSnapshot` so historical jobs keep the pay rate that applied at the time, even if the employee's current rate changes later.

## Where This Fits In ServicesOS

Inside Schedule:

```text
Schedule
├── Calendar
├── Jobs
├── Crews
├── Route Helper
└── Time & Mileage
```

Inside Settings:

```text
Settings
├── Employees
├── Payroll Export
├── Mileage Settings
├── Hourly Rates
└── Cost Settings
```

Inside Dashboard:

```text
Today's labor cost
Jobs over estimate
Payroll items needing review
Unapproved time entries
Profitability alerts
```

## Tracking Data As Operational Truth

ServicesOS should treat tracking data as reusable operational truth:

```text
Route tracking feeds mileage.
Job timestamps feed payroll.
Crew assignments feed labor cost.
Estimate vs actual feeds pricing improvement.
Payments feed profitability.
AI reviews the pattern and suggests owner actions.
```

## Implementation Guardrail

Do not build a payroll processor first.

Build in layers:

1. job timeline events
2. crew member assignment and confirmation
3. time/mileage summaries
4. owner payroll review screen
5. payroll export
6. job-cost summary
7. AI profitability and estimate-improvement insights

This should follow after the core wife-beta scheduling and route workflows are stable.
