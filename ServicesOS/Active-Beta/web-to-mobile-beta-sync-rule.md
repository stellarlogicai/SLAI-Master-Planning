# ServicesOS Web-to-Mobile Beta Sync Rule

Document Status: Complete
Implementation Status: Future Roadmap / Active Beta Rule
Last Updated: 2026-06-25
Implementation Repo: stellarlogicai/ServicesOS
Related Commits:
- pending
Validation:
- Planning decision only; no ServicesOS code changes
Remaining Follow-Ups:
- Apply this rule after each web feature becomes beta-safe
- Inspect current React Native employee app before mobile beta implementation

## Purpose

This document captures the ServicesOS beta rule for connecting the existing web app and the existing React Native employee app without creating a second uncontrolled build.

ServicesOS beta should include the employee app, but the employee app must follow the web app instead of racing ahead of it.

## Core Rule

As each owner/admin web feature is finished, stabilized, or fixed for beta, add only the relevant employee-side piece to the React Native mobile app.

Do not build the full employee platform all at once.

Preferred sequence:

```text
Finish or fix web workflow
→ confirm Firestore data shape/statuses
→ add the matching employee mobile screen/action
→ test owner/admin web app and employee mobile app together
→ document blockers, annoyances, polish, and deferred features
```

## Why This Rule Matters

This keeps ServicesOS as one connected operating system instead of two disconnected apps.

The web app remains the source of truth for owner/admin planning:

- Dashboard
- Create Estimate
- Customers
- Schedule
- Payments
- Settings

The React Native employee app becomes the field-execution surface:

- Today’s assigned jobs
- Job details
- Customer/property basics
- Checklist
- Start job
- Mark checklist items complete
- Add note/problem
- Complete job
- Sync status back to owner/admin web app

## Beta Philosophy

Employee app belongs in beta.

Full employee platform does not.

Beta mobile scope should prove the field workflow, not finish every future employee feature.

## Web-to-Mobile Mapping

### Dashboard

Web beta goal:

- Owner/admin can see business status without crashes.
- Owner/admin can see leads/jobs/payments summaries.

Mobile beta follow-up:

- No employee dashboard required yet.
- Employee app can have a simple Today screen instead.

Mobile beta requirement:

- Employee sees today’s assigned jobs.

---

### Create Estimate

Web beta goal:

- Owner/admin can create a manual estimate.
- AI/photo estimate can exist but must not block manual flow.

Mobile beta follow-up:

- No employee estimate creation required for beta.

Mobile beta requirement:

- Employee can later view job details created from accepted/scheduled work.

Deferred:

- Employee-created estimates.
- Field quote adjustments.
- Photo-based field estimating.

---

### Customers

Web beta goal:

- Owner/admin can create/view/update customers/leads/properties.

Mobile beta follow-up:

- Employee can view only the customer/property details needed to do the assigned job.

Mobile beta requirement:

- Customer name.
- Service address.
- Basic property/job notes.
- Access notes if safe and needed.

Guardrail:

- Employee app should not expose full CRM/admin data.

---

### Schedule

Web beta goal:

- Owner/admin can schedule jobs and assign employees/crew.

Mobile beta follow-up:

- Employee app reads assigned jobs from Firestore.
- Employee sees Today / Upcoming job list.

Mobile beta requirement:

- Assigned job list.
- Job detail page.
- Job status updates.

Minimum statuses:

```text
assigned
in_progress
completed
issue_reported
```

Optional later statuses:

```text
on_the_way
arrived
paused
canceled
needs_review
```

Deferred:

- GPS route helper.
- Route optimization.
- Crew roll call.
- Push notifications.

---

### Payments

Web beta goal:

- Owner/admin can understand Stripe setup/payment status without crashes/confusion.

Mobile beta follow-up:

- No employee payment tools required for first beta.

Deferred:

- Employee-collected payments.
- Tap to Pay.
- Tips.
- Field invoice collection.

Guardrail:

- Do not add payment handling to mobile until Stripe Connect web/admin flow is stable.

---

### Settings

Web beta goal:

- Owner/admin can manage company/settings/insurance basics.

Mobile beta follow-up:

- Employee app reads only what it needs for display/branding/job execution.

Mobile beta requirement:

- Tenant/company context.
- Employee identity/role.
- Basic app settings if needed.

Deferred:

- Employee profile management.
- Training settings.
- Payroll settings.

## Employee App MVP for Beta

The React Native employee beta should include only this loop:

```text
Employee logs in
→ sees today’s assigned jobs
→ opens job
→ sees customer/property/job basics
→ starts job
→ checks off tasks
→ adds note/problem if needed
→ completes job
→ web admin sees updated status
```

## Features Explicitly Deferred

Do not add these until the owner/admin beta is stable and the employee MVP loop works:

- GPS tracking.
- Route optimization.
- Route Helper.
- Crew roll call.
- Clock in/out.
- Break/lunch tracking.
- Payroll.
- Mileage.
- Training library.
- Push notifications.
- Offline mode.
- Heavy photo reports.
- AI coaching.
- Tap to Pay.
- Employee-created estimates.
- Full customer CRM access.

## Data Ownership Rule

Firestore is the source of truth.

The web app creates/plans the work.

The mobile app executes assigned work.

Basic flow:

```text
Owner/admin schedules job in web app
→ Firestore stores job assignment
→ React Native employee app reads assignment
→ employee updates checklist/status
→ Firestore syncs update
→ owner/admin sees progress in web app
```

## Testing Rule

Every mobile beta feature must be tested as an end-to-end workflow with the web app.

Test example:

```text
1. Owner creates/schedules job in web app.
2. Owner assigns employee.
3. Employee logs into mobile app.
4. Employee sees assigned job.
5. Employee starts job.
6. Employee completes checklist.
7. Employee completes job.
8. Owner sees completed status in web app.
```

## Coding Assistant Rule

When asking Claude, Codex, Devin, or another coding assistant to work on the mobile app:

- Start from latest master/main.
- Read current ServicesOS handoff docs.
- Inspect existing React Native app before changing architecture.
- Do not rebuild mobile from scratch.
- Add only the employee-side piece tied to a stable web workflow.
- Avoid payment, GPS, payroll, training, and route features unless explicitly scoped.
- End with files changed, tests/build result, known issues, and next safe step.

## Current Priority

Continue current ServicesOS priority:

1. Finish owner/admin wife-beta manual walkthrough.
2. Fix only owner/admin beta blockers.
3. Then inspect existing React Native employee app.
4. Define exact Employee App MVP gap list.
5. Add the relevant mobile pieces tied to stable web workflows.
6. Test owner → schedule → employee → complete → owner sees update.
