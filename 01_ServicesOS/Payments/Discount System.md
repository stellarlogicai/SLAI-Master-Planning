In fact, I'd recommend building discounts as a first-class feature, not as a manual price override.

The reason is exactly what happened here.

If someone only sees:

Total: $80

they have no context.

But if they see:

Standard Cleaning Service
$160.00

Family Discount (50%)
-$80.00

Total
$80.00

the conversation changes completely.

Now they can see:

Actual Value
Discount Given
Final Price

For your SaaS, I'd support several discount types:

Percentage Discount
10%
15%
20%
25%
50%

Use cases:

Family
Friends
Military
Senior
First Responders
Teachers
Promotions
Fixed Dollar Discount
-$25
-$50
-$100

Use cases:

Referral Rewards
Customer Service Recovery
Special Promotions
Recurring Customer Discount
Weekly
10%

Bi-Weekly
5%

Monthly
0%

or whatever pricing model the business chooses.

First-Time Customer Discount
New Customer
10% Off

Good for marketing campaigns.

Custom Discount Reason

This is the feature I'd definitely include.

Example:

Discount Type:
Custom

Reason:
Family Discount

Amount:
50%

Then the invoice shows:

Family Discount (50%)
-$80.00
Internal Analytics

This is where it gets interesting.

Track:

Discount Amount

Discount Type

Reason

Employee Applying Discount

Customer Receiving Discount

Now your founder dashboard can show:

Total Discounts This Month

Family Discounts

Promotional Discounts

Referral Discounts

This prevents discount abuse later.

Suggested Database Structure

Something like:

{
  "discountType": "percentage",
  "discountName": "Family Discount",
  "discountValue": 50,
  "discountAmount": 80,
  "reason": "Parents",
  "appliedBy": "owner"
}

Then invoices, reports, and analytics all pull from the same data.

Even Better for Future Verticals

The nice thing is this isn't just a cleaning feature.

It works for:

Cleaning SaaS
Card Shop SaaS
Landscaping
Pressure Washing
HVAC

Basically every service business.

Honestly, after hearing this story, I'd make sure every invoice shows:

Subtotal
Discounts
Taxes
Fees (if applicable)
Final Total

because transparency prevents a lot of awkward conversations.

In your wife's situation, if the invoice had clearly shown:

Service Value: $160
Family Discount: -$80
Amount Due: $80

it would have been much harder for someone to claim she was taking advantage of them. The invoice itself would demonstrate that they were receiving a substantial discount.