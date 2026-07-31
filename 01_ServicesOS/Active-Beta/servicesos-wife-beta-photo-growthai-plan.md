# ServicesOS Wife Beta, Multi-Photo, and Focused GrowthAI Plan

**Status:** Active ServicesOS beta reference  
**Owner:** Jamie Brown / Stellar Logic AI  
**Last updated:** 2026-07-30  
**Primary rule:** ServicesOS remains priority one. Future ideas stay deferred unless they directly support the current ServicesOS beta and customer-ready V1.

---

## 1. Purpose

This document preserves the agreed plan for:

1. ServicesOS wife beta testing
2. The multi-photo before-and-after workflow
3. The first focused GrowthAI feature
4. AI-credit controls
5. The sequence required before the first supported external customer pilot

The goal is to prevent scope drift and avoid redesigning decisions that have already been made.

This document is the canonical active-beta reference for these decisions. It does not authorize implementation by itself; Jamie must explicitly promote each build phase into a controlled ServicesOS coding task.

---

## 2. Current Production Status

### Approved production release

- **Production branch:** `master`
- **Production commit:** `7c15cd1418a6105d2d3c41242a899d06ba43a7f8`
- **Netlify deploy:** `6a6bee9f7b120d00074f5c0f`
- **Production URL:** https://servicesos.netlify.app
- **Rollback deploy preserved:** `6a698c7b4d4c450008e39eeb`

### Included in the current release

- Restored native booking date and time pickers
- Restored Create Estimate native date picker
- Corrected local-date handling
- Refreshed Create Estimate layout
- Existing-customer detail and repeat workflow
- Existing-customer estimate prefill
- Existing-customer direct booking
- Structured address handling
- Tenant-switch stale-context protection
- Lead tenant-ID persistence fix from the approved release line

### Current known residual risk

Booking duplicate protection is currently:

- Disabled-submit protection
- An in-memory submission guard

It is **not yet fully backend-idempotent across separate concurrent clients**. This is acceptable for the controlled wife beta but must remain documented.

### Deferred production verification

These are evidence gaps, not observed defects:

- Super-admin tenant-to-tenant production switching
- Nonempty production email and phone prefill using a controlled test customer

Neither blocks the ordinary owner/admin wife beta.

---

## 3. Wife Beta Status

### Initial onboarding observation — 2026-07-30

Jamie's wife has:

- Logged into the production application
- Navigated through the application
- Reported that the application looks clean
- Reported that navigation is easy
- Reported that she could tell where to go for what she wanted to do

### Interpretation

This is a positive first usability signal for:

- Information architecture
- Navigation clarity
- Visual cleanliness
- Feature discoverability

No immediate navigation redesign is justified by the current evidence.

This is not yet proof that the full real-job workflow is stable. The next evidence must come from completing real cleaning-business work through the system.

---

## 4. Phase 1 — Controlled Wife Beta

### Goal

Prove that a real owner/operator can complete the operational cleaning workflow without being blocked, confused, or losing information.

### Golden path

```text
Login
→ Dashboard
→ Add or select customer
→ Create estimate
→ Review request
→ Convert to booking or create a fresh booking
→ Confirm booking details
→ Prepare for the job
→ Use Field Mode
→ Complete the job
→ Review job and payment status
```

### What she should test naturally

- Customer creation
- Existing-customer lookup
- Customer and property notes
- Estimate creation
- Preferred date and time
- Estimate review
- Booking creation
- Existing-customer repeat booking
- Booking visibility
- Calendar visibility
- Field Mode
- Checklist and completion flow
- Notes and problem reporting
- Payment-status accuracy

### Feedback to record

For every meaningful problem or point of friction:

- What she was trying to do
- What she expected
- What happened
- Whether she was using a phone or computer
- The customer or booking involved
- A screenshot when useful
- Whether she could continue
- How serious the issue felt

### Stop-the-beta conditions

Pause the real-job test immediately for:

- Data loss
- Tenant or customer data leakage
- Application crash
- Incorrect price
- Incorrect appointment date or time
- Duplicate booking
- Payment or Stripe risk
- Inability to complete the job
- Required information disappearing or changing unexpectedly

### Non-blocking observations

Record these without interrupting the job unless they become severe:

- Confusing labels
- Extra clicks
- Awkward spacing
- Minor mobile layout issues
- Missing convenience features
- Wording improvements
- Slow but functional steps

