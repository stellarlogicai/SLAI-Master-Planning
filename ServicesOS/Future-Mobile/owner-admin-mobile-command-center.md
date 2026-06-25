# ServicesOS Owner/Admin Mobile Command Center

Document Status: Complete
Implementation Status: Future Roadmap
Last Updated: 2026-06-25
Implementation Repo: stellarlogicai/ServicesOS
Related Commits:
- pending
Validation:
- Planning decision only; no ServicesOS code changes
Remaining Follow-Ups:
- Revisit after employee field beta loop works
- Decide whether owner/admin mobile is built inside the same React Native app with role-based navigation

## Purpose

This document captures the long-term ServicesOS mobile direction: the mobile app should eventually support owner/admin users too, not only employees.

Small cleaning-service owners are often also field workers. They may be cleaning houses, driving between jobs, answering customer questions, quoting new work, and checking schedule/payment status from their phone.

ServicesOS should eventually support that reality.

## Core Insight

Small service businesses do not always have a separate office/admin person.

In early cleaning companies, the owner often does all of this:

- Cleans jobs.
- Talks to customers.
- Creates estimates.
- Schedules work.
- Assigns helpers.
- Checks payment status.
- Handles issues in the field.
- Updates customer/job notes.

Therefore, long-term mobile cannot be employee-only.

The future mobile app should support:

```text
employee field execution
owner-in-the-field management
admin mobile command center
```

## Current Guardrail

Do not build full owner/admin mobile before first beta.

Current active priority remains:

1. Finish owner/admin web beta blockers.
2. Confirm employee create/edit/view workflow.
3. Inspect existing React Native app.
4. Build Employee Field MVP.
5. Test owner web → employee mobile → owner web workflow.
6. Wife beta.
7. Training beta phase 2.
8. Owner/admin mobile expansion later.

## Recommended Mobile Role Model

Long-term, the React Native app can likely support multiple role modes:

```text
Employee mode
Owner field mode
Admin mode
```

### Employee Mode

Purpose:

- Complete assigned work.

Key actions:

- View assigned jobs.
- Open job details.
- See safe customer/property notes.
- Upload before/after photos.
- Complete checklist.
- Add note/issue.
- Start/complete job.

### Owner Field Mode

Purpose:

- Let the owner run the day while also working in the field.

Key actions:

- View today’s schedule.
- See assigned crews/jobs.
- Open job/customer details.
- Update job status.
- Add notes/photos.
- Create quick customer/lead.
- Create or review quick estimate.
- Adjust schedule if needed.
- Check basic payment status.
- Handle issues from employees.

### Admin Mode

Purpose:

- Mobile access to core admin/business controls.

Key actions:

- Dashboard snapshot.
- Customers/leads.
- Estimates.
- Schedule.
- Employees.
- Payments overview.
- Settings summary.

Admin mode should be simplified for mobile, not a full desktop replacement on day one.

## Owner/Admin Mobile MVP Later

When ready, the first owner/admin mobile expansion should focus on daily operations, not every desktop feature.

Minimum owner mobile features:

```text
Today dashboard
Today schedule
Job detail
Customer detail summary
Employee/crew assignment view
Quick lead/customer capture
Quick estimate review/create
Payment status glance
Issue alerts
```

Nice-to-have later:

```text
Full analytics
Full settings
Full CRM edit history
Advanced payment controls
Subscription/billing management
Full document/contract editing
```

## Owner-in-the-Field Workflow

Future target workflow:

```text
Owner opens app in the morning
→ sees today’s jobs and assigned employees
→ drives/cleans first job
→ updates status/photos/checklist if they are also working
→ receives issue from employee
→ adjusts schedule or sends message
→ creates quick lead/estimate from a phone call
→ checks whether customer payment is pending/paid
→ ends day with all jobs updated
```

This is the realistic small-business workflow ServicesOS should support.

## Web-to-Mobile Relationship

The web app remains the most complete admin surface.

The mobile app becomes the daily field/business operating surface.

Rule:

```text
Web owns the complete workflow.
Mobile gets the field/mobile correspondence piece.
Owner/admin mobile gets the pieces needed while away from the desk.
```

This avoids trying to cram the entire desktop app into a phone all at once.

## What Not To Build Yet

Do not build these before employee beta is stable:

- Full owner/admin mobile dashboard.
- Full CRM replacement.
- Full payment management.
- Full settings management.
- Tap to Pay.
- Payroll.
- GPS route helper.
- Advanced analytics.
- Full document editing.

## Later Design Principle

Mobile owner/admin should answer:

```text
What do I need to know or do while I am not at my desk?
```

It should not try to answer:

```text
How do I fit the entire desktop app onto a phone?
```

## Future Implementation Notes

Before implementation, inspect the existing React Native app and decide whether to use:

1. One React Native app with role-based navigation.
2. Separate employee and owner mobile apps.
3. One app with mode switching for owner/admin users who also work jobs.

Likely best future direction:

```text
One React Native app
→ role-based tabs/screens
→ owner/admin can switch between Owner view and Field Worker view if assigned to jobs
```

This fits small cleaning businesses where the owner may also be a cleaner.

## Current Decision

Owner/admin mobile is a real future ServicesOS requirement.

It is not first beta scope.

First beta proves:

```text
owner/admin web planning
→ employee mobile execution
→ owner/admin web visibility
```

After that works, owner/admin mobile can expand ServicesOS into a true phone-based operating system for small service owners.
