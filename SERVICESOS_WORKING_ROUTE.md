# ServicesOS Working Route

**Purpose:** Keep ServicesOS execution ordered piece by piece.  
**Owner:** Jamie Brown / Stellar Logic AI  
**Last updated:** 2026-07-30  
**Rule:** ServicesOS is priority one. Future products stay parked unless explicitly activated.  
**Current milestone:** Controlled wife beta on the live production release.

Canonical detailed plan:

```text
01_ServicesOS/Active-Beta/servicesos-wife-beta-photo-growthai-plan.md
```

---

## Operating Rule

Do one controlled piece at a time.

```text
Plan the piece
→ build the smallest safe version
→ validate it
→ smoke test it
→ commit it
→ deploy only when approved
→ observe real use
→ then move to the next piece
```

Do not mix unrelated product areas in the same implementation pass.

---

## Current Production Baseline

- Production branch: `master`
- Production commit: `7c15cd1418a6105d2d3c41242a899d06ba43a7f8`
- Netlify deploy: `6a6bee9f7b120d00074f5c0f`
- Production URL: https://servicesos.netlify.app
- Rollback deploy preserved: `6a698c7b4d4c450008e39eeb`

The current release includes:

- Native booking date/time controls
- Native Create Estimate date control with local-date handling
- Refreshed Create Estimate layout
- Existing-customer detail, estimate prefill, and direct booking
- Structured address handling
- Tenant-switch stale-context protection
- Lead tenant-ID persistence fix

Known wife-beta residual risk:

- Duplicate-booking protection is UI-level plus an in-memory guard.
- It is not fully backend-idempotent across separate concurrent clients.

---

## Current Wife-Beta Evidence

Jamie's wife has already:

- Logged into production
- Navigated around the application
- Reported that the application looks clean
- Reported that navigation is easy
- Reported that she could tell where to go for what she wanted to do

Interpretation:

- Initial information architecture is understandable.
- Initial navigation does not need redesign based on assumptions.
- The next evidence must come from a real cleaning job.

---

## Active Execution Route

### 1. Complete One Low-Risk Real Job

**Status:** Active now

Golden path:

```text
Login
→ Dashboard
→ add or select customer
→ create estimate
→ review request
→ create booking
→ confirm booking
→ prepare for job
→ use Field Mode
→ complete job
→ review job and payment status
```

Record:

- What she was trying to do
- What she expected
- What happened
- Device used
- Customer or booking involved
- Screenshot when useful
- Whether she could continue
- Severity

Stop immediately for:

- Data loss
- Tenant or customer data leakage
- Crash
- Incorrect price
- Incorrect date or time
- Duplicate booking
- Payment or Stripe risk
- Inability to finish the job
- Required information disappearing or changing unexpectedly

Do not interrupt the job for minor spacing, wording, convenience, or extra-click observations unless they become blocking.

---

### 2. Triage Real-Job Findings

**Status:** Immediately after each wife-beta job

Classify findings as:

1. Beta-critical blocker
2. High-risk workflow defect
3. Usability friction
4. V1 polish
5. Future idea

Only beta-critical blockers and high-risk defects should interrupt the current route.

Do not turn every observation into an immediate coding task.

---

### 3. Fix Only Beta-Critical Friction

**Status:** After real-job evidence

Each fix must be isolated and controlled.

Before coding:

- Confirm branch and exact base SHA
- Confirm clean working tree
- Read repository instructions and relevant planning docs
- Name files in scope
- Name files and systems to avoid
- Define acceptance criteria
- Define tests and smoke checks
- Define stop conditions

Validation baseline:

```bash
npm run lint
npm run test -- --run
npm run build
```

Also run Functions, Firestore rules, Storage rules, parity, secret, and deployment checks whenever the change touches those surfaces.

---

### 4. Repeat With Another Real Job

**Status:** After beta-critical fixes are deployed and smoke-tested

Goal:

```text
Confirm the fix under real use
and determine whether the core workflow is stable enough
for the photo layer.
```

Do not add unrelated features between the first and second real-job observations.

---

### 5. Multi-Photo Job Workflow

**Status:** Next approved product layer after the operational core proves stable

