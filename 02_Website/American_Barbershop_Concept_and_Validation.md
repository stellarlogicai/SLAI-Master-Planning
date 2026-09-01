# American Barbershop — Website Concept and ServicesOS Validation Case

**Document Status:** Validation / concept planning  
**Implementation Status:** No customer commitment; concept only  
**Last Updated:** 2026-09-01  
**Related Vertical:** ServicesOS Appointment Services / Barber & Salon  
**Purpose:** Preserve the American Barbershop research, website concept, Booksy benchmark, and potential path into ServicesOS Barber without treating the shop as a committed customer.

## Why This Case Matters

American Barbershop in Bolivar, Missouri is a useful real-world validation case for two SLAI ideas:

1. SLAI Web as a branded website and managed-web service.
2. ServicesOS Barber as a future vertical built on the stable ServicesOS core.

This is not a reason to interrupt ServicesOS V1.

It is a future proof path once V1 is stable.

## Public Business Information Observed

Research conducted from the public Booksy listing and public search snippets identified:

- **Business:** American Barbershop
- **Location:** 887 E Mt Gilead Rd, Bolivar, MO 65613
- **Staff:** James, Kade, Isaac
- **Rating:** 5.0 with 100+ reviews; the exact live count changed across snapshots
- **Amenities:** parking, accessibility, Wi-Fi

Services observed and cross-checked during the research session:

| Service | Price | Duration |
|---|---:|---:|
| Haircut | $30 | 30 min |
| Kids Cut 12 & Under | $25 | 25 min |
| Beard Trim | $5 | 10 min |
| Buzz Cut | $16 | 20 min |
| Straight Razor Shave | $35 | 30 min |
| Veterans Cut | $25 | 30 min |

Hours observed from Booksy structured data during research:

- Monday: closed
- Tuesday: 10:00–2:00 and 3:00–5:00
- Wednesday: 11:15–4:00
- Thursday: 10:00–2:00 and 3:00–5:00
- Friday: 10:00–2:00 and 3:00–5:00
- Saturday: 9:00–12:00
- Sunday: closed

All live business facts should be re-verified with the owner before production launch.

## Social-Media Research Notes

Known links discussed:

- Facebook: `https://www.facebook.com/american.barbershop.galmey/`
- Instagram: `https://www.instagram.com/ib.cuttinn/`
- TikTok discover link: `https://www.tiktok.com/discover/american-barbershop`

Research found a Facebook discrepancy:

- the provided Facebook handle was `american.barbershop.galmey`,
- Booksy structured data pointed to `facebook.com/Americanbarbershop/`.

Owner confirmation is required before production.

Instagram/TikTok automated access was restricted during research. The Instagram handle appeared to be a Bolivar barber account connected to American Barbershop, but the specific staff attribution was not verified.

## Booksy Benchmark

During the 2026-08-31 planning session, then-current U.S. Booksy pricing suggested a three-calendar setup at approximately:

```text
First calendar/user:     $29.99/month
Two additional staff:    $20 + $20/month
Estimated base total:    $69.99/month
```

Payment processing, hardware, and optional acquisition/marketing costs can add to the base subscription.

**Re-verify Booksy pricing before using this comparison in sales material.**

## Observed Website Problem

The shop currently has a Booksy-provided profile rather than a fully owned branded website experience.

The Booksy page is effective for booking but gives limited control over:

- overall visual identity,
- layout,
- shop story,
- barber presentation,
- local SEO structure,
- customer journey,
- long-term booking-system independence.

The opportunity is not to copy Booksy.

The opportunity is to give American Barbershop an owned branded front door.

## Mock Website Direction

A Claude-generated internal mock used an original visual direction based on available public assets:

- near-black / warm brown base,
- cream typography,
- brass/gold accents,
- restrained red primary CTA,
- strong condensed display typography,
- dark small-town/Ozarks American barbershop feel,
- real barber/work imagery where available,
- reviews, services, barbers, gallery, visit information, and booking calls to action.

The concept intentionally avoided generic SaaS styling and barber-pole clip-art-heavy design.

The first mock remained a one-page marketing site and linked booking to Booksy.

## Production Asset Rule

Public Booksy CDN images can be acceptable for an internal concept preview, but production should use owner-approved/original assets where possible.

Before launch, request:

- original logo,
- high-resolution shop photos,
- barber portraits,
- best haircut/beard portfolio photos,
- verified staff bios if desired,
- confirmed hours,
- confirmed walk-in policy,
- phone/contact information,
- correct Facebook/social links.

Do not invent missing business details.

## Website-First Path

If the shop wants SLAI to build the site:

```text
American Barbershop branded website
↓
Book Now
↓
Booksy initially
```

This improves brand ownership without forcing an operational migration.

Later, if the shop wants ServicesOS Barber and the vertical is ready:

```text
American Barbershop branded website
↓
Native booking experience
↓
ServicesOS booking/availability
↓
Owner calendar / customer record / payment / reminders
```

The public website should not need a redesign just because the operating engine changes.

## Future ServicesOS Barber Validation

American Barbershop could become a real design/validation partner only if the owner wants it and ServicesOS is ready.

Preferred migration method:

1. keep Booksy live,
2. run ServicesOS Barber in parallel,
3. compare booking, scheduling, customer management, payment, rebooking, and owner UX,
4. fix gaps,
5. migrate only after the shop trusts the replacement.

No risky cutover on day one.

## ServicesOS Data → Website

If the shop uses both SLAI Web and ServicesOS, the site can eventually reflect approved public ServicesOS data:

- logo,
- colors,
- barbers,
- services,
- prices,
- service duration,
- hours,
- photos,
- announcements,
- availability/booking.

Example:

```text
Owner changes Haircut $30 → $32 in ServicesOS
↓
Owner publishes
↓
Website service card updates
↓
Booking flow uses the same canonical price
```

This reduces mundane maintenance requests and keeps the public site consistent with the operating system.

See `SLAI_Web_Engine.md`.

## Pricing Position

Current company-level pricing decision is documented in:

`../03_SLAI_Company/SLAI_Web_Services_Business_Model.md`

Key current numbers:

- ServicesOS: **$100/month**
- Managed Website: **$100/month**
- Working straightforward website-build reference: **~$2,000 one time**

American Barbershop should not receive an automatic ServicesOS discount merely because Jamie's brother works there.

Promotional managed-web months may be offered if Jamie chooses, but are not assumed.

## Why This Is a Strong First Proof

This one account can validate several hypotheses:

- small businesses value an owned website even when booking software supplies a profile,
- AI-assisted SLAI website builds can be produced quickly,
- managed web can become recurring revenue,
- website work can reveal operational pain,
- website customers can become ServicesOS leads,
- ServicesOS can support a location-based appointment vertical without becoming a separate product,
- the website can act as a branded customer-facing surface while ServicesOS owns business truth.

## Guardrail

Do not turn this concept into active Barber engineering before ServicesOS V1 gates are met.

The concept may be shown or sold as a website project when Jamie decides the timing is safe, but ServicesOS Barber remains future vertical work until explicitly promoted.
