# SLAIOS AI Orchestration — Luna, Terra, and Sol

## Core Rule

SLAIOS should not simply call the strongest model for every task.

It should ask:

> What kind of work is this, what is the cost of being wrong, what is the user's authority, and what is the lowest-cost model capable of doing it safely?

AI supports the user. Humans remain responsible for consequential decisions.

## Luna — Operations / Chief-of-Staff Layer

Use Luna for high-volume, lower-risk work such as:

- company-memory retrieval,
- document organization,
- summaries,
- meeting/catch-up notes,
- backlog and task extraction,
- planning inventories,
- decision-history retrieval,
- onboarding context,
- routine reports,
- lower-risk research organization,
- context-pack preparation.

Luna should do the repetitive organizational work that keeps SLAIOS current.

## Terra — Builder / Operating Execution Layer

Use Terra for ordinary implementation and deeper operational reasoning:

- product/workflow analysis,
- implementation planning,
- normal coding tasks through Forge,
- testing,
- UI/workflow refinement,
- refactors within approved scope,
- product requirements,
- customer-feedback analysis,
- process optimization,
- converting approved strategy into executable work.

Terra should be the default implementation model when the work is meaningful but not high-risk.

## Sol — Strategic / High-Risk Review Layer

Reserve Sol for work where error is materially more expensive:

- security,
- authentication/authorization,
- tenant isolation,
- payments/Stripe,
- production architecture,
- release-critical decisions,
- high-impact strategic analysis,
- difficult engineering review,
- sensitive data boundaries,
- high-risk compliance support,
- reviewing Terra output before consequential changes.

Sol should not be spent on trivial work.

## Constrained Router

The router decides:

- model,
- context,
- tools,
- token/cost budget,
- and whether multi-model review is warranted.

The router must obey user and data permissions before context retrieval.

## Model Access by Role

Employees do not automatically receive unrestricted access to every model or tool.

Example future policy:

```text
General Employee
- Luna: allowed within role scope
- Terra: request/approved workflows
- Sol: unavailable except approved escalation

Engineer
- Luna: allowed
- Terra: allowed within assigned repos/projects
- Sol: review request / approved high-risk scope

Engineering Lead
- Luna: allowed
- Terra: allowed
- Sol: allowed within engineering authority

Founder / Authorized Executive
- all models within policy
- Boardroom workflow
```

Actual authorization must be policy-backed, not UI-only.

## Boardroom

For a difficult decision, SLAIOS may request distinct perspectives:

- Luna: retrieve history/evidence,
- Terra: assess execution and operational feasibility,
- Sol: challenge risk, architecture, or strategy.

SLAIOS synthesizes:

- recommendation,
- evidence,
- arguments for,
- arguments against,
- risks,
- unknowns,
- suggested next action.

A human decides and the decision is recorded.

## Agent-to-Agent Rule

Agents may exchange narrowly scoped intermediate results through SLAIOS.

They should not form an uncontrolled autonomous network.

SLAIOS remains the orchestrator, permission gate, audit boundary, and cost governor.

## Cost Governance

SLAIOS should track model spend by:

- company,
- department,
- project/product,
- employee,
- workflow,
- and Forge job where relevant.

Potential controls:

- daily/monthly company budgets,
- team budgets,
- per-user limits,
- Sol escalation rules,
- task-specific token budgets,
- fallback models,
- and alerts when spend deviates from expectation.

## Authority Boundary

Models may prepare and recommend.

They do not independently:

- hire,
- fire,
- set compensation,
- move money,
- publish externally,
- merge/deploy high-risk software,
- or override a human-authorized company decision.
