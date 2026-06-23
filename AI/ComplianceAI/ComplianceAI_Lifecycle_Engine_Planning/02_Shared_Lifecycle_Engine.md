# Shared Lifecycle Engine

## Purpose

The Lifecycle Engine is the backend/service layer behind ComplianceAI. It tracks objects over time and triggers the right tasks based on rules.

Public/product name:

```text
ComplianceAI
```

Internal architecture name:

```text
Lifecycle Engine
```

## What Is a Lifecycle Object?

A lifecycle object is anything that enters the system and needs to be tracked over time.

Examples include:

- RetailOS / PharmacyOS: product case, individual product, OTC medicine, first aid item, cooler, freezer, hazardous product, recall batch.
- ServicesOS: cleaning chemical, PPE item, equipment filter, vacuum, mop head, vehicle, first aid kit, employee certification.
- GreenhouseOS: seed batch, nutrient bottle, pesticide, plant treatment, harvest batch, cure batch, compliance record.
- EducationOS: student form, certificate, training module, lesson approval, parent agreement, tutor qualification.
- GrowthAI: lead follow-up, proposal, referral reward, campaign review, outreach compliance item.
- SLAIOS: employee policy acknowledgement, device audit, security review, internal certification, access review.

## Lifecycle Object Schema Example

```js
{
  id: "object_123",
  objectType: "product_expiration",
  productArea: "RetailOS",
  tenantId: "tenant_abc",
  source: "warehouse_receiving",
  status: "active",
  identity: {
    sku: "SKU123",
    upc: "UPC123",
    lotNumber: "LOT456",
    name: "First Aid Product"
  },
  lifecycle: {
    receivedAt: "2026-01-01",
    expiresAt: "2026-08-01",
    pullDate: "2026-02-01",
    lastCheckedAt: null,
    completedAt: null
  },
  rules: {
    ruleSetId: "first_aid_outdate_rules_v1",
    department: "First Aid",
    pullWindowDays: 180,
    disposalRoute: "RGM"
  },
  assignment: {
    assignedTo: null,
    managerVerificationRequired: true
  },
  audit: {
    createdAt: "timestamp",
    updatedAt: "timestamp",
    events: []
  }
}
```

## Core Services

```text
LifecycleEngine
RulesEngine
TaskEngine
AuditEngine
NotificationEngine
VerificationEngine
```
