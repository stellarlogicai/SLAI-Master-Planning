# SLAIOS Employee Workspace, People, HR, and Payroll

Status: Future planning only.

## Goal

SLAIOS should support the entire company, not only executives.

Each employee receives a role-aware operating surface that gives them the information, work, communication, and self-service tools appropriate to their position.

## Single-Identity Employee Experience

The default employee experience should be:

~~~text
sign into SLAIOS
→ see assigned work and authorized company context
→ launch approved tools/workspaces from SLAIOS
→ downstream credentials are brokered by the system
~~~

Employees should not be expected to remember separate high-value logins for coding agents, repositories, CI, worker hosts, or internal toolchains when SLAIOS can securely broker those connections.

SLAIOS should still preserve human accountability even when downstream execution uses a service account or workload identity.

## Employee Home

A future employee home may include:

```text
Today
- assigned priorities
- messages needing response
- relevant decisions
- meetings / deadlines

Work
- projects
- tasks
- goals
- contributions

Company
- announcements
- channels
- knowledge
- decisions

People
- PTO
- payroll
- training
- documents
- profile

Rewards
- points
- achievements
- team quests
- available perks

Ask SLAIOS
- role-authorized Luna / Terra / Sol workflows
```

## Employee Profile

Potential record:

- name,
- role/title,
- department,
- manager,
- projects/products,
- start date,
- employment status,
- time zone,
- access/permissions,
- training,
- certifications,
- policy acknowledgements,
- goals,
- equipment,
- restricted employment documents,
- compensation/payroll references with stronger access controls.

## Scoped Context and Founder-Interruption Reduction

SLAIOS should answer routine operating questions from authoritative company context so new employees do not require constant founder explanation.

The system should normally answer:

- what product/project is active,
- what objective is assigned,
- which repository/workspace is authoritative,
- what the approved architecture says,
- what may be changed,
- what requires approval,
- what the current budget/capacity is,
- what validation is required,
- why a prior decision was made,
- who owns the next step.

Human escalation should focus on:

- genuinely new product decisions,
- ambiguous requirements,
- architecture tradeoffs,
- unusual customer situations,
- security/policy exceptions,
- budget increases,
- priority changes,
- consequential people decisions.

Core principle:

> **Documented company truth should answer routine questions. Human attention should be reserved for judgment.**

This is a major reason SLAIOS/Forge should be thoroughly planned before significant hiring: future employees enter an already-structured operating environment rather than depending on Jamie to reconstruct context repeatedly.

## Remote-First Operations

SLAIOS should assume employees may work from different locations and time zones.

Support:

- async handoffs,
- time-zone-aware deadlines and notifications,
- availability/status without surveillance,
- remote onboarding,
- remote equipment/access workflows,
- documentation-first work,
- and clear ownership.

## Onboarding

Potential flow:

1. employment paperwork,
2. policies and acknowledgements,
3. SLAIOS identity plus role/project assignments,
4. equipment,
5. required training,
6. team/product introduction,
7. role responsibilities,
8. first-week goals,
9. authorized SLAIOS context.

Luna may act as an onboarding guide using only approved knowledge.

## Offboarding

Potential controlled workflow:

```text
employment status change
  ->
disable SLAIOS identity
  ->
revoke sessions and connected/brokered access
  ->
transfer owned work
  ->
archive required records
  ->
equipment return
  ->
final payroll checklist
```

Every step should have human ownership and auditable confirmation.

## PTO and Leave

Employees may:

- view eligible balance,
- submit requests,
- see status,
- receive policy guidance.

Managers may receive:

- request details,
- authorized coverage context,
- relevant team schedule,
- policy constraints.

AI may provide context; a human approves/declines.

## Payroll Strategy

Do not begin by building a payroll tax engine.

SLAIOS should initially coordinate payroll data with an established provider.

Potential source data:

- pay period,
- salary/hourly status,
- approved hours,
- approved PTO,
- bonuses,
- approved compensation changes,
- reimbursement/reward classifications,
- payroll status.

Provider responsibilities initially remain:

- tax calculations,
- withholding,
- filings,
- regulated payroll execution,
- tax forms.

## Employee Payroll Self-Service

Where provider integration permits, employees may see:

- next payday,
- pay period,
- approved hours/PTO,
- payroll status,
- pay statements,
- tax/document links.

## HR Decision Boundaries

SLAIOS may help managers prepare evidence and summaries.

It should not independently decide:

- hire,
- fire,
- promote,
- discipline,
- compensation,
- protected leave determinations,
- or other high-impact employment actions.

Humans evaluate humans.

## Privacy

HR, payroll, compensation, home/shipping address, and other restricted employee data must be compartmentalized.

AI receives only the minimum information needed for the current authorized task.
