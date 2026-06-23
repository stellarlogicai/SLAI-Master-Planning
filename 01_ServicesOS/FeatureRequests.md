# ServicesOS Feature Requests

## Purpose

This file stores ideas, improvements, and future features so they do not distract from launch.

Core rule:

```text
Document the idea.
Do not build it immediately.
Return to ServicesOS launch priorities.
```

---

# Priority Labels

## P0 — Critical

Needed before controlled beta or launch.

Examples:

- Payment bug
- Security issue
- Scheduling broken
- Employee cannot complete job

## P1 — Important

Should be built soon after beta if validated.

Examples:

- Better onboarding
- Improved job workflow
- Missing reporting feature

## P2 — Nice To Have

Useful but not urgent.

Examples:

- UI polish
- Optional customization
- Advanced filters

## P3 — Future

Good idea but not needed soon.

Examples:

- Advanced AI routing
- Employee performance intelligence
- Inventory automation
- SLAIOS integration

---

# Request Template

```md
## Feature Name

Date:
Submitted By:
Source:

Priority:
Status:

### Problem

What problem does this solve?

### User

Who needs this?

- Owner
- Manager
- Employee
- Customer
- SLAI internal

### MVP Version

What is the smallest useful version?

### Future Version

What could this become later?

### Dependencies

What does this require?

### Risk

What could go wrong?

### Notes

Extra thoughts.
```

---

# Feature Request Backlog

## Feature Name: AI Route Optimization

Date:
Submitted By: Jamie
Source: Planning

Priority: P3
Status: Archived for later

### Problem

Cleaning companies need efficient job routes, but automatic route optimization can become complex.

### User

Owner / Manager

### MVP Version

Manual route ordering and job sequencing.

### Future Version

AI suggests route order based on distance, traffic, employee skill, customer priority, and time windows.

### Dependencies

- Job locations
- Employee schedules
- Map/route API
- Travel time estimates

### Risk

Complexity could delay launch.

### Notes

Do not build before beta.

---

## Feature Name: Full Payroll Automation

Date:
Submitted By: Jamie
Source: Planning

Priority: P3
Status: Archived for later

### Problem

Businesses want payroll support, but full payroll has tax/compliance complexity.

### User

Owner

### MVP Version

Time tracking events and exportable reports.

### Future Version

Payroll integrations with Gusto, QuickBooks, or direct payroll services.

### Dependencies

- Time tracking
- Employee records
- Payroll provider integration

### Risk

Compliance-heavy. Do not build too early.

---

## Feature Name: Inventory Scanning

Date:
Submitted By: Jamie
Source: Planning

Priority: P2/P3
Status: Later

### Problem

Cleaning companies need to track supplies and equipment.

### User

Owner / Manager / Employee

### MVP Version

Employee submits "Need Restock" report.

### Future Version

Barcode scanning, supply levels, auto reorder suggestions, equipment tracking.

### Dependencies

- Inventory records
- Mobile scanning
- Supplier data

### Risk

Could expand scope quickly.

---

## Feature Name: Customer Chat

Date:
Submitted By: Jamie
Source: Planning

Priority: P3
Status: Later

### Problem

Customers may want direct communication, but customer chat adds complexity.

### User

Customer / Office

### MVP Version

Office handles customer communication.

### Future Version

Controlled customer portal messaging with AI summaries.

### Dependencies

- Customer accounts
- Message threading
- Notifications
- Moderation rules

### Risk

Live chat can increase support burden.

---

## Feature Name: Employee Growth / Leadership Detection

Date:
Submitted By: Jamie
Source: SLAIOS Planning

Priority: P3
Status: Future

### Problem

Strong employees who help others should be recognized and considered for promotion.

### User

Owner / Manager / Employees

### MVP Version

Track positive actions manually: suggestions, training, customer feedback, helping teammates.

### Future Version

AI summarizes leadership potential and recommends team lead/manager candidates.

### Dependencies

- Employee history
- Peer feedback
- Suggestion system
- Training data

### Risk

Must avoid surveillance-style scoring.

---

# Launch Protection Rule

If a feature does not help with:

```text
Wife beta
customer beta
payment reliability
employee workflow
security
launch stability
```

it goes here instead of being built now.
