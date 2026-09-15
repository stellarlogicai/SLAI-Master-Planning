# SLAI Web V1 Deployment, Billing, and Operations Contracts

**Status:** Planning contract / required before implementation  
**Created:** 2026-09-15  
**Product:** SLAI Web  
**Purpose:** Define the deployment, billing, domain, support, cost-control, recovery, and operational boundaries needed to keep SLAI Web sellable and scalable.

---

## 1. Operating Principle

> **A $100/month website platform must be operationally bounded. Reliability, support effort, hosting cost, model cost, and custom work cannot remain undefined.**

SLAI Web should create recurring value without becoming unlimited founder labor.

---

# 2. Pre-Build Stack Decision Gate

The implementation stack should be chosen only when SLAI Web becomes the active build so the decision reflects current pricing, platform capabilities, and ServicesOS reality.

Before Milestone 1 implementation, record decisions for:

- frontend/application framework,
- server/runtime model,
- primary database/config storage,
- object/media storage,
- authentication/shared SLAI identity integration,
- hosting/deployment provider,
- CDN/cache behavior,
- custom-domain/SSL mechanism,
- transactional email provider if needed,
- Stripe billing integration,
- analytics approach,
- monitoring/error tracking,
- backup/recovery strategy,
- environment separation.

### Selection criteria

Prefer the option that:

- minimizes fixed monthly cost at low customer count,
- scales gradually with usage,
- supports custom domains reliably,
- supports preview/staging and rollback,
- makes tenant isolation straightforward,
- supports deterministic deployments,
- exposes useful usage/cost telemetry,
- does not force expensive enterprise infrastructure before revenue,
- is supportable by Jamie and a future Web Implementation / QA developer.

Do not choose architecture solely because it is fashionable or theoretically scalable to massive traffic.

---

# 3. Environment Contract

At minimum distinguish:

```text
Local / Developer
        ↓
Test / Emulator where applicable
        ↓
Preview / Staging
        ↓
Production
```

Production credentials, domains, billing webhooks, secrets, and customer data must not be reused casually in local/test workflows.

Preview environments must avoid search indexing where practical.

---

# 4. Deployment Model Contract

The exact hosting topology may be shared multi-tenant, per-site generated output, or a controlled hybrid depending on the chosen stack.

Regardless of topology, each production site deployment must identify:

- tenant/site ID,
- published release ID,
- Web Core version,
- layout ID/version,
- customer/profile manifest version,
- ServicesOS public-data release ID when used,
- connector versions,
- source commit/reference,
- build ID,
- deployment ID,
- deployment timestamp,
- production approval record,
- rollback reference.

### Deployment rules

- A failed build must not replace current known-good production.
- A failed smoke test must produce a visible failed deployment state.
- Production deployment requires an authorized publish/deploy path.
- Customer/editor draft actions must not directly mutate production output.
- Deployment should be idempotent or duplicate-safe where practical.
- Re-running the same release should not silently produce different customer facts.

---

# 5. Preview Contract

Every customer should have a safe preview path before public release.

Preview should:

- render a known draft/snapshot,
- use the intended layout/core versions,
- prevent accidental public indexing where practical,
- avoid exposing private tenant data,
- clearly distinguish preview from live production,
- support customer/human QA.

Preview URLs must not become permanent public truth.

---

# 6. Custom Domain Contract

## Ownership

Preferred rule:

> **Customer owns the domain. SLAI manages connection/configuration only when authorized.**

SLAI should not hold a customer's business identity hostage through registrar ownership.

## Domain onboarding should support

- customer-provided domain,
- ownership/control verification,
- required DNS instructions or delegated mechanism,
- connection status,
- SSL status,
- primary/canonical domain designation,
- redirect/canonical behavior,
- failure diagnostics.

## Security rules

- avoid collecting registrar passwords when safer DNS/delegated approaches exist,
- do not expose provider secrets to browser/client code,
- verify tenant/site ownership before attaching a domain,
- prevent one tenant from claiming another tenant's verified domain,
- audit sensitive domain connection/removal actions.

---

# 7. SSL / HTTPS Contract

Production customer sites require HTTPS.

The chosen platform should support automated certificate provisioning/renewal where practical.

Site status must distinguish:

- DNS not ready,
- verification pending,
- certificate pending,
- active/secure,
- renewal/error condition.

Do not label a site fully launched while the intended canonical domain remains insecure or misconfigured.

---

# 8. Billing Model

Working V1 planning hypotheses:

```text
DIY
$0 implementation fee
$100/month SLAI Web

Done-for-you
~$750-$1,000 one time
$100/month SLAI Web

Custom
~$1,500-$2,000+ one time
$100/month SLAI Web

Complex / exception
Quoted separately
$100/month base platform + true variable/special infrastructure costs where justified
```

These remain hypotheses until validated by real customers.

The recurring subscription pays for platform access and recurring service value, not unlimited custom development.

---

# 9. Billing Authority and State

Stripe or the selected payment processor is authoritative for payment/subscription events.

Browser-controlled return/query parameters must never create paid entitlement by themselves.

Conceptual subscription states may include:

- pending/setup,
- active,
- trialing if later chosen,
- past_due,
- unpaid/failed,
- cancel_at_period_end,
- cancelled,
- manually_granted/comped only when explicitly authorized and auditable.

The exact provider state mapping should be documented during implementation.

---

# 10. Entitlement Behavior

Billing state should feed a deterministic entitlement layer.

Do not scatter direct Stripe-state interpretation across UI components.

Preferred flow:

```text
Verified billing event
        ↓
Canonical billing/subscription state
        ↓
SLAI Web entitlement
        ↓
Allowed platform actions
```

High-risk actions such as production publish, custom-domain management, support access, and premium AI actions should check current authoritative entitlement/permission where appropriate.

---

# 11. Payment Failure / Past-Due Behavior

V1 should avoid immediately destroying a customer's public business presence because of a transient payment failure.

Recommended planning behavior:

- notify customer clearly,
- allow a bounded grace/recovery period if commercially appropriate,
- restrict new publishes/paid platform actions before deleting content,
- preserve customer-owned content/assets,
- record billing problem state,
- allow clean recovery after payment is fixed.

Exact grace timing should be decided with billing terms before launch.

---

# 12. Cancellation Contract

Cancellation should distinguish:

- cancelling future renewal,
- active-through-period-end access,
- ended subscription,
- export/handoff period,
- site suspension/unpublish behavior,
- eventual retention/deletion policy.

### Customer retains

- domain ownership,
- customer-provided content,
- logos,
- photos/assets they own,
- business facts,
- exports/handoff artifacts promised by SLAI policy/contract.

### SLAI retains ownership of

- shared platform source,
- editor/dashboard,
- shared layouts/components,
- deployment tooling,
- connector implementations,
- proprietary platform infrastructure.

Cancellation must not imply indefinite free hosting/editor/platform access.

---

# 13. Export / Handoff Contract

Where technically practical, SLAI should provide a documented path for a departing customer to receive:

- owned content/business facts,
- owned uploaded assets,
- a practical export or last published site artifact where the architecture supports it,
- domain/DNS transition instructions.

The export does not require transferring SLAI's proprietary platform/editor/shared source code.

---

# 14. One-Time Implementation / Custom Charges

Done-for-you/custom work should be represented separately from recurring platform entitlement.

A paid implementation charge should not automatically grant lifetime platform access.

Scope records should identify:

- standard layout/configuration work,
- bespoke layout work,
- custom component work,
- unusual integration work,
- content/branding/photo coordination,
- included revision rounds,
- excluded work.

Use the pricing/scope matrix and client approval records to avoid invisible scope creep.

---

# 15. Standard Support Contract

The $100/month plan may include standard support for normal platform use.

## Normally included

- account/platform help,
- dashboard/how-to help,
- publishing/domain guidance,
- platform defect investigation,
- restoring a known prior release when appropriate,
- normal DNS/SSL troubleshooting,
- standard ServicesOS connector troubleshooting when subscribed/connected,
- bounded help with supported layouts/themes/sections,
- reasonable platform-generated accessibility/SEO issue remediation,
- normal billing/account questions.

## Not included as unlimited support

- major redesigns,
- custom new components,
- unsupported third-party integrations,
- extensive copywriting,
- professional branding engagements,
- large content migrations,
- ongoing marketing campaign management,
- ecommerce operations,
- custom analytics engineering,
- repeated manual edits the customer can perform through supported self-service,
- unlimited revisions.

These should be scoped separately where justified.

---

# 16. Support Escalation Ladder

Preferred support model:

```text
Customer self-service
        ↓
Deterministic guidance / docs
        ↓
Bounded SLAI Intelligence assistance
        ↓
SLAI human support
        ↓
Engineering/custom scope only when genuinely required
```

This protects the economics of the recurring platform.

---

# 17. Secure SLAI Support Mode Operations

Support Mode requires:

- named staff identity,
- role/permission check,
- explicit reason/ticket/context,
- time-limited access,
- obvious in-session indicator,
- audit event for start/end/actions,
- no password/payment-secret access,
- elevated approval for sensitive actions,
- automatic expiration/close.

No hidden universal backdoor or shared administrator credential.

---

# 18. Variable-Cost Governance

Every significant variable-cost surface should answer:

- Which tenant caused the usage?
- Which feature caused it?
- How much was used?
- What did it cost or what cost class does it belong to?
- What limit/allowance applies?
- What happens when the limit is approached/exceeded?

Potential cost surfaces:

- hosting/request volume,
- bandwidth/CDN,
- media storage,
- image processing,
- email/form notifications,
- analytics provider usage,
- AI/model calls,
- build/deployment minutes if billable,
- logs/monitoring,
- unusual third-party APIs,
- ServicesOS connector traffic if it creates nontrivial cost.

---

# 19. V1 Cost Guardrails

Final numeric limits should be set from the chosen providers and early real usage, but V1 should include mechanisms for:

- tenant storage metering,
- asset size/count validation,
- request/form rate limits,
- AI usage allowance/credit or hard feature cap,
- abuse detection,
- per-tenant anomaly alerts,
- infrastructure budget alerts,
- deployment/build throttling if provider cost requires it,
- feature/provider kill switches where a runaway cost can occur,
- documented high-traffic/exception policy.

