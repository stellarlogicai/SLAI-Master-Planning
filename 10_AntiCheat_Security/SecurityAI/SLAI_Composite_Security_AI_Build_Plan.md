# SLAI Composite Security AI Build Plan

**Version:** 1.0  
**Purpose:** Provide a practical build path for a composite security AI system using coordinator AI, specialist AI, shared memory, morality/policy AI, and human review.

---

# 1. System Overview

```txt
User / Analyst / Customer
↓
Customer Facing AI
↓
Security Coordinator AI
↓
Specialist AIs
↓
Shared Memory
↓
Policy / Morality AI
↓
Coordinator Aggregation
↓
Human Review
↓
Decision / Report / Action
```

---

# 2. Key Models

## Customer Facing AI

Handles:

- Natural conversation
- Clarifying questions
- Report explanations
- Customer-safe summaries

Does not:

- Make security decisions
- Run attacks
- Override scope

## Coordinator AI

Handles:

- Routing
- Specialist selection
- Context packaging
- Response aggregation
- Confidence weighting
- Human escalation

## Behavior AI

Handles:

- Baselines
- Deviations
- Historical patterns
- Suspicion scoring

## Threat AI

Handles:

- Attack patterns
- Known vulnerabilities
- Threat actor behavior
- Exploit likelihood

## Red Team AI

Handles:

- Authorized adversary simulation
- Weakness discovery
- Controlled probing

## White Team AI

Handles:

- Detection
- Defensive recommendations
- Monitoring quality

## Purple Team AI

Handles:

- Lessons learned
- Detection gap analysis
- Training content
- Improvement tracking

## Policy / Morality AI

Handles:

- Scope enforcement
- Legal boundaries
- SLAI values
- Customer rights
- Human-first decision checks

---

# 3. Shared Memory

Shared memory stores:

- Customer environment profile
- Approved scope
- Past findings
- Known false positives
- Prior investigations
- Security baseline
- Lessons learned
- Policy constraints

---

# 4. Memory Record Example

```json
{
  "tenantId": "tenant_123",
  "memoryType": "security_lesson",
  "source": "purple_team_ai",
  "content": {
    "finding": "Token refresh anomalies were missed in prior test.",
    "recommendedDetection": "Alert on repeated failed refresh attempts.",
    "severity": "medium",
    "relatedSystems": ["auth_api"]
  },
  "createdAt": "2026-06-18T00:00:00Z"
}
```

---

# 5. Coordinator Task Router Example

```js
export function selectSecuritySpecialists(task) {
  const specialists = [];

  if (task.type === "login_anomaly") {
    specialists.push("behavior_ai", "identity_ai", "policy_ai");
  }

  if (task.type === "vulnerability_test") {
    specialists.push("red_team_ai", "white_team_ai", "policy_ai");
  }

  if (task.type === "incident_review") {
    specialists.push("forensics_ai", "behavior_ai", "threat_ai", "policy_ai");
  }

  if (task.requiresCustomerSummary) {
    specialists.push("customer_facing_ai");
  }

  return [...new Set(specialists)];
}
```

---

# 6. Parallel Specialist Execution

Specialists should run in parallel when possible.

```js
export async function runSpecialists(task, specialists, callModel) {
  const calls = specialists.map((specialist) => {
    return callModel({
      model: specialist,
      input: task
    });
  });

  const results = await Promise.allSettled(calls);

  return results.map((result, index) => ({
    specialist: specialists[index],
    status: result.status,
    output: result.status === "fulfilled" ? result.value : null,
    error: result.status === "rejected" ? result.reason.message : null
  }));
}
```

---

# 7. Structured Specialist Response

```json
{
  "specialist": "behavior_ai",
  "confidence": 0.84,
  "riskScore": 0.78,
  "summary": "User behavior deviates from baseline.",
  "evidence": [
    "Unusual login location",
    "New device",
    "Large file download"
  ],
  "recommendedAction": "Open investigation",
  "requiresHumanReview": true
}
```

---

# 8. Coordinator Aggregation

```js
export function aggregateSecurityResults(results) {
  const valid = results.filter((r) => r.status === "fulfilled" && r.output);

  const avgRisk =
    valid.reduce((sum, r) => sum + (r.output.riskScore || 0), 0) /
    Math.max(valid.length, 1);

  const avgConfidence =
    valid.reduce((sum, r) => sum + (r.output.confidence || 0), 0) /
    Math.max(valid.length, 1);

  const evidence = valid.flatMap((r) => r.output.evidence || []);

  const requiresHumanReview = valid.some(
    (r) => r.output.requiresHumanReview === true
  );

  return {
    riskScore: avgRisk,
    confidence: avgConfidence,
    evidence,
    requiresHumanReview,
    recommendation:
      avgRisk > 0.8 ? "Escalate immediately" :
      avgRisk > 0.5 ? "Investigate further" :
      "Monitor"
  };
}
```

---

# 9. Policy Check

```js
export function enforceEngagementPolicy(action, scope) {
  if (!scope.approvedTargets.includes(action.target)) {
    return {
      allowed: false,
      reason: "Target is outside approved scope."
    };
  }

  if (scope.forbiddenTechniques.includes(action.technique)) {
    return {
      allowed: false,
      reason: "Technique is forbidden by engagement scope."
    };
  }

  if (action.destructive === true) {
    return {
      allowed: false,
      reason: "Destructive actions require explicit human approval."
    };
  }

  return {
    allowed: true,
    reason: "Action is within approved scope."
  };
}
```

---

# 10. Latency Strategy

To reduce latency:

- Place models in same cloud region.
- Use same private network.
- Use shared cache.
- Use compact structured packets.
- Call specialists in parallel.
- Avoid over-calling unnecessary agents.
- Cache memory summaries.
- Use smaller compressed specialist models.
- Use deterministic rule engines before AI when possible.

Expected latency pattern:

```txt
Total latency ≈ slowest specialist + coordinator aggregation
```

Not:

```txt
Total latency = specialist A + specialist B + specialist C
```

---

# 11. Build Roadmap

## Phase 1: Deterministic Core

Build:

- Event schema
- Risk scoring
- Baseline engine
- Investigation queue
- Audit logs

## Phase 2: AI Explanation

Build:

- Incident summaries
- Evidence explanation
- Next-step recommendations

## Phase 3: Specialist Architecture

Build:

- Coordinator
- Behavior AI
- Policy AI
- Threat AI

## Phase 4: Red / White / Purple AI

Build:

- Controlled red team simulations
- White team detection
- Purple team reports

## Phase 5: Customer Service

Build:

- Scope management
- Customer reports
- Continuous validation dashboard
- Human approval workflows

---

# 12. Final Theory

A composite security AI can be more useful than a single monolithic model if:

- Specialists are narrow and accurate.
- Memory is shared.
- Coordinator routing is correct.
- Policy AI enforces boundaries.
- Humans approve high-impact actions.
- The system learns from outcomes.

This is a hypothesis.

SLAI should prove it through experiments.
