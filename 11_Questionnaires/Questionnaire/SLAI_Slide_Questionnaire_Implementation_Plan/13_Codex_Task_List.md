# Codex Task List

## Important Instruction

Do not ask Codex to build the entire system in one pass.

Use one phase at a time.

## Task 1: Inspect Project Structure

Prompt:

```text
Review the current SLAI website/project structure. Do not make code changes. Identify the routing system, component structure, styling approach, Firebase setup, and best location for a researchForms feature module. Return a recommended implementation plan.
```

## Task 2: Build Static Questionnaire Renderer

Prompt:

```text
Create a researchForms feature module with a static questionnaire renderer. Build only the renderer and one sample ServicesOS questionnaire. Do not implement admin dashboard or AI summaries yet. Reuse existing styling patterns. Add validation for required answers and consent. After changes, run lint/build and summarize files changed.
```

## Task 3: Add Firestore Response Saving

Prompt:

```text
Add Firestore response saving for the research questionnaire system. Use a researchResponses collection. Store questionnaireId, productArea, respondent metadata, consent confirmation, answers, submittedAt, and review status. Do not change unrelated Firebase services. Run lint/build and summarize changes.
```

## Task 4: Add All Questionnaire Data Files

Prompt:

```text
Add structured questionnaire data files for ServicesOS, EducationOS, GrowthAI, RetailOS/PharmacyOS, FutureAI, and Pharmacy Workflow. Use the existing renderer. Do not create new rendering logic unless necessary. Add routes for each questionnaire and test navigation.
```

## Task 5: Add Research Forms Index Page

Prompt:

```text
Create a /research/forms index page showing cards for each questionnaire, estimated time, target respondent, start button, and PDF download link placeholder. Match SLAI website styling. Do not modify product pages.
```

## Task 6: Add Admin Response Review

Prompt:

```text
Create an internal admin page to list researchResponses, filter by productArea and review status, open response details, add tags, add notes, and mark reviewed. Use existing auth/role patterns. Do not expose responses publicly.
```

## Task 7: Add AI Summary Later

Prompt:

```text
Add an AI-assisted summary action for individual research responses. The AI may summarize, suggest tags, and flag possible sensitive content. It must not create product backlog items automatically. Human review is required.
```
