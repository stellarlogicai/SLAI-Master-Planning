# Codex Task: ServicesOS Wife-Beta Admin Sidebar Cleanup + Visible Workflow Verification

Status: Ready to promote to ServicesOS coding task when Jamie approves
Date: 2026-06-24
Repository Target: `stellarlogicai/ServicesOS`
Planning Source: `stellarlogicai/SLAI-Master-Planning/ServicesOS/Active-Beta`

## Goal

Clean the ServicesOS admin sidebar into a focused wife-beta owner workflow and verify every remaining visible page works according to the intended beta flow.

Do not delete future components. Hide, group, move, or wrap them.

## Important Constraint

This task is sidebar/workflow cleanup and verification only.

Do not perform a major backend data-model rewrite in this task.

Known data-model concerns should be documented for follow-up, not solved by risky broad rewrites during this pass.

## Visible Admin Sidebar

Normal wife-beta admin should see only:

1. Dashboard
2. Create Estimate
3. Customers
4. Schedule
5. Payments
6. Settings

## Customer Role

Customer users should see only customer-facing portal/workflows.

Admin-side Customer View should be hidden for now.

Preserve Customer View / Customer Portal as a future training/demo mode so an owner or helper can walk a customer through the quote process later.

Do not expose it in the wife-beta admin sidebar yet.

## Super-admin Role

Super-admin may still access platform/developer tools, including:

- Tenant Management
- AI Training
- Data Export
- Backup
- developer/migration tools

These should not appear for normal admin wife-beta users.

## Required Sidebar Changes

1. Rename `New quote` to `Create Estimate`.
2. Rename `Payment Links` to `Payments`.
3. Replace separate Calendar, Staff Scheduling, and Route Optimization sidebar items with one `Schedule` item.
4. Hide Customer Portal / Customer View from normal admin sidebar.
5. Hide Data Export from normal admin.
6. Hide Backup from normal admin sidebar.
7. Hide AI Training from normal admin.
8. Hide Tenant Management from normal admin.
9. Hide standalone Insurance sidebar item.
10. Hide standalone Route Optimization sidebar item.
11. Hide standalone Staff Scheduling sidebar item once Schedule groups it.
12. Hide standalone Calendar sidebar item once Schedule groups it.

## Schedule Structure

Schedule should expose tabs or sections for:

- Calendar
- Jobs
- Crews
- Route Helper

If Route Helper is not implemented in this pass, add a beta-safe placeholder that explains it is planned and does not expose broken coordinate fields.

Do not show owner-facing latitude/longitude fields.

Do not use NYC default location.

## Route Helper Scope For This Task

This task should not build full route optimization.

Minimum acceptable handling:

- Route Helper is grouped under Schedule.
- Standalone Route Optimization is hidden.
- Any existing route UI that defaults to NYC is not visible to normal admin.
- A future Route Helper placeholder or light wrapper may be added.

Do not overbuild GPS/mileage in this sidebar cleanup task.

Route Helper, GPS, crew routing, timestamps, and mileage are documented separately and should become their own task.

## Settings Structure

Settings should remain visible.

Settings should emphasize beta-safe areas:

- Company Info
- Services
- Pricing
- Booking basics
- Payments / Stripe
- Insurance
- Branding basics

Move or expose Insurance under Settings.

Move Backup under Settings, but make it super-admin/developer-only at first.

Destructive Backup actions such as Clear All Data must not be visible to normal admin.

## Payments Requirements

Payments should remain visible because basic Stripe is believed to be functioning.

Rename the page from Payment Links to Payments.

Verify that the page:

- receives tenantId correctly
- does not show empty data because of mismatched lead statuses
- supports beta-safe payment-link creation
- does not force payment immediately after estimate generation

If existing status filters use old statuses such as `scheduled`, `estimate_sent`, or `follow_up`, align them with the current CRM status model or introduce a safe status mapper.

Do not implement refunds in this task unless already safely supported.

