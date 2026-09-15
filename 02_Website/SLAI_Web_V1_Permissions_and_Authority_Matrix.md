# SLAI Web V1 Permissions and Authority Matrix

**Status:** Authoritative V1 planning contract  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Owner:** Jamie Brown / Stellar Logic AI

## 1. Purpose

Define the minimum V1 role and permission model for SLAI Web before implementation begins.

This contract governs:

- customer tenant roles,
- internal SLAI delegated/support access,
- high-risk actions,
- standalone versus connected-source authority,
- publish and rollback authority,
- billing/domain/user-management authority,
- connector management,
- server-side enforcement and audit requirements.

The goal is to keep V1 simple without giving broad authority to roles that do not need it.

> **Visible UI is never the authorization boundary. Every consequential permission must be enforced by trusted server-side or platform-authoritative checks.**

---

# 2. V1 Role Model

V1 uses three persistent customer tenant roles:

```text
Owner
Editor
Viewer
```

SLAI access is separate from tenant membership:

```text
SLAI Support Mode        = delegated, scoped, time-bounded customer assistance
SLAI Platform Operator   = internal platform/incident authority, not a customer role
```

Do not store SLAI staff as ordinary permanent members of every customer tenant.

---

# 3. Core Permission Principles

1. **Least privilege by default.**
2. **Owner controls commercial and public-release authority.**
3. **Editor prepares the website but does not directly publish in V1.**
4. **Viewer is read-only and does not receive sensitive operational data by default.**
5. **Connected-source authority overrides Web editability for canonical business facts.**
6. **SLAI Support Mode never becomes a hidden permanent backdoor.**
7. **Emergency platform authority is separate from normal support authority.**
8. **AI inherits the invoking human's permissions; AI never creates new authority.**
9. **At least one active Owner must always remain on a tenant.**
10. **Consequential actions require audit records and, where appropriate, re-authentication/confirmation.**

---

# 4. Customer Roles

## 4.1 Owner

Owner is the highest normal customer role.

Owner may:

- edit all SLAI Web-owned business facts in standalone mode,
- view connected authoritative facts and follow source-product edit paths,
- edit website content/presentation,
- manage assets,
- preview,
- request and perform publish,
- rollback to a prior known-good release,
- manage domains,
- manage SLAI Web subscription/billing access,
- invite/remove users and assign supported roles,
- connect/disconnect supported product connectors,
- approve/support delegated SLAI Support Mode,
- view security/release/audit information exposed to customers,
- archive/request deletion/export according to policy.

Owner may **not** override a connected product's authoritative facts inside SLAI Web.

## 4.2 Editor

Editor is the website-production role.

Editor may:

- edit SLAI Web-owned business facts in standalone mode,
- edit website content/presentation,
- manage permitted assets,
- manage pages/sections/navigation/theme within supported contracts,
- edit SEO presentation fields,
- use approved AI drafting/assistance,
- create previews,
- run/read normal QA results,
- request publication for Owner approval.

Editor may **not** in V1:

- publish directly,
- rollback production,
- manage billing/subscription,
- manage domains,
- invite/remove users or change roles,
- connect/disconnect product connectors,
- approve SLAI Support Mode,
- override connected-source facts,
- access platform/security administration.

The Editor restriction on publish is intentional for V1. A future explicit `Publisher` permission may be added only if real customer use proves it valuable.

## 4.3 Viewer

Viewer is read-only.

Viewer may:

- view current site configuration that is safe for tenant members,
- view previews,
- view live-site state,
- view release history and normal QA status,
- view basic analytics/health information when exposed.

Viewer may not edit, upload, publish, roll back, manage billing, manage domains, manage users, manage connectors, or approve support access.

Sensitive form/lead submissions, billing details, security settings, secrets, and support-session controls are **not** included in Viewer access by default.

---

# 5. Internal SLAI Roles

## 5.1 SLAI Support Mode

SLAI Support Mode is not a persistent tenant role.

It is a delegated session with:

