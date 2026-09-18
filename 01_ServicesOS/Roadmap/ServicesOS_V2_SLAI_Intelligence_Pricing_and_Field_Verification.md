# ServicesOS V2 — SLAI Intelligence Pricing & Field Verification

**Status:** Future V2 planning / not an active V1 build  
**Created:** 2026-09-18  
**Product:** ServicesOS  
**Purpose:** Capture the pricing, arrival-verification, and mid-job repricing architecture discovered while reviewing the Aunt B website intake and the current ServicesOS implementation.  
**Priority rule:** This document does not authorize V2 implementation before ServicesOS V1 is launched/stable and the current SLAI Web sequence has been satisfied or Jamie explicitly changes priority.

---

## 1. Product Finding

ServicesOS already contains most of the primitives needed for a much lower-work quoting model for service-business owners.

The important V2 opportunity is not to rebuild estimating from scratch. It is to connect the existing pricing, job-scope, field, approval, and extra-work foundations into a staged pricing workflow where:

> **The owner defines the business pricing policy and guardrails. SLAI Intelligence calculates the per-job price within those approved rules. Employees verify real-world conditions. Customers approve the resulting scope/price. Exceptions outside policy return to the owner.**

This reduces repetitive admin work while preserving explicit human responsibility for the business policy, exceptions, and customer relationship.

---

## 2. Why This Matters

A traditional cleaning-business workflow often requires the owner to:

- review every inquiry,
- manually estimate the job,
- compensate for first-clean uncertainty,
- call or message the customer,
- re-price when the property differs from the description,
- coordinate employee questions,
- document extra work,
- and manually reconcile the final scope.

ServicesOS V2 should reduce that repetitive owner workload.

Preferred operating model:

```text
Owner configures pricing policy once
        ↓
Customer provides job facts
        ↓
SLAI Intelligence produces an initial price range
        ↓
Employee verifies actual condition on arrival
        ↓
SLAI Intelligence confirms the job price
        ↓
Customer accepts
        ↓
Work begins
        ↓
Only real exceptions require additional intervention
```

The owner should not have to price every ordinary job manually.

---

## 3. Existing ServicesOS Foundation Found in the Current System

The 2026-09-18 review found that the majority of the required primitives already exist.

### 3.1 Pricing foundation

Current ServicesOS already includes:

- low / suggested / high estimate values,
- bedroom/bathroom anchor pricing,
- service multipliers,
- condition multipliers,
- clutter multipliers,
- pet adjustments,
- add-on pricing,
- travel adjustments,
- minimum job pricing,
- recurring-service discounts,
- "after initial reset" recurring-price concepts,
- manual-review triggers,
- line items / internal notes / warnings,
- estimate persistence into the lead/booking flow.

Relevant current implementation includes:

```text
servicesos-web/src/core/estimates/pricingProfiles.js
servicesos-web/src/core/estimates/calculateEstimate.js
servicesos-web/src/lib/estimateEngine.js
```

The existing Aunt B pricing profile already models:

- standard cleaning,
- deep / initial reset,
- move-in / move-out,
- condition severity,
- clutter,
- pet hair,
- add-ons,
- travel,
- recurring discounts,
- severe-condition manual review.

### 3.2 Job-scope control

Current ServicesOS already has:

- canonical job-scope snapshots,
- scope versioning,
- scope hashes,
- customer approval,
- re-approval when approved scope changes,
- agreed price in the approved scope,
- customer-facing notice that out-of-scope work may change price/time and require approval.

Relevant implementation includes:

```text
cloud-functions/jobScopeControl.js
cloud-functions/jobScopeGateway.js
servicesos-web/src/components/JobScopeAgreement.jsx
```

### 3.3 Employee extra-work workflow

The active V1 branch already contains:

- employee extra-work requests,
- canonical add-on selection,
- employee notes/context,
- owner review,
- same-visit / additional-time / future-visit / decline decisions,
- custom price/duration support for custom requests,
- approval-ready state,
- planned customer approval before authoritative scope refresh.

Relevant implementation includes:

```text
cloud-functions/extraWorkGateway.js
servicesos-web/src/components/ExtraWorkReview.jsx
employee-app/src/components/ExtraWorkRequestSection.jsx
```

### 3.4 Property-condition concept already exists

The repository also contains an older/reference:

```text
servicesos-web/src/components/PropertyConditionChecklist.jsx
```

