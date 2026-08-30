# SLAIOS White-Label and Productization Strategy

Status: Long-term future planning only.

## Principle

Build SLAIOS for SLAI first.

Do not make the internal MVP universally configurable for hypothetical customers.

Productization is earned after internal usage proves which capabilities matter.

## Two Layers

Long term, separate:

### SLAI-Specific Configuration

- Stellar Logic AI branding,
- SLAI product hierarchy,
- SLAI policies,
- Luna/Terra/Sol naming,
- company memory,
- employee structure,
- integrations,
- approval rules,
- internal terminology.

### Reusable Company Operating Platform

- tenant isolation,
- identity and roles,
- permissions,
- employee workspaces,
- communications,
- company knowledge,
- decision records,
- AI orchestration,
- people/HR workflows,
- payroll-provider integration layer,
- contribution/rewards framework,
- Product Fleet,
- Product Studio,
- integrations,
- audit history,
- branding and module configuration.

## SLAIOS as First Tenant

When the platform is productized, SLAIOS should conceptually become the first tenant:

```text
Reusable CompanyOS Platform
 |
 +-- Tenant: Stellar Logic AI
 |    -> branded as SLAIOS
 |
 +-- Tenant: future customer
 |    -> customer branding
 |
 +-- Tenant: future white-label/OEM customer
      -> customer-defined brand
```

This forces SLAI to dogfood the architecture it intends to sell.

## White-Label Controls

Potential future configuration:

- company name,
- logo,
- colors/theme,
- domain,
- terminology,
- departments,
- role templates,
- permission templates,
- AI assistant names,
- enabled modules,
- integrations,
- approval policies,
- payroll provider,
- communication structure,
- email/notification branding.

## Modular Offering

Customers should not be forced to enable everything.

Potential modules:

- Core company operating layer,
- communications,
- company memory/knowledge,
- People/HR,
- payroll coordination,
- Product Fleet,
- Product Studio,
- contribution/rewards,
- AI orchestration,
- Forge engineering add-on,
- future specialist add-ons.

## Forge Commercial Relationship

Forge should remain dependent on SLAIOS for:

- identity,
- permissions,
- company context,
- product/repository ownership,
- work tracking,
- contribution records,
- approvals,
- and audit.

Commercially, Forge may become a premium engineering add-on rather than a separate operating system.

## OEM / Enterprise Future

A later enterprise or OEM offer may include:

- custom branding,
- custom domain,
- SSO,
- enterprise audit controls,
- custom permissions,
- private integrations,
- data-governance controls,
- dedicated environments,
- Forge capacity,
- support/onboarding.

No pricing is committed in current planning.

## Proof Before Scale

The external story should eventually be:

> SLAI sells the operating system and engineering system it first used to run and build its own company.

That claim must be earned through real internal usage.
