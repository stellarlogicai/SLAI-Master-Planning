# SLAIOS Permissions and Information Boundaries

## Principle

> Right information. Right person. Right task. Minimum necessary context.

SLAIOS should enforce authorization before data is retrieved or sent to an AI model.

Hiding information in the UI is not sufficient.

A user's effective authority should be derived from the current task and explicit permissions, not merely from the fact that SLAIOS or the underlying server can technically reach a resource.

## Permission Inputs

Access should eventually be evaluated using a combination of:

- role,
- department,
- project/product,
- direct-report/manager relationship,
- data sensitivity,
- task purpose,
- employment status,
- temporary delegated authority,
- explicit resource ownership,
- environment (development/test/production),
- and action type (read/draft/write/approve/deploy/administer).

This is more precise than a simple global role hierarchy.

## Example

```text
Employee: Sarah
Role: Software Engineer
Department: Engineering
Projects:
- ServicesOS
- GrowthAI integration

Allowed:
- assigned repositories
- relevant architecture/docs
- engineering channels
- assigned product decisions
- authorized customer-safe debugging context

Not allowed:
- payroll for other employees
- executive compensation
- unrelated HR files
- unrelated product IP
- production secrets unless explicitly granted
```

## Role-Aware Operating Surfaces

SLAIOS should present each employee with only the tools, data, projects, and workflows that match their responsibilities.

Illustrative examples:

### Founder / Company Administrator

May be authorized for:

- company strategy and restricted planning,
- product administration,
- company financial context,
- infrastructure/security administration,
- SLAIOS configuration,
- cross-product access,
- and final approval for high-authority actions.

Founder access is broad but should still be auditable. Broad access does not mean bypassing safety, approval, or audit controls.

### Manager / Team Lead

May be authorized for:

- assigned teams/products,
- work allocation,
- project status,
- approved team reporting,
- bounded QA/approval authority,
- and relevant employee-management information.

Manager status must not automatically expose unrelated payroll, HR, executive, customer, or production-security data.

### Developer / Engineer

May be authorized for:

- assigned repositories,
- engineering documentation,
- development/test environments,
- build/test tooling,
- Codex/Forge workflows,
- approved debugging context,
- and limited deployment capabilities when explicitly granted.

Production customer data, billing administration, production secrets, or company-wide infrastructure access should not be implied merely because the employee is an engineer.

### Web Implementation / QA

May be authorized for:

- assigned website jobs,
- approved customer public/business data,
- website repositories/templates,
- customer-approved assets,
- QA checklists,
- preview/deployment workflow,
- and bounded ServicesOS public-data integration context.

They should not automatically receive unrelated ServicesOS tenant data, company financials, HR information, or unrelated product IP.

### Support / Operations

May be authorized for:

- assigned customer/account context,
- support history,
- approved operational tools,
- bounded troubleshooting actions,
- and escalation workflows.

Support access should favor task-specific views rather than broad database access.

These are examples, not permanent fixed roles. SLAIOS should support composable permissions so the company can evolve without replacing the authorization model.

## Sensitivity Layers

Suggested conceptual levels:

```text
Company Shared
Project / Department
Manager Restricted
HR Confidential
Payroll / Compensation
Highly Restricted Executive
Production Secrets / Security
```

Access to one restricted domain must not imply access to another.

## AI Context Rule

The AI receives only information the requesting user and current workflow are authorized to access.

The retrieval layer should filter before the prompt/model call.

Do not send broad company context and rely on the model to keep secrets.

The same rule applies whether SLAIOS uses a local model, an OpenAI model, Codex, Forge, or another future worker.

## Authority Propagation to AI and Coding Workers

Authorization should propagate through the entire task chain.

```text
User authority
    ->
SLAIOS authorized context
    ->
Task / context packet
    ->
AI or Codex / Forge worker authority
    ->
Allowed tools and resources
```

Never use this model:

```text
SLAIOS knows everything
    ->
therefore every worker receives everything
```

When SLAIOS creates a Codex or Forge task, the task packet should inherit the requesting user's/project's effective permissions plus any explicitly approved task-specific authority.

A generated prompt must not become an authority-escalation mechanism.

For example, if a developer is authorized only for a ServicesOS development branch and test environment, SLAIOS should not create a coding task that silently grants production secrets, unrelated repositories, or deployment authority.

## Temporary Access and Elevation

Support time-limited grants such as:

> Alex may access the ServicesOS payment architecture for 14 days.

Temporary or emergency elevation should record:

- who requested access,
- who granted access,
- reason,
- resources,
- allowed actions,
- environment,
- start,
- expiration,
- required reviewer,
- and revocation.

Access should expire automatically when possible.

For high-risk temporary elevation, SLAIOS should show the approver exactly what additional authority is being granted before approval.

A future break-glass mechanism may exist for genuine incidents, but it must be narrowly scoped, time-limited, strongly authenticated, and fully audited.

## Employee Self-Service

Employees may access their own authorized records such as:

- profile,
- PTO,
- training,
- policy acknowledgements,
- contribution history,
- reward balance,
- payroll status/pay statements where integrated.

Self-access does not grant access to peers.

## Manager Boundaries

Managers may receive only approved information needed to manage their team.

Do not automatically expose all HR or payroll data because someone is a manager.

## Environment Boundaries

Development, testing, staging, and production should be distinct permission domains.

Being allowed to:

- read source code,
- modify a development branch,
- run tests,
- or use a test VM

must not automatically authorize:

- production deployment,
- production database access,
- production secrets,
- destructive migrations,
- or customer-data export.

## Forge / Codex Permissions

Forge and Codex-style workers inherit SLAIOS authorization.

Before a coding or automation job begins, SLAIOS should resolve:

- requesting user,
- authorized repository,
- allowed branch behavior,
- files/path scope when appropriate,
- worker template/model,
- approved tools,
- development/test/production environment scope,
- secrets policy,
- network/external-service permissions,
- write/deploy authority,
- required reviewer,
- and whether higher-level review is mandatory.

A worker should never gain access simply because the underlying server can reach a resource.

The result/report should return through the same authorization boundary so the worker cannot expose restricted information in summaries, logs, artifacts, or generated prompts.

## Onboarding and Offboarding Boundary

Role/project access should be created intentionally during onboarding and tied to employment status.

When employment or assignment changes, SLAIOS should support coordinated revocation across:

- SLAIOS identity/session access,
- assigned VMs and development environments,
- repositories,
- connected tools,
- secrets/credentials,
- company file access,
- and delegated approvals.

The employee's work products, repositories, task history, and company-owned environments remain with SLAI.

The detailed people workflow belongs in `Employee_Workspace_People_HR_and_Payroll.md`; this section defines the authorization boundary that workflow must enforce.

## Audit

Sensitive actions should preserve:

- actor,
- authorization basis,
- resource,
- action,
- environment,
- timestamp,
- result,
- approval chain,
- temporary-elevation state where relevant,
- worker/model identity where relevant,
- and relevant decision/task ID.

High-authority actions should also reference the context snapshot and approval record defined in `SLAIOS_Audit_and_Authority_Model.md`.

## Human Authority

Permissions constrain both humans and AI.

AI assistance does not create new authority.

SLAIOS may prepare, explain, recommend, and execute bounded work inside an authorized envelope, but consequential public, financial, legal, employment, security, destructive, and shared-platform decisions remain subject to the applicable human approval rules.
