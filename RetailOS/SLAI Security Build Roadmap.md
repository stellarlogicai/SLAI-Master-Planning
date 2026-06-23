# SLAI Security Build Roadmap

Version: 1.0

---

# Purpose

This document defines how SLAI Security should be built from a simple deterministic system into a multi-agent behavioral intelligence ecosystem.

The goal is:

Not:

Build the most complicated AI.

But:

Build the most useful investigative security platform.

---

# Development Philosophy

Start simple.

Every advanced AI feature should sit on top of a stable deterministic foundation.

Build order:

```txt
Data Collection

↓

Behavior Baselines

↓

Risk Scoring

↓

Investigation Engine

↓

Human Review

↓

AI Explanations

↓

Shared Memory

↓

Specialist Models

↓

Red / White / Purple Team AI
```

---

# Phase 1

Event Collection

---

Every security event should follow a standard schema.

Example:

```js
{
  tenantId: "company_123",

  eventId: "evt_001",

  subjectId: "employee_456",

  eventType: "login",

  timestamp: "2026-06-18T02:15:00Z",

  metadata: {

    ipAddress: "203.0.113.10",

    country: "US",

    deviceId: "device_abc",

    browser: "Chrome",

    mfaPassed: true

  },

  schemaVersion: 1
}
```

---

Possible event types:

* Login
* Logout
* File Access
* API Request
* Network Connection
* Permission Change
* Password Reset
* Email Access
* Sensitive Data Access
* Configuration Change

---

# Phase 2

Behavior Baselines

---

Learn:

Normal.

---

Per User:

```txt
Normal Login Time

Normal Country

Known Devices

Average File Access

Average Download Size

Common Applications

Common IP Ranges
```

---

Per Role:

```txt
Managers

Developers

Executives

Support Staff

Admins
```

---

Per Company:

```txt
Work Hours

Business Locations

Common Software

Normal Traffic

Seasonal Trends
```

---

Example:

```js
{
  subjectId: "employee_456",

  normalLoginHours: [

    8,

    9,

    10,

    11,

    12,

    13,

    14,

    15

  ],

  commonCountries: [

    "US"

  ],

  knownDevices: [

    "device_abc",

    "device_xyz"

  ],

  avgDailyDownloadMb: 150
}
```

---

# Phase 3

Risk Engine

---

Risk Engine asks:

```txt
How unusual is this?

Can context explain it?

How confident are we?

What should happen next?
```

---

Example:

```js
function scoreLogin(event, baseline) {

  let score = 0;

  const reasons = [];

  if (

    !baseline.commonCountries.includes(

      event.metadata.country

    )

  ) {

    score += 0.3;

    reasons.push(

      "Unusual country"

    );

  }

  if (

    !baseline.knownDevices.includes(

      event.metadata.deviceId

    )

  ) {

    score += 0.25;

    reasons.push(

      "Unknown device"

    );

  }

  return {

    score,

    reasons

  };

}
```

---

# Phase 4

Investigation Engine

---

Suspicious does NOT mean guilty.

Suspicious means:

Investigate.

---

Pipeline:

```txt
Suspicious Event

↓

Create Investigation

↓

Gather Context

↓

Collect More Events

↓

Build Timeline

↓

Increase / Decrease Confidence

↓

Human Review
```

---

Investigation stores:

* Evidence
* Timeline
* Confidence
* Known Explanations
* Recommended Actions

---

# Phase 5

AI Explanations

---

The AI does NOT decide.

The AI explains.

---

Example:

```txt
Employee login differs from normal.

Evidence:

- New device

- New country

- Outside normal work hours

Possible Explanations:

- VPN

- Vacation

- New work laptop

Recommendation:

Continue investigation.
```

---

# Phase 6

Shared Memory

---

Memory stores:

```txt
Past Incidents

Lessons Learned

Known False Positives

User Baselines

Threat Intelligence

Company Policies

Previous Investigations
```

---

Memory exists so:

```txt
Many Minds

↓

Behave

↓

As One.
```

---

# Phase 7

Specialist Models

---

Coordinator AI

↓

Behavior AI

Threat AI

Identity AI

Forensics AI

Policy AI

↓

Memory

↓

Human Review

---

Behavior AI:

Understands:

Normal Behavior.

---

Threat AI:

Understands:

Attackers.

---

Identity AI:

Understands:

Permissions.

---

Forensics AI:

Understands:

Timelines.

---

Policy AI:

Understands:

Boundaries.

---

Coordinator:

Combines:

Everything.
