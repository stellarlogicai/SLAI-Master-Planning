# SLAIOS Developer Assistant

## Purpose

The Developer Assistant is the engineering-facing interface inside SLAIOS.

It helps engineers understand approved company and code context.

As SLAIOS evolves, actual code execution should move into the **SLAIOS Forge** add-on rather than giving the conversational assistant unrestricted workstation access.

## Core Capabilities

Without Forge:

- search authorized planning docs,
- search authorized code,
- explain architecture,
- retrieve decision history,
- find related files,
- prepare issue/task scope,
- suggest fixes,
- recommend tests,
- draft PR descriptions,
- generate onboarding/context packs.

With Forge enabled:

- prepare a controlled engineering job,
- choose Luna/Terra/Sol through SLAIOS routing,
- send the job to an isolated worker,
- receive patch/test/build/QA evidence,
- present the result for review,
- and return approved results to company memory/contribution tracking.

## Relationship to Forge

```text
Engineer
   |
SLAIOS Developer Assistant
   |
permissions + context + task scope
   |
SLAIOS Forge
   |
isolated VM/container worker
   |
code / tests / build / QA evidence
   |
review / PR
```

## Restrictions

The assistant/Forge should not independently:

- access unauthorized repositories,
- read unrelated secrets,
- modify production data,
- deploy to production,
- merge consequential changes,
- bypass required reviewers,
- or broaden scope without escalation.

## Engineering Principle

AI should remove repetitive implementation and reporting friction so engineers spend more time on architecture, difficult debugging, product judgment, and review.

AI supports the engineer; the engineer retains responsibility.
