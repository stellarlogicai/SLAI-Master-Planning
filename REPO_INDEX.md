# SLAI Master Planning Repo Index

Document Status: Living Index
Implementation Status: Active Planning Reference
Last Updated: 2026-06-25
Repository: stellarlogicai/SLAI-Master-Planning
Primary Active Build: ServicesOS

## Purpose

This file is the root-level map for the SLAI Master Planning repo.

Use it to quickly find planning docs, understand which product area each file belongs to, and avoid losing roadmap decisions across chats, coding agents, and future planning passes.

## Current Priority Rule

ServicesOS is priority one.

All other product ideas are parked or future planning unless Jamie explicitly promotes them.

Current priority order:

1. ServicesOS
2. ServicesOS wife beta testing
3. ServicesOS UI fine-tuning
4. ServicesOS payments / Stripe / Stripe Connect
5. ServicesOS Tap to Pay later
6. SLAI website
7. GrowthAI
8. EducationOS
9. RetailOS / PharmacyOS
10. ComplianceAI
11. FutureAI

## Project-Level SLAI Master Index

This repo index should mirror the SLAI Master Index used inside the ChatGPT project.

Current project categories:

```text
ServicesOS Testing
ServicesOS Stripe
SLAI Website
GrowthAI Planning
EducationOS Planning
RetailOS PharmacyOS Ideas
ComplianceAI
FutureAI Research
```

These categories are the high-level planning lanes. The folders/files in this repo should gradually line up under those lanes so future searches start from this index instead of scattered memory.

## How To Use This Index

- Use `README.md` for the high-level repo purpose.
- Use `AI_CODING_ASSISTANT_RULES.md` before handing work to Claude, Codex, Devin, or another coding assistant.
- Use `ServicesOS/Active-Beta/` for current ServicesOS beta planning.
- Use `ServicesOS/Future-*` folders for parked ServicesOS ideas.
- Use `GrowthAI/` for parked GrowthAI planning.
- Use the project-level SLAI Master Index categories above when deciding where a new planning file belongs.
- Do not treat parked docs as active implementation unless Jamie explicitly says to work on them now.

---

# Root Files

## `README.md`

Purpose:

- Defines this repository as the planning memory for Stellar Logic AI.
- Points users and agents to `REPO_INDEX.md` first.
- States that ServicesOS is the only active build until beta-critical workflows are stable.
- Clarifies that active coding work lives in the `stellarlogicai/ServicesOS` repo.
- Defines this repo as a home for strategy, roadmaps, founder principles, research notes, future module plans, and internal SLAI planning.

Use when:

- A coding or planning assistant needs the top-level rule for the repo.
- You need to confirm that non-ServicesOS ideas are parked.

## `AI_CODING_ASSISTANT_RULES.md`

Purpose:

- Shared rulebook for AI coding assistants.
- Defines safe coding pass behavior, validation expectations, handoff requirements, scope-control rules, and ServicesOS priority rules.

Use when:

- Starting Claude/Codex/Devin work.
- Writing a coding prompt.
- Preventing scope creep.
- Confirming what tests/build/lint/reporting a coding pass should include.

Key themes:

- Keep coding tasks small.
- Fix beta blockers first.
- Do not touch high-risk systems unless explicitly scoped.
- Update handoff docs after coding work.
- Do not silently downgrade bad/missing auth profiles to customer.
- Manual estimate must work without AI/photos.

## `REPO_INDEX.md`

Purpose:

- Root table of contents for the planning repo.
- Should be updated any time a new planning file is added.

Use when:

- Trying to find where a planning topic lives.
- Starting a new chat or AI-agent pass.
- Deciding whether a topic is active, parked, or future roadmap.

---

# ServicesOS

ServicesOS is the active build and current company proof engine.

Project-index lanes covered here:

```text
ServicesOS Testing
ServicesOS Stripe
```

## `ServicesOS/Active-Beta/`

Purpose:

