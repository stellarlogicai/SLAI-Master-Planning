# ServicesOS Launch Checklist

## Purpose

This checklist defines what must be complete before ServicesOS is used by a real cleaning business, beta customer, or paying customer.

Primary launch goal:

```text
ServicesOS Web App
+ Employee App
+ Payments
+ Scheduling
+ Testing
+ Wife Beta
= Stable enough for real use
```

---

# Launch Rule

Do not add new major features during launch preparation unless they directly affect:

- Customer trust
- Payment reliability
- Employee workflow
- Scheduling accuracy
- Data security
- Legal/compliance risk
- Beta usability

Everything else goes into `FeatureRequests.md`.

---

# Phase 1 — Folder / Project Structure

- [ ] `SLAI_REAL` root folder exists
- [ ] `ServicesOS/web-app` runs successfully
- [ ] `ServicesOS/employee-app` exists
- [ ] `ServicesOS/shared` exists
- [ ] `ServicesOS/cloud-functions` exists
- [ ] Planning documents are organized
- [ ] Old folder references removed
- [ ] Imports fixed after restructuring
- [ ] README/setup notes updated
- [ ] Coding assistant can understand project layout

---

# Phase 2 — Web App Stability

- [ ] App starts without errors
- [ ] App builds successfully
- [ ] Login works
- [ ] Logout works
- [ ] User roles load correctly
- [ ] Business/company data loads correctly
- [ ] Customer records can be created
- [ ] Customer records can be edited
- [ ] Customer records can be searched
- [ ] Leads can be moved through workflow
- [ ] Estimates can be created
- [ ] Estimates can be edited
- [ ] Contracts can be generated
- [ ] Contracts can be signed or marked accepted
- [ ] Jobs can be scheduled
- [ ] Employees can be assigned
- [ ] Job status can be updated
- [ ] Dashboard data displays correctly
- [ ] No obvious broken routes

---

# Phase 3 — Stripe / Payments

- [ ] Stripe base payment integration works
- [ ] Stripe Connect onboarding works
- [ ] Connected account status displays correctly
- [ ] Platform fee logic is correct
- [ ] Deposit payment works
- [ ] Final payment works
- [ ] Payment status updates Firestore
- [ ] Payment failure is handled clearly
- [ ] Receipt flow works
- [ ] Webhooks are deployed
- [ ] Webhooks update records correctly
- [ ] Test mode payments verified
- [ ] No real charges during testing
- [ ] Payment records are tied to correct company/customer/job

---

# Phase 4 — Employee App MVP

Minimum employee app workflow:

```text
Login
↓
View Today’s Jobs
↓
Open Job
↓
Start Job
↓
Complete Checklist
↓
Upload Photos
↓
Message Office
↓
Collect Payment if needed
↓
Complete Job
```

- [ ] Employee login works
- [ ] Employee profile loads
- [ ] Employee only sees their company data
- [ ] Employee only sees assigned jobs
- [ ] Today screen works
- [ ] Job details screen works
- [ ] Checklist screen works
- [ ] Checklist completion syncs
- [ ] Photo upload works
- [ ] Job status updates work
- [ ] Basic messaging works
- [ ] Training screen works
- [ ] Time tracking basic events work
- [ ] Tap to Pay plan exists
- [ ] Tap to Pay tested if included in MVP
- [ ] Push notification plan exists
- [ ] Offline limitations documented

---

# Phase 5 — Security / Permissions

- [ ] Firestore security rules reviewed
- [ ] Owner permissions tested
- [ ] Admin/manager permissions tested
- [ ] Employee permissions tested
- [ ] Customer access rules tested if customer portal exists
- [ ] Employees cannot read other companies' data
- [ ] Employees cannot edit unauthorized jobs
- [ ] Customers cannot read other customer data
- [ ] Stripe secrets are not exposed in frontend
- [ ] Environment variables are not committed
- [ ] Storage rules reviewed for job photos
- [ ] Role-permission matrix matches implementation

---


# Phase 5A — Cost Safety / Billing Guardrails

**V1 launch requirement:** ServicesOS must not rely on a Firebase/Google Cloud budget alert as its only protection against unexpected infrastructure charges.

### Pre-Revenue Cost Policy

Until ServicesOS has paying customers and Jamie intentionally raises the limits:

- [ ] Target normal Firebase / Google Cloud spend is kept within the lowest practical no-cost / low-cost usage bands.
- [ ] Pre-revenue Firebase / Google Cloud target is $10–$15/month, with $20/month treated as the current founder-defined absolute comfort ceiling until paying customers justify a deliberate increase.
- [ ] Billing limits may only be raised intentionally after reviewing real usage and customer revenue.
- [ ] Nonessential paid infrastructure remains disabled unless required for a current V1 workflow.

