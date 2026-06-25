# Firebase Extensions Watchlist for ServicesOS

Document Status: Complete
Implementation Status: Future Roadmap
Last Updated: 2026-06-25
Implementation Repo: stellarlogicai/ServicesOS
Related Commits:
- pending
Validation:
- Marketplace review only; no ServicesOS code changes
Remaining Follow-Ups:
- Re-review after wife beta and before installing any extension

## Purpose

This document parks Firebase Extension ideas that may help ServicesOS later. These are not wife-beta requirements.

The current ServicesOS priority remains:

1. Finish wife-beta manual walkthrough.
2. Fix beta blockers only.
3. Stabilize Dashboard, Create Estimate, Customers, Schedule, Payments, and Settings.
4. Polish wife-beta UI.
5. Stabilize existing Stripe Connect flow.
6. Only then evaluate extensions.

## Current Decision

Do not install Firebase Extensions for wife beta.

Reason:

- ServicesOS already has custom Firebase/Firebase Auth/Firestore/Stripe Connect architecture.
- Generic extensions can add hidden collections, triggers, webhooks, billing paths, or duplicated logic.
- Payment extensions especially may conflict with ServicesOS Stripe Connect marketplace/payment ownership design.
- Extensions should be evaluated when the related workflow is stable and there is a clear business need.

## Extension Candidates Most Likely to Matter Later

### 1. Trigger Email from Firestore

Likely phase: After wife beta, if current email workflow is weak.

Potential ServicesOS use cases:

- Quote emails.
- Booking confirmations.
- Customer reminders.
- Owner/admin alerts.
- Employee invitations.
- Payment or invoice notifications.

Why it may help:

- Firestore document writes can trigger transactional email flows.
- Keeps email sending tied to durable records.

Risks / questions:

- ServicesOS already has email service logic; avoid duplicate email paths.
- Need to decide whether Resend/current email code stays or extension replaces part of it.
- Must avoid sending duplicate customer emails.

Decision rule:

Use only if manual beta proves email delivery/status handling is unreliable or too much custom maintenance.

---

### 2. Resize Images

Likely phase: After photo estimate/job-photo flow is stable.

Potential ServicesOS use cases:

- Estimate photos.
- Before/after job photos.
- Customer-uploaded photos.
- Company logos/profile images.
- Future employee app job documentation.

Why it may help:

- Reduces Cloud Storage cost.
- Speeds up image loading.
- Makes mobile upload/display more reliable.

Risks / questions:

- Must preserve originals only when needed.
- Need to define image sizes for estimate review, thumbnails, and records.
- Do not add before photo upload workflow is stable.

Decision rule:

Evaluate when real users upload enough images that storage/loading becomes painful.

---

### 3. Stream Firestore to BigQuery

Likely phase: After wife beta and after real customer usage begins.

Potential ServicesOS use cases:

- Quote conversion analytics.
- Lead source performance.
- Job profitability.
- Tenant-level business metrics.
- SLAI product proof dashboards.
- Investor/customer proof after 5-10 companies.

Why it may help:

- Streams Firestore changes into BigQuery for analytics without overloading app queries.
- Supports long-term SLAI philosophy: data informs decisions, humans interpret them.

Risks / questions:

- Adds Google Cloud cost/complexity.
- Requires clean schema decisions.
- Not useful until enough real data exists.

Decision rule:

Evaluate once at least one real business is using ServicesOS regularly and analytics questions become concrete.

---

### 4. Search Firestore Extensions

Likely phase: After customer/job/lead data grows.

Options to compare later:

- Search Firestore with Algolia.
- Search Firestore with Typesense.
- Search with Meilisearch.
- Search with Elastic App Search.
- Vector Search with Firestore, if semantic search becomes important.

Potential ServicesOS use cases:

- Search customers.
- Search leads.
- Search jobs.
- Search properties.
- Search notes.
- Search quote history.
- Future internal AI/context retrieval.

Why it may help:

- Firestore is not a full-text search engine.
- As records grow, native filtering may not be enough.

Risks / questions:

- Third-party service cost.
- Index sync complexity.
- Tenant isolation must be preserved.
- Search results must never leak data across tenants.

Decision rule:

Use only after real search pain appears with production-scale data.

---

### 5. Generate PDFs with Firestore / Generate PDFs via HTTP

Likely phase: After estimates/contracts/invoices stabilize.

Potential ServicesOS use cases:

- Estimate PDFs.
- Contracts.
- Receipts.
- Invoices.
- Job summaries.
- Insurance/job documentation packets.

Why it may help:

- Converts Firestore records/templates into durable PDF files.
- Could reduce custom PDF generation maintenance.

Risks / questions:

- Third-party dependency.
- Template complexity.
- Must preserve branding and legal/contract wording.
- Do not introduce until core estimate/contract data model is stable.

Decision rule:

Evaluate only when PDF output becomes a recurring beta/customer need.

---

### 6. Send Messages with Twilio / MessageBird / similar Messaging Extensions

Likely phase: Later beta or production readiness, not wife beta.

Potential ServicesOS use cases:

- SMS booking reminders.
- Quote follow-ups.
- Crew reminders.
- Customer ETA messages.
- Schedule-change alerts.

Why it may help:

- SMS can improve customer communication and reduce no-shows.
- Firestore-triggered message docs can create auditable communication records.

Risks / questions:

- SMS cost.
- Consent/compliance requirements.
- Avoid spamming customers/employees.
- Need clear opt-in/opt-out handling.

Decision rule:

Do not add until customer communication policy and consent workflow are designed.

---

### 7. Delete User Data / Export User Data

Likely phase: Production readiness / compliance hardening.

Potential ServicesOS use cases:

- Customer account deletion requests.
- Tenant offboarding.
- User data export requests.
- Privacy/compliance workflows.

Why it may help:

- Supports operational/compliance maturity.
- Helps avoid custom deletion/export mistakes later.

Risks / questions:

- Multi-tenant data relationships are complex.
- Must avoid deleting business records needed for invoices, legal records, or audit trails.
- Deletion must respect role/tenant ownership.

Decision rule:

Evaluate after data retention policy is written.

---

### 8. Back up Firestore to Storage / Backup-Oriented Extensions

Likely phase: Production hardening, after Firebase rules/data model stabilize.

Potential ServicesOS use cases:

- Scheduled Firestore backups.
- Disaster recovery.
- Tenant data protection.

Why it may help:

- Backups matter once real business data exists.

Risks / questions:

- Backup access must be restricted.
- Restore process must be tested.
- Backup costs/storage retention must be controlled.
- Do not expose backup controls to normal tenant admins.

Decision rule:

Plan backups before real multi-customer production, but do not distract from wife beta.

---

### 9. Payment Extensions: Run Payments with Stripe / Send Invoices using Stripe

Likely phase: Research only, after existing Stripe Connect flow is stable.

Potential ServicesOS use cases:

- SLAI charging businesses for ServicesOS subscriptions.
- Internal subscription gating for ServicesOS plans.
- Possibly SLAI-owned SaaS billing, separate from tenant customer job payments.

Current ServicesOS warning:

Do not use Firebase payment extensions for tenant job payments right now.

Reason:

- ServicesOS already uses Stripe Connect so cleaning businesses can receive funds directly.
- SLAI takes a platform fee.
- Generic payment extensions are usually designed for app-owner payments/subscriptions tied to Firebase Auth access.
- Mixing both models could duplicate Stripe customers, Firestore payment collections, webhooks, invoices, and access logic.

Decision rule:

Use custom Stripe Connect for tenant/customer payments. Only evaluate Firebase Stripe extension for SLAI subscription billing later.

---

## Extensions to Avoid for Now

These may be interesting but should not distract from ServicesOS beta:

- In-app purchase extensions such as RevenueCat or Purchasely.
- Marketing automation such as Mailchimp.
- Gemini/ChatGPT chatbot extensions.
- Text-to-speech/speech-to-text extensions.
- Image labeling/OCR extensions.
- URL shortener extensions.
- Dynamic link alternatives.
- CMS extensions.
- Importer/exporter tools unless tied to a specific migration task.

## Re-Review Trigger

Revisit this document when one of these is true:

- Wife beta is complete.
- First real ServicesOS customer is active.
- Email reminders are unreliable or hard to maintain.
- Photo uploads become storage/performance heavy.
- Customer/job search becomes painful.
- Analytics/reporting questions require more than Firestore queries.
- SLAI starts charging businesses monthly for ServicesOS.
- Production compliance/data retention planning begins.

## Next Action

No coding action now.

Add this to future ServicesOS technical planning and continue current priority:

Finish wife-beta manual walkthrough and fix only beta blockers.
