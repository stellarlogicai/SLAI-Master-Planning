# SLAIOS White-Label and Productization Strategy

Status: Long-term future planning only.

## Principle

Build SLAIOS for SLAI first.

Do not make the internal MVP universally configurable for hypothetical customers.

Productization is earned after internal usage proves which capabilities matter.

At the same time, foundational architecture should avoid choices that make future SaaS conversion require a ground-up rewrite.

Future-safe foundations include:

- organization / tenant abstraction,
- identity and membership,
- role and permission boundaries,
- workspace/product/repository ownership,
- explicit data authority,
- module boundaries,
- provider abstraction,
- audit history,
- usage and budget metering,
- export / retention / deletion boundaries.

These foundations are architectural boundaries, not permission to build external-SaaS product features early.

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

## Internal Proof Gate

Do not build these external-product concerns into the internal Alpha merely because they may be needed later:

- customer billing and entitlement UX,
- reseller/partner systems,
- broad white-label administration,
- enterprise onboarding workflows,
- public support portals,
- complex customer provisioning,
- enterprise governance layers beyond what SLAI itself needs.

Core rule:

> **Build for SLAI first. Architect for future SaaS. Do not pay the complexity cost until internal proof earns it.**

The external product should be extracted from proven internal behavior rather than guessed in advance.

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

## Commercial Expansion Model

If productized, SLAIOS should act as the customer platform relationship while specialist capabilities remain separately entitled where their value/economics differ.

Potential future structure:

~~~text
SLAIOS Core
├─ organization / active-user band
├─ standard employee workspace
├─ company memory / decisions / permissions
└─ base operating intelligence

Optional capabilities
├─ GrowthAI
├─ SLAIForge
├─ Forge execution capacity
├─ Product Intelligence / monitoring
├─ Private AI
└─ future specialist modules
~~~

This preserves one coherent customer experience without forcing every expensive capability into one unlimited Core plan.

See `SLAIOS_Commercial_Pricing_and_Expansion_Model.md`.

## Private AI Productization

Some future customers may require dedicated AI isolation beyond ordinary multi-tenant application boundaries.

Potential maturity path:

~~~text
standard SLAI-managed AI with tenant-isolated context
→ repeatable dedicated Private AI environment
→ enterprise customer-cloud/private deployment where justified
~~~

The private option must retain the same SLAIOS permissions, audit, human-control, and source-boundary rules.

See `Private_AI_and_Tenant_Intelligence_Architecture.md`.

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
