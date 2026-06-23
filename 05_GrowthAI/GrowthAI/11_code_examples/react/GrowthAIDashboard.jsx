import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function GrowthAIDashboard({ tenantId }) {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    if (!tenantId) return;

    const leadsRef = collection(db, 'tenants', tenantId, 'growthAI', 'leads');
    const q = query(leadsRef);

    const unsub = onSnapshot(q, (snap) => {
      setLeads(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, [tenantId]);

  const countByStatus = (status) => leads.filter(l => l.status === status).length;

  const topLeads = [...leads]
    .sort((a, b) => (b.fitScore || 0) - (a.fitScore || 0))
    .slice(0, 5);

  return (
    <div className="growth-dashboard">
      <h1>GrowthAI Dashboard</h1>

      <section className="cards">
        <div>New Leads: {countByStatus('New')}</div>
        <div>Research Complete: {countByStatus('Research Complete')}</div>
        <div>Contacted: {countByStatus('Contacted')}</div>
        <div>Demos: {countByStatus('Demo Scheduled')}</div>
        <div>Customers: {countByStatus('Customer')}</div>
      </section>

      <section>
        <h2>Top Opportunities</h2>
        <table>
          <thead>
            <tr>
              <th>Business</th>
              <th>Score</th>
              <th>Status</th>
              <th>Pain Point</th>
            </tr>
          </thead>
          <tbody>
            {topLeads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.businessName}</td>
                <td>{lead.fitScore || '-'}</td>
                <td>{lead.status}</td>
                <td>{lead.painPoints?.[0] || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
