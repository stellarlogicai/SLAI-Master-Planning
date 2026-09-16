# ServicesOS V1 Master Testing Structure

Updated: 2026-09-15

Purpose: define the acceptance coverage for the actual customer-facing ServicesOS V1. This replaces older checklists that mixed V1 requirements with future payroll, training-library, advanced offline, inspection, and unrelated AI ideas.

A checked item means the capability is implemented or has an established tested foundation. An unchecked item means current integrated V1 acceptance/evidence is still required.

## 1. Owner / Web App V1

### A. Account and onboarding

- [x] Server-owned owner/tenant bootstrap
- [x] Exact owner/admin/tenant relationship validation
- [x] Basic business profile step
- [x] Versioned SaaS agreement delivery
- [x] Typed signer + explicit affirmation
- [x] Immutable agreement acceptance evidence
- [x] Owner SaaS subscription Checkout foundation
- [x] Verified paid-invoice activation foundation
- [ ] Monthly vs annual subscription choice ($100/month or $1,000/year)
- [ ] Exactly two approved server-side subscription Price IDs
- [ ] Separate billing entitlement from operational onboarding completion
- [ ] Business type captured
- [ ] Service area captured in onboarding
- [ ] Services selected/created
- [ ] Deterministic pricing method/configuration established
- [ ] Working days captured in onboarding
- [ ] Business hours captured
- [ ] Typical duration captured
- [ ] Scheduling buffer captured
- [ ] Booking horizon captured
- [ ] Logo / minimum brand setup captured
- [ ] Stripe Connect offered with `Skip / do later`
- [ ] `Just me` / `I have employees` team path
- [ ] Onboarding progress persists
- [ ] Interrupted onboarding resumes correctly
- [ ] Review/setup completion step
- [ ] New owner reaches a clear first action
- [ ] New owner completes onboarding without founder/developer assistance

### B. CRM / customer workflow

- [x] Create lead
- [x] Convert lead to customer
- [x] Create/manage customer
- [x] Repeat-customer workflow
- [x] Archive/safety foundations already present in V1 work
- [ ] Current-head customer identity ownership verification
- [ ] Customer/profile tenant match verification
- [ ] Duplicate/cross-tenant `authUid` checks
- [ ] Customer privacy smoke
- [ ] Cross-tenant customer denial smoke

### C. Estimate / agreement / scope

- [x] Create deterministic estimate
- [x] Existing-customer estimate workflow
- [x] Convert estimate/work into booking flow
- [x] Customer-approved job scope control
- [x] Required checklist mapping foundation
- [ ] Full current-head estimate → approved scope → booking integration test
- [ ] Verify historical scope is immutable after later template/settings changes

### D. Booking / scheduling

- [x] Create booking
- [x] Residential intake
- [x] Commercial intake
- [x] Calendar/scheduling foundation
- [x] Conflict-warning foundation
- [x] Assign employee foundation
- [ ] Current-head employee assignment index/authorization smoke
- [ ] Booking lifecycle integration test across scheduled → field work → completed

### E. Add-ons / extra work

- [x] Canonical tenant add-on catalog
- [x] Employee extra-work request submission
- [x] Owner review foundation
- [ ] Owner-approved request reaches customer-approval-ready state
- [ ] Customer approval captured before scope changes
- [ ] Approved request updates authoritative scope/price/time safely
- [ ] Declined/unapproved request does not change authoritative scope
- [ ] Updated scope reaches employee JobPacket/checklist correctly

### F. GrowthAI / SLAI Assistant

- [x] Business briefing foundation
- [x] Marketing workflows
- [x] Customer communication workflows
- [x] Retention/rebooking
- [x] Reputation assistance
- [x] Brand intelligence
- [x] Drafts / Activity
- [x] Human-approval boundaries
- [x] Credit ledger and V1 credit UX
- [x] Provider-backed action previously verified in production
- [ ] Re-run integrated V1 regression/acceptance on current branch
- [ ] Close current-V1 regressions only
- [ ] Freeze GrowthAI V1

## 2. Employee App V1

### A. Authentication

- [x] Employee login foundation
- [x] Server-side employee-session verification
- [x] Logout
- [x] Verified employee profile
- [ ] Current device session persistence test
- [ ] Invalid/expired auth handling
- [ ] Session recovery/re-login acceptance

### B. My Day / assigned work

- [x] Assigned current/upcoming jobs
- [x] Employee-safe summaries
- [x] Fresh employee-safe JobPacket
- [x] Approved job instructions
- [x] Safety/method guidance
- [x] Directions/navigation handoff foundation
- [ ] Current device/emulator acceptance
- [ ] Reassignment-away denial
- [ ] Cross-tenant denial

### C. Field execution

- [x] Start job/work
- [x] Checklist progress
- [x] Required items block completion through supported path
- [x] Optional items do not block completion
- [x] Employee notes/issues
- [x] Before photos
- [x] After photos
- [x] Complete job through server-owned execution gateway
- [ ] Current-head owner/admin completion review acceptance
- [ ] Network-failure behavior
- [ ] Duplicate-submit/idempotency behavior
- [ ] Camera/photo permission behavior

### D. Extra work

- [x] Tenant add-ons available to employee
- [x] Custom bounded extra-work request
- [x] Employee note/context
- [x] Submitted request visible for owner review foundation
- [ ] Customer-approval/full-scope lifecycle acceptance

### E. SLAI Work Assistant

