# GrowthAI MVP Build Order

## Week 1: Lead Database and Basic Dashboard

Tasks:

1. Create GrowthAI module folder.
2. Add Firestore collections.
3. Build lead model.
4. Build create/edit/delete lead forms.
5. Build lead list page.
6. Add filters by status, source, score, and industry.
7. Build basic dashboard cards.

Acceptance criteria:

- Jamie can manually add a lead.
- Jamie can edit lead status.
- Jamie can add notes.
- Dashboard shows counts.
- Data persists to Firestore.
- Tenant ID support works.

## Week 2: AI Research Engine

Tasks:

1. Add AI research button on lead detail page.
2. Build backend endpoint for lead research.
3. Send available lead data to AI.
4. Store AI output in Firestore.
5. Display AI summary in dashboard and lead detail.
6. Add missing-info warnings.

Acceptance criteria:

- AI creates a useful research summary.
- AI lists pain points.
- AI gives confidence score.
- AI does not invent facts without labeling assumptions.

## Week 3: Outreach Drafting

Tasks:

1. Add outreach generator.
2. Generate email, LinkedIn, call script, and follow-up.
3. Allow Jamie to edit drafts.
4. Save drafts to lead record.
5. Add approval status.

Acceptance criteria:

- Outreach drafts are personalized.
- Drafts can be edited before use.
- No automatic sending in MVP.
- Draft history is saved.

## Week 4: Analytics and Weekly Review

Tasks:

1. Add weekly review page.
2. Add conversion metrics.
3. Add follow-up due list.
4. Add lost reason tracking.
5. Add referral program tracking.
6. Add export to CSV.

Acceptance criteria:

- Jamie can see what worked.
- Jamie can see what did not work.
- Jamie can decide next week's sales plan.
