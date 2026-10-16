<div align="center">

  <img src="assest/logo.png" alt="Delone Tech Logo" width="220" />

  # Delone Official Store

  **Premium Tech Accessories, Fast Chargers, Power Banks & Audio**

  *A high-performance, modern, responsive e-commerce web application with instant WhatsApp order checkout.*

  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp Checkout" />
    <img src="https://img.shields.io/badge/Responsive-Mobile--First-2CE194?style=for-the-badge" alt="Responsive" />
    <img src="https://img.shields.io/badge/License-MIT-09322E?style=for-the-badge" alt="License" />
  </p>

</div>

---

## 📖 Overview

**Delone Official Store** is a lightweight, zero-dependency e-commerce storefront designed for selling authentic mobile technology accessories. Engineered with a clean modern aesthetic, snappy user interactions, and mobile-first responsiveness, it allows customers to browse items, inspect technical specifications, toggle color variants, manage a persistent shopping cart, and place orders directly via **WhatsApp**.

---

## ✨ Key Features

- **🛍️ Complete 31-Item Product Catalog**
  - Categorized across Fast Charging Cables, Power Banks (10k–30k mAh), Hi-Fi Audio & TWS, Wall Chargers, and Car Accessories.
  - Rich metadata for every product: price, tags, badges, customer ratings, review counts, and detailed tech specifications.

- **🎨 Dynamic Color Variant Switcher**
  - Real-time color selection directly on product cards and inside modal dialogs.
  - Automatically switches between variant product images (e.g., Orange, White, Blue, Black, Green) and remembers choices during checkout.

- **🔍 Smart Search & Multi-criteria Filtering**
  - Instant live keyword search for product names and specifications.
  - Category pill filter tabs with smooth auto-scroll.
  - Interactive price range slider filter with real-time price boundary updates.

- **🛒 Slide-Out Shopping Cart Drawer**
  - Side drawer with quantity increment/decrement controls, item deletion, and subtotal calculation.
  - LocalStorage persistence (`delone_cart_items`) ensures cart items remain intact across sessions.
  - Dynamic navigation badge displaying real-time item count.

- **💬 Instant WhatsApp Checkout Integration**
  - One-click checkout generates a structured, pre-formatted order summary (items, selected colors, quantities, and total order price in PKR).
  - Automatically redirects customer directly to the Delone WhatsApp sales number with their order ready to send.

- **🔍 Quick View Product Detail Modal**
  - Full product breakdown with bulleted specifications, warranty badge, color swatches, quantity selector, and instant "Buy Now" triggers.

- **📜 Integrated Store Policies & Legal Pages**
  - Dedicated [`policy.html`](policy.html) featuring sticky side navigation for Terms & Conditions, Return & Refund Policy, Shipping Information, and 1-Year Warranty Claim procedures.

- **⚡ Blazing Fast & Zero Dependencies**
  - Built with pure Vanilla HTML5, modern CSS3, and ES6+ JavaScript.
  - No bloated frameworks or build steps required; runs out of the box on any web server or static host.

---

## 🎨 Visual Identity & Color Palette

Designed with an aesthetic dark teal and vibrant mint palette:

| Color Name | Hex Code | Purpose |
| :--- | :---: | :--- |
| **Primary Teal** | `#09322E` | Headers, hero background, primary buttons, footers |
| **Mint Accent** | `#2CE194` | Call-to-action buttons, badges, glowing accents |
| **Light Sage/Mint** | `#D4E9E1` | Hero gradient, section borders, category card accents |
| **Soft Sage BG** | `#EAF4F0` | Card hover states, badge backgrounds |
| **Muted Charcoal** | `#3E534B` | Body copy, secondary descriptions |
| **Pure White** | `#FFFFFF` | Container backgrounds and crisp contrasts |

---

## 📁 Project Structure

```text
delone-ecommerce/
├── assest/                         # Media assets
│   ├── logo.png                    # Brand logo (723x271)
│   └── products/                   # High-resolution product images
│       ├── B-14 USB-C to Lightning.png
│       ├── C-403 Car Charger.png
│       ├── Earbud EB-06 Ornage.png
│       ├── HP-01 Studio Headphones.png
│       ├── Powerbank PD-08.png
│       └── ... (31+ product photos)
├── css/
│   └── styles.css                  # Comprehensive design system, animations & responsive media queries
├── js/
│   ├── products.js                 # Catalog database (specs, prices, variants, images)
│   ├── cart.js                     # Cart state management, LocalStorage & WhatsApp API
│   └── app.js                      # UI controller, carousel, search, filter & modal handlers
├── index.html                      # Main storefront landing page & catalog
├── policy.html                     # Terms, Shipping, Return & Warranty policies
└── README.md                       # Repository documentation
```

---

## 🚀 Getting Started

Because Delone E-Commerce is built with standard web technologies, no build tools, compilers, or package managers are required.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/delone-ecommerce.git
cd delone-ecommerce
```

### 2. Run Locally

You can run the project using any of the following methods:

#### Method A: Direct Browser Launch
Simply double-click [`index.html`](index.html) or open it with your browser of choice.

#### Method B: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Right-click [`index.html`](index.html) and select **"Open with Live Server"**.

#### Method C: Python Built-in Server
```bash
# Python 3
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

#### Method D: Node.js `serve` / `npx`
```bash
npx serve .
```

---

## ⚙️ Configuration & Customization

### Changing the WhatsApp Store Number
Open [`js/cart.js`](js/cart.js) and update the `STORE_WHATSAPP_NUMBER` variable with your phone number in international format (without the `+` sign):
```javascript
const STORE_WHATSAPP_NUMBER = "923100934157"; // e.g., Country Code + Phone Number
```

### Adding or Modifying Products
Edit [`js/products.js`](js/products.js). Each product is defined as an object:
```javascript
{
  id: 32,
  name: "New Product Name",
  desc: "CATEGORY / SHORT SPEC",
  price: 2500,
  category: "audio", // 'cables', 'powerbanks', 'chargers', 'carchargers', 'audio', 'caraccessories'
  rating: 4.9,
  reviewsCount: 15,
  badge: "New Arrival",
  specs: ["Feature 1", "Feature 2", "Feature 3"],
  tag: "Earbuds",
  img: "assest/products/your-image.png",
  colors: ["black", "white"] // Optional color variants
}
```

### Updating Store Contact Info
Store contact numbers and addresses can be updated in the footer section of [`index.html`](index.html) and [`policy.html`](policy.html).

---

## 🌐 Deployment to GitHub Pages

1. Push your repository to GitHub.
2. In your repository settings, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Branch**, select `main` (or `master`) branch and folder `/ (root)`.
4. Click **Save**. Your site will be live within minutes at:
   ```
   https://<your-username>.github.io/delone-ecommerce/
   ```

---

## 📱 Mobile Responsiveness

The storefront is fully responsive and tested across:
- **Desktop screens** (1440px, 1200px, 1024px)
- **Tablets** (768px - 991px)
- **Mobile devices** (360px - 767px) with slide-out drawer navigation and responsive product cards.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - feel free to customize and use it for your own e-commerce store.

---

<div align="center">
  <b>Delone © 2026. All rights reserved.</b><br>
  <i>Serving Ideas — Premium Mobile Tech & Accessories</i>
</div>
