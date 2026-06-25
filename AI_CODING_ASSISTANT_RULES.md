# SLAI / ServicesOS AI Coding Assistant Rules

Status: Active global rules
Date: 2026-06-24
Owner: Jamie Brown / Stellar Logic AI

## Purpose

This file is the shared rulebook for any AI coding assistant or planning assistant working on SLAI repositories.

It is intended to translate across:

- ChatGPT
- Codex
- Claude
- Devin
- any future coding agent

When an assistant begins work, it should read this file first and follow it unless Jamie explicitly gives a narrower instruction for the current task.

## Repository Scope

Known active repositories for current SLAI work:

- `stellarlogicai/ServicesOS`
- `stellarlogicai/SLAI-Master-Planning`
- `stellarlogicai/SLAI-Website`

Do not inspect, modify, or plan against unrelated repositories unless Jamie explicitly names them.

## Product Priority Order

ServicesOS is priority one.

Current priority order:

1. ServicesOS
2. ServicesOS wife beta testing
3. ServicesOS UI fine-tuning
4. ServicesOS payments / Stripe / Stripe Connect
5. ServicesOS Tap to Pay later
6. SLAI website
7. GrowthAI
8. EducationOS
9. RetailOS / PharmacyOS
10. ComplianceAI
11. FutureAI

All non-ServicesOS product ideas are future planning unless Jamie explicitly says to work on them now.

## SLAI Philosophy

- AI should amplify humanity, not replace it.
- Humans remain responsible for important decisions.
- Build simple first; complexity is earned.
- MVPs solve real problems.
- Data informs decisions, but humans interpret them.
- Do not overbuild before ServicesOS is stable.
- Preserve long-term product ideas in planning docs without distracting from the current build.

## ServicesOS Current Mission

ServicesOS is the active build.

The immediate goal is:

```text
Finish testing after refactoring.
Fix beta-critical bugs.
Run wife beta.
Fine-tune UI.
Stabilize payments.
Only then expand into Tap to Pay or larger future modules.
```

The first wife-beta owner workflow should remain simple:

1. Dashboard
2. Create Estimate
3. Customers
4. Schedule
5. Payments
6. Settings

This workflow is protected.

## Core Build Rule

Feature work only happens after the safety net for that area exists.

Every coding pass must follow:

1. Small scoped task
2. Clear files likely touched
3. Files to avoid
4. Acceptance criteria
5. Tests or smoke coverage
6. Lint/build validation
7. Final report
8. Safe commit checkpoint or handoff

Do not perform broad, vague, multi-feature work.

## Scope Control

Do not expand scope.

If an unrelated issue is discovered:

```text
Document it as deferred.
Do not fix it unless it directly blocks the current task.
```

Do not rewrite app architecture unless Jamie explicitly asks.

Do not modify high-risk systems unless the task specifically requires it:

- Firebase security rules
- Auth/profile loading
- Stripe / Stripe Connect backend
- payment ownership / fee behavior
- tenant isolation
- destructive backup/export systems
- production data handling

## AI Coding Pass Protocol

Before making code changes, an assistant should identify:

- current task goal
- repo/branch/worktree state
- files already modified
- files likely to be touched
- files that should be avoided
- known relevant docs
- validation commands to run

If the repo has local uncommitted work from another assistant, do not overwrite it blindly.

If work appears partially completed, first reconstruct the task from:

- `git status`
- changed files
- tests
- progress docs
- `docs/servicesos-beta/CURRENT_TASK_HANDOFF.md`, if present

Then summarize the current state before editing.

## Multi-Agent Workflow Rule

Jamie may rotate between several AI coding assistants because of usage limits.

Therefore every assistant must assume another assistant may continue the work later.

Every task should end in one of two states:

```text
Validated and safe to commit.
```

or:

```text
Not finished; handoff file updated with exact resume instructions.
```

No vague `almost done` endings.

## Handoff Rule

If an assistant is about to hit a usage limit, cannot finish, or must stop mid-task, it must create or update:

```text
docs/servicesos-beta/CURRENT_TASK_HANDOFF.md
```

The handoff must include:

- current task goal
- files changed
- what is complete
- what is unfinished
- tests added/updated
- commands already run
- validation status
- known failures
- exact next steps
- files to avoid
- whether the repo is safe to commit

A future assistant should be able to continue from the handoff without guessing.

## Required Final Report

Every coding pass must report:

1. Files changed
2. Behavior before vs after
3. Tests added/updated
4. Lint result
5. Smoke test result
6. Full test result
7. Build result
8. Known failures
9. Deferred risks
10. Manual test steps
11. Whether the repo is safe to commit

If validation could not be run, say so clearly and explain why.

## Commit Rule

After a clean validated pass, create a checkpoint commit:

```bash
git add .
git commit -m "Clear description of completed task"
```

Do not start the next feature until the current task is validated, committed, or has a handoff file.

