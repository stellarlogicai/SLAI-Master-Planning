# Coding Assistant Brief for GrowthAI

## Critical Instruction

Do not overbuild.

The MVP is an internal founder tool, not a full CRM replacement.

Build in this order:

1. Firestore schema
2. Lead CRUD
3. Dashboard
4. AI research endpoint
5. Outreach drafts
6. Follow-up tracking
7. Weekly review

## Architectural Rules

- Use tenantId everywhere.
- Keep GrowthAI isolated as a module.
- Reuse existing auth, Firebase, role, and UI patterns.
- Do not break ServicesOS.
- Do not add autonomous sending in MVP.
- Human approval is required.
- Store schemaVersion on documents.
- Add basic tests for CRUD and AI endpoint.

## Done Means

- Jamie can add a lead.
- Jamie can research a lead with AI.
- Jamie can generate outreach drafts.
- Jamie can track status.
- Jamie can view dashboard.
- Jamie can review weekly progress.
