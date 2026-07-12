# SLAI Master Planning Repo Index

Document Status: Living Index  
Implementation Status: Active Planning Reference  
Last Updated: 2026-07-11  
Repository: `stellarlogicai/SLAI-Master-Planning`  
Primary Active Build: ServicesOS

## Purpose

This repository is the planning memory for Stellar Logic AI.

Use this index to:

- find the correct product, platform, or company-planning area,
- understand what is active, parked, or future work,
- preserve decisions across chats and coding agents,
- prevent duplicate planning folders,
- and keep ServicesOS as the current execution anchor.

## Current Priority Rule

ServicesOS remains priority one.

All other products, internal systems, and shared-platform ideas remain parked or planning-only unless Jamie explicitly promotes them.

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

GrowOS is an advanced future-product discovery lane and a likely candidate for the next major SLAI software division after ServicesOS, but it is not an active build.

## Start Here

Before planning or coding, read:

1. `README.md`
2. `AI_CODING_ASSISTANT_RULES.md`
3. `REPO_INDEX.md`
4. the relevant product, platform, or company folder
5. the active implementation handoff when working on ServicesOS

---

# Canonical Numbered Folder Structure

## `00_READ_FIRST/`

Entry documents, priority rules, and repository-orientation material.

## `01_ServicesOS/`

ServicesOS planning. This is the active product and current company proof engine.

Key areas include:

- `Active-Beta/` — active wife-beta and employee-field-MVP planning
- `Future-Mobile/` — parked owner/admin and future mobile direction
- `Future-Technical/` — parked technical architecture and provider watchlists
- `Future-Verticals/` — parked service-vertical expansion
- `FutureModules/` — parked cross-product and future module planning

Core rule:

> ServicesOS remains the only active build until beta-critical workflows are stable.

## `02_Website/`

SLAI website positioning, content, funnel, and company/product website planning.

Status: Behind ServicesOS beta-critical work.

## `03_SLAI_Company/`

Company strategy, software-division structure, pricing philosophy, organization, business model, and long-term company planning.

This folder defines how Stellar Logic AI is structured as a company.

## `04_SLAIOS_Internal/`

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

Status: Parked until ServicesOS reaches stable customer-ready V1 with real usage.

## `05_GrowthAI/`

GrowthAI planning, including the preserved gap review and future internal growth-engine direction.

Core rule:

> AI notices. AI suggests. Human approves. System records.

Status: Parked.

## `06_EducationOS/`

EducationOS planning.

EducationOS began around online tutoring and teaching and has expanded into a substantial education platform with:

- lesson and course delivery,
- authoring,
- assessments,
- progress tracking,
- tutoring and teaching workflows,
- and a future marketplace where teachers can publish and monetize lessons.

EducationOS remains its own future software division. Proven learning, certification, competency, and course-delivery capabilities may also be reused by other SLAI divisions where appropriate.

Status: Parked.

## `07_RetailOS_PharmacyOS/`

Future RetailOS and PharmacyOS planning.

Core direction:

- preserve database integrity and corporate reporting,
- add a task-first workflow layer,
- reduce screen switching, training friction, compliance misses, and employee interruption.

Status: Parked.

## `08_ComplianceAI/`

Future reusable compliance and lifecycle engine.

Potential responsibilities:

- rule tracking,
- expiration,
- required actions,
- approval history,
- audit evidence,
- and cross-division compliance support.

Status: Parked.

## `09_FutureAI_Research/`

Long-range AI research and future concepts.

Status: Research only. Do not allow this lane to distract from ServicesOS.

## `10_AntiCheat_Security/`

SLAI anti-cheat, AI security, behavioral telemetry, competitive-integrity, and related security planning.

Status: Future product/research lane unless explicitly promoted.

## `11_Questionnaires/`

Reusable discovery, interview, validation, partner, customer, and research questionnaires.

Use this folder to keep structured discovery material separate from product specifications.

## `12_Milestones/`

Company and product milestone definitions, promotion gates, launch criteria, and progress checkpoints.

