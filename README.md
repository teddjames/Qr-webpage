
# TJ Hub — Honey & Bee Products

A responsive product catalogue and M-Pesa payment information webpage for **TJ Hub**, a business offering honey and bee-related products.

The webpage allows customers to explore available products, select quantities, calculate their order total, copy an order summary, and access instructions for making payments through M-Pesa.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Products and Pricing](#products-and-pricing)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Payment Information](#payment-information)
- [Responsive Design](#responsive-design)
- [Future Improvements](#future-improvements)

## Overview

TJ Hub provides a simple and accessible online platform for customers to view honey and bee products without needing to install an application or create an account.

The project is built using standard web technologies and follows a modular structure, separating the webpage content, styling, and interactive functionality into individual files.

The website is designed to work across desktop computers, tablets, and mobile devices.

## Features

- **Product Catalogue:** Displays available honey and bee products with descriptions and prices.
- **Interactive Order Builder:** Allows customers to select product quantities.
- **Automatic Price Calculation:** Calculates individual subtotals and the overall order total.
- **Copyable Order Summary:** Generates a formatted summary that customers can copy and share.
- **M-Pesa Payment Instructions:** Displays the recipient number and manual payment instructions.
- **Copy M-Pesa Number:** Allows customers to copy the payment recipient number.
- **Responsive Layout:** Adapts to different screen sizes.
- **Accessible Interface:** Includes descriptive labels, keyboard focus indicators, and status messages.
- **Lightweight Architecture:** Uses HTML, CSS, and vanilla JavaScript without requiring a framework or database.

## Products and Pricing

The website currently displays the following products:

| Product | Price (KES) |
|---|---:|
| Pure Honey — 1 kg | 1,500 |
| Pure Honey — 1/2 kg | 750 |
| Honeycomb | 2,000 |
| Wax / Beeswax | 1,800 |
| Bee Venom | 6,000 |
| Lemongrass Oil | 1,200 |

Prices are defined in the HTML product inputs and can be updated when necessary.

## Technologies Used

- **HTML5** — Provides the structure and semantic content of the webpage.
- **CSS3** — Handles the visual design, product grid, responsive layouts, and accessibility-focused styling.
- **JavaScript (ES6+)** — Implements order calculations, dynamic order summaries, clipboard actions, and automatic copyright year updates.
- **Git and GitHub** — Support source-code version control and project hosting.
- **GitHub Pages** — Can be used to publish the static website.

## Project Structure

```text
root-folder/
├── index.html   # Main webpage and product information
├── index.css    # Styling and responsive layout
├── index.js     # Order calculations and interactive features
└── README.md    # Project documentation
```

### Prerequisites

To work on this project, you need:

- A computer with a modern web browser.
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor.
- [Git](https://git-scm.com/) for version control and GitHub uploads, if desired.

No package manager, backend server, or database is required for the current implementation.

### QR Code Integration

After deployment:

1. Confirm that the website opens using its published HTTPS URL.
2. Generate a QR code containing that exact URL.
3. Scan the QR code using a phone.
4. Verify that it opens the correct website and that the page works on mobile.

If the published URL changes, generate a replacement QR code using the new URL.

## Payment Information

The website provides manual M-Pesa payment instructions using the configured recipient number

The current implementation is an informational website only. It does not:

- Initiate M-Pesa transactions.
- Automatically receive payment confirmations.
- Verify payments against an M-Pesa transaction system.
- Store customer orders in a database.
- Automatically notify the business when an order is placed.

Customers should verify the recipient details and payment amount before confirming a transaction.

Any future automated payment functionality would require an appropriate payment integration, secure backend services, and transaction verification.

## Responsive Design

The website uses CSS Grid, flexible layouts, relative sizing, and media queries to support different screen widths.

The layout is designed to adapt to:

- Desktop computers and larger displays.
- Tablets and medium-sized screens.
- Smartphones and smaller screens.

The mobile layout simplifies navigation, stacks product cards vertically, and adjusts order and payment sections for narrower screens.

## Future Improvements

Potential enhancements include:

- Product images and a more detailed product gallery.
- A customer enquiry or order-submission form.
- WhatsApp integration for sending order summaries directly to the business.
- A secure backend for storing orders.
- M-Pesa Daraja API integration for supported payment workflows.
- Server-side payment verification and order status updates.
- An administrative dashboard for managing products and prices.
- Search engine optimisation and improved social media previews.
- Automated testing and continuous deployment.

These features are proposed enhancements and are not part of the current static implementation.
