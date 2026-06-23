# SLAIOS Ethical Research Agent Implementation Guide

## Purpose

This document defines the proper way to build the SLAIOS Research Agent, Browser Scrubber, Client Finder, and Growth Intelligence systems.

The goal is to help SLAI collect public market intelligence responsibly while protecting the company from legal, ethical, reputation, and technical risks.

Core principle:

```text
SLAIOS should behave like a professional research analyst,
not a stealth crawler.
```

---

# High-Level Mission

SLAIOS Research Agent should:

```text
Collect public information
↓
Extract only useful business signals
↓
Store facts, summaries, metadata, and source references
↓
Avoid copying full websites
↓
Respect boundaries
↓
Generate useful business intelligence
↓
Help Jamie and future department heads make better decisions
```

The value is not in copying data. The value is in turning public signals into actionable insight.

---

# What SLAIOS Should Collect

SLAIOS may collect public-facing business intelligence such as:

- Business name
- Location
- Website URL
- Public phone/email if listed
- Services offered
- Public pricing if listed
- Online booking availability
- Review count
- Average rating
- Common review themes
- Service area
- Public business hours
- Public social links
- Website quality signals
- Visible hiring/growth signals
- Competitor feature changes
- Public market trends

Example stored output:

```javascript
const businessSignal = {
  businessName: "Example Cleaning Co",
  website: "https://examplecleaning.com",
  industry: "cleaning",
  city: "Bolivar",
  state: "MO",

  signals: {
    hasWebsite: true,
    hasOnlineBooking: false,
    visiblePricing: true,
    servicesOffered: ["standard_clean", "deep_clean", "move_out_clean"],
    startingDeepCleanPrice: 225,
    reviewCount: 84,
    averageRating: 4.4,
    commonComplaints: ["late_arrivals", "communication"]
  },

  source: {
    url: "https://examplecleaning.com/services",
    collectedAt: "2026-06-16T00:00:00Z",
    extractionMethod: "public_page_summary",
    storedRawContent: false
  },

  confidence: "medium",
  humanReviewRequired: false
};
```

---

# What SLAIOS Should NOT Collect

SLAIOS should not collect or store:

- Entire website HTML
- Full articles
- Full help centers
- Copyrighted pages copied word-for-word
- Images unless permission exists
- Private/login-protected content
- Customer lists
- Hidden/private APIs
- Personal sensitive information
- Data from bypassed protections
- Anything requiring unauthorized access

Bad pattern:

```text
Download full site
Store all content forever
Republish or train directly from copied pages
```

Good pattern:

```text
Visit public page
Extract limited business facts
Store source URL and timestamp
Generate original summary
```

---

# The Difference Between Copying and Market Intelligence

## Copying

```text
Website says:
"Deep cleaning starts at $225 and includes kitchen, bathrooms, bedrooms..."

SLAIOS stores:
Full page text
Full HTML
Images
Exact wording
```

This creates copyright and reputation risk.

## Market Intelligence

```text
SLAIOS stores:
Service: deep_clean
Starting price: 225
Location: Springfield, MO
Source URL: example.com/services
Collected At: timestamp
Confidence: medium
```

Then SLAIOS generates:

```text
24 cleaning companies analyzed.
Average deep clean price: $210.
Only 4 offer online booking.
Most common complaint: late arrivals.
```

That is analysis, not copying.

---

# Ethical Research Principles

## 1. Public Information Only

Only collect information visible to normal public visitors without login, payment, or bypassing access controls.

## 2. Store Knowledge, Not Copies

Store facts, metadata, tags, summaries, source references, confidence scores, and extracted business signals.

Do not store full copied pages.

## 3. Respect Source Boundaries

Prefer:

- Public APIs
- Business directories with acceptable terms
- Government/public datasets
- Official company pages
- Review data available through approved APIs or compliant methods

Avoid:

- Aggressive crawling
- Circumventing access controls
- Ignoring explicit blocks
- Disguising automation to bypass protections

## 4. Be Auditable

Every extracted fact should be traceable.

```javascript
const sourceAudit = {
  sourceUrl: "https://example.com",
  collectedAt: "2026-06-16T00:00:00Z",
  collectedBy: "SLAIOS_RESEARCH_AGENT",
  fieldsExtracted: ["businessName", "services", "startingPrice"],
  rawContentStored: false,
  summaryGenerated: true,
  confidence: "medium"
};
```

## 5. Human Approval For High-Impact Use

Require human review for:

- Outreach decisions
- Legal/compliance decisions
- Pricing changes
- Public reports
- Customer-facing claims
- Competitive claims
- Any unclear or low-confidence data

---

# Proper Use Of Behavioral Logic

Behavioral analysis is acceptable when used to improve quality and safety.

Good uses:

```text
Learn which sources are reliable
Avoid duplicate pages
Detect stale websites
Throttle requests
Prioritize useful sources
Pause when errors increase
Avoid hammering small sites
Detect low-quality data
Improve alert relevance
```

Avoid using behavioral logic to:

