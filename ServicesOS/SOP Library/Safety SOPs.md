These SOPs are different from everything else we've built.

For customer issues, employee issues, and operations issues, the goal is usually:

Maintain Service
Minimize Disruption
Protect Customer Experience

For Safety SOPs, the priority changes completely:

Protect People
↓
Protect Property
↓
Document Incident
↓
Resume Operations Later

Safety always comes first.

B.17 Chemical Spill SOP

Category: Safety

Trigger
Cleaning chemical spilled or released
Step 1: Immediate Safety
□ Stop work
□ Secure area
□ Prevent customer access
□ Prevent employee exposure
Step 2: Assess Severity
□ Identify product
□ Determine quantity spilled
□ Determine exposure risk
□ Review SDS information if required
Step 3: Containment
□ Contain spill if safe
□ Prevent spread
□ Protect drains if applicable
Step 4: Cleanup
□ Follow approved cleanup procedure
□ Dispose of materials appropriately
Step 5: Notification
□ Notify supervisor
□ Notify management if required
Documentation
□ Record chemical involved
□ Record location
□ Record actions taken
□ Record exposure incidents
Completion Criteria
Area safe and incident documented
B.18 Property Damage SOP

Category: Safety

One of the most important SOPs in the platform.

Trigger
Property damaged during service

Examples:

Broken Lamp
Scratched Floor
Damaged Appliance
Broken Décor
Wall Damage
Step 1: Stop Work
□ Stop affected activity
□ Prevent additional damage
Step 2: Assess
□ Identify damaged item
□ Assess severity
□ Determine immediate risks
Step 3: Documentation
□ Take photos
□ Record description
□ Record employees involved
□ Record witnesses if applicable
Step 4: Notification
□ Notify crew lead
□ Notify manager
Step 5: Customer Communication
□ Follow company communication policy
□ Avoid admitting fault beyond company guidance
□ Provide factual information
Resolution Tracking
□ Insurance review if required
□ Repair review if required
□ Settlement review if required
Completion Criteria
Incident documented and escalated appropriately
B.19 Medical Emergency SOP

Category: Safety

Trigger
Medical emergency involving employee, customer, or visitor
Step 1: Emergency Response
□ Call emergency services if needed
□ Provide first aid if trained
□ Protect injured person
Step 2: Scene Management
□ Secure area
□ Maintain privacy
□ Direct responders if needed
Step 3: Notification
□ Notify management
□ Notify emergency contacts if required
Documentation
□ Record timeline
□ Record witnesses
□ Record actions taken
Completion Criteria
Emergency handled and documented
B.20 Fire SOP

Category: Safety

Trigger
Smoke, fire, or suspected fire detected
Step 1: Life Safety
□ Evacuate area
□ Account for crew members
□ Call emergency services
Step 2: Secure Scene
□ Prevent re-entry
□ Maintain safe distance
Step 3: Notification
□ Notify management
□ Notify property contact if required
Documentation
□ Record timeline
□ Record observations
□ Record actions taken
Completion Criteria
Emergency responders assume control and incident documented
B.21 Severe Weather SOP

Category: Safety

Trigger
Weather conditions create safety risk

Examples:

Tornado Warning
Severe Thunderstorm
Flooding
Ice Storm
Hurricane
Extreme Heat
Step 1: Evaluate Risk
□ Review weather alerts
□ Review local guidance
□ Assess travel conditions
Step 2: Protect Employees
□ Suspend travel if required
□ Seek shelter if required
□ Follow emergency guidance
Step 3: Operational Review
□ Review active jobs
□ Review schedule impact
□ Review customer notifications
Step 4: Resume Operations
□ Verify safe conditions
□ Update schedules
□ Notify customers
Documentation
□ Record delays
□ Record cancellations
□ Record actions taken
Completion Criteria
Operations safely resumed
Employee App Integration

These should trigger a dedicated workflow.

Example:

Report Incident
↓
Select Incident Type
↓
Safety SOP Opens
↓
Required Photos
↓
Required Notes
↓
Manager Notification
↓
Case Created

No employee should be able to submit a property damage report without:

Photos
Description
Location
Time

That protects both the cleaning company and your SaaS customers.

Suggested Database Structure
{
  sopId: "property_damage",
  category: "safety",
  severityLevels: [
    "minor",
    "major",
    "critical"
  ],
  requiredPhotos: true,
  escalationRequired: true
}