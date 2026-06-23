# ServicesOS Customer Invite & Account Linking Flow Plan

## Purpose

ServicesOS needs a real customer invite/linking flow so owners do not have to manually edit Firebase records for every customer. The manual Firebase setup used during beta testing is only a temporary workaround.

The final goal is:

Owner/admin creates or selects a customer
→ Sends customer portal invite
→ Customer signs in with Google or email/password
→ ServicesOS links the Firebase Auth user to the correct tenant and customer record
→ Customer can request quotes, view quotes, and manage service activity

## Product Decision

ServicesOS should support both paths:

1. Owner/admin creates customer first, then sends invite.
2. Customer signs up first, then owner/admin links them.

Preferred beta path:

Owner/admin creates customer first, then sends invite.

Customer sign-in methods:

* Google sign-in
* Email/password

Google sign-in should be supported because many customers will prefer it, but the invite should link primarily by email first, then attach `authUid` after first successful sign-in.

## Beta-Safe Flow

### Step 1: Owner/Admin Creates Customer

Owner enters:

* Customer name
* Email
* Phone
* Address/property notes
* Service interest
* Optional notes

System creates:

```text
tenants/{tenantId}/customers/{customerId}
```

With fields like:

```js
{
  fullName,
  displayName,
  email,
  phone,
  address,
  status: "pending_invite",
  authUid: null,
  source: "owner-created",
  createdAt,
  updatedAt
}
```

### Step 2: Owner Sends Invite

System creates an invite record:

```text
tenants/{tenantId}/customerInvites/{inviteId}
```

Suggested shape:

```js
{
  tenantId,
  customerId,
  email,
  status: "pending",
  inviteToken,
  expiresAt,
  acceptedAt: null,
  acceptedByAuthUid: null,
  createdBy,
  createdAt,
  updatedAt
}
```

Invite should expire after 30 days for beta.

### Step 3: Customer Opens Invite

Customer lands on a simple invite page:

```text
/accept-invite/:inviteToken
```

Page should show:

* Business name
* Customer email being invited
* Sign in with Google
* Sign in with email/password
* Clear note: “Use the same email this invite was sent to.”

### Step 4: Customer Signs In

After sign-in, system checks:

* Does invite exist?
* Is invite still valid?
* Does signed-in email match invite email?
* Is invite already accepted?

If valid, system updates:

```text
users/{uid}
```

```js
{
  uid,
  email,
  displayName,
  role: "customer",
  tenantId,
  customerId,
  status: "active"
}
```

And updates:

```text
tenants/{tenantId}/customers/{customerId}
```

```js
{
  authUid: uid,
  status: "active",
  linkedAt,
  updatedAt
}
```

And adds UID to tenant membership:

```js
tenants/{tenantId}.users includes uid
```

### Step 5: Customer Portal Unlocks

Once linked, Customer Portal should show:

* Business linked
* Customer profile matched
* Request Quote enabled
* Quote history enabled
* Future appointment/booking visibility

## Customer Sign-Up First Flow

This should exist later, but not be the beta default.

Customer signs up
→ Customer has `tenantId: null`
→ Portal shows “Not linked to a business yet”
→ Owner/admin can search by email and link the customer
→ System updates `users/{uid}`, customer record, and tenant users array

## Beta Constraints

Do not build a large onboarding system yet.

Beta goal:

```text
Admin can invite/link customer safely.
Customer can sign in.
Customer Portal works without manual Firebase editing.
```

## What Not To Do Yet

* Do not auto-link customers across tenants by email without owner approval.
* Do not let customers choose any business manually.
* Do not loosen Firestore rules.
* Do not bypass tenant/customer identity guards.
* Do not create bookings automatically from invite acceptance.
* Do not involve Stripe or payments.

## Required Tests

Suggested tests:

* Invite record validates email match.
* Expired invite blocks linking.
* Accepted invite cannot be reused.
* Google sign-in attaches authUid to customer record.
* Email/password sign-in attaches authUid to customer record.
* users/{uid}.tenantId is set after invite acceptance.
* tenants/{tenantId}.users includes uid after acceptance.
* Customer Portal unlocks only after tenant/customer link exists.
* Unlinked customer sees safe blocker message.

## Implementation Phases

### Phase 1: Planning & Data Contract

* Define invite record shape.
* Define user/customer link rules.
* Define beta invite acceptance flow.

### Phase 2: Read-Only Invite Lookup

* Build invite lookup by token.
* Show invite page.
* No writes yet.

### Phase 3: Accept Invite Logic

* Link Auth UID to tenant/customer record.
* Update users/{uid}.
* Update tenant customer record.
* Add UID to tenant membership.

### Phase 4: Admin Send Invite UI

* Add “Invite Customer” button.
* Generate invite.
* Copy/share invite link.
* Email sending can be manual for beta.

### Phase 5: Harden Rules

* Customer can read only own portal data.
* Customer can submit only own quote requests.
* Admin can manage tenant customers.
