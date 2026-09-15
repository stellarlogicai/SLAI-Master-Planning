# ServicesOS V2 Execution Plan

**Status:** Future execution plan / not an active build  
**Created:** 2026-09-14  
**Product:** ServicesOS  
**Purpose:** Convert the ServicesOS V2 product roadmap into a controlled implementation sequence with explicit dependencies, gates, acceptance criteria, and cross-cutting architecture contracts.  
**Priority rule:** This document does not authorize V2 implementation while ServicesOS V1 or SLAI Web V1 has higher priority.

---

## 1. Strategic Sequence — Authoritative Planning Order

ServicesOS V2 is **not** the next active build immediately after ServicesOS V1.

The current company sequence is:

```text
Finish ServicesOS V1
        ↓
Wife beta complete
        ↓
Beta-critical bugs fixed
        ↓
Onboarding usable
        ↓
Payments stable
        ↓
Security / tenant isolation / production employee workflow proven
        ↓
Customer-facing ServicesOS V1 launch
        ↓
Stabilize early ServicesOS usage
        ↓
SLAI Web V1 becomes active build
        ↓
Build and validate SLAI Web V1
        ↓
Test real revenue motion through DIY / done-for-you / custom web offerings
        ↓
Return to larger ServicesOS V2 expansion
```

### Why SLAI Web comes before V2

SLAI Web is intentionally placed before the larger ServicesOS V2 expansion because it can:

- generate earlier one-time build revenue,
- create recurring managed-web revenue,
- provide an acquisition path into ServicesOS,
- validate small-business willingness to pay,
- fund company operations and future development,
- reuse business/profile data already collected by ServicesOS,
- create real customer relationships before larger V2 expansion.

### Revenue Gate

Do not promote ServicesOS V2 into the active build merely because V1 is finished.

Before larger V2 implementation begins, SLAI Web V1 should have:

- reached a usable customer-facing state,
- completed at least one real customer or design-partner workflow,
- tested at least one actual revenue path or documented why the attempt failed,
- produced early measurements for build time, support burden, hosting cost, AI usage, and customer self-service behavior.

Jamie may explicitly change this priority if business conditions justify it.

---

# 2. Relationship to Existing Planning

This document is the **execution companion** to:

- `ServicesOS_V2_Workforce_Field_Operations_and_Vertical_Expansion.md` — product vision and feature scope,
- `ServicesOS_Recurring_Service_Plans_V1_1.md` — recurring-work bridge plan,
- `../ServicesOS Vertical Architecture.md` — Core + Vertical Modules architecture,
- `../Website_Public_Data_and_Booking_Contract.md` — public-data and booking boundary,
- `../../02_Website/SLAI_Web_Platform_V1_and_Customer_Control_Model.md` — SLAI Web product sequence and platform plan,
- the final ServicesOS V1 current-state / release documentation once V1 closes.

### Document authority

Use the V2 roadmap to answer:

> What product capabilities belong in ServicesOS V2?

Use this execution plan to answer:

> In what order should V2 be built, what must exist first, and what proves each slice is ready?

If the two documents conflict on implementation order, this execution plan is the intended sequencing document unless Jamie explicitly changes the plan.

---

# 3. V2 Definition of Ready

ServicesOS V2 implementation should not begin until the following are true.

## ServicesOS V1 gates

- Customer-facing V1 is deployed and stable enough for real use.
- Wife beta has completed enough real workflows to surface beta-critical defects.
- Beta-critical defects are fixed or intentionally deferred with a documented reason.
- Payments and Stripe/Connect behavior needed for V1 are stable.
- Tenant isolation and customer/employee authorization have production evidence.
- Employee assignment and production employee workflow are proven.
- The final V1 schema/API/state baseline is documented.
- A fresh canonical `SERVICESOS_V1_CURRENT_STATE.md` or successor exists at V1 closeout.

## SLAI Web gates

- SLAI Web V1 has been built to a usable customer-facing state.
- At least one real web customer/design partner has completed the workflow or a documented market-validation attempt has occurred.
- Revenue assumptions have been tested with actual customer behavior where possible.
- Website/public-data integration contracts have been validated rather than redesigned inside V2.

## Planning gates

Before coding the first V2 slice:

- freeze the V2 committed scope for the first release train,
- list exact V1 schemas/interfaces V2 will extend,
- define the cross-cutting contracts in Section 5,
- define feature flags and rollback rules,
- define test expectations,
- identify provider-backed variable costs,
- identify any migration needed for existing V1 tenants.

