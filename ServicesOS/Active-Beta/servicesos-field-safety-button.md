# ServicesOS Field Safety Button / Panic Alert

Status: Planned for next available ServicesOS V1 field-safety work  
Date: 2026-07-01  
Owner: Jamie Brown / Stellar Logic AI

## Purpose

Aunt B's Cleaning Services sends cleaners into private homes, sometimes in areas with unreliable cell service. The employee/field app needs a simple way for a cleaner to call for help, alert the owner/admin, and record an incident from an active job.

This feature should be presented as a field safety tool, not as a guaranteed emergency response system.

## Product Rule

```text
The app can help the cleaner call, alert, and record.
The app cannot guarantee emergency response or alert delivery without cell/internet service.
```

Use honest wording everywhere. If the device has no connection, the app must not pretend the owner/admin received the alert.

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
- Preserve tenant isolation.

### Out of Scope

- Police dispatch integration.
- 24/7 monitoring center.
- Guaranteed emergency response claims.
- Hidden audio/video recording.
- Full background location tracking.
- Live GPS tracking all day.
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
- No live GPS tracking is required.
- No emergency claim is made.
- Owner/admin decides whether to call or follow up.

Suggested statuses:

```text
not_started
arrived
in_progress
check_in_overdue
completed
left_property
```

This should not replace the Safety/Emergency button. It is a backup safety net for owner-operated field visibility.

## Codex Guardrail

When promoted to Codex, use this framing:

```text
Add a tenant-scoped Field Safety Button / Panic Alert foundation. This is not a guaranteed emergency response system. Support call actions, owner/admin alerting, offline queueing, active-alert review, and honest sync/delivery states. Do not build police dispatch, monitoring center, hidden recording, or live all-day tracking.
```

## Current Priority

This belongs in the V1 safety stack once work resumes because it protects the person doing the field job. It should be implemented together with offline-safe field workflow and Client Safety Pre-Check, not as a broad emergency-services platform.
