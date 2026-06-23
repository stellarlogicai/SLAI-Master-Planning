# Anti-Cheat Implementation Roadmap

## Strategy
Start with deterministic telemetry and feature extraction before advanced AI.

```txt
Telemetry collector
↓
Feature extraction
↓
Baseline engine
↓
Rule-based risk scoring
↓
Investigation dashboard
↓
AI model layer
↓
Tournament module
↓
Studio pilot
```

## Phase 1: Telemetry Prototype
Build:

- Input capture
- Mouse telemetry
- Keyboard telemetry
- Simple game state ingestion
- Local session recorder
- Feature extraction

Success:

```txt
Can we record player behavior and calculate useful features?
```

## Phase 2: Feature Engine
Build:

- Aim velocity
- Aim acceleration
- Jerk
- Entropy
- Micro-correction rate
- Reaction time
- Recoil compensation
- Target switching
- Movement entropy

## Phase 3: Baseline Engine
Build:

- Player baseline
- Weapon baseline
- Skill tier baseline
- Match type baseline

## Phase 4: Rule-Based Detection

```js
export function ruleBasedDetection(features, baseline) {
  const flags = [];

  if (features.avgReactionTimeMs < baseline.avgReactionTimeMs * 0.5) {
    flags.push("reaction_time_far_below_baseline");
  }

  if (features.aimEntropy < baseline.aimEntropy * 0.5) {
    flags.push("aim_entropy_far_below_baseline");
  }

  if (features.recoilCompensationScore > baseline.recoilCompensationScore * 1.5) {
    flags.push("recoil_compensation_above_baseline");
  }

  return {
    suspicious: flags.length >= 2,
    flags
  };
}
```

## Phase 5: Investigation Dashboard
Show:

- Player risk score
- Match history
- Evidence events
- Timeline
- Replay markers
- Feature deviations
- Reviewer decision buttons

## Phase 6: Model Layer
Add aim, recoil, reaction, movement, and ensemble models.

## Phase 7: Replay Evidence
Build event markers, replay timestamps, suspicious windows, and evidence summaries.

## Phase 8: Tournament Integrity
Add tournament dashboard, live risk scoring, admin queue, and match reports.

## Phase 9: Studio Pilot
Prepare integration guide, telemetry requirements, privacy policy, performance benchmarks, and example reports.

## Folder Structure

```txt
anti-cheat/
  core/
    telemetry/
    featureExtraction/
    baselines/
    riskScoring/
    investigation/
    evidence/
    replay/

  models/
    aim/
    recoil/
    reaction/
    movement/
    ensemble/

  modules/
    tournamentIntegrity/
    studioDashboard/
    fpsCoach/
    securityCrossover/
```

## MVP Definition
A recorded gameplay session can be processed into behavior features, baseline comparison, risk score, evidence timeline, and human-readable explanation.

## Final Principle
Build the core first. AI improves the system; AI should not be required for the system to exist.
