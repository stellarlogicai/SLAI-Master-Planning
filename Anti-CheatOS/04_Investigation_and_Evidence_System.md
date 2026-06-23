# Investigation and Evidence System

## Purpose
Define how SLAI Anti-Cheat tails suspicious players, gathers evidence, and protects honest players from false bans.

## Investigation States

```txt
none
watchlist
monitoring
investigating
review_required
action_recommended
cleared
confirmed
```

## Trigger Example

```js
export function shouldOpenInvestigation({ riskScore, confidence, previousFlags }) {
  if (riskScore >= 0.85 && confidence >= 0.75) {
    return { open: true, priority: "high", reason: "High risk and confidence" };
  }

  if (riskScore >= 0.65 && previousFlags >= 2) {
    return { open: true, priority: "medium", reason: "Repeated suspicious behavior" };
  }

  if (riskScore >= 0.55) {
    return { open: true, priority: "low", reason: "Monitor for context" };
  }

  return { open: false, priority: "none", reason: "Insufficient evidence" };
}
```

## Investigation Record

```js
{
  investigationId: "inv_123",
  playerId: "player_789",
  status: "investigating",
  priority: "medium",
  riskScore: 0.74,
  confidence: 0.68,
  suspicionTypes: [
    "aim_entropy_anomaly",
    "reaction_time_anomaly",
    "recoil_compensation_anomaly"
  ],
  evidence: [],
  timeline: [],
  recommendation: "Continue monitoring"
}
```

## Private Investigator Mode
When a player is under investigation, the AI should follow them across sessions:

- More matches
- More weapons
- Different maps
- Different opponents
- Visibility states
- Recoil patterns
- Target switching
- Replay windows

## Evidence Event

```js
{
  timestamp: "2026-06-18T00:15:22Z",
  matchId: "match_456",
  eventType: "aim_entropy_drop",
  severity: "medium",
  details: {
    playerBaseline: 0.67,
    observedValue: 0.31,
    deviationPercent: 53.7
  },
  replayMarker: {
    startTimeMs: 182000,
    endTimeMs: 190000
  },
  explanation: "Aim entropy dropped significantly during target tracking."
}
```

## Human Review Packet

```js
{
  playerId: "player_789",
  summary: "Repeated aim entropy, reaction time, and recoil anomalies across 4 matches.",
  riskScore: 0.91,
  confidence: 0.86,
  evidenceHighlights: [
    "Aim entropy 50% below baseline",
    "Reaction time repeatedly below expected human range",
    "Recoil compensation unusually precise"
  ],
  possibleBenignExplanations: [
    "Player improved rapidly",
    "Sensitivity changed",
    "Hardware changed",
    "High-skill player"
  ],
  recommendation: "Human review recommended"
}
```

## Reviewer Actions
Clear, continue monitoring, escalate, temporary restriction, confirm cheat, ban, or request more evidence.

## Final Principle
The investigation system protects honest players as much as it catches cheaters.
