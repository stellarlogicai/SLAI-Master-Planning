First Version

The first test suite I gave you was:

Lead → Estimate → Contract → Payment
Employee completes job
Refund workflow
Training workflow

That was essentially a:

Beta Readiness Checklist

It answered:

"Can the business actually run on this platform?"

Second Version

The second version is a proper:

Quality Assurance Framework

It includes:

Web App Testing
Employee App Testing
Backend Testing
Stripe Testing
Security Testing
Role Testing
Offline Testing

So instead of:

15 tests

you now have:

100+ individual test cases
grouped into suites
How I Would Use Them

I would actually keep both.

Level 1 — Smoke Tests

These are your original end-to-end tests.

Run them:

Every deployment
Every release candidate
Before beta launch

Examples:

Tenant Signup
Lead → Estimate → Payment
Schedule → Complete Job
Refund
Employee Call-Out

These tell you:

Can the platform function?
Level 2 — Full QA Suite

This is the expanded version.

Run:

Before major releases
Before production launch
Monthly regression testing

These tell you:

Is every subsystem functioning correctly?
My Recommendation

Create this structure:

tests/

├── smoke/
│   ├── tenant-onboarding
│   ├── payment-flow
│   ├── scheduling
│   ├── employee-completion
│   └── refunds

├── web-app/
│   ├── crm
│   ├── estimates
│   ├── contracts
│   ├── scheduling
│   ├── inspections
│   └── reporting

├── mobile-app/
│   ├── login
│   ├── jobs
│   ├── checklists
│   ├── training
│   ├── incidents
│   └── offline

├── backend/
│   ├── firestore-rules
│   ├── cloud-functions
│   ├── tenant-isolation
│   └── permissions

└── stripe/
    ├── connect
    ├── payments
    ├── refunds
    ├── subscriptions
    └── webhooks
If You Only Have Time For One Thing

Run the original smoke tests first.

Because these answer the most important question:

Can a cleaning company actually operate
their business start-to-finish on my platform?

If that answer is yes, then you move into the deeper QA suite.

Given where your project sounds today, I'd guess you're very close to the point where workflow testing is more valuable than building new features. The next big discoveries will probably come from pretending you're:

Owner
Manager
Dispatcher
Cleaner
Customer

and running full business days through the system. That's where the hidden bugs and friction usually reveal themselves.