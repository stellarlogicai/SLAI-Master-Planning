Multi-Step Test Suite
1. Tenant / Company Onboarding
Test: New company can onboard successfully

Steps:

1. Create new company account
2. Add company name, email, phone
3. Set timezone
4. Add business address
5. Upload logo/branding
6. Select plan
7. Verify tenant record created
8. Verify tenant cannot access other tenant data

Expected:

Company dashboard loads
Tenant data is isolated
Setup checklist updates correctly
2. Stripe Connect Onboarding
Test: Business can connect Stripe

Steps:

1. Open payment settings
2. Click Connect Stripe
3. Create connected account
4. Generate onboarding link
5. Complete test onboarding
6. Return to app
7. Verify stripeAccountId saved
8. Verify chargesEnabled / payoutsEnabled status

Expected:

Stripe status shows connected
Payments can be accepted
Platform fee is configured
3. Lead → Estimate Workflow
Test: Lead can become estimate

Steps:

1. Create lead
2. Add customer info
3. Add property info
4. Add rooms
5. Add service type
6. Add difficulty factors
7. Generate estimate
8. Review pricing
9. Save estimate
10. Send estimate to customer

Expected:

Lead status changes to Estimate Sent
Estimate total is correct
Customer receives estimate link
4. Estimate → Contract Workflow
Test: Approved estimate creates contract

Steps:

1. Open customer estimate link
2. Accept estimate
3. Generate service agreement
4. Review contract terms
5. Customer signs contract
6. Contract stored in customer profile

Expected:

Estimate status = Accepted
Contract status = Signed
PDF/document stored correctly
5. Deposit Payment Workflow
Test: Customer can pay deposit

Steps:

1. Open invoice/payment page
2. Pay deposit with Stripe test card
3. Verify payment success
4. Verify tenant connected account receives payment
5. Verify platform fee is deducted
6. Verify receipt generated

Expected:

Deposit status = Paid
Payment record created
Platform fee recorded
Customer receipt sent
6. Scheduling Workflow
Test: Paid job can be scheduled

Steps:

1. Open accepted job
2. Choose date/time
3. Select service duration
4. Assign employee
5. Check travel time
6. Confirm no conflicts
7. Publish schedule

Expected:

Job appears on calendar
Employee assignment saved
Customer appointment confirmation sent
7. Employee Job Execution
Test: Employee can complete assigned job

Steps:

1. Login as employee
2. View today’s jobs
3. Open assigned job
4. Clock in
5. Start job
6. Upload before photos
7. Complete checklist
8. Add notes
9. Upload after photos
10. Collect signature if required
11. Complete job
12. Clock out

Expected:

Job status = Completed
Checklist saved
Photos saved
Time tracked
Payroll data updated
8. Final Payment Workflow
Test: Final balance can be collected

Steps:

1. Job marked complete
2. Final invoice generated
3. Customer pays balance
4. Stripe payment succeeds
5. Platform fee applied
6. Receipt sent

Expected:

Invoice status = Paid
Job financials updated
Tenant revenue updated
9. Refund Approval Workflow
Test: Business approves refund

Steps:

1. Customer requests refund
2. Business owner receives request
3. Owner reviews job photos/checklist
4. Owner approves partial refund
5. Stripe refund processed
6. Customer notified
7. Audit log created

Expected:

Refund status = Approved
Refund amount correct
Audit trail records approver
10. Employee Call-Out Workflow
Test: AI-assisted reassignment works

Steps:

1. Employee reports call-out
2. System identifies affected jobs
3. AI recommends replacements
4. Dispatcher reviews options
5. Dispatcher approves replacement
6. Schedule updates
7. New employee receives notification
8. Customer notified if needed

Expected:

Affected jobs reassigned
No double-booking
Notifications sent
Audit log created
11. Training Workflow
Test: Employee completes required training

Steps:

1. Admin assigns training module
2. Employee opens training
3. Employee views slides
4. Employee takes quiz
5. Employee passes quiz
6. Certificate generated
7. Certification added to profile

Expected:

Training status = Complete
Quiz score saved
Certification unlocks eligible job types
12. Checklist Engine
Test: Correct checklist generates by service type

Steps:

1. Create recurring clean
2. Verify recurring checklist loads
3. Create deep clean
4. Verify deep clean additions load
5. Add pet-home modifier
6. Verify pet tasks added
7. Add Airbnb modifier
8. Verify guest-readiness tasks added

Expected:

Checklist dynamically matches service type + modifiers
No duplicate tasks
Required tasks enforced
13. Inspection Workflow
Test: Manager can inspect completed job

Steps:

1. Open completed job
2. Start inspection
3. Score kitchen
4. Score bathrooms
5. Score floors
6. Add notes/photos
7. Submit inspection
8. Employee scorecard updates

Expected:

Inspection score saved
Employee quality score updated
Job QA status updated
14. Payroll Prep Workflow
Test: Payroll draft generates correctly

Steps:

1. Employee completes several jobs
2. Time entries exist
3. Mileage exists
4. Tips exist
5. Open payroll center
6. Generate payroll draft
7. AI flags exceptions
8. Owner reviews
9. Owner approves export

Expected:

Payroll draft accurate
Exceptions visible
Human approval required
15. Tenant Isolation / Security
Test: Tenant data cannot leak

Steps:

1. Create Tenant A
2. Create Tenant B
3. Login as Tenant A
4. Attempt to access Tenant B customer
5. Attempt to access Tenant B invoice
6. Attempt to access Tenant B employee
7. Attempt direct Firestore read/write

Expected:

Access denied
No cross-tenant data visible
Security rules block unauthorized reads/writes
Recommended Automation Order
1. Tenant isolation
2. Stripe payment flow
3. Lead → Estimate → Payment
4. Scheduling → Employee completion
5. Refunds
6. Training/certifications
7. Payroll prep
8. Inspections/scorecards

This gives you a strong beta-readiness test suite.