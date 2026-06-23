# Training Engine Reuse

## Why This Matters

The slide questionnaire system should be designed so it can later power EducationOS training, ServicesOS employee training, SLAIOS onboarding, and SOP walkthroughs.

## Shared Concepts

Questionnaires and training modules both need:

- Slide data
- Section data
- Progress tracking
- User input
- Completion state
- Optional quiz logic
- Admin review

## Training Module Object

```js
const trainingModule = {
  id: 'bathroom-cleaning-basics-v1',
  title: 'Bathroom Cleaning Basics',
  moduleType: 'training',
  slides: [
    { type: 'info', title: 'Overview', body: '...' },
    { type: 'sopStep', title: 'Apply cleaner', body: '...' },
    { type: 'quiz', prompt: 'What should you do first?', options: [] }
  ]
}
```

## Same Renderer, Different Mode

The slide renderer should support modes:

- questionnaire
- training
- quiz
- sop
- onboarding

Mode affects:

- Navigation labels
- Completion tracking
- Scoring
- Required answers
- Admin reporting

## ServicesOS Employee App Reuse

Cleaner opens SOP link:

```text
Bathroom checklist item
↓
Stuck?
↓
Open SOP
↓
Slide engine shows step-by-step cleaning guide
```

## EducationOS Reuse

Teacher/tutor creates lesson:

```text
Lesson content
↓
Rendered as slides
↓
Student answers questions
↓
Progress tracked
```
