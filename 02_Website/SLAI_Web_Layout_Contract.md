# SLAI Web Layout Contract

**Status:** Planning contract  
**Implementation:** Future  
**Last Updated:** 2026-09-06

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

## Initial Scope

Build one or two excellent production layouts before expanding the library.

Do not build all conceptual layouts in advance of demand.