## Validation Rule

Run commands from the actual `package.json` scripts when available.

For ServicesOS web work, expected validation usually includes:

```bash
npm run lint
npm run test:smoke
npm run build
```

Also run focused tests for the touched area.

If full Vitest has known baseline Firebase `.env` / API key failures, clearly separate baseline failures from new failures.

Do not claim the build is safe if validation was skipped or failed.

## Smoke Test Rule

The wife-beta smoke test should protect:

- admin six-item sidebar
- customer portal-only navigation
- super-admin protected tools
- profile loading state
- profile error/missing/malformed-role states
- Dashboard render
- Create Estimate render
- manual estimate path without AI/photos
- Customers render
- Schedule render
- Schedule tabs
- Payments render
- Settings render
- Insurance tab under Settings
- Backup/destructive tools hidden from normal admin

New work should add or update smoke coverage when it changes core beta workflows.

## Current Wife-Beta Navigation Rule

Normal admin/owner users should see:

1. Dashboard
2. Create Estimate
3. Customers
4. Schedule
5. Payments
6. Settings

Customer users should see customer-facing portal/workflows only.

Super-admin/dev-only tools must not be exposed to normal admin users.

Do not show these as normal admin sidebar items:

- Customer Portal
- Staff Scheduling as a separate top-level item
- Route Optimization
- Calendar as a separate top-level item
- Insurance as a separate top-level item
- Data Export
- Tenant Management
- AI Training
- Backup

Expected placement:

- Calendar / Staff Scheduling / Crews belong under Schedule.
- Future Route Helper belongs under Schedule.
- Insurance belongs under Settings.
- Data Export is hidden from normal admin.
- Backup is Settings/super-admin/dev-only and must be handled carefully.
- Tenant Management is super-admin-only.
- AI Training is super-admin/dev-only.

## Auth/Profile Rule

Never silently downgrade unknown, loading, missing, malformed, or failed profile states to `customer`.

Only use `customer` when the profile is actually loaded and the role is known to be customer.

Expected behavior:

- loading profile -> show loading workspace state
- missing profile -> show safe workspace profile error state
- profile load error -> show safe workspace profile error state
- malformed/unrecognized role -> show safe workspace profile error state
- known admin -> show admin workflow
- known customer -> show customer workflow
- known super-admin -> show allowed super-admin workflow

Do not grant admin access when role is unknown.

Do not fake customer mode when profile loading fails.

## Estimate Engine Rule

Manual estimate creation must work even if:

- AI analysis is skipped
- photos are skipped
- AI/photo analysis fails
- customer uploads nothing

AI may assist estimates, but AI must not block manual owner workflow.

The owner should be able to:

```text
Enter job/customer details.
Generate manual estimate.
Review quote.
Adjust if needed.
Send when ready.
```

Do not make customer-facing quote sends automatic without explicit owner approval.

## ServicesOS AI Principle

ServicesOS AI is a decision-assist layer.

Pattern:

```text
AI notices.
AI suggests.
Human approves.
System records.
```

AI may suggest:

- estimates
- routes
- crews
- time windows
- equipment lists
- customer messages
- payroll notes
- pricing improvements
- job-cost warnings
- dashboard alerts

AI should not automatically finalize without human approval:

- customer-facing schedule changes
- quote sends
- payment requests
- payroll approval
- employee decisions
- customer notifications
- price changes
- major reschedules

## Owner Playbook Rule

Future Owner Playbook / Business Decision Memory is important, but it should not be implemented during unrelated beta-stabilization tasks.

When implemented later, it should learn owner preferences from approved/edited/rejected suggestions.

It should reduce owner adjustment load over time, not remove owner responsibility.

## Schedule Rule

Schedule is the home for:

- Calendar
- Jobs
- Crews / Staff Scheduling
- Route Helper later
- Time & Mileage later

Do not expose standalone Route Optimization to wife-beta admin users.

Do not implement full Route Helper, GPS, Employee App, AI Day Planner, or Payroll Assist inside unrelated tasks.

Schedule work should be layered:

1. Schedule foundation
2. Calendar/Jobs/Crews grouping
3. draft vs confirmed schedule
4. crew confirmation
5. Route Helper job cards
6. event-based GPS timestamps
7. AI Day Planner suggestions
8. employee app field execution later

## Route / GPS Rule

Route work should be built around field operations, not just shortest-path optimization.

Important concepts:

- current GPS starting point
- selected driver/GPS source
- crew confirmation
- customer windows
- job difficulty
- fixed vs flexible jobs
- estimated duration
- equipment needed
- owner approval before customer notifications

Rules:

- Do not expose lat/long fields to owners.
- Do not default to New York City or any hardcoded city.
- Use plain-language fallback if GPS fails.
- GPS should only run during active route/job workflows.
- Do not silently track employees.

## Employee App Rule

The employee app is future work unless explicitly promoted.

