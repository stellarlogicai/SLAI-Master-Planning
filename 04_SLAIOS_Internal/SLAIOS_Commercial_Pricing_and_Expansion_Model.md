# SLAIOS + SLAIForge Commercial Pricing and Expansion Model

**Status:** Future commercial planning only  
**Evidence snapshot:** September 2026 market research + founder planning  
**Priority guardrail:** ServicesOS remains the active build. Do not implement external billing, packaging, enterprise sales machinery, or pricing UX merely because this document exists.

## Purpose

Preserve the current commercial hypothesis for future SLAIOS and SLAIForge without treating unproven pricing as a commitment.

Core rule:

> **Dogfood first. Measure actual economics. Price from evidence before external launch.**

SLAIOS and SLAIForge should remain economically distinct even when they share one customer experience:

- **SLAIOS** creates organization-wide operating, context, governance, decision, budgeting, and employee-workspace value.
- **SLAIForge** creates engineering-execution value while consuming materially more variable AI, compute, build, QA, and worker capacity.

Do not hide both economic models inside one unlimited flat subscription.

## September 2026 Research Conclusion

Current market research supports the founder's original SLAIOS organization-price hypothesis more strongly than the original Forge pure-seat hypothesis.

Working research conclusions:

- SLAIOS organization pricing around **$299–$499/month** is defensible after real internal proof.
- Additional standard users are more defensible initially around **$15–$20 per active user/month** than $25–$30.
- Forge at **$300–$750 per engineer/month** is not well supported as a simple software seat at launch.
- Forge is better structured as a lower software/access fee plus a **shared organization execution-capacity pool**.
- The original $300–$750 Forge range remains plausible as a high-use bundle, reserved capacity, or capacity-equivalent amount when meaningful compute/model/QA/governance is included.
- Enterprise remains custom, but should be structured around platform commitment + employee band + committed Forge capacity + deployment/security/support rather than arbitrary uplift.

These are market-informed hypotheses, not launch prices.

## Recommended Commercial Structure

~~~text
SLAIOS Core
+ organization / active-user band
+ optional GrowthAI
+ optional SLAIForge access
+ shared Forge execution capacity
+ optional Product Intelligence / monitoring
+ optional Private AI
+ future specialist modules
+ Enterprise governance / deployment
~~~

The customer should experience one coherent SLAIOS platform while entitlements determine which specialist capabilities are active.

## SLAIOS Core Pricing Unit

SLAIOS should not be unlimited by organization size.

A 10-person organization and a 50-person organization create different:

- authentication/session volume,
- company-memory activity,
- AI-summary/retrieval load,
- notifications,
- workflow events,
- audit events,
- storage,
- employee context,
- approvals,
- analytics,
- support/admin burden,
- organizational value.

Preferred billing concept:

> **Base organization subscription with an included active-user band, then larger organization bands or low marginal active-user charges.**

### Active vs provisioned users

Distinguish:

~~~text
Provisioned employee
= identity exists

Active standard user
= qualifying SLAIOS activity during the billing period

Forge-enabled engineer
= authorized to create/direct Forge engineering work

Forge execution
= separate shared capacity consumption
~~~

The commercial model should encourage broad rollout rather than punish customers merely for creating employee identities.

## Candidate SLAIOS Organization Bands

These are founder hypotheses to test after internal proof, not researched launch commitments.

~~~text
Starter
1–10 active users
~$299/month

Team
11–25 active users
~$499/month

Company
26–50 active users
~$749–$999/month

Growth
51–100 active users
~$1,250–$1,750/month

100+
Custom / Enterprise
~~~

An alternative commercial presentation is a $299 organization fee including 10 active users plus approximately $15 per additional active standard user.

Internal metering should remain granular enough to support either packaging model later.

## SLAIForge Pricing Unit

Forge should separate:

1. **Forge Access**
   - engineering orchestration,
   - context management,
   - repo/task governance,
   - permissions,
   - budget controls,
   - evidence,
   - review workflow,
   - administrative value.

2. **Forge Execution Capacity**
   - coding-agent/model usage,
   - worker compute,
   - concurrent workers,
   - browser/QA execution,
   - build/test runtime,
   - storage/artifacts,
   - retries,
   - high-risk reviews,
   - other variable providers.

Working balanced hypothesis:

~~~text
Forge Access
~$149 / active engineer / month

