# SLAIOS Product Telemetry and Intelligence Architecture

**Status:** Future architecture planning only  
**Priority guardrail:** ServicesOS remains the active build. This capability is preserved for future SLAIOS/Product Fleet work.

## Purpose

SLAIOS should eventually understand not only whether a software product builds and deploys successfully, but also whether the product is healthy as a business.

Two related but distinct capabilities are required:

1. **Product Telemetry** — technical/build/release/runtime evidence.
2. **Product Intelligence** — users, customers, revenue, cost, margin, adoption, and business outcomes.

SLAIOS correlates both without becoming the source of truth for every underlying system.

Core principle:

> **Observe and correlate authoritative signals. Do not silently replace the systems that own those signals.**

## Architecture

~~~text
Customer / SLAI application
├─ lightweight SLAIOS SDK
├─ CI/release integration
└─ approved custom events
        │
        ├───────────────┐
        ↓               ↓
Product Telemetry     Product Usage Events
        │               │
        └───────┬───────┘
                ↓
        SLAIOS Product Fleet
                ↑
                │
Connectors / authoritative providers
├─ billing / subscriptions
├─ cloud infrastructure
├─ AI/model providers
├─ repositories / CI
├─ observability
├─ support systems
└─ accounting later where justified
                ↓
       Product Intelligence
                ↓
        human decision support
~~~

## Product Telemetry

Technical telemetry may include:

- build status,
- test results,
- lint/security checks,
- release candidate state,
- deployment events,
- version/release identifiers,
- uptime,
- latency/performance,
- errors,
- provider failures,
- runtime incidents,
- rollback events,
- release health,
- environment status,
- Forge jobs associated with a release,
- validation/evidence references.

Example:

~~~text
PRODUCT: Customer API

Production version        4.8.2
Last deployment           3h ago
Build                     PASS
Regression tests          1,284 / 1,284
Runtime health            normal
Open incidents            0
Release candidate         4.9.0
Forge work                2 jobs running
Needs human attention     none
~~~

## Product Intelligence

Business/product telemetry may include:

### Users and customers

- registered users,
- active users now,
- DAU / WAU / MAU,
- active organizations/customers,
- new users,
- new organizations,
- activation,
- retention,
- churn,
- plan distribution,
- feature adoption,
- workflow usage,
- heavy/light usage distribution.

### Revenue

- MRR,
- ARR,
- new MRR,
- expansion MRR,
- contraction,
- churned MRR,
- ARPU,
- revenue per organization,
- revenue per active user,
- payment failures,
- refunds.

### Cost

- cloud compute,
- database,
- storage,
- bandwidth,
- AI/model usage,
- SMS/email where applicable,
- third-party APIs,
- payment processing,
- CI/runtime services,
- support allocation where defensible.

### Unit economics

- gross-margin estimate,
- direct cost per customer,
- fully allocated cost per customer where defined,
- cost per active user,
- cost per transaction/workflow,
- cost per AI action,
- highest-cost customer,
- margin by customer/plan/product,
- revenue-to-cost ratio.

## SDK Boundary

A future lightweight SDK may expose modular instrumentation such as:

~~~text
@slaial/product-sdk

usage
release
runtime
errors
cost-attribution
custom-events
~~~

Exact package names are not committed.

The SDK should be optional and modular. A company should be able to enable only approved categories.

Example:

~~~text
Build / release events      ON
Runtime health              ON
Feature usage               ON
Cost attribution            ON
Sensitive payload capture   OFF
Customer-content capture    OFF
~~~

## Connector Boundary

Do not force the SDK to re-report facts that authoritative providers already own.

Preferred source examples:

~~~text
Subscription revenue   → billing provider
Cloud cost             → AWS / Azure / GCP or equivalent
AI usage/cost          → model/provider source
Repository/release     → GitHub/GitLab/CI source
Application usage      → customer product SDK/events
Accounting records     → accounting provider
Support activity       → support provider
~~~

SLAIOS may normalize and correlate these sources while preserving provenance.

## Source-of-Truth Rule

SLAIOS is an intelligence and operating layer.

It should not become the accounting ledger, billing ledger, product database, or cloud billing source merely because it can read and analyze those systems.

Every important metric should preserve:

- authoritative source,
- event/metric definition,
- organization/product scope,
- time window,
- version where relevant,
- ingestion timestamp,
- confidence/quality state,
- calculation method where derived.

## Correlating Engineering With Business Outcomes

A major Product Fleet advantage is connecting technical change to observed outcome.

Example:

~~~text
feature implemented
→ validation passes
→ release deployed
→ runtime remains healthy
→ feature usage increases
→ AI/provider cost changes
→ revenue/retention/support signals change
→ SLAIOS presents evidence
→ human decides what it means
~~~

Illustrative output:

~~~text
Feature: AI Report Builder