However, main ServicesOS web work should not block the employee app later.

Long-term split:

```text
Main ServicesOS web app = plan, approve, monitor, review
Employee app = confirm, navigate, execute, record
```

Employee app future responsibilities:

- confirm shift
- mark running late
- mark cannot work
- provide GPS source
- start route
- open directions
- mark arrived
- start job
- complete checklist
- upload photos
- add notes
- complete job
- depart / next stop

Do not build employee app scope inside unrelated web beta tasks.

## Crew Confirmation Rule

ServicesOS should not assume:

```text
Scheduled = actually working
```

A scheduled crew member should be treated as unconfirmed until they confirm or are manually confirmed by owner.

Crew confirmation statuses may include:

- Assigned
- Confirmation Sent
- Confirmed
- Running Late
- Unavailable
- No Response
- Checked In
- Active
- Completed

Do not finalize customer time slots before crew/driver readiness is known unless owner explicitly overrides.

## Payments / Stripe Rule

Payments must load safely for beta.

Do not change Stripe Connect/payment backend behavior unless fixing a confirmed blocking bug.

Do not alter platform fee behavior, charge ownership, refund responsibility, webhook logic, or connected-account flows without explicit scope.

Smoke tests should not use live Stripe or real payment completion.

Payment UI should degrade safely if data is empty.

## Payroll / Job Costing Rule

Payroll Assist and Job Costing are future layers.

Do not build payroll processing in beta-stabilization tasks.

Long-term direction:

```text
Track work once.
Use the same data for scheduling, mileage, payroll review, job costing, and profitability.
```

First payroll goal should be:

```text
Payroll Review + Payroll Export
```

not:

```text
ServicesOS runs payroll automatically.
```

Owner approval is required for payroll-related records.

## Dangerous Tools Rule

Backup, Data Export, Tenant Management, and AI Training are super-admin/dev-only.

Backup/destructive actions must not be visible to normal admin users.

Data export must not become a dumping ground for unrelated admin tools.

Do not expose destructive actions during wife beta unless explicitly requested and safely gated.

## Settings Rule

Settings should remain visible to normal admin/owner users.

Settings may contain:

- company/business settings
- insurance
- employee settings later
- mileage settings later
- payroll export later
- cost settings later

Do not remove Settings to simplify the sidebar.

## Customer Rule

Customers should become a real customer profile area.

Customers should not have to repeatedly enter the same information unless something changes.

Customer-related data should preserve:

- contact details
- addresses/properties
- service history
- estimates
- jobs/bookings
- payment status
- preferences/notes

Customer Portal should not be a normal admin sidebar item.

## Dashboard Rule

Dashboard should answer:

- what needs attention
- quote requests / pending estimates
- upcoming jobs
- money expected / collected
- schedule or crew warnings later
- payroll/costing warnings later

Dashboard language should be clear and owner-friendly.

Do not overload Dashboard with future platform demos.

## Documentation Rule

Planning docs should live in `stellarlogicai/SLAI-Master-Planning` unless they are code-adjacent ServicesOS docs.

ServicesOS code-progress docs may live under:

```text
docs/servicesos-beta/
```

Important planning decisions should be documented before becoming coding tasks.

Do not let future ideas disappear, but do not let them distract from ServicesOS beta.

## Prompting Rule

Every coding prompt should include:

- repo name
- current priority
- task goal
- exact scope
- files/areas to inspect
- files/areas to avoid
- acceptance criteria
- validation commands
- report format
- handoff requirement

Avoid prompts like:

```text
Improve the app.
Make it better.
Fix everything.
```

Prefer prompts like:

```text
Fix only the manual estimate fallback and add a focused test.
```

## Tool-Specific Rule Usage

### ChatGPT

Use project instructions plus this rules file for planning, prompts, docs, audits, and review.

### Codex

Tell Codex to read this file before work. Include the relevant excerpt in the prompt if needed.

### Claude

Tell Claude to read this file or copy the relevant rules into Claude project/session instructions.

### Devin

Paste a condensed version of this file into Devin's rules/settings area. Keep the full file as the repo source of truth.

## Development Order Rule

Current recommended ServicesOS order:

1. Finish wife-beta smoke test safety net
2. Manual wife-beta walkthrough
3. Fix smoke/manual failures
4. Schedule foundation cleanup
5. Customer profile/history cleanup
6. Create Estimate wife-beta polish
7. Payments beta-safe polish
8. Simple Route Helper / Today's Route later
9. Crew confirmation later
10. Employee app MVP later
11. Payroll/job-costing later
12. AI Owner Playbook later
13. Tap to Pay later

Do not skip the safety net to chase advanced functionality.

## Final Principle

The goal is not to make AI coding assistants move fast randomly.

The goal is:

```text
AI builds fast inside guardrails.
Safety nets catch regressions.
Humans keep product control.
ServicesOS becomes stable enough for real customers.
```
