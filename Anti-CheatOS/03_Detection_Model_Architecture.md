# Detection Model Architecture

## Purpose
Define a multi-model architecture for behavioral anti-cheat.

## Why Multiple Models
Different model types detect different signals.

- CNN-style models: local aim patterns and recoil shapes
- RNN/LSTM/GRU models: timing and sequence behavior
- Transformers: long-range match context
- Gradient boosting: structured tabular features
- Rule engine: deterministic impossible or high-risk events

## Detection Stack

```txt
Raw telemetry
↓
Feature extraction
↓
Rule engine
↓
Specialist models
  ├── Aim Model
  ├── Reaction Model
  ├── Recoil Model
  ├── Movement Model
  └── Target Switching Model
↓
Ensemble aggregator
↓
Risk score
↓
Investigation engine
```

## Structured Model Output

```json
{
  "model": "aim_model",
  "riskScore": 0.74,
  "confidence": 0.81,
  "finding": "Aim movement shows unusually low entropy near targets.",
  "evidence": [
    "Aim entropy 42% below player baseline",
    "Micro-correction pattern resembles assisted aim"
  ],
  "recommendedAction": "Continue monitoring"
}
```

## Aggregator

```js
export function aggregateModelOutputs(outputs) {
  const valid = outputs.filter((o) => o.confidence > 0.4);

  const weightedRisk = valid.reduce((sum, o) => sum + o.riskScore * o.confidence, 0);
  const totalConfidence = valid.reduce((sum, o) => sum + o.confidence, 0);

  return {
    riskScore: totalConfidence ? weightedRisk / totalConfidence : 0,
    confidence: valid.length ? Math.min(totalConfidence / valid.length, 1) : 0,
    evidence: valid.flatMap((o) => o.evidence || []),
    modelFindings: valid
  };
}
```

## Thresholds

```txt
Risk < 0.35: Normal
0.35 - 0.55: Slightly unusual
0.55 - 0.75: Suspicious, monitor
0.75 - 0.90: Investigation required
0.90+: Human review recommended
```

## No Instant Ban Rule
Permanent bans should require strong evidence, multi-session consistency or strong single-session proof, evidence timeline, replay markers, and human/studio review.

## Training Data
Include normal players, high-skill players, low-skill players, synthetic cheats, known cheats, controlled test cheats, tournaments, and edge cases.

## Final Principle
The strongest detection system is not one model. It is specialized models producing reviewable evidence.
