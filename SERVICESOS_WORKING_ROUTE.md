# ServicesOS Working Route

**Purpose:** Keep ServicesOS execution ordered piece by piece.  
**Owner:** Jamie Brown / Stellar Logic AI  
**Rule:** ServicesOS is priority one. Future products stay parked unless explicitly activated.  
**Current milestone:** July 20 live manual smoke test.

---

## Operating Rule

Do one controlled piece at a time.

```text
Plan the piece
Build the smallest safe version
Validate it
Smoke test it
Commit it
Then move to the next piece
```

Do not mix unrelated product areas in the same implementation pass.

---

## Active Build Route

### 0. Repo Baseline

**Status:** Active/check before every Codex pass

Before making changes:

- Confirm branch/base commit.
- Confirm working tree status.
- Confirm current known test/build status.
- Confirm target files.

Validation commands:

```bash
npm run lint
npm test -- --run
npm run build
```

---

### 1. July 20 Smoke-Test Polish

**Status:** Active now

Only three items are approved before the live smoke test:

1. Dashboard first-run empty state
2. Booking cancel button
3. Copy-ready payment link message

Rules:

- Do not rebuild existing flows.
- Do not touch Stripe confirmation logic.
- Do not touch platform fees, webhooks, refunds, checkout backend, or payment truth rules.
- Do not touch GrowthAI.
- Do not touch Training Library.
- Do not touch recurring services UI.
- Do not add SMS.
- Do not add real email sending.
- Copy-only is acceptable.
- Preserve tenant isolation.
- No fake success states.

Acceptance:

- Dashboard empty state is helpful and honest.
- Booking can be marked cancelled without deleting payment history.
- Payment message can be copied without claiming it was sent.
- Lint/test/build pass.
- Manual smoke passes.

---

### 2. Freeze and Prep for Live Manual Smoke Test

**Status:** Next after smoke-test polish

No new features.

Prep checklist:

- Deploy latest stable build.
- Walk through the deployed app manually.
- Confirm login/logout.
- Confirm Dashboard loads.
- Confirm lead/request flow.
- Confirm estimate/review flow.
- Confirm booking creation.
- Confirm payment link creation/copy.
- Confirm manual payment tracking.
- Confirm booking cancellation does not delete payment history.
- Confirm Calendar loads.
- Confirm Field Mode/job packet loads.
- Confirm mobile navigation.
- Prepare test data.
- Prepare July 20 notes template.

---

### 3. July 20 Live Manual Smoke Test

**Status:** Scheduled milestone

Goal:

```text
Can a real user move through the business workflow without Jamie explaining every step?
```

Core flow to test:

```text
lead / quote request
→ estimate / owner review
→ booking
→ payment link or manual payment tracking
→ calendar visibility
→ field/job packet visibility
```

Record issues as:

- Blocker
- High
- Medium
- Low
- Idea

Only blockers/high issues should interrupt the next build route.

---

### 4. Smoke-Test Findings Triage

**Status:** Immediately after July 20

Sort findings into:

1. Must fix before real customer use
2. Should fix before wife beta continues
3. V1 polish
4. V1.5 backlog
5. Parked future

Do not fix every annoyance immediately.

---

### 5. Core Workflow Fixes

**Status:** After triage

Address only issues found in the live smoke test that affect the core owner workflow:

- Customer/lead visibility
- Estimate/review clarity
- Booking creation/editing/cancellation
- Payment status honesty
- Calendar visibility
- Mobile usability
- Data persistence

Acceptance:

- No workflow blocker remains.
- No confusing fake success state remains.
- No payment state lies to the owner/customer.

---

### 6. Payment Honesty / Financial Safety Hardening

**Status:** After core workflow fixes

Focus:

- Stripe-confirmed payment states
- Manual payment states
- Payment link created vs paid distinction
- External/manual payment wording
- Refund/chargeback/fee clarity if surfaced

Rules:

```text
Booking created does not mean paid.
Payment link created does not mean paid.
Manual payment recorded does not equal Stripe-confirmed payment.
No Stripe confirmation = do not mark Stripe paid.
```

---

### 7. Field Mode / Job Packet Hardening

**Status:** After payment/core workflow confidence

Focus:

- Job packet clarity
- Customer/address/job notes
- Phone/maps links
- Field checklist readiness
- Before/after photo path if active
- Mobile browser usability
- Missing job information warnings

Do not start full React Native/mobile employee app here unless explicitly approved.

---

### 8. Expenses & Mileage v0.1

**Status:** Post-July-20 / V1.5 planning

Reference doc:

```text
01_ServicesOS/Finance/ServicesOS_Expenses_And_Mileage_Tracking_Plan.md
```

Build in this order:

1. Manual expense log
2. Mileage log
3. Monthly totals
4. CSV export
5. Optional job/customer linking
6. Receipt upload/photo
7. Simple job cost/profit view

Rules:

- No bank syncing.
- No OCR.
- No automatic receipt parsing.
- No automatic tax filing.
- No tax advice claims.
- Owner/bookkeeper reviews exports.

---

### 9. Training Library v0.1

**Status:** V1.5 / after core business workflow is stable

Source content:

```text
01_ServicesOS/SOP Library
```

Build in this order:

1. SOP Library index/manifest
2. Preset training modules
3. Read-only lesson/slideshow view
4. Simple quiz
5. Employee assignment
6. Completion status
7. Owner/admin completion view

Rules:

- Do not build standalone EducationOS.
- Do not add SCORM/LTI/SSO.
- AI may draft later, but owner approves before publishing.

---

### 10. Recurring Services UI

**Status:** Backlog until needed by real usage

The service layer may exist, but UI should only be activated when needed for actual recurring customer workflows.

Start small:

- Mark customer as recurring interest
- Basic recurring schedule
- Pause/resume
- Manual review before generating future jobs if needed

---

### 11. GrowthAI Expansion

**Status:** Parked unless explicitly activated

Current GrowthAI Phase 0/0.1 is allowed as an internal helper only.

Do not expand GrowthAI until ServicesOS core customer-ready V1 is stable.

Allowed later:

- Aunt B's content drafts
- ServicesOS founder posts
- Lead-source tracking
- Human-approved outreach drafts

Rules:

```text
AI notices.
AI drafts.
Human approves.
System records.
```

---

### 12. Future Products

**Status:** Parked future planning

Do not build before ServicesOS is stable and has real usage.

Parked areas:

- EducationOS
- RetailOS / PharmacyOS
- ComplianceAI
- FutureAI
- SLAIOS
- Full corporate Training Engine

These can remain documented in the planning repo, but they should not drive current coding scope.

---

## Current Do-Not-Touch List

Until the July 20 smoke test is complete, do not start:

- Training Library implementation
- EducationOS implementation
- Tap to Pay
- Recurring Services UI
- Customer timeline
- Full archive system
- AI generation expansion
- SMS/email sending
- Bank sync
- Expense OCR
- New product verticals

---

## Current Approved Codex Target

```text
Dashboard empty state
Booking cancel button
Copy payment message
```

Anything outside that requires explicit approval before coding.
