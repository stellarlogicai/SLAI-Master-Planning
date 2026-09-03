# ServicesOS V2 — Workforce, Field Operations & Vertical Expansion

**Status:** Planned / parked until ServicesOS V1 is launched and stable  
**Created:** August 29, 2026  
**Product:** ServicesOS  
**Priority rule:** V1 remains the active build. This document defines the next major ServicesOS version and must not expand the V1 launch scope.

---

## V2 Theme

ServicesOS V2 should deepen the operating system for service businesses that have larger teams, more daily jobs, more field complexity, and more operational data.

The working V2 theme is:

> **Workforce, Field Operations & Vertical Expansion**

V1 establishes the core operating system: customers, estimates, bookings, field work, payments, onboarding, Employee App V1, SLAI Assistant, and launch readiness.

V2 should make that core substantially stronger for multi-employee and multi-crew businesses while proving that ServicesOS can support additional service verticals without creating separate products or backends.

---

# Product Principles

V2 should continue the existing SLAI / ServicesOS rules:

- AI amplifies people; it does not replace responsible business decisions.
- Owners remain responsible for staffing, scheduling, pricing, routing, safety, customer, and payment decisions.
- Build simple first; complexity must be earned by real customer need.
- Reuse the ServicesOS core instead of cloning products by industry.
- Vertical expansion should happen through configuration/modules wherever practical.
- V2 should deepen ServicesOS, not turn it into payroll, accounting, ERP, or autonomous management software.
- New functionality should solve real operating problems for existing and future service-business customers.

---

# V2 COMMITTED SCOPE

These areas define the current intended ServicesOS V2.

## 1. Employee Scheduling & Crew Management

Employee scheduling should become a major V2 operating surface.

### Owner / Admin

- Employee availability
- Regular work schedules
- Days off
- Time-off requests
- Day and week workforce views
- Shift/work scheduling
- Crew/team creation
- Assign individual employees or crews to jobs
- Reusable crew assignments/templates where useful
- Schedule conflict detection
- Double-booking warnings
- Overloaded/underassigned employee visibility
- Job staffing visibility
- Employee availability during job assignment

### Employee App

- Personal work schedule
- Crew/team assignment visibility
- Assigned job schedule
- Schedule changes
- Time-off request visibility/status where implemented

### Guardrail

ServicesOS V2 may track operational schedules and work time, but it should **not become a payroll platform**.

---

## 2. Routing & Dispatch

Routing should build on bookings, job assignments, crews, customer locations, and the Employee App.

### Owner / Admin

- Daily route view
- Map of assigned jobs
- Crew-specific routes
- Estimated travel time
- Suggested stop ordering
- Manual drag/reorder where practical
- Route conflicts/warnings
- Estimated arrival windows
- Visibility into excessive drive time
- Ability to confirm or modify SLAI suggestions

### Employee App

- Today’s ordered stops
- Directions/navigation handoff
- Address and job context
- Route updates
- Arrival-window visibility where supported

### Customer Communication

Potential V2 workflow:

- Owner-approved ETA/update messages
- Delay/reschedule messaging
- Route-aware customer communication

### SLAI Role

SLAI may:

- notice inefficient schedules
- identify route conflicts
- suggest a better stop order
- explain why a route may be inefficient

SLAI should **not autonomously dispatch employees or change routes without owner approval**.

---

## 3. Safety & Incident Management

Safety should become a reusable ServicesOS capability across verticals.

### Job / Site Safety Context

Examples:

- Pets
- Allergies
- Chemical/material concerns
- Access hazards
- Stairs
- Slippery surfaces
- Terrain hazards
- Gate/access notes
- Known property warnings
- Equipment requirements
- Vertical-specific safety instructions

### Employee App

- Pre-job safety information
- Safety acknowledgment where appropriate
- Report hazard/problem
- Add photos
- Report incident
- Report injury
- Report near miss
- Add employee notes
- Notify owner/admin of important safety events

