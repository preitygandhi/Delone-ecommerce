/**
 * DELONE MAIN APPLICATION CONTROLLER
 */

let activeCategory = 'all';
let currentSearchTerm = '';
let maxPrice = 5000;
let currentModalProductId = null;
let currentModalQty = 1;
let currentModalSelectedColor = null;
let searchScrollDebounce = null;

// Map of selected color per product card ID
let selectedCardColors = {};

// Hero Featured Products Carousel Data
const HERO_SLIDES = [
  { id: 31, badge: "Flagship Speaker", title: "SK-01 Phantom 1 Speaker", desc: "Implosive 50W RMS surround bass with dynamic RGB ambient lights.", price: 6790 },
  { id: 19, badge: "Pro Over-Ear", title: "HP-01 Studio Headphones", desc: "40mm drivers delivering booster sound with 30-hour battery life.", price: 5650 },
  { id: 13, badge: "Monster Power", title: "PD-08 30,000mAh Power Bank", desc: "65W fast input with triple output ports for non-stop charge.", price: 5100 },
  { id: 23, badge: "Gaming TWS", title: "EB-04 Neo 4 Gaming Buds", desc: "40ms ultra-low latency with RGB gaming lights and ENC noise cancellation.", price: 3650 }
];

let heroSlideIndex = 0;
let heroSlideTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initCategoryFilters();
  initSearchAndPriceFilter();
  renderProducts();
  updateCartBadge();
  renderCartDrawer();
  initMobileMenu();
});

/**
 * Initialize Category Filter Pills
 */
function initCategoryFilters() {
  const container = document.getElementById('category-filter-container');
  if (!container) return;

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'cables', label: 'Charging Cables' },
    { id: 'powerbanks', label: 'Power Banks' },
    { id: 'chargers', label: 'Wall Chargers' },
    { id: 'carchargers', label: 'Car Chargers' },
    { id: 'audio', label: 'Wireless Earbuds & Audio' },
    { id: 'caraccessories', label: 'Car Accessories' }
  ];

  container.innerHTML = categories.map(cat => `
    <button class="filter-chip ${cat.id === activeCategory ? 'active' : ''}" 
            onclick="setCategoryFilter('${cat.id}')">
      ${cat.label}
    </button>
  `).join('');
}

/**
 * Filter items by category
 */
function setCategoryFilter(catId) {
  activeCategory = catId;
  initCategoryFilters();
  renderProducts();
}

/**
 * Filter items by quick category icon card click
 */
function quickFilterCategory(catId) {
  setCategoryFilter(catId);
  scrollToFilteredProducts();
}

/**
 * Scroll viewport smoothly down to products grid
 */
function scrollToFilteredProducts() {
  const gridEl = document.getElementById('products-grid');
  if (gridEl) {
    const yOffset = -140; // Account for sticky header height
    const y = gridEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/**
 * Trigger search from header button
 */
function triggerHeaderSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.focus();
  }
  const shopEl = document.getElementById('shop-catalog-section');
  if (shopEl) {
    shopEl.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Live Keyword & Price Range Input Listeners
 */
function initSearchAndPriceFilter() {
  const searchInput = document.getElementById('search-input');
  const priceRange = document.getElementById('price-range');
  const priceDisplay = document.getElementById('price-range-val');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value.toLowerCase().trim();
      renderProducts();

      // Auto-scroll to filtered products after user pauses typing 2+ characters
      clearTimeout(searchScrollDebounce);
      if (currentSearchTerm.length >= 2) {
        searchScrollDebounce = setTimeout(() => {
          scrollToFilteredProducts();
        }, 700);
      }
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(searchScrollDebounce);
        scrollToFilteredProducts();
      }
    });
  }

  if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', (e) => {
      maxPrice = parseInt(e.target.value, 10);
      priceDisplay.textContent = formatPrice(maxPrice);
      renderProducts();
    });
  }
}

/**
 * Handle Color Swatch Click on Product Card
 */
function selectCardColor(productId, colorName, btnElement) {
  selectedCardColors[productId] = colorName;
  const parent = btnElement.parentElement;
  if (parent) {
    parent.querySelectorAll('.color-swatch-dot').forEach(el => el.classList.remove('active'));
    btnElement.classList.add('active');
  }

  // Dynamically swap product card image if color-specific image exists
  const prod = PRODUCTS.find(p => p.id === productId);
  const cardImg = document.getElementById(`card-img-${productId}`);
  if (cardImg && prod) {
    cardImg.src = getProductImage(prod, colorName);
  }
}

