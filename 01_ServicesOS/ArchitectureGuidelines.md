# ServicesOS Architecture Guidelines

## Purpose

This document exists to prevent future feature headaches.

ServicesOS is expected to support:

* Multiple service industries
* Multiple employee roles
* Web App
* Employee App
* Mobile Features
* AI Features
* Multiple business sizes
* Future vertical expansion

Architecture decisions should prioritize:

1. Reusability
2. Maintainability
3. Configurability
4. Simplicity
5. Long-term scalability

---

# Golden Rule

Before building ANY feature ask:

```text
Is this:

Core?

or

Module?
```

If every industry uses it:

It belongs in Core.

If only one industry uses it:

It belongs in a Module.

---

# Core vs Module

Core Features:

* Customers
* Leads
* Estimates Engine
* Contracts
* Scheduling
* Employees
* Payments
* Photos
* Reviews
* Messaging
* Training Framework
* Dashboard Framework
* Notifications
* Permissions
* Time Tracking

Modules:

* Cleaning
* Lawn Care
* Carpet Cleaning
* Window Cleaning
* Pressure Washing
* Junk Removal
* Handyman
* Snow Removal

---

# Never Hardcode Vertical Logic

BAD:

```javascript
if(cleaning){

showBathroomChecklist();

}
```

BAD:

```javascript
if(cleaning){

showPetsField();

}
```

GOOD:

```javascript
const module =

getActiveModule(

company.vertical

);

module.getChecklist();

module.estimateFields;

module.trainingModules;
```

The UI should adapt automatically.

---

# Feature Registry

Every feature should be registered.

Example:

```javascript
export const FEATURES = {

PHOTOS: true,

TRAINING: true,

MESSAGING: true,

TIME_TRACKING: true,

TAP_TO_PAY: false,

AI_ASSISTANT: false

};
```

Use:

```javascript
if(

featureEnabled(

"TRAINING"

)

){

showTraining();

}
```

Never scatter feature checks throughout the codebase.

---

# Features Never Talk Directly

BAD:

```text
Training

↓

Messaging

↓

Photos

↓

Scheduling

↓

Dashboard
```

GOOD:

```text
Training

↓

Service Layer

↓

Database


Messaging

↓

Service Layer

↓

Database


Photos

↓

Service Layer

↓

Database
```

Features should communicate through:

* Services
* Events
* Shared APIs

Never import feature logic directly.

---

# Event Driven Architecture

When something important happens:

Fire an Event.

Example:

```text
Job Complete

↓

JOB_COMPLETED event

↓

Dashboard refreshes

↓

Reviews requested

↓

Analytics updated

↓

Photos archived
```

No direct dependencies.

---

# Permission System

Never do:

```javascript
if(admin)

if(manager)

if(employee)
```

throughout the app.

Use:

```javascript
can(

user,

"createEstimate"

);
```

Examples:

```javascript
can(

user,

"editSubscription"

)

false
```

```javascript
can(

user,

"uploadPhotos"

)

true
```

Centralize permissions.

---

# Feature Flags

All optional features should support flags.

Example:

```javascript
FEATURES

{

training:true,

messaging:true,

tapToPay:false,

inventory:false

}
```

Benefits:

* Easy Beta Features

* Easy Rollback

* Customer Specific Features

* No Deploy Required

---

# Config Driven UI

NEVER:

```javascript
if(cleaning){

showBathroomFields();

}
```

ALWAYS:

```javascript
estimateFields =

module

.estimateFields;
```

and

```javascript
checklist =

module

.getChecklist(

jobType

);
```

The UI adapts from config.

---

# Database Versioning

Always version schemas.

BAD:

```javascript
Customer {

name,

address,

phone

}
```

GOOD:

```javascript
Customer {

schemaVersion:2,

name,

address,

phone

}
```

Benefits:

* Easy migrations

* Backwards compatibility

* Future expansion

---

# Business Rules File

Never hardcode:

* Max employees

* Deposit %

* File sizes

* Subscription limits

* Trial lengths

Store them in:

```text
BusinessRules.js
```

Examples:

```javascript
MAX_EMPLOYEES

DEFAULT_DEPOSIT_PERCENT

MAX_PHOTO_SIZE

TRIAL_DAYS

MAX_JOBS_PER_DAY
```

---

# Folder Ownership Rules

core/

Shared by everyone.

Never put vertical logic here.

---

modules/

Industry specific.

Can extend core.

Cannot modify core directly.

---

shared/

Reusable:

* Components

* Utilities

* Validators

* Constants

* Schemas

---

services/

Business logic.

Responsible for:

* Firestore

* Stripe

* Twilio

* AI

* Cloud Functions

UI should never directly access Firestore.

---

# Feature Approval Questions

Before building ask:

1.

Who uses this?

---

2.

How often?

---

3.

Can Wife Beta function without it?

---

4.

Will multiple verticals use it?

---

5.

Core?

or

Module?

---

6.

Real Problem?

or

Cool Idea?

---

If:

```text
Real Problem

+

Frequently Used

+

Multiple Verticals
```

Build immediately.

---

If:

```text
Interesting

+

Rarely Used

+

Single Vertical
```

Document.

Return later.

---

# Founder Rule

Ideas are NOT work.

Documentation is NOT work.

Features are NOT value.

Value is:

```text
Customer

↓

Uses Feature

↓

Saves Time

↓

Makes Money

↓

Keeps Subscription
```

Build for value.

Not excitement.

---

# Long Term Vision

```text
ServicesOS

↓

Core Platform

↓

Vertical Modules

↓

Feature Registry

↓

Event Driven Architecture

↓

AI Assisted Operations

↓

Industry Agnostic Service Business Platform
```

Build Once.

Reuse Forever.

Keep Core Clean.

Everything else becomes easier.
