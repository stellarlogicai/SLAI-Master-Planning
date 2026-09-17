# ServicesOS V1 Scope vs Implementation Audit — 2026-09-17

**Purpose:** Compare the latest audited ServicesOS V1 application snapshot against the authoritative V1 definition and determine whether the newly identified PR #9 hardening reconciliation threatens the late-October customer-release target.

**Application baseline:** `8bce3919d8e26d2643a476e44b89ed34b7d34718` — `Add employee extra-work request review`  
**Active branch:** `feature/owner-onboarding-v1`  
**Authoritative V1 docs reviewed:**
- `docs/servicesos-beta/SERVICESOS_V1_CURRENT_STATE.md` (2026-09-16)
- `docs/servicesos-beta/SERVICESOS_V1_FINISH_BOARD.md` (2026-09-16)

---

## Executive conclusion

The late-October target remains plausible, but the V1 schedule is already tight because several already-approved V1 capability families still contain meaningful implementation and acceptance work.

The newly discovered hardening reconciliation from `hardening/firebase-cost-guardrails` / draft PR #9 should **not** be treated as new product scope. A narrow selective port of still-missing protections is a release-hardening task and should occur before continuing the remaining V1 feature slices.

The hardening slice does **not** materially threaten the late-October target if it is constrained to verified missing protections and old superseded implementations are excluded.

The primary schedule risks are instead:

1. full operational owner onboarding,
2. owner SaaS monthly/annual + lifecycle behavior,
3. field safety basic V1,
4. Tap to Pay/mobile payment implementation and supported-device acceptance,
5. end-to-end owner/employee/customer/payment integration acceptance,
6. final wife acceptance and release-hardening findings.

Do not add new V1 feature families.

---

# 1. Scope-control rule

The September 16 V1 documentation explicitly defines V1 as the smallest safe, useful, connected version of each already-approved capability family.

The audit therefore does **not** count parked or legacy code as missing V1 work.

Examples intentionally excluded from the release requirement include advanced route optimization, fleet telemetry, continuous GPS, broad offline-first sync, Training Library expansion, office messaging, payroll/break management, expenses/mileage, broad GrowthAI expansion, and future SLAI products.

The late-October target should be protected by narrowing each required capability to its defined basic V1 form, not by expanding feature depth.

---

# 2. Current implementation alignment

## A. ServicesOS core owner workflow — GREEN

Documentation status: complete.

Current V1 already contains the major operating foundation:

- multi-tenancy/auth/role foundation,
- customers/leads,
- deterministic estimates,
- bookings/calendar,
- repeat customers,
- residential/commercial intake,
- Field Mode,
- checklist completion,
- field-photo evidence,
- Business Settings,
- Stripe/Stripe Connect foundation,
- tenant isolation/security foundation,
- customer-approved job scope,
- tenant add-on catalog,
- employee extra-work request + owner review foundation.

**Release risk from implementation gap:** Low relative to remaining areas.

---

## B. GrowthAI / SLAI Assistant V1 — GREEN/YELLOW

Implementation is substantially complete.

Remaining V1 work is primarily:

- integrated-current-branch regression testing,
- V1-specific fixes only,
- freeze.

No new GrowthAI features should be added before release.

**Release risk:** Low if frozen to the documented V1 feature set.

---

## C. Employee App core field workflow — GREEN/YELLOW

Current employee app already contains:

- authenticated employee session,
- Today/current/upcoming jobs,
- authorized JobPacket,
- job details,
- instructions/method guidance,
- start work,
- checklist progress,
- notes/issues,
- before/after photo evidence,
- complete-job path,
- Work Assistant,
- profile/logout,
- extra-work request UI,
- maps/directions handoff foundation.

The app is real and operationally substantial; it is not a placeholder shell.

### Remaining correspondence work

Still required:

- complete extra-work owner/customer approval lifecycle,
- authoritative scope refresh after approval,
- prove declined/unapproved requests cannot mutate scope,
- assignment/cancellation/reschedule/reassignment refresh safety,
- onboarding-created employee login acceptance.

**Release risk:** Moderate. Most foundations exist, but authoritative cross-surface correspondence must be proven.