Usage                    +44%
AI cost                  +26%
Cost per action          +3%
Revenue among adopters   +18%
Support volume           unchanged

SLAIOS:
Higher spend appears associated with profitable adoption.
No intervention currently recommended.
~~~

Correlation is not causation. SLAIOS should label associations, assumptions, and uncertainty rather than claiming a product change caused a business outcome without adequate evidence.

## Customer-Level Economics

Where permissions and source data allow, SLAIOS may identify customer-level cost exceptions.

Example:

~~~text
Customer X

Revenue             $299
Direct cost         $241
Gross margin         19%

Primary drivers
- unusually high AI usage
- high storage volume
- repeated export jobs

Possible decisions
- review plan limits
- investigate inefficient workflow
- propose higher-usage tier
- accept lower margin intentionally
~~~

The system recommends; authorized humans decide pricing, limits, or customer treatment.

## Product Fleet Example

~~~text
SLAI PRODUCT FLEET

ServicesOS
├─ customers
├─ active users
├─ MRR
├─ SMS cost
├─ AI cost
├─ payment fees
├─ infrastructure
├─ release/runtime health
└─ margin

SLAI Web
├─ customers
├─ subscription revenue
├─ hosting cost
├─ deployments
└─ margin

GrowthAI
├─ subscribers
├─ model consumption
├─ cost/customer
└─ margin

SLAIOS
├─ organizations/users
├─ platform cost
├─ AI usage
└─ margin

Forge
├─ enabled engineers
├─ execution usage
├─ AI/model cost
├─ worker compute
├─ accepted outcomes
└─ margin
~~~

This internal dogfooding should precede external commercialization of Product Intelligence.

## Privacy and Data-Minimization

Default toward operational metadata rather than payload capture.

Do not collect merely because technically possible:

- source code bodies,
- private customer messages,
- arbitrary request/response payloads,
- secrets/tokens,
- personal data unrelated to the metric,
- production database contents.

Where a metric can be represented as:

~~~text
featureUsed = "estimate_assistant"
tenantId = opaque authorized id
timestamp = ...
count = 1
~~~

do not capture the underlying customer content unless a separate authorized workflow requires it.

## Tenant Isolation

All telemetry must remain organization-scoped.

The ingestion layer must enforce tenant/product identity before events enter Product Fleet.

Cross-company benchmarking, if ever offered, must use explicitly approved aggregation/anonymization rules and should never expose another organization's underlying data.

## Intelligence Layer

SLAIDIL may support:

- anomaly detection,
- cost exception classification,
- likely release-impact correlation,
- unusual-usage scoring,
- source-quality assessment,
- escalation recommendations.

Hard limits and permissions remain deterministic.

A probabilistic model may identify a possible margin anomaly. It may not alter customer pricing, disable a feature, or move money without approved authority.

## Alerts and Recommendations

Prefer decision-relevant alerts over dashboard noise.

Examples:

- release followed by abnormal error increase,
- provider cost materially above forecast,
- one tenant consuming disproportionate resources,
- feature adoption increasing without expected revenue signal,
- churn rising after a workflow change,
- margin falling below approved target,
- billing revenue mismatch between authoritative sources,
- product usage growing faster than infrastructure budget.

Every alert should explain:

- what changed,
- compared with what,
- source evidence,
- estimated impact,
- confidence,
- recommended next action,
- whether human approval is required.

## Commercial Possibilities

Do not commit pricing now.

Possible future packaging may include:

- basic product-health view included with SLAIOS,
- limited monitored products in a Core tier,
- paid Product Intelligence module,
- additional monitored products,
- longer telemetry retention,
- advanced correlation/anomaly intelligence,
- enterprise/private data controls.

See `SLAIOS_Commercial_Pricing_and_Expansion_Model.md`.

## Internal Proof Metrics

Before external launch, SLAI should validate:

- ingestion reliability,
- source reconciliation accuracy,
- event volume and cost,
- storage growth,
- query/analysis cost,
- cost per monitored product,
- false-positive alert rate,
- useful alert rate,
- founder/admin time saved,
- frequency of decisions made from Product Intelligence,
- correlation usefulness,
- privacy incidents/near misses,
- support/maintenance burden.

## Success Definition

This capability succeeds when:

1. SLAIOS can show technical, customer, usage, revenue, and cost health for a product without manually rebuilding spreadsheets.
2. Every important metric has a defined source and calculation.
3. Product releases can be correlated with later runtime and business evidence.
4. Cost and margin exceptions surface early enough for useful human decisions.
5. Product teams receive fewer low-value alerts and more decision-relevant explanations.
6. Sensitive customer data is minimized and tenant boundaries remain explicit.
7. SLAI proves the system on its own product fleet before offering it externally.

## Final Principle

> **Product Telemetry tells SLAIOS what the software is doing. Product Intelligence helps humans understand what that means for the business.**
