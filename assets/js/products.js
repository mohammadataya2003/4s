// Products Page JavaScript

// Extended products data with more items
const allProducts = [
  // Chips & Snacks
  {
    id: 1,
    nameAr: "رقائق البطاطس الطبيعية",
    nameEn: "Natural Potato Chips",
    categoryAr: "رقائق ومقرمشات",
    categoryEn: "Chips & Snacks",
    category: "chips",
    descriptionAr: "رقائق بطاطس طبيعية مقرمشة بنكهات متنوعة",
    descriptionEn: "Crispy natural potato chips with various flavors",
    image: "../assets/images/tomato.jpg",
    price: 25,
    rating: 4.8,
  },
  {
    id: 2,
    nameAr: "رقائق الذرة المحمصة",
    nameEn: "Roasted Corn Chips",
    categoryAr: "رقائق ومقرمشات",
    categoryEn: "Chips & Snacks",
    category: "chips",
    descriptionAr: "رقائق ذرة محمصة بطعم طبيعي لذيذ",
    descriptionEn: "Roasted corn chips with delicious natural taste",
    image: "../assets/images/tomato.jpg",
    price: 20,
    rating: 4.6,
  },
  {
    id: 3,
    nameAr: "مقرمشات الخضار",
    nameEn: "Vegetable Crisps",
    categoryAr: "رقائق ومقرمشات",
    categoryEn: "Chips & Snacks",
    category: "chips",
    descriptionAr: "مقرمشات من خضار طبيعية متنوعة",
    descriptionEn: "Crisps made from various natural vegetables",
    image: "../assets/images/tomato.jpg",
    price: 30,
    rating: 4.7,
  },

  // Nuts & Seeds
  {
    id: 4,
    nameAr: "المكسرات المحمصة",
    nameEn: "Roasted Nuts",
    categoryAr: "مكسرات وبذور",
    categoryEn: "Nuts & Seeds",
    category: "nuts",
    descriptionAr: "تشكيلة من المكسرات المحمصة الطازجة",
    descriptionEn: "A variety of fresh roasted nuts",
    image: "../assets/images/tomato.jpg",
    price: 45,
    rating: 4.9,
  },
  {
    id: 5,
    nameAr: "اللوز المحمص",
    nameEn: "Roasted Almonds",
    categoryAr: "مكسرات وبذور",
    categoryEn: "Nuts & Seeds",
    category: "nuts",
    descriptionAr: "لوز محمص طبيعي بدون إضافات",
    descriptionEn: "Natural roasted almonds without additives",
    image: "../assets/images/tomato.jpg",
    price: 55,
    rating: 4.8,
  },
  {
    id: 6,
    nameAr: "الجوز الطبيعي",
    nameEn: "Natural Walnuts",
    categoryAr: "مكسرات وبذور",
    categoryEn: "Nuts & Seeds",
    category: "nuts",
    descriptionAr: "جوز طبيعي طازج غني بالفيتامينات",
    descriptionEn: "Fresh natural walnuts rich in vitamins",
    image: "../assets/images/tomato.jpg",
    price: 60,
    rating: 4.7,
  },

  // Dried Fruits
  {
    id: 7,
    nameAr: "الفواكه المجففة",
    nameEn: "Dried Fruits",
    categoryAr: "فواكه مجففة",
    categoryEn: "Dried Fruits",
    category: "fruits",
    descriptionAr: "فواكه مجففة طبيعية بدون إضافات",
    descriptionEn: "Natural dried fruits without additives",
    image: "../assets/images/tomato.jpg",
    price: 35,
    rating: 4.6,
  },
  {
    id: 8,
    nameAr: "التمر الطبيعي",
    nameEn: "Natural Dates",
    categoryAr: "فواكه مجففة",
    categoryEn: "Dried Fruits",
    category: "fruits",
    descriptionAr: "تمر طبيعي طازج من أجود الأنواع",
    descriptionEn: "Fresh natural dates from the finest varieties",
    image: "../assets/images/tomato.jpg",
    price: 40,
    rating: 4.9,
  },
  {
    id: 9,
    nameAr: "الزبيب الذهبي",
    nameEn: "Golden Raisins",
    categoryAr: "فواكه مجففة",
    categoryEn: "Dried Fruits",
    category: "fruits",
    descriptionAr: "زبيب ذهبي طبيعي حلو المذاق",
    descriptionEn: "Natural golden raisins with sweet taste",
    image: "../assets/images/tomato.jpg",
    price: 30,
    rating: 4.5,
  },

  // Bakery Products
  {
    id: 10,
    nameAr: "البسكويت الصحي",
    nameEn: "Healthy Biscuits",
    categoryAr: "المخبوزات",
    categoryEn: "Bakery Products",
    category: "bakery",
    descriptionAr: "بسكويت صحي مصنوع من الحبوب الكاملة",
    descriptionEn: "Healthy biscuits made from whole grains",
    image: "../assets/images/tomato.jpg",
    price: 18,
    rating: 4.4,
  },
  {
    id: 11,
    nameAr: "الكعك الطبيعي",
    nameEn: "Natural Cakes",
    categoryAr: "المخبوزات",
    categoryEn: "Bakery Products",
    category: "bakery",
    descriptionAr: "كعك طبيعي بنكهات متنوعة",
    descriptionEn: "Natural cakes with various flavors",
    image: "../assets/images/tomato.jpg",
    price: 25,
    rating: 4.6,
  },
  {
    id: 12,
    nameAr: "الخبز الكامل",
    nameEn: "Whole Grain Bread",
    categoryAr: "المخبوزات",
    categoryEn: "Bakery Products",
    category: "bakery",
    descriptionAr: "خبز من الحبوب الكاملة الطبيعية",
    descriptionEn: "Bread made from natural whole grains",
    image: "../assets/images/tomato.jpg",
    price: 15,
    rating: 4.3,
  },

  // Jams & Honey
  {
    id: 13,
    nameAr: "المربيات الطبيعية",
    nameEn: "Natural Jams",
    categoryAr: "المربيات والعسل",
    categoryEn: "Jams & Honey",
    category: "honey",
    descriptionAr: "مربيات طبيعية من أجود الفواكه",
    descriptionEn: "Natural jams from the finest fruits",
    image: "../assets/images/tomato.jpg",
    price: 22,
    rating: 4.7,
  },
  {
    id: 14,
    nameAr: "العسل الطبيعي",
    nameEn: "Natural Honey",
    categoryAr: "المربيات والعسل",
    categoryEn: "Jams & Honey",
    category: "honey",
    descriptionAr: "عسل طبيعي خالص من المناحل المحلية",
    descriptionEn: "Pure natural honey from local apiaries",
    image: "../assets/images/tomato.jpg",
    price: 50,
    rating: 4.9,
  },
  {
    id: 15,
    nameAr: "مربى الفراولة",
    nameEn: "Strawberry Jam",
    categoryAr: "المربيات والعسل",
    categoryEn: "Jams & Honey",
    category: "honey",
    descriptionAr: "مربى فراولة طبيعية بطعم لذيذ",
    descriptionEn: "Natural strawberry jam with delicious taste",
    image: "../assets/images/tomato.jpg",
    price: 25,
    rating: 4.6,
  },

  // Additional Products
  {
    id: 16,
    nameAr: "التوابل والبهارات",
    nameEn: "Spices & Seasonings",
    categoryAr: "التوابل والبهارات",
    categoryEn: "Spices & Seasonings",
    category: "spices",
    descriptionAr: "تشكيلة واسعة من التوابل الطبيعية",
    descriptionEn: "Wide variety of natural spices",
    image: "../assets/images/tomato.jpg",
    price: 12,
    rating: 4.5,
  },
  {
    id: 17,
    nameAr: "الحبوب الكاملة",
    nameEn: "Whole Grains",
    categoryAr: "منتجات الحبوب",
    categoryEn: "Grain Products",
    category: "grains",
    descriptionAr: "حبوب كاملة غنية بالفيتامينات",
    descriptionEn: "Whole grains rich in vitamins",
    image: "../assets/images/tomato.jpg",
    price: 28,
    rating: 4.4,
  },
  {
    id: 18,
    nameAr: "المشروبات الطبيعية",
    nameEn: "Natural Beverages",
    categoryAr: "المشروبات",
    categoryEn: "Beverages",
    category: "beverages",
    descriptionAr: "مشروبات طبيعية منعشة وصحية",
    descriptionEn: "Refreshing and healthy natural beverages",
    image: "../assets/images/tomato.jpg",
    price: 15,
    rating: 4.3,
  },
];

