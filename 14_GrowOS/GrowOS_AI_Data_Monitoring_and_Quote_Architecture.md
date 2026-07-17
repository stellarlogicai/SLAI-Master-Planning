# GrowOS AI, Data, Monitoring, and Quote Architecture

Status: Future architecture planning / no active build authorization

## 1. Core AI Architecture

GrowOS should use:

> **One shared AI platform with tenant-isolated data, tenant-isolated memory, tenant-specific rules, and optional enterprise customization.**

Each customer does not require a separately trained large model.

The shared model receives only the relevant tenant context for each request.

```text
Shared GrowOS AI layer
    + Tenant-isolated operational database
    + Tenant-isolated vector memory
    + Tenant-specific SOPs and rules
    + Tenant-specific room and cultivar baselines
    + Optional enterprise custom models later
```

## 2. Customer-Specific Intelligence

Private customer context may include:

- facilities,
- rooms and zones,
- cultivars and batches,
- stage schedules,
- SOPs and playbooks,
- room-reset standards,
- environmental baselines,
- irrigation and feeding history,
- observations and photos,
- recurring problems,
- past interventions,
- harvest outcomes,
- and manager decisions.

The AI experience is customized through retrieval and structured context, not necessarily through per-customer model training.

## 3. Data Ownership Layers

### Raw customer data

Customer-owned data should include:

- sensor readings,
- images,
- plant and batch records,
- exact recipes,
- SOPs,
- environmental targets,
- employee notes,
- yields,
- room layouts,
- and compliance-linked records.

### Customer-specific learned intelligence

Facility-specific baselines, cultivar behavior, recurring risks, successful interventions, and private operational patterns should remain confidential to that customer by default.

### Generalized product learning

SLAI may improve shared models or generalized rules only under a clearly authorized data-use agreement.

The system must not expose, reconstruct, or reveal customer-specific trade secrets.

### Platform intellectual property

SLAI should own:

- GrowOS software,
- model routing,
- orchestration,
- generalized algorithms,
- feature engineering,
- and authorized shared improvements.

## 4. Default Data Policy

Recommended default:

- no cross-customer model training,
- private tenant data and retrieval,
- customer-specific intelligence isolated,
- customer-controlled export and deletion terms,
- and explicit opt-in for any shared research program.

A future voluntary data-partnership program may offer discounts or advanced benchmarking in exchange for narrowly defined, protected, de-identified use.

Customer trust statement:

> **GrowOS learns your operation for you. It does not teach your competitors how you grow.**

## 5. Visual Monitoring Architecture

Cannabis is a high-value crop, so hourly still capture may be a normal operational feature.

However:

> **Hourly capture does not require hourly full reasoning-model analysis.**

Recommended pipeline:

```text
Hourly image capture
    -> basic quality and obstruction checks
    -> local or low-cost image comparison
    -> sensor and rule correlation
    -> risk score
    -> lower-cost vision screening when appropriate
    -> advanced reasoning only when triggered or scheduled
    -> human review for material recommendations
```

## 6. Monitoring Cadence

A configurable default may include:

- hourly image capture,
- hourly lightweight screening,
- deeper structured vision review every several hours,
- one daily full room-health summary,
- immediate escalation when visual and sensor evidence indicate risk,
- and on-demand close-up analysis.

Higher-risk rooms, unstable cultivars, recent transplants, or active issues may receive deeper monitoring.

## 7. Model Routing

GrowOS should route work based on risk and complexity.

### No AI call

Use deterministic logic for:

- stale-data detection,
- threshold breaches,
- missing captures,
- duplicate events,
- and obvious workflow failures.

### Lower-cost model

Use for:

- image-quality checks,
- visible-change screening,
- canopy uniformity checks,
- basic classification,
- and routine summaries.

### Advanced vision and reasoning model

Use for:

- conflicting evidence,
- complex plant-health questions,
- multi-image historical comparison,
- combined visual and sensor reasoning,
- anomaly investigation,
- and management-requested deep analysis.

### Human approval

Require human review for:

- treatment recommendations,
- material cultivation changes,
- compliance actions,
- and any future controller commands.

## 8. AI Credit System

GrowOS can reuse the same customer-facing billing philosophy planned for ServicesOS:

- subscription includes AI credits,
- additional credits are sold at a controlled margin,
- usage is tracked per tenant,
- customers receive low-balance alerts,
- optional auto-recharge may be available,
- and enterprise credits may be pooled across facilities.

Potential metered actions:

- full plant analysis,
- deep room-health analysis,
- multi-room comparison,
- historical cultivar analysis,
- anomaly investigation,
- executive report generation,
- and on-demand reasoning.

Routine monitoring may be partly included in the quoted monitoring package rather than charging customers for every capture.

## 9. AI Usage Ledger

Every AI action should record:

- tenant,
- facility,
- room or zone,
- feature,
- model,
- timestamp,
- image count,
- input tokens,
- output tokens,
- estimated provider cost,
- credits charged,
- margin,
- trigger reason,
- and outcome.

This enables:

- cost control,
- customer billing,
- model optimization,
- feature profitability analysis,
- and monitoring-volume forecasting.

## 10. Quote Inputs

GrowOS will likely use quote-based pricing.

Quote inputs should include:

- number of facilities,
- number of rooms,
- zones per room,
- cameras per room,
- image capture frequency,
- image resolution,
- screening frequency,
- deep-analysis frequency,
- anomaly escalation assumptions,
- image-retention period,
- sensor count,
- controller and API integrations,
- METRC scope,
- users and roles,
- reporting requirements,
- implementation visits,
- training needs,
- support tier,
- data migration,
- and enterprise security requirements.

## 11. Quote Cost Model

The internal quote engine should estimate:

- monthly image count,
- storage volume,
- low-cost screening volume,
- advanced reasoning volume,
- anomaly escalation allowance,
- token and image cost,
- database and time-series storage,
- support burden,
- integration maintenance,
- travel,
- implementation labor,
- target margin,
- and risk buffer.

The quote should clearly define what is included.

Example:

> Hourly captures per camera, hourly automated screening, scheduled deep room reviews, a defined anomaly-escalation allowance, included AI credits, and a stated retention period.

## 12. Customer-Facing Packaging

A quote may combine:

- platform subscription,
- monitoring allowance,
- included AI credits,
- implementation,
- integrations,
- storage and retention,
- support,
- and overage or refill terms.

The customer should see predictable pricing. SLAI should retain enough usage detail to protect margins.

## 13. Privacy and Security Requirements

- strict tenant isolation,
- no cross-tenant retrieval,
- encrypted storage and transport,
- role-based access,
- facility-specific permissions,
- data retention controls,
- customer export rights,
- auditable AI requests and outputs,
- and clear shared-learning consent.

Camera and cultivation data should be treated as sensitive operational and trade-secret information.

## 14. Cost-Control Principles

- capture frequently when crop value justifies it,
- reason deeply only when needed,
- summarize older history instead of resending raw records,
- cache stable facility context,
- use rules and statistics before AI,
- crop or resize images appropriately,
- route normal conditions to lower-cost processing,
- and escalate uncertainty rather than pretending certainty.

## 15. Current Boundary

This architecture should be preserved for future GrowOS planning.

Do not implement GrowOS monitoring, shared AI billing, or quote logic now unless it directly supports ServicesOS or Jamie explicitly promotes GrowOS after ServicesOS reaches its required milestones.