# Firebase / Firestore Data Model

## Collection Structure

Recommended starting structure:

```text
researchQuestionnaires/{questionnaireId}
researchResponses/{responseId}
researchInsights/{insightId}
researchBacklogCandidates/{candidateId}
```

## Questionnaire Document

```js
researchQuestionnaires/{questionnaireId} = {
  id: 'pharmacy-workflow-v1',
  title: 'Pharmacy Workflow Pain Point Questionnaire',
  productArea: 'PharmacyOS',
  version: 1,
  status: 'active',
  createdAt,
  updatedAt,
  createdBy,
  schemaVersion: 1
}
```

Questionnaire content can be stored either:

1. In code as static JSON/JS files for V1.
2. In Firestore for V2 admin-editable content.
3. In Markdown/JSON imported into Firestore later.

## Response Document

```js
researchResponses/{responseId} = {
  questionnaireId: 'pharmacy-workflow-v1',
  questionnaireTitle: 'Pharmacy Workflow Pain Point Questionnaire',
  productArea: 'PharmacyOS',
  schemaVersion: 1,
  respondent: {
    name: null,
    email: null,
    role: 'Pharmacist',
    industry: 'Retail Pharmacy',
    yearsExperience: '18+',
    organizationType: 'Retail Chain'
  },
  consent: {
    confirmed: true,
    confirmedAt,
    privacyNoticeVersion: 1
  },
  answers: {
    'daily-most-repeated-tasks': '...',
    'software-too-many-screens': '...'
  },
  metadata: {
    submittedAt,
    source: 'website',
    deviceType: 'mobile',
    userAgent: 'optional',
    ipHash: 'optional-later'
  },
  review: {
    status: 'new',
    reviewedBy: null,
    reviewedAt: null,
    tags: [],
    priority: null,
    notes: ''
  }
}
```

## Insight Document

```js
researchInsights/{insightId} = {
  productArea: 'PharmacyOS',
  sourceResponseIds: ['response1', 'response2'],
  theme: 'Screen bouncing',
  summary: 'Multiple respondents describe too many screens for simple tasks.',
  severity: 'high',
  confidence: 'medium',
  createdBy: 'human-or-ai-draft',
  humanApproved: false,
  createdAt
}
```

## Backlog Candidate Document

```js
researchBacklogCandidates/{candidateId} = {
  productArea: 'RetailOS',
  title: 'Task-first outdate workflow',
  problem: 'Outdate checks waste hours by department.',
  proposedFeature: 'Guided outdate workflow with pull rules and disposal routing.',
  sourceInsightIds: [],
  status: 'candidate',
  humanApproved: false,
  createdAt
}
```
