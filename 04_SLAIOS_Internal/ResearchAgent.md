# SLAIOS Research Agent

## Purpose

The Research Agent is the external intelligence system for SLAIOS.

It helps SLAI stay informed without Jamie manually searching, reading, organizing, and remembering everything.

Core rule:

```text
Collecting information does NOT mean believing information.
```

The Research Agent gathers information, assigns confidence, cites sources, and sends important findings for human review.

---

# Mission

```text
Research Agent
↓
Collect public information
↓
Evaluate credibility
↓
Summarize
↓
Tag
↓
Store
↓
Connect to projects/customers/markets
↓
Notify only when useful
```

The goal is not to flood Jamie with noise. The goal is to surface market changes, competitor movement, pricing trends, local business opportunities, customer pain signals, regulation changes, technology trends, and vertical expansion opportunities.

---

# Why This Matters For A One-Man Company

Jamie is currently acting as CEO, CTO, product manager, developer, QA, sales, research, marketing, and documentation.

The Research Agent protects founder time.

```text
Research Agent does the scanning.
SLAIOS does the organizing.
Jamie makes the decision.
```

---

# Data Sources

## Internal Sources

- SLAI planning docs
- ServicesOS documentation
- Feature requests
- Customer feedback
- Wife beta feedback
- Bug reports
- Support tickets
- Metrics
- Development logs
- Git commit summaries
- Meeting notes
- Incident reports

## External Sources

- Government websites
- Industry reports
- Competitor websites
- Public pricing pages
- Local business directories
- Google Business profiles
- Review platforms
- Public social pages
- News articles
- Forums
- Blogs
- Product changelogs

---

# Source Credibility Scoring

```javascript
export const SOURCE_CREDIBILITY = {
  GOVERNMENT: 95,
  ESTABLISHED_INDUSTRY_REPORT: 90,
  OFFICIAL_COMPANY_WEBSITE: 80,
  VERIFIED_REVIEW_PLATFORM: 75,
  LOCAL_BUSINESS_DIRECTORY: 70,
  FORUM_DISCUSSION: 55,
  SOCIAL_MEDIA_POST: 45,
  RANDOM_BLOG: 25
};
```

The AI may summarize low-confidence sources, but should not treat them as facts without review.

---

# Research Item Schema

```javascript
const researchItem = {
  id: "research_001",
  sourceUrl: "https://example.com/article",
  sourceName: "Example Industry Report",
  sourceType: "industry_report",
  credibilityScore: 90,

  title: "Cleaning Industry Pricing Trends 2026",
  summary: "Local cleaning companies are increasing recurring service pricing.",
  rawExcerpt: "Short stored excerpt or parsed summary only.",

  tags: ["cleaning", "pricing", "servicesos", "market-trend"],
  relatedProjects: ["ServicesOS"],
  relatedVerticals: ["cleaning"],

  confidence: "high",
  requiresHumanReview: false,

  collectedAt: new Date().toISOString(),
  lastVerifiedAt: null,
  status: "active"
};
```

---

# Collection Pipeline

```text
1. Fetch source
2. Extract useful text
3. Remove junk/navigation/ads
4. Identify source type
5. Assign credibility score
6. Summarize
7. Tag
8. Detect related SLAI project
9. Store in research database
10. Notify only if important
```

---

# Basic Research Agent Pseudocode

```javascript
async function runResearchJob(source) {
  const page = await fetchPage(source.url);
  const cleanedText = cleanHtml(page.html);

  const credibility = scoreSource(source);
  const summary = await summarizeResearch(cleanedText);
  const tags = await generateTags(summary);

  const researchItem = {
    sourceUrl: source.url,
    sourceName: source.name,
    sourceType: source.type,
    credibilityScore: credibility,
    title: summary.title,
    summary: summary.body,
    tags,
    relatedProjects: detectRelatedProjects(tags),
    relatedVerticals: detectRelatedVerticals(tags),
    confidence: credibility >= 80 ? "high" : credibility >= 60 ? "medium" : "low",
    requiresHumanReview: credibility < 70,
    collectedAt: new Date().toISOString(),
    status: "active"
  };

  await saveResearchItem(researchItem);

  if (shouldNotifyFounder(researchItem)) {
    await createFounderAlert(researchItem);
  }

  return researchItem;
}
```

---

# Notification Rules

Notify Jamie only for:

- Strong potential client opportunity
- Competitor pricing change
- New local market trend
- Regulation/legal/compliance update
- Repeated customer complaint trend
- New vertical opportunity
- Security/development trend relevant to SLAI
- Major competitor feature launch

Do not notify for random articles, tiny pricing changes, low-confidence blogs, duplicates, or minor social posts.

---

# Example Use Cases

## Cleaning Market Tracking

The Research Agent scans local cleaning businesses and tracks services offered, pricing if public, website quality, online booking, review trends, common complaints, service areas, and visible employee count.

Example summary:

```text
Bolivar cleaning market summary:

- 18 local cleaning businesses found
- 5 have online booking
- 12 rely mainly on Facebook pages
- Average listed deep clean starts around $180-$250
- Most common negative review theme: missed scheduling and late arrivals
- Opportunity: ServicesOS scheduling + reminders + employee app directly addresses this pain
```

## Competitor Monitoring

Tracks competitors like Jobber, Housecall Pro, ZenMaid, MaidCentral, and ServiceTitan.

Example:

```text
ZenMaid added new automated reminders.
Potential ServicesOS impact: medium.
Recommendation: ensure reminders are documented for V2.
```

## Vertical Expansion Research

```text
Window cleaning appears to share 90% of ServicesOS core workflow.
Common needs:
- Scheduling
- Crew assignment
- Exterior/interior checklist
- Weather delay notes
- Before/after photos

Recommendation:
Window Cleaning should be considered an early ServicesOS module after Cleaning stabilizes.
```

---

# Storage Collections

Suggested Firestore collections:

```text
researchSources
researchItems
researchSummaries
researchAlerts
marketSnapshots
competitorSnapshots
```

```javascript
researchSources/{sourceId} = {
  name: "Local Business Directory",
  url: "https://example.com",
  type: "business_directory",
  credibilityScore: 70,
  enabled: true,
  scanFrequency: "weekly",
  lastScannedAt: timestamp
};
```

---

# Safety Rules

- Respect robots.txt and website terms.
- Prefer APIs when available.
- Avoid aggressive scraping.
- Store summaries and metadata, not full copyrighted pages.
- Do not scrape private or login-protected data without permission.
- Do not use data for spam.
- Human review required for high-impact business decisions.

---

# MVP Build Order

## Phase 1: Manual Research Storage

- Create research item schema
- Allow Jamie to manually add sources
- Allow AI to summarize pasted articles/pages
- Store tags and related projects

## Phase 2: Controlled Scrubber

- Add approved source list
- Fetch public pages on a schedule
- Extract text
- Summarize and tag
- Store findings

## Phase 3: Alerts

- Detect important changes
- Create founder notifications
- Link alerts to projects or verticals

## Phase 4: Market Intelligence

- Track local business trends
- Track pricing
- Track competitor feature changes
- Track review themes

## Phase 5: Client Finder Integration

- Feed business opportunity signals into Client Finder
- Generate lead scores
- Recommend outreach targets

---

# Final Rule

The Research Agent should help Jamie see the market without drowning in it.

```text
Research Agent = SLAI's eyes.
Company Memory = SLAI's brain.
Jamie = final decision maker.
```
