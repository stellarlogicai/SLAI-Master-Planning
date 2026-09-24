# SLAIOS Project Forecasting, Budgeting, and Decision-Focused Operations

Status: **Future planning only. Not an active ServicesOS build requirement.**

## Purpose

SLAIOS should learn from completed project work so SLAI can plan deadlines, staffing, engineering capacity, and project budgets with progressively better evidence.

The goal is not employee surveillance.

The goal is to answer company-level questions such as:

- How long does this class of work usually take?
- What is the likely delivery window?
- What is the current cost to complete?
- What is causing schedule or budget risk?
- Would another engineer, Forge worker, VM, reviewer, or QA resource actually shorten the project?
- Which decisions need human attention now?
- Which routine status updates can be generated automatically from system evidence?

Core rule:

> **Forecast projects and work systems. Do not turn delivery telemetry into hidden employee surveillance.**

---

## 1. Operating Model

SLAIOS should connect four capabilities:

```text
historical cycle-time learning
        +
live project state
        +
cost model
        +
dependency / capacity model
        ↓
delivery forecast
        +
cost-to-complete forecast
        +
decision-focused management brief
```

The system should become more accurate as SLAI completes more real work.

Early forecasts may rely heavily on human estimates and broad buffers.

Later forecasts should combine current estimates with actual historical evidence from similar work.

---

## 2. What SLAIOS Should Learn

For completed work, preserve useful project-level execution evidence such as:

- task/work type,
- product/repository,
- size or complexity class,
- risk class,
- planned effort range,
- actual cycle time,
- active work time where it can be derived legitimately from workflow events,
- blocked time,
- dependency wait time,
- review time,
- QA/validation time,
- rework caused by defects or changed requirements,
- failed validation/retry count,
- Forge/model/VM/CI usage,
- external-service dependencies,
- release outcome.

SLAIOS may group this evidence into classes such as:

```text
UI workflow change
API/gateway change
schema/contract change
payments/Stripe
auth/authorization
tenant/security
mobile workflow
migration
documentation
QA/regression
infrastructure
```

The taxonomy should emerge from real SLAI work and remain understandable to humans.

---

## 3. Historical Cycle-Time Learning

SLAIOS should use completed work to build historical distributions rather than treating one previous task as a universal rule.

Useful outputs may include:

```text
Task class: payment integration change
Completed comparable slices: 18
Median cycle time: 3.8 working days
Typical range: 2.4–6.1 working days
Review/QA share: 31%
Common risk: external provider behavior
Forecast confidence: moderate
```

Prefer medians, ranges, percentiles, and confidence levels over false precision.

The system should distinguish:

- engineering effort,
- elapsed delivery time,
- blocked/waiting time,
- review/QA time,
- rework,
- external dependency delay.

A four-hour code change that waits three days for a dependency is not the same kind of delay as a four-day implementation.

---

## 4. Estimation Model

For meaningful new work, the planning workflow may combine:

- optimistic estimate,
- likely estimate,
- pessimistic estimate,
- historical range for similar work,
- known dependencies,
- current team capacity,
- required review/QA,
- risk category,
- external-service uncertainty,
- scope confidence.

A PERT-style calculation may be used as one input:

```text
(O + 4L + P) / 6
```

but the system should not pretend that one formula captures software uncertainty.

SLAIOS should produce a delivery **window and confidence level**, not only a single date.

Example:

```text
Internal target:
October 8–10

External commitment window:
October 13–15

Confidence:
81%

Primary uncertainty:
Stripe subscription recovery edge cases
```

Management owns appropriate schedule buffers. Engineers should be encouraged to estimate accurately rather than padding every task out of fear of punishment.

---

## 5. Capacity and Bottleneck Awareness

SLAIOS should model more than raw developer count.

Potential capacity dimensions include:

- human implementation capacity,
- architecture/decision capacity,
- senior review capacity,
- security review capacity,
- QA capacity,
- Forge worker capacity,
- CI/build capacity,
- external-provider dependency capacity.

This allows the system to explain when additional compute or headcount will not materially improve the schedule.

Example:

```text
Implementation capacity: HIGH
Forge capacity: HIGH
QA capacity: MEDIUM
Security review capacity: LOW

Recommendation:
Another Forge VM is unlikely to shorten the release.
Security review is the current bottleneck.
```