/**
 * Render Product Grid based on current filters
 */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('product-results-count');
  if (!grid) return;

  let filtered = PRODUCTS.filter(prod => {
    // Category check
    const matchesCategory = (activeCategory === 'all') || 
      (activeCategory === 'chargers' && (prod.category === 'chargers' || prod.category === 'carchargers')) ||
      (prod.category === activeCategory);

    // Search check
    const matchesSearch = prod.name.toLowerCase().includes(currentSearchTerm) ||
      prod.desc.toLowerCase().includes(currentSearchTerm) ||
      prod.tag.toLowerCase().includes(currentSearchTerm);

    // Price check
    const matchesPrice = prod.price <= maxPrice;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} Product${filtered.length !== 1 ? 's' : ''} Found`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-muted-charcoal);">
        <i class="ri-search-eye-line" style="font-size: 3.5rem; color: var(--color-mint-hover); margin-bottom: 1rem; display: block;"></i>
        <h3 style="font-size: 1.5rem; color: var(--color-primary-teal); margin-bottom: 0.5rem;">No Matching Products Found</h3>
        <p>Try clearing your search query or adjusting the price filter.</p>
        <button class="btn-primary" style="margin-top: 1.5rem;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(prod => {
    // Initial color setup
    if (prod.colors && prod.colors.length > 0 && !selectedCardColors[prod.id]) {
      selectedCardColors[prod.id] = prod.colors[0];
    }
    const currentSelectedColor = selectedCardColors[prod.id] || null;
    const imgSrc = getProductImage(prod, currentSelectedColor);

    // Color swatches rendering if product has color options
    let colorSwatchesHtml = '';
    if (prod.colors && prod.colors.length > 0) {
      colorSwatchesHtml = `
        <div class="product-color-selector">
          <span class="color-selector-label">Colors:</span>
          <div class="color-swatches">
            ${prod.colors.map(color => `
              <button class="color-swatch-dot color-dot-${color} ${currentSelectedColor === color ? 'active' : ''}" 
                      title="${color.toUpperCase()}" 
                      onclick="event.stopPropagation(); selectCardColor(${prod.id}, '${color}', this)">
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="product-card">
        ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ''}
        <div class="product-img-wrapper" onclick="openProductModal(${prod.id})">
          <img id="card-img-${prod.id}" src="${imgSrc}" alt="${prod.name}" loading="lazy">
        </div>
        <div class="product-details">
          <span class="product-tag-text">${prod.tag}</span>
          <h3 class="product-title" onclick="openProductModal(${prod.id})">${prod.name}</h3>
          <p class="product-desc">${prod.desc}</p>
          ${colorSwatchesHtml}
          <div class="product-rating">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <span>${prod.rating} (${prod.reviewsCount})</span>
          </div>
          <div class="product-footer">
            <span class="product-price">${formatPrice(prod.price)}</span>
            <div class="card-actions">
              <button class="btn-card-cart" onclick="addToCart(${prod.id}, 1, selectedCardColors[${prod.id}])">
                <i class="ri-shopping-cart-2-line"></i> Add
              </button>
              <button class="btn-card-wa" title="Order via WhatsApp" onclick="orderSingleViaWhatsApp(${prod.id}, 1, selectedCardColors[${prod.id}])">
                <i class="ri-whatsapp-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Reset all filter controls
 */
function resetFilters() {
  activeCategory = 'all';
  currentSearchTerm = '';
  maxPrice = 20000;

  const searchInput = document.getElementById('search-input');
  const priceRange = document.getElementById('price-range');
  const priceDisplay = document.getElementById('price-range-val');

  if (searchInput) searchInput.value = '';
  if (priceRange) priceRange.value = 20000;
  if (priceDisplay) priceDisplay.textContent = formatPrice(20000);

  initCategoryFilters();
  renderProducts();
}

/**
 * Hero Slider Controller
 */
function initHeroSlider() {
  renderHeroSlide(0);
  heroSlideTimer = setInterval(() => {
    nextHeroSlide();
  }, 20000);
}

function nextHeroSlide() {
  heroSlideIndex = (heroSlideIndex + 1) % HERO_SLIDES.length;
  renderHeroSlide(heroSlideIndex);
}

function prevHeroSlide() {
  heroSlideIndex = (heroSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
  renderHeroSlide(heroSlideIndex);
}

function renderHeroSlide(index) {
  const cardContainer = document.getElementById('hero-slider-content');
  if (!cardContainer) return;

  const slide = HERO_SLIDES[index];
  const prod = PRODUCTS.find(p => p.id === slide.id);
  const imgSrc = prod ? getProductImage(prod) : '';

  cardContainer.innerHTML = `
    <span class="slide-badge">${slide.badge}</span>
    <div class="slide-img-box" onclick="openProductModal(${slide.id})" style="cursor: pointer;">
      <img src="${imgSrc}" alt="${slide.title}">
    </div>
    <div class="slide-info">
      <h3>${slide.title}</h3>
      <p>${slide.desc}</p>
      <div class="slide-footer">
        <div class="slide-price">${formatPrice(slide.price)}</div>
        <div style="display: flex; gap: 8px;">
          <button class="btn-primary" style="padding: 8px 18px; font-size: 0.85rem;" onclick="addToCart(${slide.id})">Add to Cart</button>
          <div class="slide-controls">
            <button class="slide-arrow" onclick="prevHeroSlide()"><i class="ri-arrow-left-s-line"></i></button>
            <button class="slide-arrow" onclick="nextHeroSlide()"><i class="ri-arrow-right-s-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Product Detail Modal Handler (1600x1190 Frame Target)
 */
function openProductModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  currentModalProductId = productId;
  currentModalQty = 1;
  currentModalSelectedColor = (prod.colors && prod.colors.length > 0) 
    ? (selectedCardColors[productId] || prod.colors[0]) 
    : null;

  const overlay = document.getElementById('product-modal');
  const imgEl = document.getElementById('modal-img');
  const tagEl = document.getElementById('modal-tag');
  const titleEl = document.getElementById('modal-title');
  const priceEl = document.getElementById('modal-price');
  const specsEl = document.getElementById('modal-specs');
  const qtyEl = document.getElementById('modal-qty-val');
  const colorPickerEl = document.getElementById('modal-color-picker');

  if (imgEl) imgEl.src = getProductImage(prod, currentModalSelectedColor);
  if (tagEl) tagEl.textContent = prod.tag;
  if (titleEl) titleEl.textContent = prod.name;
  if (priceEl) priceEl.textContent = formatPrice(prod.price);
  if (qtyEl) qtyEl.textContent = currentModalQty;

  if (specsEl) {
    specsEl.innerHTML = prod.specs.map(spec => `
      <li><i class="ri-checkbox-circle-line"></i> ${spec}</li>
    `).join('');
  }

  // Render Modal Color Picker if colors exist
  if (colorPickerEl) {
    if (prod.colors && prod.colors.length > 0) {
      colorPickerEl.innerHTML = `
        <div class="product-color-selector" style="margin: 12px 0;">
          <span class="color-selector-label" style="font-size: 0.85rem;">Select Color:</span>
          <div class="color-swatches">
            ${prod.colors.map(color => `
              <button class="color-swatch-dot color-dot-${color} ${currentModalSelectedColor === color ? 'active' : ''}" 
                      title="${color.toUpperCase()}" 
                      onclick="selectModalColor('${color}', this)">
              </button>
            `).join('')}
          </div>
          <span id="modal-selected-color-name" style="font-size: 0.8rem; font-weight: 700; color: var(--color-mint-hover); text-transform: uppercase;">(${currentModalSelectedColor})</span>
        </div>
      `;
      colorPickerEl.style.display = 'block';
    } else {
      colorPickerEl.innerHTML = '';
      colorPickerEl.style.display = 'none';
    }
  }

  if (overlay) overlay.classList.add('active');
}

function selectModalColor(colorName, btnElement) {
  currentModalSelectedColor = colorName;
  selectedCardColors[currentModalProductId] = colorName;

  const parent = btnElement.parentElement;
  if (parent) {
    parent.querySelectorAll('.color-swatch-dot').forEach(el => el.classList.remove('active'));
    btnElement.classList.add('active');
  }

  const nameLabel = document.getElementById('modal-selected-color-name');
  if (nameLabel) nameLabel.textContent = `(${colorName})`;

  const prod = PRODUCTS.find(p => p.id === currentModalProductId);

  // Update modal image for selected color
  const modalImg = document.getElementById('modal-img');
  if (modalImg && prod) {
    modalImg.src = getProductImage(prod, colorName);
  }

  // Also update corresponding product card image & swatches
  const cardImg = document.getElementById(`card-img-${currentModalProductId}`);
  if (cardImg && prod) {
    cardImg.src = getProductImage(prod, colorName);
  }
}

function closeProductModal() {
  const overlay = document.getElementById('product-modal');
  if (overlay) overlay.classList.remove('active');
}

function updateModalQty(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  const qtyEl = document.getElementById('modal-qty-val');
  if (qtyEl) qtyEl.textContent = currentModalQty;
}

function addModalItemToCart() {
  if (!currentModalProductId) return;
  addToCart(currentModalProductId, currentModalQty, currentModalSelectedColor);
  closeProductModal();
}

function orderModalItemViaWA() {
  if (!currentModalProductId) return;
  orderSingleViaWhatsApp(currentModalProductId, currentModalQty, currentModalSelectedColor);
}

/**
 * Cart Drawer Toggle Handlers
 */
function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('active');
}

/**
 * Mobile Navigation Toggle & Auto-Close on Link Click
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = isActive ? 'ri-close-line' : 'ri-menu-line';
      }
    });

    // Auto-close mobile menu whenever ANY nav link is tapped
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'ri-menu-line';
      });
    });

    // Close menu when tapping outside on document
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'ri-menu-line';
      }
    });
  }
}