## Dashboard Requirements

Dashboard should remain visible.

Add or verify owner-friendly display labels:

| Internal Status | Display Label |
| --- | --- |
| `new` | Pending Review |
| `quoted` | Quote Drafted / Quote Sent |
| `booked` | Scheduled |
| `lost` | Archived / Lost |

Do not do a risky backend status migration in this pass unless unavoidable.

Preferred flow:

```text
Review Quote → Approve Quote → Send Quote → Schedule Job
```

Avoid making direct Book the aggressive primary action for customer-submitted quote requests.

## Create Estimate Requirements

Create Estimate should remain visible and continue saving quote/lead data.

Beta behavior should prioritize:

- manual estimate creation
- manual estimate review
- save draft/quote
- explicit owner action before sending email/SMS
- explicit owner action before payment flow

AI analysis failures should not block manual estimate creation.

Do not auto-send email, SMS, or payment links without explicit owner action.

## Customers Requirements

Customers should remain visible and support:

- add customer
- edit customer
- search customer
- save address
- prepare UI path for reusing existing customer/property when creating estimates

Do not require full customer/property backend rewrite in this task unless there is already a safe existing service path.

Document follow-up needs for:

- quote history
- booking history
- recurring status
- last service date
- preferred contact method
- saved properties
- portal link status

## Tenant ID / Wiring Verification

Verify that visible and still-mounted pages receive required tenant context.

Known areas to check:

- Calendar / Schedule
- Payments
- Data Export if still mounted for super-admin
- Insurance under Settings
- Backup under Settings for super-admin

Do not leave beta-visible pages silently empty because tenantId is missing.

## Role/Profile Verification

Verify sidebar behavior for:

- customer
- admin
- super-admin

Also verify fallback behavior when user profile is missing or loading fails.

A missing user profile should not accidentally make the owner think the app is broken; document or improve the admin setup path if needed.

## Files To Avoid Unless Needed

Avoid broad changes to:

- Firestore security rules
- Stripe backend/payment functions
- production migration scripts
- unrelated product modules
- parked future roadmap docs

This task should be a controlled ServicesOS UI/workflow cleanup.

## Tests / Validation

Add or update focused tests for:

- admin sidebar visible items
- customer sidebar visible items
- super-admin sidebar/tool access
- Schedule grouping behavior
- hidden admin/developer tools for normal admin
- tenantId passed into mounted pages where required

Run the existing validation suite:

```bash
npm run lint
npm test
npm run build
```

If commands differ by package location, run the equivalent commands from the ServicesOS web app directory and report the exact commands used.

## Acceptance Criteria

- Normal admin sees only Dashboard, Create Estimate, Customers, Schedule, Payments, Settings.
- Customer user sees only customer-facing portal/workflows.
- Super-admin can still access platform/developer tools.
- Customer View is hidden from normal admin but preserved for future training/demo use.
- Calendar, Jobs, Crews, and Route Helper are grouped under Schedule.
- Route Optimization standalone button is hidden.
- Staff Scheduling standalone button is hidden.
- Calendar standalone button is hidden.
- Insurance is accessible under Settings, not as a standalone sidebar item.
- Backup is under Settings or super-admin/dev access only.
- Data Export is hidden from normal admin.
- Payments receives tenantId and does not use stale status filters.
- Create Estimate does not auto-send email/SMS/payment without explicit owner action.
- AI analysis failure does not block manual estimate creation.
- Dashboard uses owner-friendly status labels.
- Existing lint/tests/build pass.
- Codex reports exactly what changed, what was intentionally hidden, and what follow-up tasks remain.

## Follow-Up Tasks To Document, Not Solve Here

- Route Helper GPS tracking
- Crew-based scheduling schema
- job timeline timestamps
- mileage calculation
- mobile employee app route mode
- customer/property reuse backend normalization
- quote review → approval → scheduling workflow refinement
- customer history and recurring service tracking
