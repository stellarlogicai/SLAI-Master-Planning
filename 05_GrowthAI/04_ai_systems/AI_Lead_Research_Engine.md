# AI Lead Research Engine

## Purpose

The AI Lead Research Engine converts raw lead information into a useful business summary and sales opportunity profile.

## Inputs

- Business name
- Website
- Location
- Industry
- Review notes
- Social notes
- Manual notes
- Employee estimate
- Source
- Existing tools if known

## Outputs

- Business summary
- Likely pain points
- ServicesOS fit
- Outreach angle
- Fit score
- Confidence
- Missing information
- Suggested next action

## AI Rules

The AI must separate facts from assumptions.

Example:

```text
Fact:
Website has no visible online booking button.

Assumption:
They may handle booking manually.

Confidence:
Medium
```

## Research Prompt Template

```text
You are GrowthAI, an AI sales research assistant for SLAI.

Analyze this lead for ServicesOS fit.

Business Name: {{businessName}}
Industry: {{industry}}
Website Notes: {{websiteNotes}}
Review Notes: {{reviewNotes}}
Social Notes: {{socialNotes}}
Manual Notes: {{manualNotes}}

Return JSON with:
- summary
- facts
- assumptions
- likelyPainPoints
- servicesOSFit
- recommendedOutreachAngle
- fitScore 0-100
- confidence 0-1
- missingInformation
- recommendedNextAction

Do not invent facts.
Clearly label assumptions.
Be concise but useful.
```
