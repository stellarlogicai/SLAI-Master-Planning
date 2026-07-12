# ServicesOS Beta Scope Decisions and Mobile MVP

Document Status: Complete
Implementation Status: Active Beta Planning
Last Updated: 2026-06-25
Implementation Repo: stellarlogicai/ServicesOS
Related Commits:
- pending
Validation:
- Planning decision only; no ServicesOS code changes
Remaining Follow-Ups:
- Confirm exact React Native app path inside the ServicesOS repo
- Inspect existing React Native employee app before implementation
- Convert this into coding tasks after owner/admin beta blockers are fixed

## Purpose

This document captures beta-scope decisions for ServicesOS after clarifying that the employee app is part of beta, but only as a controlled Employee Field MVP.

The web app remains the owner/admin source of truth. The React Native app becomes the employee field-execution surface.

## Updated Beta Readiness Definition

ServicesOS is ready for wife/field beta when these areas work without beta blockers:

### Owner/Admin Web App

- Dashboard loads and does not crash on empty or partial data.
- Create Estimate manual flow works.
- Customers can be created, edited, and viewed.
- Employees can be created, edited, and viewed.
- Schedule can create/assign work.
- Payments page is understandable and does not crash.
- Settings and Insurance basics work.

### Employee React Native App

- Employee can log in.
- Employee can see assigned jobs.
- Employee can open a job.
- Employee can see safe customer/property/job details.
- Employee can see and complete the job checklist.
- Employee can upload before pictures.
- Employee can upload after pictures.
- Employee can start the job.
- Employee can report an issue/note.
- Employee can complete the job.
- Owner/admin can see status, checklist progress, notes, and photos in the web app.

## First End-to-End Golden Path

The first real beta workflow should be:

```text
Owner creates/views/edits employee
→ owner creates/views/edits customer
→ owner creates estimate
→ owner schedules job
→ owner assigns employee
→ employee opens React Native app
→ employee sees assigned job
→ employee opens job details
→ employee uploads before photos
→ employee starts job
→ employee checks off tasks
→ employee adds note/problem if needed
→ employee uploads after photos
→ employee completes job
→ owner sees completed job, checklist, notes, and photos in web app
```

This should become the primary workflow test.

## Employee Management Is In Beta

Employee records must be part of beta because the mobile app depends on assigned employees.

Minimum beta employee management:

- Create employee.
- View employee.
- Edit employee.
- Assign employee to job.
- Employee can authenticate or be linked to an app login.
- Employee role/tenant access is clear.

Deferred employee management:

- Payroll settings.
- Time clock.
- Break/lunch logic.
- Advanced permission management.
- Training progress.
- Performance analytics.

## Before and After Pictures Are In Beta

Before/after pictures are required for the employee beta loop.

Minimum beta photo requirements:

- Employee can upload at least one before photo for a job.
- Employee can upload at least one after photo for a job.
- Photos are tied to the correct tenant and job.
- Owner/admin can view uploaded photos from the web app.
- Missing photos should not crash either app.

Recommended beta photo fields:

```text
beforePhotos: [
  {
    url,
    storagePath,
    uploadedBy,
    uploadedAt,
    note optional
  }
]

afterPhotos: [
  {
    url,
    storagePath,
    uploadedBy,
    uploadedAt,
    note optional
  }
]
```

Deferred photo features:

- Photo annotations.
- AI photo analysis for job completion.
- Required room-by-room photo sets.
- Customer-facing photo gallery.
- Heavy report generation.
- Automatic image resizing extension unless storage/performance becomes a real pain.

## React Native App Location Assumption

The React Native app should already be inside the ServicesOS repo.

Before mobile implementation, coding assistant must inspect the repo and report:

- Mobile app folder path.
- Existing screens.
- Existing Firebase/Auth setup.
- Existing navigation.
- Existing job/checklist/photo code, if any.
- What already works.
- What is missing for Employee Field MVP.

Do not rebuild the React Native app from scratch unless the repo inspection proves it is unusable.

## Minimum Job / Checklist Data Model

The beta data model should include all core fields needed for web-to-mobile sync.

