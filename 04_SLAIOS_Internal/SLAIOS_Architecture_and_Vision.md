# SLAIOS — Architecture and Operating Model

## System Boundary

SLAIOS is the company control, knowledge, people, communication, and AI-orchestration layer for Stellar Logic AI.

It is not one giant autonomous agent.

```text
                         SLAIOS
                 Company Control Plane
                          |
      +-------------------+-------------------+
      |                   |                   |
 Executive/CEO        Employee Work       Company Memory
 Intelligence           & People          & Decisions
      |                   |                   |
      +-------------+-----+-----+-------------+
                    |           |
              AI Orchestrator   Permissions
             Luna/Terra/Sol     & Audit
                    |
       +------------+-------------+
       |            |             |
 Product Fleet  Product Studio   Add-ons
                                  |
                                Forge
```

## Core Modules

### Executive Intelligence

Purpose:

- CEO briefings,
- company health,
- priorities,
- risk,
- opportunities,
- finance visibility,
- staffing constraints,
- product decisions,
- and cross-company recommendations.

The AI may challenge assumptions. Humans decide.

### Role-Aware Employee Workspace

Each employee receives only the information and capabilities appropriate to:

- role,
- department,
- project,
- sensitivity level,
- current assignment,
- and temporary delegated authority.

The employee workspace should unify work, communication, knowledge, self-service people tools, contributions, rewards, and authorized AI assistance.

### Company Memory and Decision System

Store and connect:

- canonical plans,
- approved decisions and rationale,
- source documents,
- product history,
- customer feedback,
- incidents,
- metrics,
- contribution provenance,
- communication-derived decisions,
- and authorized engineering history.

Memory is evidence, not authority.


### Shared Semantic Context / Company Ontology

SLAIOS should eventually maintain a lightweight shared semantic layer over canonical company and product data.

The goal is not to build a giant abstract knowledge graph before it is needed. The goal is to define important entities and relationships once so humans, workflows, and AI workers do not repeatedly rediscover what the data means.

Examples:

```text
Tenant
├── Customer
│   ├── Lead
│   ├── Estimate
│   ├── Booking
│   └── Payment
├── Employee
│   ├── Assignment
│   └── Work evidence
├── Job Scope
│   ├── Approved version
│   ├── Change request
│   └── Customer approval
├── Subscription / Entitlement
├── Product / Repository
├── Decision
└── Operational Event
```

Preferred reasoning path:

```text
Question / task
        ↓
Resolve relevant entities
        ↓
Follow canonical relationships
        ↓
Select authoritative facts
        ↓
Build compact context pack
        ↓
AI reasoning / execution
```

Avoid:

```text
Question
→ dump large stores of loosely related records
→ ask the model to infer every relationship again
```

The semantic layer should preserve:

- canonical entity identity,
- relationship meaning,
- source of truth,
- authority boundaries,
- version/state where relevant,
- provenance,
- access permissions,
- product-specific ownership.

Where Platform Core already defines a shared contract, SLAIOS should consume that meaning instead of inventing a conflicting definition. Product-specific semantics should remain with the product when they do not belong in Core.

This layer is intended to improve reliability, context selection, token efficiency, cross-product understanding, and future Forge orchestration. It is not permission to centralize all product data or erase product ownership boundaries.

### Internal Communication

Native remote-first communication should include:

- company and team channels,
- project/product channels,
- DMs and groups,
- announcements,
- searchable decisions,
- handoffs,
- role-aware AI catch-up summaries,
- and links between communication and work.

### People / HR

SLAIOS should eventually support:

- employee profiles,
- organization structure,
- onboarding,
- offboarding,
- PTO and leave workflows,
- training,
- certifications,
- policy acknowledgements,
- goals/check-ins,
- equipment/access records,
- and restricted employment documents.

AI assists; humans make hiring, discipline, promotion, compensation, and termination decisions.

### Payroll Coordination

SLAIOS should initially be the payroll operating layer, not a homegrown payroll-tax engine.

It may manage approved source data such as:

- salary/hourly status,
- approved hours,
- PTO,
- bonuses,
- payroll changes,
- pay periods,
- and employee-facing payroll status.

An established payroll provider should initially remain responsible for tax calculation, withholding, filing, and regulated payroll execution.

### Contribution Ledger and Rewards

The factual ledger records verified work, timeframe, provenance, collaborators, review, and outcome.

The rewards layer may add optional points, badges, team quests, leaderboards, and perks.

Never use reward points as the sole basis for employment decisions.

### Product Fleet

Every live SLAI product may feed controlled operational signals into SLAIOS:

- technical health,
- customer health,
- business health,
- product health,
- AI/provider health,
- releases,
- incidents,
- support,
- and relevant financial performance.

SLAIOS should summarize what changed and what requires attention.

### Product Studio

Authorized users may use SLAIOS to:

- capture ideas,
- retrieve prior related work,
- validate problems,
- define users and evidence,
- scope MVPs,
- produce UX concepts,
- prepare architecture,
- assess risks,
- generate product briefs,
- and preserve the decision trail.

The system should help kill or park weak ideas rather than encouraging unlimited building.

### AI Orchestrator

SLAIOS chooses model, context, tools, and autonomy based on:

- task type,
- user permissions,
- risk,
- cost,
- required quality,
- and consequential impact.

