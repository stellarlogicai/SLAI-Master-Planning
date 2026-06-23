# ServicesOS Owner/Admin Quote Review Flow Plan

## Purpose

Customer Portal can now submit quote requests into the leads flow. The next product step is making sure the owner/admin can clearly review, edit, price, and send a customer-visible quote.

The owner should not be forced to accept an automatic estimate blindly. ServicesOS should assist, but the human owner remains responsible for final pricing.

## Product Decision

Owner/admin quote review should allow editing:

* Price
* Labor hours
* Service scope
* Notes
* Schedule window
* Add-ons
* Internal notes

When approved, the quote becomes:

```text
Customer-visible quote
```

It should not immediately become a booking or payment request.

Correct flow:

Customer submits quote request
→ Owner reviews details
→ Owner adjusts price/time/scope
→ Owner sends customer-visible quote
→ Customer accepts
→ Booking/scheduling happens later
→ Payment/deposit happens later

## Owner Review Entry Point

Submitted customer quote requests should appear in the owner/admin lead area with a clear status:

```text
Pending Owner Review
```

Suggested visual labels:

* Source: Customer Portal
* Type: Quote Request
* Status: Pending Review
* Requires Pricing: Yes

## Quote Request Detail View

Owner/admin should see:

### Customer Details

* Name
* Email
* Phone
* Address
* Existing customer status
* Customer notes

### Property / Job Details

* Service type
* Frequency
* Bedrooms
* Bathrooms
* Kitchens
* Living rooms
* Dining rooms
* Offices
* Closets
* Laundry room
* Garage
* Basement
* Stairs
* Square footage
* Pets
* Pet hair level
* Clutter level
* Last cleaned
* Add-ons
* Special surfaces/materials
* Access notes
* Preferred date/time

### System Assistance

If available:

* Suggested labor hours
* Suggested price range
* Risk notes
* Missing information flags
* Add-on suggestions

## Owner Editable Fields

Owner should be able to edit:

```js
{
  finalPrice,
  priceLow,
  priceHigh,
  laborHours,
  estimatedDuration,
  serviceScope,
  includedAddOns,
  excludedItems,
  ownerNotes,
  customerMessage,
  proposedDate,
  proposedTime,
  quoteExpirationDate
}
```

## Quote Statuses

Suggested status lifecycle:

```text
new
pending_owner_review
quote_drafted
sent_to_customer
accepted
declined
expired
scheduled
completed
```

For beta, keep it simpler:

```text
new
pending_owner_review
sent_to_customer
accepted
declined
```

## Customer-Visible Quote

Once owner sends the quote, Customer Portal should show:

* Quote amount
* Service scope
* Expected duration
* Proposed date/time, if included
* Notes from owner
* Accept button
* Decline/request changes button

Do not attach payment yet unless Stripe flow is stable.

## What Not To Do Yet

* Do not auto-create bookings when owner reviews a request.
* Do not auto-charge customer.
* Do not create payment links automatically.
* Do not let AI finalize quotes without owner approval.
* Do not let customers edit owner-approved quote price.
* Do not move to Stripe until quote review/acceptance is stable.

## Beta-Critical Requirements

For wife beta, the owner/admin must be able to answer:

```text
Can I see what the customer requested?
Can I understand how big the job is?
Can I adjust the quote?
Can I send something back to the customer?
Can I avoid accidental booking/payment creation?
```

## Required Tests

Suggested tests:

* Customer quote request appears as pending owner review.
* Owner/admin detail view displays snapshot fields.
* Missing legacy formData does not crash.
* Pending owner review does not display `$0 - $0`.
* Owner can enter price/labor/scope.
* Owner can save draft quote.
* Owner can mark quote as sent.
* Customer can see sent quote.
* Quote acceptance does not create payment automatically.
* Quote acceptance does not create booking unless explicitly triggered.

## Implementation Phases

### Phase 1: Owner Review Display

* Show quote request details clearly.
* Use snapshot fields.
* Add pending owner review status.

### Phase 2: Editable Draft Quote

* Owner edits price, hours, scope, notes.
* Save as draft.
* No customer notification yet.

### Phase 3: Send Quote To Customer

* Mark quote as customer-visible.
* Customer Portal displays it.

### Phase 4: Customer Accept / Decline

* Customer accepts quote.
* System records acceptance.
* Booking/payment still separate.

### Phase 5: Scheduling Connection

* Accepted quote can become booking.
* Owner controls schedule confirmation.

### Phase 6: Payment Connection Later

* Deposit/payment link only after quote and booking flow is stable.
