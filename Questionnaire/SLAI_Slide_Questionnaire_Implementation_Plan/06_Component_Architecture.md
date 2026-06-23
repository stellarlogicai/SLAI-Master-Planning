# Component Architecture

## Suggested Folder Structure

```text
src/
  features/
    researchForms/
      data/
        servicesOSQuestionnaire.js
        educationOSQuestionnaire.js
        growthAIQuestionnaire.js
        retailPharmacyQuestionnaire.js
        futureAIQuestionnaire.js
      components/
        QuestionnaireShell.jsx
        SlideRenderer.jsx
        ProgressBar.jsx
        ConsentSlide.jsx
        QuestionSlide.jsx
        SectionIntroSlide.jsx
        ReviewSlide.jsx
        SubmitSlide.jsx
        ThankYouSlide.jsx
        AnswerInput.jsx
      pages/
        ResearchFormsIndex.jsx
        QuestionnairePage.jsx
        ResearchResponsesAdmin.jsx
      services/
        researchResponseService.js
        questionnaireService.js
        insightService.js
      utils/
        validateAnswer.js
        calculateProgress.js
        normalizeResponse.js
```

## Core Components

### QuestionnaireShell

Owns questionnaire state:

- Current slide index
- Answers
- Validation errors
- Consent state
- Submit state
- Draft state later

### SlideRenderer

Receives a slide object and renders the correct slide component.

### QuestionSlide

Displays:

- Question title
- Prompt
- Helper text
- Answer input
- Required marker
- Validation message

### AnswerInput

Switches by question type:

- shortText
- longText
- singleChoice
- multiChoice
- rating
- yesNo

### ProgressBar

Shows:

- Slide count
- Section name
- Percent complete

### ReviewSlide

Optional review before submit.

### SubmitSlide

Shows final privacy reminder and submit button.

### ThankYouSlide

Confirms submission and optionally links back to research forms index.
