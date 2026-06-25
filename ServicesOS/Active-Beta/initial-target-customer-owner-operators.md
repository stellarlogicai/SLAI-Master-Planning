# ServicesOS Initial Target Customer: Owner-Operator Cleaning Businesses

Document Status: Complete
Implementation Status: Active Beta Planning
Last Updated: 2026-06-25
Implementation Repo: stellarlogicai/ServicesOS
Related Commits:
- pending
Validation:
- Planning decision only; no ServicesOS code changes
Remaining Follow-Ups:
- Keep feature prioritization aligned with this ICP through wife beta
- Revisit larger-company workflows only after small-owner workflow is proven

## Purpose

This document captures the current ServicesOS target-customer guardrail.

ServicesOS is not being built first for large janitorial companies or enterprise service organizations.

The first target is small cleaning-service businesses where the owner is often also doing the work.

## Current Target Customer

Primary initial customer profile:

```text
small cleaning-service owner/operator
1 owner or owner couple
0-5 employees/helpers to start
owner is often cleaning jobs too
owner handles quoting, scheduling, customer communication, and payments
limited admin time
limited budget for multiple software subscriptions
needs simple day-to-day operating help
```

This matches the wife-beta use case and should remain the product anchor.

## Why This Matters

Small cleaning businesses do not usually operate like large companies.

A larger company may have:

- Office admin staff.
- Dispatchers.
- HR/payroll people.
- Dedicated sales team.
- Separate field managers.
- Formal reporting processes.
- More complex permissions.
- Deeper accounting workflows.

That is not the current target.

The current target often has one person doing many jobs:

- Cleaning.
- Quoting.
- Scheduling.
- Answering customers.
- Managing helpers.
- Checking payments.
- Handling issues.
- Updating notes/photos.

ServicesOS should reduce that burden first.

## Product Principle

Build for the owner who is also in the field.

Simple rule:

```text
Owner mobile = run today.
Employee mobile = do the work.
Web app = manage the business in detail.
```

## Feature Prioritization Guardrail

Prioritize features that help small owner-operator cleaning businesses complete daily work:

- Create estimate quickly.
- Save customer/property details.
- Schedule job.
- Assign employee/helper.
- Let employee complete job/checklist/photos.
- See job status.
- Understand payment status.
- Keep basic company/settings/insurance info organized.

Deprioritize features that mainly serve larger companies:

- Complex multi-level org charts.
- Enterprise permission systems.
- Advanced HR modules.
- Deep payroll automation.
- Complex territory management.
- Multi-branch reporting.
- Heavy analytics dashboards before real usage.
- Enterprise dispatch tools.
- Big-company compliance workflows.

These larger-company features may be future roadmap items, but they should not distract from the initial owner-operator beta.

## Beta Scope Implication

First beta should prove this core loop:

```text
owner/admin web planning
→ employee mobile execution
→ owner/admin web visibility
```

For an owner-operator, this may also mean:

```text
owner creates/schedules job
→ owner or helper works the job
→ job checklist/photos/status are updated
→ owner can see what happened without extra paperwork
```

## Mobile Implication

Owner/admin mobile is important later because small owners are often not at a desk.

But first beta should not build the full owner/admin mobile command center.

Current sequence:

1. Stabilize owner/admin web app.
2. Build Employee Field MVP.
3. Prove the owner-to-employee job flow.
4. Then add owner/admin mobile day-to-day controls.

Owner/admin mobile should eventually be basic and practical:

- Today schedule.
- Job/customer summary.
- Employee/helper status.
- Quick lead/customer capture.
- Quick estimate review/create.
- Payment status glance.
- Issue alerts.

The full details stay in the web app.

## Larger Companies Later

Larger cleaning businesses are not ignored forever.

They can become a later expansion once ServicesOS has proven value with smaller businesses.

Future larger-company expansion may include:

- More advanced permissions.
- Multi-manager roles.
- Branch/location support.
- Advanced reporting.
- More structured payroll/job costing.
- Dedicated dispatcher tools.
- More formal compliance workflows.

But these are not current beta priorities.

## Current Decision

ServicesOS should stay focused on small owner-operator cleaning services for now.

Big-business workflows are future planning only.

Do not let enterprise-style features outrank wife beta, Employee Field MVP, or simple owner/operator day-to-day usability.
