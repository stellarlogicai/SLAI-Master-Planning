# ServicesOS Branch Audit — 2026-09-17

**Status:** Read-only repository hygiene audit  
**Repository audited:** `stellarlogicai/ServicesOS`  
**Current V1 application baseline:** `8bce3919d8e26d2643a476e44b89ed34b7d34718` — `Add employee extra-work request review`  
**Active V1 branch:** `feature/owner-onboarding-v1`  
**Owner:** Jamie Brown / Stellar Logic AI

---

## Purpose

Audit every remote ServicesOS branch to determine whether it:

- is fully contained in the current V1 application baseline,
- remains intentionally active,
- contains only historical/documentation differences,
- contains functionality already reproduced/evolved in current V1 despite divergent Git ancestry,
- or contains code/protections that still need deliberate reconciliation.

No branches were deleted, merged, rebased, reset, or otherwise modified during this audit.

---

# Executive Summary

The repository currently has **51 remote branches**.

GitHub repository configuration currently has:

```text
delete_branch_on_merge = false
```

That setting explains much of the branch accumulation: merged/integrated branches remain visible after their work is absorbed.

Audit result:

```text
51 total remote branches
│
├── 43 historical branches fully contained in 8bce391
├── 1 active V1 branch
├── 1 default master branch
├── 5 divergent branches with no missing V1 application behavior identified
└── 1 divergent branch requiring real reconciliation
```

The one branch that should **not** be deleted or blindly merged is:

```text
hardening/firebase-cost-guardrails
```

It is also the head of the repository's only currently open PR:

```text
PR #9 — Add ServicesOS V1 pre-Blaze cost guardrails
base: master
head: hardening/firebase-cost-guardrails
state: open draft
```

Parts of PR #9 have already been superseded/evolved in current V1, but some protections are not present in `8bce391` and should be deliberately reviewed/ported before customer release.

---

# 1. Keep

## `master`

**Classification:** KEEP — default/historical branch  
**Relative to `8bce391`:** 0 commits ahead, 30 behind

`master` is intentionally behind the active V1 line and remains the repository default branch.

Do not delete.

## `feature/owner-onboarding-v1`

**Classification:** KEEP — active V1 branch  
**Application checkpoint:** `8bce391`  
**Current branch tip:** later documentation-only commits

Relative to `8bce391`, the branch currently has 10 later commits affecting planning/readme documentation only.

This remains the current V1 working branch until the release strategy changes.

---

# 2. Fully Absorbed Historical Branches

The following **43 branches have zero unique commits relative to `8bce391`**.

Their tip commit is already an ancestor of the current V1 application baseline.

They do not contain hidden application work waiting to be merged.

They are cleanup candidates **after V1 is safely released/tagged and any desired historical checkpoints are preserved**.

## Feature branches

```text
feature/growthai-ai-gateway
feature/growthai-opportunity-feed
feature/v1-checklist-method-mapping
feature/v1-cleaning-products-methods
feature/v1-daily-prep-summary
```

## Fix branches

```text
fix/customer-portal-tenant-permission
fix/field-job-packet-ui
fix/field-mode-job-density
fix/field-photo-labeling
fix/growthai-openai-provider-compatibility
fix/growthai-opportunity-reconciliation-bounds
fix/slai-assistant-beta-ux
fix/v1-booking-conversion-idempotency
fix/v1-booking-date-time-pickers
fix/v1-browser-ai-release-gate
fix/v1-checkout-confirmation-wording
fix/v1-create-estimate-date-picker
fix/v1-create-estimate-visual-refresh
fix/v1-existing-customer-repeat-workflow
fix/v1-field-photo-firestore-authorization
fix/v1-job-packet-sticky-close
fix/v1-lead-tenant-id-persistence
fix/v1-manual-payment-authorization
fix/v1-payment-date-only-display
fix/v1-required-checklist-completion
```

## Release/history branches

```text
release/v1-firestore-rules-deployment-preflight
release/v1-wife-beta-candidate
servicesos-white-label-ui-polish
```

These are fully contained in the modern V1 line.

They may still be useful as human-readable historical labels until the final V1 release/tag exists.

## V1 lab branches

```text
v1-lab-authenticated-emulator-smoke
v1-lab-employee-field-access
v1-lab-field-assignment-visibility
v1-lab-field-photo-evidence-mvp
v1-lab-firebase-rules-reconciliation
v1-lab-production-console-evidence
v1-lab-production-identity-readiness
v1-lab-production-preflight-evidence
v1-lab-production-promotion-readiness
v1-lab-production-storage-readiness
v1-lab-production-storage-rules-smoke
v1-lab-storage-rules-two-document-fix
v1-lab-super-admin-tenant-propagation
v1-lab-v1-integration-readiness
```

These lab branches successfully served as controlled slices and their work is now contained in V1.

## Wife-beta historical branch

```text
wife-beta-signout-regression-test
```

