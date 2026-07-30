// ==========================================
// DATA STORES
// ==========================================
const restaurants = [
    { id: 101, name: "Bella Italia Bistro", cuisine: "Italian", rating: 4.8, deliveryTime: "25-35 min" },
    { id: 102, name: "The Burger Grill", cuisine: "American", rating: 4.5, deliveryTime: "20-30 min" },
    { id: 103, name: "Dragon Wok & Noodles", cuisine: "Asian", rating: 4.6, deliveryTime: "30-40 min" },
    { id: 104, name: "Sweet Dreams Bakery", cuisine: "Desserts", rating: 4.9, deliveryTime: "15-25 min" }
];

const foodItems = [
    { 
        id: 1, restaurantId: 101, name: "Margherita Pizza", price: 349.00, category: "Italian", isVeg: true, isGlutenFree: false, 
        desc: "Classic Italian pizza loaded with rich mozzarella, fresh basil leaves, and San Marzano tomato sauce.", 
        ingredients: ["San Marzano Tomatoes", "Fresh Mozzarella", "Fresh Basil", "Extra Virgin Olive Oil"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnGyphRp6HcW9w_qjojT7CrPtUk9cNS6m49oXCgsXbCvSEwQbFs5vsK4&s=10" 
    },
    { 
        id: 2, restaurantId: 101, name: "Creamy Fettuccine Alfredo", price: 389.00, category: "Italian", isVeg: true, isGlutenFree: false, 
        desc: "Rich, creamy parmesan cheese sauce poured over perfectly cooked fresh fettuccine pasta.", 
        ingredients: ["Fettuccine Pasta", "Heavy Cream", "Parmesan Cheese", "Garlic", "Butter"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbTSx1NS9ZdzdMG55S7M0iWoAGlbYX_rgwGElBnUmuQ&s=10" 
    },
    { 
        id: 3, restaurantId: 102, name: "Classic Cheeseburger", price: 279.00, category: "American", isVeg: false, isGlutenFree: false, 
        desc: "Juicy flame-grilled Angus beef patty topped with melted cheddar cheese, lettuce, and house sauce.", 
        ingredients: ["100% Angus Beef", "Cheddar Cheese", "Brioche Bun", "Lettuce", "Tomatoes"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDn7IZbVcwc1P5lFSCVfUzhgELHDsrn0TUc96wf3HDsA&s=10" 
    },
    { 
        id: 4, restaurantId: 102, name: "Smokey BBQ Wings", price: 299.00, category: "American", isVeg: false, isGlutenFree: true, 
        desc: "Crispy fried chicken wings tossed in rich, smoky hickory BBQ sauce.", 
        ingredients: ["Chicken Wings", "Hickory BBQ Sauce", "Garlic Powder", "Honey"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjfcqnFE8nQxSuU00_ad4qWEdgRMFEBDLSTXGSjPYrA&s=10" 
    },
    { 
        id: 5, restaurantId: 103, name: "Veggie Fried Rice", price: 249.00, category: "Asian", isVeg: true, isGlutenFree: true, 
        desc: "Aromatic wok-tossed Jasmine rice mixed with crisp seasonal vegetables and gluten-free soy sauce.", 
        ingredients: ["Jasmine Rice", "Carrots", "Green Peas", "Bell Peppers", "Tamari Soy Sauce"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz1MUa0gdQmovfjy1ympYOcVrXf2r6p7L5vtpTV78Uw&s=10" 
    },
    { 
        id: 6, restaurantId: 104, name: "Chocolate Lava Cake", price: 189.00, category: "Desserts", isVeg: true, isGlutenFree: true, 
        desc: "Warm gluten-free chocolate cake with a molten chocolate center that flows with every bite.", 
        ingredients: ["Dark Chocolate", "Almond Flour", "Butter", "Eggs", "Cocoa Powder"],
        img: "https://www.lecremedelacrumb.com/wp-content/uploads/2025/02/lava-cakes-1sm-1-scaled.jpg" 
    },
    { 
        id: 7, restaurantId: 101, name: "Pesto Penne Pasta", price: 369.00, category: "Italian", isVeg: true, isGlutenFree: false, 
        desc: "Penne pasta tossed in a vibrant homemade pine nut and basil pesto topped with cherry tomatoes.", 
        ingredients: ["Penne Pasta", "Fresh Basil", "Pine Nuts", "Parmesan Cheese", "Garlic", "Olive Oil"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6zoOS0Eg_SaEsAY5IvBxQCAYtpqZqe3JF0OuNHr5LA&s=10" 
    },
    { 
        id: 8, restaurantId: 102, name: "Crispy Loaded Fries", price: 199.00, category: "American", isVeg: true, isGlutenFree: true, 
        desc: "Golden crispy french fries smothered with melted cheese sauce, jalapenos, and green onions.", 
        ingredients: ["Potatoes", "Cheddar Cheese Sauce", "Jalapenos", "Spring Onions"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ7a8Txybiw3DUhxNZp9QH5nHT8GNl9rb9Yuuauy8kV5eod_SlmWyrPY&s=10" 
    },
    { 
        id: 9, restaurantId: 103, name: "Steamed Chicken Dumplings", price: 269.00, category: "Asian", isVeg: false, isGlutenFree: false, 
        desc: "Tender dumplings filled with minced seasoned chicken and veggies, served with spicy chili oil dipping sauce.", 
        ingredients: ["Minced Chicken", "Ginger", "Garlic", "Scallions", "Chili Sauce"],
        img: "https://assets.unileversolutions.com/v1/98059613.jpg" 
    },
    { 
        id: 10, restaurantId: 104, name: "Strawberry Cheesecake", price: 229.00, category: "Desserts", isVeg: true, isGlutenFree: false, 
        desc: "Rich and creamy New York style cheesecake topped with fresh strawberry compote.", 
        ingredients: ["Cream Cheese", "Graham Cracker Crust", "Fresh Strawberries", "Vanilla Extract"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_521KV5GaM2Y529Q9-WHfv2TEcNSJtdNnLYwWjo2ZXv7b9LlN9pUytfi8&s=10" 
    }
];

// About Us, Restaurant Story, Team, Awards & Inbuilt Reviews
const aboutUsData = {
    story: "Founded in 2021, FreshBite started as a cozy family-owned bistro in Mangalore dedicated to serving wholesome, chef-crafted recipes. Over the years, we grew into a coastal neighborhood favorite by upholding our commitment to farm-to-table freshness, authentic regional and global flavors, and lightning-fast delivery.",
    team: [
        { name: "Chef Marco Rossi", role: "Head Culinary Officer", avatar: "👨‍🍳" },
        { name: "Sarah Jenkins", role: "Co-Founder & CEO", avatar: "👩‍💼" },
        { name: "David Chen", role: "Head of Operations", avatar: "👨‍💻" }
    ],
    awards: [
        "🏆 Best Food Delivery App - Coastal Culinary Tech Awards 2024",
        "⭐ Excellence in Sustainable Packaging 2025",
        "🥇 Consumer Choice Award for Fastest Delivery in Mangalore 2025"
    ],
    builtInReviews: [
        { user: "Aarav Sharma", rating: 5, comment: "FreshBite is my go-to for late-night cravings in Mangalore! The Margherita Pizza arrives hot and crispy every single time.", date: "Feb 14, 2026" },
        { user: "Priya Mukherjee", rating: 5, comment: "Super fast delivery across Hampankatta and Kadri. The Alfredo pasta tastes just like an authentic Italian trattoria.", date: "Feb 28, 2026" },
        { user: "Rohan Kapoor", rating: 4, comment: "Consistently good quality and great discounts. The BBQ wings and loaded fries are unbeatable!", date: "March 10, 2026" }
    ]
};

// Contact Us & Location Details (Mangalore, Karnataka, India)
const contactInfoData = {
    hours: "Monday - Sunday: 10:00 AM - 11:30 PM",
    phone: "+91 824-245-3737 (FRESHBITE)",
    email: "support.mangalore@freshbite.com",
    address: "MG Road, Near City Centre Mall, Hampankatta, Mangalore, Karnataka 575001, India"
};

// ==========================================
// APP STATE
// ==========================================
let cart = [];
let wishlist = [];
let activeResCuisine = 'All';
let activeResRating = 0;
let activeCategory = 'All';
let activeDiet = 'All';
let selectedRestaurantId = null;
const DISCOUNT_PERCENT = 25;

let currentUser = {
    isLoggedIn: false,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    addresses: []
};

let orderHistory = [];

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderRestaurants();
    renderFoodGrid();
    renderCart();
    renderWishlistSection();
    renderAccountSection();
    renderAboutUsSection();
    renderContactUsSection();
    setupMobileMenu();
    setupNavActiveLinks();
});

function setupNavActiveLinks() {
    const navItems = document.querySelectorAll('.nav-links a.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// ==========================================
// RESTAURANT & FOOD FILTERING
// ==========================================
function renderRestaurants() {
    const grid = document.getElementById('restaurantGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = restaurants.filter(res => {
        const matchesCuisine = activeResCuisine === 'All' || res.cuisine === activeResCuisine;
        const matchesRating = res.rating >= activeResRating;
        return matchesCuisine && matchesRating;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777; padding: 20px;">No restaurants match your selected filters.</p>`;
        return;
    }

    filtered.forEach(res => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.onclick = () => selectRestaurant(res.id, res.name);
        
        card.innerHTML = `
            <div class="restaurant-info">
                <h3 class="restaurant-title">${res.name}</h3>
                <p style="font-size:0.9rem; color:#666;">Cuisine: ${res.cuisine}</p>
                <div class="restaurant-meta">
                    <span class="badge-rating">★ ${res.rating}</span>
                    <span>🕒 ${res.deliveryTime}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterRestaurantCuisine(cuisine, event) {
    activeResCuisine = cuisine;
    if (event && event.target) {
        event.target.closest('.filter-group').querySelectorAll('.res-filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    renderRestaurants();
}

function filterRestaurantRating(rating, event) {
    activeResRating = rating;
    if (event && event.target) {
        event.target.closest('.filter-group').querySelectorAll('.res-filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    renderRestaurants();
}

function selectRestaurant(resId, resName) {
    selectedRestaurantId = resId;
    const title = document.getElementById('menuTitle');
    const resetBtn = document.getElementById('resetRestaurantFilter');
    if (title) title.textContent = `Menu: ${resName}`;
    if (resetBtn) resetBtn.style.display = 'inline-block';
    const menuSec = document.getElementById('menu');
    if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
    renderFoodGrid();
}

function resetRestaurantFilter() {
    selectedRestaurantId = null;
    const title = document.getElementById('menuTitle');
    const resetBtn = document.getElementById('resetRestaurantFilter');
    if (title) title.textContent = 'Explore Full Menu';
    if (resetBtn) resetBtn.style.display = 'none';
    renderFoodGrid();
}

function filterCategory(category, event) {
    activeCategory = category;
    if (event && event.target) {
        event.target.closest('.filter-group').querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    renderFoodGrid();
}

function filterDiet(diet, event) {
    activeDiet = diet;
    if (event && event.target) {
        event.target.closest('.filter-group').querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
    renderFoodGrid();
}

function renderFoodGrid() {
    const foodGrid = document.getElementById('foodGrid');
    if (!foodGrid) return;
    foodGrid.innerHTML = '';

    const filteredItems = foodItems.filter(item => {
        const matchesRestaurant = selectedRestaurantId === null || item.restaurantId === selectedRestaurantId;
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        
        let matchesDiet = true;
        if (activeDiet === 'Veg') matchesDiet = item.isVeg;
        else if (activeDiet === 'Non-Veg') matchesDiet = !item.isVeg;
        else if (activeDiet === 'Gluten-Free') matchesDiet = item.isGlutenFree;

        return matchesRestaurant && matchesCategory && matchesDiet;
    });

    if (filteredItems.length === 0) {
        foodGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777; padding: 20px;">No food items available for the selected filters.</p>`;
        return;
    }

    filteredItems.forEach(item => {
        const restaurantObj = restaurants.find(r => r.id === item.restaurantId);
        const isWishlisted = wishlist.includes(item.id);
        const card = document.createElement('div');
        card.className = 'food-card';

        card.innerHTML = `
            <div class="food-img-wrapper">
                <img src="${item.img}" alt="${item.name}" class="food-img" onclick="openProductModal(${item.id})">
                <button class="wishlist-btn" onclick="toggleFoodWishlist(event, ${item.id})">
                    ${isWishlisted ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="food-details">
                <span class="food-restaurant-name">${restaurantObj ? restaurantObj.name : 'FreshBite'}</span>
                <div class="food-header">
                    <h3 class="food-title" onclick="openProductModal(${item.id})">${item.name}</h3>
                    <div style="display: flex; gap: 4px; align-items: center;">
                        <span class="${item.isVeg ? 'tag-veg' : 'tag-nonveg'}">
                            ${item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
                        </span>
                    </div>
                </div>
                <p class="food-desc">${item.desc}</p>
                <div class="food-footer">
                    <span class="food-price">₹${item.price.toFixed(2)}</span>
                    <div>
                        <button class="btn-secondary" onclick="openProductModal(${item.id})" style="margin-right: 4px;">Details</button>
                        <button class="btn-primary" onclick="addToCart(${item.id})">Add</button>
                    </div>
                </div>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

// ==========================================
// WISHLIST LOGIC
// ==========================================
function toggleFoodWishlist(event, foodId) {
    if (event) event.stopPropagation();
    const index = wishlist.indexOf(foodId);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(foodId);
    }
    renderFoodGrid();
    renderWishlistSection();
}

function renderWishlistSection() {
    const container = document.getElementById('wishlistGridContainer');
    if (!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = `<p style="color: #666; font-size: 0.95rem;">No wishlist items</p>`;
        return;
    }

    let html = '';
    wishlist.forEach(id => {
        const food = foodItems.find(f => f.id === id);
        if (food) {
            html += `
                <div class="food-card" style="padding: 12px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="${food.img}" alt="${food.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;">
                        <div>
                            <strong style="font-size: 0.95rem;">${food.name}</strong>
                            <div style="font-size: 0.85rem; color: var(--primary-orange); font-weight: bold;">₹${food.price.toFixed(2)}</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 6px; align-items: center;">
                        <button class="btn-primary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="addToCart(${food.id})">Add</button>
                        <button style="background: none; border: none; cursor: pointer; font-size: 1rem;" onclick="toggleFoodWishlist(null, ${food.id})">❌</button>
                    </div>
                </div>
            `;
        }
    });
    container.innerHTML = html;
}

// ==========================================
// ACCOUNT & ORDER HISTORY
// ==========================================
function renderAccountSection() {
    const userInfoBlock = document.getElementById('userInfoBlock');
    const savedAddressContent = document.getElementById('savedAddressContent');
    const orderHistoryContent = document.getElementById('orderHistoryContent');

    if (userInfoBlock) {
        if (currentUser.isLoggedIn) {
            userInfoBlock.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3 class="account-block-title">${currentUser.name}</h3>
                        <p class="account-block-sub">${currentUser.email} • ${currentUser.phone}</p>
                    </div>
                    <button class="btn-secondary" onclick="handleLogout()" style="padding: 4px 10px; font-size: 0.8rem;">Logout</button>
                </div>
            `;
        } else {
            userInfoBlock.innerHTML = `
                <h3 class="account-block-title">Guest User</h3>
                <p class="account-block-sub">Login to view account details</p>
            `;
        }
    }

    if (savedAddressContent) {
        if (currentUser.isLoggedIn && currentUser.addresses.length > 0) {
            let addrHtml = '<ul style="list-style: none; padding: 0;">';
            currentUser.addresses.forEach(a => {
                addrHtml += `<li style="font-size: 0.95rem; color: var(--text-dark); margin-bottom: 4px;">📍 ${a}</li>`;
            });
            addrHtml += '</ul>';
            savedAddressContent.innerHTML = addrHtml;
        } else {
            savedAddressContent.innerHTML = `<p class="account-block-sub">No saved address</p>`;
        }
    }

    if (orderHistoryContent) {
        if (currentUser.isLoggedIn && orderHistory.length > 0) {
            let ordHtml = '';
            orderHistory.forEach(ord => {
                const statusStep = getStatusStepIndex(ord.status);
                ordHtml += `
                    <div style="padding: 12px 0; border-bottom: 1px dashed #eee;">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size: 0.85rem; color: #888;">${ord.id} • ${ord.date}</span>
                            <span style="font-size: 0.8rem; background:#e0f7fa; color:#00838f; padding:2px 8px; border-radius:12px; font-weight:bold;">${ord.deliverySlot || 'ASAP'}</span>
                        </div>
                        <div style="font-size: 0.9rem; color: #333; margin: 4px 0;">${ord.items}</div>
                        <div style="font-size: 0.9rem; font-weight: bold; color: var(--primary-orange);">₹${ord.total.toFixed(2)} (${ord.status})</div>
                        
                        <div style="margin-top: 10px; background: #f9f9f9; padding: 8px; border-radius: 6px;">
                            <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 6px;">Order Progress:</div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; text-align: center;">
                                <span style="color: ${statusStep >= 1 ? '#2e7d32' : '#aaa'}; font-weight: ${statusStep === 1 ? 'bold' : 'normal'};">1. Received</span>
                                <span style="color: ${statusStep >= 2 ? '#2e7d32' : '#aaa'}; font-weight: ${statusStep === 2 ? 'bold' : 'normal'};">2. Preparing</span>
                                <span style="color: ${statusStep >= 3 ? '#2e7d32' : '#aaa'}; font-weight: ${statusStep === 3 ? 'bold' : 'normal'};">3. Out for Delivery</span>
                                <span style="color: ${statusStep >= 4 ? '#2e7d32' : '#aaa'}; font-weight: ${statusStep === 4 ? 'bold' : 'normal'};">4. Delivered</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            orderHistoryContent.innerHTML = ordHtml;
        } else {
            orderHistoryContent.innerHTML = `<p class="account-block-sub">No orders yet</p>`;
        }
    }
}

function getStatusStepIndex(status) {
    switch (status) {
        case "Order Received": return 1;
        case "Preparing Food": return 2;
        case "Out for Delivery": return 3;
        case "Delivered": return 4;
        default: return 1;
    }
}

function openLoginModal() { 
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.add('active'); 
}
function closeLoginModal() { 
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.remove('active'); 
}

function handleLogin(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const username = usernameInput ? usernameInput.value : "John Doe";
    currentUser.isLoggedIn = true;
    currentUser.name = username || "John Doe";
    currentUser.addresses = ["MG Road, Hampankatta, Mangalore, KA"];

    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) loginBtn.style.display = 'none';
    closeLoginModal();
    renderAccountSection();
}

function handleLogout() {
    currentUser.isLoggedIn = false;
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) loginBtn.style.display = 'inline-block';
    renderAccountSection();
}

// ==========================================
// CART & CHECKOUT
// ==========================================
function addToCart(itemId) {
    const existing = cart.find(item => item.id === itemId);
    if (existing) {
        existing.quantity += 1;
    } else {
        const product = foodItems.find(item => item.id === itemId);
        if (product) cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function updateQuantity(itemId, change) {
    const idx = cart.findIndex(item => item.id === itemId);
    if (idx > -1) {
        cart[idx].quantity += change;
        if (cart[idx].quantity <= 0) cart.splice(idx, 1);
    }
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cartContainer');
    const cartBadge = document.getElementById('cartCount');
    const checkoutTotal = document.getElementById('checkoutTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const originalTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = (originalTotal * DISCOUNT_PERCENT) / 100;
    const finalTotal = originalTotal - discountAmount;

    if (cartBadge) cartBadge.textContent = totalItems;
    if (checkoutTotal) checkoutTotal.textContent = `₹${finalTotal.toFixed(2)}`;

    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
        <p style="text-align:center;color:#777;padding:20px;">
        Your cart is empty. Add some delicious food!
        </p>`;
        return;
    }

    let cartHTML = '';

    cart.forEach(item => {
        cartHTML += `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <div style="font-size:0.85rem;color:#666;">
                    ₹${item.price.toFixed(2)} x ${item.quantity}
                </div>
            </div>
            <div class="cart-controls">
                <button class="cart-btn-qty" onclick="updateQuantity(${item.id},-1)">-</button>
                <span style="margin: 0 6px;">${item.quantity}</span>
                <button class="cart-btn-qty" onclick="updateQuantity(${item.id},1)">+</button>
                <span style="font-weight:bold; margin-left:10px; width:70px; text-align:right;">
                    ₹${(item.price * item.quantity).toFixed(2)}
                </span>
            </div>
        </div>
        `;
    });

    cartHTML += `
    <div class="delivery-time-picker" style="margin-top: 15px; padding: 10px; background: #fff3e0; border-radius: 6px;">
        <label for="deliveryTimeSlot" style="font-weight: bold; font-size: 0.9rem; display: block; margin-bottom: 5px;">
            🕒 Select Delivery Time:
        </label>
        <select id="deliveryTimeSlot" style="width: 100%; padding: 8px; border-radius: 4px; border: 1px solid #ccc;">
            <option value="ASAP (20-35 min)">ASAP (20-35 mins)</option>
            <option value="Today: 1:00 PM - 1:30 PM">Today: 1:00 PM - 1:30 PM</option>
            <option value="Today: 2:00 PM - 2:30 PM">Today: 2:00 PM - 2:30 PM</option>
            <option value="Today: 7:00 PM - 7:30 PM">Today: 7:00 PM - 7:30 PM</option>
            <option value="Today: 8:00 PM - 8:30 PM">Today: 8:00 PM - 8:30 PM</option>
        </select>
    </div>

    <div class="cart-summary" style="margin-top: 15px;">
        <p>Subtotal: ₹${originalTotal.toFixed(2)}</p>
        <p style="color:green;">Discount (25%): -₹${discountAmount.toFixed(2)}</p>
        <h3 style="margin-top: 5px;">Final Total: ₹${finalTotal.toFixed(2)}</h3>
    </div>
    `;

    cartContainer.innerHTML = cartHTML;
}

function handleCheckout(event) {
    event.preventDefault();
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const nameInput = document.getElementById('fullName');
    const addrInput = document.getElementById('address');
    const deliverySlotSelect = document.getElementById('deliveryTimeSlot');

    const name = nameInput ? nameInput.value : "Guest";
    const addr = addrInput ? addrInput.value : "Default Address";
    const selectedSlot = deliverySlotSelect ? deliverySlotSelect.value : "ASAP";

    const originalTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = (originalTotal * DISCOUNT_PERCENT) / 100;
    const totalPrice = originalTotal - discountAmount;
    const itemSummary = cart.map(i => `${i.quantity}x ${i.name}`).join(', ');

    const newOrder = {
        id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toISOString().split('T')[0],
        items: itemSummary,
        total: totalPrice,
        deliverySlot: selectedSlot,
        status: "Order Received"
    };

    orderHistory.unshift(newOrder);

    if (!currentUser.addresses.includes(addr)) {
        currentUser.addresses.push(addr);
    }

    alert(`Thank you for your order, ${name}!\nYour food is scheduled for delivery in Mangalore: ${selectedSlot}`);
    
    startOrderTrackingSimulation(newOrder.id);

    cart = [];
    renderCart();
    renderAccountSection();
    
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) checkoutForm.reset();
}

// ==========================================
// SIMULATED ORDER TRACKING ENGINE
// ==========================================
function startOrderTrackingSimulation(orderId) {
    const statuses = ["Order Received", "Preparing Food", "Out for Delivery", "Delivered"];
    let currentIdx = 0;

    const interval = setInterval(() => {
        currentIdx++;
        const targetOrder = orderHistory.find(o => o.id === orderId);
        if (targetOrder && currentIdx < statuses.length) {
            targetOrder.status = statuses[currentIdx];
            renderAccountSection();
        } else {
            clearInterval(interval);
        }
    }, 8000); 
}

// ==========================================
// PRODUCT MODAL
// ==========================================
function openProductModal(itemId) {
    const item = foodItems.find(f => f.id === itemId);
    if (!item) return;

    const modalBody = document.getElementById('productModalBody');
    const restaurantObj = restaurants.find(r => r.id === item.restaurantId);

    if (!modalBody) return;

    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <img src="${item.img}" alt="${item.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
            <div>
                <span class="food-restaurant-name">${restaurantObj ? restaurantObj.name : ''}</span>
                <h2 style="margin: 5px 0;">${item.name}</h2>
                <p class="food-price" style="color: var(--primary-orange); margin-bottom: 10px;">₹${item.price.toFixed(2)}</p>
                <p style="color: #555; font-size: 0.95rem; margin-bottom: 10px;">${item.desc}</p>
                <div style="margin-bottom: 15px; font-size: 0.85rem; color: #444;">
                    <strong>Ingredients:</strong> ${item.ingredients.join(', ')}
                </div>
                <button class="btn-primary" style="width: 100%;" onclick="addToCart(${item.id}); closeProductModal();">Add To Order</button>
            </div>
        </div>
    `;

    const productModal = document.getElementById('productModal');
    if (productModal) productModal.classList.add('active');
}

function closeProductModal() {
    const productModal = document.getElementById('productModal');
    if (productModal) productModal.classList.remove('active');
}

// ==========================================
// ABOUT US SECTION
// ==========================================
function renderAboutUsSection() {
    const container = document.getElementById('aboutUsContainer');
    if (!container) return;

    let teamHtml = aboutUsData.team.map(member => `
        <div style="text-align: center; padding: 12px; background: #f9f9f9; border-radius: 8px;">
            <div style="font-size: 2.5rem;">${member.avatar}</div>
            <strong style="display:block; margin-top:5px; color:#333;">${member.name}</strong>
            <span style="font-size:0.8rem; color:#666;">${member.role}</span>
        </div>
    `).join('');

    let awardsHtml = aboutUsData.awards.map(award => `
        <li style="margin-bottom: 6px; font-size: 0.9rem; color: #444;">${award}</li>
    `).join('');

    let reviewsHtml = aboutUsData.builtInReviews.map(rev => `
        <div style="background: #fdfdfd; border: 1px solid #eee; padding: 12px; border-radius: 8px; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <strong style="font-size: 0.9rem; color: #333;">${rev.user}</strong>
                <span style="color: #f39c12; font-size: 0.85rem;">${'★'.repeat(rev.rating)}</span>
            </div>
            <p style="font-size: 0.85rem; color: #555; margin: 4px 0; font-style: italic;">"${rev.comment}"</p>
            <span style="font-size: 0.75rem; color: #aaa;">${rev.date}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div style="padding: 20px; line-height: 1.6;">
            <h2 style="color: #222; margin-bottom: 8px;">About Us</h2>
            <p style="color: #555; margin-bottom: 20px;">${aboutUsData.story}</p>
            
            <h3 style="color: #222; margin-top: 15px;">Leadership & Culinary Team</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 15px 0;">
                ${teamHtml}
            </div>

            <h3 style="color: #222; margin-top: 20px;">Awards & Recognitions</h3>
            <ul style="list-style: none; padding: 0; margin-top: 10px;">
                ${awardsHtml}
            </ul>

            <h3 style="color: #222; margin-top: 25px;">What Our Customers Say</h3>
            <div style="margin-top: 10px;">
                ${reviewsHtml}
            </div>
        </div>
    `;
}

// ==========================================
// CONTACT US SECTION
// ==========================================
function renderContactUsSection() {
    const container = document.getElementById('contactUsContainer');
    if (!container) return;

    container.innerHTML = `
        <div style="padding: 20px;">
            <h2 style="color: #222;">Contact Us</h2>
            <div style="margin-top: 12px; font-size: 0.95rem; line-height: 1.8;">
                <p>📍 <strong>Location:</strong> ${contactInfoData.address}</p>
                <p>📞 <strong>Phone:</strong> ${contactInfoData.phone}</p>
                <p>✉️ <strong>Email:</strong> ${contactInfoData.email}</p>
                <p>🕒 <strong>Hours:</strong> ${contactInfoData.hours}</p>
            </div>

            <form id="contactForm" onsubmit="handleContactSubmit(event)" style="margin-top: 20px; max-width: 500px;">
                <h3 style="margin-bottom: 8px;">Send Us a Message</h3>
                <input type="text" id="contactName" placeholder="Your Name" required style="width:100%; padding:8px; margin:5px 0; border:1px solid #ccc; border-radius:4px;">
                <input type="email" id="contactEmail" placeholder="Your Email" required style="width:100%; padding:8px; margin:5px 0; border:1px solid #ccc; border-radius:4px;">
                <textarea id="contactMessage" placeholder="Your Message" rows="3" required style="width:100%; padding:8px; margin:5px 0; border:1px solid #ccc; border-radius:4px;"></textarea>
                <button class="btn-primary" type="submit" style="margin-top:5px;">Send Message</button>
            </form>
        </div>
    `;
}

function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contactName').value;
    alert(`Thank you ${name}! Your message has been sent to our Mangalore support team.`);
    document.getElementById('contactForm').reset();
}

// ==========================================
// UTILS
// ==========================================
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}
