/**
 * DELONE E-COMMERCE CART MANAGER & WHATSAPP INTEGRATION
 */

const STORE_WHATSAPP_NUMBER = "923100934157"; // International format without + sign for WhatsApp API

let cart = JSON.parse(localStorage.getItem('delone_cart_items')) || [];

/**
 * Save current cart state to LocalStorage
 */
function saveCart() {
  localStorage.setItem('delone_cart_items', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

/**
 * Add product to cart by ID with optional selected color
 */
function addToCart(productId, quantity = 1, color = null) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const chosenColor = (color && color.trim() !== '') ? color : (prod.colors && prod.colors.length > 0 ? prod.colors[0] : null);

  const existing = cart.find(item => item.id === productId && (item.selectedColor || null) === chosenColor);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      quantity: quantity,
      category: prod.category,
      selectedColor: chosenColor
    });
  }

  saveCart();
  const colorText = chosenColor ? ` (${chosenColor.toUpperCase()})` : '';
  showToast(`Added "${prod.name}${colorText}" to cart!`);
}

/**
 * Update quantity of item in cart
 */
function updateCartQuantity(productId, color, delta) {
  const normColor = (color && color.trim() !== '') ? color : null;
  const item = cart.find(i => i.id === productId && (i.selectedColor || null) === normColor);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => !(i.id === productId && (i.selectedColor || null) === normColor));
  }
  saveCart();
}

/**
 * Remove item from cart completely
 */
function removeFromCart(productId, color = null) {
  const normColor = (color && color.trim() !== '') ? color : null;
  cart = cart.filter(i => !(i.id === productId && (i.selectedColor || null) === normColor));
  saveCart();
}

/**
 * Calculate total price of cart
 */
function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

/**
 * Update Header Cart Counter Badge
 */
function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badgeElements = document.querySelectorAll('.cart-badge-count');
  badgeElements.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

/**
 * Render Cart Drawer UI
 */
function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-drawer-subtotal');
  if (!container || !subtotalEl) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #3E534B;">
        <i class="ri-shopping-bag-line" style="font-size: 3rem; color: #2CE194; margin-bottom: 1rem; display: block;"></i>
        <h4 style="font-family: 'Outfit', sans-serif; color: #09322E; margin-bottom: 0.5rem;">Your Cart is Empty</h4>
        <p style="font-size: 0.9rem;">Explore our high-performance tech accessories catalog!</p>
      </div>
    `;
    subtotalEl.textContent = formatPrice(0);
    return;
  }

  let html = '';
  cart.forEach(item => {
    const fullProd = PRODUCTS.find(p => p.id === item.id) || item;
    const imgSrc = getProductImage(fullProd, item.selectedColor);
    const colorLabel = item.selectedColor ? `<div style="font-size: 0.78rem; color: var(--color-mint-hover); font-weight: 700; text-transform: uppercase;">Color: ${item.selectedColor}</div>` : '';

    html += `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${imgSrc}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          ${colorLabel}
          <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity} = ${formatPrice(item.price * item.quantity)}</div>
          <div class="quantity-control" style="margin: 6px 0 0 0; gap: 8px;">
            <button class="qty-btn" style="width: 24px; height: 24px; font-size: 0.8rem;" onclick="updateCartQuantity(${item.id}, '${item.selectedColor || ''}', -1)">-</button>
            <span class="qty-val" style="font-size: 0.85rem; min-width: 20px;">${item.quantity}</span>
            <button class="qty-btn" style="width: 24px; height: 24px; font-size: 0.8rem;" onclick="updateCartQuantity(${item.id}, '${item.selectedColor || ''}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" title="Remove Item" onclick="removeFromCart(${item.id}, '${item.selectedColor || ''}')">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
  subtotalEl.textContent = formatPrice(getCartSubtotal());
}

/**
 * Generate clean, professional WhatsApp order link for full cart
 */
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Add products first.", "warning");
    return;
  }

  let message = `Hello Delone Store,\n\n`;
  message += `I would like to place an order for the following item(s):\n\n`;
  
  cart.forEach((item, idx) => {
    const colorTag = item.selectedColor ? ` (Color: ${item.selectedColor.toUpperCase()})` : '';
    message += `${idx + 1}. ${item.name}${colorTag} - Quantity: ${item.quantity} - Price: ${formatPrice(item.price * item.quantity)}\n`;
  });

  message += `\nTotal Amount: ${formatPrice(getCartSubtotal())}\n\n`;
  message += `Please confirm my order details and delivery timing. Thank you!`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodedMsg}`;
  window.open(waUrl, '_blank');
}

/**
 * Direct professional WhatsApp order link for single item
 */
function orderSingleViaWhatsApp(productId, quantity = 1, color = null) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const chosenColor = (color && color.trim() !== '') ? color : (prod.colors && prod.colors.length > 0 ? prod.colors[0] : null);

  let message = `Hello Delone Store,\n\n`;
  message += `I would like to place an order for the following product:\n\n`;
  message += `Product Name: ${prod.name}\n`;
  if (chosenColor) {
    message += `Color: ${chosenColor.toUpperCase()}\n`;
  }
  message += `Quantity: ${quantity}\n`;
  message += `Total Price: ${formatPrice(prod.price * quantity)}\n\n`;
  message += `Please confirm my order details and delivery timing. Thank you!`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodedMsg}`;
  window.open(waUrl, '_blank');
}

/**
 * Simple toast notification popup
 */
function showToast(msg, type = "success") {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed; bottom: 100px; right: 30px; z-index: 9999;
      display: flex; flex-direction: column; gap: 10px; pointer-events: none;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: #09322E; color: #FFFFFF; border: 1.5px solid #2CE194;
    padding: 12px 22px; border-radius: 50px; font-family: 'Outfit', sans-serif;
    font-weight: 600; font-size: 0.9rem; box-shadow: 0 8px 24px rgba(9, 50, 46, 0.3);
    display: flex; align-items: center; gap: 10px; animation: slideIn 0.3s ease;
    pointer-events: auto;
  `;
  
  toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color: #2CE194; font-size: 1.2rem;"></i> ${msg}`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