It already models:

- before-clean property-condition review,
- room/area condition,
- notes,
- photos,
- customer presence,
- signature,
- saved condition report.

This should be treated as reference material, not automatically restored into production. The current Employee App and server-owned authorization paths should own any V2 arrival-verification implementation.

### 3.5 Current AI-estimate boundary

Current GrowthAI/SLAI Assistant estimate assistance is advisory.

The current implementation intentionally keeps the deterministic ServicesOS estimate as authoritative and marks AI estimate recommendations as unapproved/human-reviewed.

That is a valid V1 boundary, but it does **not** match the intended V2 pricing architecture described in this document.


### 3.6 Mandatory pre-implementation audit gate

The current codebase contains multiple generations of estimating, pricing, AI-assistance, property-condition, scope-control, and extra-work code.

Before any V2 pricing-intelligence implementation begins, audit the relevant V1/current/legacy paths and classify each component as:

- **Canonical — reuse directly**
- **Canonical but needs hardening/refactor**
- **Reference only**
- **Legacy/deprecated — do not reuse**
- **Conflicts with current product direction**

At minimum, the audit must trace:

```text
intake facts
→ estimate calculation
→ saved lead/request
→ booking conversion
→ agreed price
→ approved scope
→ employee JobPacket
→ arrival/condition evidence
→ extra-work request
→ owner/exception review
→ customer approval
→ authoritative updated scope/price
→ payment
```

For each stage, record:

- source of truth,
- allowed writer,
- allowed reader,
- server/client authority,
- tenant boundary,
- versioning/idempotency behavior,
- audit evidence,
- duplicate/legacy fields,
- migration risk.

The audit must lock these decisions before implementation:

1. canonical pricing engine/service,
2. canonical tenant pricing-policy schema,
3. canonical authoritative job-price field,
4. canonical scope version/approval model,
5. canonical employee field-verification contract,
6. canonical customer-approval contract,
7. canonical override/exception path,
8. legacy code to retire or isolate,
9. V1 contracts V2 may extend but must not break.

**No owner pricing UI or SLAI-authoritative pricing work should be built against an unaudited engine.**


---

## 4. V1 / V2 Boundary

### Keep in V1

V1 should finish only the already-promised safe workflow:

```text
Employee requests extra work
        ↓
Owner reviews
        ↓
Customer approves
        ↓
Authoritative scope/time/price refreshes
        ↓
Employee receives the updated JobPacket
```

V1 should keep:

- deterministic ServicesOS pricing,
- human approval boundaries,
- current estimate ranges,
- current pricing profiles,
- current extra-work lifecycle,
- customer scope approval,
- no new public website-to-ServicesOS pricing dependency.

### Move to V2

The following belong in V2:

- public website intake into ServicesOS,
- initial customer-facing SLAI price range,
- canonical employee arrival verification,
- first-clean / initial-reset pricing automation,
- SLAI Intelligence as the authoritative per-job pricing engine within owner-approved policy,
- verified-condition → confirmed-price transition,
- mid-clean SLAI repricing,
- estimate-vs-verified-vs-actual learning,
- pricing confidence/explanation,
- reusable pricing intelligence across additional verticals.

This prevents pricing intelligence from expanding the V1 finish line.

---

## 5. V2 Target Workflow

### Stage 1 — Public intake

```text
Customer website
        ↓
Public ServicesOS intake gateway
        ↓
Validated tenant-bound request
        ↓
Canonical lead / quote-request record
```

The public website must never write directly to private Firestore collections or carry a privileged ServicesOS credential.

The server must enforce:

- tenant resolution,
- exact payload shape,
- bounded strings and IDs,
- rate limits / abuse controls,
- idempotency,
- allowed service IDs,
- source metadata,
- safe error responses.

### Stage 2 — Preliminary range

```text
Customer-provided facts
+ business pricing policy
+ pricing history where allowed
        ↓
SLAI Intelligence
        ↓
Preliminary range
```

Example:

```text
Estimated first-clean range:
$180–$240
```

This range communicates uncertainty rather than pretending the website knows the final property condition.

### Stage 3 — Arrival verification

Before cleaning begins, the assigned employee verifies the facts that materially affect price.

Possible fields:

