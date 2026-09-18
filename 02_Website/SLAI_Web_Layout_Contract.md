# SLAI Web Layout Contract

**Status:** Planning contract  
**Implementation:** Future  
**Last Updated:** 2026-09-18

## Purpose

Define what an SLAI Web layout is allowed to control so layouts remain reusable, versionable, testable, and separate from customer facts.

## Layout May Control

- section composition,
- section ordering,
- supported section variants,
- typography scale behavior,
- spacing system usage,
- grid/layout behavior,
- hero composition,
- image placement/cropping behavior,
- responsive breakpoints/behavior,
- optional-section compatibility,
- allowed CTA placements.

## Layout Must Not Own

- customer identity,
- prices,
- hours,
- staff facts,
- contact information,
- policies,
- private ServicesOS records,
- booking availability truth,
- payment logic,
- secrets,
- tenant authentication,
- duplicated connector code.

## Required Layout Manifest Fields

Each layout should eventually declare:

- `layout_id`
- `version`
- `core_compatibility`
- `required_sections`
- `optional_sections`
- `required_content_fields`
- `supported_variants`
- `asset_requirements`
- `performance_budget` when defined
- `accessibility_requirements`
- `known_constraints`

## Compatibility Rule

A site manifest must reference an explicit layout version.

Breaking layout changes require a new version.

Do not silently reinterpret old customer manifests after a breaking layout change.

## Customer Override Rule

Customer-specific overrides may change approved presentation choices, but should not mutate the layout implementation itself for one customer.

If the same override repeats across multiple customers, consider promoting it into a supported layout variant.

## Layout Library Relationship

The target service-business layout catalog and expansion order are documented in `SLAI_Web_Layout_Library_Plan.md`.

The library plan does not override this contract or the V1 execution guardrail.

Additional rules:

- a layout family selects composition and supported variants; it does not create a second business-data model,
- layout structure and theme/style presets remain separate concerns,
- the authoritative Website Profile `presentation.layout`, `presentation.pages`, section `variantId`, and brand preset references remain the customer/site state,
- new section types require an explicit Website Profile schema revision rather than template-only invention,
- repeated customer-specific presentation needs should become supported variants before they become copied custom code,
- future AI-assisted composition must emit valid supported layout/profile state rather than bypassing the contract.

See also:

- `SLAI_Web_V1_Website_Profile_Schema.md`
- `SLAI_Web_V1_Execution_Plan.md`

## Initial Scope

Build one or two excellent production layouts before expanding the library.

Do not build all conceptual layouts in advance of demand.

The 10-layout catalog is a target library to grow into after the first production layouts and shared section variants are proven.
