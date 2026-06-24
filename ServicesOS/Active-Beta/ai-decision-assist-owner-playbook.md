# ServicesOS AI Decision Assist + Owner Playbook

Status: Product principle / design notes
Date: 2026-06-24
Owner: Jamie Brown / Stellar Logic AI

## Core Philosophy

ServicesOS should use AI as a decision-assist layer, not as a replacement for owners or employees.

The pattern is:

```text
AI notices.
AI suggests.
Human approves.
System records.
```

AI should be sprinkled into the system at the moments where it makes the owner's or employee's job easier, faster, safer, or less mentally draining.

AI should not silently take over high-risk decisions.

## Product Identity

ServicesOS is not simply "cleaning software with AI."

It should become:

```text
An AI-assisted operating system for service businesses where humans stay in charge, but the system removes friction wherever it can.
```

The goal is not to replace the business owner. The goal is to help the owner make better decisions faster and reduce repeated manual adjustments over time.

## Human Approval Rule

AI may suggest:

- estimates
- routes
- crews
- time windows
- equipment lists
- customer messages
- payroll notes
- pricing improvements
- job-cost warnings
- dashboard alerts

AI should not automatically finalize without human approval:

- customer-facing schedule changes
- quote sends
- payment requests
- payroll approval
- employee decisions
- customer notifications
- price changes
- major reschedules

Low-risk automation can become more automatic later, but high-impact decisions should remain owner-approved.

## The Owner Playbook

ServicesOS should build a tenant-specific Owner Playbook.

The Owner Playbook is the business's operating memory:

```text
This is how this owner runs this business.
```

It should learn:

- owner priorities
- business rules
- safety limits
- pricing tendencies
- scheduling preferences
- crew preferences
- customer-service style
- risk tolerance
- buffer preferences
- discount habits
- quote adjustment patterns
- equipment habits
- recurring customer handling

## Example Owner Playbook Rules

For wife-beta, the AI may eventually learn rules such as:

- Health and safety matter more than squeezing in one extra job.
- Do not overload the day.
- Prefer confirmed driver before finalizing customer time slots.
- Prefer two-person crews for deep cleans.
- Use wider customer arrival windows until route and crew are confirmed.
- Family/friend discounts are allowed but should be tracked.
- Pet hair increases labor estimates.
- Heavy clutter increases estimate and schedule buffer.
- Deep cleans should usually be scheduled earlier in the day.
- Do not promise exact arrival times until crew confirms.
- If helper calls out, recalculate the day before notifying customers.

## How AI Learns

Every owner action can become a learning signal.

Example:

```text
AI suggests: Schedule 3 jobs Friday.
Owner changes: Only 2 jobs; move deep clean to Monday.
Reason: Too much physical strain.
```

The system can learn:

```text
Do not stack deep clean + two standard cleans on one day for this owner unless a larger confirmed crew is available.
```

## Feedback Capture

Every AI suggestion should support feedback:

```text
Approve
Edit
Reject
Why?
```

When edited or rejected, ServicesOS should ask for a lightweight reason:

- Too expensive
- Too cheap
- Too much driving
- Too much physical strain
- Crew issue
- Customer preference
- Equipment issue
- Not enough buffer
- Not enough profit
- Too risky
- Other

The owner should not have to write a paragraph every time. Structured feedback is faster and easier to learn from.

## Remember This Preference

For repeated patterns, ServicesOS can ask:

```text
Remember this preference?
```

Example:

```text
You moved this deep clean to the morning.
Remember preference?

[Yes — schedule deep cleans earlier]
[No — one-time change]
```

This keeps the AI from over-learning from a one-off decision.

## Adjustment Reduction Loop

The long-term value loop:

```text
Owner adjusts AI suggestion
↓
ServicesOS learns why
↓
Next suggestion is closer
↓
Owner adjusts less
↓
Owner gets more time back
```

The goal is not perfect AI. The goal is that the owner spends less time rebuilding the same decisions every day.

## Metrics To Track

### Adjustment Rate

How often the owner changes AI suggestions.

Example:

```text
Estimate suggested: $240
Owner changed to: $255
Adjustment: +6.25%
```

Adjustment rate should decrease over time.

### Approval Rate

How often the owner accepts the AI suggestion without changes.

