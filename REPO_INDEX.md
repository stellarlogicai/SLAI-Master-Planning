# SLAI Master Planning Repo Index

Document Status: Living Index
Implementation Status: Active Planning Reference
Last Updated: 2026-07-11
Repository: `stellarlogicai/SLAI-Master-Planning`
Primary Active Build: ServicesOS

## Purpose

This repository is the planning memory for Stellar Logic AI.

Use this index to:

- find the correct product or company-planning area,
- understand what is active, parked, or future work,
- preserve decisions across chats and coding agents,
- and prevent future products from distracting from ServicesOS.

## Current Priority Rule

ServicesOS remains priority one.

All other products and shared-platform ideas remain parked or planning-only unless Jamie explicitly promotes them.

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

GrowOS is an advanced future-product discovery lane and likely candidate for the next major SLAI software division after ServicesOS, but it is not an active build.

## Start Here

Before planning or coding, read:

1. `README.md`
2. `AI_CODING_ASSISTANT_RULES.md`
3. `REPO_INDEX.md`
4. the relevant product or company folder
5. the active implementation handoff when working on ServicesOS

## Canonical Numbered Planning Folders

### `00_READ_FIRST/`

Entry documents, priority rules, and repo-orientation material.

### `01_ServicesOS/`

ServicesOS planning. ServicesOS is the active product and current company proof engine.

Use this area for current product direction, beta scope, future modules, and implementation planning that follows the active ServicesOS priority rule.

### `02_Website/`

SLAI website positioning, content, funnel, and future company/product website planning.

### `03_SLAI_Company/`

Company strategy, software-division structure, business model, pricing philosophy, and long-term company planning.

### `04_SLAIOS_Internal/`

SLAIOS internal company operating-system planning.

Primary future purpose:

- company knowledge,
- decision history,
- product priorities,
- planning context,
- AI context packs,
- customer feedback,
- handoffs,
- and internal operating visibility.

SLAIOS is parked until ServicesOS reaches stable customer-ready V1 with real usage.

### `05_GrowthAI/`

GrowthAI planning.

GrowthAI should begin as an internal SLAI growth intelligence and automation capability after ServicesOS V1, following the rule:

> AI notices. AI suggests. Human approves. System records.

### `06_EducationOS/`

EducationOS planning.

EducationOS began around online tutoring and teaching and has expanded into a substantial education platform, including learning delivery, authoring, assessment, progress tracking, and a future marketplace where teachers can publish and monetize lessons.

EducationOS remains its own future software division. Proven learning, certification, competency, and course-delivery capabilities may also be reused by ServicesOS, GrowOS, and other SLAI divisions where appropriate.

Status: Parked.

### `07_RetailOS_PharmacyOS/`

Future RetailOS and PharmacyOS planning.

Core direction:

- preserve database integrity and reporting,
- add a task-first workflow layer,
- reduce screen switching, training friction, missed compliance work, and employee interruption.

Status: Parked.

### `08_ComplianceAI/`

Future reusable compliance and lifecycle engine.

Potential responsibilities:

- rule tracking,
- expiration,
- required actions,
- approval history,
- audit evidence,
- and cross-division compliance support.

Status: Parked.

### `09_FutureAI_Research/`

Long-range AI research and future concepts.

Status: Research only. Do not allow this lane to distract from ServicesOS.

### `10_AntiCheat_Security/`

SLAI anti-cheat, AI security, behavioral telemetry, competitive-integrity, and related security planning.

Status: Future product/research lane unless explicitly promoted.

### `11_Questionnaires/`

Reusable discovery, interview, validation, partner, customer, and research questionnaires.

Use this folder to keep structured discovery material separate from product specifications.

### `12_Milestones/`

Company and product milestone definitions, promotion gates, launch criteria, and progress checkpoints.

### `13_Governance_Ethics/`

Company-wide AI governance, human responsibility, ethics, data ownership, privacy, and decision-boundary planning.

### `99_Archive/`

Superseded, deprecated, historical, or preserved planning that should no longer guide current decisions.

## Shared and Transitional Root Folders

The repository also currently contains shared or legacy root folders that may overlap with the numbered structure.

### `GrowOS/`

Advanced GrowOS / GreenhouseOS discovery and research.

Core direction:

> Keep the hardware that already works. Keep METRC for compliance. Replace the fragmented software and manual operating layer around them.

GrowOS is a future cultivation workflow and intelligence platform focused on operational consistency, SOP execution, task accountability, room-reset workflows, reporting consolidation, read-only context, private facility intelligence, and later carefully bounded integrations.

Status: Parked discovery. No active product build until ServicesOS promotion gates are satisfied.

### `GrowthAI/`

Legacy or transitional GrowthAI planning path. Prefer `05_GrowthAI/` for the canonical numbered structure when adding future documents unless an existing document relationship requires otherwise.

### `SLAI_Company_Engine/`

Shared company-engine planning and reusable internal company capabilities.

### `SLAI_Core/`

Shared SLAI architecture, business rules, cross-division design standards, and reusable capability planning.

Important current documents include:

#### `SLAI_Core/Transparent_Variable_Cost_Governance.md`

Company-wide standard for any feature capable of creating substantial or unbounded variable cost.

Core rules:

- include practical normal usage,
- meter expensive usage,
- show current consumption and remaining allowance,
- warn before overage,
- support caps or approval gates,
- avoid surprise billing,
- attribute cost per tenant and feature,
- optimize internal delivery cost,
- and never block essential safety, legal access, or compliance continuity merely because optional credits are depleted.

Use when planning:

- AI credits,
- email,
- SMS,
- storage,
- image/video processing,
- camera monitoring,
- external APIs,
- maps,
- data retention,
- document generation,
- enterprise capacity,
- and any other usage-sensitive feature.

### `ServicesOS/`

Legacy or transitional ServicesOS folder containing active and future planning material. Continue respecting the active-beta rules inside it. Do not assume numbered-folder migration changes implementation status.

## Root Files

### `README.md`

High-level repository purpose and priority rule.

### `AI_CODING_ASSISTANT_RULES.md`

Shared coding-agent guardrails, validation expectations, scope control, and reporting requirements.

### `REPO_INDEX.md`

This living map. Update it whenever a meaningful planning file, product lane, or company-wide standard is added.

### `.gitignore`

Repository ignore rules.

## Company-Wide Design Principles

### ServicesOS remains the anchor

Future products may be researched and documented, but they must not steal execution focus from ServicesOS.

### Build simple first

Complexity must be earned through demonstrated need.

### SLAI absorbs complexity

> Complexity belongs inside the platform, not inside the customer's day.

### Power without complexity

> Learn in minutes. Master through use.

Every SLAI product should guide the user toward:

- what to do next,
- what matters most,
- what information is needed,
- and whether the work is complete.

### Humans remain responsible

AI may notice, compare, explain, recommend, draft, or prioritize. Humans remain responsible for important operational, financial, employment, safety, compliance, and treatment decisions.

### Reuse without premature dependency

Each software division owns its market. Shared capabilities may be reused where they create real value.

Do not force an active product to wait for an unfinished future division. Build the smallest proven capability where first needed, keep it modular, and promote it into shared SLAI infrastructure only after the need is real.

### Transparent variable-cost governance

> Any feature capable of generating massive cost through excessive use must have a transparent gate, allowance, credit system, quoted limit, or paywall.

The customer must understand:

- what is included,
- what creates usage,
- current consumption,
- remaining allowance,
- the cost of additional usage,
- and what happens at the limit.

## Status Definitions

```text
Active Build = current coding and implementation priority
Active Beta Planning = directly relevant to ServicesOS beta decisions
Structured Discovery = interviews, research, validation, and planning only
Future Roadmap = preserve the idea; do not build now
Parked = inactive unless Jamie explicitly promotes it
Complete Planning Doc = documentation exists; implementation may not
Implemented = code exists, is validated, and is pushed in the implementation repo
Archived = preserved for history but no longer authoritative
```

## Maintenance Rules

Whenever a new planning file is created, update this index with:

- file path,
- purpose,
- product or company area,
- current status,
- when to use it,
- and whether it is active, parked, or shared infrastructure.

Do not mark a feature implemented merely because a planning file exists.

## Current Execution Anchor

```text
Finish and stabilize ServicesOS wife beta
→ fix beta-critical bugs
→ complete real workflow testing
→ run wife beta
→ fine-tune UI
→ stabilize payments
→ establish repeatable onboarding and retained usage
→ then promote future products deliberately
```
