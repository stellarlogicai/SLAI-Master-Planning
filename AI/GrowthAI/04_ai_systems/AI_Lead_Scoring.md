# AI Lead Scoring

## Purpose

Lead scoring helps Jamie prioritize the best opportunities.

## MVP Scoring

MVP can start rule-based.

Example factors:

- Industry fit: 0-20
- Company size fit: 0-15
- Pain point evidence: 0-25
- Tech gap: 0-15
- Local/reachable market: 0-10
- Engagement: 0-15

Total: 100

## Phase 2 AI Scoring

AI can refine scoring based on:

- Past wins
- Past losses
- Objections
- Response patterns
- Demo conversion
- Industry segment
- Message style

## Confidence

Score and confidence are separate.

Example:

```json
{
  "fitScore": 91,
  "confidence": 0.62,
  "reason": "Strong apparent fit but missing employee count and current software stack."
}
```

## Human Review

If confidence is low, GrowthAI should ask for human review rather than over-prioritizing.
