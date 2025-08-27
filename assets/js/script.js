// Main JavaScript for Food Company Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize WOW.js for animations
    new WOW().init();
    
    // Language switching functionality
    initLanguageToggle();
    
    // Load featured products
    loadFeaturedProducts();
    
    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize navbar scroll effect
    initNavbarScrollEffect();
    
    // Initialize lazy loading for images
    initLazyLoading();
});

// Language Toggle Functionality
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    let currentLang = 'ar';
    
    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        switchLanguage(currentLang);
        
        // Update button text
        langText.textContent = currentLang === 'ar' ? 'English' : 'العربية';
        
        // Update document direction and language
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // Add animation effect
        langToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            langToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// Switch Language Function
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-ar][data-en]');
    
    elements.forEach(element => {
        const text = lang === 'ar' ? element.getAttribute('data-ar') : element.getAttribute('data-en');
        
        // Add fade effect
        element.style.opacity = '0.5';
        
        setTimeout(() => {
            element.textContent = text;
            element.style.opacity = '1';
        }, 150);
    });
    
    // Update placeholder texts for forms
    const inputs = document.querySelectorAll('input[data-ar-placeholder][data-en-placeholder]');
    inputs.forEach(input => {
        const placeholder = lang === 'ar' ? input.getAttribute('data-ar-placeholder') : input.getAttribute('data-en-placeholder');
        input.placeholder = placeholder;
    });
    
    // Update textarea placeholders
    const textareas = document.querySelectorAll('textarea[data-ar-placeholder][data-en-placeholder]');
    textareas.forEach(textarea => {
        const placeholder = lang === 'ar' ? textarea.getAttribute('data-ar-placeholder') : textarea.getAttribute('data-en-placeholder');
        textarea.placeholder = placeholder;
    });
}

// Featured Products Data
const featuredProducts = [
    {
        id: 1,
        nameAr: 'رقائق البطاطس الطبيعية',
        nameEn: 'Natural Potato Chips',
        categoryAr: 'رقائق ومقرمشات',
        categoryEn: 'Chips & Snacks',
        descriptionAr: 'رقائق بطاطس طبيعية مقرمشة بنكهات متنوعة',
        descriptionEn: 'Crispy natural potato chips with various flavors',
        image: 'assets/images/chips-packaging.jpg'
    },
    {
        id: 2,
        nameAr: 'المكسرات المحمصة',
        nameEn: 'Roasted Nuts',
        categoryAr: 'مكسرات وبذور',
        categoryEn: 'Nuts & Seeds',
        descriptionAr: 'تشكيلة من المكسرات المحمصة الطازجة',
        descriptionEn: 'A variety of fresh roasted nuts',
        image: 'assets/images/nuts-dried-fruits.jpg'
    },
    {
        id: 3,
        nameAr: 'الفواكه المجففة',
        nameEn: 'Dried Fruits',
        categoryAr: 'فواكه مجففة',
        categoryEn: 'Dried Fruits',
        descriptionAr: 'فواكه مجففة طبيعية بدون إضافات',
        descriptionEn: 'Natural dried fruits without additives',
        image: 'assets/images/nuts-dried-fruits.jpg'
    },
    {
        id: 4,
        nameAr: 'البسكويت الصحي',
        nameEn: 'Healthy Biscuits',
        categoryAr: 'المخبوزات',
        categoryEn: 'Bakery Products',
        descriptionAr: 'بسكويت صحي مصنوع من الحبوب الكاملة',
        descriptionEn: 'Healthy biscuits made from whole grains',
        image: 'assets/images/hero-healthy-foods.jpg'
    },
    {
        id: 5,
        nameAr: 'المربيات الطبيعية',
        nameEn: 'Natural Jams',
        categoryAr: 'المربيات والعسل',
        categoryEn: 'Jams & Honey',
        descriptionAr: 'مربيات طبيعية من أجود الفواكه',
        descriptionEn: 'Natural jams from the finest fruits',
        image: 'assets/images/honey-jam.png'
    },
    {
        id: 6,
        nameAr: 'العسل الطبيعي',
        nameEn: 'Natural Honey',
        categoryAr: 'المربيات والعسل',
        categoryEn: 'Jams & Honey',
        descriptionAr: 'عسل طبيعي خالص من المناحل المحلية',
        descriptionEn: 'Pure natural honey from local apiaries',
        image: 'assets/images/honey-jam.png'
    },
    {
        id: 7,
        nameAr: 'التوابل والبهارات',
        nameEn: 'Spices & Seasonings',
        categoryAr: 'التوابل والبهارات',
        categoryEn: 'Spices & Seasonings',
        descriptionAr: 'تشكيلة واسعة من التوابل الطبيعية',
        descriptionEn: 'Wide variety of natural spices',
        image: 'assets/images/hero-healthy-foods.jpg'
    },
    {
        id: 8,
        nameAr: 'الحبوب الكاملة',
        nameEn: 'Whole Grains',
        categoryAr: 'منتجات الحبوب',
        categoryEn: 'Grain Products',
        descriptionAr: 'حبوب كاملة غنية بالفيتامينات',
        descriptionEn: 'Whole grains rich in vitamins',
        image: 'assets/images/nuts-dried-fruits.jpg'
    },
    {
        id: 9,
        nameAr: 'المعجنات الطازجة',
        nameEn: 'Fresh Pastries',
        categoryAr: 'المخبوزات',
        categoryEn: 'Bakery Products',
        descriptionAr: 'معجنات طازجة يومياً بوصفات تقليدية',
        descriptionEn: 'Fresh daily pastries with traditional recipes',
        image: 'assets/images/hero-healthy-foods.jpg'
    },
    {
        id: 10,
        nameAr: 'المشروبات الطبيعية',
        nameEn: 'Natural Beverages',
        categoryAr: 'المشروبات',
        categoryEn: 'Beverages',
        descriptionAr: 'مشروبات طبيعية منعشة وصحية',
        descriptionEn: 'Refreshing and healthy natural beverages',
        image: 'assets/images/hero-healthy-foods.jpg'
    }
];

