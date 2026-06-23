# ServicesOS Security Model

## Purpose

This document defines how ServicesOS protects customer, employee, company, and payment data.

Core rule:

```text
No user should access data they do not need to do their job.
```

---

# Security Principles

- Tenant isolation is mandatory
- Every record must belong to a `companyId` unless truly global
- Employees only see assigned work
- Customers only see their own data
- Stripe secrets never touch frontend code
- Admin privileges should be limited
- All critical writes should be auditable
- AI assistants must obey the same permission rules as users

---

# User Roles

## Owner

Can manage the full company account.

Allowed:

- Manage company settings
- Manage Stripe Connect
- Manage subscription
- Manage employees
- Manage customers
- Manage jobs
- Manage estimates
- Manage contracts
- View payments
- View reports
- Access training
- Assign roles
- View audit logs

---

## Admin / Manager

Can manage operations but not company ownership/payment settings unless granted.

Allowed:

- Manage customers
- Create estimates
- Schedule jobs
- Assign employees
- View job history
- Review employee activity
- Manage training
- View basic reports
- Respond to employee messages

Restricted:

- Cannot change company owner
- Cannot access full billing settings unless allowed
- Cannot delete company
- Cannot change platform subscription unless allowed

---

## Team Lead

Can supervise assigned teams/jobs.

Allowed:

- View assigned team
- View assigned jobs
- Update job status
- Review checklist completion
- Message employees/office
- Report issues
- Assist with training
- Submit suggestions

Restricted:

- Cannot view all company financials
- Cannot change pricing
- Cannot manage Stripe
- Cannot access unrelated teams unless granted

---

## Employee / Cleaner

Can only access their own work.

Allowed:

- View assigned jobs
- View job details needed for service
- Complete checklists
- Upload job photos
- Send job messages
- Complete training
- Clock in/out
- Report issues
- Collect payment if authorized

Restricted:

- Cannot see unassigned jobs
- Cannot see full customer database
- Cannot edit pricing
- Cannot view company financial reports
- Cannot manage employees
- Cannot access Stripe settings

---

## Customer

Future optional role.

Allowed:

- View own estimates
- View own contracts
- View own invoices
- Make payments
- View scheduled jobs
- Request changes

Restricted:

- Cannot access other customers
- Cannot view employees except assigned public-facing names if allowed
- Cannot view company internal notes
- Cannot view operations data

---

# Data Access Matrix

| Resource | Owner | Manager | Team Lead | Employee | Customer |
|---|---:|---:|---:|---:|---:|
| Company Settings | Full | Limited | No | No | No |
| Customers | Full | Full | Limited | Assigned only | Own only |
| Estimates | Full | Full | View assigned | No | Own only |
| Contracts | Full | Full | View assigned | No | Own only |
| Jobs | Full | Full | Assigned team | Assigned only | Own only |
| Payments | Full | Limited | No | Job payment only | Own only |
| Employees | Full | Full | Assigned team | Own profile | No |
| Training | Full | Full | Assigned team | Own only | No |
| Messages | Full | Full | Assigned jobs | Assigned jobs | Own thread |
| Audit Logs | Full | Limited | No | No | No |

---

# Firestore Rule Concepts

## Tenant Isolation

Every protected record should satisfy:

```js
resource.data.companyId == user.companyId
```

or for new writes:

```js
request.resource.data.companyId == user.companyId
```

---

## Employee Assigned Job Access

Employees may read jobs only if:

```js
request.auth.uid in resource.data.assignedEmployeeIds
```

---

## Customer Access

Customers may read records only if:

```js
resource.data.customerUserId == request.auth.uid
```

or equivalent customer ownership mapping.

---

# Sensitive Data

Sensitive data includes:

- Customer addresses
- Access notes
- Pet notes
- Payment status
- Stripe IDs
- Employee phone numbers
- Employee time records
- Internal notes
- Job photos
- Contract documents

---

# Stripe Security

Rules:

- Never expose Stripe secret key in frontend
- Use Cloud Functions for PaymentIntent creation
- Use webhooks for payment status confirmation
- Store only Stripe IDs, not raw card data
- Use Stripe Connect account IDs securely
- Validate `companyId` before creating connected account payments
- Log payment events

---

# Employee App Security

Employee app must enforce:

- Employee only sees assigned jobs
- Employee only sees active company data
- Employee cannot modify price or balance due
- Employee cannot edit customer private fields beyond job notes/issues
- Employee cannot access other employees' schedules unless team lead/manager
- Employee photo uploads must be tied to assigned job
- Tap to Pay must verify employee permission

---

# AI Assistant Security

Future AI tools must obey:

```text
AI can only read what the user can read.
AI can only suggest actions the user is allowed to request.
AI cannot bypass role permissions.
AI actions must be logged.
```

Examples:

- Employee AI can answer job SOP questions
- Manager AI can summarize team blockers
- Owner AI can summarize company metrics
- Dev AI can access code based on developer permission

---

# Audit Logs

Audit these events:

- Login failures
- Role changes
- Payment creation
- Refunds
- Job status changes
- Customer deletion
- Employee termination
- Contract signing
- Stripe account updates
- Security rule failures if possible
- AI-generated changes once AI features exist

---

# Security Launch Checklist

- [ ] Firestore rules reviewed
- [ ] Storage rules reviewed
- [ ] Stripe secrets protected
- [ ] Environment variables verified
- [ ] Employee app access tested
- [ ] Owner access tested
- [ ] Manager access tested
- [ ] Cross-company data access tested
- [ ] Payment creation tested
- [ ] Webhook validation tested
- [ ] Role-permission matrix matches code
- [ ] Backup admin account exists
- [ ] Known security limitations documented

---

# Open Questions

- Will customers have accounts in V1?
- Can employees collect Tap to Pay payments by default?
- Can team leads see team member performance?
- Should managers see payment amounts?
- Should job photos be visible to customers?
- How much employee time data should owners see?

---

# Rule

Security should not be "fixed later."

Before wife beta:

```text
Good enough for controlled testing.
```

Before paying customers:

```text
Strict enough to protect real data.
```