---

# 4. V2 Product Objective

ServicesOS V2 should turn the V1 operating foundation into a stronger system for businesses with:

- multiple employees,
- crews/teams,
- more daily jobs,
- route/dispatch complexity,
- recurring work,
- field safety concerns,
- higher communication volume,
- richer operational data,
- more than one supported service vertical.

The goal is **not** to turn ServicesOS into payroll, accounting, ERP, autonomous management, or a giant all-purpose enterprise suite.

Core V2 outcome:

> A multi-employee service business should be able to plan work, assign people, operate in the field, handle exceptions, communicate with customers, understand what happened, and reuse the same core across multiple verticals.

---

# 5. Cross-Cutting Contracts Required Before Major V2 UI Work

The current roadmap is feature-rich but these foundations must be specified before broad implementation.

## 5.1 Workforce and Scheduling State Model

Define the canonical relationship between:

```text
Employee
Availability
Regular schedule
Shift
Time off
Crew membership
Booking
Job assignment
Route
Operational work state
```

Required decisions:

- timezone authority,
- effective dates,
- recurring availability,
- availability exceptions,
- approved time off,
- employee vs crew assignment precedence,
- reassignment behavior,
- overlapping assignment rules,
- archived/deactivated employee behavior,
- owner/admin override rules,
- audit history,
- deterministic conflict detection.

Recommended precedence concept:

```text
Base availability
    ↓
Regular schedule / shift
    ↓
Approved exception / time off
    ↓
Crew membership
    ↓
Job assignment
    ↓
Day-of-work operational state
```

The exact model must be validated against the final V1 booking/employee schema before implementation.

---

## 5.2 Operational Event Model

V2 analytics and SLAI Assistant V2 must not infer business truth from unstructured screens or AI interpretation.

Create a canonical operational event contract for important state changes.

Candidate events:

```text
employee.created
employee.deactivated
employee.availability_changed
crew.created
crew.membership_changed
shift.scheduled
shift.started
shift.ended
job.assigned
job.reassigned
job.travel_started
job.arrived
job.started
job.paused
job.resumed
job.completed
job.blocked
job.issue_reported
route.created
route.reordered
route.delayed
incident.reported
booking.cancelled
customer.message_sent
payment.confirmed
```

Each event should capture only what is necessary, such as:

- tenant ID,
- event type,
- timestamp,
- actor type/ID,
- related employee/crew/booking/customer IDs,
- source state/version where needed,
- reason/metadata where appropriate,
- correlation/idempotency reference,
- audit reference.

### Rule

> Deterministic event detection first. AI interpretation second.

---

## 5.3 Job Scope and Change-Control Contract

Add a reusable workflow for work that was agreed before the job versus extra work requested later.

Required capability:

```text
Estimate / agreement accepted
        ↓
Immutable job-scope snapshot
        ↓
Employee sees exact approved scope
        ↓
Customer requests extra work
        ↓
Employee/owner records add-on request
        ↓
Owner prices/reviews
        ↓
Customer approves or declines
        ↓
Current job OR future appointment
        ↓
History remains unchanged
```

Minimum rules:

- historical scope cannot be rewritten by editing a template later,
- employees cannot silently add billable work,
- employees cannot change price,
- add-ons have clear requested / quoted / approved / declined / scheduled / completed states,
- approval is auditable,
- a requested add-on may be moved to a separate appointment if time/schedule requires it,
- current-job scope and future-plan templates remain separate concepts.

Employee rule:

> **If it is not on today's approved scope, add it as a request instead of silently doing it.**

This should be reusable across Cleaning, Lawn Care, Pressure Washing, Handyman, Detailing, and appointment/service verticals where relevant.

---

## 5.4 Recurring Service Plan Dependency

Do not reinvent recurring behavior inside V2.

The existing Recurring Service Plans plan should either:

1. ship as a post-V1 bridge release before V2, or
2. become an explicit V2 foundation dependency.

V2 and Lawn Care should reuse its concepts:

- every-visit work,
- rotating/periodic work,
- cadence,
- due-this-visit calculation,
- immutable booking task snapshots,
- honest completed/skipped/rescheduled outcomes,
- next-due calculation,
- owner overrides.

---

## 5.5 Unified Messaging and Notification Contract

