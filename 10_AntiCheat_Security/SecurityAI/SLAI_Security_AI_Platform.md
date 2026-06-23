# SLAI Security AI Platform

**Version:** 1.0  
**Purpose:** Define a security platform based on behavioral intelligence, anomaly detection, human investigation, red team AI, white team AI, and customer-facing security services.

---

# 1. Vision

SLAI Security AI is not just a cybersecurity dashboard.

It is a behavioral security intelligence platform.

The goal is to detect suspicious behavior, investigate it, explain it, and help humans respond before serious damage occurs.

Core philosophy:

```txt
Rules catch known problems.
Behavior finds unknown problems.
```

---

# 2. Platform Architecture

```txt
Telemetry Collectors
↓
Event Normalization
↓
Behavior Baseline Engine
↓
Anomaly Detection
↓
Investigation Engine
↓
Risk Scoring
↓
Security AI Specialists
↓
Human Analyst Review
↓
Response / Report / Monitoring
```

---

# 3. Security Data Sources

Potential data sources:

- Authentication logs
- Device fingerprints
- IP addresses
- Geo-location
- VPN usage
- File access logs
- API request logs
- Cloud audit logs
- Endpoint telemetry
- Network telemetry
- Permission changes
- Admin actions
- SaaS application logs
- Email security events

---

# 4. Security Event Schema

```js
{
  tenantId: "tenant_123",
  eventId: "evt_001",
  subjectId: "user_456",
  subjectType: "employee",

  eventType: "login",
  timestamp: "2026-06-18T02:15:00Z",

  metadata: {
    ipAddress: "203.0.113.10",
    country: "Germany",
    deviceId: "device_999",
    browser: "Firefox",
    os: "Linux",
    mfaPassed: true
  },

  riskSignals: {
    newDevice: true,
    unusualLocation: true,
    unusualTime: true,
    sensitiveAccess: false
  },

  schemaVersion: 1
}
```

---

# 5. Behavior Baseline Document

```js
{
  tenantId: "tenant_123",
  subjectId: "user_456",

  baseline: {
    commonLoginHours: [8, 9, 10, 11, 12, 13, 14, 15, 16],
    commonCountries: ["US"],
    commonDevices: ["device_123", "device_456"],
    commonApps: ["crm", "reports", "invoices"],
    avgDailyDownloadMb: 150,
    avgDailyApiCalls: 230
  },

  updatedAt: "2026-06-18T00:00:00Z",
  confidence: 0.91,
  schemaVersion: 1
}
```

---

# 6. Risk Signal Example

```js
export function evaluateLoginRisk(event, baseline) {
  const signals = [];

  if (!baseline.commonCountries.includes(event.metadata.country)) {
    signals.push({
      type: "unusual_location",
      severity: 0.30,
      explanation: "Login country is outside normal pattern."
    });
  }

  if (!baseline.commonDevices.includes(event.metadata.deviceId)) {
    signals.push({
      type: "new_device",
      severity: 0.25,
      explanation: "Device has not been seen before."
    });
  }

  const hour = new Date(event.timestamp).getUTCHours();

  if (!baseline.commonLoginHours.includes(hour)) {
    signals.push({
      type: "unusual_time",
      severity: 0.15,
      explanation: "Login time is outside normal pattern."
    });
  }

  const score = Math.min(
    1,
    signals.reduce((sum, signal) => sum + signal.severity, 0)
  );

  return {
    score,
    signals,
    recommendation:
      score > 0.7 ? "Investigate immediately" :
      score > 0.4 ? "Monitor and gather more context" :
      "No immediate action"
  };
}
```

---

# 7. Security AI Specialists

## Behavior AI

Focus:

- User baselines
- Device patterns
- Activity trends
- Historical behavior

Output:

```json
{
  "agent": "behavior_ai",
  "confidence": 0.84,
  "finding": "Login behavior differs strongly from baseline.",
  "evidence": ["new_device", "unusual_location", "unusual_time"]
}
```

## Threat AI

Focus:

- Known attack patterns
- Malware indicators
- Vulnerability exploitation
- Suspicious network behavior

## Identity AI

Focus:

- MFA
- Role changes
- Privilege escalation
- Dormant accounts
- Admin permissions

## Compliance AI

Focus:

- SOC2
- HIPAA
- PCI
- ISO27001
- Audit preparation

## Forensics AI

Focus:

- Timeline generation
- Root cause
- Blast radius
- Evidence chain
- Incident summary

---

# 8. Investigation Engine

The investigation engine should gather context before recommending action.

```js
export async function buildInvestigation({
  tenantId,
  subjectId,
  triggeringEvent,
  getRecentEvents,
  getBaseline,
  getKnownContext
}) {
  const baseline = await getBaseline(tenantId, subjectId);
  const recentEvents = await getRecentEvents(tenantId, subjectId, 72);
  const knownContext = await getKnownContext(tenantId, subjectId);

  return {
    tenantId,
    subjectId,
    triggeringEvent,
    baseline,
    recentEvents,
    knownContext,
    createdAt: new Date().toISOString(),
    status: "open"
  };
}
```

---

# 9. Investigation Report Format

```json
{
  "investigationId": "inv_123",
  "subjectId": "user_456",
  "riskScore": 0.82,
  "confidence": 0.76,
  "summary": "User login and file access behavior deviated from baseline.",
  "evidence": [
    "New device",
    "Foreign login",
    "Large file download",
    "Sensitive folder access"
  ],
  "possibleBenignExplanations": [
    "VPN usage",
    "Travel",
    "New company laptop",
    "Approved after-hours work"
  ],
  "recommendedNextSteps": [
    "Verify with manager",
    "Check device enrollment",
    "Review downloaded files",
    "Increase monitoring"
  ],
  "recommendedAction": "Human review required"
}
```

---

# 10. Response Philosophy

AI should recommend.

Humans decide.

AI may recommend:

- Monitor
- Ask for MFA
- Notify manager
- Temporarily restrict access
- Open incident
- Escalate to analyst

AI should not autonomously:

- Fire employees
- Permanently ban users
- Delete data
- Accuse people
- Make legal decisions

---

# 11. MVP Build Steps

## Phase 1: Event Collection

Build:

- Event schema
- Firestore or database storage
- Basic telemetry ingestion
- Tenant isolation
- Audit logs

## Phase 2: Baseline Engine

Build:

- Per-user baselines
- Per-role baselines
- Per-device baselines
- Rolling time windows

## Phase 3: Anomaly Detection

Build:

- Rule-based deviation scoring
- Risk signal generation
- Confidence scoring

## Phase 4: Investigation Engine

Build:

- Evidence timeline
- Context gathering
- Human review queue
- Case status tracking

## Phase 5: AI Explanation Layer

Build:

- Natural language incident summaries
- Recommended next steps
- Possible benign explanations

## Phase 6: Red / White / Purple Team AI

Build:

- Controlled adversary simulation
- Defensive response analysis
- Lessons learned reports

---

# 12. Final Principle

SLAI Security AI should not be a fear machine.

It should be an understanding machine.

```txt
Detect unusual behavior.
Gather context.
Explain the evidence.
Help humans decide.
```
