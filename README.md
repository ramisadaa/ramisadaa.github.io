# موقع ملف القيادة – UNESCO Leadership Portfolio 2026

هذا الملف يحتوي على الموقع كاملًا **من دون الصور**، كما طُلب. الموقع مبني على الثيم المرفوع `Clinic-1.0.0` بعد تحويله بالكامل إلى صفحة شخصية قيادية متوافقة مع محتوى ملف الـLeadership Portfolio.

## تركيب الصور

لديك ملف الأصول السابق باسم `UNESCO_Website_Assets` أو `ملف_الأصول_لموقع_اليونسكو`.

انسخ المجلد:

```text
web-optimized
```

كاملًا إلى داخل:

```text
assets/img/
```

فتصبح البنية النهائية:

```text
assets/img/web-optimized/01-profile-hero/...
assets/img/web-optimized/02-shelter-leadership/...
assets/img/web-optimized/03-emergency-education/...
...
assets/img/web-optimized/11-academic-digital/...
```

لا تغيّر أسماء الملفات؛ جميع المسارات في الموقع مرتبطة بالأسماء الموجودة في ملف الأصول.

## الملفات الرئيسية

- `index.html`: الصفحة الشخصية الكاملة.
- `404.html`: صفحة الخطأ.
- `assets/css/theme.css`: ملف CSS الأصلي للثيم.
- `assets/css/unesco.css`: جميع تعديلات وتصميم موقع القيادة.
- `assets/js/main.js`: القائمة، الحركة، عدادات الأرقام، معرض الصور، والفلاتر.
- `assets/docs/Leadership_Portfolio_MASTER_BASELINE_2026.pdf`: ملف البورتفوليو الكامل المرتبط بزر العرض والتنزيل.
- `image-manifest.json`: قائمة بجميع الصور المطلوبة ومساراتها وأوصافها.
- `CREDITS.txt`: معلومات مصدر الثيم.

## التشغيل

افتح `index.html` مباشرة، أو استخدم Live Server في VS Code. بعد نسخ الصور ستظهر جميع الصور تلقائيًا داخل الهيرو، الأقسام، ومعرض الصور.

## النشر على GitHub Pages

ارفع محتويات هذا المجلد إلى جذر المستودع، ثم فعّل GitHub Pages من الفرع `main` والمجلد `/root`.

## الخصوصية

الموقع لا يستدعي الصور الخمس الموجودة داخل `restricted-review`. قبل النشر العام، راجع صور الأطفال والصور المصنفة `consent-review` داخل ملف `image-manifest.json` وتأكد من توفر الموافقات اللازمة.