Do not implement push, SMS, email, ETA updates, reminders, waitlist notices, and rebooking messages as independent feature silos.

Preferred architecture:

```text
Message intent
      ↓
Recipient
      ↓
Purpose / consent check
      ↓
Channel policy
 ┌────┼─────┐
SMS  Email  Push
      ↓
Template / rendering
      ↓
Send
      ↓
Delivery state
      ↓
Usage / cost event
```

Required controls:

- transactional vs marketing purpose,
- consent/opt-out state,
- idempotency,
- retry rules,
- delivery/failure state,
- per-tenant usage,
- owner usage caps where applicable,
- SLAI global kill switch for provider-backed messaging,
- cost attribution by tenant/product/feature,
- channel fallback rules,
- priority rules when caps are reached.

This foundation should support Barbershop messaging later without creating a second communications subsystem.

---

## 5.6 Offline Contract

"Offline tolerance" must be explicitly bounded before implementation.

Recommended first contract:

### Must remain usable offline after prior sync

- today's downloaded jobs,
- approved job scope,
- checklist/outcomes,
- customer-safe job instructions,
- relevant safety notes,
- employee notes,
- local photo capture.

### Queue for later sync

- checklist outcome changes,
- issue reports,
- job-state updates where safe,
- photos/uploads,
- employee notes.

### Require authoritative online access

- payment execution,
- price changes,
- customer approval,
- schedule reassignment,
- authoritative booking changes,
- permissions changes,
- destructive actions.

Required design decisions:

- sync queue format,
- retry behavior,
- duplicate protection,
- conflict detection,
- stale-data warning,
- user-visible sync state,
- what happens when the booking changed while the employee was offline.

Do not promise full offline parity in the first V2 slice.

---

## 5.7 Permissions and Delegated Authority Contract

V2 must support more workforce complexity without assuming every non-owner is the same role.

Potential role concepts:

```text
Owner
Admin
Manager
Dispatcher
Crew Lead
Employee
Customer
```

Not every role needs to ship immediately.

The architecture should support capability-based authority such as:

- view assigned jobs,
- view crew jobs,
- assign/reassign employees,
- reorder routes,
- approve time off,
- view incidents,
- edit price,
- issue refund,
- publish customer message,
- manage staff,
- view financial information.

Rule:

> Authority must be explicit and server-enforced, not inferred from which screen a user can open.

---

## 5.8 Job Issue / Rework / Resolution Contract

Not every operational problem is a safety incident.

Add a lightweight reusable exception workflow for:

- incomplete work,
- blocked work,
- inaccessible property,
- customer complaint,
- failed QA,
- return visit,
- correction/rework,
- missing materials/equipment,
- other non-safety operational exceptions.

Candidate states:

```text
Reported
Acknowledged
Needs follow-up
Scheduled
Resolved
Closed
```

Record:

- related job,
- issue type,
- notes,
- photos/evidence,
- reporter,
- assigned owner/manager,
- resolution,
- return-visit link where applicable,
- timestamps/audit trail.

Keep this separate from safety/incident records while allowing cross-linking when needed.

---

## 5.9 Provider and Variable-Cost Contract

V2 may introduce or increase use of:

- maps/geocoding/routing,
- SMS,
- email,
- push notifications,
- weather data,
- AI inference,
- image/media storage.

Every material provider-backed capability should define:

- provider abstraction where practical,
- tenant attribution,
- feature attribution,
- expected unit cost,
- included allowance where applicable,
- owner cap/overage behavior,
- global SLAI kill switch,
- retry/idempotency behavior,
- failure fallback,
- monitoring/alerting.

Principle:

> Every included feature should have a known or bounded cost; heavy usage should pay for itself or be explicitly capped.

---

## 5.10 V2 Migration and Release Contract

V2 should use controlled migrations and tenant-safe rollout rather than one giant cutover.

Required mechanisms:

- schema versioning,
- migration scripts,
- backwards compatibility where needed,
- feature flags,
- tenant-by-tenant enablement,
- vertical regression tests,
- rollout telemetry,
- rollback path,
- audit evidence,
- production smoke gates.

V1 tenants must not be silently forced through an irreversible V2 migration without tested recovery behavior.

---

# 6. Post-V1 / Pre-V2 Bridge Work

These are strategically useful after V1 but before the larger V2 expansion.

They may ship as V1.x or as foundation work depending on timing and real customer need.

