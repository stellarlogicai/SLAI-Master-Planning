# SLAI Website Planning

**Status:** Support / future go-to-market work.  
**Active build priority:** ServicesOS remains priority one.

This folder now covers two related but distinct website lanes:

1. the public Stellar Logic AI company/product website,
2. the future **SLAI Web** productized website and managed-web service for small-business customers.

Website work may support ServicesOS launch and customer acquisition, but it must not distract from ServicesOS beta/customer-ready V1.

## Key Planning

- `SLAI_Web_Platform_V1_and_Customer_Control_Model.md` — current detailed platform model: DIY/done-for-you/custom paths, dashboard, shared profile, page/section system, evolving design system, support mode, SLAI Intelligence, ownership/handoff, and post-ServicesOS-V1 build gate.

- `SLAI_Web_Engine.md` — reusable customer-website platform, layout library, ServicesOS website integration, booking architecture, AI-assisted build workflow, human QA, and scaling model.
- `SLAI_Web_Architecture_Spec.md` — operational core/layout/customer-layer boundaries, versioning, protected paths, public-data and booking boundaries.
- `SLAI_Web_Layout_Contract.md` — layout responsibilities, compatibility, required manifest fields, and customer-override rules.
- `SLAI_Web_QA_and_Release_Gates.md` — automated/human release evidence required before production.
- `Templates/` — customer-site manifest, intake/readiness, job packet, human QA, client approval/deployment, pricing/scope, customer-control, and proof-metrics templates.
- `../01_ServicesOS/Website_Public_Data_and_Booking_Contract.md` — public-data projection and booking source-of-truth contract.
- `American_Barbershop_Concept_and_Validation.md` — first real-world website/ServicesOS-Barber validation case.
- `../03_SLAI_Company/SLAI_Web_Services_Business_Model.md` — pricing, revenue, founder-compensation intent, managed-web model, and ServicesOS acquisition strategy.
- existing numbered files — SLAI company website content, page, brand, research, and coding planning.

## Core Boundary

SLAI Web should not become a traditional founder-time-heavy agency.

The desired model is:

```text
Reusable web core
+
approved layout system
+
customer branding/data
+
ServicesOS integration when applicable
+
AI-assisted customization
+
human QA
```

Prove the model with one or two real businesses after ServicesOS V1 is stable, then productize further only if real demand justifies it.
