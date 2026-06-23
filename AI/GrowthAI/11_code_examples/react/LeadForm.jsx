import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const initialState = {
  businessName: '',
  contactName: '',
  email: '',
  phone: '',
  website: '',
  location: '',
  industry: 'Residential Cleaning',
  source: 'Manual',
  status: 'New',
  notes: ''
};

export default function LeadForm({ tenantId }) {
  const [form, setForm] = useState(initialState);
  const [saving, setSaving] = useState(false);

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!tenantId) throw new Error('tenantId is required');

    setSaving(true);
    try {
      await addDoc(collection(db, 'tenants', tenantId, 'growthAI', 'leads'), {
        ...form,
        fitScore: null,
        fitConfidence: null,
        painPoints: [],
        aiSummary: '',
        recommendedAngle: '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        schemaVersion: 1
      });
      setForm(initialState);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Lead</h2>
      <input placeholder="Business Name" value={form.businessName} onChange={e => update('businessName', e.target.value)} required />
      <input placeholder="Contact Name" value={form.contactName} onChange={e => update('contactName', e.target.value)} />
      <input placeholder="Email" value={form.email} onChange={e => update('email', e.target.value)} />
      <input placeholder="Phone" value={form.phone} onChange={e => update('phone', e.target.value)} />
      <input placeholder="Website" value={form.website} onChange={e => update('website', e.target.value)} />
      <input placeholder="Location" value={form.location} onChange={e => update('location', e.target.value)} />
      <textarea placeholder="Notes" value={form.notes} onChange={e => update('notes', e.target.value)} />
      <button disabled={saving}>{saving ? 'Saving...' : 'Save Lead'}</button>
    </form>
  );
}
