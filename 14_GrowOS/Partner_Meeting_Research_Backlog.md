# GrowOS Partner Meeting Research Backlog

Status: Discovery planning / no active build authorization

Purpose: Identify the remaining questions that should be answered before GrowOS is promoted into active validation or major development.

## 1. Immediate Partner-Meeting Research

The first meeting with Budd should clarify:

- what he has already planned, documented, or validated,
- whether his concept is software, consulting, hardware, workflow, or a combination,
- which facilities and states shaped his thinking,
- what he believes the first paid problem should be,
- which systems operators already pay for,
- which subscriptions they would cancel,
- what his realistic role and time commitment would be,
- whether his wife wants an active compliance role,
- and what independent operators could be interviewed next.

## 2. Current Facility Cost Stack

This is the most important remaining commercial research.

For at least three independent facilities, collect:

- seed-to-sale and ERP spend,
- controller software spend,
- sensor and API fees,
- task or checklist software,
- training software,
- reporting and BI tools,
- consultant retainers,
- compliance labor,
- manager follow-up time,
- room-reset downtime,
- integration and support fees,
- and software users wish they could cancel.

The goal is to replace modeled savings with real facility evidence.

## 3. Workflow and Role Mapping

Document the daily, weekly, stage-based, and cycle-based work of:

- cultivation technicians,
- room leads,
- irrigation and fertigation staff,
- cultivation managers,
- Directors of Cultivation,
- compliance staff,
- facilities engineers,
- owners and COOs,
- consultants,
- and IT or security teams.

For every role, identify:

- decisions made,
- data required,
- current tools,
- handoffs,
- duplicate entry,
- failure points,
- approvals,
- and measurable cost.

## 4. METRC Workflow Discovery

Before deciding integration scope, document:

- data entered into METRC,
- data imported or exported,
- duplicate internal records,
- corrections and rejected submissions,
- approval and reconciliation workflows,
- role permissions,
- audit preparation,
- API limitations,
- state differences,
- and which operational data should never be forced into METRC.

The first question is not "Can the API do it?" It is "Which workflow should GrowOS own, and which workflow must remain in METRC?"

## 5. Hardware and Controller Inventory

Collect real examples from target facilities:

- controller brands and models,
- probes and sensors,
- HVAC and dehumidification,
- lighting,
- irrigation and fertigation equipment,
- gateways,
- camera systems,
- network design,
- protocol support,
- API or export access,
- cloud dependence,
- and current support contracts.

Do not assume a protocol is usable until access, authorization, safety, and vendor support are confirmed.

## 6. Integration Priority Research

For each real facility, rank integrations by:

- financial value,
- workflow value,
- customer demand,
- technical feasibility,
- regulatory risk,
- liability,
- support burden,
- and time to deploy.

The likely first integrations are:

1. CSV or manual import
2. METRC read context
3. one environmental or irrigation data source
4. camera still ingestion
5. additional read-only controller adapters

This sequence should change only if real operators provide stronger evidence.

## 7. Competitor Replacement Interviews

Ask operators directly about:

- Canix,
- Flourish,
- GrowFlow,
- Cultivera,
- Distru,
- Trym,
- AROYA,
- Growlink,
- Priva,
- Argus,
- TrolMaster,
- spreadsheets,
- task apps,
- and in-house tools.

For each product, ask:

- what they use it for,
- what they pay,
- what they like,
- what they hate,
- what they cannot replace,
- and what they would cancel if GrowOS handled the workflow better.

## 8. Paid-Pilot Economics

Before coding a major V1, determine:

- who can approve a paid pilot,
- realistic pilot price,
- procurement requirements,
- implementation expectations,
- pilot duration,
- selected rooms and users,
- data access,
- success metrics,
- renewal decision,
- and what proof triggers a full contract.

A credible pilot is a future controlled customer deployment after the pilot-safe V1 is stable, tested, and guarded.

## 9. Corporate Adoption and Procurement

Research:

- security questionnaires,
- insurance requirements,
- vendor onboarding,
- legal review,
- data-processing agreements,
- uptime and SLA expectations,
- support windows,
- background or facility access requirements,
- IT and facilities-engineering approval,
- change management,
- and implementation ownership.