- service type,
- bedrooms/bathrooms or relevant size measure,
- number of levels/stairs,
- actual condition,
- clutter,
- pet hair / pet-related complexity,
- heavy buildup,
- undisclosed areas,
- requested add-ons,
- access difficulty,
- other material scope differences.

The employee's responsibility is:

> **Observe and report reality accurately.**

The employee should not manually decide the price.

Photos/notes may be required when the verified condition materially differs from the intake.

### Stage 4 — Confirmed price

```text
Verified arrival facts
+ approved business pricing policy
+ canonical job scope
        ↓
SLAI Intelligence
        ↓
Confirmed job price
```

Example:

```text
Preliminary range: $180–$240
Verified price:    $218
```

The customer then accepts or declines the verified scope/price before the ordinary cleaning proceeds.

### Stage 5 — Mid-clean exception

If a materially different condition or new scope is discovered after work begins:

```text
Employee identifies exception
        ↓
Extra-work / condition-change request
        ↓
Evidence + changed scope
        ↓
SLAI Intelligence recalculates
        ↓
If within policy → revised price
If outside policy → owner exception review
        ↓
Customer approval
        ↓
Authoritative scope + price update
```

This should extend the current extra-work/job-scope system rather than creating a parallel repricing subsystem.

---

## 6. Pricing Authority Model

V2 should distinguish **business pricing policy** from **job-level pricing execution**.

### Owner controls

The owner configures and remains responsible for:

- offered services,
- minimum job price,
- first-clean / initial-reset policy,
- recurring-service policy,
- add-on catalog,
- travel rules,
- labor/margin targets where used,
- pricing floors/ceilings,
- manual-review triggers,
- allowed discount/adjustment ranges,
- exception policy,
- whether an owner override is allowed and how it is audited.

### SLAI Intelligence controls

Within the approved pricing contract, SLAI Intelligence should:

- calculate the initial price range,
- calculate the confirmed arrival price,
- calculate approved-scope repricing,
- explain major price drivers,
- identify confidence/uncertainty,
- flag requests that exceed approved policy.

### Employee controls

Employees:

- verify condition,
- report scope differences,
- capture required evidence,
- request extra work,
- do not directly set the customer's price.

### Customer controls

Customers:

- provide intake information,
- review the range,
- approve the confirmed scope/price,
- approve material mid-job changes,
- may decline revised work.

### Owner exception path

Owner review should be required when:

- SLAI Intelligence cannot price within configured bounds,
- a manual-review trigger fires,
- required facts are missing,
- the request is outside the catalog/policy,
- risk/safety/legal conditions require human judgment,
- an override is requested.

This preserves the SLAI philosophy:

> **AI handles repetitive pricing execution; humans define policy and remain responsible for exceptions and important business decisions.**

---


## 6A. Owner Pricing Setup / Business-Specific Pricing Configuration

The current Aunt B pricing profile should be treated as a **prototype for a tenant-configurable pricing-policy model**, not as the permanent multi-tenant implementation.

After the pricing audit locks one canonical engine and schema, ServicesOS V2 should provide an owner-facing pricing setup surface that turns business rules into understandable controls instead of exposing raw formulas.

### Owner configuration categories

Depending on the vertical, the owner may configure:

- minimum job price,
- base prices / anchor prices,
- service-type pricing,
- first-time / initial-reset pricing,
- recurring-service pricing,
- condition adjustments,
- clutter/complexity adjustments,
- pet or job-specific complexity adjustments,
- add-on price and expected duration,
- travel zones / mileage adjustments,
- labor or margin targets where used,
- pricing floors/ceilings,
- manual-review triggers,
- exception boundaries,
- allowed discount/adjustment rules.

### Pricing adjustment modes

Where useful, a pricing rule may support:

- fixed dollar adjustment,
- percentage adjustment,
- multiplier,
- separate base/anchor price,
- manual-review-only.

The owner should not need to edit code or understand implementation formulas.

Example:

```text
FIRST-TIME CLEANING

How do you price the first visit?

○ Same as normal cleaning
● Add a percentage
○ Add a fixed amount
○ Use a separate base price

First-clean increase: [ 20 ] %
Minimum first-clean price: [ $175 ]
```

Example recurring configuration:

```text
RECURRING SERVICE

Weekly:      [ -12% ]
Biweekly:    [  -8% ]
Monthly:     [  -3% ]

Apply recurring pricing:
● After first completed cleaning
○ Immediately
```

### Live pricing simulator