Example:

```text
AI day plan approved as-is: yes/no
```

Higher approval rate means ServicesOS is learning the business better.

### Decision Time Saved

How long it takes the owner to approve a decision compared to manual work.

Example:

```text
Old way: 18 minutes to schedule day
AI-assisted: 4 minutes
Time saved: 14 minutes
```

This becomes a future customer-facing value metric.

### Override Reasons

Track why owners override AI.

This teaches the Owner Playbook and helps improve suggestions.

## AI Across ServicesOS

### Estimate Engine AI

AI helps with:

- photo analysis
- clutter/difficulty estimate
- pet hair risk
- room condition
- add-on suggestions
- labor time estimate
- price range suggestion
- quote explanation
- owner review notes

Flow:

```text
AI suggests estimate
↓
Owner reviews
↓
Owner adjusts if needed
↓
Owner sends quote
```

### Dashboard AI

AI helps the owner know what matters today.

Example:

```text
Today needs attention:
- 3 quotes pending review
- 1 crew member has not confirmed
- Tomorrow's route may be overloaded
- 1 unpaid balance is still open
```

### Schedule / AI Day Planner

AI helps build the day:

- job order
- crew assignments
- customer time windows
- route risk
- overloaded day warnings
- call-out adjustments
- customer notification readiness

Owner approves before customers are told final time slots.

### Route Helper AI

AI helps decide:

```text
Who should go where next?
```

It should consider:

- current GPS
- customer windows
- crew size
- job difficulty
- drive time
- fixed vs flexible jobs
- call-outs

AI should not silently reorder promised appointments.

### Crew / Employee AI

AI can help employees by surfacing job-specific guidance:

```text
Next job has pets and heavy dust.
Bring pet hair tool, extra microfiber towels, and bathroom kit.
```

or:

```text
You are running 18 minutes behind. Ask owner before texting customer.
```

### Equipment AI

AI generates the daily loadout:

```text
Today's equipment:
- vacuum
- mop system
- bathroom kit
- kitchen degreaser
- pet hair tool
- wood polish kit
- extra towels
```

It can also catch risks:

```text
Helper called out and usually brings the large vacuum.
Confirm equipment before approving the route.
```

### Payroll / Job Costing AI

AI helps review the numbers:

```text
Job ran 42 minutes over estimate.
Labor cost increased by $18.
Future similar quotes should increase by $25-$40.
```

Owner approves payroll and pricing changes.

### Messaging AI

AI drafts messages, but the owner sends them.

Examples:

- quote message
- appointment confirmation
- running-late text
- reschedule message
- review request
- payment reminder

## AI Day Planner Output Example

```text
Suggested Day Plan — Tuesday

Crew:
- Wife — Lead Cleaner
- Helper — Driver / Cleaner

GPS Source:
- Helper phone

Suggested Route:
1. Sarah Miller — 9:00-10:30 AM
2. Johnson House — 11:00 AM-1:30 PM
3. Smith Recurring Clean — 2:15-3:45 PM

Estimated drive time:
42 minutes

Estimated cleaning time:
5.5 hours

Estimated total day:
6.2 hours

Equipment:
- standard cleaning kit
- pet hair tool
- mop system
- extra microfiber towels
- wood polish kit

Warnings:
- Job 2 may run long due to clutter.
- Add 30-minute buffer before Job 3.
- Do not send customer time slots until helper confirms.

Owner actions:
[Approve Plan]
[Edit Route]
[Recalculate Solo]
[Ask Helper to Confirm]
[Move Job]
```

## Core Product Principle

ServicesOS should reduce owner adjustment load over time.

Every accepted, edited, or rejected AI suggestion becomes feedback that improves future recommendations.

Future sales message:

```text
ServicesOS does not just help you run your business.
It learns how you run your business, then reduces the daily decisions you have to manually rebuild.
```

## Implementation Guardrail

Build the Owner Playbook in layers.

Start by recording owner decisions and reasons. Do not jump straight to autonomous decision-making.

Suggested implementation order:

1. AI suggestion logging
2. owner approval/edit/reject tracking
3. override reason capture
4. preference confirmation prompts
5. tenant-specific Owner Playbook rules
6. improved future recommendations
7. low-risk automation only after trust is earned
