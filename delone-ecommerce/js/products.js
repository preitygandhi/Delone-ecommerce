/**
 * DELONE E-COMMERCE PRODUCTS CATALOG
 * Complete 31 Catalog Items with rich meta details & exact image file paths
 */

const PRODUCTS = [
  {
    id: 1,
    name: "B-11 Type-C Cable",
    desc: "TYPE-C / FAST CHARGING",
    price: 1000,
    category: "cables",
    rating: 4.8,
    reviewsCount: 42,
    badge: "Best Value",
    specs: ["TPE Heavy Duty Braid", "3A Fast Charging Support", "1 Meter Length", "High-Speed Data Sync (480Mbps)"],
    tag: "Charging Cable",
    img: "assest/products/typeC-cableB11.png"
  },
  {
    id: 2,
    name: "B-12 Lightning Cable",
    desc: "LIGHTNING / FAST CHARGING",
    price: 1120,
    category: "cables",
    rating: 4.9,
    reviewsCount: 56,
    badge: "MFi Certified",
    specs: ["Apple MFi Chip", "2.4A Max Charging", "Reinforced Stress Points", "1 Meter Length"],
    tag: "Lightning Cable",
    img: "assest/products/typeC-cableB11.png"
  },
  {
    id: 3,
    name: "B-13 USB-C to C Cable",
    desc: "USB-C TO C / FAST CHARGING",
    price: 1120,
    category: "cables",
    rating: 4.7,
    reviewsCount: 38,
    badge: "Hot Deal",
    specs: ["60W PD Support", "Nylon Braided Fiber", "480Mbps Sync", "Anti-Tangle Flex Design"],
    tag: "Type-C Cable",
    img: "assest/products/typeC-cableB11.png"
  },
  {
    id: 4,
    name: "B-14 USB-C to Lightning",
    desc: "USB-C TO LIGHTNING / FAST CHARGING",
    price: 1140,
    category: "cables",
    rating: 4.9,
    reviewsCount: 64,
    badge: "Fast PD",
    specs: ["20W Power Delivery", "Quick Charge 0-50% in 30 mins", "Braided Shielding", "1.2 Meter Length"],
    tag: "PD Cable",
    img: "assest/products/B-14 USB-C to Lightning.png"
  },
  {
    id: 5,
    name: "B-16 USB-C to Lightning (30W)",
    desc: "USB-C TO LIGHTNING / 30 W",
    price: 1760,
    category: "cables",
    rating: 5.0,
    reviewsCount: 89,
    badge: "Pro Choice",
    specs: ["30W Max PD Charge", "Ultra-durable Kevlar core", "Smart Chip Voltage Regulation", "1.5 Meter Length"],
    tag: "30W Cable",
    img: "assest/products/USB-C to lightning B-16.png"
  },
  {
    id: 6,
    name: "B-17 USB-C to C (60W)",
    desc: "USB-C TO C / 60 W FAST CHARGE",
    price: 1650,
    category: "cables",
    rating: 4.9,
    reviewsCount: 71,
    badge: "Laptop Ready",
    specs: ["60W Power Delivery 3.0", "E-Mark Smart Controller", "Compatible with MacBooks & Tablets", "2 Meter Length"],
    tag: "60W Cable",
    img: "assest/products/USB C to USB C B-17.png"
  },
  {
    id: 7,
    name: "HF-11 Type-C Earphones",
    desc: "TYPE-C HEADPHONES",
    price: 1590,
    category: "audio",
    rating: 4.6,
    reviewsCount: 29,
    badge: "Hi-Res Audio",
    specs: ["Built-in Digital DAC Chip", "10mm Dynamic Drivers", "In-line Remote & Mic", "Ergonomic In-Ear Fit"],
    tag: "Wired Audio",
    img: "assest/products/TypeC-Headphones HF-11 .png"
  },
  {
    id: 8,
    name: "HF-13 Type-C Earphones",
    desc: "TYPE-C HEADPHONES",
    price: 1680,
    category: "audio",
    rating: 4.8,
    reviewsCount: 47,
    badge: "Bass Boost",
    specs: ["Lossless Audio Playback", "Noise Isolating Tips", "Metallic Alloy Casing", "HD Voice Calling"],
    tag: "Wired Audio",
    img: "assest/products/TypeC headphones HF-13.png"
  },
  {
    id: 9,
    name: "PD-01 Power Bank 10,000mAh",
    desc: "10000 MAH / FAST CHARGING",
    price: 3350,
    category: "powerbanks",
    rating: 4.8,
    reviewsCount: 112,
    badge: "Bestseller",
    specs: ["10000mAh Li-Polymer", "22.5W Super Fast Charge", "Dual USB + Type-C Output", "LED Digital Battery Display"],
    tag: "Power Bank",
    img: "assest/products/powerbank PD-01.png"
  },
  {
    id: 10,
    name: "PD-02 Power Bank 20,000mAh",
    desc: "20000 MAH / FAST CHARGING",
    price: 4350,
    category: "powerbanks",
    rating: 4.9,
    reviewsCount: 145,
    badge: "High Capacity",
    specs: ["20000mAh Massive Juice", "22.5W Two-Way QC 3.0", "Multi-layer Safety Protection", "Slim Matte Finish"],
    tag: "Power Bank",
    img: "assest/products/powerbank PD-02.png"
  },
  {
    id: 11,
    name: "PD-06 Power Bank 10,000mAh",
    desc: "10000 MAH / FAST CHARGING",
    price: 3300,
    category: "powerbanks",
    rating: 4.7,
    reviewsCount: 68,
    badge: "Ultra Slim",
    specs: ["Pocket-Sized Aluminum Body", "18W PD Quick Charge", "Intelligent IC Chip", "Type-C Input/Output"],
    tag: "Power Bank",
    img: "assest/products/Powerbank PD-06.png"
  },
  {
    id: 12,
    name: "PD-07 Power Bank 20,000mAh",
    desc: "20000 MAH / FAST CHARGING",
    price: 4350,
    category: "powerbanks",
    rating: 4.9,
    reviewsCount: 93,
    badge: "Dual Output",
    specs: ["20000mAh High Density Cells", "PD 20W + QC 3.0", "Flight Approved Safety", "Textured Anti-Slip Grip"],
    tag: "Power Bank",
    img: "assest/products/PowerBank PD-07.png"
  },
  {
    id: 13,
    name: "PD-08 Power Bank 30,000mAh",
    desc: "30000 MAH / FAST CHARGING",
    price: 5100,
    category: "powerbanks",
    rating: 5.0,
    reviewsCount: 180,
    badge: "Ultimate Beast",
    specs: ["30000mAh Monster Battery", "Triple Output Ports", "65W Fast Charge Input", "Integrated Emergency Torch"],
    tag: "30,000 mAh",
    img: "assest/products/Powerbank PD-08.png"
  },
  {
    id: 14,
    name: "C-402 Car Charger",
    desc: "2 PD / QC 3.0 PORTS",
    price: 1560,
    category: "carchargers",
    rating: 4.7,
    reviewsCount: 52,
    badge: "Dual Fast",
    specs: ["Dual Quick Charge 3.0", "Metal Alloy Construction", "Soft LED Atmosphere Light", "Overheat Safety Shutoff"],
    tag: "Car Charger",
    img: "assest/products/C-403 Car Charger.png"
  },
  {
    id: 15,
    name: "C-403 Car Charger",
    desc: "PD 60 W FAST CHARGER",
    price: 1690,
    category: "carchargers",
    rating: 4.9,
    reviewsCount: 78,
    badge: "60W Super Charge",
    specs: ["60W Total Power Output", "Type-C PD 36W + USB 24W", "Universal 12V-24V Car Socket", "Fireproof PC Material"],
    tag: "60W Car Charger",
    img: "assest/products/C-403 Car Charger.png"
  },
  {
    id: 16,
    name: "W-12 Wall Charger",
    desc: "PD 20 W / QC 3.0",
    price: 1760,
    category: "chargers",
    rating: 4.8,
    reviewsCount: 88,
    badge: "Compact",
    specs: ["20W USB-C Power Delivery", "GaN Tech Mini Design", "Global Voltage 100V-240V", "Smart Temperature Control"],
    tag: "Wall Adapter",
    img: "assest/products/W-12 Wall Charger.png"
  },
  {
    id: 17,
    name: "W-14 Wall Charger",
    desc: "PD 25 W SUPER CHARGER",
    price: 1700,
    category: "chargers",
    rating: 4.9,
    reviewsCount: 104,
    badge: "Samsung Fast",
    specs: ["25W PPS Super Fast Charge", "Ideal for Galaxy & iPhone", "Energy Star Certified", "Compact Travel Size"],
    tag: "25W Adapter",
    img: "assest/products/W-15 Wall Charger.png"
  },
  {
    id: 18,
    name: "W-15 Wall Charger",
    desc: "PD 25 W ADAPTIVE FAST",
    price: 1700,
    category: "chargers",
    rating: 4.8,
    reviewsCount: 61,
    badge: "Adaptive Power",
    specs: ["Adaptive Fast Charging 2.0", "Dual Port USB + Type-C", "Short-circuit Protection", "Matte White Finish"],
    tag: "Adaptive Wall",
    img: "assest/products/W-15 Wall Charger.png"
  },
  {
    id: 19,
    name: "HP-01 Headphone",
    desc: "BOOSTER SOUND / 30 HOURS BATTERY",
    price: 5650,
    category: "audio",
    rating: 5.0,
    reviewsCount: 210,
    badge: "Flagship Audio",
    specs: ["40mm Bass Booster Drivers", "30-Hour Continuous Playback", "Memory Foam Ear Cushions", "Bluetooth 5.3 + AUX Support"],
    tag: "Over-Ear",
    img: "assest/products/HP-01 Black Headphone.png",
    colors: ["white", "green", "black"],
    colorImages: {
      "white": "assest/products/HP-01 White Headphone.png",
      "green": "assest/products/HP-01 Headphone Green.png",
      "black": "assest/products/HP-01 Black Headphone.png"
    }
  },
  {
    id: 20,
    name: "EB-01 BT Earbuds",
    desc: "SOUND PRO + WIRELESS",
    price: 3350,
    category: "audio",
    rating: 4.7,
    reviewsCount: 95,
    badge: "Popular",
    specs: ["Sound Pro Tuned Audio", "24-Hour Total Battery with Case", "IPX5 Sweat & Water Resistance", "Touch Sensor Controls"],
    tag: "TWS Earbuds",
    img: "assest/products/sound pro EB-01.png"
  },
  {
    id: 21,
    name: "EB-02 BT Earbuds",
    desc: "EAR BUDS 2 / TRUE WIRELESS",
    price: 3250,
    category: "audio",
    rating: 4.6,
    reviewsCount: 73,
    badge: "Value Pick",
    specs: ["True Wireless Stereo", "Ultra-Low Latency Gaming Mode", "Instant One-Step Pairing", "Compact Pebble Case"],
    tag: "TWS Earbuds",
    img: "assest/products/Earbuds 2 EB-02.png"
  },
  {
    id: 22,
    name: "EB-03 BT Earbuds",
    desc: "EAR BUDS 3 / TRUE WIRELESS",
    price: 3350,
    category: "audio",
    rating: 4.8,
    reviewsCount: 84,
    badge: "ANC Mode",
    specs: ["Active Noise Reduction", "HD Quad Mic for Clear Calls", "USB-C Fast Recharge", "Deep Bass Subwoofer"],
    tag: "Noise Cancelling",
    img: "assest/products/Earbuds 3 EB-03.png"
  },
  {
    id: 23,
    name: "EB-04 BT Earbuds",
    desc: "NEO 4 / WIRELESS STEREO",
    price: 3650,
    category: "audio",
    rating: 4.9,
    reviewsCount: 130,
    badge: "Gaming Edition",
    specs: ["40ms Ultra Low Latency", "RGB Gaming LED Lights", "13mm Titanium Drivers", "Environmental Noise Cancellation"],
    tag: "Gaming Buds",
    img: "assest/products/Neo 4 EB-04.png"
  },
  {
    id: 24,
    name: "EB-05 BT Earbuds",
    desc: "PROFESSIONAL 2 AUDIO",
    price: 3450,
    category: "audio",
    rating: 4.8,
    reviewsCount: 115,
    badge: "Studio Audio",
    specs: ["Professional Studio Tuning", "28 Hours Playtime", "Smart Wear Detection", "Dual Device Connection"],
    tag: "Pro Audio",
    img: "assest/products/earbuds EB-05.png"
  },
  {
    id: 25,
    name: "EB-06 BT Earbuds",
    desc: "PURE SOUND / PURE BLISS",
    price: 3100,
    category: "audio",
    rating: 4.6,
    reviewsCount: 58,
    badge: "Minimalist",
    specs: ["Pure Sound Fidelity", "Featherlight 3.8g Earbud Weight", "Type-C Quick Charging", "Crystal Clear Treble"],
    tag: "TWS Earbuds",
    img: "assest/products/Earbud EB-06 Ornage.png",
    colors: ["blue", "orange", "white"],
    colorImages: {
      "blue": "assest/products/earbud EB-06 B.png",
      "orange": "assest/products/Earbud EB-06 Ornage.png",
      "white": "assest/products/Earbuds EB-06 W.png"
    }
  },
  {
    id: 26,
    name: "EB-07 BT Earbuds",
    desc: "SLEEK STYLE WIRELESS",
    price: 3100,
    category: "audio",
    rating: 4.7,
    reviewsCount: 67,
    badge: "Sleek Design",
    specs: ["Translucent Crystal Case", "Bluetooth 5.3 Chipset", "Comfort Fit Half-In-Ear", "Intuitive Voice Assistant Activation"],
    tag: "Stylish Audio",
    img: "assest/products/sleekstyle EB-07 B.png",
    colors: ["blue", "green", "black"],
    colorImages: {
      "blue": "assest/products/sleekstyle EB-07 Blue.png",
      "green": "assest/products/sleekstyle EB-07 G.png",
      "black": "assest/products/sleekstyle EB-07 B.png"
    }
  },
  {
    id: 27,
    name: "EB-08 BT Earbuds",
    desc: "ZEN BUDS / TRUE WIRELESS",
    price: 3100,
    category: "audio",
    rating: 4.7,
    reviewsCount: 49,
    badge: "Zen Acoustics",
    specs: ["Acoustic Balance Engine", "20 Hours Battery Reserve", "Auto Pop-up Connection", "Anti-interference Tech"],
    tag: "TWS Earbuds",
    img: "assest/products/Zenbuds EB-08 B.png",
    colors: ["black", "blue", "white"],
    colorImages: {
      "black": "assest/products/Zenbuds EB-08 B.png",
      "blue": "assest/products/Zenbuds EB-08 Blue.png",
      "white": "assest/products/Zenbuds EB-08 W.png"
    }
  },
  {
    id: 28,
    name: "NK-01 Neckband",
    desc: "100 HOUR MUSIC PLAYBACK",
    price: 3750,
    category: "audio",
    rating: 4.9,
    reviewsCount: 154,
    badge: "100H Battery",
    specs: ["100 Hours Non-Stop Music", "Magnetic Lock Earbuds", "TF Card Slot Built-in", "Skin-friendly Silicone Band"],
    tag: "Wireless Neckband",
    img: "assest/products/NK-02 Neckband.png"
  },
  {
    id: 29,
    name: "NK-02 Neckband",
    desc: "FEELING THE BEATS",
    price: 2750,
    category: "audio",
    rating: 4.6,
    reviewsCount: 82,
    badge: "Sports Edition",
    specs: ["Extra Deep Bass Tuning", "Flex-Neck Comfort Band", "Dual Microphones", "IPX4 Sweatproof"],
    tag: "Sports Neckband",
    img: "assest/products/NK-02 Neckband.png"
  },
  {
    id: 30,
    name: "CP-01 Car Fragrance",
    desc: "AROMATHERAPY MACHINE FOR CAR",
    price: 4350,
    category: "caraccessories",
    rating: 4.9,
    reviewsCount: 96,
    badge: "Luxury Scent",
    specs: ["Ultrasonic Mist Diffuser", "Smart Auto Start/Stop with Engine", "3 Essential Oil Refills Included", "Aircraft Grade Alloy Body"],
    tag: "Car Diffuser",
    img: "assest/products/C-403 Car Charger.png"
  },
  {
    id: 31,
    name: "SK-01 Phantom 1 Speaker",
    desc: "IMPLOSIVE SOUND SPEAKER",
    price: 6790,
    category: "audio",
    rating: 5.0,
    reviewsCount: 240,
    badge: "Top Speaker",
    specs: ["Implosive 50W RMS Bass", "360-Degree Surround Audio", "RGB Dynamic Light Show", "TWS Daisy Chain Pairing"],
    tag: "Bluetooth Speaker",
    img: "assest/products/SK-01 Phantom 1 Speaker.png",
    colors: ["black", "blue", "green"],
    colorImages: {
      "green": "assest/products/SK-01 Phantom 1 Speaker Green.png",
      "blue": "assest/products/SK-01 Phantom 1 Speaker Blue.png",
      "black": "assest/products/SK-01 Phantom 1 Speaker.png",
    }
  }
];

