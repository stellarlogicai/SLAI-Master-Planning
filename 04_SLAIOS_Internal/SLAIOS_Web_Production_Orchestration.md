# SLAIOS Web Production Orchestration

**Status:** Parked future internal workflow  
**Last Updated:** 2026-09-01  
**Active Build Priority:** ServicesOS remains priority one.  
**Purpose:** Define how SLAIOS could eventually coordinate SLAI Web production while humans retain QA and approval authority.

## Core Idea

SLAIOS should eventually make SLAI Web production feel like a controlled internal pipeline rather than a pile of chats, repos, client notes, and manual handoffs.

The desired operating model:

> **Automate volume. Preserve human judgment. Provide context at every decision point.**

## Inputs

SLAIOS may gather approved context from:

- ServicesOS tenant/business settings,
- SLAI client records,
- selected website layout,
- logo/brand assets,
- customer-approved copy,
- service/pricing data,
- staff/team data,
- domain/hosting state,
- prior website decisions,
- support history,
- shared SLAI Web standards,
- the protected Web Engine core.

## Website Job Packet

Before AI or a developer touches the site, SLAIOS should prepare a job packet such as:

```text
Customer: American Barbershop
Service: Website Build + Managed Web
ServicesOS tenant: connected / not connected
Layout: Booking First v3
Brand data: verified
Business data: verified
Customer layer: editable
Shared core: protected
Booking connector: protected
Allowed files: listed
Acceptance criteria: listed
Required checks: listed
Client requests: summarized
Human approver: assigned
```

This should reduce repeated explanation and model usage.

## Production Flow

```text
New website order
↓
SLAIOS verifies intake completeness
↓
Pull approved ServicesOS/public business data
↓
Recommend approved layout(s)
↓
Human selects/approves direction
↓
Prepare AI/developer task packet
↓
AI customizes customer layer
↓
Automated build / link / accessibility / SEO checks
↓
Human Web QA
↓
Client preview
↓
Client/human approval
↓
Deploy
↓
SLAIOS records deployment, version, decisions, and maintenance state
```

## Automation Levels

### Safe / Routine Automation

May run without a human click when properly bounded:

- gathering authorized context,
- organizing assets,
- generating task briefs,
- copying approved tenant data,
- running builds/tests,
- link checks,
- basic accessibility scans,
- basic SEO checks,
- creating QA summaries,
- monitoring uptime,
- backups,
- preparing reversible drafts,
- recording status.

### Human Checkpoint

Require human review before consequential customer-facing change:

- initial design direction,
- generated customer-facing copy,
- unusual layout changes,
- new production website,
- major visual revisions,
- public business claims,
- ServicesOS connector changes,
- production deployment.

### High-Authority Checkpoint

Require the appropriate human authority:

- pricing/contract commitments,
- refunds/credits beyond policy,
- legal claims,
- security incidents,
- destructive data actions,
- shared-core production changes,
- changes that affect multiple customer sites.

## AI Model Routing

SLAIOS may use the existing internal model philosophy:

- **Luna** — retrieval, intake organization, asset inventory, documentation, routine QA summaries.
- **Terra** — normal customer-layer implementation, responsive fixes, component configuration, tests.
- **Sol** — shared-core architecture, security, production connector changes, high-risk review.

The normal customer website should rarely need Sol if the shared platform is stable.

## Human QA Role

At higher volume, a Web Implementation / QA Developer can become the primary human checkpoint.

The role should:

- evaluate whether the generated site actually looks good,
- verify brand fit,
- catch false/invented copy,
- test responsive behavior,
- validate booking/lead flows,
- validate ServicesOS connection,
- handle DNS/deployment,
- fix edge cases,
- protect the shared core,
- escalate true platform bugs.

The employee should receive a complete context packet instead of being told to "figure out the repo."

## Founder Role

As the pipeline matures, Jamie's normal involvement can shrink toward:

```text
Review business context
↓
Approve layout/direction
↓
Review final QA evidence/preview
↓
Approve deployment or request change
```

Routine site assembly should not require founder coding.

## Brainstorming Boundary

SLAIOS should not become the only place Jamie is allowed to think.

Freeform brainstorming can remain in ChatGPT or another preferred conversational environment.

Recommended boundary:

```text
Brainstorm freely
↓
Pressure-test idea
↓
Decide whether it matters
↓
Promote approved decision into SLAIOS
↓
SLAIOS documents / prioritizes / executes
```

This prevents every random idea from becoming a company commitment while preserving creative exploration.

## Low-AI-Usage Goal

The orchestration system should reduce model usage through:

- canonical company context,
- reusable task packets,
- stable layout/core versions,
- small task-delta prompts,
- protected files,
- explicit acceptance criteria,
- automated checks,
- no repeated architecture rediscovery.

A routine task should look like:

> Use Web Core v1.4 and Layout 05. Apply Tenant X's approved customer layer. Do not modify shared core or booking connector. Run standard checks. Report only failures, changes, and preview status.

## Scale

At high volume, SLAIOS should manage a queue:

```text
Website orders
↓
Intake readiness
↓
Layout assignment
↓
Generation/customization
↓
Automated QA
↓
Human QA queue
↓
Client approvals
↓
Deployments
↓
Maintenance
```

The limiting factor should become human QA and customer response, not repeated manual code generation.

## Related Planning

- `../02_Website/SLAI_Web_Engine.md`
- `../03_SLAI_Company/SLAI_Web_Services_Business_Model.md`
- `../16_SLAI_Company_Engine/05_Founder_Workflow.md`
- `Forge/Engineering_QA_and_Organization_Model.md`
- `SLAIOS_Architecture_and_Vision.md`

## Guardrail

Do not build this orchestration merely because it sounds efficient.

First prove:

1. ServicesOS is stable and has real usage.
2. SLAI Web has real paying customers.
3. The website production workflow is repeatable.
4. Human QA is actually becoming a bottleneck.
5. Automating the workflow reduces founder/team load more than it adds complexity.
