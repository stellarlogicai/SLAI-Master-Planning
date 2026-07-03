# ServicesOS GrowthAI Phase 0 — Aunt B's Marketing Helper

Status: Planned as a small burden-reducing utility; not a full GrowthAI build  
Date: 2026-07-01  
Owner: Jamie Brown / Stellar Logic AI

## Purpose

This document captures the early GrowthAI planning discovered during ServicesOS / Aunt B's planning.

The immediate problem:

```text
Aunt B's Cleaning Services needs simple, branded marketing content.
Jamie should not have to write every post, make every image, or explain marketing strategy every time.
```

The first solution is a small internal marketing helper that lets Jamie's wife create ready-to-post content by herself.

The long-term opportunity:

```text
Aunt B's Marketing Helper
→ ServicesOS Growth Assistant
→ GrowthAI Content Engine
→ GrowthAI lead/source intelligence
→ GrowthAI campaign suggestions
→ GrowthAI full growth operating layer
```

## ServicesOS Guardrail

ServicesOS remains priority one.

This is not permission to build full GrowthAI before ServicesOS V1 is stable.

```text
Build only the small helper if it reduces real burden for Aunt B's.
Do not build autonomous marketing, ad buying, analytics, or multi-business GrowthAI yet.
```

This is GrowthAI Phase 0 only:

```text
AI drafts.
Human approves.
Human posts.
System records.
```

## Product Name

Near-term internal name:

```text
Aunt B's Marketing Helper
```

Future ServicesOS name:

```text
ServicesOS Growth Assistant
```

Future SLAI engine name:

```text
GrowthAI Content Engine
```

## Core Promise

```text
Pick a post type
→ add a few details
→ generate a caption
→ generate a matching branded image
→ copy/download/post manually
```

Success metric:

```text
She can create a usable Facebook post in under 2 minutes without asking Jamie for help.
```

## MVP Scope

### In Scope

- Single-business internal tool for Aunt B's.
- Brand kit.
- Post type picker.
- Simple input form.
- Caption generation.
- Short caption generation.
- CTA generation.
- Hashtag generation.
- Matching branded image generation.
- Draft save/load.
- Copy caption.
- Download image.
- Mark as posted.
- AI credit usage tracking.

### Out of Scope

- Auto-posting.
- Facebook API integration.
- Ad buying.
- Campaign automation.
- Analytics dashboard.
- Multi-business SaaS mode.
- Lead scoring.
- Full GrowthAI research.
- Customer CRM tie-in.
- Background/bulk generation.

## Primary Workflow

```text
Open Marketing Helper
→ choose post type
→ fill out simple fields
→ click Generate
→ review caption/image
→ regenerate if needed
→ copy caption
→ download image
→ manually post to Facebook
→ optionally mark as posted
```

## Post Types

### Availability Post

Purpose: Let people know openings are available.

Inputs:

- Date range.
- Service area.
- Service type.
- Openings available.
- CTA.

### Promo / Discount Post

Purpose: Promote a special.

Inputs:

- Offer name.
- Discount amount.
- Service type.
- Expiration date.
- CTA.

### Cleaning Tip Post

Purpose: Friendly helpful content.

Inputs:

- Topic.
- Room.
- Tone.
- Optional CTA.

### Seasonal Post

Purpose: Timely local cleaning reminders.

Inputs:

- Season or holiday.
- Service angle.
- Service area.
- CTA.

Examples:

```text
spring cleaning
holiday reset
back-to-school cleaning
move-out season
guest-ready home
```

### Review / Trust Post

Purpose: Build credibility.

Inputs:

- Review text or customer benefit.
- Optional customer first name.
- Service type.
- CTA.

### Before / After Style Post

Purpose: Show results.

MVP can use branded generic graphics instead of real customer photos.

Inputs:

- Service performed.
- Result description.
- Room/type.
- CTA.

Later version can support uploading real before/after photos.

## Brand Kit

The brand kit should make every post consistent.

### BrandProfile Fields

```ts
type BrandProfile = {
  id: string
  businessName: string
  tagline?: string
  logoUrl?: string
  primaryColor: string
  secondaryColor: string
  accentColor?: string
  tone: "friendly" | "fun" | "professional" | "local-family" | "trustworthy"
  serviceArea: string
  phone?: string
  email?: string
  facebookUrl?: string
  defaultCTA: string
  defaultHashtags: string[]
  services: string[]
  imageStyle: "fun" | "clean-modern" | "friendly-local" | "seasonal"
  createdAt: string
  updatedAt: string
}
```

### Aunt B's Default Brand

```text
Business name: Aunt B's Cleaning Services
Tone: friendly, fun, trustworthy, local
Services: standard clean, deep clean, move-out clean, recurring clean
Default CTA: Message us for a free quote
Image style: friendly local cleaning brand
```

## Draft Data Model

```ts
type PostDraft = {
  id: string
  brandProfileId: string
  postType:
    | "availability"
    | "promo"
    | "cleaning_tip"
    | "seasonal"
    | "review_trust"
    | "before_after"

  title: string
  inputData: Record<string, unknown>

  fullCaption: string
  shortCaption: string
  callToAction: string
  hashtags: string[]

  imagePrompt?: string
  imageUrl?: string

  status: "draft" | "ready" | "posted"
  platform: "facebook" | "instagram" | "both"

  creditsUsed: number
  generationEvents: GenerationEvent[]

  createdAt: string
  updatedAt: string
  postedAt?: string
}

type GenerationEvent = {
  id: string
  type:
    | "caption"
    | "caption_rewrite"
    | "post_ideas"
    | "image_prompt"
    | "image_generation"
    | "image_variant"
    | "weekly_content_pack"
  creditsUsed: number
  createdAt: string
}
```

