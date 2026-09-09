# SLAI Inventory Intelligence and Communication Architecture

**Status:** Future shared-platform planning  
**Last Updated:** 2026-09-09  
**Source Basis:** September 2026 working design document reviewed into repository planning  
**Priority Guardrail:** ServicesOS remains the active build. This document preserves future architecture only.

## Core Thesis

The future inventory system should be a reusable **Inventory Intelligence Platform**, not merely an inventory tracker.

Its purpose is to record what physically happened to inventory, separate true demand from non-sales depletion, forecast expected demand through the next replenishment opportunity, surface exceptions, and produce explainable recommendations for human review.

Core rule:

> **AI explains. Deterministic intelligence decides. Humans approve consequential changes.**

The inventory engine should exist independently enough that RetailOS, ServicesOS, warehouses, field-service operations, and future SLAI products can consume it through stable contracts.

## Foundational Inventory Event Model

Inventory movement is not automatically demand.

Use an appendable event ledger so the system can reconstruct why inventory changed.

Canonical event concepts should include:

- SALE,
- RECEIPT,
- OUTDATE / EXPIRED,
- DAMAGE,
- RETURN,
- RECALL,
- TRANSFER,
- COUNT_ADJUSTMENT,
- STORE_USE / CONSUMED,
- SUSPECTED_SHRINK,
- CONFIRMED_SHRINK,
- RESERVED,
- RELEASED.

A sale is a demand signal. Outdates, damage, shrink, recalls, transfers, and count corrections must remain separate signals.

Unexplained count variance must not be automatically labeled theft.

## Generic Product and Identifier Model

Retailer-specific identifiers such as Walgreens WICs should map into generic platform fields rather than define architecture.

Candidate product fields:

- product/item ID,
- item name,
- internal item code,
- UPC/barcode,
- aliases/search terms,
- category,
- storage location,
- vendor/source,
- case pack,
- unit/case cost,
- par/target,
- reorder point,
- typical usage,
- order/delivery schedule,
- notes.

The searchable catalog should eliminate repeated lookup work and support aliases, barcodes, internal codes, categories, and storage location.

## Deterministic V1 Forecasting

The first useful version should not require machine learning.

Candidate V1 calculations:

- average daily demand,
- weighted recent demand,
- promotion uplift,
- lead-time demand,
- simple safety stock,
- days of supply,
- suggested target/build.

Example target logic:

```text
Suggested Target
= expected demand until next delivery
+ safety stock
+ promotion adjustment
- validated excess/outdate adjustment
```

Guardrail:

> High count variance or VERIFY_INVENTORY should suppress or downgrade target-change recommendations until physical inventory is trusted.

## Exception Intelligence

The system should prioritize exceptions instead of forcing users to inspect every product.

Core future signals:

- STOCKOUT_RISK,
- OUTDATE_RISK,
- OVERSTOCK,
- COUNT_VERIFY,
- PROMO_RISK,
- SHRINK_ANOMALY,
- TARGET_ADJUSTMENT.

Example logic:

```text
OUTDATE_HIGH
+ SALES_LOW
+ COUNTS_STABLE
+ NO_ACTIVE_PROMO
→ LIKELY_OVERSTOCK / target review

OUTDATE_HIGH
+ COUNT_VARIANCE_HIGH
→ VERIFY_INVENTORY_FIRST
```

The system should avoid solving shrink/theft by blindly increasing replenishment.

## Operational Workflow

For inventory roles that are frequently interrupted, the product should preserve workflow state.

Suggested primary views:

- **Today** — deliveries, deadlines, required counts, returns, order windows,
- **Exceptions** — stockout/outdate/overstock/count/promo/shrink issues,
- **Follow-up** — work already started that requires another check or approval,
- **Reference** — item IDs, vendor schedules, locations, pars, case packs, procedures.

Tasks should record what was delegated, verified, corrected, and still needs follow-up.

## Inventory Recovery / Bad-Count Workflow

When official counts are unreliable, a supplemental workflow may track:

- area/bay,
- item ID/WIC/UPC,
- prior system count,
- physical count,
- corrected official count,
- correction timestamp,
- stability/reversion,
- recount requirement,
- escalation status,
- notes.

Boundary:

> Without an authorized integration, the retailer's official inventory system remains the source of truth for official on-hand and transactions.

## Independent Multi-Tenant Service

Long-term architecture should support:

```text
Tenant / Organization
├── Region (optional)
├── District / Business Unit (optional)
├── Location / Store / Warehouse / Van
├── Users / Roles
├── Products
├── Inventory Events
├── Vendors
├── Promotions
├── Recommendations
└── Tasks / Exceptions
```

Potential backend responsibilities:

- authentication/RBAC,
- generic product catalog,
- inventory ledger,
- receiving/movement ingestion,
- vendor schedule service,
- promotion service,
- forecast engine,
- policy/recommendation engine,
- exception engine,
- audit history,
- analytics,
- integration layer,
- communication service.

## Cross-Product Integration

The inventory capability should be reusable through stable APIs/service contracts.

Potential consumers:

- RetailOS — sellable merchandise, promotions, stockouts, outdates, shrink, vendor replenishment,
- ServicesOS — cleaning supplies, chemicals, gloves, parts, consumables, van stock,
- warehouse tools — receipts, transfers, fulfillment,
- future manufacturing — raw materials and replenishment,
- hospitality/restaurant — consumables, expiration/waste, supplier delivery planning.