## 6.1 Recurring Service Plans

Use the existing `ServicesOS_Recurring_Service_Plans_V1_1.md` plan.

Do not redesign from scratch.

## 6.2 Job Scope and Change Control

Promote the contract in Section 5.3 into a dedicated implementation plan after V1 if wife beta / early users confirm the need.

## 6.3 SLAI Web Integration/Public Data

Website-ready business data should **not** be treated as a reason to delay SLAI Web until V2.

SLAI Web comes first.

Use the established public-data and booking contracts during SLAI Web V1, then let ServicesOS V2 consume and extend those proven interfaces later.

---

# 7. V2 Milestone Plan

Each milestone should be implemented as controlled slices with explicit acceptance criteria, test/build requirements, and stop conditions.

---

## Milestone 0 — Final V1 Baseline and V2 Handoff

### Goal

Create a trusted technical baseline for V2 after ServicesOS V1 and SLAI Web V1 priorities are satisfied.

### Work

- refresh current-state documentation,
- record production V1 schema/contracts,
- list active/deprecated services,
- record authentication/authorization boundaries,
- record payment invariants,
- record booking/job state model,
- record employee assignment behavior,
- inventory known V1 technical debt,
- classify debt as must-fix-before-V2 vs safe-to-carry,
- identify migration-sensitive fields.

### Acceptance gate

V2 must start from a documented, green, production-aligned baseline rather than assumptions from old planning documents.

---

## Milestone 1 — V2 Core Contracts and Infrastructure

### Goal

Create the shared foundations that later workforce, routing, analytics, and vertical work will depend on.

### Implement / lock

- workforce/schedule state model,
- crew model,
- assignment model,
- operational event contract,
- expanded permission/capability model,
- messaging abstraction,
- offline sync contract,
- variable-cost metering hooks,
- feature-flag pattern,
- schema/migration pattern,
- V2 audit conventions.

### Non-goal

Do not build the full scheduling/routing UI yet.

### Acceptance criteria

- Employee, crew, shift, booking, assignment, and work-state relationships are unambiguous.
- Server-side rules/services enforce the intended authority boundary.
- State transitions emit trustworthy structured events where required.
- Feature flags can enable/disable V2 slices by tenant without branching the product.
- V1 behavior remains green.
- Migration/rollback test exists for every schema change introduced by the milestone.

---

## Milestone 2 — Employee Scheduling and Crew Management

### Owner/Admin features

- employee availability,
- regular schedules,
- days off,
- time-off requests,
- day/week workforce views,
- shift/work scheduling,
- crew/team creation,
- assign employees or crews to jobs,
- reusable crew templates where useful,
- schedule conflict detection,
- double-booking warnings,
- overloaded/underassigned visibility,
- employee availability during assignment.

### Employee App features

- personal schedule,
- assigned jobs,
- crew visibility,
- schedule-change visibility,
- time-off status where implemented.

### Acceptance criteria

- A multi-employee business can plan a work week without relying on a separate basic scheduling system.
- Conflicts are deterministic and explainable.
- Owner overrides are explicit/audited.
- Employees cannot see or edit unrelated tenant/staff data.
- V1 single-owner / small-team workflows remain usable.

---

## Milestone 3 — Employee App V2 / Day-of-Work Experience

### Goal

Turn the employee app into the employee's primary day-of-work surface.

### Experience

```text
Today's work
→ crew/team
→ ordered jobs
→ approved job scope
→ safety context
→ checklist
→ photos
→ notes/issues
→ completion
```

### Additions

- push notifications foundation,
- schedule/crew context,
- basic operational status,
- stronger job/customer updates,
- training/SOP access,
- offline contract implementation,
- clearer sync state,
- richer bounded SLAI Work Assistant where useful.

### Basic operational state model

```text
Clock in
  ↓
Travel
  ↓
Arrive
  ↓
Start job
  ↓
Break / resume where enabled
  ↓
Complete job
  ↓
Clock out
```

### Guardrail

This is operational time/state tracking, not payroll calculation.

### Acceptance criteria

- An assigned worker can understand the day without opening the owner/admin web app.
- Offline-supported actions behave predictably.
- Work-state transitions persist honestly after refresh/reconnect.
- Employee actions cannot change price/payment/customer authority.

---

## Milestone 4 — Routing and Dispatch

### Owner/Admin features