- Current ServicesOS wife-beta and active-beta planning.
- This folder contains the most important current product decisions.

### `ServicesOS/Active-Beta/README.md`

Purpose:

- Active beta planning index.
- Points to current ServicesOS beta planning/status files.

Use when:

- Starting a ServicesOS planning pass.
- Checking what active beta docs exist.

### `ServicesOS/Active-Beta/implementation-status-tracker.md`

Purpose:

- Tracks planning and implementation status across ServicesOS beta documents and related implementation work.

Use when:

- Checking which planning decisions are implemented, still in progress, or future roadmap.
- Updating status after coding work lands.

Important note:

- Do not mark implementation complete just because a planning doc exists.
- Only mark implementation complete when the code is built, validated, and pushed.

### `ServicesOS/Active-Beta/web-to-mobile-beta-sync-rule.md`

Purpose:

- Defines how the web app and React Native employee app should stay aligned.

Core rule:

```text
Finish/fix web workflow
→ confirm Firestore data shape/statuses
→ add matching employee mobile correspondence piece
→ test web + mobile together
```

Use when:

- Planning mobile app work.
- Deciding whether a mobile feature belongs in beta.
- Preventing the React Native app from becoming a separate uncontrolled product.

Key idea:

```text
Each stable web feature gets its relevant mobile correspondence piece.
```

### `ServicesOS/Active-Beta/beta-scope-decisions-and-mobile-mvp.md`

Purpose:

- Captures first beta scope decisions after confirming the employee app is part of beta.

Important decisions:

- Employees can be created, edited, and viewed.
- Employees can be assigned to jobs.
- React Native employee app is part of first beta.
- Before and after pictures are part of first beta.
- Full owner/admin web → employee mobile → owner/admin web workflow test is required.
- Training library is beta phase 2, not first beta.
- Payments stay web/admin only for first beta.

Primary golden path:

```text
Owner creates/views/edits employee
→ owner creates/views/edits customer
→ owner creates estimate
→ owner schedules job
→ owner assigns employee
→ employee opens React Native app
→ employee sees assigned job
→ employee opens job details
→ employee uploads before photos
→ employee starts job
→ employee checks off tasks
→ employee adds note/problem if needed
→ employee uploads after photos
→ employee completes job
→ owner sees completed job, checklist, notes, and photos in web app
```

Use when:

- Defining first beta scope.
- Writing mobile MVP prompts.
- Checking if a feature is beta-critical or future.

### `ServicesOS/Active-Beta/initial-target-customer-owner-operators.md`

Purpose:

- Defines the current ServicesOS target customer.

Current ICP:

```text
small cleaning-service owner/operator
owner or owner couple
0-5 helpers/employees to start
owner is often cleaning jobs too
limited admin time
limited software budget
needs simple day-to-day operating help
```

Core product rule:

```text
Owner mobile = run today.
Employee mobile = do the work.
Web app = manage the business in detail.
```

Use when:

- Deciding whether a feature is for the current beta or a later bigger-business roadmap.
- Preventing enterprise-style HR/dispatch/reporting features from outranking owner-operator needs.

---

## `ServicesOS/Future-Technical/`

Purpose:

- Parked technical architecture ideas for ServicesOS.
- These are not wife-beta tasks unless explicitly promoted.

### `ServicesOS/Future-Technical/firebase-extensions-watchlist.md`

Purpose:

- Tracks Firebase Extensions that may help ServicesOS later.

Likely useful later:

- Trigger Email from Firestore.
- Resize Images.
- Stream Firestore to BigQuery.
- Search Firestore extensions: Algolia, Typesense, Meilisearch, Elastic, Vector Search.
- Generate PDFs with Firestore / HTTP.
- Twilio / MessageBird messaging.
- Delete User Data / Export User Data.
- Firestore backup extensions.
- Stripe payment extensions for SLAI subscription billing only, not tenant job payments.

Important decision:

```text
Do not install Firebase Extensions for wife beta.
```