### Owner / Admin

- Incident review
- Safety event history
- Photos/evidence
- Follow-up notes
- Status tracking
- Audit trail

### SLAI Role

SLAI may summarize incidents, notice repeated patterns, or surface relevant history.

SLAI must **not decide whether a situation is safe, medically diagnose an injury, or replace responsible human safety decisions**.

---

## 4. Employee App V2

Employee App V1 should remain the stable foundation.

V2 should deepen the employee-side operating experience.

### V2 Additions

- Employee schedule
- Crew assignments
- Routing/navigation
- Push notifications
- Safety alerts
- Incident reporting
- Time/attendance basics
- Break tracking if real customer need supports it
- Stronger offline tolerance
- Job/customer updates
- Training/SOP access
- Richer SLAI Work Assistant
- Better day-of-work context

### Possible Operational State Model

A simple future workflow may include:

```text
Clock in
  ↓
Travel
  ↓
Arrive
  ↓
Start job
  ↓
Break
  ↓
Resume
  ↓
Complete job
  ↓
Clock out
```

This should remain operational tracking, not payroll calculation.

---

## 5. SLAI Assistant V2

V1 establishes SLAI Assistant as the owner’s business assistant.

V2 should make SLAI more operationally aware while preserving human control.

### Operational Awareness

Examples:

- “Crew 2 has four jobs tomorrow and unusually high estimated drive time.”
- “An employee appears assigned to overlapping jobs.”
- “Tomorrow’s outdoor work may need attention.”
- “These completed customers are good rebooking candidates.”
- “This schedule leaves a large gap between two nearby jobs.”
- “Several incidents reference the same type of hazard.”

### V1 Image Generation Boundary

Marketing image generation was promoted into the locked ServicesOS V1 scope as a
separate controlled implementation slice. The V1 customer-facing contract is:

```text
Generate post — 1 credit

Generate post + image — 5 credits total
```

The 5-credit action produces the text package plus an actual AI-generated image.
The owner receives the finished image, not a raw image-generation prompt.
Nothing auto-posts.

V2 does not re-own this feature. V2 may build on the V1 image-generation
foundation when adding broader operational awareness or future marketing
workflows.

### Human Control

SLAI may notice, summarize, draft, and suggest.

SLAI should not autonomously:

- change employee schedules
- assign crews
- dispatch workers
- change routes
- make safety decisions
- change customer pricing
- send/publish important content without the required owner action

---

## 6. Vertical Framework Completion

ServicesOS was designed as:

```text
ServicesOS Core
+
Vertical Modules
```

V2 should finish the remaining separation between shared service-business behavior and cleaning-specific assumptions.

### Shared ServicesOS Core

The core should remain reusable across verticals:

- Tenants / identity
- Customers / CRM
- Estimates
- Bookings
- Payments / Stripe
- Employees
- Scheduling
- Photos
- Field work
- Employee App
- Credits
- SLAI Assistant provider layer
- Notifications
- Reporting
- Audit/activity
- Security / tenant isolation

### Vertical Profile / Module

Each vertical may configure:

- Terminology
- Service types
- Estimate fields
- Checklist templates
- Training/SOP content
- Job requirements
- Customer-message wording
- SLAI context
- Marketing context
- Safety defaults
- Dashboard/analytics defaults
- Vertical-specific optional workflows

### Architecture Rule

Do not build separate backends for each vertical.

Avoid scattered code such as:

```javascript
if (businessType === 'lawnCare') {
  // vertical-specific behavior everywhere
}
```

Prefer a central vertical/module contract that ServicesOS surfaces consume.

### First V2 Validation Vertical — Lawn Care

Lawn Care is the current leading candidate for the first new vertical because:

- It has very high overlap with current ServicesOS workflows.
- It benefits directly from V2 scheduling, crews, routing, safety, recurring work, field photos, payments, and employee mobile features.
- A real lawn-care business is available as a potential workflow/pilot reference.
- It can prove that the existing vertical architecture works outside Cleaning.

