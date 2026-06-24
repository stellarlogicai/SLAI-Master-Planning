# ServicesOS Wife-Beta Admin Sidebar + Owner Workflow

Status: Planning approved
Date: 2026-06-24
Owner: Jamie Brown / Stellar Logic AI

## Decision Summary

The current admin sidebar is coded more like a full platform demo than a focused wife-beta owner workflow.

For wife-beta, the admin/owner should see only the tools needed to run the business day to day:

1. Dashboard
2. Create Estimate
3. Customers
4. Schedule
5. Payments
6. Settings

Everything else should be hidden, moved under Settings, grouped inside Schedule, or kept super-admin/developer-only.

This is not a feature deletion plan. It is a workflow simplification plan.

## Product Principle

The beta sidebar should teach the operating flow:

```text
Dashboard
↓
Create Estimate
↓
Customers
↓
Schedule
↓
Payments
↓
Settings
```

The visible pages must work as planned. Hiding unfinished tools is not enough if the remaining tools are incomplete or wired incorrectly.

## Visible Wife-Beta Sidebar

### 1. Dashboard

Keep visible.

Current Dashboard is strong, but it is doing too many jobs:

- stats
- lead table
- filters
- revenue chart
- lead drawer
- booking conversion
- status changes
- SMS preview
- delete actions

For beta, Dashboard should answer:

- What needs attention?
- What quote requests came in?
- What jobs are upcoming?
- What money is expected or collected?

Dashboard should support quote review, but it should not be the only place every task happens.

#### Status language

Current internal statuses may stay for now:

```text
new
quoted
booked
lost
```

Visible beta labels should be more owner-friendly:

| Internal Status | Wife-Beta Display Label |
| --- | --- |
| `new` | Pending Review |
| `quoted` | Quote Drafted / Quote Sent |
| `booked` | Scheduled |
| `lost` | Archived / Lost |

Avoid a risky backend migration at first. Use a display-label mapper first.

#### Workflow change

Avoid making direct Book action the aggressive primary path for customer-submitted quote requests.

Preferred flow:

```text
Review Quote → Approve Quote → Send Quote → Schedule Job
```

Not:

```text
New lead → Book immediately
```

---

### 2. Create Estimate

Rename `New quote` to `Create Estimate`.

This page currently does more than a simple new quote:

- contact info
- property details
- room details
- add-ons
- photo uploads
- AI analysis
- estimate generation
- quote saving
- email sending
- SMS sending
- PDF download
- payment flow

For wife-beta, this page should focus on manual estimate creation and review.

#### Beta behavior

Preferred beta flow:

```text
Select or create customer
↓
Select or confirm property/address
↓
Enter service details and changes
↓
Generate estimate
↓
Manual review
↓
Save draft/quote
↓
Owner explicitly sends quote later
```

#### Guarded behavior

The following should not happen automatically without explicit owner action:

- email send
- SMS send
- payment redirect
- customer-facing quote send

AI analysis failure should never block manual estimate creation.

#### Customer data reuse decision

A customer should not have to fill out all of their information every time.

Long-term target:

1. Customer submits full info once.
2. System creates or links:
   - customer profile
   - property/address profile
   - quote request
3. Future estimates reuse the customer/property record.
4. Customer only updates what changed:
   - address/property changes
   - service type
   - condition
   - add-ons
   - preferred date/time
   - notes/photos

For beta, do not require a full backend rewrite immediately, but the UI should move toward selecting an existing customer/property instead of treating every quote as a brand-new person.

---

### 3. Customers

Keep visible.

Current Customers page is mostly address-book CRUD:

- name
- email
- phone
- address
- city/state/zip
- notes
- create/update/delete
- search

This is okay for the first beta, but it is not yet a true customer profile system.

#### Beta requirements

Customers should support:

- add customer
- edit customer
- search customer
- save address
- use existing customer when creating an estimate

#### Later detail upgrades

- quote history
- booking history
- recurring status
- last service date
- notes/preferences
- preferred contact method
- customer portal link status
- saved properties/addresses
- lifetime value

Customer records should become the source of truth for repeat work.

---

### 4. Schedule

Keep visible as one grouped workflow area.

Merge the current scheduling-related features into Schedule instead of exposing separate sidebar buttons.

Schedule should eventually contain:

```text
Calendar
Jobs
Crews
Route Helper
```

