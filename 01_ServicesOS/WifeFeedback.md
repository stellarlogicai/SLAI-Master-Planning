# ServicesOS Wife Beta Feedback

## Purpose

This file tracks feedback from Jamie's wife while she tests ServicesOS for her cleaning business.

Important rule:

```text
Do not defend the app.
Observe.
Ask questions.
Write it down.
Fix what matters.
```

---

# Beta Goal

The goal is not for the app to be perfect.

The goal is:

```text
Can a real cleaning business owner use ServicesOS without Jamie explaining every step?
```

---

# Feedback Categories

Use these labels:

- Bug
- Confusing UX
- Missing Feature
- Too Many Clicks
- Wrong Wording
- Payment Issue
- Scheduling Issue
- Employee App Issue
- Training Issue
- Customer Workflow Issue
- Nice To Have
- Critical Before Launch

---

# Feedback Template

```md
## Feedback Item

Date:
Tester:
Category:
Severity:
Status:

### What Happened?

### What Was Expected?

### What Was Confusing?

### Steps To Reproduce

1.
2.
3.

### Screenshot / Notes

### Fix Plan

### Priority

P0 / P1 / P2 / P3

### Resolution

```

---

# Severity Levels

## P0 — Critical

Must fix before real beta.

Examples:

- Cannot login
- Cannot create customer
- Cannot schedule job
- Payment broken
- Data wrong
- Employee cannot complete job

## P1 — Important

Should fix before customer beta.

Examples:

- Confusing estimate workflow
- Missing customer notes
- Checklist difficult to use
- Employee app unclear

## P2 — Improvement

Useful but can wait.

Examples:

- More polish
- Better wording
- Extra shortcut
- Nice dashboard improvement

## P3 — Future

Good idea but not needed now.

Examples:

- Advanced AI feature
- Extra customization
- Complex reporting

---

# Testing Instructions For Wife

Please try to break the app.

Do not try to be nice.

Test like a real user:

- Click things out of order
- Forget what buttons do
- Try wrong inputs
- Create fake customers
- Schedule fake jobs
- Cancel/reschedule
- Try to collect payment in test mode
- Use the employee app like a cleaner would
- Tell Jamie when something feels annoying

---

# Week 1 Testing Plan

## Day 1 — Login / Basic Setup

- [ ] Login
- [ ] Logout
- [ ] Wrong password
- [ ] Forgot password if available
- [ ] View dashboard
- [ ] Edit profile/company info if available

## Day 2 — Customers

- [ ] Create customer
- [ ] Edit customer
- [ ] Add notes
- [ ] Add pet/access notes
- [ ] Search customer
- [ ] Create property/address

## Day 3 — Estimates

- [ ] Create estimate
- [ ] Add rooms/services
- [ ] Apply discount
- [ ] Send/mark sent
- [ ] Accept/decline
- [ ] Convert to job if available

## Day 4 — Scheduling

- [ ] Schedule job
- [ ] Assign employee
- [ ] Reschedule job
- [ ] Cancel job
- [ ] Create recurring job if available

## Day 5 — Employee App

- [ ] Employee login
- [ ] View today's jobs
- [ ] Open job
- [ ] Complete checklist
- [ ] Upload photo
- [ ] Send message
- [ ] Mark job complete

## Day 6 — Payments

- [ ] Deposit test payment
- [ ] Final test payment
- [ ] Tap to Pay test if available
- [ ] Receipt/status check
- [ ] Failed payment handling

## Day 7 — Full Workflow

Run full fake customer workflow:

```text
Customer
↓
Estimate
↓
Contract
↓
Payment
↓
Schedule
↓
Employee App
↓
Checklist
↓
Photos
↓
Complete Job
↓
Final Payment
```

---

# Feedback Log

## Example Entry

Date:
2026-07-XX

Tester:
Wife

Category:
Confusing UX

Severity:
P1

Status:
Open

### What Happened?

Could not find customer notes while scheduling a job.

### What Was Expected?

Expected customer notes to be visible on the scheduling screen.

### What Was Confusing?

Had to go back to the customer page to check notes.

### Steps To Reproduce

1. Open schedule
2. Create job
3. Select customer
4. Look for notes

### Fix Plan

Show key customer notes, pet notes, and access notes in the job creation screen.

### Priority

P1

### Resolution

Pending