/**
 * Returns formatted currency string (e.g., Rs. 1,850)
 */
function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString()}`;
}

/**
 * Returns product image path (supporting color-specific images) or dynamic visual SVG fallback
 */
function getProductImage(product, color = null) {
  if (color && product.colorImages && product.colorImages[color] && product.colorImages[color].trim() !== "") {
    return product.colorImages[color];
  }
  if (product.img && product.img.trim() !== "" && product.img !== "1600x1190_placeholder.jpg") {
    return product.img;
  }
  return getProductSvg(product);
}

/**
 * Generate visual category placeholder SVGs dynamically
 */
function getProductSvg(product) {
  const cat = product.category;
  let bgGradient = 'linear-gradient(135deg, #09322E 0%, #154D47 100%)';
  let accentColor = '#2CE194';
  let iconSvg = '';

  if (cat === 'cables') {
    bgGradient = 'linear-gradient(135deg, #072926 0%, #0E423D 100%)';
    iconSvg = `<path d="M120 200 C 180 120, 220 280, 280 200" stroke="${accentColor}" stroke-width="12" fill="none" stroke-linecap="round"/>
               <rect x="90" y="185" width="30" height="30" rx="6" fill="${accentColor}"/>
               <rect x="280" y="185" width="30" height="30" rx="6" fill="${accentColor}"/>`;
  } else if (cat === 'powerbanks') {
    bgGradient = 'linear-gradient(135deg, #0A3A35 0%, #145952 100%)';
    iconSvg = `<rect x="130" y="120" width="140" height="240" rx="16" fill="none" stroke="${accentColor}" stroke-width="10"/>
               <rect x="175" y="95" width="50" height="25" rx="4" fill="${accentColor}"/>
               <path d="M200 170 L180 230 L205 230 L195 290 L225 220 L200 220 Z" fill="${accentColor}"/>`;
  } else if (cat === 'chargers' || cat === 'carchargers') {
    bgGradient = 'linear-gradient(135deg, #09322E 0%, #1D635B 100%)';
    iconSvg = `<rect x="140" y="130" width="120" height="150" rx="14" fill="none" stroke="${accentColor}" stroke-width="10"/>
               <path d="M170 280 L170 330 M230 280 L230 330" stroke="${accentColor}" stroke-width="10" stroke-linecap="round"/>
               <circle cx="200" cy="205" r="24" fill="${accentColor}"/>`;
  } else if (cat === 'caraccessories') {
    bgGradient = 'linear-gradient(135deg, #0C423D 0%, #1A6960 100%)';
    iconSvg = `<circle cx="200" cy="200" r="80" fill="none" stroke="${accentColor}" stroke-width="10"/>
               <circle cx="200" cy="200" r="30" fill="${accentColor}"/>
               <path d="M200 80 V 120 M200 280 V 320 M80 200 H 120 M280 200 H 320" stroke="${accentColor}" stroke-width="8" stroke-linecap="round"/>`;
  } else {
    // Audio / headphones / earbuds
    bgGradient = 'linear-gradient(135deg, #09322E 0%, #17544E 100%)';
    iconSvg = `<path d="M110 220 C 110 130, 290 130, 290 220" stroke="${accentColor}" stroke-width="12" fill="none" stroke-linecap="round"/>
               <rect x="90" y="200" width="40" height="70" rx="10" fill="${accentColor}"/>
               <rect x="270" y="200" width="40" height="70" rx="10" fill="${accentColor}"/>`;
  }

  // 1600x1190 aspect ratio target canvas SVG string encoded cleanly
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 297.5" width="100%" height="100%" style="border-radius:12px; background:${bgGradient};">
      <defs>
        <radialGradient id="glow-${product.id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#09322E" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#glow-${product.id})"/>
      <g transform="translate(0, 0)">
        ${iconSvg}
      </g>
      <text x="20" y="35" fill="${accentColor}" font-family="sans-serif" font-weight="bold" font-size="12" letter-spacing="1">DELONE GENUINE</text>
      <text x="380" y="35" fill="#D4E9E1" font-family="sans-serif" font-size="11" text-anchor="end" opacity="0.8">${product.tag}</text>
      <text x="20" y="275" fill="#FFFFFF" font-family="sans-serif" font-weight="bold" font-size="16">${product.name}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
}
