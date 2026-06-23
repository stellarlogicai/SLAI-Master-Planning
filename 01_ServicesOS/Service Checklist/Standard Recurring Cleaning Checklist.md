Phase A — Service Checklist Library

This is what employees will actually use every day in the React Native app.

The structure I recommend:

Service Type
↓
Room
↓
Task
↓
Photo Requirement?
↓
Required?
↓
Completion Verification
A.1 Standard Recurring Cleaning Checklist

Category: Residential

Estimated Duration: 1–4 hours

Required Certification:
Residential Cleaning Fundamentals

Property Arrival
□ Arrive on time
□ Park appropriately
□ Gather supplies
□ Review customer notes
□ Confirm service scope
□ Enter property per instructions
Entryway
□ Remove cobwebs
□ Dust surfaces
□ Dust décor
□ Clean light switches
□ Clean door handles
□ Spot clean glass if applicable
□ Vacuum floor
□ Mop hard floors
Living Room
□ Dust all reachable surfaces
□ Dust furniture
□ Dust electronics exterior
□ Dust décor
□ Dust window sills
□ Remove cobwebs
□ Clean light switches
□ Clean door handles
□ Vacuum furniture if included
□ Vacuum carpets/rugs
□ Mop hard floors
□ Empty trash
Dining Room
□ Dust table
□ Dust chairs
□ Dust décor
□ Dust reachable surfaces
□ Clean light switches
□ Clean door handles
□ Vacuum floor
□ Mop hard floors
□ Empty trash
Kitchen
Countertops
□ Clean countertops
□ Sanitize countertops
Sink
□ Clean sink
□ Polish faucet
Appliance Exteriors
□ Refrigerator exterior
□ Oven exterior
□ Microwave exterior
□ Dishwasher exterior
General
□ Spot clean cabinet fronts
□ Clean backsplash
□ Clean light switches
□ Clean door handles
□ Empty trash
□ Replace trash liner
□ Vacuum floor
□ Mop floor
Bathrooms

For Each Bathroom

Sink Area
□ Clean sink
□ Clean faucet
□ Polish fixtures
□ Clean mirror
Toilet
□ Clean exterior
□ Sanitize exterior
□ Clean bowl
□ Sanitize bowl
Shower/Tub
□ Clean walls
□ Clean fixtures
□ Remove visible soap residue
General
□ Dust reachable surfaces
□ Clean counters
□ Empty trash
□ Replace liner
□ Vacuum floor
□ Mop floor
Bedrooms

For Each Bedroom

□ Dust furniture
□ Dust reachable surfaces
□ Dust window sills
□ Remove cobwebs
□ Clean light switches
□ Clean door handles
□ Make bed (if requested)
□ Vacuum carpet
□ Mop hard floor
□ Empty trash
Laundry Room
□ Dust surfaces
□ Clean appliance exteriors
□ Clean light switches
□ Vacuum floor
□ Mop floor
Final Walkthrough
□ Verify all rooms completed
□ Verify trash removed
□ Verify supplies collected
□ Verify doors locked if required
□ Mark job complete
SaaS Database Structure

Instead of hardcoding this:

{
  checklistId: "recurring_cleaning",
  room: "kitchen",
  task: "Clean countertops",
  required: true,
  photoRequired: false,
  category: "countertops",
  estimatedMinutes: 3
}

Then your app can dynamically build:

Recurring Clean
↓
Kitchen
↓
Countertops
□ Complete
↓
Photo (optional)
↓
Next Task