# Founder Analytics and Unit Economics

**Status:** Future Founder Alpha planning  
**Priority guardrail:** Planning only until the approved SLAIOS activation sequence is reached.

## Purpose

Founder Alpha needs enough analytics to answer basic company-health and unit-economics questions without becoming a full BI platform.

The dashboard should favor a small number of trustworthy definitions over a large number of weak metrics.

## Canonical User and Business Metrics

### Users active now

~~~text
unique authenticated users with qualifying activity in the previous 5 minutes
~~~

This is an operational concurrency indicator, not a contractual billing metric.

### Active today

~~~text
unique authenticated users with qualifying activity in the previous 24 hours
~~~

### New user

A business user account whose authoritative creation timestamp falls inside the selected reporting period.

### Active business

A tenant/business that is authorized and commercially active under the product's current entitlement rules and is not cancelled, suspended, or otherwise inactive.

### New business

A tenant/business whose paid/authorized activation occurred inside the selected reporting period.

The exact activation event must come from the authoritative entitlement/billing contract rather than a UI login.

## Revenue Metrics

Where authoritative billing data exists, Founder Alpha may show:

- MRR,
- new MRR,
- annual-plan share,
- expansion/contraction where later justified,
- cancelled revenue,
- product-level recurring revenue.

Do not infer revenue from account creation.

## Cost Per Business

Founder Alpha should distinguish two views.

### Direct tenant cost

Costs attributable directly to one tenant/business, such as:

~~~text
SMS / communications
AI/provider usage
tenant-attributable database operations
tenant-attributable storage
tenant-attributable functions/compute
tenant-attributable bandwidth
tenant-attributable email/notification services
other tenant-specific provider costs
~~~

### Fully allocated operating cost

~~~text
direct tenant cost
+ documented fair share of shared platform/infrastructure cost
= fully allocated operating cost
~~~

Shared-cost allocation must use an explicit method. Do not present a fake-precise margin figure if the allocation basis is weak.

Payment-processing fees should normally be displayed separately from product operating cost because they are transaction economics rather than the basic cost of keeping the SaaS service running. A future finance view may combine them when evaluating total customer contribution.

## Tenant Drilldown

An authorized founder view may show:

~~~text
Business
Subscription revenue
Direct cost
Allocated shared cost
Payment/transaction fees if relevant
Estimated contribution
Major cost drivers
Usage exceptions
~~~

Do not expose legally/private customer data merely to calculate operating economics.

## Founder Dashboard Minimum

Suggested compact view:

~~~text
CUSTOMERS
Active businesses
New businesses this month
New users this month
Users active now

REVENUE
MRR
New MRR

OPERATING COST
Infrastructure
AI
SMS/communications
Storage/database/compute
Other providers

UNIT ECONOMICS
Average direct cost / business
Average fully allocated cost / business
Highest-cost business exception
Estimated contribution / margin signal
~~~

Advanced cohort/churn/BI analysis is deferred until real usage proves the need.

## Engineering Cost Visibility

Founder Alpha should also separate company/product engineering costs from customer-operating costs.

Potential engineering cost categories:

- Codex/AI execution,
- paid API fallback,
- Forge worker compute,
- CI/build/test infrastructure,
- artifacts/storage,
- other engineering tools.

This supports later per-product and per-project budgeting without mixing development spend into tenant operating margin.

## Accuracy Rule

> **A metric is useful only if its event definition and source of truth are explicit.**

Every dashboard metric should carry enough provenance to identify:

- source system,
- time window,
- last refresh,
- calculation version,
- allocation method where relevant.

## Deferred Analytics

Do not build in Alpha by default:

- elaborate cohort dashboards,
- predictive churn scoring,
- investor-style vanity metrics,
- giant custom BI builders,
- employee productivity analytics,
- speculative ROI rankings.

The first objective is founder control and unit-economics visibility.