// Global variables
let filteredProducts = [...allProducts];
let currentPage = 1;
const productsPerPage = 9;
let currentCategory = "all";
let currentSort = "name";
let searchQuery = "";

// Initialize products page
document.addEventListener("DOMContentLoaded", function () {
  initializeProductsPage();
});

function initializeProductsPage() {
  // Initialize language toggle (from main script)
  initLanguageToggle();

  // Load initial products
  loadProducts();

  // Initialize event listeners
  initializeEventListeners();

  // Initialize WOW.js
  new WOW().init();
}

function initializeEventListeners() {
  // Search input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", debounce(handleSearch, 300));

  // Category filter buttons
  const filterButtons = document.querySelectorAll("[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", handleCategoryFilter);
  });

  // Sort select
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", handleSort);

  // Load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.addEventListener("click", loadMoreProducts);
}

function handleSearch(event) {
  searchQuery = event.target.value.toLowerCase().trim();
  currentPage = 1;
  filterAndDisplayProducts();
}

function handleCategoryFilter(event) {
  const category = event.target.getAttribute("data-category");

  // Update active button
  document.querySelectorAll("[data-category]").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  currentCategory = category;
  currentPage = 1;
  filterAndDisplayProducts();
}

function handleSort(event) {
  currentSort = event.target.value;
  filterAndDisplayProducts();
}

