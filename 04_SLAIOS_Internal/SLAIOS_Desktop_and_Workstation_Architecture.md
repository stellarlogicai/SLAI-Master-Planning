# SLAIOS Desktop and Workstation Architecture

**Status:** Future architecture planning only  
**Priority guardrail:** ServicesOS remains the active build. This document preserves the intended SLAIOS/Forge operating environment for later implementation.

## Purpose

SLAIOS is intended to become the human-controlled operating center for Stellar Logic AI. The preferred founder experience is a streamlined desktop application, while authoritative company state and execution authority remain in the SLAIOS control plane rather than inside one local UI.

Core principle:

> **SLAIOS is the platform. SLAIOS Desktop is a client. Forge is the execution subsystem.**

This separation allows the founder to have a high-trust desktop experience without making the company dependent on one workstation or one client type.

## Long-Term Company Control Center

SLAIOS should eventually provide one coherent operating surface for:

- founder/executive control,
- product portfolio and priorities,
- decisions and approvals,
- company memory,
- engineering and Forge,
- budgets and forecasting,
- revenue and unit economics,
- customer/product health,
- security and compliance,
- employees and permissions,
- people/HR/payroll coordination later,
- growth/sales intelligence later,
- company-wide AI orchestration.

The objective is not a giant dashboard plus disconnected tools. The desired pattern is:

~~~text
authoritative company state
→ structured decision support
→ controlled execution
→ evidence
→ human approval
→ updated authoritative state
~~~

## Founder Desktop Client

The founder-facing SLAIOS Desktop app should be optimized for fast daily use.

Candidate primary surfaces:

~~~text
Today
Products
Engineering / Forge
Decisions
Memory
Budgets / Capacity
Business Health
Permissions / Settings
~~~

The desktop app may provide local integrations, notifications, secure credential brokerage, hardware-key support, and optional local-model access where justified.

However, the desktop app is not itself the source of truth for company state, permissions, budgets, or Forge authority.

## Two-Machine Founder Architecture

The preferred initial physical topology separates founder authority from engineering execution.

~~~text
Jamie's Workstation — HIGH TRUST
├── SLAIOS Desktop
├── founder approvals
├── architecture / review
├── company memory access
├── sensitive administration
├── optional local models
└── no general employee access

Second PC / Forge Host — LOWER TRUST
├── Forge worker manager
├── disposable/isolated workers
├── approved repo checkouts
├── builds / tests / browser QA
├── Codex / engineering-agent execution
├── short-lived scoped credentials
└── employee-accessible work sessions through SLAIOS
~~~

Core rule:

> **The founder workstation is the control surface. The Forge host is the execution surface.**

Employees should not receive general interactive access to the founder workstation.

## Employee Remote Development Model

Future employees should be able to use modest local hardware as a secure client while development horsepower remains on SLAI-controlled infrastructure.

Preferred flow:

~~~text
Employee computer
      ↓
secure SLAIOS identity/session
      ↓
assigned product/repository/task
      ↓
SLAIOS authorization + context
      ↓
Forge provisions isolated worker on SLAI infrastructure
      ↓
employee and/or AI works inside approved environment
      ↓
tests / build / evidence
      ↓
review / approval
      ↓
worker reset or destroyed
~~~

Employees should normally access their authorized worker/session, not receive unrestricted remote-desktop access to the Forge host operating system.

## Benefits

This model is intended to provide:

- centralized environment management,
- consistent SDK/toolchain versions,
- reduced need for expensive employee development hardware,
- simpler remote onboarding and offboarding,
- source/secrets kept off unmanaged endpoints where practical,
- centrally revocable access,
- reproducible development environments,
- easier worker reset after corruption or drift,
- project-specific resource profiles,
- clean separation between founder authority and employee execution.

## Identity and Credential Boundary

Execution access should be granted to the authorized task/session rather than permanently copied onto an employee device.

