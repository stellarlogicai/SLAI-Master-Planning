Master Testing Structure
1. Web App Beta Tests
2. React Native Employee App Tests
3. Backend / Firebase Tests
4. Stripe / Infrastructure Tests
1. Web App Beta Test Suite

Purpose: Test the owner/admin/business portal.

A. Company Onboarding
□ Create company account
□ Add company profile
□ Add service area
□ Add business hours
□ Add branding
□ Invite first employee
□ Verify dashboard setup checklist
B. Stripe Connect
□ Create connected account
□ Complete onboarding
□ Verify chargesEnabled
□ Verify payoutsEnabled
□ Save stripeAccountId
□ Show Stripe status in settings
C. CRM
□ Create lead
□ Convert lead to customer
□ Add property
□ Add customer notes
□ Add service preferences
□ Archive customer
□ Restore customer
D. Estimate Flow
□ Create estimate
□ Add rooms
□ Add service type
□ Add difficulty modifiers
□ Add AI pricing suggestion
□ Send estimate
□ Customer accepts estimate
E. Contract Flow
□ Generate contract
□ Customer signs
□ PDF saved
□ Contract linked to customer
□ Contract linked to job
F. Payment Flow
□ Customer pays deposit
□ Platform fee deducted
□ Payment record saved
□ Receipt sent
□ Final invoice generated
□ Final payment completed
G. Scheduling
□ Create job
□ Assign employee
□ Detect conflict
□ Add travel time
□ Add lunch/break buffer
□ Publish schedule
□ Customer receives confirmation
H. Admin Training
□ Create training module
□ Assign training
□ View progress
□ View quiz score
□ View certificate
I. Inspections / Scorecards
□ Create inspection
□ Score job
□ Submit QA
□ Employee score updates
□ Company metrics update
2. React Native Employee App Test Suite

Purpose: Test the cleaner/crew lead mobile experience.

A. Authentication
□ Employee login
□ Logout
□ Session persists
□ Invalid login handled
□ Password reset works
B. Today’s Jobs
□ View assigned jobs
□ View route
□ View customer notes
□ View property notes
□ View special instructions
C. Time Tracking
□ Clock in
□ Start break
□ End break
□ Start lunch
□ End lunch
□ Clock out
□ Verify payroll time saved
D. Job Execution
□ Start job
□ Upload before photos
□ Complete checklist
□ Add notes
□ Upload after photos
□ Collect signature
□ Complete job
E. Checklist Engine
□ Recurring checklist loads
□ Deep clean checklist loads
□ Move-out checklist loads
□ Airbnb checklist loads
□ Required tasks block completion
□ Optional tasks do not block completion
F. Training
□ View assigned training
□ Open slide module
□ Resume training
□ Take quiz
□ Pass quiz
□ Fail quiz
□ Certificate generated
G. Incident Reporting
□ Report property damage
□ Report injury
□ Report equipment issue
□ Add photos
□ Submit incident
□ Manager notified
H. Offline / Sync
□ Open job offline
□ Complete checklist offline
□ Add photos offline
□ Reconnect
□ Sync data
□ Confirm no duplicate records
3. Backend / Firebase Test Suite

Purpose: Test data, rules, functions, permissions.

A. Tenant Isolation
□ Tenant A cannot read Tenant B customers
□ Tenant A cannot write Tenant B jobs
□ Tenant A cannot access Tenant B invoices
□ Employee cannot access another tenant
B. Roles / Permissions
□ Owner can access everything
□ Manager can manage operations
□ Dispatcher can schedule
□ Crew lead can view team jobs
□ Cleaner can only view assigned jobs
C. Firestore Writes
□ Customer creation
□ Estimate creation
□ Job creation
□ Checklist submission
□ Training completion
□ Inspection submission
□ Payroll draft creation
D. Cloud Functions
□ createPaymentIntent
□ createCheckoutSession
□ createSubscription
□ createConnectedAccount
□ generateOnboardingLink
□ getConnectedAccountStatus
□ webhook handler
□ account.updated handler
E. AI Rules
□ Employee call-out recommendation
□ Route optimization suggestion
□ Training recommendation
□ Payroll exception flag
□ Low inventory alert
4. Stripe / Infrastructure Test Suite

Purpose: Test payment reliability.

A. Stripe Connect
□ Create Express account
□ Complete onboarding
□ Verify status sync
□ Connected account receives payment
□ Platform receives 5% fee
B. Payments
□ Deposit payment succeeds
□ Final payment succeeds
□ Payment fails
□ Customer updates card
□ Retry payment
C. Refunds
□ Customer requests refund
□ Owner approves refund
□ Partial refund processed
□ Full refund processed
□ Refund audit log created
D. Subscriptions
□ Tenant subscribes
□ Subscription renews
□ Subscription payment fails
□ Subscription canceled
□ Feature access updates
E. Webhooks
□ payment_intent.succeeded
□ payment_intent.payment_failed
□ checkout.session.completed
□ account.updated
□ charge.refunded
□ customer.subscription.updated
Recommended Implementation Order
1. Backend tenant isolation tests
2. Stripe Connect/payment tests
3. Web app end-to-end beta tests
4. React Native employee workflow tests
5. Offline/sync tests
6. AI rule tests
7. Full regression suite
Tools I’d Use
Playwright
Web app end-to-end tests

Firebase Emulator Suite
Firestore rules + Cloud Functions tests

Jest
Business logic/unit tests

Detox or Maestro
React Native mobile tests

Stripe Test Mode
Payment and Connect testing

GitHub Actions
Run tests before deploy
First Automation Goal

Start with these 5 flows:

1. Tenant onboarding
2. Stripe Connect setup
3. Lead → Estimate → Payment
4. Schedule → Employee completes job
5. Tenant isolation/security