# Warehouse-to-Shelf Outdate Intelligence

## Idea

Outdate tracking should start upstream, not only after the product is already sitting on a store shelf.

If a company has its own distribution warehouse, expiration and lot data could be captured before products reach stores. That data could follow the product from warehouse to shelf.

## Current Store-Only Pattern

```text
Product arrives at store
↓
Product is stocked
↓
Employee eventually checks shelf
↓
Expiration date is discovered manually
↓
Store reacts
```

## Better Pattern

```text
Product enters distribution center
↓
Expiration / lot data is captured
↓
Product ships to store
↓
Store receives product with expiration data attached
↓
System applies department pull rules
↓
Future outdate tasks are created automatically
↓
Employees verify and execute instead of hunting from scratch
```

## Product Expiration Passport

Each case/product could carry:

- SKU / UPC
- Lot number
- Expiration date
- Vendor
- Warehouse received date
- Store shipped date
- Store received date
- Department
- Shelf/location if known
- Pull window
- Calculated pull date
- Disposal route
- Recall eligibility
- Audit history

## Data Capture Options

- Vendor sends lot/expiration data electronically
- Warehouse captures expiration during receiving
- Case label includes lot/expiration
- Employee scans/enters expiration at warehouse receiving
- OCR/photo capture reads date from label
- Store receiving verifies expiration if warehouse data is missing

## MVP Version

```text
Store receives case
↓
Employee scans item
↓
Employee enters expiration once
↓
System creates future outdate task
```

Future version:

```text
Warehouse receives case
↓
Expiration captured upstream
↓
Store task calendar is auto-created
```
