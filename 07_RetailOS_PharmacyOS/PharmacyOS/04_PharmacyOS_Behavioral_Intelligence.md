# PharmacyOS Behavioral Intelligence

Mission: Protect patients through behavioral intelligence.

Pipeline: Behavior -> Baseline -> Deviation -> Suspicion -> Investigation -> Human Review

Track employee behavior, prescription behavior, inventory and controlled substances.

```js
function score(normal,current){return Math.min(Math.abs(current-normal)/Math.max(normal,1),1)}
```
