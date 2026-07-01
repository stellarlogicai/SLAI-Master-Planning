# ServicesOS Field Safety Button / Panic Alert

Status: Planned for next available ServicesOS V1 field-safety work  
Date: 2026-07-01  
Owner: Jamie Brown / Stellar Logic AI

## Purpose

Aunt B's Cleaning Services sends cleaners into private homes, sometimes in areas with unreliable cell service. The employee/field app needs a simple way for a cleaner to call for help, alert the owner/admin, and record an incident from an active job.

This feature should be presented as a field safety tool, not as a guaranteed emergency response system.

## Product Rule

```text
The app can help the cleaner call, alert, locate, and record.
The app cannot guarantee emergency response, alert delivery, or live location if the device has no cell/internet/GPS access.
```

Use honest wording everywhere. If the device has no connection, the app must not pretend the owner/admin received the alert or the latest location.

## Scope

### In Scope

- Add a Safety/Emergency button on the active field job screen.
- Provide quick actions to call 911, call owner/admin, and send a safety alert.
- Protect the alert action from accidental taps with confirmation or press-and-hold.
- Include job, employee, service address, timestamp, and GPS location if available.
- Queue safety alerts locally when offline.
- Sync queued alerts when connection returns.
- Show owner/admin active safety alerts.
- Allow owner/admin to mark alerts resolved.
- Add missed check-in GPS ping support when an active job becomes overdue/unconfirmed and location permissions are available.
- Preserve tenant isolation.

### Out of Scope

- Police dispatch integration.
- 24/7 monitoring center.
- Guaranteed emergency response claims.
- Hidden audio/video recording.
- Full background location tracking all day.
- Constant live GPS tracking.
- Weapon/threat detection.
- Complex escalation trees.
- Push notifications unless already safely available.

## Employee/Field App Flow

```text
Cleaner opens active job
→ taps Safety / Emergency
→ sees emergency actions
→ can call 911
→ can call owner/admin
→ can send safety alert
→ app sends or queues alert honestly
```

Recommended menu items:

```text
Call 911
Call owner/admin
Send safety alert to owner/admin
Cancel
```

To prevent accidental alerts, use one of:

```text
Press and hold for 2 seconds
Confirm: Send safety alert?
```

## Offline / Bad Service Behavior

If online:

```text
Safety alert sent to owner/admin.
```

If offline or no connection:

```text
No connection. Use emergency calling if available. Alert saved and will send when connection returns.
```

Offline rules:

- Save the alert locally.
- Show the alert as pending sync.
- Keep the alert visible until synced or intentionally canceled.
- Retry when connection returns.
- Do not show a fake delivered state.

## Suggested Firestore Shape

```ts
tenants/{tenantId}/safetyAlerts/{alertId}: {
  tenantId,
  jobId,
  employeeUid,
  employeeName,
  customerName,
  serviceAddress,
  gpsLocation: {
    lat,
    lng,
    accuracy
  },
  alertType: "field_safety_alert",
  status: "active" | "resolved" | "canceled",
  createdAt,
  resolvedAt,
  resolvedByUid,
  message,
  source: "employee_field_app"
}
```

## Suggested Offline Queue Shape

```ts
{
  localId,
  tenantId,
  jobId,
  employeeUid,
  actionType: "send_safety_alert",
  payload,
  createdAt,
  syncStatus: "pending" | "syncing" | "synced" | "failed",
  retryCount,
  lastError
}
```

## Owner/Admin UI

Owner/admin should see active safety alerts in the web app.

Minimum UI:

```text
Safety alert active
Employee name
Job/customer
Service address
GPS location if available
Timestamp
Status
```

Owner/admin actions:

```text
Call employee if phone exists
View related job/customer
Request latest location if permitted
Mark resolved
```

The alert should be tenant-scoped and persistent after refresh/logout/login.

## Safety Rules

- No alert without tenantId.
- No cross-tenant alert visibility.
- No fake delivered state.
- Offline queued alert must remain visible until synced or intentionally canceled.
- Emergency call action should use the device dialer.
- The app should not automatically call emergency services without user action.
- The app should not claim guaranteed response.
- Location pings require employee/app permission and should be limited to active job safety events, missed check-ins, or explicit safety alerts.
- The app should show last known location timestamp and accuracy, not imply real-time tracking when it is stale.

