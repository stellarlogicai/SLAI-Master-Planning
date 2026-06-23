# ServicesOS Disaster Recovery Plan

## Purpose

This document defines what to do when something breaks badly.

Goal:

```text
Do not figure out disaster recovery during the disaster.
```

---

# What Counts As A Disaster?

A disaster is any event that threatens:

- Customer data
- Payment reliability
- Scheduling accuracy
- Company access
- Platform availability
- Trust in ServicesOS

---

# Priority Order During Any Incident

1. Protect customer/company data
2. Prevent payment mistakes
3. Restore access
4. Communicate clearly
5. Fix root cause
6. Document what happened
7. Prevent repeat failure

---

# Scenario 1 — Firebase / Firestore Outage

## Symptoms

- App cannot load data
- Jobs do not appear
- Customers cannot be created
- Employee app cannot sync

## Immediate Response

- Check Firebase status dashboard
- Confirm issue is not local internet/device
- Prevent repeated risky actions from users
- Communicate outage to affected users
- If possible, switch app to read-only/offline mode

## Recovery

- Wait for Firebase service recovery
- Verify data consistency after outage
- Check queued employee app updates
- Confirm no duplicate jobs/payments were created

## Prevention

- Add clear offline/error states
- Queue non-critical employee app updates
- Avoid destructive retries
- Add user-facing status messages

---

# Scenario 2 — Stripe Outage / Payment Failure

## Symptoms

- Payments fail
- Tap to Pay unavailable
- Webhooks delayed
- Payment status stuck as processing

## Immediate Response

- Check Stripe status
- Stop retrying automatically if risk of duplicate charge
- Tell user payment is pending/failed clearly
- Allow cash/check/manual mark only if business policy allows

## Recovery

- Verify PaymentIntent status in Stripe dashboard
- Reconcile Firestore payment record
- Send receipt only after confirmed success
- Mark failed payments clearly

## Prevention

- Webhook-based payment confirmation
- Avoid assuming payment success from frontend alone
- Add payment reconciliation tool
- Log all payment attempts

---

# Scenario 3 — Lost Owner/Admin Access

## Symptoms

- Owner cannot login
- Account disabled accidentally
- Role changed incorrectly

## Immediate Response

- Verify identity of owner
- Check Firebase Auth user
- Check Firestore user role
- Check company ownership record
- Restore owner role only after verification

## Recovery

- Restore correct role
- Log the correction
- Review why access was lost

## Prevention

- Backup admin process
- Audit role changes
- Require confirmation before owner role removal
- Do not allow last owner to be removed

---

# Scenario 4 — Cross-Company Data Exposure

## Symptoms

- User sees another company’s customer/job data
- Employee sees unassigned jobs
- Customer sees wrong invoice

## Immediate Response

- Disable affected access if needed
- Identify affected users/records
- Stop further access
- Review Firestore rules
- Review query filters

## Recovery

- Patch rules/code
- Verify fix with test accounts
- Audit affected records
- Document incident

## Prevention

- All queries require `companyId`
- Firestore rules enforce tenant isolation
- Automated tests for cross-company access
- Never rely only on frontend filtering

---

# Scenario 5 — Database Corruption / Bad Migration

## Symptoms

- Records missing fields
- Jobs broken after update
- Customer data overwritten
- Payments disconnected from jobs

## Immediate Response

- Stop deployment or rollback
- Identify changed collections
- Export affected data if possible
- Do not run more migrations blindly

## Recovery

- Restore from backup/export if available
- Write repair script if safer
- Test repair on small sample first
- Confirm with affected users

## Prevention

- Backup before migrations
- Migration dry run
- Versioned schema changes
- Rollback plan
- Never run production migration without test

---

# Scenario 6 — Broken Deployment

## Symptoms

- Web app blank screen
- Employee app crashes
- Cloud Functions fail
- New version breaks workflow

## Immediate Response

- Roll back to previous working deployment
- Check build logs
- Check console errors
- Check Firebase Functions logs

## Recovery

- Patch issue locally
- Test before redeploy
- Confirm critical workflows

## Prevention

- Keep last known good build
- Automated smoke tests before deploy
- Deploy during low-usage windows
- Version release notes

---

# Scenario 7 — Employee App Offline Sync Failure

## Symptoms

- Checklist updates missing
- Photos not uploaded
- Job completion not synced
- Duplicate time events

## Immediate Response

- Check local queue
- Check connection
- Prevent duplicate submission where possible
- Let user know sync is pending

## Recovery

- Retry queued updates
- Manually reconcile if needed
- Mark conflict records for review

## Prevention

- Queue updates locally
- Use idempotent update IDs
- Add sync status indicators
- Avoid complex offline conflict merging in V1

---

# Scenario 8 — Security Compromise

## Symptoms

- Suspicious login
- Unknown role change
- Unexpected payment action
- Data edited by unknown user

## Immediate Response

- Disable compromised account
- Reset password
- Revoke sessions if possible
- Review audit logs
- Check payment activity

## Recovery

- Restore affected data
- Notify affected parties if required
- Patch security gap
- Rotate keys if needed

## Prevention

- Strong password requirements
- MFA later
- Audit logs
- Role change alerts
- Secret scanning

---

# Backup Strategy

## Minimum V1

- Manual Firestore exports before major releases
- Export important planning docs through Git
- Backup environment variable notes securely
- Keep Stripe dashboard as payment source of truth

## Later

- Scheduled Firestore backups
- Automated export to secure storage
- Backup restore testing
- Versioned deployment backups

---

# Incident Log Template

```md
# Incident: [Title]

Date:
Reported By:
Affected System:
Severity:

## What Happened

## Impact

## Immediate Actions

## Root Cause

## Fix

## Prevention

## Follow-Up Tasks
```

---

# Severity Levels

## Critical

- Payment data wrong
- Cross-company data exposed
- App unusable for all customers
- Security compromise

## High

- Scheduling broken
- Employee app unusable
- Stripe webhooks failing
- Major workflow blocked

## Medium

- Specific feature broken
- Workaround exists
- Non-critical data delayed

## Low

- UI issue
- Minor bug
- Documentation issue

---

# Rule

Do not hide problems.

ServicesOS should build trust by:

```text
Detecting issues early
communicating clearly
fixing quickly
preventing repeats
```
