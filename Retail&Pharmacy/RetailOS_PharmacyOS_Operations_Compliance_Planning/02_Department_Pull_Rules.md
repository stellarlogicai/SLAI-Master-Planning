# Department Pull Rules

## Problem

Different departments have different pull windows. Employees should not need to memorize every policy.

## Feature Concept

Each department has a configured pull rule.

```text
expiration date - department pull window = pull date
```

## Example Rule Fields

- Department name
- Default pull window
- Product category overrides
- Risk level
- Check frequency
- Manager verification required
- Disposal routing defaults
- SOP link
- Last policy update date

## Employee Experience

The employee should see:

```text
Pull this item today.
Reason: Expiration falls inside First Aid pull window.
Scan item out, then place in RGM tote.
```

The employee should not need to understand the whole policy to do the right thing.