### Development rule during beta

Do not add features during the first real jobs unless a beta-critical problem prevents safe completion.

The first goal is evidence, not expansion.

---

## 5. Phase 2 — Multi-Photo Job Workflow

### Goal

Create a reliable photo record for real jobs that supports:

- Job documentation
- Customer confidence
- Issue evidence
- Quality review
- Future before-and-after marketing
- Focused GrowthAI generation

### Required photo behavior

A completed job may contain multiple photos for each room or area.

Each photo record should include:

- Unique photo ID
- Tenant ID
- Booking or job ID
- Customer/property context
- Required room or area label
- Stage: `before` or `after`
- Category: `room`, `issue`, or `detail`
- Optional note
- Uploader
- Upload timestamp
- Unique storage path
- Marketing-use status
- Privacy-review status when needed

### Room labels

The room or area label is required.

Examples:

- Kitchen
- Primary bathroom
- Guest bathroom
- Living room
- Bedroom 1
- Bedroom 2
- Hallway
- Entryway
- Basement
- Garage
- Exterior
- Other

Custom labels should be allowed.

### Capture flow

```text
Select room or area
→ Choose before or after
→ Choose room, issue, or detail
→ Add one or more photos
→ Add optional note
→ Save
```

### Completion coverage

ServicesOS should warn when expected before-and-after coverage is missing.

For V1, this should be a **warning**, not a hard block.

Example:

> Kitchen has before photos but no after photos.

### Image handling

Recommended V1 image rules:

- Preserve the original aspect ratio
- Preserve vertical phone photos
- Maximum long edge around 2400–2560 pixels
- JPEG quality around 85–90%
- Target roughly 1–2 MB when compression is useful
- Do not recompress already-small images unnecessarily
- Avoid the previous aggressive 1920×1080 / 500 KB default for marketing-quality photos

### Marketing-use control

Each photo should support one of these statuses:

- Approved for marketing
- Internal use only
- Do not use
- Needs privacy review

### Privacy review

Photos should be reviewed before marketing use when they may show:

- Family photographs
- Addresses
- Paperwork
- Medication
- Customer names
- Children
- People
- Mirror reflections
- License plates
- Other personally identifying information

### Multi-photo acceptance criteria

The feature is ready for wife beta when:

- Multiple photos can be added to the same room
- Multiple rooms can be represented
- Before and after are clearly separated
- Required room labels are enforced
- Issue and detail photos are supported
- Optional notes persist
- Uploads use unique IDs and paths
- Photos persist after refresh
- Mobile upload works
- Vertical images are not distorted
- Coverage warnings work
- Marketing statuses persist
- Existing jobs and Field Mode do not regress
- Storage rules remain tenant-safe

---

## 6. Phase 3 — Focused GrowthAI Post Builder

### Product definition

This is the first narrow GrowthAI feature inside ServicesOS.

It is not a separate broad marketing platform.

### Core promise

> Turn completed cleaning jobs into branded marketing content in minutes.

### Workflow

```text
Completed booking
→ Owner-approved labeled photos
→ Select 1–4 photos
→ Choose post style
→ Generate collage and copy
→ Human review
→ Download image
→ Copy caption, CTA, and hashtags
→ Post manually
```

### First-version outputs

- Before-and-after collage
- Optional single-image post
- Caption draft
- Call to action
- Suggested hashtags
- Optional short and long caption variations

### Human-control rule

GrowthAI may:

- Notice
- Suggest
- Draft
- Package content

The business owner must:

- Review
- Edit when needed
- Approve
- Download or copy
- Post manually

### Explicitly excluded from the first version

- Automatic social posting
- Social scheduler
- Ad management
- Broad campaign automation
- Lead scraping
- Autonomous outreach
- Full analytics platform
- General-purpose content studio
- Separate GrowthAI application
- Large marketing CRM

### Focused GrowthAI acceptance criteria

- Only completed jobs are eligible
- Only approved photos are selectable
- Privacy-restricted photos are excluded
- User can select 1–4 photos
- Collage preserves useful cropping and orientation
- Captions accurately reflect the selected job
- No customer-sensitive information is inserted
- User reviews before download or copy
- Failed generations do not consume credits permanently
- Repeated requests do not double-charge
- Core ServicesOS remains usable when AI credits are zero

---

## 7. AI Credit System

### Core rule

AI credits must be enforced by the server. The browser is never the source of truth.

