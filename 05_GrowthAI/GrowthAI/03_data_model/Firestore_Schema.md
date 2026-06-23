# GrowthAI Firestore Schema

## Collection Structure

Recommended structure:

```text
tenants/{tenantId}/growthAI/leads/{leadId}
tenants/{tenantId}/growthAI/outreachDrafts/{draftId}
tenants/{tenantId}/growthAI/interactions/{interactionId}
tenants/{tenantId}/growthAI/referrals/{referralId}
tenants/{tenantId}/growthAI/campaigns/{campaignId}
tenants/{tenantId}/growthAI/weeklyReviews/{reviewId}
```

## Lead Document

```json
{
  "id": "lead_123",
  "tenantId": "tenant_abc",
  "businessName": "ABC Cleaning",
  "contactName": "Jane Smith",
  "email": "jane@example.com",
  "phone": "555-555-5555",
  "website": "https://abccleaning.com",
  "location": "Bolivar, MO",
  "industry": "Residential Cleaning",
  "source": "Manual",
  "status": "Research Complete",
  "tags": ["cleaning", "residential", "high-fit"],
  "estimatedEmployees": 8,
  "fitScore": 91,
  "fitConfidence": 0.84,
  "painPoints": [
    "No online booking",
    "Outdated website",
    "Manual scheduling"
  ],
  "aiSummary": "ABC Cleaning appears to be a strong fit because...",
  "recommendedAngle": "Focus on scheduling and customer follow-up.",
  "lastContactedAt": null,
  "followUpDueAt": null,
  "lostReason": null,
  "createdAt": "serverTimestamp",
  "updatedAt": "serverTimestamp",
  "schemaVersion": 1
}
```

## Outreach Draft Document

```json
{
  "id": "draft_123",
  "leadId": "lead_123",
  "type": "email",
  "subject": "Quick idea for ABC Cleaning",
  "body": "Hi Jane...",
  "status": "draft",
  "generatedByAI": true,
  "approvedByHuman": false,
  "createdAt": "serverTimestamp",
  "updatedAt": "serverTimestamp"
}
```

## Interaction Document

```json
{
  "id": "interaction_123",
  "leadId": "lead_123",
  "type": "email",
  "direction": "outbound",
  "summary": "Sent first outreach email.",
  "content": "Hi Jane...",
  "outcome": "no_response",
  "createdAt": "serverTimestamp"
}
```

## Referral Document

```json
{
  "id": "ref_123",
  "referrerCustomerId": "customer_123",
  "referredBusinessName": "Fresh Homes LLC",
  "rewardType": "billing_credit",
  "rewardAmount": 100,
  "status": "pending",
  "createdAt": "serverTimestamp"
}
```
