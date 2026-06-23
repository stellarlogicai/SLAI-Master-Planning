# PharmacyOS Implementation Plan

**Version:** 1.0

---

# Build Strategy

PharmacyOS should not start as a full pharmacy replacement system.

Start with the highest-value pain point:

```txt
Communication between pharmacy, doctor, insurance, and patient.
```

The first MVP should focus on:

* Prescription status tracking
* Insurance issue tracking
* Prior authorization workflow
* Patient notification
* Staff dashboard
* AI code explanation
* AI workflow guidance

---

# Suggested Folder Structure

```txt
src/
  core/
    auth/
    tenants/
    users/
    permissions/
    notifications/
    audit/
    ai/
    security/

  modules/
    pharmacy/
      patients/
      prescriptions/
      insurance/
      priorAuth/
      doctorCommunication/
      patientCommunication/
      training/
      dashboard/
      security/
```

---

# Firestore Structure

```txt
tenants/{tenantId}

tenants/{tenantId}/patients/{patientId}
tenants/{tenantId}/prescriptions/{prescriptionId}
tenants/{tenantId}/insuranceEvents/{insuranceEventId}
tenants/{tenantId}/priorAuthorizations/{priorAuthId}
tenants/{tenantId}/communications/{communicationId}
tenants/{tenantId}/prescriptionTimelines/{timelineId}
tenants/{tenantId}/pharmacyTasks/{taskId}
tenants/{tenantId}/auditLogs/{auditId}
```

---

# Prescription Service Example

```js
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../../core/firebase/firebaseConfig";

export async function createPrescription({
  tenantId,
  patientId,
  prescriberId,
  medicationName,
  strength,
  quantity,
  directions
}) {
  const ref = collection(db, "tenants", tenantId, "prescriptions");

  return await addDoc(ref, {
    tenantId,
    schemaVersion: 1,

    patientId,
    prescriberId,

    medicationName,
    strength,
    quantity,
    directions,

    status: "received",
    insuranceStatus: "pending",
    requiresPharmacistReview: false,

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}

export async function updatePrescriptionStatus({
  tenantId,
  prescriptionId,
  status,
  insuranceStatus
}) {
  const ref = doc(
    db,
    "tenants",
    tenantId,
    "prescriptions",
    prescriptionId
  );

  return await updateDoc(ref, {
    status,
    insuranceStatus,
    updatedAt: serverTimestamp()
  });
}
```

---

# Timeline Service Example

```js
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../../core/firebase/firebaseConfig";

export async function addPrescriptionTimelineEvent({
  tenantId,
  prescriptionId,
  type,
  label,
  details,
  actor
}) {
  const ref = collection(
    db,
    "tenants",
    tenantId,
    "prescriptionTimelines"
  );

  return await addDoc(ref, {
    tenantId,
    schemaVersion: 1,

    prescriptionId,
    type,
    label,
    details: details || "",
    actor: actor || "system",

    createdAt: serverTimestamp()
  });
}
```

---

# Insurance Handler Example

```js
import { updatePrescriptionStatus } from "../prescriptions/prescriptionService";
import { addPrescriptionTimelineEvent } from "../prescriptions/timelineService";
import { createPriorAuthorization } from "../priorAuth/priorAuthService";

export async function handleInsuranceReject({
  tenantId,
  prescription,
  insuranceResponse
}) {
  const rejectCode = insuranceResponse.rejectCode;

  if (rejectCode === "PA_REQUIRED") {
    await updatePrescriptionStatus({
      tenantId,
      prescriptionId: prescription.id,
      status: "prior_authorization_required",
      insuranceStatus: "rejected"
    });

    await addPrescriptionTimelineEvent({
      tenantId,
      prescriptionId: prescription.id,
      type: "insurance_rejected",
      label: "Insurance rejected claim",
      details: "Prior authorization required",
      actor: "insurance"
    });

    await createPriorAuthorization({
      tenantId,
      prescriptionId: prescription.id,
      patientId: prescription.patientId,
      doctorId: prescription.prescriberId,
      reason: "Insurance requires prior authorization."
    });

    return {
      action: "prior_authorization_created",
      message: "Prior authorization workflow started."
    };
  }

  return {
    action: "manual_review_required",
    message: "Insurance reject requires staff review."
  };
}
```

