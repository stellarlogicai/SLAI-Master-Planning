# SLAI Intelligence Core — Context, Decision, Policy, and Reasoning Architecture

Status: **Future planning only. No implementation authorization.**

Recorded: 2026-09-23

## Priority / Activation Boundary

This architecture is intentionally parked.

Do not begin implementation while ServicesOS is the active company priority. SLAIOS and SLAIForge are planned for after ServicesOS V2 is completed and stable enough that this work will not distract from the active product.

This document preserves an architectural direction; it does not move the current roadmap.

## Purpose

SLAI should own the intelligence architecture around model providers rather than making any one model or vendor the product architecture.

The core pattern is:

```text
canonical state + request
        ↓
permission-aware context selection
        ↓
bounded decision / routing
        ↓
policy and authority boundaries
        ↓
compact reasoning contract
        ↓
OpenAI / local / specialized / future provider
        ↓
validation
        ↓
human or explicitly authorized action
        ↓
outcome evidence
```

The reasoning provider supplies capability. SLAI owns context, routing, policy, evidence, validation, and human-control boundaries.

## External Research Inspiration

Jev / System One-style decision models are useful research references for a bounded pattern:

```text
structured state
→ typed / constrained judgment
→ confidence or probability
→ ordinary code decides what happens
```

SLAI should not design around a required Jev dependency. A Jev-like model may later be evaluated as one provider or implementation option.

The reusable idea is to define the problem before asking an expensive reasoning model to solve it.

## Core Layers

### 1. Context Engine

Question:

> What information is actually relevant and authorized for this task?

Responsibilities:

- resolve canonical entities,
- retrieve authoritative state,
- follow known relationships,
- enforce permission-aware retrieval,
- separate current facts from history,
- preserve provenance,
- identify missing information,
- exclude irrelevant context,
- build compact context packs.

The Context Engine does not decide permissions by itself and does not invent missing facts.

### 2. Signal Engine

Question:

> What deterministic, statistical, behavioral, or domain-specific signals can be extracted before general reasoning?

Potential sources:

- deterministic rules,
- statistical calculations,
- specialized ML,
- anomaly detectors,
- domain-specific classifiers,
- product telemetry,
- repository/test/build state,
- business metrics.

Signals should preserve provenance and uncertainty.

### 3. Decision Fabric

Question:

> What kind of task or decision is this, what is already known, how uncertain is it, and where should it go next?

Potential responsibilities:

- task classification,
- bounded judgments,
- risk classification,
- domain routing,
- model/provider routing,
- determine whether deeper reasoning is necessary,
- identify missing evidence,
- choose an approved reasoning contract,
- avoid unnecessary expensive API calls.

A decision result should be typed rather than arbitrary prose where practical.

Conceptual contract:

```json
{
  "decisionType": "example",
  "classification": "bounded_value",
  "confidence": 0.91,
  "evidence": [],
  "uncertainties": [],
  "missingInformation": [],
  "reasoningRequired": true,
  "reasoningQuestion": "..."
}
```

Confidence is evidence for routing; it is not authority.

### 4. Policy Engine

Question:

> What is this user, model, worker, or workflow allowed to do?

Policy should be deterministic and separate from fuzzy model judgment.

Inputs may include:

- user/role,
- product/repository,
- task purpose,
- sensitivity,
- risk,
- requested action,
- delegated authority,
- environment,
- company rules.

Possible results:

- allow,
- allow preparation only,
- require human approval,
- require specialist review,
- deny,
- stop/escalate.

The reasoning model must not determine its own authority.

### 5. Reasoning Gateway

Question:

> Which reasoning capability is appropriate for the prepared problem?

The gateway receives a compact, structured reasoning package rather than an uncontrolled dump of company or product data.

Providers may eventually include:

- OpenAI models,
- specialized decision models,
- local models,
- future providers.

Provider choice should consider quality, risk, cost, latency, privacy, and task requirements.

Provider abstraction must not erase meaningful capability differences.

### 6. Validation

Question:

> Is the proposed output or action valid against authoritative state, contracts, policy, and required evidence?

Validation may include:

- schema checks,
- deterministic invariants,
- permission checks,
- tests/build/lint,
- security gates,
- payment/identity boundaries,
- evidence requirements,
- stale-context checks,
- contradiction detection.

A model recommendation does not bypass validation.

### 7. Human Authority

Consequential decisions remain with the appropriate human unless an explicitly approved policy grants bounded automation.

Core principle:

> AI should amplify human judgment, not silently replace human responsibility.

Human attention should be concentrated where judgment, accountability, ambiguity, or consequence justifies it.

### 8. Outcome / Evaluation Loop

Preserve safe outcome data:

```text
state
→ signals
→ decision
→ confidence
→ reasoning
→ human/system action
→ actual outcome
```

This creates evidence for evaluation, calibration, routing improvements, and future SLAI-owned specialized models.

Do not turn operational outcomes into uncontrolled self-training. Changes to models, thresholds, or policy require governed evaluation.

## Intelligence Routing Principle

Use the cheapest adequate capability, escalating only when needed:

```text
deterministic rules
        ↓
specialized/statistical ML
        ↓
bounded decision model
        ↓
general reasoning model
        ↓
human judgment where required
```

This is a routing hierarchy, not a claim that every request must pass through every layer.

## SLAIOS Use