- [x] Work Assistant UI/foundation
- [x] Current authorized job context
- [x] Bounded employee-safe guidance
- [ ] Current device acceptance
- [ ] Permission/tenant-boundary regression
- [ ] Safety-critical escalation behavior acceptance

### F. Mobile payments / Tap to Pay — V1 later phase

Tap to Pay remains part of V1 but is intentionally later in the mobile/payment sequence.

- [ ] Secure employee payment permission model
- [ ] Canonical mobile payment API
- [ ] Stripe mobile SDK integration
- [ ] Tap to Pay implementation
- [ ] Confirmed payment state
- [ ] Owner visibility/audit trail
- [ ] Failure/retry handling
- [ ] Supported-device acceptance

## 3. Backend / Firebase / Security

### A. Tenant isolation

- [x] Multi-tenant rules/service foundation
- [x] Employee-safe server projection foundation
- [x] Field-photo authorization foundation
- [ ] Current-head Tenant A cannot read Tenant B customers
- [ ] Current-head Tenant A cannot write Tenant B jobs
- [ ] Current-head employee cannot access another tenant
- [ ] Current-head customer cannot access internal employee/admin data
- [ ] Current-head anonymous denial smoke

### B. Firestore / Storage

- [x] Canonical Firestore rules suites exist
- [x] Canonical Storage rules suites exist
- [ ] Run full Firestore rules suite at release candidate
- [ ] Run full Storage rules suite at release candidate
- [ ] Verify field-photo metadata/object lifecycle parity
- [ ] Capture final deployed rules hashes before release

### C. Cloud Functions / server gateways

- [x] Owner onboarding bootstrap gateway
- [x] Business profile gateway
- [x] SaaS agreement gateway
- [x] Owner subscription checkout gateway
- [x] Owner subscription activation webhook
- [x] Employee session/execution gateways
- [x] GrowthAI provider gateway
- [x] Booking payment/Stripe foundation
- [ ] Full current-head Functions suite
- [ ] Current-head CORS/auth failure cases
- [ ] Current-head stale/duplicate webhook handling

## 4. Stripe / Payments / Infrastructure

### A. Owner SaaS subscription

- [x] Platform-account Stripe Customer ownership
- [x] Subscription Checkout foundation
- [x] Verified webhook signature
- [x] `invoice.paid` activation foundation
- [x] Active linked subscription required
- [x] Exact quantity = 1 validation
- [ ] Monthly Price accepted
- [ ] Annual Price accepted
- [ ] Arbitrary Price rejected
- [ ] Renewal behavior verified
- [ ] Payment failure behavior verified
- [ ] Cancellation/end-of-term behavior verified
- [ ] Recovery/reactivation verified
- [ ] Customer billing-management/Portal behavior verified if included in V1

### B. Customer-job payments / Stripe Connect

- [x] Stripe Connect foundation
- [x] Canonical booking checkout foundation
- [x] Honest return-state behavior
- [x] Webhook-confirmed payment truth foundation
- [x] Manual-payment separation
- [ ] Production/test Connect onboarding verification
- [ ] `chargesEnabled` verification
- [ ] `payoutsEnabled` verification
- [ ] Booking checkout end-to-end verification
- [ ] Platform-fee verification
- [ ] Payment tenant-isolation verification
- [ ] Failure/retry behavior

### C. Release infrastructure

- [ ] Full production build from release candidate
- [ ] Lint green
- [ ] Web test suite green
- [ ] Functions suite green
- [ ] Employee App tests green
- [ ] Firestore rules green
- [ ] Storage rules green
- [ ] Known stale fixed-date/JSDOM test fixed if still reproducible
- [ ] Controlled V1 deployment
- [ ] Rollback package/evidence current

## 5. Wife V1 Acceptance

The original wife beta already served as discovery and helped define V1. The next wife test is for the current V1 release candidate, not the old deployed beta.

Testing style: give an end goal and observe whether the path is discoverable without telling her where to click.

- [ ] Create/setup a new business account
- [ ] Configure services/pricing
- [ ] Configure availability
- [ ] Configure customer-payment setup
- [ ] Add/setup employee if applicable
- [ ] Create customer
- [ ] Create estimate / approved scope
- [ ] Schedule/assign job
- [ ] Employee completes job from mobile app
- [ ] Employee requests extra work
- [ ] Owner/customer handle extra-work approval
- [ ] Owner reviews completed job
- [ ] Customer payment flow
- [ ] Tap to Pay flow once mobile payment phase is implemented
- [ ] Use SLAI Assistant for realistic owner tasks
- [ ] Record hesitation/confusion/blockers
- [ ] Fix V1-specific findings
- [ ] Re-test

## 6. Explicitly Deferred / Not V1 Blockers Unless Re-scoped

- payroll/time-clock/break management
- full offline queue
- Training Library expansion
- inspection/scorecard system expansion
- route optimization beyond approved V1 needs
- office messaging
- push notifications
- broad multi-platform data import
- AI pricing as authoritative pricing
- autonomous AI actions
- future standalone SLAI products

## Recommended Validation Order

1. close remaining job-scope / extra-work edge
2. finish owner onboarding
3. finish monthly + annual SaaS billing and required lifecycle
4. finish Employee App mobile/payment phase including Tap to Pay
5. run full integrated security/test/build audit
6. controlled V1 deployment
7. wife V1 acceptance
8. fix actual V1 findings
9. UI fine-tuning
10. final customer-release smoke