Future email architecture:

```text
Firebase / Firestore = source of truth + email queue + audit trail
Resend = email delivery provider
```

Use when:

- Revisiting email architecture.
- Considering image resizing, analytics, search, PDF generation, backups, or Stripe subscription billing.
- Preventing extension installs before ServicesOS is stable.

---

## `ServicesOS/Future-Mobile/`

Purpose:

- Parked future mobile direction beyond first employee beta.

### `ServicesOS/Future-Mobile/owner-admin-mobile-command-center.md`

Purpose:

- Captures the future need for owner/admin mobile functionality.

Core insight:

- Small cleaning-service owners are often also field workers.
- Long-term mobile cannot be employee-only.

Mobile role model:

```text
Employee mode
Owner field mode
Admin mode
```

Design principle:

```text
Phone for the day.
Web for the details.
```

Use when:

- Planning future owner/admin mobile.
- Deciding what belongs on phone versus web.
- Preventing a full desktop clone on mobile.

Current status:

- Future roadmap only.
- First beta still focuses on owner/admin web planning and employee mobile execution.

---

## `ServicesOS/Future-Verticals/`

Purpose:

- Parked future ServicesOS vertical expansion ideas.
- These should not distract from cleaning-business beta.

### `ServicesOS/Future-Verticals/appointment-services-barber-salon-flow.md`

Purpose:

- Captures future appointment-based verticals such as barbershops, salons, nail techs, massage therapists, estheticians, tattoo artists, pet groomers, and personal trainers.

Origin:

- Brother’s barber shop / Booksy-style workflow observations.

Important guardrail:

- Do not build now.
- Do not promote until cleaning beta is stable and Jamie explicitly promotes the vertical.

Use when:

- Revisiting appointment-service expansion after ServicesOS cleaning proof.

---

# SLAI Website

Project-index lane:

```text
SLAI Website
```

Current status:

- Planning lane exists in the ChatGPT project master index.
- No indexed repo folder/file has been confirmed yet in this planning repo.

Expected future folder:

```text
SLAI-Website/
```

Possible future docs:

- Website positioning.
- Homepage copy.
- ServicesOS landing section.
- SLAI company overview.
- Contact/demo request flow.

Priority:

- Behind ServicesOS beta-critical work.

---

# GrowthAI

Project-index lane:

```text
GrowthAI Planning
```

GrowthAI is future planning, not active build.

## `GrowthAI/`

Purpose:

- Parked GrowthAI planning.
- GrowthAI should not distract from ServicesOS beta.

### `GrowthAI/growthai-gap-review-and-planning-checklist.md`

Purpose:

- Captures the initial GrowthAI gap review after no complete GrowthAI doc was found.
- Defines likely missing product documents, MVP boundary, data requirements, and human-approval guardrails.

Recommended future direction:

```text
GrowthAI starts as a ServicesOS module later,
then becomes a reusable SLAI growth engine across future verticals.
```

Suggested future MVP:

```text
Growth Opportunities panel
→ shows 3–5 follow-up/customer growth opportunities
→ explains why each one appears
→ owner approves, edits, or dismisses
→ system tracks outcome
```

Core guardrail:

```text
AI notices.
AI suggests.
Human approves.
System records.
```

Use when:

- Revisiting GrowthAI after ServicesOS beta.
- Planning first-party growth intelligence inside ServicesOS.
- Preventing GrowthAI from becoming generic spam/outreach automation.

---

# EducationOS

Project-index lane:

```text
EducationOS Planning
```

Current status:

- Planning lane exists in the ChatGPT project master index.
- No indexed repo folder/file has been confirmed yet in this planning repo.

Expected future folder:

```text
EducationOS/
```

Priority:

- Parked until ServicesOS is stable.

---

# RetailOS / PharmacyOS

Project-index lane:

```text
RetailOS PharmacyOS Ideas
```

Current status:

- Planning lane exists in the ChatGPT project master index.
- No indexed repo folder/file has been confirmed yet in this planning repo.