---

## D. Basic routing/day progression — YELLOW

Existing implementation includes Today/upcoming jobs, job addresses, and external maps/directions handoff.

Remaining defined V1 requirement is deliberately narrow:

- canonical ordered employee work sequence,
- current-job/next-job progression,
- refresh behavior when scheduling/assignment changes,
- owner ↔ employee correspondence acceptance,
- device acceptance.

This is not an advanced route optimizer.

**Release risk:** Moderate but controlled if scope remains basic.

---

## E. Field safety basic V1 — RED/YELLOW

The documentation defines field safety as part of V1, but the audited application snapshot does not yet show a dedicated implemented Safety/Emergency workflow or corresponding complete server authority path.

Required basic slice remains:

- Safety/Emergency action,
- 911 dialer handoff,
- owner/admin call handoff,
- tenant-scoped safety alert,
- job/address/timestamp context,
- limited permission-based location,
- honest sent/queued/failed/location-unavailable state,
- narrow safety-only offline queue,
- owner review/resolve,
- tenant/permission/device/network acceptance.

Advanced monitoring, continuous GPS, dispatch integration, and surveillance remain excluded.

**Release risk:** High among remaining product slices because this is still a meaningful net-new end-to-end capability.

---

## F. Tap to Pay / mobile payment — RED/YELLOW

Tap to Pay is explicitly defined as V1 in the September 16 documentation.

The current employee app package does not yet include the Stripe React Native mobile SDK/Tap to Pay dependency, and the V1 docs continue to list the following as remaining:

- employee payment permission model,
- canonical mobile payment API,
- Stripe mobile SDK integration,
- Tap to Pay implementation,
- backend-confirmed payment truth,
- owner audit visibility,
- failure/retry handling,
- supported-device/payment acceptance.

This work must remain distinct from owner SaaS subscription billing and existing customer booking checkout.

**Release risk:** High. This is one of the largest remaining implementation + external-device acceptance areas.

---

# 3. Owner onboarding alignment

## Existing implementation — GREEN foundation

`OwnerOnboardingEntry.jsx` currently implements the secure activation spine:

- business profile,
- SaaS agreement,
- subscription checkout,
- owner bootstrap integration.

The existing business form gathers name, email, phone, address, and timezone.

The billing UI currently presents only the $100/month path.

## Remaining operational onboarding — YELLOW/RED

The documented production onboarding still requires:

- business type,
- service area,
- optional website,
- offered/custom services,
- deterministic pricing configuration,
- working days/hours,
- duration/buffer/horizon,
- brand basics,
- Stripe Connect step with skip/do-later,
- Just Me / employees path,
- canonical employee creation/linking,
- review,
- progress persistence/resume,
- separation of billing entitlement from onboarding completion,
- explicit completion marker,
- clear first action,
- new-owner acceptance without founder/developer help.

The current code confirms this is more than a cosmetic gap: the secure activation spine exists, but full operating configuration is not yet present in the onboarding flow.

**Release risk:** High unless implemented as a controlled sequence of small canonical-settings slices.

---

# 4. Owner SaaS billing alignment

## Existing — GREEN foundation

Current V1 includes secure Checkout and verified activation foundations.

## Remaining — YELLOW/RED

Defined V1 requires:

- $100/month and $1,000/year selection,
- exactly two approved server-side Price IDs,
- activation validation for either approved Price,
- identical normal entitlement across billing cadence,
- renewal handling,
- failed-payment handling,
- cancellation/end-of-term handling,
- recovery/reactivation,
- customer billing-management behavior as required,
- Stripe test/live acceptance.

**Release risk:** Moderate-to-high because correctness and lifecycle behavior matter more than UI complexity.

---

# 5. Customer-job payments / Stripe Connect

Foundation exists:

- Connect,
- booking Checkout,
- webhook-confirmed truth,
- manual-payment separation.

Remaining work is primarily production/integration acceptance:

- Connect verification,
- booking checkout verification,
- webhook E2E,
- platform fee verification,
- tenant isolation,
- failure/retry acceptance.

**Release risk:** Moderate. Existing architecture reduces implementation risk, but payments require strict acceptance evidence.