## Screens

### Dashboard

Shows:

- Create New Post.
- Saved Drafts.
- Recent Posts.
- Brand Kit.
- Content Ideas.
- AI credit balance.

### Post Generator

Left side:

- Post type.
- Service type.
- Offer/details.
- Service area.
- Tone.
- Platform.
- CTA.
- Extra note.

Right side:

- Full caption.
- Short caption.
- CTA.
- Hashtags.
- Image preview.
- Credits used.

Buttons:

- Generate.
- Regenerate Caption.
- Regenerate Image.
- Make Shorter.
- Make Friendlier.
- Make More Professional.
- Save Draft.
- Copy Caption.
- Download Image.
- Mark as Posted.

### Draft Library

Each draft card shows:

- Post title.
- Post type.
- Created date.
- Status.
- Image thumbnail.
- Credits used.
- Copy caption button.
- Download image button.
- Mark as posted button.

### Brand Kit

Editable fields:

- Business name.
- Service area.
- Logo.
- Colors.
- Tone.
- Default CTA.
- Services.
- Hashtags.
- Contact info.

## AI Caption Rules

The caption generator should follow these rules:

```text
Write for a local cleaning business.
Keep it friendly and simple.
Avoid exaggerated claims.
Do not promise results the business cannot guarantee.
Do not mention AI.
Do not sound corporate.
Use the business name naturally.
Include a clear CTA.
Keep Facebook version warm and conversational.
```

Suggested output shape:

```json
{
  "title": "",
  "fullCaption": "",
  "shortCaption": "",
  "callToAction": "",
  "hashtags": []
}
```

## Image Generation Rules

Images should be:

- Square social post format.
- Friendly.
- Clean.
- Branded.
- Easy to read.
- Not cluttered.
- Consistent with Aunt B's logo/colors.
- Suitable for Facebook.

Avoid:

- Fake customer testimonials.
- Fake before/after claims.
- Messy text-heavy graphics.
- Too many small words.
- Realistic people if not needed.
- Weird hands/faces.
- Unsafe chemical use.

Best image types:

- Branded cleaning tip graphic.
- Seasonal cleaning promo.
- Availability graphic.
- Review/trust graphic.
- Fun friendly mascot-style graphic.
- Simple clean-home illustration.

## AI Credit System

This helper should plug into the existing ServicesOS AI credit model.

Core rule:

```text
ServicesOS subscription gives access.
AI credits control usage.
Heavy AI features consume more credits.
```

Do not offer unlimited AI marketing.

### Suggested Credit Weights

```text
Generate caption + CTA + hashtags = 1 credit
Rewrite caption = 1 credit
Generate 5 post ideas = 2 credits
Generate image prompt only = 1 credit
Generate branded image = 8-15 credits
Generate alternate image = 8-15 credits
Generate weekly content pack = 15-30 credits
```

### Cost-Control Rules

- Show credit cost before generation.
- Button should say what it costs, for example: `Generate Branded Image — uses 10 AI credits`.
- Daily generation limit.
- Monthly generation limit.
- Regenerations cost credits.
- Image variants cost credits.
- No bulk generation by default.
- No auto-generate in background.
- Save results so users do not regenerate the same thing.
- Admin can set tenant usage limits.
- Stop generation when credits run out.
- Image generation is premium compared to captions.

## Future ServicesOS Packaging

Early internal use:

```text
Aunt B's Marketing Helper
```

Later ServicesOS module:

```text
Growth Assistant Lite — included in top tier or limited by credits
Growth Assistant Pro — paid add-on with higher credit allowance
```

Possible future pricing direction:

```text
+$19/month = caption help only
+$39/month = captions + limited images
+$79/month = more images + weekly content planner
Extra AI credits = paid add-on
```

Image generation should always be credit-capped.

## Roadmap

### Phase 0 — Aunt B's Internal Helper

- Single brand profile.
- Manual post generation.
- Captions.
- Branded image generation.
- Draft saving.
- Copy/download.
- Mark as posted.
- AI credit tracking.

### Phase 1 — ServicesOS Growth Assistant

- Brand kit per tenant.
- Limited credit-based content generator.
- Review request posts.
- Promo posts.
- Seasonal posts.
- Availability posts.
- Basic post history.

### Phase 2 — GrowthAI Content Engine

- Weekly content planner.
- Reusable post templates.
- Local seasonal prompts.
- Generate 5 posts for the week.
- Human approval workflow.
- Style learning from approved examples.

### Phase 3 — GrowthAI Lead/Source Intelligence

- Use lead source data.
- Suggest which service/promo to post about.
- Identify slow weeks.
- Suggest follow-up campaigns.
- Connect post ideas to ServicesOS lead-source results.

### Phase 4 — Future GrowthAI Operating Layer

Do not build until ServicesOS is stable and has real retained users.

Potential future features:

- Campaign suggestions.
- Local competitor/pain-signal research.
- Lead scoring.
- Follow-up suggestions.
- Human-approved outreach drafts.
- Objection tracking.
- Vertical launch kits.

## SLAI Philosophy

This GrowthAI path follows the SLAI rule:

```text
AI notices.
AI drafts.
AI suggests.
Human approves.
System records.
```

Do not let AI automatically publish posts, buy ads, reject leads, or make important business decisions without human approval.

## Current Takeaway

This planning created the first grounded version of GrowthAI.

It starts with a real burden:

```text
Aunt B's needs marketing help.
Jamie needs less manual marketing work.
```

It becomes useful immediately if it helps Jamie's wife create clean, branded posts without help.

But it stays disciplined:

```text
Start as a tiny Aunt B's helper.
Fold into ServicesOS later.
Only grow into full GrowthAI after ServicesOS V1 is stable and customer usage proves the need.
```