Pricing setup should include a safe preview/simulator using the same canonical pricing service that production pricing uses.

Example:

```text
TEST YOUR PRICING

3 bedrooms
2 bathrooms
Standard clean
First visit
Needs attention
2 pets
Inside oven

Estimated range: $225–$270
Suggested / modeled price: $248
Estimated time: 4.5 hours
```

The simulator must not maintain a separate formula from production.

### Configuration guardrails

ServicesOS should detect contradictory or incomplete rules before activation, for example:

- recurring pricing falls below the configured minimum,
- a heavier condition produces a lower price than normal condition,
- a service has no usable pricing rule,
- a range is inverted,
- a required manual-review trigger is missing,
- an add-on has price but no usable scope/duration information where duration is required.

### SLAI setup assistance

SLAI Intelligence may help the owner understand or test the configured policy, for example:

> "Based on these settings, a typical 3-bed / 2-bath first clean would fall in this range. Does that match how you normally price the work?"

SLAI may explain consequences and identify inconsistencies, but it must not silently replace the owner's approved pricing policy.

### Versioning and activation

Pricing configuration should be versioned.

Preferred lifecycle:

```text
Draft pricing policy
        ↓
Validate / simulate
        ↓
Owner activates
        ↓
New jobs use new version
        ↓
Historical jobs retain prior policy/version references
```

Do not retroactively rewrite historical quotes or approved jobs when the owner changes future pricing.

### Multi-vertical rule

The owner pricing UI should be generated from the canonical pricing-policy schema plus vertical-specific configuration, rather than hardcoding one cleaning-only settings page.

The vertical module should define:

- which pricing inputs are relevant,
- labels/help text,
- allowed adjustment types,
- required fields,
- manual-review triggers,
- safe defaults where explicitly approved.

The shared ServicesOS pricing system should remain the authority for calculation and audit.


## 7. First-Time Clean and Recurring Pricing

The initial-clean concept should be explicit in V2.

A service business may configure:

- first visit as an initial reset/deep-clean price,
- a first-clean premium,
- a separate first-clean pricing profile,
- or no first-clean adjustment.

After the property has a completed verified service history, recurring pricing may use:

- frequency,
- prior verified condition,
- actual labor history,
- known add-ons,
- property-specific patterns,
- owner-approved recurring discounts.

The system should not force a single cleaning-business pricing model.

---

## 8. Customer Agreement / Contract Alignment

Customer-facing terms should align with the software behavior.

The agreement should explain that:

- preliminary pricing is based on customer-provided information,
- the condition/scope may be verified on arrival,
- the confirmed price may differ within the disclosed estimate/rules,
- materially undisclosed or unexpected conditions may require a revised scope/price,
- material changes are presented before additional work outside the approved scope proceeds,
- the customer may accept or decline the revised work,
- documentation may include notes/photos where appropriate.

Final legal language should be owner-approved and, where needed, professionally reviewed.

The software should not rely on a vague "price subject to change" clause while allowing silent charges.

---

## 9. Data Feedback Loop

V2 should preserve three different pricing/effort states:

```text
Initial estimate
        ↓
Verified arrival condition / confirmed price
        ↓
Actual completed-job effort/outcome
```

Useful comparison data may include:

- initial low/suggested/high range,
- verified condition,
- confirmed price,
- estimated duration,
- actual duration,
- add-ons,
- mid-job adjustments,
- completion result,
- owner override if any,
- reason for override,
- customer acceptance/decline.

This can improve future pricing intelligence without rewriting historical job truth.

### Learning rule

Customer-specific learned context should remain tenant/customer scoped.

Do not train one customer's private operational data into another customer's pricing model by default.

---

## 10. Admin-Side Value

This V2 feature is specifically intended to reduce owner/admin workload.

The successful end state is **not**:

> Owner receives better AI advice and still has to manually price every job.

The successful end state is:

```text
Routine job
→ system gathers facts
→ SLAI prices within owner policy
→ customer accepts
→ owner only sees exceptions / meaningful review items
```

Expected owner/admin benefits:

- fewer manual quotes,
- fewer repetitive pricing decisions,
- fewer employee phone calls about price,
- consistent application of business pricing policy,
- better documentation when condition differs,
- easier recurring pricing,
- fewer surprise-charge disputes,
- more time spent on business decisions instead of routine admin.

---

## 11. Cross-Vertical Reuse

