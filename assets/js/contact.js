// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact page
    initializeContactPage();
});

function initializeContactPage() {
    // Initialize language toggle (from main script)
    initLanguageToggle();
    
    // Initialize form validation
    initializeFormValidation();
    
    // Initialize counter animation for statistics (if exists)
    initCounters();
    
    // Initialize WOW.js
    new WOW().init();
}

function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
    }
}

function handleFormSubmission(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const form = event.target;
    const isValid = validateForm(form);
    
    if (isValid) {
        submitForm(form);
    }
    
    form.classList.add('was-validated');
}

function validateForm(form) {
    let isValid = true;
    
    // Get all required fields
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(event) {
    const field = event.target;
    const fieldType = field.type;
    const fieldValue = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && !fieldValue) {
        isValid = false;
        errorMessage = getErrorMessage(field, 'required');
    }
    // Validate email format
    else if (fieldType === 'email' && fieldValue) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fieldValue)) {
            isValid = false;
            errorMessage = getErrorMessage(field, 'email');
        }
    }
    // Validate phone format (optional)
    else if (fieldType === 'tel' && fieldValue) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(fieldValue)) {
            isValid = false;
            errorMessage = getErrorMessage(field, 'phone');
        }
    }
    // Validate message length
    else if (field.tagName === 'TEXTAREA' && fieldValue && fieldValue.length < 10) {
        isValid = false;
        errorMessage = getErrorMessage(field, 'minlength');
    }
    
    // Update field validation state
    updateFieldValidation(field, isValid, errorMessage);
    
    return isValid;
}

function getErrorMessage(field, type) {
    const currentLang = document.documentElement.lang || 'ar';
    
    const messages = {
        ar: {
            required: 'هذا الحقل مطلوب',
            email: 'يرجى إدخال بريد إلكتروني صحيح',
            phone: 'يرجى إدخال رقم هاتف صحيح',
            minlength: 'الرسالة قصيرة جداً (10 أحرف على الأقل)'
        },
        en: {
            required: 'This field is required',
            email: 'Please enter a valid email address',
            phone: 'Please enter a valid phone number',
            minlength: 'Message is too short (at least 10 characters)'
        }
    };
    
    return messages[currentLang][type] || messages.ar[type];
}

function updateFieldValidation(field, isValid, errorMessage) {
    const feedbackElement = field.parentNode.querySelector('.invalid-feedback');
    
    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
        
        if (feedbackElement && errorMessage) {
            feedbackElement.textContent = errorMessage;
        }
    }
}

function clearFieldError(event) {
    const field = event.target;
    if (field.classList.contains('is-invalid') && field.value.trim()) {
        field.classList.remove('is-invalid');
    }
}

function submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `
        <div class="spinner-border spinner-border-sm me-2" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <span data-ar="جاري الإرسال..." data-en="Sending...">جاري الإرسال...</span>
    `;
    
    // Collect form data
    const formData = new FormData(form);
    const data = {
        firstName: formData.get('firstName') || form.querySelector('#firstName').value,
        lastName: formData.get('lastName') || form.querySelector('#lastName').value,
        email: formData.get('email') || form.querySelector('#email').value,
        phone: formData.get('phone') || form.querySelector('#phone').value,
        subject: formData.get('subject') || form.querySelector('#subject').value,
        message: formData.get('message') || form.querySelector('#message').value,
        timestamp: new Date().toISOString()
    };
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Simulate success
        handleFormSuccess(form, submitButton, originalButtonContent);
        
        // Log form data (for development)
        console.log('Form submitted:', data);
    }, 2000);
}

function handleFormSuccess(form, submitButton, originalButtonContent) {
    // Reset form
    form.reset();
    form.classList.remove('was-validated');
    
    // Clear validation classes
    const fields = form.querySelectorAll('.is-valid, .is-invalid');
    fields.forEach(field => {
        field.classList.remove('is-valid', 'is-invalid');
    });
    
    // Reset button
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonContent;
    
    // Show success message
    const currentLang = document.documentElement.lang || 'ar';
    const successMessage = currentLang === 'ar' 
        ? 'تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريباً.' 
        : 'Your message has been sent successfully! We will reply to you soon.';
    
    showToast(successMessage, 'success');
    
    // Scroll to top of form
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleFormError(submitButton, originalButtonContent, errorMessage) {
    // Reset button
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonContent;
    
    // Show error message
    showToast(errorMessage, 'error');
}

// Initialize counter animation for statistics
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length === 0) return;
    
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
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Show toast notification (if not available from main script)
function showToast(message, type = 'success') {
    // Check if showToast exists in global scope
    if (window.FoodCompany && typeof window.FoodCompany.showToast === 'function') {
        window.FoodCompany.showToast(message, type);
        return;
    }
    
    // Fallback implementation
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
        max-width: 300px;
        word-wrap: break-word;
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
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 5000);
}

// Language toggle function (if not available from main script)
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    let currentLang = 'ar';
    
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            switchLanguage(currentLang);
            
            // Update button text
            langText.textContent = currentLang === 'ar' ? 'English' : 'العربية';
            
            // Update document direction and language
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        });
    }
}

// Switch language function (if not available from main script)
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-ar][data-en]');
    
    elements.forEach(element => {
        const text = lang === 'ar' ? element.getAttribute('data-ar') : element.getAttribute('data-en');
        
        // Handle different element types
        if (element.tagName === 'OPTION') {
            element.textContent = text;
        } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // Skip input elements as they are handled separately
            return;
        } else {
            element.textContent = text;
        }
    });
    
    // Update placeholder texts
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
    
    // Update select options
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        const options = select.querySelectorAll('option[data-ar][data-en]');
        options.forEach(option => {
            const text = lang === 'ar' ? option.getAttribute('data-ar') : option.getAttribute('data-en');
            option.textContent = text;
        });
    });
}

// Contact page specific utilities
function openWhatsApp(phone, message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const currentLang = document.documentElement.lang || 'ar';
        const message = currentLang === 'ar' ? 'تم نسخ النص' : 'Text copied';
        showToast(message, 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const currentLang = document.documentElement.lang || 'ar';
        const message = currentLang === 'ar' ? 'تم نسخ النص' : 'Text copied';
        showToast(message, 'success');
    });
}

// Export functions for global use
window.ContactPage = {
    openWhatsApp,
    copyToClipboard,
    showToast
};

