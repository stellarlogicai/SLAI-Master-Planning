# ServicesOS Expenses & Mileage Tracking Plan

**Status:** Post-July-20 / V1.5 planning  
**Product area:** ServicesOS financial operations  
**Build rule:** Do not build before the live manual smoke test proves the core ServicesOS workflow.  
**Near-term priority:** ServicesOS July 20 smoke-test readiness remains priority one.

---

## Purpose

ServicesOS should help small service businesses track real operating costs, not just revenue.

For cleaning businesses like Aunt B's Cleaning Services, mileage, supplies, equipment, insurance, licenses, and marketing costs directly affect profitability. A job that looks profitable from the invoice amount may be much less profitable after travel, supplies, and payment fees.

This module supports a core business question:

```text
Did this job actually make money?
```

---

## MVP Scope

Add tenant-scoped manual expense and mileage tracking.

The first version should stay simple:

```text
Manual entries
Clean categories
Optional job/customer linking
Receipt upload later if safe
Monthly totals
CSV export
No tax advice claims
```

---

## Expense Tracking

Owners/admins can log expenses with:

- Date
- Vendor
- Category
- Amount
- Payment method
- Receipt upload/photo
- Notes
- Linked job, optional
- Tax-deductible flag
- Tenant ID
- Created by

### Expense Categories

- Cleaning supplies
- Equipment
- Insurance
- Licenses/registration
- Marketing
- Mileage/fuel
- Software/subscriptions
- Payment processing fees
- Repairs/maintenance
- Contract labor
- Office/admin
- Other

---

## Mileage Tracking

Owners/admins can log mileage with:

- Date
- Trip purpose
- Start location
- End location
- Linked customer/job, optional
- Starting odometer, optional
- Ending odometer, optional
- Miles driven
- Mileage rate
- Calculated mileage value
- Notes
- Tenant ID
- Created by

### Trip Purposes

- Customer job
- Estimate/walkthrough
- Supply run
- Bank/business admin
- Marketing/flyer drop
- Plant care/home check
- Other

---

## Job Profitability

Expenses and mileage should optionally link to jobs.

A future job profitability view should eventually show:

- Gross customer payment
- Payment processing fees
- ServicesOS/platform fees
- Linked job expenses
- Mileage value
- Estimated supply cost
- Labor time
- Net before labor
- Effective hourly rate

### Product Rule

Do not start with a complex profitability dashboard.

Start with:

```text
This job had these linked costs.
```

Then grow toward full profitability reporting after the basic logs are trusted.

---

## Beta Success Criteria

This feature succeeds if Aunt B's can:

1. Log startup expenses.
2. Track cleaning supply purchases.
3. Track equipment purchases.
4. Track mileage for jobs and walkthroughs.
5. Link mileage or expenses to a customer/job.
6. See monthly expense totals.
7. Export expense/mileage data for taxes.
8. Understand whether a job was actually profitable.

---

## Product Rules

Keep V1 simple.

Do not build these in the first version:

- Bank syncing
- OCR
- Automatic receipt parsing
- Automatic tax filing
- Automatic categorization
- Route estimation
- Accounting integrations
- Full bookkeeping system

Important wording rule:

```text
ServicesOS can help organize expense and mileage records.
It should not claim to provide tax advice.
The owner chooses whether an expense may be tax-deductible.
Exports are for owner/bookkeeper review.
```

---

## Recommended Build Phases

### Phase 0.1 — Manual Expense Log

Build first:

- Add expense
- List expenses
- Edit expense
- Archive/delete expense safely
- Category
- Amount
- Date
- Vendor
- Notes
- Monthly total
- CSV export

Do not require receipt upload in the first pass if it slows implementation.

### Phase 0.2 — Mileage Log

Build second:

- Add trip
- Date
- Miles driven
- Purpose
- Mileage rate
- Calculated mileage value
- Optional linked customer/job
- Monthly mileage total
- CSV export

### Phase 0.3 — Receipts

Build third:

- Upload receipt photo
- Attach receipt to expense
- View/download receipt

Still do not add OCR or automatic parsing.

### Phase 0.4 — Job Profitability

Build fourth:

- Gross payment
- Manual expenses linked to job
- Manual mileage linked to job
- Payment/platform fee fields if already available
- Simple net estimate

Do not overbuild this into a full accounting dashboard.

---

## Suggested Firestore Shape

```text
tenants/{tenantId}/expenses/{expenseId}
tenants/{tenantId}/mileageLogs/{mileageLogId}
```

### Expense Fields

```ts
{
  tenantId,
  date,
  vendor,
  category,
  amount,
  paymentMethod,
  receiptUrl,
  notes,
  linkedJobId,
  linkedBookingId,
  linkedCustomerId,
  taxDeductible,
  createdByUid,
  createdAt,
  updatedAt,
  isArchived,
  archivedAt,
  archivedByUid
}
```

### Mileage Fields

```ts
{
  tenantId,
  date,
  tripPurpose,
  startLocation,
  endLocation,
  linkedJobId,
  linkedBookingId,
  linkedCustomerId,
  startingOdometer,
  endingOdometer,
  milesDriven,
  mileageRate,
  calculatedMileageValue,
  notes,
  createdByUid,
  createdAt,
  updatedAt,
  isArchived,
  archivedAt,
  archivedByUid
}
```

---

## Future Enhancements

Park these until the manual version proves useful:

- Receipt OCR
- Auto expense categorization
- Recurring expenses
- Supply inventory deductions
- Mileage route estimation
- Profit per job dashboard
- Tax summary export
- Owner reimbursement reports
- GrowthAI recommendations based on profitability trends

---

## Placement in ServicesOS Roadmap

Recommended order:

```text
1. July 20 smoke-test polish
2. July 20 live manual smoke test
3. Fix smoke-test blockers
4. Core workflow/payment/field hardening
5. Expenses & Mileage v0.1
6. Training Library v0.1
```

Expenses and mileage are valuable, but they should not interrupt the live smoke-test path.
