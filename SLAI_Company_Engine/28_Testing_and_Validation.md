# 28 — Testing and Validation

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define the validation discipline future Company Engine builds should follow.

---

## Core Rule

The Company Engine should follow the same discipline as ServicesOS.

```text
Small task.
Clear acceptance criteria.
Run checks.
No green checks = no commit.
```

---

## Validation Categories

### 1. Navigation Tests

Confirm:

- dashboard loads
- each screen is reachable
- routes do not crash
- empty states render correctly

### 2. Record Tests

Confirm:

- create records
- edit records
- archive/park records
- filter by product area
- filter by active/future
- required fields validate

### 3. Dashboard Tests

Confirm:

- top priority displays
- alerts display
- follow-ups due display
- product status cards display
- empty states are clear

### 4. GrowthAI Workflow Tests

Confirm:

- lead can move through statuses
- research notes can be attached
- outreach draft can be created
- approval status is required before sent status
- follow-up can be scheduled
- outcome can be recorded

### 5. AI Safety Tests Later

Confirm:

- AI suggestions are labeled
- AI does not send messages automatically
- AI does not change product priority automatically
- human approval is required for outreach

### 6. Integration Tests Later

Confirm:

- ServicesOS connection is read-only first
- GitHub references are read-only first
- no payment workflows are modified
- no customer messages are sent automatically

---

## Manual Testing Checklist

Before any future commit:

```text
App loads
Navigation works
No console errors
Core records can be created and edited
Dashboard still works
No unintended integrations are active
Human approval boundaries still work
```

---

## Future Commands

Actual commands depend on the future stack, but the standard should mirror ServicesOS:

```text
lint
tests
build
git status
```

---

## Report-Back Requirement

Codex/developer should report:

- files changed
- what was implemented
- validation commands run
- pass/fail results
- known limitations
- next recommended task

---

## Future Planning Only

```text
This is a future validation plan.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
