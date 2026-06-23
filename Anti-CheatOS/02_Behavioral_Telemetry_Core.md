# Behavioral Telemetry Core

## Purpose
Collect, normalize, and analyze player behavior.

## Telemetry Sources

### Mouse
- dx/dy movement
- velocity
- acceleration
- jerk
- flick distance
- micro-corrections
- smoothness
- entropy

### Keyboard
- press timing
- release timing
- strafe rhythm
- crouch/jump timing
- ability usage

### Game State
- player position
- enemy position
- visibility
- weapon
- recoil state
- ADS state
- hit events
- kill events

## Raw Event Schema

```js
{
  tenantId: "studio_123",
  matchId: "match_456",
  playerId: "player_789",
  timestamp: 1782450112345,
  input: {
    mouseDx: 3.2,
    mouseDy: -1.4,
    buttons: ["left_mouse"],
    keys: ["W", "A"]
  },
  gameState: {
    viewAngles: { pitch: 4.2, yaw: 182.1 },
    weapon: "rifle",
    isADS: true,
    isFiring: true,
    visibleEnemies: ["enemy_123"]
  },
  performance: {
    fps: 144,
    pingMs: 32
  },
  schemaVersion: 1
}
```

## Feature Object

```js
{
  playerId: "player_789",
  matchId: "match_456",
  aimFeatures: {
    avgVelocity: 3.4,
    avgAcceleration: 1.2,
    avgJerk: 0.8,
    aimEntropy: 0.42,
    microCorrectionRate: 0.17,
    trackingSmoothness: 0.91
  },
  combatFeatures: {
    avgReactionTimeMs: 180,
    targetSwitchTimeMs: 220,
    headshotRate: 0.41,
    recoilCompensationScore: 0.76
  }
}
```

## Velocity Example

```js
export function calculateVelocity(points) {
  const velocities = [];
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    const dt = points[i].t - points[i - 1].t;
    if (dt <= 0) continue;
    velocities.push(Math.sqrt(dx * dx + dy * dy) / dt);
  }
  return velocities;
}
```

## Entropy Example

```js
export function calculateEntropy(values, bucketSize = 0.1) {
  const buckets = {};
  for (const value of values) {
    const bucket = Math.round(value / bucketSize) * bucketSize;
    buckets[bucket] = (buckets[bucket] || 0) + 1;
  }

  const total = values.length;
  let entropy = 0;

  for (const count of Object.values(buckets)) {
    const p = count / total;
    entropy -= p * Math.log2(p);
  }

  return entropy;
}
```

## Baseline Example

```js
{
  playerId: "player_789",
  windowMatches: 25,
  baseline: {
    avgReactionTimeMs: 210,
    headshotRate: 0.32,
    aimEntropy: 0.67,
    microCorrectionRate: 0.21,
    recoilCompensationScore: 0.58
  },
  confidence: 0.84
}
```

## Risk Score Example

```js
export function scoreDeviation({ current, baseline, weight }) {
  const deviation = Math.abs(current - baseline) / Math.max(Math.abs(baseline), 1);
  return { deviation, contribution: deviation * weight };
}
```

## Storage Strategy
Raw telemetry can be large. Keep raw telemetry short-term, extracted features long-term, and retain raw evidence snapshots for investigations, tournaments, confirmed cases, and model training.