Fully contained in current V1.

---

# 3. Diverged Branches — No Missing V1 Application Behavior Identified

These branches show unique Git commits because their work was not merged through a simple ancestry path. The audit checked the actual content/behavior before classifying them.

## `docs/servicesos-v1-v2-scope-2026-09-03`

**Git state:** diverged — 11 commits ahead, 30 behind  
**Unique files:** documentation only

```text
docs/servicesos-beta/SERVICESOS_V1_FINISH_BOARD_ADDENDUM_2026-09-03.md
docs/servicesos-beta/SERVICESOS_V1_SCOPE_DECISIONS_2026-09-03.md
docs/servicesos-beta/SERVICESOS_V2_PLANNING.md
```

**Classification:** HISTORICAL DOCS ONLY

No application code is hidden here.

Before deletion, preserve/archive any planning language still useful. Current V1/current-state and SLAI planning documents are newer and should remain authoritative where they conflict.

---

## `restore-lab`

**Git state:** diverged — 1 commit ahead  
**Unique file:**

```text
docs/servicesos-beta/RESTORE_LAB_CALENDAR_AUDIT.md
```

**Classification:** HISTORICAL DOC AUDIT ONLY

No application code is hidden here.

---

## `v1-lab-codex-instructions-setup`

**Git state:** diverged — 5 commits ahead by ancestry

The branch contains:

```text
AGENTS.md
cloud-functions/AGENTS.md
servicesos-web/AGENTS.md
docs/codex/GLOBAL_AGENTS_TEMPLATE.md
docs/servicesos-beta/SERVICESOS_V1_CURRENT_STATE.md
```

However, the important instruction files were later reproduced in the current active V1 branch.

Verified identical blob SHAs include:

```text
AGENTS.md
cloud-functions/AGENTS.md
servicesos-web/AGENTS.md
```

The current V1 `SERVICESOS_V1_CURRENT_STATE.md` is newer than the lab version.

**Classification:** SUPERSEDED BY CURRENT CONTENT

Do not merge this old branch wholesale.

It is safe to treat as historical after final V1 release/tagging.

---

## `wife-beta-dashboard-null-safety`

**Git state:** diverged — 1 commit ahead by ancestry  
**Unique historical commit:** `Fix dashboard null-safe lead handling for wife beta`

The old commit added:

- Dashboard null-safety,
- related focused tests,
- CRM duplicate-key cleanup,
- wife-beta handoff documentation.

Current `8bce391` already contains the evolved `Dashboard null-safety` test suite and the protected behavior.

**Classification:** FUNCTIONALITY ALREADY REPRODUCED / EVOLVED IN V1

Do not cherry-pick this old commit.

---

## `hardening/field-photo-upload-quota`

**Git state:** diverged — 1 historical commit ahead  
**Historical commit:** `Enforce field photo upload quota`

The old branch introduced the server-owned 20-photo-per-booking quota, gateway reservation/finalization, rules and tests.

Current V1 already contains an evolved `fieldPhotoUploadGateway.js` with:

```text
FIELD_PHOTO_MAX_PER_BOOKING = 20
FIELD_PHOTO_MAX_SIZE_BYTES = 10 MB
reserved-slot control
server-authoritative actor checks
current upload-session/finalization behavior
newer employee/mobile support
```

The modern implementation has evolved beyond the old branch.

**Classification:** SUPERSEDED BY NEWER V1 IMPLEMENTATION

Do not cherry-pick the old branch.

Preserve current V1 implementation.

---

# 4. Diverged Branch Requiring Reconciliation

## `hardening/firebase-cost-guardrails`

**Git state:** diverged — 3 commits ahead, 30 behind  
**PR:** #9 — open draft against old `master`

Historical PR stack:

```text
180e5b6 — Enforce field photo upload quota
11a94c1 — Harden customer email sending / quotas / idempotency
36d8d8e — Add Firebase + GrowthAI cost guardrails
```

### Important conclusion

**Do not merge PR #9 wholesale into the current V1 branch.**

The branch started from the old `master` baseline and would conflict with/effectively roll back newer V1 work.

Instead, reconcile each protection against current V1 and port only what is still missing.

---

## 4.1 Field-photo quota portion

**Status in current V1:** ALREADY EVOLVED / PRESENT

Current V1 has a newer field-photo gateway with the same core quota and stronger/newer mobile upload behavior.

Action:

```text
Do not port old field-photo implementation.
Keep current V1 implementation.
```

---

## 4.2 Customer-email hardening portion

**Status in current V1:** IMPORTANT PROTECTIONS NOT PRESENT IN 8bce391

Current V1 still exports `sendCustomerEmail`, but the `8bce391` handler is materially simpler.

Current V1 handler currently includes basic:

- ID-token verification,
- optional tenant existence/mismatch check,
- email-type allowlist,
- server-controlled sender,
- direct Resend call.