SLAIOS can use the Intelligence Core to avoid sending the entire company state to a reasoning model.

Example:

```text
company state + user request
        ↓
Context Engine
- active product
- current priority
- relevant decisions
- current metrics
- authorized records
        ↓
Decision Fabric
- task type
- risk
- relevant domain
- reasoning need
        ↓
Policy Engine
- user authority
- permitted tools/actions
- approval requirements
        ↓
Reasoning Gateway
        ↓
Validation
        ↓
human / authorized workflow
```

This supports institutional memory without turning memory into authority.

If a request conflicts with an established company priority, SLAIOS may surface the conflict and request explicit human override rather than silently changing company direction.

## SLAIForge Use

SLAIForge can use the same architecture to compile high-signal engineering job packets before a coding/reasoning worker is called.

Inputs may include:

- requested engineering outcome,
- current product priority,
- canonical architecture,
- repository/branch state,
- applicable instruction hierarchy,
- relevant files/contracts,
- open failures,
- security/payment/identity sensitivity,
- test/build state.

The compiled job packet may define:

- task type,
- goal,
- bounded scope,
- authorized write surfaces,
- protected files/surfaces,
- dependencies,
- acceptance criteria,
- validation commands,
- stop conditions,
- required reviewer,
- required report.

Conceptual flow:

```text
engineering request
        ↓
Context Engine
        ↓
Decision Fabric
        ↓
Policy Engine
        ↓
bounded engineering packet
        ↓
Forge worker / coding model
        ↓
tests + build + QA + review
        ↓
Validation
        ↓
human merge/release decision
```

This extends Forge's existing principle of bounded slices and disposable execution workers. The objective is not to give an agent more autonomy; it is to give an authorized worker better-defined context with less irrelevant information.

## Future Security Use

For a future SLAI security platform:

```text
telemetry / events
        ↓
normalization
        ↓
Signal Engine
        ↓
Decision Fabric
- classify event
- identify relevant signals
- quantify uncertainty
- decide whether deeper investigation is needed
        ↓
compact security reasoning package
        ↓
reasoning model when justified
        ↓
validation + security policy
        ↓
analyst / bounded authorized response
```

The reasoning model should not be the enforcement authority.

Evidence should be first-class:

- assessment,
- confidence,
- supporting signals,
- provenance,
- uncertainty,
- missing evidence,
- recommended next step,
- authority boundary.

## Future Red / Blue Security Relationship

A future defensive research architecture may allow Red and Blue analysis to consume the same canonical evidence package:

```text
event / controlled test
        ↓
signals + evidence
        ↓
Decision Fabric
       / \
     Red  Blue
       \ /
 disagreement / agreement
        ↓
independent verification
        ↓
Policy Engine
        ↓
human security decision
```

Neither Red, Blue, the decision model, nor a general reasoning model is automatically authoritative.

## Future Anti-Cheat Use

A future anti-cheat system can use the same pattern without placing a general LLM in the real-time enforcement path:

```text
player telemetry
        ↓
deterministic + behavioral signal extraction
        ↓
specialized ML / bounded decision
        ↓
evidence package
        ↓
reasoning only for difficult investigations
        ↓
enforcement policy
        ↓
human/system action according to approved authority
```

Real-time detection should remain optimized for latency and evidence quality. General reasoning can remain asynchronous where appropriate.

## ServicesOS Relationship

Do **not** retrofit ServicesOS V1 or V2 merely to adopt this architecture.

ServicesOS may later consume proven pieces where they reduce cost, improve context selection, or strengthen policy boundaries. Any adoption should be justified by real product need and should preserve existing product contracts.

## Shared Infrastructure, Specialized Domains

The Intelligence Core should provide shared contracts and orchestration, not one universal model.

```text
                    SLAI Intelligence Core
                            |
       +--------------------+--------------------+
       |                    |                    |
     SLAIOS             SLAIForge          Future Security
                                                  |
                                             Anti-Cheat
       |
  selected future
 product integrations
```

Each domain retains ownership of:

- canonical product data,
- specialized signals,
- domain models,
- domain policies,
- risk thresholds,
- action authority.

## Design Rules

1. Authorization before sensitive retrieval.
2. Canonical facts before model inference.
3. Compact context before giant context dumps.
4. Typed decisions before free-form control outputs where practical.
5. Confidence is not authority.
6. Deterministic policy stays outside the model.
7. Reasoning providers are replaceable dependencies.
8. Validate model output before consequential action.
9. Humans remain responsible for consequential decisions.
10. Preserve evidence and provenance.
11. Escalate uncertainty instead of hiding it.
12. Build simple first; complexity is earned.
13. Do not create a universal abstraction before multiple real workflows prove the need.
14. Never let this future architecture distract from the active ServicesOS roadmap.

## Activation / Research Gate

Revisit this architecture after ServicesOS V2 is complete and stable enough to begin SLAIOS/SLAIForge work.

At that point:

1. validate the architecture against real SLAI internal workflows,
2. benchmark whether a bounded decision model materially improves cost/latency/reliability,
3. compare Jev-like external models, specialized SLAI models, deterministic routing, and general reasoning,
4. prototype one low-risk SLAIOS workflow,
5. measure context reduction, routing accuracy, model cost, latency, validation failures, and human correction rate,
6. only then decide which layers deserve implementation.

No security product, anti-cheat product, or universal intelligence platform should be built merely because the architecture is technically possible.
