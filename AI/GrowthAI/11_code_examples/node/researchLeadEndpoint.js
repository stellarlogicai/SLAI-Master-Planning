// Express-style endpoint example.
// Replace callAI() with the provider/service your app uses.

import express from 'express';
import admin from 'firebase-admin';

const router = express.Router();

async function callAI(prompt) {
  // TODO: connect to your AI provider.
  // Return strict JSON from the model.
  return {
    summary: 'Example summary',
    facts: [],
    assumptions: [],
    likelyPainPoints: [],
    servicesOSFit: 'Medium',
    recommendedOutreachAngle: 'Focus on scheduling and training.',
    fitScore: 70,
    confidence: 0.6,
    missingInformation: ['Current software stack'],
    recommendedNextAction: 'Research website manually'
  };
}

router.post('/growthai/research-lead', async (req, res) => {
  try {
    const { tenantId, leadId } = req.body;

    if (!tenantId || !leadId) {
      return res.status(400).json({ error: 'tenantId and leadId are required' });
    }

    const leadRef = admin.firestore()
      .collection('tenants')
      .doc(tenantId)
      .collection('growthAI')
      .doc('leads')
      .collection('items')
      .doc(leadId);

    // Adjust path if using tenants/{tenantId}/growthAI/leads/{leadId}
    const snap = await leadRef.get();

    if (!snap.exists) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    const lead = snap.data();

    const prompt = `
Analyze this lead for ServicesOS fit.
Business: ${lead.businessName}
Industry: ${lead.industry}
Website: ${lead.website}
Location: ${lead.location}
Notes: ${lead.notes}

Return JSON only.
`;

    const aiResult = await callAI(prompt);

    await leadRef.update({
      aiSummary: aiResult.summary,
      painPoints: aiResult.likelyPainPoints,
      recommendedAngle: aiResult.recommendedOutreachAngle,
      fitScore: aiResult.fitScore,
      fitConfidence: aiResult.confidence,
      missingInformation: aiResult.missingInformation,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return res.json({ ok: true, aiResult });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Research failed' });
  }
});

export default router;