- named SLAI staff identity,
- tenant/site scope,
- stated reason or ticket/job context,
- explicit allowed capability scope,
- start time,
- expiration time,
- visible Support Mode indicator,
- complete action audit.

A support session may be granted scopes such as:

```text
read_site
edit_draft
manage_assets
create_preview
run_qa
inspect_domain_status
inspect_connector_status
inspect_billing_status
```

Support Mode does **not** grant by default:

```text
publish
rollback
change_billing
change_payment_method
transfer_domain
change_membership
connect_or_disconnect_product
change_authoritative_source
archive_or_delete_site
```

For done-for-you implementation work, the customer's accepted project/scope record may authorize a time-bounded `edit_draft`, `manage_assets`, `create_preview`, and `run_qa` session without turning SLAI into a permanent tenant member.

Support staff may prepare a publish-ready draft, but normal production publish still requires Owner authority in V1.

## 5.2 SLAI Platform Operator

SLAI Platform Operator is an internal platform/incident role, not normal customer support.

It exists for actions such as:

- restoring service during a platform-caused production incident,
- rolling back a known-bad platform/site deployment when immediate restoration is necessary,
- repairing broken deployment metadata,
- containing a security or cross-tenant incident,
- disabling a compromised integration or dangerous platform feature,
- other narrowly defined reliability/security operations.

Operator authority must be:

- separately authenticated,
- least-privilege,
- reason/incident bound,
- heavily audited,
- unavailable to ordinary customer accounts,
- unable to reveal payment secrets/passwords,
- reviewed after consequential emergency actions.

Emergency rollback by a Platform Operator is allowed only to restore a known-good state or contain material harm. It must create an incident/audit record and notify the tenant where appropriate.

This is not permission for SLAI staff to make normal customer content or business decisions without authorization.

---

# 6. Authoritative Permission Matrix

Legend:

- **Yes** = allowed when entitlement/site state also permits it
- **Read** = read-only
- **Scoped** = only when explicitly included in a delegated Support Mode session
- **Emergency** = only under Platform Operator incident/security authority
- **No** = not allowed by that role

| Capability | Owner | Editor | Viewer | SLAI Support Mode | SLAI Platform Operator |
|---|---:|---:|---:|---:|---:|
| View Website Profile | Yes | Yes | Read | Scoped | Emergency |
| Edit standalone business facts | Yes | Yes | No | Scoped | No |
| View connected authoritative facts | Yes | Yes | Read | Scoped | Emergency |
| Override connected authoritative facts in Web | No | No | No | No | No |
| Edit website copy/content | Yes | Yes | No | Scoped | No |
| Edit pages/sections/navigation | Yes | Yes | No | Scoped | No |
| Edit theme/layout supported options | Yes | Yes | No | Scoped | No |
| Edit SEO presentation | Yes | Yes | No | Scoped | No |
| Upload/manage assets | Yes | Yes | No | Scoped | No |
| Delete asset not protected by release/history rules | Yes | Yes | No | Scoped | No |
| Create preview | Yes | Yes | Read | Scoped | Emergency |
| Run normal QA checks | Yes | Yes | Read | Scoped | Emergency |
| Request publication | Yes | Yes | No | Scoped | No |
| Publish production release | Yes | No | No | No | Emergency rollback/restoration only |
| Roll back production release | Yes | No | No | No | Emergency |
| View release history | Yes | Yes | Read | Scoped | Emergency |
| Manage custom domain connection | Yes | No | Read status | Scoped assistance only | Emergency repair only |
| Transfer/remove customer domain | Yes | No | No | No | Emergency containment only |
| View subscription/billing status | Yes | No | No | Scoped status only | No |
| Manage subscription/checkout/portal | Yes | No | No | No | No |
| Access/change payment method secrets | Customer via payment provider only | No | No | No | No |
| Invite users | Yes | No | No | No | No |
| Remove users | Yes | No | No | No | No |
| Change user roles | Yes | No | No | No | No |
| Remove final Owner | No | No | No | No | No |
| Approve/revoke SLAI Support Mode | Yes | No | No | No | Emergency revoke |
| Connect supported product connector | Yes | No | Read status | Scoped setup assistance | Emergency disable only |
| Disconnect supported product connector | Yes | No | No | No | Emergency disable only |
| Change authority binding/source | Yes, where product rules allow | No | No | No | Emergency containment only |
| View connector health/source freshness | Yes | Yes | Read | Scoped | Emergency |
| Use approved AI drafting assistance | Yes | Yes | No | Scoped | No |
| View standard site analytics | Yes | Yes | Read | Scoped | Emergency |
| View standalone form/lead submissions | Yes | Yes | No | Scoped | Emergency only if needed |
| Export customer-owned website content/assets | Yes | No | No | Scoped preparation only | No |
| Archive/request site cancellation | Yes | No | No | No | No |
| Permanent destructive deletion | Controlled policy workflow, not direct role action | No | No | No | Emergency containment only |
| Change shared core/security code | No | No | No | No | Engineering/deployment process only |