### Credit balances

Track separately:

- Monthly included credits
- Purchased credits
- Promotional or admin credits

### Initial behavior

- Monthly included credits reset on the subscription cycle
- Purchased credits do not expire initially
- Promotional credits follow explicitly recorded terms
- Core ServicesOS remains usable at zero AI credits

### Generation lifecycle

```text
Validate tenant and user
→ Validate available credits
→ Reserve credits
→ Run generation
→ Finalize charge on success
→ Restore reserved credits on failure
```

### Ledger fields

Each AI action should record:

- Tenant ID
- User ID
- Action type
- Request or idempotency ID
- Credits reserved
- Credits charged
- Model or route used
- Status
- Created timestamp
- Completed or failed timestamp
- Failure reason when applicable

### Idempotency

The same request must not:

- Generate twice unintentionally
- Deduct credits twice
- Grant purchased credits twice
- Retry a Stripe webhook twice as separate purchases

### Customer-facing pricing language

Customers should see:

- Credits required per action
- Included monthly credits
- Remaining credits
- Purchased-credit balance

Customers should not need to understand:

- Raw token counts
- Provider costs
- Internal model routing
- Internal infrastructure details

### Profit rule

Credit packs must include margin for:

- AI provider cost
- Payment-processing fees
- Infrastructure
- Retries and failures
- Support
- Development and maintenance
- Profit

The packs should not be sold as cost pass-through.

Final pricing must be calculated from current provider and Stripe costs before launch.

---

## 8. Phase 4 — First Supported External Customer Pilot

### Entry conditions

Begin the first outside founder-supported pilot after:

- Wife completes real jobs through the operational core
- Beta-critical defects are fixed
- Multi-photo workflow is stable
- Focused GrowthAI Post Builder is usable
- AI credits are server-enforced
- Customer onboarding is controlled
- Unfinished customer-facing routes are disabled or quarantined
- Payment behavior is understood and safe

### Ideal first external customer

- Owner-operated cleaning business
- Roughly 1–5 workers
- Currently using text messages, paper, calendars, spreadsheets, or disconnected tools
- Willing to accept direct founder support
- Has a real need for better job organization and consistent marketing
- Is not already deeply embedded in a mature competitor platform

### Positioning

> ServicesOS helps you run today's job and turn it into tomorrow's customer.

Supporting description:

> A founder-supported cleaning-business system that handles the job from estimate through completion, with practical growth tools tested alongside real businesses.

---

## 9. Work That Remains Deferred

Do not allow these items to distract from the current sequence:

- Broad GrowthAI platform
- GrowthAI autonomous outreach
- Full employee mobile application expansion
- Tap to Pay
- Route optimization
- GPS tracking
- Payroll
- Break and lunch tracking
- Training library
- Push notifications
- Offline mode
- Full customer portal expansion
- SLAI website expansion beyond what supports launch
- EducationOS
- RetailOS / PharmacyOS
- ComplianceAI
- FutureAI
- SLAIOS

These remain future planning unless Jamie explicitly reprioritizes them.

---

## 10. Immediate Next Action

The application is live, and the initial navigation feedback is positive.

The next controlled step is:

```text
Wife completes one low-risk real cleaning job
→ Jamie records observations
→ Fix only beta-critical friction
→ Repeat with another real job
→ Begin multi-photo implementation
```

Do not begin broad GrowthAI development before the photo workflow produces reliable, labeled, privacy-reviewed job photos.

---

## 11. Current Decision Log

### 2026-07-30 — Production promotion

- Approved candidate fast-forwarded to `master`
- Exact candidate deployed successfully to Netlify
- Owner/admin production smoke passed for the ordinary wife-beta path
- Controlled wife beta authorized

### 2026-07-30 — Initial wife usability feedback

- Login successful
- Application looked clean
- Navigation felt easy
- Feature locations were understandable
- No immediate navigation redesign required

### 2026-07-30 — Scope confirmation

- Multi-photo workflow is still required
- Focused GrowthAI Post Builder is still required
- AI-credit controls are still required
- These features are not prerequisites for beginning operational wife beta
- They remain prerequisites for the stronger differentiated external-customer package

---

## 12. Permanent Scope Rule

> If a GrowthAI feature directly supports a real ServicesOS workflow, it may be considered after the operational core is stable.

> If it becomes a separate broad marketing platform, it waits.

> ServicesOS remains the anchor.
