# ServicesOS Recurring Service Plans — V1.1 Plan

**Status:** Parked future work  
**Priority:** After ServicesOS V1 production promotion, stabilization, and wife beta validation  
**Product:** ServicesOS  
**Initial vertical:** Residential cleaning  

## Purpose

Recurring customers often have work that should not be completed on every visit. Examples include changing bedding, cleaning baseboards, washing interior windows, cleaning the oven, or performing a normal deep-clean rotation.

Without a clear schedule, an owner or employee may:

- perform extra work that was not due,
- miss work that should have been completed,
- create inconsistent service between visits,
- lose track of what was last completed,
- accidentally include unpaid work,
- rely on memory instead of a reliable job plan.

ServicesOS should help the business track what is due, what is not due, what was completed, and what should happen next.

## Product Principle

> ServicesOS calculates what is due. The owner approves changes. The system records what actually happened.

The system should support the owner’s judgment rather than automatically forcing work, changing prices, or charging customers.

## V1.1 Feature Name

**Recurring Service Plans**

Primary sections:

1. Every-Visit Tasks
2. Rotating Tasks
3. Due This Visit
4. Upcoming Tasks
5. Completion History
6. Owner Overrides

## Core Model

Each recurring customer or property receives a recurring service plan with two task layers.

### Every-Visit Tasks

These tasks appear on every generated recurring job packet.

Examples:

- Clean bathrooms
- Clean kitchen surfaces
- Dust normal surfaces
- Vacuum floors
- Mop hard floors
- Empty trash
- Standard bedroom cleaning

### Rotating or Periodic Tasks

These tasks appear only when their cadence says they are due.

Examples:

- Change bedding every second visit
- Clean baseboards every fourth visit
- Clean blinds every sixth visit
- Clean interior windows every three months
- Clean oven every six months
- Complete normal deep-clean rotation twice per year

## Supported Cadence Types

The first version should support simple, understandable cadence types:

- Every visit
- Every X visits
- Every X weeks
- Every X months
- On a specific next-due date

The first implementation should avoid complicated scheduling formulas. Complexity should be added only after real usage proves it is needed.

## Job Packet Behavior

When ServicesOS creates or prepares a recurring booking, it should:

1. Load the active recurring service plan for the customer/property.
2. Add all every-visit tasks.
3. Calculate which rotating tasks are due.
4. Save a task snapshot onto the booking.
5. Show only the relevant work in Field Mode.
6. Record completion, approved skip, or reschedule decisions.
7. Calculate the next due visit/date after the owner-approved outcome is recorded.

### Field Mode Presentation

The job packet should clearly separate:

#### Required Every Visit

Tasks included in the normal recurring service.

#### Due This Visit

Periodic tasks that should be considered during this visit.

#### Upcoming Later

Tasks that are part of the plan but are not due yet.

Tasks that are not due should not appear as normal unchecked work that implies the worker should complete them.

## Booking Snapshot Requirement

Each booking must preserve a snapshot of the recurring tasks that applied to that visit.

Changing the customer’s future service plan must not rewrite prior job history.

The snapshot should record at minimum:

- Task name
- Task category
- Cadence type
- Cadence value
- Due status at booking creation
- Owner override, if any
- Completion status
- Skip/reschedule reason, if any
- Completed by
- Completed timestamp
- Next-due calculation result

## Task Outcomes

A periodic task should support honest outcomes:

- Completed
- Skipped this visit
- Rescheduled
- Not due
- Removed from plan

A skipped or rescheduled task must not be recorded as completed.

## Owner Controls

The owner/admin should be able to:

- Create a recurring service plan
- Add every-visit tasks
- Add rotating tasks
- Set visit-, week-, month-, or date-based cadence
- Mark a task due early
- Skip a task for one visit
- Reschedule a task
- Add a reason for a skip or override
- Decide whether the task is included or separately priced
- Review completion history
- See the next expected due visit/date

The owner should remain responsible for final work and pricing decisions.

## Employee and Owner-Operator Experience

Assigned employees and owner-operators using Field Mode should see:

- Every-visit checklist
- Due-this-visit rotating tasks
- Clear included/add-on status where approved
- Customer-approved instructions
- Completion, skip, and issue reporting controls appropriate to their role

Employees should not independently change cadence, pricing, or the customer’s long-term service plan.

## Pricing Boundary

The initial version should track whether a task is:

- Included in the recurring price
- Optional add-on
- Requires owner review

V1.1 must not automatically:

- Raise the invoice
- Charge the customer
- Change payment status
- Add an unapproved service fee
- Reschedule the entire recurring series

Pricing automation should be considered only after the tracking workflow is stable and owners consistently use it.

## Suggested Data Direction

Use the existing tenant-scoped architecture.

Possible plan path:

`tenants/{tenantId}/customers/{customerId}/recurringServicePlans/{planId}`

Possible task subcollection:

`tenants/{tenantId}/customers/{customerId}/recurringServicePlans/{planId}/tasks/{taskId}`

Booking task snapshots should be stored with or beneath the canonical booking so historical job records remain stable.

Exact paths and schemas must be audited before implementation. Do not create a competing recurring-booking model.

## V1.1 MVP Scope

The smallest useful implementation should include:

1. One active recurring plan per customer/property
2. Every-visit tasks
3. Every-X-visits rotating tasks
4. Monthly cadence
5. Due-this-visit calculation
6. Booking task snapshot
7. Field Mode display
8. Completed, skipped, and rescheduled outcomes
9. Next-due calculation
10. Owner/admin history view

## Deferred Enhancements

Do not include these in the first slice:

- Automatic price changes
- Automatic invoices or charges
- AI-generated task recommendations
- Route optimization based on rotating work
- Multi-property plan inheritance
- Complex seasonal formulas
- Customer self-editing
- Automatic customer messaging
- Inventory consumption forecasts
- Payroll adjustments
- Full compliance lifecycle integration

## Acceptance Criteria

Recurring Service Plans are ready for V1.1 when:

- An owner can define every-visit and rotating work.
- A recurring booking receives an immutable task snapshot.
- Field Mode clearly distinguishes required, due, and upcoming work.
- Work that is not due does not appear as required work.
- Completed, skipped, and rescheduled outcomes are recorded honestly.
- Next-due calculations remain stable after refresh.
- Historical bookings are not changed when the future plan changes.
- Employees cannot change cadence or pricing.
- No task action changes payment or Stripe state.
- Tenant isolation is enforced by application logic and Firebase rules.
- Owner-operated and assigned-employee workflows both work.

## Implementation Sequence

After ServicesOS V1 is promoted and stable:

1. Audit current recurring-booking and checklist data.
2. Define the canonical recurring plan and task schema.
3. Implement every-visit and every-X-visits tasks first.
4. Add booking snapshots.
5. Add Field Mode due-task display.
6. Add owner completion/history review.
7. Add skip/reschedule controls.
8. Add monthly/date cadence.
9. Run wife beta with real recurring clients.
10. Add pricing or automation only after real usage validates the need.

## Release Boundary

This feature is intentionally parked until:

- ServicesOS V1 is promoted,
- production rules and Storage are safely integrated,
- wife beta begins,
- the core workflow is stable under real jobs.

Recurring Service Plans should not delay the current V1 release.
