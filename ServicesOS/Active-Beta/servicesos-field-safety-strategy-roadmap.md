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
→ Route Helper Pro
→ Embedded Navigation Pro
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

### Route Helper Pro

Future routing add-on.

Most service businesses already know which jobs each employee will do for the day. ServicesOS can create value by calculating the proper job order and route flow, then handing that route to the employee.

Possible pricing direction:

```text
+$29-$49/month base
+ optional per-worker or per-route fair-use limits
```

Potential features:

- Daily route order by employee.
- Best stop order for assigned jobs.
- Drive-time estimates.
- Time-window awareness.
- Late-risk warnings.
- Two-person job routing guardrails.
- Safety-status routing guardrails.
- Route handoff to Google Maps or another navigation provider.

### Embedded Navigation Pro

Future premium mobile navigation feature.

The long-term goal is to avoid employees bouncing between multiple apps when ServicesOS already knows the job list, route order, customer address, safety status, and field workflow.

Suggested path:

```text
Level 1: Route order inside ServicesOS + open route in Google Maps
Level 2: Embedded map inside ServicesOS employee mobile app
Level 3: Embedded turn-by-turn navigation inside ServicesOS employee mobile app
```

Level 1 is the safer early implementation because it is simpler and keeps ServicesOS focused.

Level 2 and Level 3 should be premium or higher-tier features because they add mobile SDK complexity, navigation usage cost, battery considerations, location permissions, support burden, and privacy requirements.

Possible pricing direction:

```text
Basic route handoff: included in Field Operations or Route Helper Pro
Embedded map: Route Helper Pro / Field Operations Pro
Embedded turn-by-turn navigation: premium future feature
```

Rules:

- ServicesOS remains the source of truth for job list, stop order, safety status, checklists, photos, notes, and completion state.
- Navigation provider remains responsible for route guidance/navigation behavior.
- Employee app should not fake navigation, ETA, arrival, or completion.
- If embedded navigation fails, employee should still be able to open the route externally.
- Verify current SDK, API, pricing, and app-store/location-permission requirements before implementation.
- Do not build embedded navigation before the basic employee field workflow is stable.

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

## Shared Maps / Routing / Field Safety Foundation

Jamie already wants ServicesOS to use Google Maps or a similar mapping stack for future routing and route-helper work. Field safety should reuse that same foundation instead of creating a separate location system.

Shared location primitives should support both routing and safety:

- Address normalization.
- Geocoding service addresses.
- Storing latitude/longitude on jobs where appropriate.
- Showing job/customer addresses on a map.
- Device GPS capture from the employee app.
- Last known field location.
- Active-job location breadcrumbing if the paid add-on is enabled.
- Distance/time estimates for routing later.
- Owner/admin map view for safety alerts and missed check-ins.
- Route handoff to an external navigation app.
- Embedded mobile map/navigation later if the paid tier supports it.

Product rule:

```text
Build one clean ServicesOS geo/location layer.
Use it for routing later and field safety now/later.
Do not create duplicate map/location implementations.
```

Cost rule:

```text
Basic safety should stay event-based.
Basic route handoff should stay low-cost and controlled.
High-frequency live location, route optimization, and embedded navigation should be priced as premium features to cover API, map, storage, support, battery, mobile SDK, and privacy costs.
```

Implementation guardrail:

- Do not build full route optimization during the V1 safety pass.
- Do not build embedded turn-by-turn navigation during the V1 safety pass.
- Do not enable live location by default.
- Do not use maps/geocoding wastefully when an address or lat/lng is already stored.
- Cache/store normalized job coordinates when safe so the same address does not need to be repeatedly geocoded.
- Keep location usage tenant-scoped.
- Make location timestamps and accuracy visible so stale data is not treated as live data.
- Keep external map handoff as a fallback even if embedded navigation exists later.

## Cost and Margin Assumption

The self-managed safety system is expected to be high margin if kept event-based.

Likely low-cost components:

- Firestore safety records.
- Cloud Functions.
- Firebase Cloud Messaging.
- Device GPS.
- Local offline queue.
- Basic owner/admin dashboard.
- Shared map/geocoding layer already needed for future routing.

Costs rise with:

- SMS backup alerts.
- Voice escalation.
- High-frequency live location.
- Map/geocoding usage.
- Route optimization usage.
- Embedded navigation usage.
- Navigation/mobile SDK complexity.
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
- Shared geo/location layer.
- Route ordering and handoff.
- Embedded navigation interface later.

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

Do not jump straight to live location, embedded navigation, or emergency dispatch.

Recommended order:

```text
1. Offline-safe employee field workflow
2. Checklists/photos/notes
3. Shared geo/location foundation where needed
4. Client Safety Pre-Check
5. Field Safety Button
6. Owner/admin active safety alert panel
7. Job Check-In Timer
8. Missed Check-In GPS Ping
9. Basic route order + external Google Maps handoff
10. Field Safety Pro pricing/package definition
11. Active Job Live Location paid add-on
12. Routing/route helper work as a separate controlled pass
13. Embedded mobile map/navigation as a future premium pass
14. Emergency Response Add-On research only
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
Use one shared geo/location foundation for maps, routing, and safety.
ServicesOS owns job order and field workflow; navigation provider owns navigation.
```

## Decision Rules

- If Aunt B's field workflow needs worker protection, build the V1 safety stack.
- If early ServicesOS customers value safety alerts and check-ins, package Field Safety Pro.
- If customers ask for live location, offer Active Job Live Location as a paid add-on, not a default feature.
- If routing becomes a V1/V1.5 priority, reuse the same geo/location layer instead of duplicating mapping logic.
- If employees need fewer app switches after the field app is stable, evaluate embedded navigation as a premium feature.
- If emergency-response integration becomes attractive, require legal/partner/agency validation before any implementation.
- If safety work begins distracting from owner/admin V1 stability, pause advanced safety features and return to core ServicesOS hardening.

## Current Takeaway

This was a high-value ServicesOS discovery.

Field safety gives ServicesOS:

- A real answer to Aunt B's safety concerns.
- A premium revenue route.
- A stronger differentiator against generic cleaning software.
- A reusable SLAI platform capability.
- A shared maps/location foundation that can support both safety and future routing.
- A future mobile navigation path that can reduce employee app-switching.

But the near-term move is still disciplined:

```text
Build only the V1 safety stack needed for real field work.
Keep premium layers planned but parked until the field workflow is stable.
```