- daily route view,
- map of assigned jobs,
- crew-specific routes,
- geocoding/address validation where needed,
- estimated travel time,
- suggested stop ordering,
- manual drag/reorder where practical,
- route conflicts/warnings,
- excessive-drive-time visibility,
- estimated arrival windows.

### Employee App features

- ordered stops,
- navigation handoff,
- address/job context,
- route updates,
- ETA visibility where supported.

### Intelligence boundary

Use deterministic map/routing systems for distance/travel calculations.

SLAI may explain or recommend:

> Moving Job C before Job B is estimated to reduce travel by 22 minutes.

SLAI does not autonomously dispatch or change routes.

### Acceptance criteria

- Reordering never silently changes the underlying job assignment or customer booking contract.
- Map/provider failures degrade safely.
- Cost per routing/geocoding operation is observable.
- Owner can override suggestions.
- Employee sees the latest authorized route state.

---

## Milestone 5 — Safety, Incidents, and Operational Exceptions

### Safety capabilities

- site/property hazards,
- pets,
- allergies,
- chemical/material concerns,
- access hazards,
- terrain/stairs/slippery surfaces,
- gate/access notes,
- equipment/PPE requirements,
- vertical-specific safety instructions,
- pre-job acknowledgement where appropriate.

### Incident capabilities

- report hazard,
- report injury,
- report near miss,
- incident photos,
- owner/admin review,
- status/follow-up,
- audit trail.

### Operational issue/rework capabilities

Use the separate contract in Section 5.8 for non-safety problems.

### SLAI boundary

SLAI may summarize and identify repeated patterns.

SLAI must not decide whether a situation is medically safe, diagnose injuries, or replace human safety responsibility.

### Acceptance criteria

- Safety events and quality/rework issues are distinguishable.
- Evidence/history remains linked to the correct job/property.
- Sensitive incident access is role-controlled.
- Follow-up/resolution state is auditable.

---

## Milestone 6 — Unified Communications

### Implement

- push notifications,
- transactional SMS,
- transactional email,
- schedule-change notices,
- owner-approved ETA/delay updates,
- cancellation/reschedule notices,
- rebooking messages,
- later waitlist/opening notices for appointment verticals.

### Use one communications layer

Do not build a separate subsystem for each workflow.

### Acceptance criteria

- Consent/purpose is checked before relevant sends.
- Duplicate actions do not send duplicate messages.
- Delivery/failure state is visible.
- Tenant usage/cost is measurable.
- Caps/fallback behavior are testable.
- Marketing cannot consume resources required for critical transactional messaging when policy says otherwise.

---

## Milestone 7 — Operational Analytics

### Build only after trusted events exist

Candidate metrics:

- jobs per employee,
- jobs per crew,
- utilization,
- drive time vs working time,
- cancellation/no-show trends,
- repeat customer rate,
- rebooking rate,
- average job value,
- outstanding balances,
- service-type performance,
- completion trends,
- schedule conflicts,
- route efficiency,
- safety/incident trends,
- issue/rework trends,
- seasonal/vertical trends.

### Rules

- prefer transparent calculations,
- show source period/sample where useful,
- avoid fake precision,
- avoid opaque employee-performance/disciplinary scoring.

### Acceptance criteria

- Metrics can be traced to canonical business data/events.
- Owners can understand what a metric means.
- Missing data produces an honest unavailable/partial state rather than invented numbers.

---

## Milestone 8 — SLAI Assistant V2 Operational Awareness

### Architecture

```text
Deterministic detection / structured event
        ↓
Authorized operational context
        ↓
SLAI explanation / recommendation / draft
        ↓
Human review
        ↓
Bounded action through normal ServicesOS services
```

### Example insights

- employee assigned to overlapping jobs,
- unusually high travel time,
- large schedule gap,
- recurring customer due for rebooking,
- repeated access/safety issue at the same property,
- unresolved rework pattern,
- crew workload imbalance.

### Human-control rules

SLAI must not autonomously:

- change employee schedules,
- assign crews,
- dispatch workers,
- change routes,
- make safety decisions,
- alter price,
- refund/charge customers,
- send/publish consequential content without required approval.

### Acceptance criteria

- The underlying fact exists independently of the AI explanation.
- The assistant receives only authorized tenant/user context.
- Recommendations never masquerade as system state.
- AI failure does not block deterministic operational workflows.

---

## Milestone 9 — Vertical Framework Completion

