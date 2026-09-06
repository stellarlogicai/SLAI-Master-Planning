# SLAI Web Job Packet

## Identity

**Job ID:**  
**Customer:**  
**Tenant ID:**  
**Context Snapshot ID:**  
**Requested By:**  
**Human Approver:**  

## Objective

Describe the exact customer-facing outcome.

## Inputs / Exact Versions

- Web Core:
- Layout:
- Customer Manifest:
- ServicesOS Public Data Release:
- Booking Connector:
- Asset Set:
- Relevant prior decision IDs:

## Allowed Scope

**Allowed files/components:**
- 

**Protected files/components:**
- shared core
- booking connector
- auth/security
- deployment infrastructure
- anything else named here

## Permitted Tools / Worker Tier

- Deterministic tools:
- AI/model tier:
- Maximum bounded retries:
- Escalation condition:

## Required Output

- changed customer-layer files/config,
- preview build,
- change summary,
- QA evidence,
- exception report.

## Acceptance Criteria

- [ ] Customer facts match approved source
- [ ] No protected paths changed
- [ ] Layout remains within supported contract
- [ ] Build succeeds
- [ ] Required automated gates pass
- [ ] Required human QA can be performed
- [ ] Booking/forms work where applicable
- [ ] No secrets/private ServicesOS data exposed

## Tests / Validation

List exact required commands/checks when implementation stack exists.

## Stop Conditions

Stop and escalate if:

- shared-core modification appears necessary,
- booking connector/auth/security changes are required,
- customer facts conflict,
- requested behavior violates an approved policy,
- tests cannot pass without expanding scope,
- production write/deployment is requested without approval.

## Report Back

Worker must report:

- files changed,
- behavior changed,
- tests/checks run,
- failures/limitations,
- protected files untouched,
- unresolved questions,
- readiness for human QA.