The architecture should be reusable beyond Cleaning.

Examples:

### Lawn Care

- lot/yard size,
- grass height/condition,
- slope/terrain,
- obstacles,
- service frequency,
- overgrowth,
- add-ons.

### Pressure Washing

- surface area,
- material,
- buildup,
- height/access,
- chemical requirements,
- add-ons.

### Mobile Detailing

- vehicle type,
- condition,
- interior severity,
- pet hair,
- stain/odor complexity,
- add-ons.

### Handyman / Home Services

More jobs will require explicit manual-review/exception handling, but the same pattern can still apply:

```text
Intake range
→ field verification
→ confirmed scope/price
→ approved changes
```

Vertical modules should define the facts and pricing policy inputs rather than duplicating the pricing engine.

---

## 12. Security and Audit Requirements

Pricing authority must be server-enforced.

Required protections:

- never trust client-supplied final price,
- tenant-bound pricing profile/policy,
- authenticated employee verification,
- immutable or versioned source facts,
- idempotent price calculation/confirmation action,
- pricing-policy version stored with the decision,
- source job/scope version stored with the decision,
- audit actor/source,
- customer approval evidence,
- override reason/audit,
- cross-tenant denial tests,
- replay-safe update behavior,
- no hidden employee price editing.

Preferred decision record should make it possible to reconstruct:

```text
What facts were known?
Which pricing-policy version applied?
What did SLAI Intelligence calculate?
Why did it calculate that result?
Did an exception trigger?
Who approved/overrode anything?
What did the customer accept?
```

---

## 13. V2 Acceptance Criteria

The pricing/verification feature family should not be considered complete until:

- a public tenant-bound request can safely enter ServicesOS,
- ServicesOS can produce an initial range without owner manual calculation,
- an employee can verify arrival condition from the canonical Employee App,
- the employee cannot directly set final price,
- SLAI Intelligence can return a confirmed price within owner-approved policy,
- manual-review triggers route correctly,
- the customer can approve or decline the confirmed scope/price,
- a mid-job condition/scope change can reuse the extra-work flow,
- repricing cannot silently bypass customer approval,
- approved changes refresh authoritative job scope/price/time,
- historical scope/pricing versions remain auditable,
- owner overrides, if supported, require explicit reason/audit,
- actual job outcome can be compared with initial and verified estimates,
- V1 tenants not using the V2 pricing feature continue working without regression.

---

## 14. Suggested V2 Slice Order

This is future planning, not an active coding queue.

```text
1. Freeze V1 pricing/scope contracts
        ↓
2. Audit all pricing/scope/approval implementations and lock canonical paths
        ↓
3. Define tenant pricing-policy schema + decision record
        ↓
4. Build owner pricing setup + live simulator against the canonical engine
        ↓
5. Build secure public website intake gateway
        ↓
6. Connect preliminary range generation
        ↓
7. Add canonical Employee App arrival verification
        ↓
8. Add SLAI confirmed-price action
        ↓
9. Connect customer approval to confirmed price/scope
        ↓
10. Extend extra-work flow to SLAI repricing
        ↓
11. Add estimate-vs-verified-vs-actual analytics
        ↓
12. Validate with Cleaning before generalizing to other verticals
```

Each slice should have explicit acceptance criteria, tests, tenant-isolation validation, and rollback behavior.

---

## 15. Non-Goals

This plan does **not** authorize:

- changing V1 pricing authority before the current release is stable,
- removing owner-configured pricing policy,
- allowing employees to improvise prices,
- silent price changes,
- unbounded AI pricing outside business policy,
- auto-charging a changed amount without customer approval/payment rules,
- cross-tenant learning from private customer data by default,
- replacing safety/legal judgment with pricing automation,
- rebuilding the existing scope/extra-work foundations in parallel,
- delaying ServicesOS V1 or SLAI Web V1 to implement this feature family now.

---

## 16. Planning Decision

The 2026-09-18 discovery should be carried forward as:

> **V1 proves deterministic pricing, scope approval, and extra-work control. V2 connects those foundations into an owner-configured, SLAI Intelligence-operated pricing workflow that moves from preliminary range → field-verified price → approved mid-job repricing, with owner intervention reserved for exceptions.**

This is a major admin-work reduction opportunity and should be treated as a first-class ServicesOS V2 capability rather than a separate standalone product.
