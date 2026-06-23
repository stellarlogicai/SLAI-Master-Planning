# Anti-Cheat and Security Crossover

## Core Idea
Anti-cheat and security are applications of the same behavioral intelligence theory.

Both ask:

```txt
What is normal?
What is abnormal?
How risky is the deviation?
What context explains it?
Should humans investigate?
```

## Shared Core

```txt
Telemetry
↓
Feature extraction
↓
Baseline
↓
Deviation
↓
Risk score
↓
Investigation
↓
Human review
```

## Domain Adapter Pattern

```txt
GameTelemetryAdapter
SecurityEventAdapter
RetailFraudAdapter
AIGovernanceAdapter
↓
Behavioral Intelligence Core
```

## Adapter Example

```js
export function gameTelemetryToSignals(features, baseline) {
  return [
    {
      name: "aim_entropy",
      current: features.aimEntropy,
      baseline: baseline.aimEntropy,
      weight: 0.25
    },
    {
      name: "reaction_time",
      current: features.avgReactionTimeMs,
      baseline: baseline.avgReactionTimeMs,
      weight: 0.25
    }
  ];
}

export function securityEventToSignals(event, baseline) {
  return [
    {
      name: "login_hour",
      current: event.loginHour,
      baseline: baseline.avgLoginHour,
      weight: 0.15
    },
    {
      name: "download_volume",
      current: event.downloadMb,
      baseline: baseline.avgDownloadMb,
      weight: 0.30
    }
  ];
}
```

## Future Products
The same core can power:

- Anti-cheat
- SecurityOS
- Retail fraud
- Pharmacy security
- AI governance
- Insider threat detection
- Tournament integrity

## Final Principle
Anti-cheat may be the first product. Behavioral intelligence is the deeper platform.
