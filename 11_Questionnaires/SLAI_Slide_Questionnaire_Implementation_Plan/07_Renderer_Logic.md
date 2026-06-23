# Slide Renderer Logic

## Rendering Rule

The slide engine should not know about ServicesOS, EducationOS, GrowthAI, or PharmacyOS specifically.

It should only know how to render a standardized slide object.

## Basic Flow

```text
Load questionnaire
↓
Flatten sections into slides
↓
Render current slide
↓
Capture answer
↓
Validate answer
↓
Move next/back
↓
Submit response
```

## Pseudocode

```js
function QuestionnaireShell({ questionnaire }) {
  const slides = flattenSections(questionnaire.sections)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const currentSlide = slides[currentIndex]

  function handleNext() {
    const result = validateSlide(currentSlide, answers)
    if (!result.valid) return showErrors(result.errors)
    setCurrentIndex(currentIndex + 1)
  }

  function handleBack() {
    setCurrentIndex(Math.max(0, currentIndex - 1))
  }

  return (
    <QuestionnaireLayout>
      <ProgressBar current={currentIndex + 1} total={slides.length} />
      <SlideRenderer
        slide={currentSlide}
        answers={answers}
        setAnswers={setAnswers}
      />
      <NavigationButtons onBack={handleBack} onNext={handleNext} />
    </QuestionnaireLayout>
  )
}
```

## Slide Flattening

Sections are useful for organization, but the renderer can flatten them into a simple list:

```js
function flattenSections(sections) {
  return sections.flatMap(section => [
    { type: 'sectionIntro', title: section.title, description: section.description },
    ...section.slides
  ])
}
```

## Validation

V1 validation should be simple:

- Required fields cannot be blank.
- Consent must be checked.
- Email field must be valid if provided.
- Rating must be inside range.
- Multi-choice must have at least one selected if required.
