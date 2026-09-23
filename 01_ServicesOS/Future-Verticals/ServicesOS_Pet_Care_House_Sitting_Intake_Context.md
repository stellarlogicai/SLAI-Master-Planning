# ServicesOS Future Vertical — Pet Care & House Sitting Intake Context

**Status:** Future vertical planning only  
**Recorded:** 2026-09-23  
**Product:** ServicesOS  
**Priority rule:** This document does **not** authorize implementation before ServicesOS V1 is launched and stabilized. Cleaning remains the V1 launch vertical.

---

## Purpose

Preserve the business context learned from a real, simple house-sitting / dog-sitting intake form so ServicesOS can later support this type of service work without forcing a cleaning-oriented workflow onto it.

The important planning insight is not the PDF layout itself. It is that **different service verticals need different intake context while still sharing the ServicesOS core**.

Pet care / house sitting is a useful future vertical example because the job is less about estimating rooms or materials and more about:

- care instructions,
- household access,
- recurring routines,
- emergency information,
- animal-specific needs,
- customer expectations while away,
- clear handoff of instructions to the person performing the work.

This fits the existing ServicesOS Core + Vertical Modules architecture.

---

## Business Pattern

A pet-care / house-sitting business still needs the normal ServicesOS core:

- customers,
- leads,
- estimates/quotes where applicable,
- bookings,
- scheduling,
- employees/assigned workers,
- job details,
- notes,
- messaging,
- payments,
- photos where appropriate,
- audit/history,
- owner/admin oversight.

What changes is the **service-specific intake and field context**.

Conceptually:

```text
Customer / household
        ↓
Pet & home-care intake
        ↓
Booking / service agreement
        ↓
Assigned sitter receives only relevant authorized instructions
        ↓
Visit / stay workflow
        ↓
Notes / updates / exceptions
        ↓
Completion / customer communication
```

---

## Intake Context Categories

The uploaded compact intake form is intended as a **simple intake**, so future ServicesOS support should preserve that principle: gather enough information to perform the service safely and reliably without turning onboarding into an unnecessarily long questionnaire.

The vertical should be capable of representing categories such as:

### Customer and service basics

- customer identity/contact information,
- service dates or schedule,
- expected visit/stay pattern,
- service location,
- preferred communication method,
- general customer instructions.

### Pet profile

Each animal may need its own profile rather than one generic "pets" note.

Potential context includes:

- pet name,
- animal/type,
- basic identifying information,
- temperament/behavior notes,
- feeding routine,
- water routine,
- bathroom/walk routine,
- medication/care instructions when applicable,
- restrictions,
- special needs,
- veterinarian/emergency context where supplied,
- interactions with other pets/people where relevant.

### Feeding and routine

Pet sitting is routine-sensitive.

The system should be able to represent:

- what the pet receives,
- amount,
- timing,
- location of food/supplies,
- treats,
- restrictions,
- walk/play expectations,
- bedtime/morning routines,
- other customer-defined recurring instructions.

The sitter should not have to reconstruct these instructions from scattered texts.

### Medication / special care

Where the customer provides medication or special-care instructions, ServicesOS should preserve them clearly and distinguish them from ordinary notes.

Future design should consider:

- medication name/instruction as supplied by the customer,
- schedule,
- customer-provided administration instructions,
- missed-dose/escalation instructions,
- confirmation or care log where appropriate.

**Safety rule:** AI must not invent, modify, or medically interpret medication instructions. The customer/authorized care source remains authoritative.

### Home access

House sitting introduces access information that many other verticals do not need.

Potential context:

- agreed entry method,
- key/lockbox/smart-lock instructions,
- alarm instructions,
- gate/garage information,
- parking/access notes,
- areas that are off limits,
- where pet/home supplies are located.

Access information is sensitive and should use stricter authorization/privacy handling than ordinary job notes.

### Home-care responsibilities

The service may include more than pet care.

Potential responsibilities include customer-selected items such as:

- mail/packages,
- plants,
- trash,
- lights,
- doors/windows,
- basic home checks,
- other agreed household tasks.

These should become explicit job scope/checklist items rather than assumptions.

### Emergency and exception context

The sitter needs a clear escalation path when the normal routine cannot be followed.

Potential context:

- primary customer contact,
- alternate/emergency contact,
- veterinarian information where supplied,
- what circumstances require contacting the owner,
- what to do if access fails,
- pet escape/injury/illness escalation,
- home/property issue escalation.

ServicesOS should help surface authoritative customer instructions, not autonomously make consequential care decisions.

---

## Data-Model Direction

Do not reduce this vertical to a single giant free-text field.

A future configuration could conceptually separate:

```text
Customer
└── Household / Service Location
    ├── Access Instructions [sensitive]
    ├── Home-Care Instructions
    ├── Emergency Contacts
    └── Pets
        ├── Pet A
        │   ├── Profile
        │   ├── Feeding
        │   ├── Routine
        │   ├── Medication / Special Care
        │   └── Behavior / Safety Notes
        └── Pet B
            └── ...
```

The exact schema must be designed against the ServicesOS core when this vertical becomes active.

---

## Intake-to-Job Principle

Information should be collected once and reused appropriately.

Example:

```text
Customer completes intake
        ↓
ServicesOS stores structured approved context
        ↓
Owner reviews / clarifies where necessary
        ↓
Booking references the relevant household + pets
        ↓
Assigned sitter sees the authorized job-specific instructions
        ↓
Checklist/routine is generated from approved service context
        ↓
Worker records completion, notes, issues, and permitted updates
```

This avoids repeatedly asking the customer for the same pet and household information.

Long-lived profile information and booking-specific instructions should remain distinguishable.

---

## Field Experience

For this vertical, the employee/worker experience should emphasize **"What do I need to know for this home and these pets?"**

A future Field Mode / Work Assistant could surface:

- pets included in the booking,
- visit/stay schedule,
- feeding/routine checklist,
- medication/special-care instructions exactly as authorized,
- access instructions only when the worker is authorized and needs them,
- home-care tasks,
- emergency/escalation contacts,
- customer-approved notes,
- completion/update workflow.

The worker should not need to search through customer history or unrelated private data.

---

## SLAI Work Assistant Boundary

This vertical is a strong example of why the SLAI Work Assistant should be grounded in structured, authorized business context.

Useful behavior:

- explain the approved job instructions,
- remind the worker of checklist items,
- locate an approved instruction,
- summarize the remaining authorized tasks,
- help draft a customer/manager update,
- escalate when instructions are missing or conflicting.

Not allowed as authoritative behavior:

- invent feeding quantities,
- invent medication instructions,
- diagnose an animal,
- override customer-approved care instructions,
- disclose access information to unauthorized users,
- decide consequential emergency actions beyond approved escalation rules.

AI supports the sitter; it does not become the pet owner, veterinarian, or business owner.

---

## Privacy / Security Considerations

House sitting creates unusually sensitive physical-access data.

Treat at least the following as high-sensitivity operational context:

- lockbox/key information,
- door codes,
- alarm details,
- access instructions,
- occupancy/travel-related information,
- emergency contacts,
- pet medication/care details where applicable.

Future implementation should apply:

- tenant isolation,
- assignment/role-based access,
- least-privilege worker visibility,
- auditability for sensitive access where practical,
- careful notification/logging behavior,
- no unnecessary AI-provider exposure,
- no use of sensitive access data for marketing or unrelated analytics.

A sitter should receive what is required to perform the authorized job, not the customer's entire record.

---

## Vertical Configuration Direction

Pet care / house sitting could eventually expose vertical configuration such as:

```text
module.config
serviceTypes
intakeFields
petProfileFields
careRoutineTemplates
checklistTemplates
jobRequirements
safetyEscalationRules
workerVisibilityRules
```

Potential service types may eventually include examples such as drop-in pet visits, dog sitting, house sitting, overnight care, or other business-defined services. These are planning examples, not committed product scope.

---

## Reusable Platform Lesson

The main architectural lesson from this intake form is broader than pet sitting:

> ServicesOS should eventually support configurable, vertical-aware intake schemas that convert customer answers into structured business and job context.

That same pattern can later support:

- cleaning intake,
- lawn/property intake,
- barber/salon preferences,
- handyman project intake,
- pet/house-sitting intake,
- other service-specific workflows.

The core should own the intake engine, permissions, persistence, review, and job handoff.

The vertical should define the questions/context that make the service unique.

Conceptually:

```text
ServicesOS Core Intake Engine
        ↓
Vertical Intake Configuration
        ↓
Customer answers
        ↓
Structured canonical context
        ↓
Owner review where needed
        ↓
Estimate / booking / job / field workflow
```

---

## Product Principle

Keep the intake proportional to the work.

The uploaded form is valuable specifically because it is **simple**. Future ServicesOS vertical support should avoid turning every possible edge case into a mandatory question.

Use:

- sensible defaults,
- optional sections,
- conditional fields,
- per-pet repeatable sections,
- owner-configurable requirements,
- progressive collection when more detail is genuinely needed.

The goal is reliable service context with low customer friction.

---

## Scope Boundary

This document preserves future ServicesOS vertical knowledge only.

It does **not** change:

- ServicesOS V1 launch scope,
- the cleaning-first strategy,
- the late-October launch target,
- current onboarding implementation,
- current Employee App implementation,
- current SLAI Assistant implementation.

Revisit this document when ServicesOS begins post-V1 vertical expansion or when configurable vertical intake becomes an approved roadmap item.