Likely Lawn Care configuration needs:

- Yard/property context
- Mowing/service frequency
- Seasonal service types
- Fence/gate notes
- Crew assignment
- Weather awareness
- Outdoor safety
- Route/territory awareness
- Recurring service behavior

Lawn Care should **validate the vertical framework**, not trigger a duplicate LawnCareOS codebase.

### Additional Vertical Candidates After Lawn Care

Do not commit these until Lawn Care demonstrates the cost of adding another vertical.

Strong candidates include:

- Pressure Washing
- Mobile Detailing
- Window Cleaning
- Carpet Cleaning
- Handyman / Home Services
- Barber / Salon

Barber / Salon is especially useful as a future architectural test because it would validate ServicesOS against a location-based appointment business rather than another field-service company.

It would likely require stronger:

- staff-specific appointment scheduling
- service duration
- walk-in/queue concepts
- preferred provider/barber history
- tips/commission/booth-rental considerations

Those needs should be validated with a real business before implementation.

---

## 7. Operational Analytics

V2 analytics should help owners understand the business without inventing fake AI scores.

Potential metrics:

- Jobs per employee
- Jobs per crew
- Employee/crew utilization
- Drive time vs working time
- Cancellation/no-show trends
- Repeat customer rate
- Rebooking rate
- Average job value
- Outstanding balances
- Service-type performance
- Crew completion trends
- Schedule conflicts
- Route efficiency indicators
- Safety/incident trends
- Seasonal trends by vertical

### Rule

Data informs decisions.

Owners interpret the data.

Do not create opaque employee-performance or disciplinary scores that pretend the system knows more than the underlying evidence supports.

---

## 8. Themes & Customization

V2 should introduce a controlled ServicesOS theme system rather than large numbers of individual appearance settings.

### Initial Theme Direction

- ServicesOS Light
- ServicesOS Dark
- Warm
- Vibrant

### Configuration

- Business-wide default theme
- Personal user override
- “Use business theme” option
- Protected semantic colors for success, warning, error, safety, and focus states

### Future Possibility

A safe logo-derived branded theme could:

1. inspect an approved business logo
2. extract a usable palette
3. map it to controlled ServicesOS theme tokens
4. validate contrast/accessibility
5. preview it
6. require owner approval before activation

Premium/custom theme monetization may be considered later, but monetization is not required to establish the V2 theme architecture.

---

# V2 LIKELY / VALIDATE WITH REAL USERS

These items fit the V2 direction but should be promoted into committed scope only when the core design or customer usage proves the need.

- Time/attendance detail beyond basic operational status
- Break-management depth
- Advanced offline Employee App behavior
- Weather-aware rescheduling assistance
- Customer ETA automation with explicit owner controls
- Route/territory optimization beyond basic suggestions
- Waitlist/cancellation-fill workflows for appointment businesses
- More advanced employee training/certification workflows
- Equipment tracking where a vertical proves the need
- Seasonal service campaign tools
- Additional vertical modules after Lawn Care
- Logo-generated business themes
- More detailed crew productivity analytics

---

# LATER / PARKED — NOT V2 BY DEFAULT

V2 should **not** become a catch-all version.

The following remain later unless real customer need causes an explicit scope change:

- Full payroll
- Full accounting
- Tax filing
- Full HRIS
- Benefits administration
- Enterprise ERP
- Large inventory-management platform
- Autonomous employee discipline
- Autonomous hiring/firing recommendations
- Autonomous dispatch
- Autonomous pricing
- Autonomous safety decisions
- Fully autonomous marketing/posting
- Huge integration marketplace
- Dozens of verticals launched simultaneously
- Broad regulated-industry compliance suites
- Features that belong more naturally in separate SLAI products

---

# Recommended V2 Build Order

This is a planning order, not an active V1 task list.

