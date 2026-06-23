# PharmacyOS Communication AI Workflow

**Version:** 1.0

---

# Purpose

The Communication AI is one of the most important parts of PharmacyOS.

Its job is to prevent patients and staff from discovering problems too late.

The AI tracks prescription status, insurance status, doctor communication, and patient notifications in one timeline.

---

# Core Idea

Most pharmacy frustration comes from poor communication.

Patients usually are not angry only because insurance rejected something.

They are angry because:

```txt
Nobody told them.
Nobody explained it.
Nobody knew what was happening.
They waited in line just to discover there was a problem.
```

PharmacyOS should proactively communicate before the patient arrives.

---

# Ideal Workflow

```txt
Prescription Received
↓
Insurance Checked
↓
Issue Detected
↓
AI Translates Issue
↓
AI Recommends Next Step
↓
Doctor Request Generated
↓
Patient Notified
↓
Timeline Updated
↓
Staff Can See Status Instantly
```

---

# Prior Authorization Workflow

## Current Pain

A patient often shows up before staff realizes the prescription is waiting on prior authorization.

This causes:

* Longer lines
* Angry patients
* Stressed employees
* More phone calls
* More repeated explanations
* Lower patient satisfaction

---

## PharmacyOS Workflow

```txt
Insurance rejects prescription
↓
AI detects prior authorization required
↓
AI creates plain-English explanation
↓
AI generates doctor request packet
↓
Pharmacist reviews
↓
Request is sent
↓
Patient is notified
↓
Prescription timeline updates
```

---

# Prior Authorization Object

```js
{
  priorAuthId: "pa_123",
  prescriptionId: "rx_123",
  patientId: "pat_123",
  doctorId: "doc_456",
  insuranceEventId: "ins_evt_123",

  status: "waiting_on_doctor",

  reason: "Insurance requires prior authorization.",
  plainEnglishReason:
    "Insurance needs additional approval from the doctor before covering this medication.",

  recommendedAction: "Send prior authorization request to prescriber.",

  packet: {
    patientHistoryIncluded: true,
    medicationHistoryIncluded: true,
    insuranceRequirementIncluded: true,
    pharmacistNotesIncluded: false
  },

  patientNotified: true,
  doctorNotified: true,

  createdAt: "2026-06-18T08:02:00Z",
  updatedAt: "2026-06-18T08:05:00Z"
}
```

---

# Timeline System

Every prescription should have a status timeline.

Example:

```js
{
  prescriptionId: "rx_123",
  timeline: [
    {
      timestamp: "2026-06-18T08:00:00Z",
      type: "prescription_received",
      label: "Prescription received",
      actor: "system"
    },
    {
      timestamp: "2026-06-18T08:01:00Z",
      type: "insurance_rejected",
      label: "Insurance rejected claim",
      details: "Prior authorization required",
      actor: "insurance"
    },
    {
      timestamp: "2026-06-18T08:02:00Z",
      type: "pa_packet_created",
      label: "Prior authorization packet created",
      actor: "ai_assistant"
    },
    {
      timestamp: "2026-06-18T08:04:00Z",
      type: "doctor_notified",
      label: "Doctor notified",
      actor: "pharmacy_staff"
    },
    {
      timestamp: "2026-06-18T08:05:00Z",
      type: "patient_notified",
      label: "Patient notified",
      actor: "communication_ai"
    }
  ]
}
```

---

# Patient Notification Logic

```js
export function shouldNotifyPatient(prescription) {
  const notifyStatuses = [
    "prior_authorization_required",
    "insurance_rejected",
    "waiting_on_doctor",
    "ready_for_pickup",
    "delayed"
  ];

  return notifyStatuses.includes(prescription.status);
}
```

---

# Patient Message Generator

```js
export function generatePatientMessage({ patient, prescription, issue }) {
  if (issue.type === "prior_authorization") {
    return `Hi ${patient.firstName}, your prescription for ${prescription.medicationName} was received, but your insurance requires additional approval from your doctor. We have already contacted the doctor. No action is needed from you right now. We will notify you when there is an update.`;
  }

  if (issue.type === "refill_too_soon") {
    return `Hi ${patient.firstName}, your prescription for ${prescription.medicationName} cannot be filled yet because insurance says it is too soon. The next available fill date is ${issue.nextFillDate}.`;
  }

  if (issue.type === "ready") {
    return `Hi ${patient.firstName}, your prescription for ${prescription.medicationName} is ready for pickup.`;
  }

  return `Hi ${patient.firstName}, there is an update on your prescription for ${prescription.medicationName}. Please contact the pharmacy for details.`;
}
```

---

# Insurance Code Translation

The system should maintain a code translation map.

```js
export const insuranceCodeMap = {
  PA_REQUIRED: {
    label: "Prior Authorization Required",
    plainEnglish:
      "Insurance requires the doctor to approve this medication before payment.",
    recommendedAction: "Send prior authorization request to prescriber."
  },

  REFILL_TOO_SOON: {
    label: "Refill Too Soon",
    plainEnglish:
      "Insurance will not pay yet because the medication was filled recently.",
    recommendedAction: "Check next eligible fill date."
  },

  NOT_COVERED: {
    label: "Medication Not Covered",
    plainEnglish:
      "Insurance does not cover this medication under the current plan.",
    recommendedAction:
      "Check alternatives or contact prescriber for covered option."
  },

  WRONG_INSURANCE: {
    label: "Insurance Information Issue",
    plainEnglish:
      "The claim may have been sent to the wrong insurance plan.",
    recommendedAction:
      "Verify patient insurance information."
  }
};
```

---

# AI Screen Explanation

When an employee sees a confusing screen or code, they should be able to click:

```txt
Explain This
```

Example AI response:

```txt
This screen means the insurance rejected the claim.

The rejection reason is:
Prior Authorization Required.

What this means:
The insurance company needs the doctor to submit additional approval before they will pay.

What to tell the patient:
Your insurance requires approval from your doctor before this medication can be covered. We have already contacted your doctor and will notify you when we receive an update.

Next step:
Send or confirm prior authorization request.
```

---

# Staff Dashboard

The PharmacyOS dashboard should show:

```txt
Needs Attention

- 12 waiting on doctor
- 8 insurance rejected
- 5 prior authorization required
- 3 patient callbacks needed
- 2 pharmacist review required
```

Each item should show:

* Patient
* Medication
* Status
* Waiting on
* Last action
* Next recommended action

---

# Success Metrics

Communication AI should improve:

* Average wait time
* Patient satisfaction
* Number of angry counter interactions
* Number of repeated phone calls
* Time spent explaining insurance issues
* Time to prior authorization request
* Time to doctor follow-up
* Percentage of patients notified before arrival

---

# Final Principle

The patient should not be the first person to discover there is a problem.

PharmacyOS should know first.

Then the pharmacy should know.

Then the patient should be informed clearly.