The hardening branch adds materially stronger protections including:

- canonical user-profile + tenant/admin membership authorization,
- exact request-key validation,
- bounded subject/body sizes,
- bounded/validated PDF attachment rules,
- server-derived reply-to behavior,
- idempotency ledger,
- platform daily email quota,
- tenant daily email quota,
- actor hourly email quota,
- provider request timeout,
- safe retry/idempotency handling,
- fail-closed provider enable/disable behavior.

### Audit conclusion

This hardening should be **re-evaluated and ported as a current-V1 small slice** if `sendCustomerEmail` remains a customer-release capability.

Do not copy the old file blindly; adapt the protections to the final V1 client/server contract.

---

## 4.3 GrowthAI/provider cost guardrail portion

**Status in current V1:** PARTIALLY PRESENT, PARTIALLY MISSING

Current V1 already has:

- provider timeout handling,
- bounded output validation,
- server-side provider secrets/parameters,
- bounded newer owner/employee gateways in several places.

The old hardening branch additionally introduced a fail-closed provider switch:

```text
GROWTHAI_PROVIDER_ENABLED
```

and a customer-email switch:

```text
CUSTOMER_EMAIL_PROVIDER_ENABLED
```

The `8bce391` GrowthAI provider does not currently require the explicit provider-enabled gate before constructing the live provider.

### Audit conclusion

Before customer release, deliberately decide whether to restore the fail-closed provider-enable switches.

This is especially useful for:

- emergency cost containment,
- controlled provider smoke tests,
- keeping AI/email provider calls disabled until explicitly enabled in production.

---

## 4.4 Cloud Function instance bounds

The old hardening branch applied a common runtime policy:

```text
minInstances: 0
maxInstances: 3
```

Current V1 has already carried this pattern forward for many newer gateways, including owner onboarding, employee session/job/execution, field-photo, job-scope, add-on and extra-work gateways.

However, at `8bce391`, some older exported Functions still do not visibly share the same runtime bound, including portions of:

- GrowthAI endpoints,
- customer email,
- some older Stripe/Connect endpoints.

### Audit conclusion

Do not import the old index file.

Instead run a current-head **deployable Function inventory** and apply/justify explicit runtime bounds per currently exported function.

---

# 5. Open Pull Request State

The repository currently has one open pull request:

```text
PR #9
Add ServicesOS V1 pre-Blaze cost guardrails
head: hardening/firebase-cost-guardrails
base: master
state: draft/open
```

The earlier PRs checked during this audit (#6, #7, #8) are already merged, while their branch refs remain because automatic branch deletion is disabled.

Recommended PR #9 disposition:

```text
DO NOT MERGE AS-IS
↓
create current-V1 hardening slice(s)
↓
port only missing protections
↓
validate current V1
↓
close PR #9 as superseded once equivalent protections are resolved
```

---

# 6. Cleanup Recommendation

Do not perform mass branch deletion before the current customer-ready V1 is protected.

Preferred sequence:

```text
Finish ServicesOS V1
↓
customer-ready validation
↓
create final release/tag/reference
↓
reconcile PR #9 protections
↓
verify no branch contains still-needed code/docs
↓
branch cleanup
↓
optionally enable GitHub automatic head-branch deletion after merge
```

### First cleanup wave after V1 release/tag

The 43 fully absorbed historical branches can be deleted after the release reference is protected.

### Second cleanup wave

The following divergent-but-superseded/history branches can be deleted after optional documentation preservation:

```text
docs/servicesos-v1-v2-scope-2026-09-03
restore-lab
v1-lab-codex-instructions-setup
wife-beta-dashboard-null-safety
hardening/field-photo-upload-quota
```

### Hold

```text
hardening/firebase-cost-guardrails
```

Hold until missing protections are either ported, intentionally rejected with rationale, or proven irrelevant to the final V1 capability set.

---

# 7. Repository Hygiene Recommendation

Current repository setting:

```text
delete_branch_on_merge = false
```

After the V1 branch strategy is stabilized, consider enabling automatic deletion of merged head branches.

This would preserve small-slice development while preventing dozens of stale feature/fix branches from accumulating again.

Tags/releases should be used for durable release history instead of keeping every merged feature branch forever.

---

# 8. Final Audit Verdict

There is **not** a large hidden backlog of unmerged ServicesOS features across the 51 branches.

Most branches are historical artifacts of the controlled small-slice workflow and are already fully contained in the modern V1 line.

The only substantive branch-level issue discovered is:

> **PR #9 contains selected email/provider/cost hardening that should be reconciled against current V1 before the branch is closed or deleted.**

Everything else is either:

- active/current,
- fully absorbed,
- documentation-only,
- or functionally superseded by newer V1 code.

This audit should be re-run briefly against the final customer-ready V1 SHA before mass deletion, but no second full archaeology pass should be necessary unless the branch set materially changes.