~~~text
authorized task
→ scoped worker identity
→ short-lived repository/provider credentials
→ bounded execution
→ evidence export
→ credentials expire/revoke
→ worker reset/destroyed
~~~

A lost or replaced employee device should not contain permanent founder-level or broad infrastructure authority.

## Resource Profiles

Forge may eventually provision different worker profiles based on task need:

~~~text
lightweight development worker
full build/test worker
browser/device QA worker
security/review worker
GPU/local-model worker later if justified
~~~

The employee endpoint should not determine the available engineering horsepower.

## Desktop and Web Clients

Desktop is the preferred founder experience, but SLAIOS should support a client-agnostic control plane.

Possible future clients:

- SLAIOS Desktop — founder and power-user experience,
- secure web client — remote/fallback access,
- lightweight employee desktop client,
- future mobile/read-only approval surfaces where justified.

All clients should use the same identity, permission, audit, decision, budget, and workflow authority.

## Hiring and Capital Strategy

SLAI's preferred early strategy is to defer hiring while Jamie + AI + controlled infrastructure can safely absorb the workload.

Capital priority should favor reusable leverage before recurring payroll when practical:

~~~text
keep SLAI operational
→ protect customer reliability
→ maintain reserve
→ acquire founder workstation
→ acquire/provision Forge execution host
→ complete/prove SLAIOS + Forge
→ hire against measured human bottlenecks
~~~

This is a default strategy, not an absolute ban on earlier hiring. Customer support, QA, security, production complexity, sales/onboarding, or engineering-review pressure may justify hiring sooner.

## Internal-First, SaaS-Ready Architecture

SLAIOS is built for Stellar Logic AI first and must prove itself through real internal operation before external productization.

At the same time, foundational architecture should avoid choices that would require a future rewrite to become SaaS.

Future-safe foundations include:

- Organization / tenant abstraction,
- user identity and membership,
- role and permission boundaries,
- workspace/product/repository ownership,
- per-tenant data authority,
- module boundaries,
- provider abstraction,
- audit history,
- usage and budget metering,
- export/retention/deletion boundaries.

Do **not** build external-SaaS complexity before internal proof, including:

- customer billing UX,
- reseller systems,
- broad white-label controls,
- enterprise onboarding machinery,
- public support portals,
- large enterprise administration layers.

Core productization rule:

> **Build for SLAI first. Architect for future SaaS. Do not pay the complexity cost until internal proof earns it.**

## Scale Path

~~~text
founder workstation + one Forge host
→ one isolated worker
→ small worker pool
→ employee remote sessions
→ additional Forge hosts when utilization proves need
→ specialized CPU/GPU nodes only when justified
→ broader company control center
→ external SaaS extraction only after internal proof
~~~

Hardware growth and hiring should be driven by measured bottlenecks, not by a desire to imitate a conventional startup stack.

## Security Boundary

Never allow convenience to collapse the trust separation.

High-trust founder actions, sensitive credentials, production approvals, financial authority, and company-wide administration should remain separated from lower-trust disposable execution workers.

Forge workers should receive minimum necessary, short-lived authority and should never inherit founder-level access simply because they run on SLAI-owned hardware.

## Success Definition

This architecture succeeds when:

1. Jamie can run SLAI from one streamlined SLAIOS control surface.
2. Company truth survives independent of one desktop client.
3. Forge execution remains isolated from founder-level authority.
4. Future employees can work securely without SLAI needing to issue high-end development workstations by default.
5. Onboarding/offboarding and environment reset are centralized.
6. Hardware and worker capacity can scale independently from employee endpoint hardware.
7. The internal architecture can later support external SaaS without requiring a ground-up rewrite.
8. None of these future capabilities distract from finishing the currently active ServicesOS roadmap.

## Final Principle

> **Centralize company context and execution capability. Keep authority explicit, workers isolated, clients replaceable, and complexity earned.**