## `13_Governance_Ethics/`

Company-wide AI governance, human responsibility, ethics, data ownership, privacy, and decision-boundary planning.

## `14_GrowOS/`

GrowOS / GreenhouseOS research and future-product planning.

Current main-branch content includes:

- `Research/GrowOS_Enterprise_Readiness_and_Procurement_Gates.md`

Additional GrowOS research and commercial-planning material may exist in open planning pull requests until reviewed and merged.

Core direction:

> Keep the hardware that already works. Keep METRC as the regulated system of record. Replace fragmented workflow and reporting first. Add read-only intelligence before any production control.

Status: Advanced discovery and partner validation only. Do not begin active development before ServicesOS reaches its defined stability and staffing gates.

## `15_SLAI_Platform_Core/`

Shared company-wide platform principles, architecture, and inherited standards.

Current topics include:

- cross-product linking,
- product-promotion rules,
- ecosystem architecture,
- modular operating-system architecture,
- shared security foundations,
- product ecosystem mapping,
- and transparent variable-cost governance.

This folder defines what SLAI divisions may share. It is not an active standalone product.

## `16_SLAI_Company_Engine/`

Integrated blueprint for how SLAIOS, GrowthAI, research, lead discovery, ServicesOS operating data, founder approvals, company knowledge, and internal workflows eventually connect.

Distinction:

- `03_SLAI_Company/` defines the company and its strategy.
- `04_SLAIOS_Internal/` defines the future internal operating-system product.
- `05_GrowthAI/` defines the future growth-intelligence product.
- `16_SLAI_Company_Engine/` explains how those systems and data sources work together as one internal company engine.

Status: Future planning only.

## `99_Archive/`

Superseded, deprecated, historical, or preserved planning that should no longer guide current decisions.

---

# Root Files

## `README.md`

High-level repository purpose and priority rule.

## `AI_CODING_ASSISTANT_RULES.md`

Shared rulebook for AI coding assistants, including scope control, validation expectations, and ServicesOS priority protection.

## `REPO_INDEX.md`

This living repository map. Update it whenever folders or material planning files are added, renamed, moved, or archived.

## `.gitignore`

Repository exclusion rules.

---

# Folder and Naming Rules

## Canonical locations

The numbered folders above are the canonical planning locations.

Do not create duplicate unnumbered root folders for:

- ServicesOS,
- GrowthAI,
- GrowOS,
- SLAI Platform Core,
- or SLAI Company Engine.

## New major divisions

When a new major product or internal-system lane becomes concrete enough to require its own top-level folder:

1. confirm that it does not belong under an existing division,
2. assign the next appropriate number,
3. add a README describing its status and boundaries,
4. update this index,
5. and keep it parked unless Jamie explicitly promotes it.

## File moves

When moving planning files:

- preserve Git history through renames where possible,
- update stale path references,
- verify no duplicate copy remains,
- and confirm the destination folder is canonical.

---

# Status Definitions

```text
Active Build = currently being coded and validated
Active Beta Planning = relevant to current ServicesOS beta decisions
Advanced Discovery = research, partner discussion, and validation without coding
Future Roadmap = preserve the idea; do not build now
Parked = inactive unless Jamie explicitly promotes it
Complete Planning Doc = the planning file exists; implementation may not
Implemented = code exists, is validated, and is pushed in the implementation repo
```

## Scope Rule

Unless Jamie explicitly says otherwise:

- ServicesOS is active.
- GrowOS is advanced discovery only.
- Everything else is parked, internal future planning, or research.

## Coding-Agent Rule

Before coding, agents should read:

1. `README.md`
2. `AI_CODING_ASSISTANT_RULES.md`
3. `REPO_INDEX.md`
4. the specific product-area document
5. the active implementation handoff when coding ServicesOS

## Current Execution Anchor

```text
Finish ServicesOS testing after refactoring
→ fix beta-critical bugs
→ complete wife beta
→ fine-tune UI
→ stabilize payments
→ then consider Tap to Pay and later product promotion
```