### Google Cloud / Firebase Billing Controls

- [ ] Firebase project is intentionally restored to Blaze only after billing guardrails are configured.
- [ ] Google Cloud budget is configured below the founder's absolute monthly comfort ceiling.
- [ ] Multiple budget alerts are configured before the ceiling is reached.
- [ ] Budget alerts are treated as notifications only, **not** as a guaranteed hard spending cap.
- [ ] Supported Firebase / Cloud Run spend caps are enabled for Cloud Functions and other supported services used by ServicesOS.
- [ ] Cloud Functions / Cloud Run maximum-instance limits are explicitly configured instead of leaving cost exposure fully open-ended.
- [ ] Pre-revenue Cloud Run / 2nd-gen Functions default target is a small maximum-instance count appropriate for beta traffic; Google currently recommends starting with a maximum of 3 instances as a cost safeguard.
- [ ] Minimum instances remain 0 for services that do not have a proven V1 need to stay warm.
- [ ] Request-based billing / scale-to-zero is preferred where compatible with the ServicesOS workload.
- [ ] Function CPU / memory settings are no larger than required for the workload.
- [ ] Unused Cloud Run services, functions, revisions, test resources, and other billable resources are removed or disabled.
- [ ] Phone/SMS authentication and other directly metered paid services remain disabled unless a current V1 requirement explicitly needs them.
- [ ] Firestore paid-only features such as PITR, backups, restore/clone workflows, and TTL policies are not enabled casually; each must have an explicit operational reason and cost review.

### Important Hard-Cap Limitation

Firebase currently supports spend caps for only some paid services, including Cloud Functions for Firebase, Firebase App Hosting, Firebase AI Logic, and Firebase Extensions.

Firestore, Cloud Storage, Hosting, and other paid-tier products do **not** currently provide a universal hard dollar cap through Firebase.

Therefore:

- [ ] ServicesOS must use application-level safeguards for Firestore, Storage, Hosting, and any other uncapped usage surfaces.
- [ ] No launch documentation may describe the Firebase budget as a guaranteed hard monthly cap.
- [ ] Any future automated "disable billing at budget threshold" design must account for billing-reporting delay and the risk of shutting down production resources; it is not required for V1.

### Application-Level Cost Guards

ServicesOS should prevent accidental or abusive usage before requests become billable work.

- [ ] Authentication and tenant authorization occur before protected backend work is performed.
- [ ] Firebase App Check is evaluated and enabled/enforced for supported production surfaces when web/mobile compatibility has been verified.
- [ ] Public or externally callable endpoints have explicit abuse protection appropriate to the endpoint.
- [ ] Stripe webhooks continue to use Stripe signature verification and are not treated like ordinary client-originated requests.
- [ ] Provider-backed / credit-backed actions enforce canonical credit availability before the paid provider call.
- [ ] Provider-backed actions retain idempotency / duplicate-request protection.
- [ ] Expensive or externally billed actions have server-side rate limits appropriate to beta usage.
- [ ] Retry behavior is bounded; failed functions/jobs cannot retry indefinitely.
- [ ] Scheduled/background jobs have bounded batch sizes and cannot fan out without an explicit limit.
- [ ] Concurrency is deliberately controlled for resource-heavy work.
- [ ] A server-side kill switch exists, or is planned before external beta where technically practical, for disabling nonessential paid/provider-backed actions without disabling the core ServicesOS operating workflows.
- [ ] Cost guards fail closed for paid actions when canonical allowance/guard state cannot be verified.

### Firestore Cost Guards

Cloud Firestore billing is driven by document reads, writes, deletes, storage, index reads, and network bandwidth.

- [ ] Realtime listeners are used only where the workflow benefits from realtime updates.
- [ ] Queries are bounded/paginated where result sets can grow.
- [ ] UI polling loops and repeated unnecessary refetches are avoided.
- [ ] Bulk/background processing has explicit document/batch limits.
- [ ] Firestore queries used by beta-critical screens are reviewed for accidental high-read patterns.
- [ ] Security-rule dependent reads are considered when reviewing high-frequency access patterns.
- [ ] Firestore Usage and Google Cloud billing metrics are reviewed during wife beta and early external beta.

### Cloud Storage / Photo Cost Guards

Cloud Storage for Firebase requires Blaze, even though no-cost usage remains available.

