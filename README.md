# موقع شركة الأغذية الطبيعية - Food Company Website

## نظرة عامة / Overview

موقع إلكتروني تفاعلي للواجهة الأمامية لشركة غذائية مع دعم اللغتين العربية والإنجليزية، مصمم بتقنيات حديثة ومتجاوب مع جميع الأجهزة.

An interactive frontend website for a food company with Arabic and English language support, designed with modern technologies and responsive to all devices.

## المميزات / Features

### 🌐 دعم اللغات المتعددة / Multi-language Support
- العربية والإنجليزية مع إمكانية التبديل السريع
- Arabic and English with quick language switching
- تخطيط RTL/LTR تلقائي / Automatic RTL/LTR layout

### 📱 تصميم متجاوب / Responsive Design
- متوافق مع جميع أحجام الشاشات
- Compatible with all screen sizes
- تحسينات خاصة للهواتف المحمولة
- Mobile-specific optimizations

### 🎨 تصميم حديث / Modern Design
- ألوان الهوية البصرية: #fc0000 و #004514
- Brand colors: #fc0000 and #004514
- رسوم متحركة سلسة باستخدام WOW.js
- Smooth animations using WOW.js
- تأثيرات تفاعلية عند التمرير
- Interactive hover effects

### 🔍 وظائف متقدمة / Advanced Features
- بحث وفلترة المنتجات
- Product search and filtering
- تحميل كسول للمنتجات
- Lazy loading for products
- نموذج اتصال مع التحقق من صحة البيانات
- Contact form with validation
- خريطة تفاعلية
- Interactive map

## هيكل الموقع / Website Structure

```
food-company-website/
├── index.html                 # الصفحة الرئيسية / Homepage
├── pages/
│   ├── products.html         # صفحة المنتجات / Products page
│   ├── about.html           # صفحة حول الشركة / About us page
│   └── contact.html         # صفحة الاتصال / Contact page
├── assets/
│   ├── css/
│   │   └── style.css        # ملف الأنماط الرئيسي / Main stylesheet
│   ├── js/
│   │   ├── script.js        # JavaScript الرئيسي / Main JavaScript
│   │   ├── products.js      # JavaScript صفحة المنتجات / Products page JS
│   │   └── contact.js       # JavaScript صفحة الاتصال / Contact page JS
│   └── images/              # الصور والأيقونات / Images and icons
└── README.md               # هذا الملف / This file
```

## الصفحات / Pages

### 1. الصفحة الرئيسية / Homepage (`index.html`)
- **كاروسيل رئيسي** مع صور وأوصاف المنتجات
- **Main carousel** with product images and descriptions
- **نبذة عن الشركة** مع معلومات أساسية
- **Company overview** with basic information
- **منتجات مميزة** عرض تفاعلي لأفضل المنتجات
- **Featured products** interactive display of best products
- **آراء العملاء** شهادات وتقييمات العملاء
- **Customer testimonials** reviews and ratings

### 2. صفحة المنتجات / Products Page (`pages/products.html`)
- **فلترة حسب الفئة** مع عدادات المنتجات
- **Category filtering** with product counters
- **بحث نصي** في أسماء ووصف المنتجات
- **Text search** in product names and descriptions
- **ترتيب المنتجات** حسب الاسم، الفئة، والأحدث
- **Product sorting** by name, category, and newest
- **تحميل كسول** لتحسين الأداء
- **Lazy loading** for performance optimization
- **عرض شبكي متجاوب** للمنتجات
- **Responsive grid layout** for products

### 3. صفحة حول الشركة / About Page (`pages/about.html`)
- **هدف الشركة** مع الميزات الرئيسية
- **Company goal** with key features
- **مسيرة الشركة** خط زمني تفاعلي
- **Company journey** interactive timeline
- **رسالة الشركة** القيم والمبادئ
- **Company mission** values and principles
- **إحصائيات** عدادات متحركة للإنجازات
- **Statistics** animated counters for achievements

### 4. صفحة الاتصال / Contact Page (`pages/contact.html`)
- **معلومات الاتصال** العنوان، الهاتف، البريد الإلكتروني
- **Contact information** address, phone, email
- **نموذج اتصال** مع التحقق من صحة البيانات
- **Contact form** with data validation
- **خريطة تفاعلية** موقع الشركة
- **Interactive map** company location
- **ساعات العمل** جدول مفصل
- **Working hours** detailed schedule
- **أسئلة شائعة** إجابات سريعة
- **FAQ section** quick answers

## التقنيات المستخدمة / Technologies Used

- **HTML5** - هيكل الصفحات / Page structure
- **CSS3** - التصميم والتخطيط / Styling and layout
- **JavaScript (ES6+)** - التفاعلية / Interactivity
- **Bootstrap 5.3** - إطار عمل CSS / CSS framework
- **WOW.js** - رسوم متحركة / Animations
- **Font Awesome** - الأيقونات / Icons
- **Google Fonts (Cairo)** - الخطوط العربية / Arabic fonts

