Perfect.

This is where we start building the reusable checklist component library.

Instead of rewriting bathroom tasks inside every service, your system can do:

Move-Out Cleaning
↓
Uses Bathroom Checklist

Deep Cleaning
↓
Uses Bathroom Checklist

Recurring Cleaning
↓
Uses Bathroom Checklist

This makes maintenance much easier long-term.

B.1 Bathroom Checklist

Category: Room-Specific

Reusable Across:

Recurring Cleaning
One-Time Cleaning
Deep Cleaning
Move-Out Cleaning
Move-In Cleaning
Airbnb Cleaning
Commercial Cleaning
Bathroom Assessment
□ Verify bathroom access
□ Identify buildup areas
□ Identify hard water staining
□ Identify soap scum
□ Identify damaged fixtures
□ Document issues if required
Sink Area
Sink Basin
□ Remove debris
□ Clean basin
□ Sanitize basin
□ Rinse properly
Faucet
□ Clean faucet
□ Polish faucet
□ Remove water spots
□ Inspect for buildup
Countertops
□ Remove items if allowed
□ Clean countertops
□ Sanitize countertops
□ Clean corners
Mirror
□ Clean mirror
□ Remove streaks
□ Inspect from multiple angles
Toilet
Exterior
□ Clean tank
□ Clean lid
□ Clean seat
□ Clean exterior
□ Sanitize exterior
Interior
□ Clean bowl
□ Sanitize bowl
□ Remove visible stains
Base Area
□ Clean around base
□ Inspect behind toilet if accessible
Shower / Tub
Walls
□ Clean walls
□ Remove soap residue
□ Remove visible buildup
Fixtures
□ Clean faucet
□ Clean shower head
□ Polish fixtures
Doors / Curtains
□ Clean glass
□ Remove water spots
□ Clean tracks if included
Ventilation
□ Dust vent cover
□ Remove visible buildup
Storage Areas
□ Dust shelving
□ Clean reachable surfaces
Touch Points
□ Clean light switches
□ Clean door handles
□ Clean cabinet handles
Floors
Preparation
□ Remove debris
□ Inspect corners
Cleaning
□ Vacuum floor
□ Mop floor
□ Clean edges
□ Inspect behind door
Trash
□ Empty trash
□ Replace liner
Quality Inspection
□ Mirror streak-free
□ Fixtures polished
□ Toilet sanitized
□ Sink sanitized
□ Floor clean
□ Trash removed
Optional Deep Cleaning Add-Ons
□ Hard water removal
□ Soap scum removal
□ Grout detailing
□ Baseboard cleaning
□ Door frame cleaning
□ Wall spot cleaning
□ Vent deep cleaning
Photo Requirements

Useful for:

Move-Out Cleaning
Airbnb Cleaning
Commercial Cleaning
Quality Audits

Suggested:

□ Sink photo
□ Toilet photo
□ Shower photo
□ Floor photo
Suggested Database Structure
{
  roomType: "bathroom",
  taskGroup: "sink",
  task: "Sanitize sink basin",
  required: true,
  estimatedMinutes: 2,
  photoRequired: false,
  serviceTypes: [
    "recurring",
    "one_time",
    "deep_clean",
    "move_out",
    "airbnb"
  ]
}
SaaS Optimization

Instead of:

Move-Out Bathroom Checklist
Deep Clean Bathroom Checklist
Recurring Bathroom Checklist

Store:

Bathroom Core Tasks
+
Bathroom Deep Tasks
+
Bathroom Move-Out Tasks

Then dynamically build the checklist.

Example:

Move-Out Job
↓
Load Bathroom Core
+
Load Move-Out Additions
+
Load Customer Add-Ons
↓
Generate Checklist