---

# 7. Standalone vs Connected Authority

Permissions alone do not determine whether a field is editable.

The system must evaluate:

```text
identity
+ tenant membership
+ tenant role
+ product entitlement
+ site state
+ field/domain authority source
+ operation sensitivity
= allowed action
```

Example:

An Owner normally has permission to edit service pricing in standalone SLAI Web.

If that service-price domain is bound to ServicesOS:

```text
Owner permission = sufficient role authority
BUT
field authority = ServicesOS
THEREFORE
SLAI Web edit = denied/read-only
```

The UI should explain the source and route the authorized user to the source product when possible.

---

# 8. Connected Product Management

V1 implements ServicesOS as the first product connector, but permissions remain generic.

Only Owner may normally:

- create a product connection,
- confirm tenant mapping,
- approve authority bindings,
- disconnect a product,
- transfer domains back to SLAI Web authority after disconnect confirmation.

Editor may view source status and work with presentation overlays but cannot change connector authority.

SLAI Support may assist setup only under a scoped delegated session.

Platform Operator may disable a connector during a security/reliability incident, but cannot silently replace the customer's authority source with another product.

---

# 9. Publish Authority

V1 deliberately separates editing from public release.

Preferred flow:

```text
Editor or Owner edits
        ↓
Preview / QA
        ↓
Editor may request publish
        ↓
Owner reviews
        ↓
Owner publishes
        ↓
Immutable release + production deployment
```

The Owner's publish action must validate:

- role/tenant membership,
- active entitlement or allowed billing state,
- publish readiness,
- source/connector freshness rules where required,
- domain/deployment state where applicable,
- schema/layout compatibility,
- required QA/approval gates.

A successful button click must not bypass failed release gates.

---

# 10. Rollback Authority

Normal rollback is Owner-only.

Rollback:

- does not erase release history,
- must identify the selected prior known-good release,
- requires an audit record,
- must pass compatibility/safety checks,
- creates or records a new production deployment state.

SLAI Support may recommend or prepare a rollback but cannot execute it under normal support authority.

SLAI Platform Operator may perform emergency rollback when required to restore availability or contain a platform/security incident.

---

# 11. User Management Rules

V1 rules:

- each tenant must always have at least one active Owner,
- only Owner may invite/remove tenant users,
- only Owner may change customer role assignments,
- an Owner cannot remove/demote the last Owner,
- user invitation/role changes are audited,
- accepting an invitation does not itself create product entitlement,
- tenant membership never grants access to another tenant.

If future ownership transfer is needed, the safe V1 pattern is:

1. existing Owner adds another Owner,
2. new Owner accepts and authenticates,
3. system confirms at least two valid Owners,
4. old Owner may then be demoted/removed.

---

# 12. Billing and Commercial Authority

Only Owner manages SLAI Web commercial account actions in V1.

Billing-sensitive operations should use Stripe/provider-hosted secure flows where practical.

SLAI Web and SLAI staff must not expose or store raw payment-card secrets simply because an Owner can manage billing.

Support Mode may inspect limited billing status needed to diagnose entitlement problems if explicitly scoped, but cannot change the payment method or fabricate paid entitlement.

