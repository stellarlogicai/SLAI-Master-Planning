# Acceptance Criteria

## Public Questionnaire MVP

- User can access research forms index.
- User can choose a questionnaire.
- Privacy/confidentiality reminder is shown first.
- User must confirm consent before proceeding.
- User answers one slide at a time.
- User can go back and forward.
- Progress indicator updates correctly.
- Required questions validate.
- Response submits successfully.
- Response is saved in Firestore.
- User sees a thank-you screen.

## Data Quality

- Every response includes questionnaireId.
- Every response includes productArea.
- Every response includes submittedAt.
- Every response includes consent confirmation.
- Every answer is keyed consistently.
- Blank optional answers are allowed.
- Required blank answers are blocked.

## Privacy

- No form asks for patient information.
- No form asks for employer secrets.
- No form asks for screenshots.
- No form asks for passwords or account details.
- Privacy warning appears before questions.
- Consent is stored.

## Admin Review

- Responses are not public.
- Admin can filter responses.
- Admin can tag responses.
- Admin can mark reviewed.
- Admin can add notes.

## Reuse Readiness

- Renderer is not hardcoded to one product.
- Questionnaire data is separate from UI components.
- Slide types are extensible.
- Question types are extensible.
- Training/quiz modes can be added later without rewriting everything.
