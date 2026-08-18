# EducationOS Android School Device Environment

Status: Parked future EducationOS concept.

Do not build before ServicesOS reaches stable customer-ready V1 and EducationOS is intentionally activated.

## Concept

EducationOS could eventually provide a purpose-built school operating environment for Android-based tablets.

The goal is not to replace Android with a new operating system. The goal is to turn a managed Android tablet into a school-first device whose interface, permissions, applications, web access, classroom behavior, and after-school behavior are controlled through EducationOS.

Positioning:

> Android is a general-purpose operating system. EducationOS turns a managed Android tablet into a purpose-built school device.

## Core Problem

School-issued tablets may leave the classroom with inconsistent controls, weak parent visibility, or controls that do not adapt well between school, homework, free-time, testing, and sleep contexts.

EducationOS should treat device control as an education workflow rather than only a parental-control or website-blocking problem.

## Control Model

The authority hierarchy should be:

**School -> Parent -> Student**

The school owns the device policy and establishes the minimum security and safety requirements.

Parents may receive delegated after-school controls, but they may make the school policy stricter only. They may not weaken or override school-required protections.

Students should be able to understand why something is restricted and request legitimate temporary access instead of being encouraged to work around controls.

## Device Modes

### School Mode

Used during the normal school day.

Possible controls:
- Approved educational applications only
- School-defined web filtering
- Restricted application installation
- Restricted device settings
- VPN/proxy restrictions
- Communication policy enforcement
- Classroom-specific application availability
- Reduced unrelated notifications and distractions

### Classroom / Lesson Mode

A teacher can temporarily configure student tablets around the current lesson.

Example:
- Teacher selects **Start Math Class**
- Approved math application opens
- Calculator becomes available
- Approved reference sites are permitted
- Games and unrelated applications are unavailable
- Unrelated notifications are suppressed
- Today's assignment is surfaced

When the teacher ends the lesson, devices return to normal School Mode.

### Testing Mode

A controlled environment for assessments.

Possible behavior:
- Lock the device to approved test applications or sites
- Disable unrelated applications and communication
- Restrict screenshots, copy/paste, or navigation where technically supported
- Record entry and exit from the testing state

Testing controls must remain transparent to school administrators and educators.

### Homework Mode

Activated outside school hours while maintaining the school's security floor.

Possible behavior:
- School resources remain available
- Homework and assignments are surfaced first
- Parents can apply stricter limits to entertainment or social applications
- Parents can approve temporary access requests

### Free-Time Mode

Optional after-school access within school and parent policy boundaries.

Entertainment access may be controlled by schedule, duration, or parent approval without changing school-required protections.

### Sleep Mode

Reduces unnecessary nighttime device use while retaining approved essentials such as alarms, ebooks, downloaded school materials, or emergency functionality where appropriate.

### Lost Device Mode

Allows the school to protect school data and restrict use when a device is reported lost or stolen.

## Student Access Requests

EducationOS should prefer transparent access requests over unexplained blocking.

Example flow:

1. A student opens a resource that is currently restricted.
2. EducationOS explains the applicable policy category.
3. The student may request temporary access and provide a reason.
4. The appropriate parent, teacher, or administrator receives the request depending on the policy.
5. The human approves or declines it.
6. EducationOS records the decision and automatically expires temporary access when required.

Example:

> YouTube is restricted during Homework Mode.
> Request 30-minute access for science homework.

This supports the SLAI principle:

**AI notices. AI suggests. Human approves. System records.**

## Parent Companion

The EducationOS parent experience should be delegated by the school rather than operate as an independent authority over a school-owned device.

Possible parent capabilities:
- View homework and assignments
- View permitted high-level device activity summaries
- Set stricter after-school schedules
- Restrict optional entertainment categories
- Approve or decline student access requests
- Pause optional internet access where school policy permits
- Receive important school/device notifications

Parent controls must never weaken the school's required restrictions.

Example policy relationship:

- School: pornography = blocked
- Parent: cannot change this
- School: YouTube = permitted
- Parent: may block YouTube after 8:00 PM

## Teacher Console

Possible teacher capabilities:
- Start and end lesson modes
- Push approved applications, websites, documents, or assignments
- Temporarily focus student devices on the current activity
- Start Testing Mode
- View device readiness and basic connection status
- Review student access requests that fall under teacher authority

The teacher console should reduce classroom friction, not become a surveillance dashboard.

## School Admin Console

Possible administrator capabilities:
- Device enrollment and assignment
- School/district policy management
- Approved application catalog
- Web and content policy configuration
- Role and permission management
- Device status and inventory
- Lost-device controls
- Audit logs
- Policy scheduling
- Parent delegation rules
- Classroom and testing policy templates

The school remains the final authority for school-owned devices.

## AI Role

AI should assist with configuration and interpretation, not autonomously govern students.

Examples:
- Draft a lesson-specific device configuration from a teacher's lesson plan
- Suggest approved applications or resources
- Summarize device-use patterns at a useful, non-invasive level
- Detect possible policy-bypass behavior and flag it for human review
- Explain why an access request may be relevant to an assignment
- Suggest policy adjustments based on repeated friction

Example teacher flow:

> Set up tomorrow's seventh-grade science lesson on photosynthesis.

EducationOS AI may prepare:
- 3 required applications
- 4 permitted websites
- 2 approved videos
- Quiz application enabled
- Messaging disabled during the lesson

The teacher reviews and approves the configuration before deployment.

## Privacy and Human-First Guardrails

EducationOS should not be designed around continuous invasive surveillance of children.

Principles:
- Collect only what is necessary for the education, safety, security, or administrative purpose
- Prefer categories and useful summaries over unnecessary detailed behavioral tracking
- Make restrictions understandable to students
- Keep high-impact decisions with educators, parents, or authorized administrators
- Maintain auditability for policy changes and access decisions
- Clearly separate school authority from delegated parent authority
- Treat student privacy and school compliance requirements as first-class architecture concerns

## Future MVP Shape

If EducationOS is activated in the future, the first controlled implementation should remain narrow.

Potential initial components:

1. **EducationOS Android Environment** - managed launcher/device experience for a defined set of compatible Android tablets
2. **Teacher Console** - lesson mode, approved content, basic device focus controls, and testing mode
3. **School Admin Console** - enrollment, policies, applications, roles, and audit history
4. **Parent Companion** - delegated after-school controls and access approvals
5. **Cloud Policy and Sync Service** - policy distribution, device state, role authority, and audit records

Initial platform scope should be Android tablets only.

Do not begin with Android + iPadOS + ChromeOS + Windows support.

## Future Hardware Strategy

EducationOS should not initially manufacture hardware.

A later model could define **EducationOS-certified tablets**: compatible Android devices that meet required management, security, performance, and update standards.

Long-term hardware partnerships could be explored only after the software model is proven.

## Non-Goals for the First Version

- Building a new Android fork or custom kernel
- Supporting every school device platform
- Becoming a generic consumer parental-control app
- Continuous student surveillance
- Autonomous AI discipline or punishment
- Replacing teachers, school administrators, or parents in high-impact decisions
- Manufacturing proprietary tablets
- Building the entire EducationOS ecosystem at once

## Strategic Fit

This concept extends the existing EducationOS vision from tutoring and learning administration into a future school-device environment while preserving the human-first AI philosophy.

It should remain a future planning direction until ServicesOS is stable and EducationOS has been intentionally moved from parked planning into active product development.
