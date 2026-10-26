<div align="center">

<img src="downly-icon.svg" width="96" alt="Downly">

# Downly

**حمّلها واحتفظ بها — فيديوهاتك المفضلة، معك دائمًا.**

موقع الهبوط الرسمي لتطبيق Downly على Android

[![Download APK](https://img.shields.io/badge/تحميل-Downly.apk-b8f45b?style=for-the-badge&logo=android&logoColor=111318&labelColor=111318)](https://github.com/souhaibff1/-Downly/releases/download/v1.0.0/Downly.apk)
![Version](https://img.shields.io/badge/الإصدار-v1.0.0-b8f45b?style=for-the-badge&labelColor=111318)
![Stack](https://img.shields.io/badge/HTML%20·%20CSS%20·%20JS-بدون%20مكتبات-b8f45b?style=for-the-badge&labelColor=111318)

</div>

---

## ✨ نظرة عامة

صفحة واحدة خفيفة، مكتوبة بـ HTML وCSS وJavaScript صرف **بدون أي مكتبات أو أدوات بناء**، وتعمل مباشرة على GitHub Pages.

| القسم | المحتوى |
|---|---|
| **Hero** | العنوان الرئيسي، زر التحميل، وبطاقة تطبيق متحركة تتفاعل مع الماوس |
| **المميزات** | ثلاث بطاقات بأيقونات SVG |
| **كيف يعمل** | أربع خطوات من التحميل إلى الحفظ |
| **أسئلة شائعة** | قائمة قابلة للطي (`<details>`) |
| **دعوة أخيرة للتحميل** | زر تحميل ثانٍ في نهاية الصفحة |

**تفاصيل التنفيذ:** واجهة عربية RTL كاملة · متجاوبة مع الهاتف · دعم `prefers-reduced-motion` · روابط تخطٍّ وتركيز لوحة المفاتيح · وسوم SEO وOpen Graph.

## 📁 الملفات

```
Downly-Website/
├── index.html        ← هيكل الصفحة والنصوص
├── style.css         ← التصميم والألوان والحركة
├── script.js         ← التمرير، الظهور التدريجي، ميلان البطاقة
├── downly-icon.svg   ← الشعار وأيقونة التبويب
└── README.md         ← هذا الملف
```

## 🚀 النشر على GitHub Pages

1. فك ضغط الملف وارفع **محتويات** مجلد `Downly-Website` إلى جذر المستودع (يجب أن يكون `index.html` في الجذر).
2. من المستودع: **Settings ← Pages**.
3. اختر **Deploy from a branch**، ثم الفرع `main` والمجلد `/ (root)`، واضغط **Save**.
4. انتظر دقيقة تقريبًا، ثم افتح الرابط الذي يظهر أعلى الصفحة.

> ✅ يجب أن يكون المستودع والـ Release **عامَّين** حتى يتمكن الزوار من التحميل بدون تسجيل دخول.

## 🔄 تحديث التطبيق (إصدار جديد)

روابط التحميل الحالية مثبَّتة على الإصدار `v1.0.0`:

```
https://github.com/souhaibff1/-Downly/releases/download/v1.0.0/Downly.apk
```

عند نشر إصدار جديد، لديك خياران:

**الخيار 1 — رابط الإصدار الأحدث (موصى به):** استبدل الرابط مرة واحدة فقط ولن تحتاج لتعديله بعدها، بشرط أن يبقى اسم الملف `Downly.apk` في كل إصدار:

```
https://github.com/souhaibff1/-Downly/releases/latest/download/Downly.apk
```

**الخيار 2 — رابط ثابت لإصدار معيّن:** غيّر `v1.0.0` إلى رقم الإصدار الجديد.

الرابط موجود في **3 أماكن** داخل `index.html`. للتبديل دفعة واحدة:

```bash
sed -i 's#releases/download/v1.0.0/#releases/latest/download/#g' index.html
```

## 🎨 التخصيص

**الألوان** — كلها في أعلى `style.css` داخل `:root`:

```css
:root{
  --bg:#0d0f13;        /* خلفية الصفحة */
  --lime:#b8f45b;      /* اللون الأساسي */
  --lime2:#d2ff83;     /* اللون عند المرور */
  --text:#f5f7f1;      /* لون النص */
  --muted:#a9afb8;     /* النص الثانوي */
}
```

**الخطوط** — Cairo للعربية وInter للإنجليزية، تُحمَّل من Google Fonts في `<head>`.

**النصوص** — عدّلها مباشرة في `index.html`. لإضافة سؤال شائع انسخ كتلة `<details>` كاملة.

**الحركة** — أضف الصنف `reveal` لأي عنصر ليظهر تدريجيًا عند التمرير، و`style="--d:.1s"` لتأخيره.

## 🧪 المعاينة محليًا

لا تحتاج أي تثبيت. افتح `index.html` بالمتصفح مباشرة، أو شغّل خادمًا بسيطًا:

```bash
python3 -m http.server 8000
# ثم افتح http://localhost:8000
```

## ✅ قائمة فحص قبل النشر

- [ ] رابط التحميل يعمل ويبدأ تنزيل `Downly.apk`
- [ ] المستودع والـ Release عامّان
- [ ] جُرِّبت الصفحة على الهاتف وعلى الكمبيوتر
- [ ] النصوص ورقم الإصدار محدَّثان

## ⚖️ ملاحظة

Downly مخصّص لتحميل المحتوى الذي تملك حق تنزيله. احترم حقوق أصحاب المحتوى وشروط استخدام كل منصة.

---

<div align="center">

صُنع بحب · © Downly

</div>