### Goal

Finish separation between shared ServicesOS behavior and cleaning-specific assumptions before adding another major vertical.

### Shared core remains reusable

- identity/tenant,
- customers/CRM,
- estimates,
- contracts/scope,
- bookings,
- payments,
- employees,
- scheduling,
- crews,
- routing,
- photos,
- field work,
- Employee App,
- messaging,
- reporting/events,
- permissions,
- credits/provider layer,
- audit/security.

### Vertical contract should define/configure

- terminology,
- service types,
- estimate fields,
- checklist templates,
- training/SOP content,
- job requirements,
- safety defaults,
- customer-message wording,
- SLAI context,
- marketing context,
- dashboard/analytics defaults,
- optional vertical workflows.

### Architecture rule

Avoid scattered logic such as:

```javascript
if (businessType === 'lawnCare') {
  // special behavior everywhere
}
```

Prefer one central module/profile contract consumed by ServicesOS surfaces.

### Acceptance criteria

- Cleaning remains fully functional.
- A vertical module can change terminology/configuration without core forks.
- Cross-vertical regression suite exists.
- Adding the next close-fit vertical is demonstrably cheaper than hardcoding a new product.

---

## Milestone 10 — Lawn Care Pilot

### Why Lawn Care first

Lawn Care is the strongest first field-service validation because it heavily reuses:

- recurring work,
- crews,
- field employees,
- routes,
- photos,
- safety,
- payments,
- property context.

### Candidate needs

- yard/property context,
- mowing/service frequency,
- seasonal services,
- fence/gate notes,
- outdoor hazards,
- crew assignment,
- weather awareness,
- route/territory context,
- recurring task behavior.

### Success test

Lawn Care should mostly be:

```text
ServicesOS Core
+
Lawn Care module/profile
```

If it requires a second backend or major core rewrite, stop and reassess the vertical abstraction.

### Acceptance criteria

- Real or representative lawn-care workflow can run end-to-end.
- Cleaning has no regression.
- Vertical-specific data does not leak into unrelated tenants/verticals.
- Reuse percentage and implementation effort are documented.

---

## Milestone 11 — Appointment / Barbershop Validation

### Purpose

Test ServicesOS against a location-based, staff-specific appointment business rather than another route-based field-service business.

### Required capabilities to validate

- shop hours,
- barber/provider profiles,
- individual availability,
- provider-specific services,
- service durations,
- provider-specific duration override if needed,
- appointment availability,
- preferred provider,
- any-available-provider booking,
- final server-side slot revalidation,
- idempotent/atomic reservation,
- cancellation/reschedule,
- reminders,
- tips/payment integration,
- rebooking,
- website/public booking integration,
- controlled walk-in/queue workflow if real validation proves it is needed.

### Commercial benchmark

> Could a real barbershop reasonably cancel Booksy after switching to ServicesOS?

If no, the Barbershop vertical is not finished.

### Acceptance criteria

- Appointment logic does not fork ServicesOS into a separate BarberOS backend.
- ServicesOS remains the booking authority.
- Public websites cannot write directly to private operational storage.
- Scheduled customers remain protected when walk-ins are enabled.
- Messaging/cost controls remain bounded.

---

## Milestone 12 — Themes and Controlled Customization

### Initial themes

- ServicesOS Light,
- ServicesOS Dark,
- Warm,
- Vibrant.

### Controls

- business-wide default,
- personal user override,
- use-business-theme option,
- protected semantic success/warning/error/safety/focus colors.

### Future option

Logo-derived palettes may:

1. inspect an approved logo,
2. extract candidate colors,
3. map colors to controlled theme tokens,
4. validate contrast/accessibility,
5. preview,
6. require owner approval.

### Priority note

Themes are useful, but they do not outrank workforce, field, communication, analytics, or vertical correctness.

---

# 8. V2 Scope That Remains Validate-First

Do not automatically promote these into committed scope until real usage proves the need:

- deeper time/attendance detail,
- detailed break management,
- advanced full-offline behavior,
- weather-aware automatic rescheduling assistance,
- advanced territory optimization,
- customer ETA automation beyond explicit controls,
- advanced training/certification,
- equipment tracking,
- seasonal campaign tools,
- complex waitlist/cancellation-fill automation,
- deeper crew productivity analytics,
- logo-generated themes,
- additional vertical modules beyond validated pilots.

---

