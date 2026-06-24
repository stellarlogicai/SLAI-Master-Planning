# 12 — MVP Data Fields

**Status:** Future planning only  
**Active build priority:** ServicesOS remains priority one.  
**Purpose:** Define the minimum future data records needed for the SLAI Company Engine MVP.

---

## Data Principle

Start with simple records that support real founder workflows.

```text
Manual first.
Simple fields first.
Automation later.
```

Do not design a huge database before the workflow is proven.

---

## Core Records

MVP records:

1. ProductStatus
2. FounderTask
3. DecisionLog
4. Lead
5. LeadResearch
6. FollowUp
7. Handoff
8. CompanyMemoryEntry
9. AttentionAlert

---

## 1. ProductStatus

Purpose:

Track product status across SLAI.

Fields:

- productId
- productName
- priorityRank
- status
- phase
- activeOrFuture
- currentFocus
- nextAction
- blocker
- owner
- lastUpdatedAt
- relatedDocs

Example statuses:

- Active Build
- Beta Prep
- Future Planning
- Parked
- Blocked
- Needs Review

---

## 2. FounderTask

Purpose:

Track what Jamie should do next.

Fields:

- taskId
- title
- productArea
- priority
- status
- dueDate
- source
- notes
- relatedDecisionId
- relatedLeadId
- relatedHandoffId
- createdAt
- updatedAt

Statuses:

- To Do
- In Progress
- Waiting
- Done
- Parked

---

## 3. DecisionLog

Purpose:

Capture durable decisions.

Fields:

- decisionId
- title
- productArea
- decision
- reason
- impact
- activeOrFuture
- relatedDocs
- madeBy
- madeAt
- nextAction

Example:

```text
Decision:
GrowthAI helps SLAI first, ServicesOS customers second.

Reason:
SLAI needs its own customer acquisition engine before customer-facing GrowthAI is useful.
```

---

## 4. Lead

Purpose:

Track potential SLAI or ServicesOS customers.

Fields:

- leadId
- businessName
- businessType
- location
- website
- contactName
- contactEmail
- contactPhone
- source
- fitStatus
- leadStatus
- notes
- createdAt
- updatedAt

Lead statuses:

- New
- Research Needed
- Researched
- Outreach Drafted
- Waiting on Jamie
- Contacted
- Follow-Up Due
- Not a Fit
- Converted

---

## 5. LeadResearch

Purpose:

Store AI-assisted or manual research on a lead.

Fields:

- researchId
- leadId
- businessSummary
- likelyPainPoints
- servicesOffered
- possibleFit
- outreachAngle
- confidenceLevel
- recommendedNextAction
- researchSourceNotes
- reviewedByJamie
- createdAt

---

## 6. FollowUp

Purpose:

Track follow-up actions.

Fields:

- followUpId
- leadId
- customerId
- productArea
- dueDate
- reason
- suggestedMessage
- approvedMessage
- status
- outcome
- createdAt
- completedAt

Statuses:

- Scheduled
- Due
- Draft Ready
- Approved
- Completed
- Skipped

---

## 7. Handoff

Purpose:

Prepare future Codex/developer tasks.

Fields:

- handoffId
- title
- productArea
- scope
- filesToTouch
- filesToAvoid
- acceptanceCriteria
- validationCommands
- reportBackInstructions
- status
- createdAt
- completedAt

Statuses:

- Draft
- Ready
- In Progress
- Needs Review
- Completed
- Parked

---

## 8. CompanyMemoryEntry

Purpose:

Preserve durable company knowledge.

Fields:

- memoryId
- title
- category
- summary
- source
- productArea
- importance
- relatedDocs
- createdAt
- updatedAt

Categories:

- Product Principle
- Founder Rule
- Customer Insight
- Architecture Decision
- Pricing Principle
- Beta Feedback
- Future Idea
- Lesson Learned

---

## 9. AttentionAlert

Purpose:

Surface what needs attention.

Fields:

- alertId
- title
- productArea
- severity
- reason
- suggestedAction
- relatedEntityType
- relatedEntityId
- status
- createdAt
- resolvedAt

Severity:

- Low
- Medium
- High
- Critical

Statuses:

- Open
- Snoozed
- Resolved
- Parked

---

## Shared Fields

Most records should support:

- createdAt
- updatedAt
- source
- productArea
- status
- notes
- relatedDocs

---

## MVP Data Boundary

Do not start with complex tables for:

- full user/team permissions
- advanced analytics
- billing
- automated integrations
- large event streaming
- customer-facing GrowthAI dashboards

Start with the records needed for founder workflow and lead follow-up.

---

## Future Planning Only

```text
These fields are planning references.
Do not create database schema until this project is promoted after ServicesOS stabilizes.
```
