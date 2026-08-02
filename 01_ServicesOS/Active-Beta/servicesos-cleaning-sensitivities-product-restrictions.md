# ServicesOS Cleaning Sensitivities and Product Restrictions

**Status:** Active ServicesOS beta planning  
**Owner:** Jamie Brown / Stellar Logic AI  
**Date:** 2026-08-02  
**Primary rule:** ServicesOS may detect conflicts and suggest alternatives, but a human confirms the cleaning plan.

---

## 1. Purpose

Certain customers may be allergic or sensitive to specific cleaning chemicals, fragrances, product types, or ingredients. ServicesOS should preserve those restrictions in a structured customer/property safety profile and use them when preparing estimates, bookings, supply recommendations, Daily Prep, and Field Mode.

This feature exists to answer three operational questions:

1. What must not be used?
2. What products or methods are approved?
3. What should the cleaner do when no approved method is available?

ServicesOS should not diagnose medical conditions or guarantee that a product is medically safe.

---

## 2. Temporary Wife-Beta Workaround

Until the structured workflow is implemented:

- Put the restriction prominently in the estimate comments.
- Repeat it in the customer/property notes.
- Repeat it in the booking/job notes.
- Confirm the restriction manually before the job begins.
- Make sure Field Mode shows the practical instruction.

Example:

```text
CUSTOMER PRODUCT RESTRICTION
Do not use bleach or scented aerosol products.
Use fragrance-free products only.
Customer-provided bathroom cleaner is approved.
Confirm with owner before substituting any product.
```

Comments are only a temporary safety net. They are easy to miss and cannot reliably control future supply suggestions.

---

## 3. Product Placement

The primary record should attach to the **property**, because one customer may manage multiple locations with different restrictions.

Example:

```text
Customer
└── Properties
    ├── Primary residence: fragrance-free only; no bleach
    ├── Rental property: no known restrictions
    └── Commercial office: approved product list required
```

A customer-level restriction may act as a default, but a property-level record should be able to override or add more specific instructions.

Each booking should receive an immutable snapshot of the relevant restriction data so completed-job history does not silently change when the customer/property profile is edited later.

---

## 4. Recommended V1 Fields

### Owner-facing form

**Cleaning Sensitivities and Product Restrictions**

- Has known sensitivities or product restrictions: Yes / No / Unknown
- Avoid ingredients or named products
- Avoid product types
- Approved alternatives
- Customer-provided products: Yes / No
- Affected areas or surfaces
- Special operational instructions
- Confirmation required before starting: Yes / No
- Last confirmed date
- Confirmed by: customer / business owner / employee / other

### Example restriction values

Avoid ingredients or products:

- Bleach or chlorine products
- Ammonia
- Vinegar
- Essential oils
- Disinfectants
- Specific brands
- Other named ingredients

Avoid product types:

- Aerosol sprays
- Powdered cleaners
- Heavily scented products
- Enzyme cleaners
- Solvent-based cleaners
- Other product types

Approved alternatives:

- Fragrance-free neutral cleaner
- Unscented soap-and-water method
- Customer-provided product
- Owner-approved substitute

### Suggested data shape

```ts
cleaningProductSafety: {
  status: "none_known" | "restrictions_present" | "unknown",
  avoidIngredientsOrProducts: string[],
  avoidProductTypes: string[],
  approvedAlternatives: string[],
  customerProvidesProducts: boolean,
  affectedAreas: string[],
  instructions: string,
  confirmationRequired: boolean,
  lastConfirmedAt: timestamp | null,
  confirmedByType: "customer" | "business_owner" | "employee" | "other" | null,
  confirmedByUid: string | null,
  updatedAt: timestamp
}
```

The exact schema may change after a read-only implementation audit. The operational meaning should remain stable.

---

## 5. Booking Snapshot

When a booking is created, ServicesOS should copy the active customer/property restrictions into a fresh job snapshot.

```ts
cleaningProductSafetySnapshot: {
  sourceCustomerId: string,
  sourcePropertyId: string,
  copiedAt: timestamp,
  status: string,
  avoidIngredientsOrProducts: string[],
  avoidProductTypes: string[],
  approvedAlternatives: string[],
  customerProvidesProducts: boolean,
  affectedAreas: string[],
  instructions: string,
  confirmationRequired: boolean,
  lastConfirmedAt: timestamp | null
}
```

Rules:

- Editing the customer/property later must not rewrite a completed job's historical snapshot.
- A future booking should use the newest confirmed restrictions.
- The owner should be warned when restrictions have not been confirmed recently or remain unclear.
- Employees should see practical instructions, not unnecessary medical details.

---

## 6. ServicesOS Workflow

