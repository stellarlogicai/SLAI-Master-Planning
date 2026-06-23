# Codex Task List for Future Implementation

## Important

Do not implement this until ServicesOS is stable enough.

This document exists for future planning only.

## Task 1: Create Lifecycle Engine Planning Module

```text
Create a planning-only module/documentation folder for ComplianceAI and Lifecycle Engine. Do not implement product code yet. Summarize how lifecycle objects, rules, tasks, notifications, verification, and audit events relate.
```

## Task 2: Define Shared Types

```text
Create TypeScript interfaces for LifecycleObject, LifecycleRule, ComplianceTask, VerificationRequirement, AuditEvent, and NotificationRule. Do not connect to Firestore yet.
```

## Task 3: Build Rule Evaluation Prototype

```text
Create a simple rule evaluation function that accepts a lifecycle object and rule set, then returns whether a task should be created. Include tests using product expiration and certification renewal examples.
```

## Task 4: Firestore Data Model Prototype

```text
Create Firestore collection design for lifecycleObjects, lifecycleRules, complianceTasks, verificationRecords, and auditEvents. Include sample seed data only. Do not modify production ServicesOS data.
```

## Task 5: ServicesOS Pilot Use Case Later

```text
Add a simple ServicesOS compliance use case: cleaning chemical expiration or equipment filter replacement. Use the shared lifecycle types. Keep it isolated from core workflows until tested.
```