// Load Featured Products
function loadFeaturedProducts() {
    const container = document.getElementById('productsContainer');
    if (!container) return;
    
    // Show loading
    container.innerHTML = '<div class="col-12 text-center"><div class="loading"></div></div>';
    
    // Simulate loading delay
    setTimeout(() => {
        container.innerHTML = '';
        
        featuredProducts.forEach((product, index) => {
            const productCard = createProductCard(product, index);
            container.appendChild(productCard);
        });
        
        // Re-initialize WOW.js for new elements
        new WOW().init();
    }, 1000);
}

// Create Product Card
function createProductCard(product, index) {
    const col = document.createElement('div');
    col.className = `col-lg-4 col-md-6 mb-4 wow fadeInUp`;
    col.setAttribute('data-wow-delay', `${index * 0.1}s`);
    
    col.innerHTML = `
        <div class="product-card h-100 shadow-sm" onclick="viewProduct(${product.id})">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-content">
                <span class="product-category" data-ar="${product.categoryAr}" data-en="${product.categoryEn}">${product.categoryAr}</span>
                <h5 class="product-title" data-ar="${product.nameAr}" data-en="${product.nameEn}">${product.nameAr}</h5>
                <p class="product-description" data-ar="${product.descriptionAr}" data-en="${product.descriptionEn}">${product.descriptionAr}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <button class="btn btn-outline-danger btn-sm" data-ar="عرض التفاصيل" data-en="View Details">عرض التفاصيل</button>
                    <div class="product-rating">
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// View Product Function
function viewProduct(productId) {
    // Add click animation
    event.currentTarget.style.transform = 'scale(0.98)';
    setTimeout(() => {
        event.currentTarget.style.transform = '';
    }, 150);
    
    // Navigate to product detail page
    setTimeout(() => {
        window.location.href = `pages/product-detail.html?id=${productId}`;
    }, 200);
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(this);
            }
        });
    });
}

// Update Active Navigation Link
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    activeLink.classList.add('active');
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(252, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fc0000';
            navbar.style.backdropFilter = 'none';
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Utility Functions

// Show Loading
function showLoading(element) {
    element.innerHTML = '<div class="text-center"><div class="loading"></div></div>';
}

// Hide Loading
function hideLoading(element) {
    element.innerHTML = '';
}

// Show Toast Notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
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
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide toast
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Format Number with Commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Debounce Function
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

// Throttle Function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add to Cart Animation (for future use)
function addToCartAnimation(button) {
    const cart = document.querySelector('.cart-icon');
    if (!cart) return;
    
    const productRect = button.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();
    
    const flyingProduct = document.createElement('div');
    flyingProduct.style.cssText = `
        position: fixed;
        top: ${productRect.top}px;
        left: ${productRect.left}px;
        width: 20px;
        height: 20px;
        background: #fc0000;
        border-radius: 50%;
        z-index: 1000;
        pointer-events: none;
        transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
    `;
    
    document.body.appendChild(flyingProduct);
    
    setTimeout(() => {
        flyingProduct.style.top = cartRect.top + 'px';
        flyingProduct.style.left = cartRect.left + 'px';
        flyingProduct.style.transform = 'scale(0)';
        flyingProduct.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        document.body.removeChild(flyingProduct);
        cart.style.animation = 'bounce 0.5s ease';
        setTimeout(() => {
            cart.style.animation = '';
        }, 500);
    }, 900);
}

// Initialize Parallax Effect
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    }, 10));
}

// Initialize Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Export functions for use in other files
window.FoodCompany = {
    switchLanguage,
    viewProduct,
    showToast,
    formatNumber,
    debounce,
    throttle,
    addToCartAnimation
};