function filterAndDisplayProducts() {
  // Filter by category
  if (currentCategory === "all") {
    filteredProducts = [...allProducts];
  } else {
    filteredProducts = allProducts.filter(
      (product) => product.category === currentCategory
    );
  }

  // Filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.nameAr.toLowerCase().includes(searchQuery) ||
        product.nameEn.toLowerCase().includes(searchQuery) ||
        product.categoryAr.toLowerCase().includes(searchQuery) ||
        product.categoryEn.toLowerCase().includes(searchQuery) ||
        product.descriptionAr.toLowerCase().includes(searchQuery) ||
        product.descriptionEn.toLowerCase().includes(searchQuery)
    );
  }

  // Sort products
  sortProducts();

  // Update results count
  updateResultsCount();

  // Display products
  displayProducts();
}

function sortProducts() {
  switch (currentSort) {
    case "name":
      filteredProducts.sort((a, b) => a.nameAr.localeCompare(b.nameAr));
      break;
    case "category":
      filteredProducts.sort((a, b) => a.categoryAr.localeCompare(b.categoryAr));
      break;
    case "newest":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
  }
}

function updateResultsCount() {
  const resultsCount = document.getElementById("resultsCount");
  const count = filteredProducts.length;

  if (document.documentElement.lang === "ar") {
    resultsCount.textContent = `عرض ${count} منتج`;
  } else {
    resultsCount.textContent = `Showing ${count} products`;
  }
}

function displayProducts() {
  const productsGrid = document.getElementById("productsGrid");
  const noResults = document.getElementById("noResults");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = "";
    noResults.style.display = "block";
    loadMoreBtn.style.display = "none";
    return;
  }

  noResults.style.display = "none";

  // Calculate products to show
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = filteredProducts.slice(0, endIndex);

  // Clear grid if it's the first page
  if (currentPage === 1) {
    productsGrid.innerHTML = "";
  }

  // Add products to grid
  const newProducts = filteredProducts.slice(startIndex, endIndex);
  newProducts.forEach((product, index) => {
    const productCard = createProductCard(product, startIndex + index);
    productsGrid.appendChild(productCard);
  });

  // Show/hide load more button
  if (endIndex >= filteredProducts.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }

  // Re-initialize WOW.js for new elements
  new WOW().init();
}

function createProductCard(product, index) {
  const col = document.createElement("div");
  col.className = `col-lg-4 col-md-6 mb-4 wow fadeInUp`;
  col.setAttribute("data-wow-delay", `${(index % 9) * 0.1}s`);

  col.innerHTML = `
        <div class="product-card h-100 shadow-sm" onclick="viewProduct(${product.id})">
            <div class="product-image" style="background-image: url('${product.image}')">
                <div class="product-overlay">
                    <div class="product-actions">
                        <button class="btn btn-light btn-sm rounded-circle me-2" onclick="event.stopPropagation(); addToWishlist(${product.id})" title="Add to Wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn btn-light btn-sm rounded-circle" onclick="event.stopPropagation(); quickView(${product.id})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="product-content">
                <span class="product-category" data-ar="${product.categoryAr}" data-en="${product.categoryEn}">${product.categoryAr}</span>
                <h5 class="product-title" data-ar="${product.nameAr}" data-en="${product.nameEn}">${product.nameAr}</h5>
                <p class="product-description" data-ar="${product.descriptionAr}" data-en="${product.descriptionEn}">${product.descriptionAr}</p>
            </div>
        </div>
    `;

  return col;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star text-warning"></i>';
  }

  if (hasHalfStar) {
    starsHtml += '<i class="fas fa-star-half-alt text-warning"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="far fa-star text-warning"></i>';
  }

  return starsHtml;
}

