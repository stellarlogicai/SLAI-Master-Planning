# 18 — Permissions and Roles

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define future role boundaries for SLAI Company Engine so company data, lead notes, product decisions, and handoffs are protected.

---

## Core Rule

The Company Engine will contain sensitive internal context. Access should be simple at first but designed with role boundaries from the beginning.

```text
Founder sees everything.
Other roles see only what they need.
```

---

## Future Roles

### Founder

Primary user: Jamie.

Can access:

- all products
- all decisions
- all leads
- all handoffs
- company knowledge
- priorities
- settings
- AI approval rules

### Developer

Future developer or coding assistant role.

Can access:

- assigned handoffs
- product docs needed for task
- acceptance criteria
- validation instructions
- related technical decisions

Should not access by default:

- full lead pipeline
- private founder notes
- unrelated company strategy
- customer-sensitive data not needed for the task

### Growth / Sales

Future sales or customer-growth helper.

Can access:

- leads
- research summaries
- follow-ups
- outreach drafts
- approved messaging guidance
- growth metrics

Should not access by default:

- code handoffs
- private product architecture notes
- internal founder reflections

### Support

Future customer support helper.

Can access:

- customer issues
- feedback
- product status needed to answer users
- support handoffs
- known issue summaries

Should not access by default:

- full growth pipeline
- private company strategy
- developer-only implementation details

### Read-Only Reviewer

Useful for trusted advisors or limited review.

Can access:

- selected docs
- selected dashboards
- selected reports

Cannot edit or approve actions.

---

## Permission Concepts

Possible permission flags:

```text
canViewProducts
canEditProducts
canViewLeads
canEditLeads
canApproveOutreach
canViewDecisions
canEditDecisions
canViewHandoffs
canCreateHandoffs
canViewCompanyKnowledge
canManageUsers
canChangePriorities
```

---

## Approval Boundaries

Only Founder should approve early:

- product priority changes
- customer-facing outreach
- pricing changes
- major roadmap changes
- new active build promotion
- sensitive company decisions

---

## MVP Boundary

First future version should use simple roles:

```text
Founder
Developer
Growth
Support
Read-Only
```

Do not start with complex enterprise permissions.

---

## Future Planning Only

```text
This is a future permission model.
Do not build until ServicesOS beta is stable and Jamie explicitly promotes Company Engine work.
```