Expected future folder:

```text
RetailOS-PharmacyOS/
```

Known idea direction:

- Retail/pharmacy workflow layer.
- Task-first workflow support.
- Future pharmacy-specific planning after RetailOS concepts mature.

Priority:

- Parked until ServicesOS is stable.

---

# ComplianceAI

Project-index lane:

```text
ComplianceAI
```

Current status:

- Planning lane exists in the ChatGPT project master index.
- No indexed repo folder/file has been confirmed yet in this planning repo.

Expected future folder:

```text
ComplianceAI/
```

Possible future role:

- Reusable lifecycle/compliance engine across SLAI products.
- Track objects, rules, expiration, audit trails, and required actions.

Priority:

- Parked until ServicesOS is stable.

---

# FutureAI

Project-index lane:

```text
FutureAI Research
```

Current status:

- Planning lane exists in the ChatGPT project master index.
- No indexed repo folder/file has been confirmed yet in this planning repo.

Expected future folder:

```text
FutureAI/
```

Priority:

- Research only.
- Do not let this distract from ServicesOS.

---

# Folder Map

```text
/
├── README.md
├── AI_CODING_ASSISTANT_RULES.md
├── REPO_INDEX.md
├── ServicesOS/
│   ├── Active-Beta/
│   │   ├── README.md
│   │   ├── implementation-status-tracker.md
│   │   ├── web-to-mobile-beta-sync-rule.md
│   │   ├── beta-scope-decisions-and-mobile-mvp.md
│   │   └── initial-target-customer-owner-operators.md
│   ├── Future-Technical/
│   │   └── firebase-extensions-watchlist.md
│   ├── Future-Mobile/
│   │   └── owner-admin-mobile-command-center.md
│   └── Future-Verticals/
│       └── appointment-services-barber-salon-flow.md
└── GrowthAI/
    └── growthai-gap-review-and-planning-checklist.md
```

## Project Lanes Not Yet Confirmed As Repo Folders

These lanes exist in the ChatGPT project master index but do not yet have confirmed planning folders/files in this repo index:

```text
SLAI Website
EducationOS Planning
RetailOS PharmacyOS Ideas
ComplianceAI
FutureAI Research
```

They should get folders only when Jamie wants to preserve concrete planning notes for them.

## Known Gap

This index is based on the files currently known and created/reviewed during planning work.

If more files already exist in the repo but are not listed here, add them during the next index maintenance pass.

Suggested future maintenance step:

```text
Run a full repository tree/listing locally or through GitHub, then update this file with any missing paths.
```

---

# Maintenance Rules

## Add New Files To This Index

Whenever a new planning file is created, update this index with:

- File path.
- Purpose.
- Product area.
- Current status.
- When to use it.
- Whether it is active or parked.

## Keep Status Honest

Do not mark an idea as implemented just because it has a planning document.

Use these meanings:

```text
Active Beta Planning = relevant to current ServicesOS beta decisions
Future Roadmap = preserve idea, do not build now
Parked = not active unless Jamie explicitly promotes it
Complete Planning Doc = planning file exists, not necessarily implemented
Implemented = code exists, validated, and pushed in implementation repo
```

## Scope Rule

If a document is not under `ServicesOS/Active-Beta/`, assume it is parked unless Jamie explicitly says otherwise.

## Coding-Agent Rule

Before coding, agents should read:

1. `README.md`
2. `AI_CODING_ASSISTANT_RULES.md`
3. This `REPO_INDEX.md`
4. The specific product-area doc for the task
5. The active handoff doc in the implementation repo, if coding ServicesOS

## Current Anchor

The next real execution priority remains:

```text
Finish ServicesOS owner/admin wife-beta walkthrough
Fix only beta blockers
Confirm employee create/edit/view workflow
Inspect existing React Native app
Build Employee Field MVP correspondence pieces
Run owner web → employee mobile → owner web workflow test
```
