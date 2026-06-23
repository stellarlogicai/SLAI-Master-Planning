# Content Schema

## Goal

Create one schema that can power questionnaires, training modules, quizzes, and SOP walkthroughs.

## Top-Level Questionnaire Object

```js
const questionnaire = {
  id: 'servicesos-workflow-research-v1',
  title: 'ServicesOS Workflow Pain Point Questionnaire',
  productArea: 'ServicesOS',
  version: 1,
  status: 'active',
  estimatedMinutes: 15,
  privacyNotice: 'Do not include confidential, patient, customer, employer, or proprietary information.',
  sections: []
}
```

## Section Object

```js
const section = {
  id: 'background',
  title: 'Background',
  description: 'Help us understand your role and experience.',
  slides: []
}
```

## Slide Object

```js
const slide = {
  id: 'background-role',
  type: 'question',
  title: 'Your Role',
  prompt: 'What best describes your role?',
  helperText: 'Choose the role closest to your daily work.',
  questionType: 'singleChoice',
  required: true,
  options: ['Owner', 'Manager', 'Employee', 'Technician', 'Other'],
  answerKey: 'respondentRole'
}
```

## Supported Slide Types

- intro
- consent
- sectionIntro
- question
- multiQuestion
- info
- review
- submit
- thankYou
- quiz
- sopStep

## Supported Question Types

- shortText
- longText
- singleChoice
- multiChoice
- rating
- yesNo
- number
- email
- roleSelector
- industrySelector
- fileUploadLater

## Answer Storage Shape

```js
answers: {
  respondentRole: 'Pharmacist',
  yearsExperience: '18+',
  biggestPainPoint: 'Too many screens for simple workflows'
}
```

## Branching Logic Later

V1 can skip branching.

V2 can add:

```js
showIf: {
  answerKey: 'respondentRole',
  equals: 'Pharmacist'
}
```