Minimum job fields:

```text
jobId
tenantId
customerId
assignedEmployeeIds
scheduledDate
status
serviceType
address
propertyNotes
checklistItems
employeeNotes
beforePhotos
afterPhotos
startedAt
completedAt
createdAt
updatedAt
```

Minimum checklist item fields:

```text
id
label
completed
completedAt
completedBy
notes optional
```

Minimum employee note / issue fields:

```text
id
text
createdBy
createdAt
type: note | issue
```

Minimum status values:

```text
assigned
in_progress
completed
issue_reported
```

Optional later status values:

```text
on_the_way
arrived
paused
canceled
needs_review
rescheduled
```

## Employee Visibility Rule

The employee app should show only the information needed to complete assigned work.

Employee can see:

- Assigned jobs only.
- Customer name.
- Service address.
- Job notes.
- Safe access notes.
- Checklist.
- Before/after photo upload.
- Status buttons.
- Issue/note field.

Employee should not see:

- Full customer CRM.
- Payment records.
- Business analytics.
- Other employees’ jobs unless assigned.
- Admin settings.
- Stripe/payment setup.
- Owner-only notes.

## Mobile Beta Blocker Rule

Mobile beta blocker means one of these fails:

- Employee cannot log in.
- Employee cannot see assigned job.
- Employee cannot open assigned job.
- Employee cannot start job.
- Employee cannot update checklist.
- Employee cannot upload before/after photos.
- Employee cannot complete job.
- Employee status/checklist/photos do not appear in the web app.
- Any workflow crash or data-loss issue blocks the golden path.

Everything else should be classified as:

- Beta Annoyance.
- Future Polish.
- Deferred Feature.

## Workflow Test Requirement

The employee app should go through an end-to-end workflow test before beta.

Minimum workflow test:

```text
1. Owner creates/edits/views employee in web app.
2. Owner creates/edits/views customer in web app.
3. Owner creates estimate in web app.
4. Owner schedules job in web app.
5. Owner assigns employee.
6. Employee logs into React Native app.
7. Employee sees assigned job.
8. Employee opens job detail.
9. Employee uploads before photo.
10. Employee starts job.
11. Employee completes checklist.
12. Employee adds note or issue.
13. Employee uploads after photo.
14. Employee completes job.
15. Owner sees status/checklist/notes/photos in web app.
```

This test is more important than adding extra mobile features.

## Job Completion Rule

Minimum beta completion behavior:

```text
Employee completes job
→ status changes to completed
→ completedAt timestamp saves
→ checklist state is saved
→ before/after photos are saved or safely absent
→ notes/issues are saved
→ owner sees completed job in web app
```

Deferred completion behavior:

- Customer receipt.
- Review request.
- Final invoice.
- Tips.
- Payroll calculation.
- AI quality review.
- Customer-facing completion report.

## Training Library Decision

Training is not first beta.

Training should be considered beta phase 2 after the employee field workflow works.

Reason:

- First beta must prove owner-to-employee job execution.
- Training library adds useful value but can distract from the core workflow.

Phase 2 training candidates:

- New Hire Orientation.
- Chemical Safety.
- Residential Cleaning Fundamentals.
- Room-specific cleaning modules.
- Quizzes.
- Training progress tracking.

## Payments Decision

Payments stay owner/admin web-only for first beta.

Do not add mobile payments yet.

Deferred:

- Employee-collected payments.
- Tap to Pay.
- Tips.
- Field invoice collection.

Reason:

- Stripe Connect web/admin flow must be stable first.
- Payment features are high-risk and should not be mixed into first employee field beta.

## Current Priority Order

1. Finish owner/admin wife-beta manual walkthrough.
2. Fix owner/admin beta blockers.
3. Confirm employee create/edit/view workflow on web.
4. Inspect existing React Native app inside ServicesOS repo.
5. Build only the mobile correspondence pieces needed for the golden path.
6. Add before/after photo support for job execution.
7. Run full owner/admin web plus employee mobile workflow test.
8. Wife beta.
9. Training library beta phase 2.
10. Mobile payments, GPS, payroll, route helper, and advanced features later.
