# Implementation Phases

## Phase 1: Static Slide Questionnaire MVP

Goal:
Build the first working slide questionnaire using static data.

Tasks:

1. Create research forms route.
2. Create questionnaire data file.
3. Build slide renderer.
4. Build answer input components.
5. Add progress bar.
6. Add consent slide.
7. Add submit screen.
8. Save response to Firestore.

Acceptance criteria:

- User can complete one questionnaire.
- Required questions validate.
- Consent is required.
- Response saves to Firestore.
- Thank-you page appears.

## Phase 2: Add All Product Questionnaires

Goal:
Add ServicesOS, EducationOS, GrowthAI, RetailOS/PharmacyOS, FutureAI, and Pharmacy Workflow questionnaires.

Tasks:

1. Convert each PDF/questionnaire into structured data.
2. Add product forms index page.
3. Add PDF download links.
4. Add productArea field to responses.
5. Test each questionnaire.

## Phase 3: Admin Review Dashboard

Goal:
Allow Jamie/SLAI to review responses.

Tasks:

1. Build response list page.
2. Add filters.
3. Add response detail page.
4. Add tags/notes/status.
5. Add mark reviewed.

## Phase 4: AI Summaries and Insights

Goal:
AI helps summarize responses without auto-approving decisions.

Tasks:

1. Add summarize response button.
2. Add theme detection.
3. Add suggested tags.
4. Add sensitive-info warning.
5. Add human approval before insight creation.

## Phase 5: Training Engine Reuse

Goal:
Convert the slide renderer into a reusable content engine.

Tasks:

1. Add module modes.
2. Add quiz slide type.
3. Add SOP step type.
4. Add completion tracking.
5. Connect to ServicesOS training library.