function loadProducts() {
  currentPage = 1;
  filterAndDisplayProducts();
}

function loadMoreProducts() {
  currentPage++;
  displayProducts();

  // Smooth scroll to new products
  const newProductsStart =
    document.querySelectorAll("#productsGrid .col-lg-4").length -
    productsPerPage;
  if (newProductsStart > 0) {
    const targetElement = document.querySelectorAll("#productsGrid .col-lg-4")[
      newProductsStart
    ];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function viewProduct(productId) {
  // Add click animation
  event.currentTarget.style.transform = "scale(0.98)";
  setTimeout(() => {
    event.currentTarget.style.transform = "";
  }, 150);

  // Navigate to product detail page
  setTimeout(() => {
    window.location.href = `product-detail.html?id=${productId}`;
  }, 200);
}

function addToCart(productId) {
  const product = allProducts.find((p) => p.id === productId);
  if (product) {
    // Add to cart animation
    const button = event.target;
    const originalText = button.textContent;

    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-check"></i>';

      // Show success message
      if (document.documentElement.lang === "ar") {
        showToast("تم إضافة المنتج إلى السلة", "success");
      } else {
        showToast("Product added to cart", "success");
      }

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1000);
    }, 500);
  }
}

function addToWishlist(productId) {
  const product = allProducts.find((p) => p.id === productId);
  if (product) {
    const button = event.target;
    button.style.color = "#fc0000";

    if (document.documentElement.lang === "ar") {
      showToast("تم إضافة المنتج إلى المفضلة", "success");
    } else {
      showToast("Product added to wishlist", "success");
    }
  }
}

function quickView(productId) {
  const product = allProducts.find((p) => p.id === productId);
  if (product) {
    // Create and show modal (simplified version)
    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" data-ar="${product.nameAr}" data-en="${product.nameEn}">${product.nameAr}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${product.image}" alt="${product.nameAr}" class="img-fluid rounded">
                            </div>
                            <div class="col-md-6">
                                <span class="badge bg-danger mb-2" data-ar="${product.categoryAr}" data-en="${product.categoryEn}">${product.categoryAr}</span>
                                <p data-ar="${product.descriptionAr}" data-en="${product.descriptionEn}">${product.descriptionAr}</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();

    // Remove modal from DOM after hiding
    modal.addEventListener("hidden.bs.modal", () => {
      document.body.removeChild(modal);
    });
  }
}

function clearFilters() {
  // Reset all filters
  currentCategory = "all";
  currentSort = "name";
  searchQuery = "";
  currentPage = 1;

  // Reset UI
  document.getElementById("searchInput").value = "";
  document.getElementById("sortSelect").value = "name";

  // Reset active category button
  document.querySelectorAll("[data-category]").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelector('[data-category="all"]').classList.add("active");

  // Reload products
  filterAndDisplayProducts();
}

// Utility function for debouncing (if not available from main script)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Show toast notification (if not available from main script)
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast-notification toast-${type}`;
  toast.textContent = message;

  toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#28a745" : "#dc3545"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 1060;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => {
    toast.style.transform = "translateX(0)";
  }, 100);

  // Hide toast
  setTimeout(() => {
    toast.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// Language toggle function (if not available from main script)
function initLanguageToggle() {
  const langToggle = document.getElementById("langToggle");
  const langText = document.getElementById("langText");
  let currentLang = "ar";

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "ar" ? "en" : "ar";
      switchLanguage(currentLang);

      // Update button text
      langText.textContent = currentLang === "ar" ? "English" : "العربية";

      // Update document direction and language
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    });
  }
}

// Switch language function (if not available from main script)
function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-ar][data-en]");

  elements.forEach((element) => {
    const text =
      lang === "ar"
        ? element.getAttribute("data-ar")
        : element.getAttribute("data-en");
    element.textContent = text;
  });

  // Update placeholder texts
  const inputs = document.querySelectorAll(
    "input[data-ar-placeholder][data-en-placeholder]"
  );
  inputs.forEach((input) => {
    const placeholder =
      lang === "ar"
        ? input.getAttribute("data-ar-placeholder")
        : input.getAttribute("data-en-placeholder");
    input.placeholder = placeholder;
  });
}
