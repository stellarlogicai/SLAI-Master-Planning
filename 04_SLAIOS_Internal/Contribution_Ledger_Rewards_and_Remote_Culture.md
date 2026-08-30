# SLAIOS Contribution Ledger, Rewards, and Remote Culture

Status: Future planning only.

## Purpose

Remote work can make important contributions less visible and can allow credit to drift toward the loudest or highest-ranking person.

SLAIOS should preserve a factual, evidence-backed record of contribution.

The goal is not to score employees.

The goal is to answer:

- Who contributed?
- What did they contribute?
- When did the work happen?
- What evidence supports it?
- Who reviewed or verified it?
- What outcome did it affect?

## Contribution Ledger

Potential fields:

```text
contributionId
employee/user
project/product
type
role in contribution
description
proposedAt          optional
startedAt
firstEvidenceAt     optional
completedAt
verifiedAt
deployedAt          optional
impactObservedThrough optional
elapsed timeframe
estimated active effort range optional
evidence[]
collaborators[]
reviewer/validator
decision owner
outcome
status
```

Timeframe is context, not a productivity score.

A difficult contribution completed quickly may be more valuable than a trivial task that took longer.

## Shared Credit

Support distinct roles such as:

- originator,
- primary contributor,
- contributor,
- reviewer,
- QA,
- decision owner,
- mentor/support contributor.

Managers do not automatically receive authorship credit for work performed by their teams.

Leadership work can be recorded separately as leadership.

## Provenance and Credit Protection

Whenever possible, connect contributions to evidence such as:

- PRs/commits,
- issues,
- approved product/design documents,
- decisions,
- incident records,
- customer outcomes,
- process changes,
- training/mentoring,
- support resolutions,
- sales/customer-success work,
- manager-confirmed or peer-confirmed evidence.

Employees should be able to view their own ledger, request corrections, add missing evidence, and identify collaborators.

## Formal Reviews

SLAIOS may prepare an evidence summary for a manager.

It should not reduce an employee to a hidden score.

Points, chat activity, time online, or raw task counts must not decide promotions, compensation, or discipline.

## Rewards Layer

Gamification should sit on top of the factual ledger.

Possible features:

- Contribution XP/points,
- achievement badges,
- personal milestones,
- monthly/quarterly seasons,
- individual leaderboards,
- team leaderboards,
- team quests,
- limited peer kudos,
- manager-recognition bonuses with required reason,
- limited-edition launch achievements.

## Anti-Point-Farming

Do not reward raw activity such as:

- number of messages,
- number of commits,
- number of tickets touched,
- hours online,
- staying late,
- keystrokes,
- or arbitrary task volume.

Reward verified value, collaboration, quality, initiative, customer impact, reliability, knowledge sharing, and meaningful outcomes.

Different roles may earn recognition through different kinds of contributions.

## Reward Choices

Employees may be allowed to choose from an approved catalog, for example:

- premium SLAI swag,
- limited launch-team items,
- DoorDash/meal credits,
- gift cards where policy allows,
- workspace/equipment credit,
- training/conference credit,
- extra PTO where legally/operationally appropriate,
- team celebrations.

Reward tax/payroll implications must be classified correctly before fulfillment.

## SLAIOS Reward Fulfillment

Potential future flow:

```text
verified contribution / milestone
  ->
reward unlocked
  ->
SLAIOS notifies employee
  ->
employee chooses approved reward
  ->
eligibility + budget + policy checked
  ->
human approval when required
  ->
approved vendor fulfills
  ->
tracking/status returned
  ->
ledger records fulfillment
```

Home/shipping addresses remain restricted People/HR data and are shared only as needed for fulfillment.

## Swag and Culture

SLAI should aim for swag employees actually want to use.

Potential examples:

- premium hoodies,
- embroidered hats,
- jackets,
- backpacks,
- tumblers,
- desk mats,
- launch-team drops,
- anniversary gear,
- welcome boxes.

Some items may be earned rather than purchasable.

## Meal/Lunch Perks

For a remote company, meal credits can recreate "company buys lunch" moments.

Potential uses:

- monthly lunch credit,
- first-day lunch,
- birthdays,
- work anniversaries,
- launch days,
- milestone rewards,
- incident-response meals,
- spontaneous founder/company lunch drops.

DoorDash may be one provider, not a hard dependency. SLAIOS should use an approved vendor layer so providers can change or corporate agreements can be added later.

## Remote Culture

SLAIOS may also support:

- employee recognition,
- birthdays/anniversaries,
- optional social channels,
- virtual events,
- team achievements,
- new-hire introductions,
- culture polls,
- and employee-chosen perks.

The aim is a company employees are proud to work for, without turning culture into mandatory gamification.