This will determine whether the first customer should be founder-led, mid-size, or enterprise.

## 10. Security and OT Threat Model

Before any controller integration, define:

- tenant and facility isolation,
- credential storage,
- network segmentation,
- read-only versus write roles,
- stale and spoofed sensor data,
- local outage behavior,
- gateway compromise,
- command signing,
- manual override,
- safe-state behavior,
- audit logs,
- emergency shutdown boundaries,
- and incident response.

No controller write scope should enter V1 without a dedicated controls and security review.

## 11. Liability, Insurance, and Contract Research

Research with qualified counsel or insurance professionals:

- crop-loss liability,
- incorrect recommendation liability,
- controller and equipment damage,
- remote-access liability,
- compliance submission responsibility,
- employee privacy,
- camera use,
- vendor warranty restrictions,
- professional liability insurance,
- cyber insurance,
- limitation-of-liability language,
- and customer responsibility for final cultivation decisions.

## 12. Founding Structure and IP

Before any co-founder agreement, clarify:

- GrowOS ownership by SLAI or a subsidiary,
- Budd's existing planning and intellectual property,
- Jamie's existing GrowOS planning and SLAI platform assets,
- future code and invention ownership,
- Budd's time commitment,
- capital contribution,
- customer introductions,
- decision authority,
- compensation,
- vesting,
- founder departure,
- investor dilution,
- exclusivity,
- and his wife's possible role.

Capital and operating contribution should be treated separately.

## 13. Founder Evidence and Case-Study Validation

Document Jamie's historical room-reset case more rigorously where possible:

- baseline process,
- original average duration,
- new process,
- staffing changes,
- sanitation standards,
- quality controls,
- measured turnaround,
- repeatability,
- and operational effect.

Also preserve:

- training schedule design,
- employee progress tracking,
- readiness criteria,
- and advancement recommendations.

This may later support a credible founder story and room-lifecycle product module.

## 14. Crop-Agnostic Expansion Research

Do not assume cannabis automatically transfers to other crops.

Research the best second vertical by comparing:

- ornamentals,
- propagation,
- nurseries,
- herbs,
- leafy greens,
- tomatoes,
- peppers,
- and strawberries.

Score each for:

- labor intensity,
- SOP repetition,
- crop value,
- software fragmentation,
- incumbent strength,
- sensor dependence,
- regulatory burden,
- and willingness to pay.

## 15. Recommended Research Order

### Before the first serious partner meeting

1. Review the conversation guide.
2. Prepare a one-page GrowOS vision summary.
3. Prepare the cost-elimination positioning.
4. List the assumptions that need Budd's correction.

### Immediately after partner alignment

5. Interview Budd's wife about METRC workflows.
6. Obtain three independent operator interviews.
7. Build real current-cost-stack maps.
8. Identify the easiest software replacements.
9. Identify one credible future pilot facility.

### Before major architecture or coding

10. Map the selected facility's workflows.
11. Define V1 replacement targets and 90-day savings metrics.
12. Confirm METRC and first sensor integration paths.
13. Complete security, liability, and procurement research.
14. Resolve founding roles and IP.
15. Confirm ServicesOS promotion gates have been met.

## 16. Questions Jamie Should Be Ready to Answer

- What does GrowOS replace first?
- What does it deliberately not replace?
- What costs disappear in the first 90 days?
- Why will employees use it daily?
- Why is this different from Trym, AROYA, Growlink, and seed-to-sale ERP?
- Why should a CFO approve it?
- Why should a Director of Cultivation trust it?
- How does it protect existing hardware investments?
- What is advisory versus automated?
- Who owns the product and intellectual property?
- Why is SLAI qualified to build it?
- Why is ServicesOS still the current priority?

## 17. Readiness Standard

Jamie is ready for a serious partner conversation when he can clearly explain:

1. the problem,
2. the first replaceable cost layer,
3. the first customer,
4. the first measurable savings,
5. the systems GrowOS keeps,
6. the systems GrowOS replaces,
7. the V1 safety boundaries,
8. the proposed partner roles,
9. and the conditions that must be met before active development.

The meeting does not need final answers. Its purpose is to expose assumptions, compare existing work, and define the next evidence to collect.