---

# 13. Domain Authority

Customer remains owner of the business domain.

SLAI Web Owner may manage the platform connection to that domain.

Editor may not change domain attachment because a wrong domain change can remove or misdirect a live business presence.

SLAI Support may provide scoped setup/troubleshooting assistance but should not transfer or remove customer domain control under ordinary support access.

---

# 14. Form/Lead Data

Public form submissions may contain personal customer information.

V1 access:

- Owner: allowed,
- Editor: allowed for normal website operations,
- Viewer: not allowed by default,
- SLAI Support: only with explicit support scope,
- Platform Operator: only when needed for incident recovery/security.

A future dedicated marketing/lead role may be introduced if real customers need it; V1 does not add roles speculatively.

---

# 15. AI Permission Inheritance

AI assistance must act as the user, not above the user.

If an Editor cannot publish, an AI action initiated by that Editor cannot publish.

If a field is ServicesOS-authoritative, AI in SLAI Web cannot rewrite the canonical value.

AI may:

- draft copy,
- recommend changes,
- explain source conflicts,
- prepare supported edits within the invoking user's authority.

AI may not:

- bypass permission checks,
- silently publish,
- silently roll back,
- alter billing,
- change domain ownership,
- change tenant membership,
- change source authority,
- expose secrets/private data outside the user's permission scope.

---

# 16. Re-authentication / Confirmation

Implementation should require stronger confirmation or recent authentication for selected high-risk actions such as:

- changing/removing Owners,
- changing role assignments,
- connecting/disconnecting a product authority source,
- changing primary domain connection,
- publishing when required by release policy,
- rollback,
- cancellation/archive/export/destructive lifecycle actions.

Exact Firebase/Auth implementation may be chosen during build, but V1 must not treat every authenticated browser session as sufficient forever for high-risk actions.

---

# 17. Audit Requirements

At minimum audit:

- invitations,
- role changes,
- Owner additions/removals,
- Support Mode grant/start/end,
- connector connect/disconnect/authority changes,
- publish,
- rollback,
- domain attach/remove/primary-domain changes,
- billing-entitlement state processing where applicable,
- archive/export/deletion requests,
- Platform Operator emergency actions.

Audit events should include:

- actor identity,
- tenant/site,
- action,
- timestamp,
- result,
- reason/context where required,
- relevant before/after references without exposing secrets.

---

# 18. Authorization Enforcement Order

A protected operation should conceptually evaluate:

```text
1. authenticated identity?
2. correct tenant membership or valid internal session?
3. allowed role/capability?
4. current product entitlement allows action?
5. site state allows action?
6. source/authority binding allows field mutation?
7. required re-auth/confirmation satisfied?
8. operation-specific validation/release gate passed?
9. execute trusted server-side action
10. audit result
```

Fail closed on uncertainty for consequential writes.

---

# 19. V1 Explicitly Deferred Permission Complexity

Do not add before real demand:

- arbitrary custom roles,
- user-defined permission builders,
- department/team permission hierarchies,
- per-page Editor roles,
- separate Publisher role,
- analytics-only role,
- marketing-only role,
- domain-only administrator,
- enterprise SSO/RBAC administration,
- broad permanent SLAI super-admin tenant membership.

The fixed V1 roles should solve the normal small-business case first.

---

# 20. Acceptance Criteria

The permissions model is ready for implementation when:

- Owner, Editor, and Viewer have deterministic fixed capabilities,
- Editor cannot accidentally publish a live website in V1,
- Viewer is genuinely read-only,
- connected authoritative facts remain read-only regardless of Web role,
- only Owner normally controls users, billing, domains, connectors, publish, and rollback,
- at least one Owner always remains,
- SLAI Support Mode is scoped/time-bounded/audited,
- emergency Platform Operator authority is distinct from support,
- AI cannot exceed the invoking user's authority,
- form/lead PII is not exposed to Viewer by default,
- high-risk operations support re-auth/confirmation,
- consequential actions are audited,
- tenant isolation and permissions are enforced outside the UI.