Each consumer supplies domain context and chooses which inventory capabilities to expose.

## SLAI Deterministic Intelligence Layer

Preferred flow:

```text
Raw Events
→ deterministic signal extraction
→ policy/recommendation engine
→ human-reviewable structured result
→ optional communication layer
```

Most valuable intelligence should be inexpensive, testable, auditable code rather than model inference.

## Shared SLAI Communication Model

The communication model should be shared across products rather than trained as an inventory-only brain.

It may:

- explain validated recommendations,
- summarize operational activity,
- convert reason codes to human language,
- change detail level by role,
- apply configured business voice,
- answer questions fully contained in supplied structured facts,
- draft routine employee/customer/manager messages,
- produce concise reports,
- express uncertainty when data quality is insufficient.

It must not:

- invent quantities or business facts,
- alter deterministic recommendations,
- infer theft from unexplained variance,
- bypass VERIFY/blocked states,
- perform consequential changes without authorization,
- claim context it was not supplied.

## Domain Packs

Avoid embedding every product rule into the model.

Runtime context may supply a compact domain pack containing:

- domain,
- tenant context,
- user role,
- brand voice,
- structured facts,
- reason codes,
- allowed actions,
- output type,
- safety/policy constraints.

The intelligence systems specialize; the communication model generalizes.

## Cheapest-Capable Routing

Preferred routing:

```text
Tier 0 — deterministic template/rules
Tier 1 — local/shared SLAI SLM
Tier 2 — lower-cost frontier API model
Tier 3 — strongest frontier model
```

The router should itself be deterministic and auditable.

Use frontier AI as an escalation layer, not the default engine behind every sentence.

## Local / Edge Deployment

A future small communication model may run:

- centrally as a shared SLAI service,
- locally on installed/controlled devices,
- or in hybrid form.

Potential benefits:

- lower recurring inference cost,
- lower latency,
- reduced exposure of routine business context,
- ability for multiple SLAI apps on one machine to share one local communicator.

Local inference is not free; it moves cost into packaging, hardware compatibility, updates, support, and QA.

## SLM Size and Evaluation Strategy

Do not optimize for the smallest model in isolation.

Goal:

> **Use the smallest model that reliably passes the SLAI communication evaluation suite.**

Candidate exploration range from the source design:

- ~135M parameters — experimental minimum,
- ~350-600M — strong starting range for structured-to-language communication,
- ~1-2B — higher-quality fallback if sub-billion models fail.

Model choice must also satisfy licensing/redistribution requirements.

Development sequence:

1. select commercially usable base model,
2. build schema-first inference prototype,
3. define domain packs/output contracts,
4. build broad evaluation suite,
5. benchmark sizes consistently,
6. fine-tune only if prompting/domain packs are insufficient,
7. quantize and rerun evaluation,
8. add deterministic fallback/escalation,
9. turn production failures into regression tests.

## Communication Evaluation Suite

Required categories should include:

- numerical fidelity,
- reason-code fidelity,
- uncertainty behavior,
- role adaptation,
- domain accuracy,
- tone/brand control,
- schema compliance,
- escalation correctness,
- latency/memory,
- quantization regression.

Numerical fidelity is non-negotiable: the language model must not change supplied dates, quantities, or deterministic recommendations.

## Walgreens Validation Boundary

Any Walgreens validation should be a permission-controlled **shadow model**, not an unauthorized replacement of official inventory systems.

Potential validation:

- small SKU set,
- repeated stockouts,
- repeated outdates,
- promotion-sensitive products,
- apparent overstock,
- fast sellers,
- 8-12 week observation window,
- predictions recorded before outcomes,
- no automatic target changes.

Potential metrics:

- stockout prediction precision/recall,
- days-out-of-stock avoided estimate,
- outdate reduction estimate,
- forecast error,
- promo-uplift accuracy,
- count-verification value,
- avoided waste/excess exposure,
- user time saved.

Written permission and employer/IP boundaries must be clarified before on-the-clock development or use of confidential/internal data.

## Phased Roadmap

Future phases:

0. rules/specification,
1. workbook/shadow model,
2. standalone backend,
3. operational UI,
4. shared SLAI communicator,
5. intelligent router,
6. RetailOS integration,
7. cross-product reuse,
8. enterprise hardening.

This is future planning, not an active build order.

## Minimal Inventory V1

Future inventory V1 should remain controlled:

- generic product master,
- identifier mappings,
- inventory event ledger,
- manual/imported counts/sales/receipts/outdates/damage/shrink/promotions,
- vendor/order/delivery schedules,
- weighted deterministic demand forecast,
- days-of-supply / lead-time demand,
- safety-stock rule,
- core exception signals,
- explainable recommended target with guardrails,
- exception dashboard,
- audit history,
- no autonomous target change.

## Canonical Next Engineering Artifact

Before building a large future UI, define schemas for:

- InventoryEvent,
- Product,
- VendorSchedule,
- Promotion,
- ForecastResult,
- Exception,
- Recommendation.

These schemas become the stable contract between inventory intelligence, RetailOS, ServicesOS, the communication layer, and future integrations.

## Strategic Placement

This architecture belongs in SLAI Platform Core because it is a reusable capability, not owned exclusively by RetailOS.

RetailOS should consume it.

ServicesOS may consume it later.

Future products may consume it where inventory workflows justify the dependency.

Do not promote it into active development before ServicesOS and higher-priority products justify the work.
