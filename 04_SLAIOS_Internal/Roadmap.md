# SLAIOS Roadmap

Status: **Future planning only. No calendar commitment.**

The roadmap is gated by operating need and the approved product sequence, not by an arbitrary date.

## Phase 0 — Activation Sequence

Current approved order:

~~~text
ServicesOS customer-ready V1
→ SLAI Platform Core extraction/revalidation
→ SLAI Web V1
→ ServicesOS V2
→ SLAIOS Founder Alpha
→ Forge Alpha
~~~

This sequence intentionally gives SLAI time to accumulate real product, repository, decision, cost, and engineering-coordination complexity before building its internal control plane.

Do not pull implementation attention from ServicesOS merely because SLAIOS planning is detailed.

## Phase 1 — Founder Alpha / Founder Kernel

Build the smallest system Jamie can use every day.

Core scope:

- product priority and current state,
- Master Planning retrieval,
- approved decision history,
- repository/branch state,
- architecture/contracts,
- permission-aware context packs,
- objective/task state,
- model/risk routing,
- engineering approvals,
- founder business-health analytics,
- new/active business and user metrics,
- direct and fully allocated cost-per-business signals,
- engineering-capacity visibility,
- founder-funded spend controls,
- desktop-first founder client connected to the persistent control plane,
- future-safe organization/tenant ownership in core schemas,
- audit/provenance.

Primary surfaces:

~~~text
TODAY
PRODUCTS
ENGINEERING
DECISIONS
MEMORY
~~~

Canonical specifications:

- `Founder_Alpha/SLAIOS_Founder_Alpha_Spec.md`
- `Founder_Alpha/Founder_Analytics_and_Unit_Economics.md`
- `SLAIOS_Desktop_and_Workstation_Architecture.md`

Explicitly defer full HR/payroll, rewards, full company chat replacement, full Product Studio/Fleet analytics, external SLAIOS, and large worker farms.

## Phase 2 — Forge Alpha

Prove the current Jamie + ChatGPT + Codex engineering loop can be automated safely.

Start narrow:

- one approved repository,
- one isolated disposable worker,
- one bounded task slice,
- pinned start commit,
- explicit permission envelope,
- deterministic write boundaries,
- approved validation profile,
- programmatic Codex/engineering-agent provider boundary,
- task usage forecasting,
- capacity reservation,
- paid API fallback disabled by default in founder-funded mode,
- evidence bundle,
- human approval before merge/release,
- preferred founder topology of high-trust workstation + separate lower-trust Forge execution host.

Acceptance must include intentional collision, out-of-scope-write, interruption/recovery, and capacity-exhaustion tests.

Canonical specifications:

- `Forge/Forge_Alpha_Spec.md`
- `Forge/Forge_Capacity_and_Budget_Governance.md`

## Phase 3 — Founder Engineering Loop

Connect the whole loop:

~~~text
Jamie states outcome
→ SLAIOS resolves product/repo/priority/context
→ SLAIDIL classifies/routes within deterministic policy
→ task slice proposed
→ Jamie approves
→ Forge executes
→ tests/build/validation/evidence
→ Jamie reviews
→ decision/result recorded
~~~

Goal: materially reduce founder setup/coordination while retaining human engineering judgment. The founder workstation remains the high-trust control surface; the Forge host remains the lower-trust execution surface.

## Phase 4 — Small Worker Pool

Only after Alpha proves safe and useful:

- 2–3 isolated workers,
- dependency-aware scheduler,
- deterministic resource leases,
- file/schema/contract collision controls,
- semantic-collision detection,
- capacity reservations across concurrent jobs,
- model/cost routing,
- consolidated objective-level evidence,
- employee access to isolated worker sessions through SLAIOS rather than general host access.

Parallelize independent work. Serialize shared truth.

Do not add workers simply because hardware allows it.

## Phase 5 — QA Integration

Add stronger engineering QA when work volume justifies it:

- automated QA workers,
- browser/device checks where appropriate,
- release-candidate validation,
- human exploratory QA workflow,
- defect/repro packages,
- fix verification,
- high-risk Sol review,
- consolidated release evidence.

Human QA should test whether normal users can accomplish intended outcomes without builder knowledge.

## Phase 6 — Budgeting and Operational Intelligence Maturity

Expand from Alpha capacity controls into evidence-backed budgets:

~~~text
Company budget
→ Product budget
→ Project budget
→ Milestone / release budget
→ Task-slice budget
~~~

Add:

- historical cycle-time distributions,
- task usage/cost forecasts,
- planned vs actual,
- cost-to-complete,
- budget variance reasons,
- revenue-gated engineering capacity growth,
- bottleneck analysis across implementation/review/QA/security/compute,
- scenario planning.

Forecast work systems, not people.

## Phase 7 — Broader SLAIOS Company Operations

Hiring remains bottleneck-driven. If Jamie + AI + SLAIOS/Forge infrastructure can safely absorb the workload, SLAI may defer headcount and use capital first on reusable infrastructure. Hire earlier when customer reliability, QA, support/onboarding, security, production complexity, sales demand, or technical review proves a genuine human constraint.

Only after the founder/engineering core proves useful:

- employee workspaces,
- internal communications,
- remote onboarding/offboarding,
- PTO/leave,
- training/certifications,
- payroll-provider coordination,
- Contribution Ledger,
- rewards/recognition,
- richer Product Fleet,
- Product Studio,
- broader departmental intelligence.

Rewards and project telemetry remain separate from formal human performance management.

## Phase 8 — Internal Operating Maturity

As internal maturity grows, SLAIOS may also add:

- Product Telemetry for build/release/runtime monitoring,
- Product Intelligence for users/revenue/cost/margin correlation,
- stronger internal commercial/unit-economics instrumentation,
- private/dedicated AI experiments only when cost and security justify them,
- broader specialist-module entitlements such as GrowthAI integration.

These remain internal-proof capabilities before any external packaging.

See:

- `Product_Telemetry_and_Intelligence_Architecture.md`
- `Private_AI_and_Tenant_Intelligence_Architecture.md`
- `SLAIOS_Commercial_Pricing_and_Expansion_Model.md`



SLAI uses SLAIOS across founder operations, engineering, QA, company memory, decisions, projects, people operations, product fleet, budgets, and handoffs.

This phase should produce evidence about which modules genuinely create value and which should remain internal-only.

## Phase 9 — Reusable Platform / External Pilot

Only after sustained internal proof.

The internal system should already have preserved future SaaS-safe foundations such as organization/tenant identity, permissions, data authority, module boundaries, audit, provider abstraction, and usage/budget metering. Phase 9 adds external-product complexity rather than rebuilding those foundations.

Then:

- separate SLAI-specific configuration from reusable platform capabilities,
- formalize multi-tenant architecture where justified,
- module enablement,
- configurable roles/terminology,
- branding/theme controls,
- customer data isolation,
- provider abstraction,
- enterprise governance,
- organization/user-band pricing experiments,
- Forge access + pooled capacity experiments,
- specialist add-on entitlements,
- optional Product Intelligence packaging,
- optional Private AI/dedicated deployment pilots,
- optional external/white-label pilot.

No external productization is assumed merely because the architecture can support it.

## Scaling Principle

> **Build simple first. Complexity is earned.**

## Financial Principle

> **SLAIOS and Forge should remain survivable if customer growth is slower than expected. Execution capacity grows when the business earns the ability to pay for it.**

The system should make safe waiting, slicing, and budget control normal behaviors rather than treating unlimited AI/compute spend as the default.