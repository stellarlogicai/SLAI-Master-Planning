# Disposal Routing and Scan-Out Workflow

## Pain Point

Finding the outdate is only part of the job. Employees also need to know what to do with the item after it is pulled.

## Desired Workflow

1. Employee pulls product.
2. Employee scans product barcode.
3. System confirms reason.
4. System applies disposal rule.
5. System displays exact routing instruction.
6. Employee places item in correct location.
7. Employee marks action complete.
8. Manager verifies if required.

## Disposal / Routing Categories

- Trash
- RGM / Return Goods
- Toxic / Hazardous Waste
- Pharmacy Tote
- Vendor Return Tote
- Recall Hold
- Donation
- Markdown / Clearance
- Damaged Goods
- Manager Review Required

## Example Instruction

```text
Item: First Aid Product
Reason: Outdated
Action: Scan out as outdate
Route: RGM tote
Location: Backroom - Return Goods Area
Manager verification: Required
```

## Audit Trail

Store who scanned it, when, why it was removed, where it was routed, and whether verification was completed.