- [ ] Photo upload file types are restricted to the formats ServicesOS actually supports.
- [ ] Maximum upload size is enforced client-side **and** server/rules-side where technically possible.
- [ ] Job/photo workflows have sensible count limits or workflow constraints so a bug cannot create unlimited uploads.
- [ ] Duplicate/retry upload behavior is reviewed so failed uploads do not create repeated stored objects.
- [ ] Image compression/resizing is used where appropriate instead of storing unnecessarily large originals.
- [ ] Storage paths remain tenant-scoped and authorized.
- [ ] Storage usage and download traffic are reviewed during beta.
- [ ] Orphaned test uploads have an intentional cleanup process before customer launch.

### Monitoring / Founder Visibility

- [ ] Founder knows where to view Firebase Usage and Google Cloud Billing reports.
- [ ] Billing alerts reach an email/account Jamie actively monitors.
- [ ] Abnormal Functions, Firestore, Storage, or Hosting activity can be identified from available monitoring.
- [ ] Any unexplained usage spike is treated as a launch-blocking incident until understood.
- [ ] Usage is reviewed after major deployments and after enabling a new billable service.
- [ ] Cost assumptions are rechecked after wife beta and before the first paying customer.

### V1 Acceptance Criteria

Cost safety is ready for customer-facing V1 when all of the following are true:

- [ ] Blaze billing is active only with the approved billing account and founder-visible alerts.
- [ ] Supported function/service spend caps are enabled where available.
- [ ] Cloud Functions / Cloud Run scaling limits are explicitly bounded for pre-revenue traffic.
- [ ] No unnecessary minimum instances or continuously billed resources remain.
- [ ] Core provider-backed actions have server-side allowance, idempotency, retry, and abuse protections.
- [ ] Photo/storage workflows have explicit upload limits.
- [ ] Firestore high-frequency workflows have been reviewed for obvious runaway-read/write patterns.
- [ ] Jamie can disable nonessential paid/provider-backed functionality without losing the core customer/job/booking workflow where technically practical.
- [ ] A normal beta smoke test does not produce unexplained billable-usage spikes.
- [ ] Any known service without a true hard spend cap is documented so the founder does not mistake a budget alert for guaranteed protection.

---


# Phase 6 — Automated Testing

- [ ] Smoke tests created
- [ ] Login tests created
- [ ] Customer workflow tests created
- [ ] Estimate workflow tests created
- [ ] Scheduling tests created
- [ ] Payment tests created
- [ ] Permission tests created
- [ ] Employee app basic workflow tests planned
- [ ] Regression checklist created
- [ ] Every fixed major bug becomes a regression test

---

# Phase 7 — Wife Beta

Goal:

```text
Wife uses ServicesOS for real cleaning business workflows.
```

- [ ] Wife has login
- [ ] Wife can create customer
- [ ] Wife can create estimate
- [ ] Wife can schedule job
- [ ] Wife can assign employee/test account
- [ ] Wife can process payment in test mode
- [ ] Wife can use employee app workflow
- [ ] Wife feedback file is ready
- [ ] Bugs are recorded without defending the app
- [ ] Confusing workflows are documented
- [ ] Fixes prioritized by launch impact

---

# Phase 8 — Beta Customer Readiness

- [ ] Pricing is defined
- [ ] Support process exists
- [ ] Demo flow exists
- [ ] Basic onboarding guide exists
- [ ] Known limitations documented
- [ ] Backup plan exists
- [ ] Disaster recovery notes exist
- [ ] Customer feedback process exists
- [ ] SLAI contact/support email ready
- [ ] Legal/privacy terms planned

---

# Phase 9 — Website Readiness

Do not build public marketing site before product is stable enough to show.

- [ ] Real screenshots available
- [ ] Employee app screenshots available
- [ ] Pricing ready
- [ ] Demo request form planned
- [ ] Android APK/TestFlight plan ready
- [ ] App Store / Play Store path understood
- [ ] Product description finalized
- [ ] Support page planned

---

# Phase 10 — Launch Criteria

ServicesOS is ready for controlled launch when:

- [ ] Wife can use it for one full week
- [ ] No critical payment bugs remain
- [ ] No critical scheduling bugs remain
- [ ] No major security holes remain
- [ ] Employee workflow works end-to-end
- [ ] Bugs are tracked
- [ ] Support process exists
- [ ] Pricing is clear
- [ ] First customer onboarding flow is ready

---

# Notes

Launch does not mean perfect.

Launch means:

```text
Stable enough
useful enough
safe enough
to let real users test it.
```
