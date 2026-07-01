# ServicesOS Client Safety Pre-Check

Status: Planned for next available ServicesOS V1/V1.5 safety work  
Date: 2026-07-01  
Owner: Jamie Brown / Stellar Logic AI

## Purpose

Aunt B's Cleaning Services sends cleaners into private homes. ServicesOS needs a safety-review workflow that helps the owner decide whether a customer, address, property, pet situation, or household condition is safe to service.

This is not a replacement for human judgment. The product rule is:

```text
System checks.
System flags.
Human reviews.
Human decides.
System records the decision.
```

The feature should provide information and workflow support, not automatic rejection or legal/danger determinations.

## V1 Product Rule

ServicesOS should use neutral safety language:

```text
Possible safety concern found. Owner review required before booking or assignment.
```

ServicesOS should not say:

```text
This customer is dangerous.
This house is safe.
This person must be rejected.
```

The owner/admin remains responsible for accepting, declining, requiring two people, requiring the customer not be present, or asking for more information.

## Scope

### In Scope

- Require a service address before booking or field assignment.
- Add a tenant-scoped `safetyReview` object to customer/lead/job records.
- Default new service addresses to `needs_review` unless already reviewed.
- Add an owner/admin Client Safety Review panel.
- Allow the owner/admin to record a safety decision and private notes.
- Block or warn before booking/assignment when a safety review is missing or concerning.
- Include practical safety instructions in the employee field job packet.
- Preserve tenant isolation.
- Prepare a V1.5-safe automatic pre-check path if an allowed data source exists.

### Out of Scope

- Automated customer rejection.
- Labeling customers as dangerous.
- Unsafe scraping of registry websites.
- Captcha bypass, rate-limit bypass, or terms-of-use bypass.
- Employee-facing offender details.
- Public exposure, harassment, or shaming tools.
- Paid background checks unless explicitly approved later.
- Full ComplianceAI.

## Safety Statuses

Suggested status values:

```ts
safetyReview.status =
  | "needs_review"
  | "auto_review_pending"
  | "possible_safety_concern"
  | "possible_registry_proximity_match"
  | "owner_review_required"
  | "clear_after_review"
  | "two_person_required"
  | "customer_not_present_required"
  | "do_not_service";
```

## Suggested Data Shape

```ts
safetyReview: {
  status,
  autoCheckStatus,
  possibleMatchCount,
  nearestMatchDistance,
  dataSource,
  dataSourceUpdatedAt,
  reviewedByUid,
  reviewedAt,
  reviewSource,
  notes,
  employeeInstruction,
  updatedAt
}
```

Allowed `reviewSource` values:

```ts
reviewSource =
  | "automatic_allowed_registry_check"
  | "manual_public_registry_check"
  | "owner_note"
  | "customer_history"
  | "property_condition"
  | "pet_safety"
  | "other";
```

## Owner/Admin Workflow

```text
Lead/customer address entered
→ safetyReview defaults to needs_review
→ owner/admin opens Client Safety Review panel
→ system provides any allowed pre-check information or official-source quick links
→ owner/admin reviews
→ owner/admin records final business decision
→ booking/assignment is allowed, warned, or blocked based on status
```

Owner/admin decisions:

```text
Clear after review
Owner review required
Possible safety concern
Two-person job required
Customer must not be present
Do not service
```

## Booking and Assignment Rules

Jobs should not be assigned accidentally when safety status is:

```text
needs_review
owner_review_required
possible_safety_concern
possible_registry_proximity_match
do_not_service
```

`do_not_service` should block booking/assignment unless the owner/admin intentionally changes the safety status.

`two_person_required` and `customer_not_present_required` should allow continuation only with a clear warning.

## Employee/Field App Behavior

The employee app should not show sensitive registry details. It should show only practical instructions needed for safety.

Examples:

```text
Contact owner before starting.
Two-person job required.
Customer must not be present during service.
Do not enter unless owner confirms.
```

The offline field job packet should include the safety status and employee-facing instruction so the cleaner still sees the warning if cell service drops.

## Automatic Pre-Check Path

Automatic data checks are allowed only when the source access method is permitted.

Preferred source order:

1. Official downloadable file.
2. Documented API.
3. Permitted public data feed.
4. Licensed provider.
5. Manual review and official-source quick links if automated access is unclear.

If allowed automated data access is not confirmed, the implementation should leave automated matching disabled and keep manual Safety Review active.

If an allowed source is confirmed, ServicesOS should only flag possible concerns:

```text
possible_registry_proximity_match
owner_review_required
```

The app must not automatically reject the customer or claim that the customer/property is dangerous.

## V1 Implementation

V1 should include:

- Address required before booking/assignment.
- Manual Client Safety Review panel.
- Safety status and private notes.
- Booking/assignment guardrails.
- Employee-facing safety instructions.
- Offline job packet safety instructions.
- Tenant-safe persistence.

## V1.5 Implementation

V1.5 may include:

- Research of allowed automatic registry/proximity data access.
- Disabled-by-default import/check foundation.
- Geocoding/normalization if cost and terms allow.
- Possible match count/distance metadata.
- Owner review required state.

## Acceptance Criteria

- New address defaults to `needs_review` or equivalent safety-review state.
- Owner/admin can update safety status and notes.
- Safety status persists after refresh/logout/login.
- Safety status is tenant-scoped.
- Tenant A cannot see Tenant B safety data.
- Jobs requiring review cannot be assigned accidentally.
- `do_not_service` blocks booking/assignment unless status is intentionally changed by owner/admin.
- Employee app shows practical safety instructions only.
- Offline job packet includes safety instructions.
- No automatic customer rejection is added.
- No unsafe scraping is added.
- No fake safety guarantee is shown.
- Lint and build pass when promoted to implementation.

## Codex Guardrail

When promoted to Codex, use this framing:

```text
This is a human-in-the-loop Client Safety Pre-Check workflow. Do not build automatic rejection. Do not scrape websites unless the source explicitly permits automated access. Implement safety status, owner review, booking/assignment guardrails, employee-facing instructions, and offline packet support.
```

## Current Priority

This is a V1 safety feature because it protects the person entering private homes. It should be worked after current access returns and after the current owner/admin stabilization pass is safely checkpointed.
