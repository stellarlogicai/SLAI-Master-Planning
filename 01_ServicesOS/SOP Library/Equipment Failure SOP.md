Equipment Failure SOP

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