```text
ServicesOS V1 launch + stabilization
        ↓
1. Employee scheduling & crew foundation
        ↓
2. Routing & dispatch
        ↓
3. Safety & incident system
        ↓
4. Employee App V2 integration
        ↓
5. SLAI Assistant V2 operational awareness
        ↓
6. Operational analytics
        ↓
7. Themes & customization
        ↓
8. Finish vertical abstraction
        ↓
9. Lawn Care vertical pilot
        ↓
10. Measure reuse / architecture cost
        ↓
11. Decide whether to add more V2 verticals
```

Some implementation slices may overlap when dependencies make that cleaner, but V1 launch stability must remain the gate before V2 implementation begins.

---

# V2 Vertical Expansion Decision Rule

Before adding a new vertical, answer:

1. How much of ServicesOS Core can it reuse?
2. What genuinely new workflow does the vertical require?
3. Can that difference live in a vertical module/profile?
4. Does a real business exist to validate the workflow?
5. Does the vertical strengthen ServicesOS for existing customers too?
6. Can it be added without destabilizing already-supported verticals?
7. Is demand/opportunity strong enough to justify the support burden?

A vertical should not be added simply because it is technically possible.

---

# Success Criteria

ServicesOS V2 is successful when:

- Multi-employee businesses can schedule and coordinate employees/crews effectively.
- Field teams can see schedule, route, safety, and job context in one employee experience.
- Owners retain control over dispatch, staffing, and safety decisions.
- SLAI provides useful operational intelligence without becoming an autonomous manager.
- Cleaning continues to work without regression.
- Lawn Care can operate on the same core without a separate backend or major product rewrite.
- The cost of adding the next close-fit vertical is materially lower than adding Lawn Care.
- Operational analytics help owners understand what is happening without fake precision.
- Customization improves ownership/brand fit without weakening usability or accessibility.
- V2 remains a deeper ServicesOS, not a collection of unrelated enterprise systems.

---


# Additive V2 Planning — Website-Ready Business Data & Manual Website Production Foundation

This section adds website-readiness planning to V2 without changing the existing V2 priorities or build order.

The purpose is **not** to build an autonomous AI website generator in V2.

The purpose is to make ServicesOS business data reusable for websites and establish a simple, reusable website structure that can support rapid **human-directed** website production by Jamie + ChatGPT + Codex.

## Website-Ready Business Data

ServicesOS should progressively structure owner-entered business information so the same canonical data can later feed a customer-facing website without requiring the owner to re-enter the same information in a separate website system.

Potential website-ready fields include:

### Business Identity

- Business display name
- Logo
- Brand colors
- Short tagline
- Short business description
- Full About description

### Contact & Location

- Business phone
- Business email
- Business address
- Service area
- Business hours
- Social links

### Services

- Service name
- Service category
- Service description
- Price
- Starting-at price where applicable
- Duration where applicable
- Booking availability
- Optional service image

### Team / Staff

- Name
- Role/title
- Short bio
- Profile photo
- Services provided
- Availability where the vertical supports staff-specific scheduling

### Media

- Hero images
- Business/gallery photos
- Before/after photos where appropriate
- Staff/portfolio images

### Trust & Customer Information

- Testimonials/reviews selected for website use
- FAQs
- Cancellation/no-show policy
- Deposit/payment policy
- Other customer-facing policies
- Licenses/certifications where relevant

### Calls to Action

- Book now
- Request estimate
- Call
- Contact
- Other vertical-appropriate primary actions

## Canonical Data Rule

> **Website content should consume canonical ServicesOS business data wherever practical instead of requiring owners to maintain duplicate copies of the same information.**

Website-specific presentation may differ from the ServicesOS owner/admin UI, but the underlying factual business information should remain reusable.

## Reusable Website Component Foundation

The first website engine should be intentionally simple.

It should establish reusable components such as:

```text
Website Components
├── Header
├── Navigation
├── Hero
├── Services Grid
├── Service Detail
├── Pricing
├── Team / Staff
├── Gallery
├── Before / After
├── Testimonials
├── FAQ
├── Hours
├── Service Area
├── Contact
├── Booking CTA
├── Estimate CTA
├── Policies
└── Footer
```

Vertical-specific websites should be composed from these shared building blocks instead of creating a completely separate website codebase for every industry.

## Template / Layout Foundation

V2 may establish a small set of reusable layout structures and visual starting points.

The objective is a **cookie-cutter foundation that is fast to customize**, not a large theme marketplace.

Examples:

- Generic Service Business
- Field Service / Home Service
- Appointment / Location-Based Service
- Barbershop
- Future vertical layouts as justified

A template may define:

- default section order
- supported section types
- layout patterns
- default spacing/typography behavior
- CTA placement
- navigation structure

The business's real data, branding, photos, copy, and human-directed customization should make the finished site specific to that customer.

## Initial Website Production Workflow

The intended V2 workflow is deliberately human-directed:

```text
Owner completes ServicesOS business setup
        ↓
ServicesOS holds website-ready business data
        ↓
Jamie reviews the business and available content
        ↓
Jamie + ChatGPT choose/refine:
- page structure
- section order
- copy
- CTA wording
- missing information
- appropriate reusable layout
        ↓
Codex adapts/builds the website from reusable components
        ↓
Jamie performs visual and workflow QA
        ↓
ChatGPT assists with review/copy refinement/problem analysis
        ↓
Codex applies approved corrections
        ↓
Jamie approves the final result
        ↓
Publish through the chosen hosting/domain workflow
```

## V2 Website Non-Goals

The V2 foundation should **not require**:

- Autonomous AI website generation
- Automatic template selection
- Automatic publishing
- Automatic domain purchasing
- Autonomous copy approval
- Autonomous image selection
- Large-scale website orchestration
- A drag-and-drop consumer website builder
- A full CMS competing with dedicated website platforms
- GrowthAI automatically building or publishing websites

Those capabilities may be considered later if real usage justifies them.

## Design Principle

> **ServicesOS maintains structured, website-ready business data and a reusable component/template foundation that supports rapid human-directed website production.**

The initial operational model is:

> **Build the reusable structure first. Jamie, ChatGPT, and Codex handle customization and QA. Automation is earned later.**

This keeps the website capability useful for SLAI's own service offering without expanding V2 into a large autonomous website-generation product.


# Additive V2 Planning — Barbershop Vertical

This section expands the existing Barber / Salon candidate note without changing the current Lawn Care validation priority.

Barbershop should be treated as a strong future V2 vertical because it tests ServicesOS against a **location-based, staff-specific appointment business**, which is meaningfully different from Cleaning and Lawn Care.

The objective is to reuse ServicesOS Core while introducing only the appointment-business behavior that cannot be represented cleanly through the existing vertical framework.

## Barbershop Business Model / Setup Data

Potential vertical configuration should support:

- Shop name and branding
- Shop location
- Shop-wide operating hours
- Individual barber/provider profiles
- Individual barber availability
- Services offered by each barber
- Service durations
- Service pricing
- Optional provider-specific pricing where real workflows require it
- Preferred barber/provider
- Portfolio/gallery photos
- Shop policies
- Deposit rules where used
- Cancellation/no-show policies
- Tip support through the existing payment direction where appropriate
- Walk-in support where validated
- Appointment booking
- Rebooking

## Barber / Provider Profile

A barber profile may include:

- Name
- Photo
- Short bio
- Services provided
- Service duration differences where necessary
- Individual availability
- Portfolio/gallery images
- Booking eligibility
- Optional preferred-provider/customer history

The architecture should avoid duplicating the general employee model merely to support barbers.

Provider-specific behavior should extend the existing employee/scheduling architecture wherever practical.

## Appointment Workflow

