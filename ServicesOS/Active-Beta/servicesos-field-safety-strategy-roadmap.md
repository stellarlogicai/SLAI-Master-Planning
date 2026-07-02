# ServicesOS Field Safety Strategy Roadmap

Status: Strategic path documented; implementation not started  
Date: 2026-07-01  
Owner: Jamie Brown / Stellar Logic AI

## Purpose

This document captures the new ServicesOS field-safety path discovered during wife-beta planning.

The core insight:

```text
Field safety is not just a feature.
Field safety can become a premium ServicesOS revenue layer and a reusable SLAI capability.
```

The immediate reason for the feature is practical: Aunt B's Cleaning Services sends cleaners into private homes, sometimes with weak cell service. The long-term opportunity is bigger: the same safety layer can support other ServicesOS verticals and future SLAI products.

## ServicesOS Guardrail

ServicesOS remains priority one.

Do not spin field safety into a standalone product right now. Build it first because Aunt B's needs it, inside the ServicesOS V1 field workflow.

```text
Build it first as ServicesOS safety infrastructure.
Design it cleanly enough to reuse later.
Monetize premium layers only after the basic field workflow proves useful.
```

## Strategic Positioning

ServicesOS is evolving toward:

```text
MaidCentral-style cleaning operations
+ owner-operated simplicity
+ offline field workflow
+ GrowthAI
+ field-worker safety
```

The safety layer strengthens the ServicesOS story:

```text
ServicesOS helps small service businesses run jobs, protect workers, get paid, and grow.
```

## V1 Safety Stack

The V1 safety stack should stay focused and practical:

```text
Client Safety Pre-Check
+ Offline-safe field workflow
+ Field Safety / Panic Button
+ Job Check-In Timer
+ Missed Check-In GPS Ping
```

### V1 Must-Have Safety Behaviors

- Address required before booking or field assignment.
- Owner/admin can perform Client Safety Review.
- Unsafe or unreviewed jobs cannot be assigned accidentally.
- Cleaner can call 911 through the device dialer.
- Cleaner can call owner/admin.
- Cleaner can send safety alert to owner/admin.
- Safety alert can be queued offline and synced later.
- Cleaner can tap `Arrived` and `Leaving / Complete`.
- Missed check-in can trigger owner/admin warning.
- Missed check-in can attempt a one-time latest-location ping if permission and connection allow.
- Owner/admin sees last known location, timestamp, and accuracy.
- No fake delivery, safety, or emergency-response claims.

## V1 Not Included

Do not build these into V1:

- Police dispatch integration.
- 24/7 monitoring center.
- Guaranteed emergency response.
- Constant live GPS tracking.
- All-day employee tracking.
- Hidden tracking.
- Hidden audio/video recording.
- Complex emergency escalation trees.
- Paid background checks.
- Full ComplianceAI.

## Premium Safety Path

Field safety should eventually become a premium ServicesOS layer.

Suggested product path:

```text
Core ServicesOS
→ Field Operations
→ Safety + Growth
→ Field Safety Pro
→ Active Job Live Location Add-On
→ Emergency Response Add-On later
```

## Suggested Future Packaging

### Field Safety Basic

Likely included in Field Operations or Safety + Growth tier.

Includes:

- Safety/Emergency button.
- Call 911 through device dialer.
- Call owner/admin.
- Send owner/admin safety alert.
- Basic job check-in timer.
- Missed check-in warning.
- One-time GPS ping on missed check-in if permitted.
- Incident record.
- Offline alert queue.

### Field Safety Pro

Premium add-on.

Possible pricing direction:

```text
+$29-$49/month base
+ $5-$15/month per active field worker
```

Potential features:

- SMS backup alerts.
- Escalation contacts.
- Safety incident history.
- Safety reports.
- GPS ping audit trail.
- False-alarm tracking.
- Owner/admin escalation workflow.
- Employee emergency profile.
- Safety notes by job/customer.
- More advanced incident reporting.

### Active Job Live Location

Premium location add-on.

Use safer naming instead of "constant tracking":

```text
Active Job Live Location
Field Safety Live Location
```

Possible pricing direction:

```text
+$10-$25/month per active field worker
```

Rules:

- Track only while employee is actively working an assigned job or shift.
- Tracking starts when the cleaner taps `Arrived` or starts the assigned job.
- Tracking stops when the cleaner taps `Leaving`, `Complete`, or `End Job`.
- If job is overdue, safety tracking may continue until resolved.
- The worker must see that live safety location is active.
- No hidden tracking.
- No off-hours tracking.
- No all-day surveillance.

Potential features:

- Active-job live location.
- Last known location.
- Location breadcrumb trail.
- Arrival/departure confirmation.
- Owner/admin map view.
- Job timeline location proof.
- Location audit trail.

### Emergency Response Add-On

Future premium/high-trust add-on only.

Possible pricing direction:

```text
+$99-$199/month base
+ per-worker fee
+ partner or monitoring cost pass-through
```

Potential features:

- Approved emergency-services partner integration.
- Agency-ready incident package.
- Location/job/customer context.
- Emergency escalation status tracking.
- Acknowledgment states.
- Audit trail.
- False-alarm workflow.

Do not build or market as police dispatch unless ServicesOS has a verified agency/partner pathway and legal review.

## Cost and Margin Assumption

The self-managed safety system is expected to be high margin if kept event-based.

Likely low-cost components:

- Firestore safety records.
- Cloud Functions.
- Firebase Cloud Messaging.
- Device GPS.
- Local offline queue.
- Basic owner/admin dashboard.

Costs rise with:

- SMS backup alerts.
- Voice escalation.
- High-frequency live location.
- Map/geocoding usage.
- Monitoring partners.
- Emergency response partners.
- Support burden.
- False-alarm handling.
- Legal/liability review.

Pricing should charge for the business value and safety workflow, not merely raw infrastructure cost.

## Reusable SLAI Capability

Internal reusable name:

```text
SLAI Field Safety Core
```

Future customer-facing names:

```text
ServicesOS Field Safety Pro
SLAI SafetyLayer
Field Safety Core
```

Reusable primitives:

- Client/location safety pre-check.
- Field worker check-in.
- Panic/safety alert.
- Missed check-in detection.
- GPS ping.
- Active-job live location.
- Incident report.
- Owner/admin escalation.
- Audit trail.
- Offline queue.
- Safety status/instructions in field job packet.

Potential future reuse:

- ServicesOS cleaning.
- Turnover cleaning.
- Mobile detailing.
- Window washing.
- Pressure washing.
- Lawn care.
- Pool service.
- Handyman.
- RetailOS field/store tasks.
- PharmacyOS safety/compliance tasks.
- ComplianceAI audit workflows.
- Future worker-safety modules.

## Implementation Order

Do not jump straight to live location or emergency dispatch.

Recommended order:

```text
1. Offline-safe employee field workflow
2. Checklists/photos/notes
3. Client Safety Pre-Check
4. Field Safety Button
5. Owner/admin active safety alert panel
6. Job Check-In Timer
7. Missed Check-In GPS Ping
8. Field Safety Pro pricing/package definition
9. Active Job Live Location paid add-on
10. Emergency Response Add-On research only
```

## Product Rules

```text
Safety features must be honest.
No fake delivery states.
No fake emergency-response claims.
No hidden tracking.
No off-hours tracking.
No automatic customer rejection.
Human reviews and decides.
System records the decision.
```

## Decision Rules

- If Aunt B's field workflow needs worker protection, build the V1 safety stack.
- If early ServicesOS customers value safety alerts and check-ins, package Field Safety Pro.
- If customers ask for live location, offer Active Job Live Location as a paid add-on, not a default feature.
- If emergency-response integration becomes attractive, require legal/partner/agency validation before any implementation.
- If safety work begins distracting from owner/admin V1 stability, pause advanced safety features and return to core ServicesOS hardening.

## Current Takeaway

This was a high-value ServicesOS discovery.

Field safety gives ServicesOS:

- A real answer to Aunt B's safety concerns.
- A premium revenue route.
- A stronger differentiator against generic cleaning software.
- A reusable SLAI platform capability.

But the near-term move is still disciplined:

```text
Build only the V1 safety stack needed for real field work.
Keep premium layers planned but parked until the field workflow is stable.
```