Build the smallest reliable version:

```text
Select room or area
→ choose before or after
→ choose room, issue, or detail
→ add one or more photos
→ add optional note
→ save
```

Required controls:

- Multiple photos per room
- Multiple rooms per job
- Required room/area label
- Before/after stage
- Room/issue/detail category
- Optional note
- Unique photo ID and storage path
- Uploader and timestamp
- Marketing-use status
- Privacy-review status
- Missing-coverage warning, not hard completion block

Image rules:

- Preserve aspect ratio and vertical orientation
- Maximum long edge around 2400–2560 pixels
- JPEG quality around 85–90%
- Target roughly 1–2 MB when useful
- Do not recompress already-small images unnecessarily

Do not build the GrowthAI Post Builder until photo records are reliable, labeled, tenant-safe, and privacy-reviewable.

---

### 6. Focused GrowthAI Post Builder

**Status:** After the multi-photo workflow is stable

This is the first narrow GrowthAI feature inside ServicesOS.

Core promise:

> Turn completed cleaning jobs into branded marketing content in minutes.

Workflow:

```text
Completed booking
→ approved labeled photos
→ select 1–4 photos
→ choose post style
→ generate collage and copy
→ human review
→ download image
→ copy caption, CTA, and hashtags
→ post manually
```

First-version outputs:

- Before-and-after collage
- Optional single-image post
- Caption draft
- CTA
- Hashtags
- Optional short and long caption variations

Human-control rule:

```text
AI notices.
AI suggests.
AI drafts.
Human reviews and approves.
Human posts.
System records.
```

Out of scope:

- Auto-posting
- Social scheduler
- Ad management
- Broad campaign automation
- Lead scraping
- Autonomous outreach
- Full analytics platform
- General-purpose content studio
- Separate GrowthAI application

---

### 7. Server-Enforced AI Credits

**Status:** Required with the first customer-facing GrowthAI release

Core rules:

- Browser is never authoritative.
- Track monthly, purchased, and promotional/admin credits separately.
- Core ServicesOS remains usable with zero AI credits.
- Monthly credits reset on the subscription cycle.
- Purchased credits do not expire initially.

Generation lifecycle:

```text
Validate tenant and user
→ validate available credits
→ reserve credits
→ generate
→ finalize charge on success
→ restore reservation on failure
```

Required protections:

- Request/idempotency key
- No duplicate generation charge
- No duplicate purchased-credit grant
- Stripe webhook idempotency
- Ledger with tenant, user, action, model/route, reserved/charged credits, status, timestamps, and failure reason

Pricing rule:

- Credit packs must cover provider cost, payment fees, infrastructure, retries, support, maintenance, and profit.
- Do not sell AI usage as cost pass-through.
- Recalculate final pricing from current provider and Stripe costs before launch.

---

### 8. First Supported External Pilot

**Status:** After the wife-beta, photo, focused GrowthAI, and credit gates are ready

Ideal first customer:

- Owner-operated cleaning business
- Roughly 1–5 workers
- Uses texts, paper, calendars, spreadsheets, or disconnected tools
- Accepts direct founder support
- Needs stronger job organization and consistent marketing
- Is not deeply embedded in a mature competitor platform

Positioning:

> ServicesOS helps you run today's job and turn it into tomorrow's customer.

Do not launch broadly. Start with one controlled founder-supported customer.

---

## Current Do-Not-Touch List

Until the active route reaches the relevant gate, do not start:

- Broad GrowthAI platform
- Autonomous GrowthAI outreach
- Full employee mobile expansion
- Tap to Pay
- Route optimization
- GPS tracking
- Payroll
- Break/lunch tracking
- Training library
- Push notifications
- Offline mode
- Full customer portal expansion
- EducationOS
- RetailOS / PharmacyOS
- ComplianceAI
- FutureAI
- SLAIOS

These ideas may remain documented, but they must not drive current coding scope.

---

## Immediate Next Action

```text
Wife completes one low-risk real cleaning job
→ Jamie records observations
→ fix only beta-critical friction
→ repeat with another real job
→ begin multi-photo implementation
```

Do not begin another feature pass merely because the current application looks ready. Let real use choose the next fix.
