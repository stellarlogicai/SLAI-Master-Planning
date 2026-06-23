These are the last SOPs, and they're especially important because of your decision to use Stripe Connect.

Because the cleaning company owns the payment relationship, many financial issues become cleaner operationally:

Business Owns Payment
↓
Business Owns Refund Decision
↓
Business Owns Chargeback Response
↓
Platform Provides Tools & Audit Trail

That separation is one of the advantages of your architecture.

B.22 Payment Failure SOP

Category: Financial

Trigger
Payment cannot be processed

Examples:

Declined Card
Expired Card
Insufficient Funds
Bank Error
Processing Error
Step 1: Verify Failure
□ Confirm payment failure
□ Confirm transaction amount
□ Confirm customer account
Step 2: Review Error
□ Review payment processor response
□ Review failure code
□ Determine retry eligibility
Step 3: Customer Notification
□ Notify customer
□ Provide payment instructions
□ Request updated payment method if required
Step 4: Retry Process
□ Retry according to company policy
□ Update payment method if provided
Step 5: Escalation
□ Notify management if balance remains unpaid
□ Suspend future services if required by policy
Documentation
□ Record failure
□ Record communications
□ Record resolution
Completion Criteria
Payment collected or case escalated
B.23 Chargeback SOP

Category: Financial

Trigger
Customer disputes payment through card issuer
Step 1: Notification Review
□ Review chargeback notice
□ Review dispute reason
□ Review deadlines
Step 2: Evidence Collection
□ Service agreement
□ Signed contract
□ Service checklist
□ Completion photos
□ Customer communications
□ Payment records
Step 3: Business Decision
□ Accept dispute
□ Contest dispute
Step 4: Submission
□ Submit evidence package
□ Meet dispute deadlines
Step 5: Resolution
□ Record outcome
□ Update customer account
□ Review prevention opportunities
Completion Criteria
Chargeback resolved and documented
SaaS Advantage

Because you've built:

Contracts
↓
Photos
↓
Checklists
↓
Customer Signatures
↓
Payments

your customers will have far stronger dispute evidence than many competitors.

B.24 Refund Processing SOP

Category: Financial

Trigger
Refund approved
Step 1: Verify Approval
□ Verify approval authority
□ Verify refund amount
□ Verify payment transaction
Step 2: Process Refund
□ Submit refund
□ Verify processing confirmation
Step 3: Notify Customer
□ Confirm refund submitted
□ Explain expected timeline
Step 4: Accounting Updates
□ Update invoice status
□ Update accounting records
□ Update customer account
Documentation
□ Record amount
□ Record reason
□ Record approver
Completion Criteria
Refund processed and documented
B.25 Deposit Dispute SOP

Category: Financial

Trigger
Customer disputes deposit charge
Step 1: Review Agreement
□ Review estimate
□ Review contract
□ Review deposit policy
□ Review cancellation policy
Step 2: Gather Evidence
□ Signed agreement
□ Deposit authorization
□ Communications
□ Scheduling records
Step 3: Determine Validity
□ Deposit valid
□ Partial accommodation
□ Refund warranted
□ Escalation required
Step 4: Customer Communication
□ Explain findings
□ Reference policy
□ Explain next steps
Step 5: Resolution
□ Refund if approved
□ Partial refund if approved
□ Retain deposit per policy
Documentation
□ Record outcome
□ Record communications
□ Record supporting documents
Completion Criteria
Dispute resolved and documented
Financial Dashboard Opportunities

Your SaaS could eventually show:

Payment Failure Rate
Chargeback Rate
Refund Rate
Deposit Dispute Rate
Collections Success Rate
Outstanding Balances

These become useful business-health metrics.

Suggested Database Structure
{
  sopId: "chargeback",
  category: "financial",
  requiredEvidence: [
    "contract",
    "photos",
    "checklist",
    "communications"
  ],
  escalationRequired: true
}