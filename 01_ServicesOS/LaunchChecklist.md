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