## Acceptance Criteria

- Employee can open Safety/Emergency menu from active job.
- Employee can call 911 through the device dialer.
- Employee can call owner/admin if owner/admin phone exists.
- Employee can send safety alert.
- Alert includes job/address/timestamp and GPS if available.
- Offline alert is saved locally and queued.
- Failed alert shows honest error.
- Owner/admin sees active safety alert.
- Owner/admin can mark alert resolved.
- Alert persists after refresh/logout/login.
- Tenant A cannot see Tenant B alerts.
- Mobile layout remains usable.
- No fake safety or delivery guarantee is shown.
- Lint and build pass when promoted to implementation.

## Recommended Companion Safety Feature: Job Check-In Timer

In addition to the Safety/Emergency button, ServicesOS should likely add a simple field check-in timer for V1 or V1.5.

Reason:

```text
If the cleaner cannot press the panic button, the system should still notice when a job appears overdue or unconfirmed.
```

V1-safe version:

- Cleaner taps `Arrived` when starting a job.
- Cleaner taps `Leaving / Complete` when done.
- Owner/admin sees current field status.
- If the job goes past an expected time window without completion/check-in, ServicesOS flags `check_in_overdue`.
- When `check_in_overdue` is triggered, ServicesOS attempts a one-time latest-location ping if permissions and connection allow.
- No constant live GPS tracking is required.
- No emergency claim is made.
- Owner/admin decides whether to call or follow up.

Suggested statuses:

```text
not_started
arrived
in_progress
check_in_overdue
location_ping_requested
location_ping_received
location_ping_failed
completed
left_property
```

This should not replace the Safety/Emergency button. It is a backup safety net for owner-operated field visibility.

## Missed Check-In GPS Ping

If a cleaner does not check in, check out, or complete the job within the expected window, ServicesOS should attempt to confirm the cleaner's latest location.

This should be implemented as an on-demand safety ping, not constant tracking.

Suggested flow:

```text
Job starts or cleaner taps Arrived
→ expected duration/check-in window starts
→ no check-in or completion by expected time
→ job becomes check_in_overdue
→ app attempts latest-location ping if allowed
→ owner/admin sees last known location, timestamp, and accuracy
→ owner/admin decides whether to call, wait, or escalate
```

Location ping behavior:

- Use only during an active assigned job, active safety alert, or overdue check-in.
- Require location permission.
- Attach location to the tenant-scoped job safety/check-in record.
- Show timestamp and accuracy.
- If GPS/location permission is unavailable, show `location_ping_failed` or `location_unavailable`.
- If offline, queue the ping attempt/result when possible and show honest status.
- Never imply the location is current if it is only the last known location.

Suggested data shape:

```ts
jobSafetyStatus: {
  fieldStatus,
  expectedCheckInAt,
  lastCheckInAt,
  lastLocationPingAt,
  lastKnownLocation: {
    lat,
    lng,
    accuracy,
    capturedAt,
    source: "active_job" | "missed_check_in" | "safety_alert"
  },
  locationPingStatus: "not_requested" | "requested" | "received" | "failed" | "unavailable",
  overdueReason,
  ownerNotifiedAt,
  updatedAt
}
```

Owner/admin UI should show:

```text
Check-in overdue
Last known location
Location timestamp
Accuracy
Call employee
View job/customer
Mark resolved / false alarm
```

Privacy and trust rule:

```text
Location is used for active job safety and missed check-ins, not for all-day employee surveillance.
```

## Codex Guardrail

When promoted to Codex, use this framing:

```text
Add a tenant-scoped Field Safety Button / Panic Alert foundation. This is not a guaranteed emergency response system. Support call actions, owner/admin alerting, offline queueing, active-alert review, missed check-in GPS ping, and honest sync/location/delivery states. Do not build police dispatch, monitoring center, hidden recording, constant live GPS tracking, or all-day surveillance.
```

## Current Priority

This belongs in the V1 safety stack once work resumes because it protects the person doing the field job. It should be implemented together with offline-safe field workflow and Client Safety Pre-Check, not as a broad emergency-services platform.