Earlier idea used `Staff`, but `Crews` fits cleaning operations better.

#### Why merge early

The current standalone pages overlap:

- Staff Scheduling creates jobs/shifts and manages employees.
- Calendar shows scheduled jobs.
- Route Optimization tries to calculate route order.

A cleaning business owner thinks in terms of:

```text
What jobs are scheduled?
Who is going?
How do they get there?
What happened at the job?
```

That belongs inside Schedule.

---

### 5. Payments

Rename `Payment Links` to `Payments`.

Basic Stripe is believed to be functioning, so Payments should not be fully hidden. It should be made beta-safe.

#### Beta Payments should show

- Stripe setup status
- payment-ready / not-ready state
- deposits collected
- unpaid balances
- create payment link
- payment history
- failed or pending payments

Refunds can come later.

#### Payment flow principle

Payment should come after quote approval.

Preferred flow:

```text
Approve Quote → Send Quote → Customer Accepts / Owner Schedules → Collect Deposit
```

Avoid pushing payment immediately after estimate generation.

#### Known concern

Payment status filtering must match the actual CRM statuses or use a safe mapper. Do not expose a Payments page that looks empty because it is querying old or mismatched statuses.

---

### 6. Settings

Keep visible and work on it early.

Settings matters because the beta business needs basic configuration to operate correctly.

#### Wife-beta Settings focus

Show or emphasize:

- Company Info
- Services
- Pricing
- Booking basics
- Payments / Stripe
- Insurance
- Branding basics

Hide or park advanced items until needed:

- social media
- reviews
- advanced integrations
- advanced legal configuration
- advanced feature toggles
- AI settings

---

## Hidden or Moved During Wife-Beta

### Customer View / Customer Portal

Hide from the normal admin sidebar for beta.

Customer users should still have access to the customer portal.

Admin-side Customer View may become a future training/demo mode so the owner or helper can walk a customer through the quote process over the phone.

Future name ideas:

- Customer View
- Preview Customer Portal
- Training Mode

Do not expose it as a daily admin sidebar item yet.

---

### Insurance

Move under Settings.

Insurance is useful long-term, but it is not a daily sidebar workflow.

Suggested placement:

```text
Settings → Insurance / Compliance
```

---

### Data Export

Hide from wife-beta admin.

The current Data Export area is too broad for beta. It includes many future/platform tools such as imports, migrations, QuickBooks, Google Calendar, route data, AI training data, documents, reviews, payroll exports, expenses, payments, invoices, mileage, messaging, live tracking, and more.

This should become a super-admin/developer migration tool later.

---

### Backup

Move under Settings and restrict to super-admin/developer first.

A normal beta owner should not see destructive actions such as Clear All Data.

Suggested placement:

```text
Settings → Backup
```

Rules:

- super-admin only at first
- no normal owner access to Clear All Data
- later owner-safe backup download may be allowed

---

### AI Training

Hide from normal admin.

Keep super-admin/developer only.

---

### Tenant Management

Hide from normal admin.

Keep super-admin only.

---

### Route Optimization Standalone Button

Hide the standalone button.

Route support should live inside Schedule as Route Helper, not as a separate advanced optimization tool.

---

### Staff Scheduling Standalone Button

Hide the standalone button once Schedule contains Jobs/Crews.

Staff/crew work should live inside Schedule.

---

### Calendar Standalone Button

Hide the standalone button once Schedule contains Calendar.

Calendar remains important, but it should be part of Schedule.

## Role Visibility Rules

### Admin / Owner

Should see:

- Dashboard
- Create Estimate
- Customers
- Schedule
- Payments
- Settings

### Customer

Should only see customer-facing portal/workflows.

### Super-admin

May still access:

- Tenant Management
- AI Training
- Data Export
- Backup
- developer/platform tools

These should not appear for normal wife-beta admin users.

## Completion Criteria for Sidebar Cleanup

- Wife-beta admin sees only the six owner workflow buttons.
- Customer user does not see admin tools.
- Super-admin can still access platform tools.
- Hidden features are not deleted.
- Schedule groups Calendar, Jobs, Crews, and Route Helper.
- Insurance and Backup are moved under Settings.
- Data Export remains hidden for normal admin.
- Payments is visible but beta-safe.
- Create Estimate does not auto-send or force payment without explicit owner action.
- Dashboard shows owner-friendly quote-review status labels.