```text
Pretend to be human
Evade bot detection
Bypass protections
Ignore rate limits
Access blocked content
Defeat anti-scraping systems
```

Core rule:

```text
Use behavioral intelligence to research smarter,
not to sneak past boundaries.
```

---

# Recommended Architecture

```text
Research Source Registry
↓
Crawler / Fetcher
↓
Content Cleaner
↓
Extractor
↓
Credibility Scorer
↓
Summarizer
↓
Knowledge Item Creator
↓
Audit Logger
↓
Knowledge Graph
↓
Client Finder
↓
Founder Dashboard
```

---

# Folder Structure

Suggested SLAIOS structure:

```text
SLAIOS/
├── research-agent/
│   ├── sources/
│   │   ├── sourceRegistry.js
│   │   ├── sourcePolicies.js
│   │   └── credibilityScores.js
│   ├── collectors/
│   │   ├── publicPageCollector.js
│   │   ├── apiCollector.js
│   │   └── manualInputCollector.js
│   ├── extractors/
│   │   ├── businessInfoExtractor.js
│   │   ├── pricingExtractor.js
│   │   ├── serviceExtractor.js
│   │   └── reviewSignalExtractor.js
│   ├── summarizers/
│   │   ├── marketSummaryGenerator.js
│   │   └── competitorSummaryGenerator.js
│   ├── scoring/
│   │   ├── sourceCredibility.js
│   │   ├── confidenceScore.js
│   │   └── leadFitScore.js
│   ├── audit/
│   │   ├── extractionLogger.js
│   │   └── sourceAuditService.js
│   └── index.js
├── client-finder/
│   ├── leadScoring.js
│   ├── painSignalDetector.js
│   ├── outreachDrafts.js
│   └── leadReviewQueue.js
└── knowledge/
    ├── knowledgeGraph.js
    ├── knowledgeItems.js
    └── sourceReferences.js
```

---

# Source Registry

Every source should be registered before scanning.

```javascript
export const researchSources = [
  {
    id: "local_cleaning_directory",
    name: "Local Cleaning Directory",
    url: "https://example-directory.com/cleaning",
    type: "business_directory",
    enabled: true,

    allowedUse: {
      collectBusinessNames: true,
      collectPublicContactInfo: true,
      collectPricing: true,
      storeRawHtml: false,
      storeFullText: false,
      generateSummary: true
    },

    limits: {
      maxPagesPerRun: 25,
      minDelayMs: 5000,
      scanFrequency: "weekly"
    },

    reviewRequired: false,
    notes: "Public directory. Store only business metadata and source URL."
  }
];
```

---

# Source Policy

Create a policy check before any fetch.

```javascript
function canCollectFromSource(source) {
  if (!source.enabled) {
    return { allowed: false, reason: "SOURCE_DISABLED" };
  }

  if (source.allowedUse.storeRawHtml === true) {
    return { allowed: false, reason: "RAW_HTML_STORAGE_NOT_ALLOWED" };
  }

  if (!source.allowedUse.generateSummary) {
    return { allowed: false, reason: "SUMMARY_NOT_ALLOWED_FOR_SOURCE" };
  }

  return { allowed: true, reason: "APPROVED_SOURCE" };
}
```

---

# Polite Fetching

Use a controlled fetcher.