---

# Prior Authorization Service Example

```js
import {
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../../core/firebase/firebaseConfig";

export async function createPriorAuthorization({
  tenantId,
  prescriptionId,
  patientId,
  doctorId,
  reason
}) {
  const ref = collection(
    db,
    "tenants",
    tenantId,
    "priorAuthorizations"
  );

  return await addDoc(ref, {
    tenantId,
    schemaVersion: 1,

    prescriptionId,
    patientId,
    doctorId,

    status: "draft_created",
    reason,
    plainEnglishReason:
      "Insurance requires doctor approval before covering this medication.",

    doctorNotified: false,
    patientNotified: false,
    pharmacistReviewed: false,

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
}
```

---

# Pharmacy Task Creation

When something needs human attention, create a task.

```js
export function createPharmacyTaskPayload({
  prescriptionId,
  patientId,
  type,
  priority,
  title,
  description
}) {
  return {
    prescriptionId,
    patientId,
    type,
    priority,
    title,
    description,
    status: "open",
    assignedTo: null,
    createdAt: new Date().toISOString()
  };
}
```

Example tasks:

```txt
Prior authorization review needed
Doctor response overdue
Patient callback needed
Insurance rejection needs staff review
Pharmacist review required
```

---

# AI Explanation Prompt Payload

```js
const promptPayload = {
  role: "pharmacy_ai_assistant",
  task: "explain_insurance_reject",
  prescription: {
    medicationName: "Ozempic",
    status: "prior_authorization_required"
  },
  insurance: {
    rejectCode: "PA_REQUIRED",
    rawMessage: "Prior authorization required"
  },
  outputFormat: {
    plainEnglishExplanation: true,
    patientFriendlyMessage: true,
    staffNextSteps: true
  }
};
```

Expected AI output:

```json
{
  "plainEnglishExplanation": "Insurance requires approval from the doctor before covering this medication.",
  "patientFriendlyMessage": "Your insurance requires additional approval from your doctor. We have already started that process.",
  "staffNextSteps": [
    "Generate prior authorization request",
    "Send to prescriber",
    "Notify patient",
    "Track doctor response"
  ],
  "requiresPharmacistReview": true
}
```

---

# MVP User Interface

## Main Pharmacy Dashboard

Sections:

```txt
Prescription Queue
Insurance Issues
Prior Authorizations
Doctor Responses
Patient Notifications
Needs Pharmacist Review
Training Help
```

---

## Prescription Detail Screen

Should show:

* Patient info
* Medication
* Insurance status
* Doctor communication
* Timeline
* AI explanation
* Recommended next action
* Patient notification status

---

# MVP Build Order

1. Patient schema
2. Prescription schema
3. Prescription status workflow
4. Insurance event schema
5. Insurance code translation map
6. Prior authorization workflow
7. Prescription timeline
8. Pharmacy task dashboard
9. Patient notification generator
10. AI explanation layer
11. Training/help mode
12. Behavioral security module

---

# MVP Success Definition

PharmacyOS MVP succeeds when:

```txt
A pharmacy employee can instantly see:

What is happening with the prescription
Why it is delayed
Who is responsible for the next step
What to tell the patient
Whether the doctor has been contacted
Whether the patient has been notified
```

The patient should not have to show up in person to discover a preventable delay.

---

# Final Principle

PharmacyOS should reduce chaos.

Every prescription should have:

```txt
Clear status
Clear explanation
Clear next step
Clear owner
Clear patient communication
```