# 9. Explicitly Out of V2 by Default

Do not allow V2 to become a catch-all.

Keep parked unless a future explicit scope decision promotes them:

- full payroll,
- payroll tax calculation/filing,
- full accounting,
- tax filing,
- benefits administration,
- full HRIS,
- enterprise ERP,
- large inventory platform,
- advanced commission payroll,
- booth-rent accounting,
- autonomous discipline,
- autonomous hiring/firing decisions,
- autonomous dispatch,
- autonomous price changes,
- autonomous safety decisions,
- fully autonomous marketing/posting,
- giant integration marketplace,
- multi-location enterprise complexity without validated demand,
- dozens of simultaneous verticals,
- broad regulated-industry compliance suites,
- features that belong more naturally in another SLAI product.

---

# 10. V2 Release Strategy

Do not wait for every milestone to be complete before customers receive value.

Prefer controlled release trains such as:

```text
V2.0A — Core contracts + scheduling/crews
V2.0B — Employee App day-of-work
V2.0C — Routing/dispatch
V2.0D — Safety/issues/communications
V2.0E — Analytics + SLAI Assistant V2
V2.0F — Vertical framework + Lawn Care pilot
V2.0G — Appointment/Barbershop validation
V2.0H — Theme/customization polish
```

Names/numbering may change during implementation.

Each release train should have:

- isolated branch/slice,
- task-specific acceptance criteria,
- automated tests,
- build/lint checks,
- tenant-isolation tests,
- migration/rollback test where applicable,
- manual QA/UAT,
- production smoke plan,
- telemetry/cost review,
- explicit promotion decision.

---

# 11. Codex Execution Rules for V2

When V2 implementation begins, continue the existing controlled Codex approach.

Each task should specify:

- recommended model,
- exact goal,
- current branch/baseline,
- files/contracts to read,
- allowed scope,
- files/systems to avoid,
- acceptance criteria,
- test/build commands,
- stop conditions,
- required report.

### Stop conditions

Codex should stop and report rather than improvise when:

- implementation requires a new schema not covered by the task,
- a protected V1 invariant must change,
- a migration is required but was not authorized,
- payment/auth/tenant isolation must change unexpectedly,
- provider credentials/production resources are required,
- the requested slice cannot be implemented without expanding scope materially.

### Core principle

> Small controlled implementation slices with strong acceptance evidence are preferred over large "build V2" prompts.

---

# 12. V2 Success Criteria

ServicesOS V2 should be considered successful when:

- multi-employee businesses can schedule and coordinate staff/crews effectively,
- employees can operate through one coherent day-of-work experience,
- owners can understand staffing, routing, safety, exceptions, and customer impact,
- offline-supported field work behaves predictably,
- customer communications are bounded, consent-aware, and cost-controlled,
- analytics are traceable to real data/events,
- SLAI provides operational intelligence without becoming an autonomous manager,
- Cleaning remains stable,
- Lawn Care can run on the same core without a separate backend,
- Barbershop can validate the platform against a location-based appointment business,
- adding another close-fit vertical is materially cheaper than building the first validation vertical,
- V2 variable costs are observable and bounded,
- V2 can be rolled out and rolled back without destabilizing V1 tenants.

---

# 13. First V2 Planning Session After SLAI Web

When SLAI Web V1 has been validated and V2 is ready to become active, do **not** start coding immediately.

First run a short V2 planning/bootstrap pass:

1. Read the final ServicesOS V1 current state and production architecture.
2. Read this execution plan and the V2 product roadmap.
3. Compare planned contracts against the real final V1 schemas/services.
4. Mark every V2 dependency as:
   - already exists,
   - needs extension,
   - missing,
   - obsolete due to V1/Web changes.
5. Update the milestone order if real customer evidence justifies it.
6. Freeze the first V2 release train.
7. Create the first controlled Codex implementation prompt only after the release train is approved.

---

# Final Execution Principle

ServicesOS V2 should not begin as a pile of feature tickets.

It should begin as a controlled extension of a proven V1 foundation:

```text
Stable V1
→ Revenue-generating SLAI Web V1
→ Proven shared contracts
→ Workforce foundation
→ Field operations
→ Communications and analytics
→ SLAI operational intelligence
→ Vertical validation
→ Controlled expansion
```

> **Build the shared rules first. Add capability in small slices. Use real customers to earn complexity. Preserve human control throughout.**
