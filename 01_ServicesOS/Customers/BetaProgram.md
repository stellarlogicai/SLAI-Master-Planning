# ServicesOS Beta Program

## Purpose

The beta program exists to test ServicesOS with real users before public launch. The goal is to find bugs, improve workflows, validate pricing, and confirm that the product actually helps cleaning businesses operate better.

## Beta Stages

### Stage 1: Internal Testing

Tester:

- Jamie

Goal:

- Confirm the app runs
- Confirm major workflows work
- Confirm folder restructure did not break anything
- Confirm Firebase, Stripe, scheduling, and core screens work

Focus:

- Bugs
- Broken imports
- Broken routes
- Failed payments
- Firestore issues
- Missing validation

### Stage 2: Wife Beta

Tester:

- Wife’s cleaning business

Goal:

- Use ServicesOS in a real cleaning business workflow
- Break the app
- Find confusing screens
- Find missing workflows
- Test customer, estimate, schedule, employee app, checklist, payment, and job completion flow

Success condition:

- She can use the system for real work without Jamie explaining every step

### Stage 3: Friendly Beta

Testers:

- 1 to 3 trusted cleaning businesses or service businesses

Goal:

- Validate workflows outside the family business
- Get honest feedback
- Identify repeated issues
- Test onboarding and support process

### Stage 4: Paid Beta

Testers:

- 3 to 5 paying customers

Goal:

- Validate that customers will pay
- Validate pricing
- Validate support workload
- Confirm ServicesOS can fund itself at small scale

## Beta Rules

Beta users must understand:

- Product is still improving
- Feedback is expected
- Bugs may happen
- Their feedback helps shape the platform
- Payments and customer data must be treated carefully

## Wife Beta Checklist

Use the separate Wife Beta Checklist document for detailed testing.

Key areas:

- Login
- Customer creation
- Estimates
- Scheduling
- Employee assignments
- Employee app
- Checklists
- Photo upload
- Training
- Payments
- Tap to Pay
- Invoices
- Recurring services

## Feedback Collection

All beta feedback should be documented with:

- Date
- Tester name
- Feature/module
- Problem found
- Steps to reproduce
- Screenshot/video if possible
- Severity
- Suggested fix
- Status

Severity levels:

### Critical

Blocks business operation or risks customer/payment data.

Examples:

- Payment failure
- Wrong customer data shown
- Cannot login
- Job disappears
- Invoice wrong

### High

Major workflow problem but workaround exists.

Examples:

- Estimate not saving correctly
- Schedule difficult to update
- Employee cannot see job notes

### Medium

Annoying or confusing but not business-breaking.

Examples:

- Too many clicks
- Confusing wording
- Missing helper text

### Low

Polish issue.

Examples:

- Typo
- Spacing
- Button label improvement

## Beta Feedback Template

```md
# Beta Feedback Entry

Date:
Tester:
Business:
Module:
Severity:

## What Happened

## Steps To Reproduce

1.
2.
3.

## Expected Result

## Actual Result

## Screenshot / Video

## Suggested Fix

## Status

Open / In Progress / Fixed / Won't Fix / Later
```

## Beta Success Metrics

Track:

- Number of bugs found
- Number of critical bugs
- Time to fix critical bugs
- Number of completed jobs through ServicesOS
- Number of successful payments
- Number of estimates sent
- Number of scheduled jobs
- Number of employee app sessions
- User confusion points
- Feature requests

## Exit Criteria For Wife Beta

Move beyond wife beta when:

- Login is stable
- Customer workflow works
- Estimate workflow works
- Scheduling works
- Employee app can complete jobs
- Payments work
- No critical bugs remain open
- Wife can complete core workflow without help

## Exit Criteria For Public Launch

Ready for public launch when:

- At least 3 beta businesses have used the platform
- Core workflows are stable
- Pricing is validated
- Support process exists
- Documentation exists
- Payment flow is tested
- Backup/export plan exists
- Security rules are reviewed

## Beta Mindset

The beta is not about proving the product is perfect.

The beta is about finding what breaks before real customers do.

## Success Signal

The beta is working when users say:

> This still needs polish, but I can already see how it would help my business.