```javascript
async function politeFetch(source, url) {
  const policy = canCollectFromSource(source);

  if (!policy.allowed) {
    throw new Error(`Collection blocked: ${policy.reason}`);
  }

  await wait(source.limits.minDelayMs);

  const response = await fetch(url, {
    headers: {
      "User-Agent": "SLAIOS-ResearchAgent/1.0 (+https://slai.example/research-policy)",
      "Accept": "text/html"
    }
  });

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status}`);
  }

  return await response.text();
}
```

Important:

```text
Do not claim to be a normal browser if the system is automated.
```

---

# Content Cleaning

Remove navigation, ads, scripts, and unrelated content.

```javascript
function cleanPageText(html) {
  const text = stripHtml(html);

  return text
    .replace(/\s+/g, " ")
    .replace(/Cookie Policy.*?/gi, "")
    .replace(/Subscribe.*?/gi, "")
    .trim()
    .slice(0, 12000);
}
```

---

# Extract Only Needed Fields

```javascript
function extractCleaningBusinessSignals(cleanText) {
  return {
    servicesOffered: extractServices(cleanText),
    pricingSignals: extractPricing(cleanText),
    bookingSignal: detectOnlineBooking(cleanText),
    serviceArea: extractServiceArea(cleanText),
    contactSignal: extractPublicContactInfo(cleanText)
  };
}
```

Do not store full cleaned text unless specifically approved and legally safe.

---

# Audit Logging

Every collection event should be logged.

```javascript
async function logExtractionEvent({
  sourceUrl,
  businessName,
  fieldsExtracted,
  confidence,
  rawContentStored
}) {
  const log = {
    sourceUrl,
    businessName,
    fieldsExtracted,
    confidence,
    rawContentStored,
    collectedAt: new Date().toISOString(),
    collectedBy: "SLAIOS_RESEARCH_AGENT",
    purpose: "market_intelligence",
    deletionSupported: true
  };

  await saveToCollection("researchAuditLogs", log);
}
```

This allows SLAI to say:

```text
Here is what we collected.
Here is when we collected it.
Here is where it came from.
Here is what we did not store.
```

---

# Knowledge Item Creation

```javascript
function createKnowledgeItem({ source, extractedSignals, summary }) {
  return {
    type: "market_signal",
    sourceUrl: source.url,
    sourceName: source.name,

    title: summary.title,
    summary: summary.text,

    extractedFacts: extractedSignals,

    storedRawContent: false,
    sourceReferenceRequired: true,

    tags: generateTags(extractedSignals),
    confidence: calculateConfidence(source, extractedSignals),

    createdAt: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString()
  };
}
```

---

# Client Finder Integration

Research Agent feeds Client Finder.

```javascript
function createLeadFromSignals(businessSignal) {
  const painSignals = detectPainSignals(businessSignal);
  const fitScore = calculateFitScore(businessSignal, painSignals);

  return {
    businessName: businessSignal.businessName,
    industry: businessSignal.industry,
    city: businessSignal.city,
    website: businessSignal.website,

    painSignals,
    fitScore,

    recommendation:
      fitScore >= 85
        ? "Strong ServicesOS fit"
        : fitScore >= 65
        ? "Possible fit"
        : "Low priority",

    humanApprovalRequired: true,
    sourceAuditIds: businessSignal.auditLogIds,
    createdAt: new Date().toISOString()
  };
}
```

---

# Example Lead Scoring

```javascript
function calculateFitScore(business, painSignals) {
  let score = 0;

  if (business.industry === "cleaning") score += 20;
  if (business.hasWebsite) score += 5;
  if (!business.hasOnlineBooking) score += 15;
  if (business.reviewCount >= 20) score += 10;
  if (business.reviewTrend === "growing") score += 10;
  if (painSignals.includes("late_arrivals")) score += 15;
  if (painSignals.includes("scheduling_confusion")) score += 20;
  if (painSignals.includes("payment_confusion")) score += 10;

  return Math.min(score, 100);
}
```

---

# Public Explanation Policy

SLAI should be able to explain the Research Agent clearly.

Example:

```text
SLAIOS Research Agent collects limited public business information for market research.
It stores business facts, source references, timestamps, summaries, and confidence scores.
It does not store full website copies or private data.
Its purpose is to identify market trends and possible product fit.
```

---

# Removal / Correction Policy

Support removal or correction requests.

```javascript
async function handleSourceRemovalRequest(sourceUrl) {
  const records = await findRecordsBySourceUrl(sourceUrl);

  for (const record of records) {
    record.status = "removed_by_request";
    record.removedAt = new Date().toISOString();
    await saveRecord(record);
  }

  await createAuditNote({
    sourceUrl,
    action: "REMOVAL_REQUEST_COMPLETED",
    completedAt: new Date().toISOString()
  });
}
```

This protects reputation and builds trust.

---

# Risk Levels

## Low Risk

- Government data
- Official APIs
- Manually entered research
- Public business info summarized with source links
- Internal documents

## Medium Risk

- Public competitor pages
- Public pricing pages
- Review summaries
- Business directories

## High Risk

- Sites with explicit no-automation terms
- Sites with strong bot protections
- Pages requiring login
- Large-scale scraping
- Copying full text
- Personal data collection

## Do Not Use

- Private data
- Login-only sources without permission
- Bypassed access controls
- Scraped customer lists
- Anything that requires deception

---

# MVP Implementation Plan

## Phase 1: Manual Intelligence System

Build first.

Features:

- Manual source entry
- Manual business lead entry
- AI summarization of pasted public info
- Source URL storage
- Timestamp logging
- Confidence score
- Fit score
- Human review queue

No crawler yet.

## Phase 2: Approved Source Fetcher

Features:

- Source registry
- Approved source list
- Rate limiting
- User-agent identification
- Public page fetch
- Extract limited fields
- Store audit logs

## Phase 3: Research Dashboard

Features:

- Market snapshots
- Competitor changes
- Local business trends
- New potential leads
- Research alerts
- Source audit viewer

## Phase 4: Client Finder

Features:

- Lead scoring
- Pain signal detection
- Outreach draft generation
- Human approval workflow
- Outreach history

## Phase 5: Growth Assistant Add-On

For customer companies later.

Features:

- Local market reports
- Pricing comparison
- Review trend analysis
- Service opportunity suggestions
- Competitor gap summaries

---

# Founder Rule

Do not build this before ServicesOS launch.

Document now.

Build later.

When built, start with the manual intelligence system before automation.

```text
Manual first.
Controlled automation second.
AI recommendations third.
Customer add-on last.
```

---

# Final Principle

SLAIOS Research Agent should be something Jamie would proudly explain to a customer, business owner, future employee, lawyer, partner, or regulator.

If the explanation feels shady, redesign it.

```text
Observe public signals.
Store limited facts.
Generate original insight.
Respect boundaries.
Help SLAI grow.
```
