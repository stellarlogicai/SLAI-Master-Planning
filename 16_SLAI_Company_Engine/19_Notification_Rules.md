# 19 — Notification Rules

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define how the future Company Engine should notify Jamie without becoming noisy or stressful.

---

## Core Rule

Notifications should protect focus.

```text
Dashboard first.
Push/email only when truly needed.
No constant noise.
```

---

## Notification Types

### Dashboard Only

For useful but non-urgent information:

- low-priority planning notes
- future module ideas
- minor doc updates
- non-urgent lead research
- parked decisions

### Daily Summary

For routine review:

- follow-ups due today
- open blockers
- new decisions logged
- GrowthAI leads ready for review
- ServicesOS beta notes

### High-Priority Alert

For items that may block current work:

- ServicesOS beta blocker
- customer/beta workflow issue
- payment/Stripe issue
- approved outreach waiting too long
- major decision needed

### Critical Alert

For rare items that require immediate attention:

- production-impacting issue later
- serious customer-facing failure
- security-sensitive issue
- urgent payment issue

---

## Notification Channels

Future channels:

- in-app dashboard
- daily digest
- email later
- mobile push later
- SLAI OS mobile notification later

MVP should start with in-app dashboard and optional daily summary only.

---

## What Should Notify Jamie

Notify when:

- current priority is blocked
- follow-up is due
- outreach draft needs approval
- beta feedback needs review
- high-fit lead is ready
- developer handoff is ready
- product priority conflict appears

---

## What Should Not Notify Jamie

Do not notify for:

- every future idea
- every minor planning edit
- low-value analytics
- old parked tasks
- duplicate reminders
- non-urgent future modules

---

## Snooze and Park Rules

Every alert should support:

```text
Resolve
Snooze
Park
```

Snooze means it matters later.
Park means it is preserved but not active.

---

## MVP Boundary

First version later:

```text
Dashboard alerts
Daily summary list
Manual severity
Resolve/snooze/park
```

No complex push notification engine at first.

---

## Future Planning Only

```text
This is a future notification model.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