```text
Customer/property created or edited
→ owner records product restrictions
→ estimate and booking review show the restriction
→ job snapshot is created
→ ServicesOS compares restrictions with suggested supplies/methods
→ incompatible products are removed or flagged
→ approved alternatives are suggested
→ human confirms the plan
→ Daily Prep and Field Mode display the final instructions
```

The permanent rule is:

```text
System detects the conflict.
System suggests an alternative.
Human confirms the plan.
System records the decision.
```

ServicesOS should never silently select a replacement when the approved method is unclear.

---

## 7. Supply Recommendation Behavior

When ServicesOS prepares suggested cleaning supplies, it should:

1. Read the property restriction snapshot.
2. Compare the planned supplies and methods with the avoid lists.
3. Remove or visibly flag incompatible products.
4. Suggest only approved or owner-reviewed alternatives.
5. Show the reason for each removed or replaced suggestion.
6. Require confirmation when no approved method exists.

Example:

```text
SUPPLY CONFLICT
Bleach-based bathroom cleaner conflicts with this property's restriction.

Do not bring or use:
- Bleach
- Scented aerosol products

Approved alternatives:
- Fragrance-free neutral cleaner
- Customer-provided bathroom cleaner

Owner confirmation required before substitution.
```

The supply engine must not claim that an alternative is medically safe. It may only state that it matches the recorded business/customer instructions.

---

## 8. Where the Restriction Must Appear

The structured restriction should be visible in:

- Customer profile
- Property profile
- Estimate review
- Booking review
- Daily Prep supply summary
- Field Mode / Field Job Workspace
- Cleaning-method cards
- Owner completion review

It must not be buried only inside general customer notes.

### Field Mode example

> **Cleaning-product restriction:** Do not use bleach, ammonia, or scented aerosol products. Use fragrance-free products only. Customer-provided bathroom cleaner is approved. Confirm with the owner before substituting anything.

When `confirmationRequired` is true, Field Mode should require a clear acknowledgement before the job can be started.

---

## 9. V1 Scope

### In scope

- Structured customer/property restrictions
- Customer-level defaults with property-level specificity
- Avoid lists
- Approved alternatives
- Customer-provided-product option
- Affected areas/surfaces
- Estimate and booking warning
- Immutable booking snapshot
- Filtered or flagged Daily Prep supply suggestions
- Prominent Field Mode warning
- Human confirmation when required
- Tenant-safe persistence

### Deferred

- Medical document storage
- Diagnosis storage
- Ingredient databases
- Automated chemical-risk scoring
- Full SDS integration
- Automatic product-safety guarantees
- Autonomous replacement decisions
- Broad ComplianceAI expansion

---

## 10. Acceptance Criteria

The feature is ready for controlled wife beta when:

- Owner/admin can record restrictions on a customer/property profile.
- Property-specific restrictions override or add to customer defaults.
- Restrictions persist after refresh and sign-in.
- Tenant A cannot read or modify Tenant B restrictions.
- Estimate and booking review show a clear warning.
- A fresh immutable restriction snapshot is stored with each booking.
- Suggested supplies flag or remove restricted products.
- Approved alternatives appear when available.
- No silent substitution occurs.
- Field Mode displays the practical restriction prominently.
- Required acknowledgement blocks job start until confirmed.
- Existing customers with no restriction data continue to work normally.
- Completed-job history does not change when the profile is edited later.
- The app does not claim that a product is medically safe.
- Lint, focused tests, full tests, and build pass when promoted to implementation.

---

## 11. Implementation Guardrails

This should be implemented as a separate controlled ServicesOS task. Do not combine it with the multi-photo upload task.

Before implementation, perform a read-only audit of:

- Customer and property data models
- Customer create/edit forms
- Existing-customer repeat workflow
- Estimate comments and job notes
- Booking creation and snapshot behavior
- Daily Prep / suggested-supply logic
- Field Mode job packet
- Firestore rules and tenant scoping
- Existing tests

Do not touch:

- Stripe or payment truth logic
- Netlify configuration
- Firebase project configuration
- Broad GrowthAI
- Employee mobile expansion
- Unrelated customer/booking workflows

---

## 12. Priority Decision

This is a legitimate ServicesOS V1 safety feature because ServicesOS is beginning to recommend cleaning products and methods. Once the system suggests what to bring or use, it must also understand what the business has been told **not** to use.

It is not permission to build a full chemical-safety platform.

Current practical sequence:

```text
Use estimate/customer/job notes as the temporary safety net
→ verify the current wife-beta job workflow
→ promote this as a separate controlled safety task when needed by real use
→ implement the multi-photo workflow separately
```
