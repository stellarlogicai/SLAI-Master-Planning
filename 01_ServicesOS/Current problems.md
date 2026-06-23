Current problems:

P0: Console error — tenantService getTenant permission-denied
P1: Customer Portal copy is stale — says persistence disabled even though submit works
P1: Quote/appointment cards show placeholder data — 0 bed, 0 bath, $0 - $0
P1: Need final manual retest and commit

Do not go to Stripe yet. This is still core Customer Portal / quote workflow cleanup.

Order
1. Commit the current working quote-flow checkpoint if it is validated.
2. Fix tenant read permission console error safely.
3. Fix Customer Portal display/copy issues.
4. Rerun full manual quote request test.
5. Commit only after lint/test/build pass.
Prompt 1 — checkpoint current working state

You are working in:

C:\Users\merce\Documents\SLAI_Real\ServicesOS

Goal: Checkpoint the current validated Customer Portal quote request foundation before fixing remaining issues.

Do not modify code.

Context:
Manual test confirmed:

Customer Portal identity resolves for test.customer@gmail.com.
Request Quote submission worked.
Submitted request appears in leads.
Remaining issues still exist:
tenantService getTenant permission-denied console error
stale Customer Portal banner copy
some quote/appointment cards show placeholder values like 0 bed / 0 bath and $0 - $0

Steps:

Run git status.
Review changed files.
Confirm changes are limited to Customer Portal quote request flow, tenant diagnostics, crash/display safety, identity/persistence services, tests, and docs.
From servicesos-web, run:
npm run lint
npm run test -- --run
npm run build
If validation passes, commit with message:

Add Customer Portal quote request foundation

Commit body:

Adds Customer Portal Request Quote flow foundation.
Adds quote intake mapper, identity resolver, lead payload builder, persistence service, and submit wiring.
Confirms quote request submission works with a tenant-linked customer.
Documents manual tenant/customer setup and tenant-link diagnosis.
Adds defensive Customer Portal quote rendering for legacy/malformed records.
Preserves appointment behavior.
Does not create bookings, payments, customers, or property profiles.
Does not change Firebase rules, Stripe, auth behavior, tenant model, backend, routing, or Tap to Pay.
Validation: lint passed, tests passed, build passed.

If validation fails, do not commit. Report the failure.

Report back:

Files committed
Validation results
Commit hash
Remaining warnings
Prompt 2 — fix the console permission error

You are working in:

C:\Users\merce\Documents\SLAI_Real\ServicesOS

Goal: Fix the remaining Customer Portal tenantService permission-denied console error safely.

Observed:

Customer Portal identity resolves for test.customer@gmail.com.
Request Quote submission works.
Quote request appears in leads.
Console still shows:
[Tenant Service] Error getting tenant: FirebaseError: Missing or insufficient permissions.
Diagnostics show:
projectId: cleaning-intake-system
tenantId: tenant_1781642309523
tenantPath: tenants/tenant_1781642309523
Tenant document exists.
Test customer UID is in tenants/tenant_1781642309523.users.
Customer record exists and matches by authUid.

Do not bypass identity guards.
Do not disable tenant checks.
Do not allow all authenticated users to read all tenants.
Do not touch Stripe/payment behavior.
Do not touch Stripe Connect.
Do not touch backend/cloud functions.
Do not touch Tap to Pay.
Do not change routing.
Do not commit until validation passes.

Tasks:

Inspect Firestore rules and deployment config:
root firebase.json if present
cloud-functions/firebase.json
cloud-functions/firestore.rules
shared/firestore.rules
Determine which rules file is actually used for deploy.
Locate tenant read rule:
match /tenants/{tenantId}
Identify exactly why this signed-in customer cannot read:
tenants/tenant_1781642309523
Compare rule expectations to Firestore data:
Does rule expect tenants/{tenantId}.users?
Does rule expect adminUsers?
Does rule expect custom claims?
Does rule expect a different membership field?
Is rule using get() on a tenant document in a way that blocks itself?
Is deployed rules file different from the local rules file being inspected?
If a minimal safe rules fix is needed:
Update the correct local rules file only.
Do not deploy rules unless explicitly instructed.
The rule must allow tenant read only when:
request.auth.uid is in that tenant’s allowed users/admin list
OR the user is a super-admin by the existing app-approved mechanism.
Do not add a broad allow read for all authenticated users.
If no rules change is needed and the issue is data:
Document the exact missing/incorrect field and exact Firebase Console fix.
If the remaining issue is AuthContext calling getTenant in a way that fails before CustomerPortal can use tenantId:
Fix only if small and safe.
Do not weaken guards.
Ensure permission-denied is reported clearly instead of “Tenant not found.”
Remove or reduce noisy DEV diagnostics if no longer needed.
Keep only intentional dev-safe diagnostics if useful.
No secrets, no API keys.
Update:

docs/servicesos-beta/CUSTOMER_PORTAL_TENANT_PERMISSION_FIX_PROGRESS.md

Include:

Confirmed root cause
Exact rules file used
Exact rule causing permission-denied
Whether data or rules were fixed
Whether deployment is required
Manual retest steps
What not to change
Run:
npm run lint
npm run test -- --run
npm run build

Do not commit.

Report back:

Root cause
Files changed
Exact rule/data issue found
Whether Firebase rules changed
Whether deployment is required
Whether console permission error is expected to be gone
Whether temporary diagnostics remain
Lint result
Test result
Build result
Recommended manual retest
Prompt 3 — fix display/copy, retest, then commit

You are working in:

C:\Users\merce\Documents\SLAI_Real\ServicesOS

Goal: Fix Customer Portal display issues, rerun the quote request manual test, then commit the validated fixes.

Issues to fix:

Customer Portal green banner still says:
“Saved quote request persistence is still disabled.”
But quote request submission now works.
Some Customer Portal cards show misleading placeholders:
0 bed, 0 bath
$0 - $0
even when snapshot/request data exists or estimate is pending owner review.

Do not touch Stripe/payment behavior.
Do not touch Stripe Connect.
Do not create bookings or payments.
Do not change Firebase rules unless already handled in the prior permission fix.
Do not change auth behavior.
Do not touch backend/cloud functions.
Do not touch Tap to Pay.
Do not change routing.

Tasks:

Update Customer Portal banner copy to:
“Customer profile linked. You can submit quote requests for owner review.”
Inspect CustomerPortal.jsx rendering for:
Quotes tab
Request Quote success state
Appointments tab
lead/quote cards
booking cards
Make cards snapshot-aware.
Prefer snapshot/request fields before legacy formData fields:
requestSnapshot.serviceType
propertySnapshot.bedrooms
propertySnapshot.bathrooms
propertySnapshot.roomCounts
propertySnapshot.pets
requestSnapshot.preferredDate
requestSnapshot.preferredTime
customerSnapshot.fullName / displayName / email
For pending owner review records:
Show “Pending owner review”
Do not show $0 - $0 unless it is a real finalized estimate.
Do not show 0 bed / 0 bath if real snapshot data exists.
Use a clearer fallback like:
“Details pending review”
if room data is missing.
Confirm Appointments tab does not mislabel quote requests as confirmed appointments.
If it is an appointment request attached to a quote request, label it:
“Quote request pending review.”
Add/update tests if safe:
Banner copy reflects active quote request submission.
Pending owner review does not display $0 - $0.
Snapshot room data displays correctly.
Missing legacy formData does not crash.
Pending quote request is not mislabeled as confirmed booking.
Update docs:
docs/servicesos-beta/CUSTOMER_PORTAL_QUOTE_REQUEST_MANUAL_TEST.md
docs/servicesos-beta/CUSTOMER_PORTAL_TENANT_PERMISSION_FIX_PROGRESS.md if relevant
Manual retest:
Sign in as test.customer@gmail.com
Confirm no tenant permission console error if fixed
Submit a new fake quote request
Confirm it appears in owner/admin leads
Confirm no booking was created
Confirm no payment was created
Confirm Customer Portal displays the request correctly
Run:
npm run lint
npm run test -- --run
npm run build
If validation passes, commit with message:

Fix Customer Portal quote request display and tenant permission cleanup

Commit body:

Updates Customer Portal linked-customer banner copy now that quote request submission works.
Improves quote/appointment card rendering using snapshot-aware fallbacks.
Prevents pending owner review quote requests from displaying misleading $0 - $0 estimates.
Prevents missing legacy formData from crashing Customer Portal.
Documents manual quote request retest results.
Preserves appointment behavior.
Does not create bookings, payments, customers, or property profiles.
Does not change Stripe, auth behavior, tenant model, backend, routing, or Tap to Pay.
Validation: lint passed, tests passed, build passed.

Report back:

Files changed
Whether console tenant permission error is gone
Whether banner copy is fixed
Whether snapshot data displays correctly
Whether $0 - $0 placeholder is fixed
Whether quote request submitted and appeared in leads
Whether booking/payment stayed untouched
Validation results
Commit hash
Recommended next beta-critical fix

After those three, the next ServicesOS step should be owner/admin quote review, not Stripe. The customer can submit a request; now the owner needs a clean way to review it, adjust price, and approve/send the quote.