The application should not rely on a cloud budget alert as the only cost control.

---

# 20. Media Limits

Initial limits should be chosen conservatively after the storage/CDN provider is selected.

Mechanisms must support:

- per-file upload maximum,
- supported image dimensions/types,
- total tenant/site storage visibility,
- deterministic compression/derivatives,
- duplicate/unused asset handling where practical,
- customer warning before hitting plan limits,
- special handling/quote for unusually large media-heavy sites.

Do not promise unlimited storage by accident.

---

# 21. AI Cost Boundary

AI must remain optional assistance rather than a hidden unlimited cost center.

V1 should meter:

- tenant,
- feature/action,
- model/provider,
- request count,
- approximate/provider-reported usage where available,
- success/failure/restore state.

Normal deterministic site functions must continue if the AI allowance is exhausted or the provider is unavailable.

---

# 22. Forms / Notification Cost Boundary

Public forms are abuse targets.

V1 should include:

- rate limits,
- bot/spam mitigation,
- duplicate suppression where useful,
- bounded notification fan-out,
- tenant attribution,
- delivery failure tracking,
- kill switch/escalation if abused.

Do not let a public form create unbounded email/API cost.

---

# 23. Monitoring and Health

At minimum track:

- production deployment status,
- site availability/basic health,
- domain/SSL status,
- form intake/delivery failure,
- build/deploy failures,
- connector failures,
- elevated error rate,
- storage/usage anomalies,
- billing/entitlement processing failures.

Avoid building an enterprise observability platform before revenue. Start with the smallest monitoring stack that reliably detects customer-facing failures.

---

# 24. Backups and Recovery

Recovery planning should cover separately:

- Website Profile/configuration,
- published release/version history,
- customer media/assets,
- deployment artifacts/references,
- billing/entitlement records where applicable.

A production site should always have a known prior release/reference when possible.

Recovery procedures must be tested, not merely documented.

---

# 25. Incident Classes

V1 operations should distinguish at least:

### Platform defect

Shared Web Core/dashboard/publish/deploy malfunction.

### Customer configuration issue

Valid platform used incorrectly or incomplete configuration.

### Domain/DNS issue

Customer/provider DNS or domain state prevents proper connection.

### Third-party provider incident

Hosting, storage, email, Stripe, analytics, AI, or other provider degraded.

### Security/privacy incident

Unauthorized access, tenant-isolation failure, secret exposure, suspicious support-mode behavior, or public/private data leak.

Security/privacy incidents require the highest escalation and should not be treated as normal support tickets.

---

# 26. Release / Rollback Operations

Before every production completion record:

- automated gates passed,
- human QA passed,
- client approval recorded where required,
- production approval recorded,
- build/deployment references recorded,
- production smoke passed,
- rollback reference known.

If a production deployment causes material customer-facing failure:

1. stop further rollout,
2. assess whether rollback is safer than forward fix,
3. restore known-good release when appropriate,
4. verify production,
5. record incident/root cause,
6. add regression coverage before repeating the failure path.

---

# 27. Customer Revision / Scope Control

Done-for-you and custom work should define revision expectations before work begins.

Working principle:

- normal configuration corrections within agreed scope are included,
- repeated preference changes after approval are not automatically unlimited,
- new pages/components/integrations beyond agreed scope may require a change order/quote,
- platform bugs are SLAI responsibility rather than billable scope expansion.

The contract/sales process should eventually define exact revision counts/terms.

---

# 28. First-Customer Operational Proof

For the first real customer, record:

- build/implementation time,
- AI usage/cost,
- direct hosting/storage cost,
- domain setup time,
- QA minutes,
- revision count,
- support contacts/minutes,
- incidents/rollbacks,
- customer self-service actions,
- monthly recurring revenue,
- one-time revenue,
- ServicesOS connection/conversion status.

Do not scale sales materially until obvious first-customer operational defects are corrected.

---

# 29. Decisions Intentionally Deferred Until Active Build

The following should not be guessed months in advance:

- exact hosting vendor/topology,
- exact framework/runtime,
- exact storage/CDN provider,
- exact email provider,
- exact numeric storage/bandwidth limits,
- exact payment-failure grace period,
- exact AI allowance/credit amount,
- exact uptime/support SLA,
- exact retention/deletion timelines,
- exact high-traffic surcharge/enterprise policy.

These must be resolved and documented before the related feature ships.

---

# 30. Operations Contract Acceptance Criteria

SLAI Web V1 operations are ready when:

- subscription state deterministically controls entitlement,
- browser state cannot fabricate paid access,
- cancellation/past-due behavior is defined and tested,
- customer-owned content/domain rights are preserved,
- production deployment is reproducible,
- failed deploy cannot silently replace known-good production,
- custom-domain/SSL state is observable,
- standard support versus custom work is clear,
- variable-cost surfaces are attributable and bounded,
- AI/provider failure does not break deterministic site operation,
- backups/recovery/rollback are tested,
- first-customer economics/support burden are measured.