Execution
shared organization allowance
+ prepaid/metered additional capacity
~~~

Planning range for Forge Access before proof:

- conservative: ~$99/active engineer/month,
- balanced: ~$149,
- premium/proven: ~$249–$299+.

Heavy-use/reserved execution may justify $300–$750+ capacity-equivalent monthly spend independently of the access fee.

## Shared Capacity Model

A customer with five engineers should not necessarily require five dedicated continuously reserved workers.

Example:

~~~text
5 Forge-enabled engineers
        ↓
shared organization capacity
        ↓
2 concurrent workers
+ monthly execution allowance
+ overage / prepaid capacity when needed
~~~

This allows broad engineering access while pricing expensive execution according to actual usage.

Potential commercial meters may include:

- execution credits,
- worker-hours,
- reserved concurrent-worker capacity,
- included model/compute allowance,
- hybrid capacity wallets.

Avoid exposing raw token accounting as the primary customer-facing unit if a clearer model-independent commercial meter can be created.

Admin views should still expose actual underlying cost and consumption.

## GrowthAI and Specialist Add-ons

SLAIOS is the platform relationship; specialist SLAI capabilities may become separately entitled add-ons.

Example:

~~~text
Organization
├─ SLAIOS Core            ACTIVE
├─ GrowthAI               ACTIVE
├─ SLAIForge              ACTIVE
├─ Product Intelligence   ACTIVE
├─ Private AI             NOT SUBSCRIBED
└─ future modules         NOT SUBSCRIBED
~~~

Core rule:

> **Available inside SLAIOS does not automatically mean included in SLAIOS Core.**

Do not bury valuable specialist products into Core before their individual economics and willingness to pay are understood.

Bundles may be tested later, but discounts should be earned by measured economics and commercial evidence.

## Product Intelligence / Monitoring Commercial Role

Future Product Intelligence may add commercial value by connecting:

- application usage,
- customers/users,
- subscriptions,
- MRR/ARR,
- feature adoption,
- churn,
- cloud/infrastructure cost,
- AI/provider cost,
- payment fees,
- cost per customer,
- margin,
- release health,
- runtime health,
- support signals.

Possible future packaging could include:

- basic Product Fleet visibility in Core,
- a limited number of monitored products,
- additional monitored products,
- advanced Product Intelligence,
- advanced technical telemetry,
- longer retention / enterprise controls.

Do not price this before internal SLAI usage establishes ingestion, support, storage, and AI-analysis costs.

See `Product_Telemetry_and_Intelligence_Architecture.md`.

## Private AI Commercial Role

Some customers may require stronger isolation than a shared managed AI environment.

Future options may include:

~~~text
Standard SLAI-managed AI
→ tenant-isolated data/context

Dedicated Private AI
→ dedicated runtime / storage / capacity boundary

Enterprise Private AI
→ customer cloud / VPC / on-prem-style deployment where justified
~~~

Private AI should be priced as a premium infrastructure/governance capability because it can create real reserved compute, deployment, storage, networking, maintenance, security, update, and support cost.

Do not treat Private AI as a trivial low-cost add-on.

See `Private_AI_and_Tenant_Intelligence_Architecture.md`.

## Enterprise Structure

Future enterprise pricing should be based on real additional cost/value:

~~~text
annual SLAIOS platform commitment
+ active employee band
+ Forge-enabled engineering users
+ committed Forge capacity
+ private/dedicated deployment if required
+ advanced governance/security
+ retention / networking / data controls
+ support / SLA
~~~

Enterprise premiums should be justified by genuine requirements such as:

- dedicated/private deployment,
- private networking,
- advanced lifecycle/provisioning,
- longer audit retention,
- customer-managed encryption options,
- data-residency requirements,
- contractual SLAs,
- premium support,
- deployment engineering,
- reserved Forge capacity.

Do not force ordinary secure authentication into Enterprise merely to create artificial segmentation.

## Replacement-Stack Positioning

Market research shows that software companies can spend meaningful amounts across:

- work/project management,
- company knowledge,
- communication,
- identity,
- AI workspaces,
- repositories,
- coding agents,
- cloud development environments,
- CI,
- engineering intelligence.

This creates a pricing umbrella, not an entitlement to claim all of that spend.

SLAI should never argue:

> "Your current stack costs $X, therefore SLAIOS is worth $X."

The stronger future case is evidence such as:

~~~text
SLAIOS replaced tool A
SLAIOS reduced administration of tool B
Forge reduced environment setup
Forge reduced coordination/reconstruction time
Product Intelligence exposed cost leakage
Private AI satisfied an isolation requirement
~~~

Integration breadth and replacement breadth are not the same thing.

## Margin Targets

Working future targets from September 2026 research:

~~~text
SLAIOS Core
mature target: ~80–85% gross margin

SLAIForge
early target: ~65–75% gross/contribution margin

Blended SLAIOS + Forge
longer-term target: ~75–80%
~~~

These are planning targets, not guaranteed economics.

Forge should not be priced as though AI/compute execution has the same marginal cost profile as classic SaaS.

## Dogfooding Ledger

Before external pricing, SLAI should measure its own actual operation.

### Base platform

- monthly shared infrastructure cost,
- databases/search/vector services,
- secrets/key management,
- observability,
- storage/backups,
- network/egress,
- allocated cost per organization.

### Standard users

- active users,
- sessions/actions,
- storage growth,
- AI calls,
- workflow executions,
- marginal cost per active standard user,
- light/heavy-user distribution.

### Forge

- cost per job,
- cost per successful accepted task,
- task class,
- wall-clock runtime,
- worker class,
- worker startup time,
- retries,
- browser/QA use,
- build/test minutes,
- storage/network,
- AI/model consumption,
- model failure/retry rate,
- concurrent jobs p50/p90/p95/p99,
- queue time,
- reserved vs consumed capacity,
- idle cost.

### Engineering outcomes

- request-to-merge cycle time,
- human active effort,
- review time,
- first-pass validation,
- rework,
- rollback,
- escaped defects,
- accepted vs rejected agent work.

### Management outcomes

- founder/manager coordination time,
- status-gathering time,
- manual reports avoided,
- approval latency,
- context-reconstruction time,
- budget variance visibility.

### Onboarding / offboarding

- time to productive environment,
- manual account steps,
- credential/access errors,
- offboarding time,
- orphaned-access findings.

## Cost Floor

Future sustainable pricing should begin with:

~~~text
fully loaded COGS
÷ (1 - target gross margin)
= sustainable minimum price
~~~

Then triangulate against:

- customer value,
- competitive alternatives,
- replacement/consolidation evidence,
- willingness to pay,
- support burden,
- deployment requirements.

Cost is a floor, not the final value-based price.

## Evidence That Supports Higher Pricing

Consider increasing prices only when evidence converges, such as:

- customers retire multiple paid tools,
- SLAIOS measurably reduces coordination/admin effort,
- Forge reduces total engineering effort/cycle time without increasing defects/rework,
- customers voluntarily buy more Forge capacity,
- standard-user marginal COGS remains low,
- enterprises repeatedly request governance/private-deployment features,
- higher quotes do not materially damage conversion/retention,
- Forge reduces other development-environment or infrastructure spend.

## Evidence That Requires Lower Pricing or Different Packaging

Reconsider pricing when:

- SLAIOS is mostly additive and replaces little,
- paid seats remain inactive,
- employee growth causes price resistance,
- Forge COGS consumes too much of price,
- heavy users create losses under flat plans,
- customers suppress useful work because the meter is confusing,
- support burden is too high,
- external pilots use the product but consistently reject proposed pricing.

## Expansion Revenue Principle

Healthy account expansion should follow real customer growth:

~~~text
more active employees
→ larger SLAIOS band

more engineering users
→ more Forge Access

more execution
→ more Forge capacity

GrowthAI needed
→ GrowthAI entitlement

Product Intelligence needed
→ monitoring/intelligence entitlement

private AI requirement
→ dedicated AI entitlement

advanced governance/deployment
→ Enterprise
~~~

Do not manufacture artificial upsells. Expansion should follow actual capability and resource needs.

## Internal-First Proof Sequence

~~~text
SLAI operates SLAIOS internally
→ SLAI builds products through Forge
→ costs and outcomes measured
→ employees use the same operating path
→ pricing assumptions replaced with SLAI data
→ customer discovery
→ controlled paid pilots
→ packaging tests
→ general commercial launch only if earned
~~~

## Final Principle

> **SLAIOS is priced around organizational operating value. Forge is priced around engineering access plus scarce execution capacity. Specialist modules earn separate value. Internal evidence decides the final price.**