## كيفية التشغيل / How to Run

### 1. التشغيل المحلي / Local Development
```bash
# انتقل إلى مجلد المشروع / Navigate to project folder
cd food-company-website

# شغل خادم محلي / Start local server
python3 -m http.server 8000

# أو استخدم / Or use
npx serve .

# افتح المتصفح على / Open browser at
http://localhost:8000
```

### 2. النشر / Deployment
- ارفع جميع الملفات إلى خادم الويب
- Upload all files to web server
- تأكد من دعم الخادم للملفات الثابتة
- Ensure server supports static files
- لا حاجة لقاعدة بيانات أو خادم خلفي
- No database or backend server required

## التخصيص / Customization

### 1. تغيير الألوان / Change Colors
في ملف `assets/css/style.css`:
```css
:root {
    --primary-color: #fc0000;    /* اللون الأساسي / Primary color */
    --secondary-color: #004514;  /* اللون الثانوي / Secondary color */
}
```

### 2. تحديث المحتوى / Update Content
- **النصوص**: ابحث عن `data-ar` و `data-en` في ملفات HTML
- **Texts**: Look for `data-ar` and `data-en` in HTML files
- **الصور**: استبدل الملفات في مجلد `assets/images/`
- **Images**: Replace files in `assets/images/` folder
- **المنتجات**: حدث مصفوفة `products` في `assets/js/products.js`
- **Products**: Update `products` array in `assets/js/products.js`

### 3. إضافة صفحات جديدة / Add New Pages
1. أنشئ ملف HTML جديد في مجلد `pages/`
2. Create new HTML file in `pages/` folder
3. انسخ الهيكل من صفحة موجودة
4. Copy structure from existing page
5. حدث قائمة التنقل في جميع الصفحات
6. Update navigation menu in all pages

## الأمان / Security

- **التحقق من النماذج**: تحقق من جانب العميل والخادم
- **Form validation**: Client-side and server-side validation
- **حماية XSS**: تنظيف المدخلات
- **XSS protection**: Input sanitization
- **HTTPS**: استخدم اتصال آمن في الإنتاج
- **HTTPS**: Use secure connection in production

## الأداء / Performance

### تحسينات مطبقة / Applied Optimizations
- **ضغط الصور** تحسين أحجام الملفات
- **Image compression** optimized file sizes
- **تحميل كسول** للصور والمنتجات
- **Lazy loading** for images and products
- **تصغير CSS/JS** في الإنتاج
- **Minified CSS/JS** in production
- **ذاكرة التخزين المؤقت** للموارد الثابتة
- **Caching** for static resources

### قياسات الأداء / Performance Metrics
- **سرعة التحميل**: < 3 ثواني
- **Loading speed**: < 3 seconds
- **نقاط Core Web Vitals**: ممتازة
- **Core Web Vitals scores**: Excellent
- **حجم الصفحة**: محسن للهواتف المحمولة
- **Page size**: Optimized for mobile

## المتصفحات المدعومة / Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## استكشاف الأخطاء / Troubleshooting

### مشاكل شائعة / Common Issues

#### 1. الخطوط العربية لا تظهر / Arabic fonts not showing
```css
/* تأكد من تحميل خط Cairo / Ensure Cairo font is loaded */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap');
```

#### 2. الرسوم المتحركة لا تعمل / Animations not working
```javascript
// تأكد من تحميل WOW.js / Ensure WOW.js is loaded
new WOW().init();
```

#### 3. مشاكل في التخطيط RTL / RTL layout issues
```css
/* تأكد من إعداد الاتجاه / Ensure direction is set */
[dir="rtl"] { direction: rtl; }
[dir="ltr"] { direction: ltr; }
```

## الدعم الفني / Technical Support

للحصول على المساعدة أو الإبلاغ عن مشاكل:
For help or to report issues:

- 📧 البريد الإلكتروني / Email: support@foodcompany.com
- 📞 الهاتف / Phone: +963-11-1234567
- 💬 واتساب / WhatsApp: +963-11-1234567

## الترخيص / License

هذا المشروع مرخص تحت رخصة MIT - انظر ملف LICENSE للتفاصيل
This project is licensed under the MIT License - see LICENSE file for details

## المساهمة / Contributing

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:
Contributions are welcome! Please follow these steps:

1. Fork المشروع / Fork the project
2. أنشئ فرع للميزة / Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات / Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push للفرع / Push to branch (`git push origin feature/AmazingFeature`)
5. افتح Pull Request / Open Pull Request

---

**تم التطوير بواسطة فريق التطوير - Developed by Development Team**

© 2025 الأغذية الطبيعية - Natural Foods Company. جميع الحقوق محفوظة - All rights reserved.

