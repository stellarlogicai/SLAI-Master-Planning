# Zebra Android Workflow App

## Opportunity

If stores already use Android-based Zebra handhelds, a future RetailOS / PharmacyOS app can use hardware employees already understand.

This makes adoption more realistic because scanning is already part of the employee habit.

## Design Principle

> Zebra app = fast, focused, thumb-friendly, scan-first.

## Employee Home Screen Ideas

- Scan Item
- Today’s Outdates
- Cooler / Freezer Checks
- RGM / Returns
- Hazardous Tote
- Store Walk
- Manager Verification
- Issue Report
- Photos / Proof

## Scan-First Workflow

```text
Open app
↓
Scan product / location / cooler tag
↓
System identifies task context
↓
System applies rules
↓
Employee gets next action
↓
Action is logged
```

## Example Outdate Flow

```text
Scan item
↓
System identifies SKU and department
↓
System applies pull window
↓
System tells route: RGM / Trash / Toxic Tote / Manager Review
↓
Employee confirms placement
↓
Manager verifies if required
```

## Example Cooler Flow

```text
Open Cooler Check
↓
Scan cooler location QR/tag
↓
View sensor reading
↓
If out of range, follow corrective action steps
↓
Log action taken
```

## UI Requirements

- Big buttons
- Minimal typing
- Clear next step
- Clear error states
- Works with interruptions
- Quick resume after interruption
- Scan confirmation feedback
- Simple manager override path