---

# 6. PR #9 hardening reconciliation

Branch: `hardening/firebase-cost-guardrails`  
Draft PR: #9

## Already superseded / do not port wholesale

- old field-photo quota implementation,
- old field-photo rules wholesale,
- old UI code,
- superseded GrowthAI implementation,
- unrelated old Stripe/payment behavior.

Current V1 already contains the evolved field-photo reservation/finalization quota architecture.

## Verified protections worth reconciling

### Customer email

The old hardening branch contains protections not present in the audited V1 email handler:

- canonical actor membership checks,
- exact/bounded request validation,
- platform/tenant/actor quotas,
- application idempotency,
- attachment size/type constraints,
- provider timeout/retry behavior,
- fail-closed provider enable control.

### GrowthAI

Old hardening includes a fail-closed provider enable switch that should be deliberately compared with current provider configuration.

### Cloud Functions

Current V1 already bounds many newer gateways to `minInstances: 0` / `maxInstances: 3`, but the older exported Function inventory is not uniformly governed. Reconcile only deployable V1 Functions.

## Classification

This is **release hardening**, not new feature scope.

### Scope gate

The reconciliation slice must be rejected if it expands into:

- wholesale PR #9 merge,
- rewriting field photos,
- changing product behavior unrelated to hardening,
- new provider features,
- Stripe redesign,
- infrastructure/platform expansion.

**Schedule effect:** Neutral-to-positive when bounded. It reduces the probability that security/cost-control issues surface during the final release pass.

---

# 7. Late-October risk assessment

## Current classification

**Late-October release: achievable but schedule-sensitive.**

There is not enough evidence to call the date comfortably buffered. There is also no evidence that the new hardening reconciliation alone requires moving the target.

## Biggest threats to the date

In descending practical concern:

1. Tap to Pay + device/payment acceptance,
2. field safety + device/network/location acceptance,
3. operational onboarding breadth,
4. subscription lifecycle/payment acceptance,
5. cross-surface extra-work/job-scope integration,
6. final integrated regression findings,
7. wife V1 acceptance findings.

The selective PR #9 hardening reconciliation sits below those as a schedule threat, provided scope remains fixed.

---

# 8. Recommended release sequence after this audit

1. **Selective PR #9 hardening reconciliation**
   - email auth/quotas/idempotency/provider controls,
   - GrowthAI kill-switch reconciliation,
   - deployable Function instance-bound inventory,
   - no old feature wholesale merge.

2. **Close extra-work authoritative lifecycle**
   - owner review → customer approval → scope refresh,
   - declined/unapproved immutability.

3. **Finish operational owner onboarding** in small canonical-settings slices.

4. **Finish monthly/annual owner billing + required lifecycle.**

5. **Finish Employee App correspondence + basic day progression.**

6. **Implement basic field safety** with narrow acceptance contract.

7. **Implement Tap to Pay** as its own payment/security slice.

8. **Run integrated current-head validation** across web, Functions, rules, employee app, tenant/security, GrowthAI, payments.

9. **Controlled test deployment.**

10. **Wife V1 acceptance.**

11. **Fix only V1-specific findings.**

12. **UI fine-tuning.**

13. **Final release smoke/customer release.**

---

# 9. Release-date protection rules

Until V1 ships:

- no new feature family joins V1,
- no SLAI Core extraction work in ServicesOS,
- no SLAI Web implementation,
- no advanced routing,
- no broad offline architecture,
- no continuous GPS,
- no Training expansion,
- no GrowthAI expansion,
- no payment-provider expansion beyond defined Stripe V1,
- no branch-cleanup work that distracts from release unless it resolves an active safety/integration issue,
- no wholesale merge of old divergent branches.

Every remaining task should be a small delta with acceptance criteria and a hard stop condition.

---

# 10. Decision

**Add the selective PR #9 hardening reconciliation now. Keep the late-October target.**

Do not treat the hardening discovery as permission to reopen V1 architecture. The target becomes endangered only if the hardening slice expands beyond the verified missing protections or if the already-defined field safety / Tap to Pay / onboarding requirements grow beyond their documented basic V1 boundaries.