This prevents SLAI from spending money on resources that do not address the constraint.

---

## 6. Project Cost Model

Project forecasts should include more than direct developer salary.

Depending on the project and available accounting data, cost may include:

```text
human engineering labor
+ payroll burden / benefits allocation
+ QA labor
+ architecture / security review
+ AI/model usage
+ Forge VM/cloud compute
+ CI/build/test infrastructure
+ third-party APIs/services
+ project-specific infrastructure
+ expected rework
+ approved contingency
= projected project cost
```

Sensitive compensation data should remain permission-restricted.

Most project dashboards should use authorized aggregate loaded-cost rates rather than exposing individual compensation.

---

## 7. Budget Hierarchy and Founder-Funded Controls

Early SLAI planning should assume growth may be slower than hoped and that Jamie may personally fund a meaningful share of engineering costs.

Budget control should therefore mature in layers:

~~~text
Company budget
   ↓
Product budget
   ↓
Project budget
   ↓
Milestone / release budget
   ↓
Task-slice budget
~~~

Founder Alpha / Forge Alpha should begin with the smallest useful controls:

- overall engineering-capacity visibility,
- included Codex/provider capacity where measurable,
- task usage forecasts,
- active capacity reservations,
- founder emergency reserve,
- hard paid-AI spending ceiling,
- paid fallback disabled unless explicitly approved,
- safe wait/reset behavior when capacity is exhausted.

Later, once real revenue and execution history exist, SLAIOS may allocate explicit product/project/milestone/task budgets.

The system should distinguish:

~~~text
operating/customer cost
≠ engineering/development cost
≠ transaction/payment cost
~~~

This avoids contaminating tenant unit-economics reporting with product-development spend.

Forge budget mechanics are specified in:

- `Forge/Forge_Capacity_and_Budget_Governance.md`

Core rule:

> **SLAIOS may forecast and recommend. Forge may optimize within an approved budget. Only an authorized human may increase a hard spending envelope.**

## 8. Cost-to-Complete

SLAIOS should continuously update the forecast as actual evidence replaces assumptions.

Example:

```text
Original forecast:       $30,000
Spent to date:           $17,200
Original remaining:      $12,800
Current remaining:       $15,600
Current total forecast:  $32,800

Variance:
+$2,800

Primary reason:
Payment-provider work added approximately 22 engineering hours.
```

Cost-to-complete should incorporate:

- completed work,
- remaining scope,
- newly discovered work,
- changed dependencies,
- current cycle-time evidence,
- current resource costs,
- known rework,
- schedule changes.

The forecast should preserve why it changed rather than silently rewriting the original estimate.

---

## 9. Scenario Planning

Authorized leaders should be able to ask controlled planning questions such as:

- What happens if we add one senior engineer?
- What happens if we add two Forge workers?
- What if Feature X moves to the next release?
- What if QA capacity doubles?
- What if the payment integration slips two weeks?
- What is the cheapest way to hit the current target window?
- What schedule change would reduce project cost?
- Which project is consuming the most engineering capacity?

SLAIOS should return assumptions and uncertainty with the scenario.

It should not present speculative outputs as guaranteed business outcomes.

---

## 10. Decision-Focused Meetings

SLAIOS should reduce mundane status-reporting meetings, not remove useful human collaboration.

Meetings remain valuable for:

- architecture,
- product/design discussion,
- difficult tradeoffs,
- retrospectives,
- mentorship,
- brainstorming,
- conflict resolution,
- team connection,
- consequential decisions.

Routine status transfer should increasingly come from the system.

Example pre-meeting brief:

```text
PROJECT: ServicesOS Release

Progress:               68%
Schedule status:        On track
Forecast confidence:    82%

Running:                7
Validating:             3
Human review:           2
Blocked:                1

Primary blocker:
Stripe subscription recovery decision

Projected remaining:
Human engineering:      46 hours
Forge execution:        112 worker-hours
QA:                     18 hours

Current cost forecast:  $8,420
Approved budget:        $9,000

Decision needed:
Choose subscription recovery behavior.

Everything else can continue without management input.
```

The desired meeting pattern is:

```text
SLAIOS supplies current state
        ↓
humans discuss exceptions / decisions
        ↓
decision is recorded
        ↓
work continues
```

Do not spend expensive team time verbally reconstructing information already present in the project system.

---

## 11. Schedule-Risk Communication

Missing an estimate should be treated as planning information.

Known schedule risk should be surfaced early.

Healthy pattern:

```text
risk detected
→ SLAIOS updates confidence / projected window
→ owner or engineer explains cause if needed
→ management chooses:
   scope change / dependency fix / resource change / date change
```

The system should distinguish unavoidable uncertainty from poor communication.

A missed forecast is not automatically an employee-performance failure.

Repeatedly hiding known blockers or failing to communicate material risk is a separate management issue and should remain a human-management judgment.

---

## 12. Project Intelligence Is Not Employee Surveillance

This system must not depend on invasive activity monitoring.

Do not use:

- keystroke counts,
- mouse movement,
- webcam monitoring,
- time-online scoring,
- chat-message volume,
- lines of code,
- commit count,
- prompt count,
- hidden productivity/personality scores.

The forecasting system should learn from work lifecycle evidence and project outcomes.

The unit of optimization is primarily:

> **the project/work system, not the person's minute-by-minute behavior.**

Individual attribution may exist where needed for ownership, contribution history, permissions, handoffs, or planning, but project telemetry must not quietly become an automated employee-ranking system.

Formal performance management remains a separate human process.

---

## 13. Separation From Contribution and Rewards

SLAIOS already plans a Contribution Ledger and optional recognition/reward systems.

Keep the domains distinct:

```text
PROJECT INTELLIGENCE
= forecasting, budget, capacity, deadlines, bottlenecks

CONTRIBUTION LEDGER
= verified work and team impact

REWARDS
= optional recognition, points, swag, food/lunch credits, prizes

PERFORMANCE MANAGEMENT
= separate human-led process
```

Historical cycle-time data should not become a hidden leaderboard.

Rewards may use verified contribution outcomes under the separate Contribution Ledger rules.

---

## 14. Forge Integration

Forge should automatically provide safe project evidence such as:

- start/end timestamps for bounded jobs,
- model used,
- worker/VM time,
- token/model cost,
- test/build duration,
- validation result,
- retries,
- branch/commit/PR,
- blocked state,
- review requirement.

This gives forecasting a reliable source for automated engineering work without asking developers to manually write routine status reports.

For multi-VM/multi-prompt objectives, SLAIOS should roll worker evidence up into the parent project/slice rather than treating each agent run as an independent business outcome.

---

## 15. Forecasting Maturity Path

### Stage A — Capture

Record clean task/project lifecycle evidence.

Do not attempt sophisticated prediction before the underlying data is trustworthy.

### Stage B — Baselines

Calculate historical medians, ranges, bottlenecks, and cost categories by work type.

### Stage C — Forecast

Combine human estimates + historical evidence + dependencies + capacity to produce delivery windows and project budgets.

### Stage D — Continuous Cost-to-Complete

Update schedule and cost forecasts as project evidence changes.

### Stage E — Scenario Planning

Model resource/scope/timing options for management.

### Stage F — Decision-Focused Operations

Use automatic briefings so recurring meetings spend time on decisions, collaboration, and exceptions rather than status recitation.

---

## 16. Success Definition

This capability succeeds when:

1. SLAI can estimate project delivery windows with transparent assumptions and confidence.
2. Forecast accuracy improves as real historical data accumulates.
3. Leaders can see current project cost and cost-to-complete without rebuilding spreadsheets manually.
4. SLAIOS can identify whether the real bottleneck is implementation, review, QA, security, dependencies, or compute.
5. Routine status-reporting overhead decreases.
6. Useful human meetings remain and become more decision-focused.
7. Forecast data does not become invasive employee surveillance.
8. Original estimates and later forecast changes remain auditable.
9. Forge/AI/VM costs are visible alongside human and infrastructure costs.
10. Humans remain responsible for budgets, staffing, deadlines, and consequential management decisions.

---

## Final Principle

> **Use evidence to make projects predictable, budgets visible, and meetings useful. Do not confuse measurement of the work system with surveillance of the people doing the work.**
