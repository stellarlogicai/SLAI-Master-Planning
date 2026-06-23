# FPS Coach Crossover

## Concept
The same telemetry used for anti-cheat can help honest players improve.

Anti-cheat asks:

```txt
Is this suspicious?
```

FPS Coach asks:

```txt
How can this player improve?
```

## Shared Signals
- Aim path
- Reaction time
- Target switching
- Crosshair placement
- Movement
- Recoil control
- Tracking
- Flick accuracy
- Engagement timing
- Positioning

## Features
- Mistake detection
- Drill recommendations
- Loadout optimization
- Performance trends
- Match review
- Recoil coaching
- Positioning feedback

## Coaching Score Example

```js
export function generateCoachingScore(features) {
  return {
    aim: scoreAim(features),
    movement: scoreMovement(features),
    recoil: scoreRecoil(features),
    positioning: scorePositioning(features),
    reaction: scoreReaction(features)
  };
}

function scoreAim(features) {
  return Math.max(0, Math.min(100, 100 - features.aimErrorRate * 100));
}
```

## Feedback Example

```json
{
  "summary": "Your aim was strong, but target switching was slow.",
  "strengths": ["Good recoil control", "Stable tracking"],
  "weaknesses": ["Slow target switching", "Crosshair placement too low"],
  "recommendedDrills": ["Target switching drill", "Crosshair placement review"]
}
```

## Data Separation
Coach data should not expose anti-cheat internals. Anti-cheat should not punish players based on coaching data alone.

## Final Principle
Anti-cheat protects the game. FPS Coach helps players grow.
