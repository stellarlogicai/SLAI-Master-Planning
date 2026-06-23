# SLAIOS Client Finder

## Purpose

The Client Finder is an internal SLAIOS business development system.

Its job is to identify businesses that ServicesOS or future SLAI products can genuinely help.

It should not spam businesses. It should find strong-fit companies, explain why they are a fit, and help Jamie prioritize outreach.

---

# Mission

```text
Find companies
↓
Analyze public signals
↓
Score fit
↓
Explain opportunity
↓
Suggest outreach
↓
Track response
```

The goal is to help a one-man company find customers intelligently.

---

# Target Use Cases

## Internal SLAI Use

Jamie uses Client Finder to find:

- Cleaning companies that need ServicesOS
- Service businesses with poor scheduling systems
- Local businesses missing websites
- Businesses with no online booking
- Businesses with review complaints ServicesOS can solve
- Future vertical opportunities

## Future Customer Add-On

Eventually this becomes a ServicesOS add-on called `Growth Assistant`.

For customers, it can help identify growth areas, track local competition, compare pricing, find service demand, suggest neighborhoods to market to, and suggest upsell opportunities.

---

# Business Data Collected

```javascript
const businessLead = {
  id: "lead_001",
  businessName: "ABC Cleaning",
  industry: "cleaning",
  vertical: "cleaning",

  website: "https://abccleaning.com",
  facebookUrl: "https://facebook.com/abccleaning",
  googleBusinessUrl: "https://maps.google.com/...",

  phone: "555-555-5555",
  email: "info@abccleaning.com",
  city: "Bolivar",
  state: "MO",
  serviceArea: ["Bolivar", "Springfield"],

  reviewCount: 87,
  averageRating: 4.3,
  reviewTrend: "growing",

  hasWebsite: true,
  hasOnlineBooking: false,
  hasVisiblePricing: false,
  hasCustomerPortal: false,
  hasSchedulingSoftwareSignal: false,

  painSignals: ["late_arrivals", "scheduling_confusion"],
  fitScore: 91,
  leadStatus: "research",

  sourceUrls: [],
  notes: "Strong ServicesOS fit due to scheduling complaints and no online booking.",

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
```

---

# Pain Signals

## Website Signals

- No website
- Old website
- Not mobile friendly
- No booking form
- No pricing information
- Broken contact form
- Slow website
- No reviews/testimonials

## Review Signals

- Late arrivals
- Missed appointments
- Poor communication
- Inconsistent quality
- Scheduling confusion
- Payment issues
- Employees unprepared

## Operations Signals

- Hiring posts
- Growing review count
- Expanding service area
- Facebook-only business presence
- Manual booking language like "message us to schedule"
- No employee workflow tools visible

---

# Lead Scoring Model

```javascript
function scoreLead(business) {
  let score = 0;

  if (business.industry === "cleaning") score += 20;
  if (business.reviewCount > 20) score += 10;
  if (business.reviewTrend === "growing") score += 15;
  if (!business.hasOnlineBooking) score += 15;
  if (!business.hasCustomerPortal) score += 10;
  if (business.painSignals.includes("scheduling_confusion")) score += 20;
  if (business.painSignals.includes("late_arrivals")) score += 10;
  if (!business.hasWebsite) score += 10;

  return Math.min(score, 100);
}
```

Lead categories:

```text
90-100 = Excellent Fit
75-89 = Strong Fit
60-74 = Possible Fit
40-59 = Weak Fit
0-39 = Ignore For Now
```

---

# ServicesOS Fit Score

The fit score should answer:

```text
Can ServicesOS solve real problems for this business?
```

Example:

```text
Business: Local cleaning company
Employees: 3-8 estimated
Website: Basic
Online booking: No
Reviews: Growing
Complaints: Scheduling and communication
Fit Score: 94/100
Recommendation: Contact after wife beta stabilizes
```

---

# Outreach Recommendation

Client Finder should not auto-spam. It should produce a recommendation.

```javascript
const outreachRecommendation = {
  shouldContact: true,
  priority: "high",
  reason: "Strong ServicesOS fit. Public reviews mention scheduling and communication issues.",
  suggestedAngle: "Help reduce missed appointments and simplify customer scheduling.",
  suggestedChannel: "email_or_facebook",
  humanApprovalRequired: true
};
```

---

# Example Outreach Draft

```text
Hi [Business Name],

I noticed your cleaning business is growing and appears to serve the [City] area.

I'm building ServicesOS, a platform designed specifically to help cleaning businesses manage customers, estimates, scheduling, employees, checklists, and payments from one place.

I'm currently looking for a small number of local businesses to test it with and provide feedback.

Would you be open to a short demo?
```

Human review is required before sending.

---

# Future Customer Add-On: Growth Assistant

For ServicesOS customers, Client Finder can become Growth Assistant.

## Local Market Opportunity

```text
Nearby neighborhoods show high income and low cleaning business competition.
Recommendation: Run targeted flyers or Facebook ads in this area.
```

## Pricing Suggestion

```text
Your average deep clean price: $180
Local market average: $225
Recommendation: Consider increasing deep clean pricing by 10-15%.
```

## Review Trend

```text
Customers mention pet hair in 12 recent reviews across local competitors.
Recommendation: Add "Pet Hair Deep Clean" service package.
```

## Competitor Gap

```text
Only 3 of 18 local cleaning businesses offer online booking.
Recommendation: Promote online booking as a differentiator.
```

---

# Collections

Suggested Firestore collections:

```text
businessLeads
businessLeadSnapshots
leadScores
outreachDrafts
outreachHistory
marketOpportunities
```

```javascript
businessLeads/{leadId} = {
  businessName: string,
  industry: string,
  city: string,
  state: string,
  website: string,
  phone: string,
  email: string,
  fitScore: number,
  painSignals: array,
  leadStatus: "research" | "approved" | "contacted" | "demo_scheduled" | "won" | "lost",
  assignedTo: string,
  createdAt: timestamp,
  updatedAt: timestamp
};
```

---

# Build Order

## Phase 1: Manual Lead Tracker

- Add business lead records
- Add fit score field
- Add notes
- Add lead status
- Add manual outreach tracking

## Phase 2: Research Agent Feed

- Import businesses from Research Agent
- Attach pain signals
- Attach source URLs
- Auto-generate lead summaries

## Phase 3: Scoring

- Add fit score algorithm
- Add reason/explanation
- Add priority levels

## Phase 4: Outreach Drafting

- Generate outreach drafts
- Require human approval
- Track sent/contacted status

## Phase 5: Customer Add-On

- Convert internal Client Finder into customer-facing Growth Assistant
- Restrict to customer market and allowed data
- Provide recommendations, not spam

---

# Safety Rules

- Do not scrape private data.
- Do not spam businesses.
- Do not auto-send outreach without approval.
- Respect website terms and public data rules.
- Prefer quality leads over quantity.
- Track why a lead is recommended.

---

# Final Rule

Client Finder exists to help SLAI grow intelligently.

```text
Find fewer leads.
Find better leads.
Explain why they matter.
Help Jamie act faster.
```