```text
Luna  -> retrieve / organize / document / lower-risk work
Terra -> implement / analyze / test / normal execution
Sol   -> strategic / security / architecture / payments / high-risk review
```

### Workflow Orchestration

SLAIOS should coordinate repeatable company workflows by combining:

- authorized context,
- task state,
- approved automation,
- AI model routing,
- human checkpoints,
- QA evidence,
- company memory,
- and final outcome recording.

The system should distinguish between:

**Automatic routine work**

- retrieval,
- organization,
- reversible preparation,
- tests/checks,
- monitoring,
- report generation,
- backups,
- status updates.

**Human approval work**

- customer-facing publication,
- production deployments,
- meaningful pricing/policy changes,
- unusual customer commitments,
- high-risk engineering changes,
- people/finance/legal decisions.

The goal is not an approval click for every trivial action. Human attention should be reserved for places where judgment or accountability adds value.


### Engineering Orchestration Outcome

For engineering, the long-term objective is a cleaner workflow around human judgment:

```text
Human defines outcome / accepts responsibility
        ↓
SLAIOS resolves:
- product priority
- canonical architecture
- current repo/branch state
- relevant decisions
- semantic/domain context
- permissions
        ↓
Forge decomposes only approved work into bounded slices
        ↓
Implementation / test / documentation / review workers
        ↓
Automated gates and evidence
        ↓
One consolidated engineering report
        ↓
Human technical review
        ↓
Merge / release decision
```

The system should eliminate repetitive coordination work such as reconstructing context, re-explaining repository rules, collecting test evidence, preparing handoff summaries, and checking whether a task crossed scope.

It should not eliminate the engineering judgment that decides what should exist, how risky a change is, whether the architecture is sound, or whether the result is ready to release.

### Web Production Workflow

A future specialist workflow may orchestrate SLAI Web production using ServicesOS/customer data and the approved Web Engine.

```text
Customer data
↓
Website job packet
↓
Layout + customer layer
↓
AI implementation
↓
Automated checks
↓
Human QA
↓
Client/founder approval
↓
Deploy
↓
Record history
```

See `SLAIOS_Web_Production_Orchestration.md`.

### Boardroom Workflow

For difficult company decisions, SLAIOS may ask multiple models to examine different dimensions and synthesize the result.

```text
Question
  |
Evidence + prior decisions
  |
Luna ---- Terra ---- Sol
  |         |         |
history   execution   challenge/risk
  +---------+---------+
            |
       SLAIOS synthesis
            |
       Human decision
            |
     decision recorded
```

This is structured decision support, not autonomous governance.

## Permission Architecture

Authorization happens before retrieval.

The AI should never receive sensitive information merely because the application can technically access it.

Permission inputs should include:

- role,
- department,
- project,
- data sensitivity,
- employee relationship,
- task purpose,
- and temporary grants.

Highly restricted domains such as payroll, compensation, HR-confidential material, executive strategy, secrets, and production credentials require stronger boundaries.

## Add-on Architecture

Specialist modules should rely on SLAIOS rather than recreate identity, context, permissions, memory, or audit systems.

```text
SLAIOS Core
 |
 +-- Product Studio
 +-- People / HR
 +-- Rewards
 +-- Product Fleet
 +-- Web Production (future internal workflow)
 +-- future specialist modules
 |
 +-- Forge
      Engineering execution
```

## Forge Relationship

Forge asks SLAIOS:

- Is this user authorized?
- Which product/repo is in scope?
- What priority and decision history applies?
- Which model is appropriate?
- What files/tools are allowed?
- What review is required?
- Who owns final approval?

Forge then executes in an isolated worker and returns:

- changes,
- tests,
- QA evidence,
- reports,
- contributor information,
- timestamps,
- and PR/review state.

SLAIOS records the result in company memory and the contribution ledger.

## Human-Control Rule

Consequential actions should preserve:

```text
AI notices or prepares
        |
Human reviews
        |
Human decides
        |
System records
```

AI should not independently:

- hire or terminate employees,
- set compensation,
- publish externally,
- make binding legal decisions,
- move money,
- merge high-risk production changes,
- deploy to production,
- or override company policy.

## Internal-First Rule

SLAIOS should become useful for SLAI before becoming configurable for everyone.

Reusable abstractions and white-label support are earned only after internal workflows prove what actually matters.


## Future SLAI Intelligence Core

After ServicesOS V2 is completed and SLAIOS/SLAIForge are activated, SLAIOS should evaluate a shared intelligence architecture that prepares bounded, permission-aware context before calling a reasoning provider.

The intended separation is:

```text
Context Engine
    ↓
Signal Engine
    ↓
Decision Fabric
    ↓
Policy Engine
    ↓
Reasoning Gateway
    ↓
Validation
    ↓
Human / authorized action
```

This extends the existing semantic-context, permission, model-routing, and human-control architecture. It does not authorize a universal model or autonomous control plane.

The Decision Fabric may use deterministic routing, specialized ML, or a Jev/System One-style bounded decision model to classify a task, identify uncertainty, and decide whether expensive reasoning is necessary. OpenAI and other reasoning providers remain replaceable capabilities behind SLAI-owned context, policy, evidence, and validation.

See `SLAI_Intelligence_Core.md` for the preserved future architecture and activation gate.
