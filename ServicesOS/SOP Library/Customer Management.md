These SOPs are where a lot of cleaning companies struggle.

The goal isn't to eliminate complaints.

The goal is:

Receive Complaint
↓
Respond Quickly
↓
Follow Process
↓
Document Outcome
↓
Retain Customer

A structured response often saves the customer relationship.

B.7 Customer Complaint SOP

Category: Customer Management

Trigger
Customer reports dissatisfaction
Step 1: Intake
□ Record complaint
□ Record customer information
□ Record service date
□ Record employee(s) involved
□ Record complaint details
Step 2: Acknowledge
□ Respond promptly
□ Thank customer for feedback
□ Confirm issue received
□ Explain review process
Step 3: Investigation
□ Review checklist completion
□ Review photos
□ Review employee notes
□ Contact crew lead if applicable
Step 4: Resolution
□ Offer correction if appropriate
□ Offer re-clean if appropriate
□ Escalate if required
Step 5: Documentation
□ Record outcome
□ Record compensation if provided
□ Close case
Completion Criteria
Complaint resolved and documented
B.8 Reclean Request SOP

Category: Customer Management

Trigger
Customer requests service correction
Step 1: Review
□ Review completed checklist
□ Review completion photos
□ Verify service date
Step 2: Eligibility
□ Verify request within policy period
□ Verify issue relates to original service
Step 3: Schedule
□ Assign crew
□ Prioritize affected areas
□ Notify customer
Step 4: Completion
□ Complete correction
□ Verify customer satisfaction
□ Document outcome
Completion Criteria
Issue corrected and documented
B.9 Customer Refund SOP

Category: Customer Management

Trigger
Customer requests refund
Step 1: Intake
□ Record request
□ Record reason
□ Verify service details
Step 2: Review
□ Review photos
□ Review checklist
□ Review communications
□ Review previous resolutions
Step 3: Decision
□ Approve
□ Partial refund
□ Decline
□ Escalate
Step 4: Processing
□ Submit refund
□ Notify customer
□ Update records
Completion Criteria
Refund decision finalized and documented
SaaS Integration

Since you're using Stripe Connect:

Refund Requested
↓
Business Owner Reviews
↓
Approve / Decline
↓
Stripe Refund Processed
↓
Audit Trail Stored

This aligns with your tenant-owned payment model.

B.10 Customer Cancellation SOP

Category: Customer Management

Trigger
Customer cancels service
Step 1: Verify
□ Verify customer identity
□ Verify scheduled service
Step 2: Review Policy
□ Check cancellation window
□ Check cancellation fee policy
□ Check deposit policy
Step 3: Process
□ Cancel appointment
□ Release schedule slot
□ Notify assigned crew
Step 4: Follow-Up
□ Offer reschedule
□ Record reason
□ Update CRM
Completion Criteria
Cancellation processed
B.11 Difficult Customer SOP

Category: Customer Management

Trigger
Customer interaction escalates
Step 1: Remain Professional
□ Stay calm
□ Listen actively
□ Avoid arguments
Step 2: Gather Facts
□ Identify issue
□ Clarify expectations
□ Review service details
Step 3: Attempt Resolution
□ Offer appropriate solutions
□ Explain policies
□ Escalate if necessary
Step 4: Escalate
□ Notify manager
□ Document interaction
Step 5: Documentation
□ Record summary
□ Record outcome
□ Record follow-up actions
Completion Criteria
Interaction documented and resolved
Customer Retention Workflow

This should be a reusable engine.

Example:

Complaint
↓
Reclean Offered
↓
Customer Satisfied
↓
Close Case

OR

Complaint
↓
Refund Offered
↓
Customer Retained
↓
Close Case
Suggested Database Structure
{
  sopId: "customer_complaint",
  category: "customer_management",
  trigger: "customer_complaint_received",
  steps: [
    "record_complaint",
    "review_service",
    "determine_resolution",
    "document_outcome"
  ],
  escalationRequired: false
}