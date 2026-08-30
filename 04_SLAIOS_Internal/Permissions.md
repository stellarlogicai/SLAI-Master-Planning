# SLAIOS Permissions and Information Boundaries

## Principle

> Right information. Right person. Right task. Minimum necessary context.

SLAIOS should enforce authorization before data is retrieved or sent to an AI model.

Hiding information in the UI is not sufficient.

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
- and explicit resource ownership.

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

## AI Rule

The AI receives only information the requesting user and current workflow are authorized to access.

The retrieval layer should filter before the prompt/model call.

Do not send broad company context and rely on the model to keep secrets.

## Temporary Access

Support time-limited grants such as:

> Alex may access the ServicesOS payment architecture for 14 days.

Record:

- who granted access,
- reason,
- resources,
- start,
- expiration,
- and revocation.

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

## Forge Permissions

Forge inherits SLAIOS authorization.

Before a Forge job begins, SLAIOS should resolve:

- requesting user,
- authorized repository,
- allowed branch behavior,
- files/path scope when appropriate,
- worker template,
- approved tools,
- secrets policy,
- required reviewer,
- and whether Sol review is mandatory.

A Forge worker should never gain access simply because the underlying server can reach a resource.

## Audit

Sensitive actions should preserve:

- actor,
- authorization basis,
- resource,
- action,
- timestamp,
- result,
- approval chain,
- and relevant decision/task ID.

## Human Authority

Permissions constrain both humans and AI.

AI assistance does not create new authority.
