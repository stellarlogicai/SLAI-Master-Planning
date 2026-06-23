These SOPs are where your SaaS starts becoming a true operations platform.

Most cleaning businesses experience these issues weekly:

Late Employees
Traffic Delays
Locked Properties
Gate Codes Not Working
Vehicle Problems
Equipment Failures

The goal is:

Detect Issue
↓
Follow SOP
↓
Minimize Customer Impact
↓
Document Outcome
B.12 Late Arrival SOP

Category: Operations

Trigger
Employee or crew will arrive late
Step 1: Determine Delay
□ Confirm expected arrival time
□ Determine cause
□ Estimate delay duration
Step 2: Evaluate Impact
□ Review customer schedule
□ Review following jobs
□ Review crew assignments
Step 3: Notify
□ Notify dispatcher
□ Notify manager if required
□ Notify customer if delay exceeds policy threshold
Step 4: Mitigation
□ Adjust schedule
□ Reassign jobs if needed
□ Update ETA
Completion Criteria
Customer informed and schedule updated
B.13 Locked Out SOP

Category: Operations

Trigger
Crew cannot access property
Step 1: Verify Access
□ Verify address
□ Verify entry instructions
□ Verify lockbox instructions
□ Verify gate codes
Step 2: Contact Customer
□ Call customer
□ Send message
□ Wait required policy period
Step 3: Escalate
□ Notify dispatcher
□ Notify manager if required
Step 4: Resolution
□ Gain access
□ Reschedule
□ Cancel per policy
Documentation
□ Record wait time
□ Record communication attempts
□ Record outcome
Completion Criteria
Issue resolved and documented
B.14 Access Issue SOP

Category: Operations

Trigger
Access information invalid or unavailable

Examples:

Wrong Gate Code
Expired Door Code
Missing Lockbox Key
Building Access Failure
Step 1: Verify Information
□ Review customer profile
□ Review work order
□ Review previous access notes
Step 2: Customer Contact
□ Request updated information
□ Confirm access instructions
Step 3: Escalation
□ Notify dispatcher
□ Notify manager if required
Completion Criteria
Access restored or job rescheduled
B.15 Vehicle Breakdown SOP

Category: Operations

Trigger
Company vehicle unavailable
Step 1: Safety
□ Move vehicle safely if possible
□ Activate hazard lights
□ Contact roadside assistance if needed
Step 2: Notify Operations
□ Notify dispatcher
□ Notify manager
Step 3: Evaluate Jobs
□ Review active jobs
□ Review future jobs
□ Review available crews
Step 4: Reassignment
□ Transfer jobs
□ Dispatch replacement vehicle if available
□ Update schedule
Documentation
□ Record incident
□ Record repair needs
□ Record downtime
Completion Criteria
Customer impact minimized and incident documented
B.16 Equipment Failure SOP

Category: Operations

Trigger
Required equipment fails during service

Examples:

Vacuum Failure
Steam Cleaner Failure
Battery Failure
Power Cord Damage
Step 1: Stop Use
□ Remove equipment from service
□ Prevent unsafe use
Step 2: Assess Impact
□ Determine affected tasks
□ Determine replacement needs
Step 3: Replace Equipment
□ Use backup equipment
□ Retrieve replacement
□ Reschedule affected work if required
Step 4: Report
□ Notify manager
□ Submit maintenance request
Documentation
□ Record failure
□ Record downtime
□ Record replacement used
Completion Criteria
Service completed and equipment issue documented
AI Workflow Integration

These SOPs fit perfectly into your planned automation system.

Example:

Vehicle Breakdown
↓
AI Reviews Schedule
↓
Finds Nearby Crews
↓
Ranks Reassignment Options
↓
Dispatcher Approves
↓
Schedules Updated

Example:

Employee Running Late
↓
AI Calculates Delay Impact
↓
Suggests Adjustments
↓
Dispatcher Reviews
↓
Customers Notified
Suggested Database Structure
{
  sopId: "late_arrival",
  category: "operations",
  trigger: "employee_late",
  escalationRequired: false,
  automatedActions: [
    "update_schedule",
    "notify_dispatcher"
  ]
}