A likely appointment workflow:

```text
Customer selects service
        ↓
Select preferred barber
or choose any available barber
        ↓
Available time slots
        ↓
Appointment confirmation
        ↓
Reminder / customer communication
        ↓
Service completed
        ↓
Payment / tip where supported
        ↓
Rebooking opportunity
```

Exact booking behavior should be validated with a real barbershop before implementation.

## Walk-In / Queue Consideration

Barbershops may require a workflow that field-service businesses do not:

- Walk-in arrival
- Waiting queue
- Next available barber
- Estimated wait
- Convert walk-in into customer record where appropriate
- Preserve appointment customers while handling walk-ins

This should remain a **validate-first** workflow.

Do not build a complex queue system until real barbershop usage proves what is necessary.

## Customer Relationship Context

Potential reusable customer context:

- Preferred barber
- Previous services
- Last appointment
- Typical rebooking interval
- Upcoming appointment
- No-show/cancellation history where appropriate
- Customer notes that are safe and relevant to service delivery

ServicesOS should use this information to support the owner/provider workflow, not create opaque customer scoring.

## GrowthAI / SLAI Assistant Context

For a future supported barbershop vertical, GrowthAI / SLAI Assistant may help surface or prepare:

- Customers due for a haircut/rebooking
- Open appointment gaps
- Slow periods
- Review-request opportunities
- Draft customer messages
- Marketing/post ideas
- Reputation-response drafts from provided review text
- Content opportunities using approved shop branding/photos

Existing human-control rules continue to apply.

Nothing should auto-message, auto-publish, change prices, or alter schedules without the required human action.

## Barbershop Website-Ready Data

Barbershop is also a useful validation target for the website-ready business-data foundation.

Likely website inputs:

- Shop name
- Logo / branding
- Location
- Hours
- Phone/contact
- Booking CTA
- Services and pricing
- Barber profiles
- Barber photos
- Portfolio/gallery images
- Reviews/testimonials
- Policies
- Social links

A reusable barbershop website composition may begin with:

```text
Hero
  ↓
Book Appointment CTA
  ↓
Services / Pricing
  ↓
Meet the Barbers
  ↓
Portfolio / Gallery
  ↓
Reviews
  ↓
Hours / Location
  ↓
Policies
  ↓
Book Now
```

This should be a reusable starting structure, not a mandatory final design.

Jamie + ChatGPT + Codex should remain free to adjust layout, copy, imagery, and presentation for the actual customer while reusing the shared website components.

## Architecture Rule

Barbershop should validate that:

```text
ServicesOS Core
+
Appointment / Provider Vertical Configuration
+
Reusable Website Data / Components
```

can support a location-based appointment business without creating a separate BarberOS backend.

## Barbershop Non-Goals for Initial Validation

Do not assume the first barbershop slice needs:

- Full salon/spa complexity
- Booth-rental accounting
- Payroll
- Commission payroll calculation
- Advanced chair/station optimization
- Large walk-in queue orchestration
- Marketplace discovery
- Consumer social network features
- Autonomous marketing
- Autonomous appointment changes
- A separate barbershop backend

Those capabilities should only be added if real business validation earns them.


# Relationship to Existing Planning

This document should be read alongside:

- `01_ServicesOS/ServicesOS Vertical Architecture.md`
- `01_ServicesOS/ServicesOS Expansion & Pricing Strategy.md`
- the active ServicesOS V1 launch/beta planning

The existing Vertical Architecture remains the architectural foundation.

This roadmap defines the intended **V2 product scope** built on top of that foundation.

---

# Scope Lock Principle

Once V2 implementation begins, use the same discipline that protected V1:

> **Committed scope is the version. New ideas are candidates for the next slice unless they are necessary to make an existing committed V2 workflow correct.**

The objective is to ship a coherent V2, validate it with real service businesses, and then continue expanding ServicesOS through controlled slices rather than letting the version grow indefinitely.
