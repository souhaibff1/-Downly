<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0d0f13">
  <meta name="color-scheme" content="dark">
  <meta name="description" content="Downly — حمّل الفيديوهات من مواقع التواصل بسهولة واحتفظ بها على جهازك لمشاهدتها في أي وقت.">
  <meta property="og:title" content="Downly — حمّلها بسهولة">
  <meta property="og:description" content="حمّل الفيديوهات من مواقع التواصل بسهولة واحتفظ بها على جهازك.">
  <meta property="og:type" content="website">
  <title>Downly — حمّلها بسهولة</title>
  <link rel="icon" href="downly-icon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="bg-grid" aria-hidden="true"></div>
  <div class="ambient ambient-one" aria-hidden="true"></div>
  <div class="ambient ambient-two" aria-hidden="true"></div>
  <div class="progress-bar" id="progress" aria-hidden="true"></div>

  <a class="skip" href="#main">تخطَّ إلى المحتوى</a>

  <header class="nav-shell" id="nav">
    <div class="nav wrap">
      <a class="brand" href="#top" aria-label="Downly الصفحة الرئيسية">
        <img src="downly-icon.svg" alt="" class="brand-icon" width="40" height="40">
        <span>Downly</span>
      </a>
      <nav class="nav-links" aria-label="التنقل">
        <a href="#features">المميزات</a>
        <a href="#how">كيف يعمل</a>
        <a href="#faq">أسئلة شائعة</a>
      </nav>
      <a class="nav-download" href="https://github.com/souhaibff1/-Downly/releases/latest/download/Downly.apk" data-download>
        تحميل التطبيق
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg>
      </a>
    </div>
  </header>

  <main id="main">
    <section class="hero wrap" id="top">
      <div class="hero-copy">
        <div class="eyebrow reveal"><span class="pulse"></span> حمّلها واحتفظ بها</div>
        <h1 class="reveal" style="--d:.08s">فيديوهاتك المفضلة،<br><span class="grad">معك دائمًا.</span></h1>
        <p class="lead reveal" style="--d:.16s">مع Downly، حمّل الفيديوهات من مواقع التواصل الاجتماعي بسهولة واحتفظ بها على جهازك لمشاهدتها لاحقًا — حتى بدون إنترنت.</p>
        <div class="actions reveal" style="--d:.24s">
          <a class="download-button" href="https://github.com/souhaibff1/-Downly/releases/latest/download/Downly.apk" data-download>
            <span class="download-symbol"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg></span>
            <span class="button-copy"><strong>تحميل Downly</strong><small>لأجهزة Android · ملف APK</small></span>
          </a>
          <span class="safe-note">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"/><path d="M9 12l2.2 2.2L15.5 10"/></svg>
            تحميل مباشر من GitHub
          </span>
        </div>
        <div class="mini-stats reveal" style="--d:.32s">
          <div><strong>سهل</strong><span>في الاستخدام</span></div>
          <i></i>
          <div><strong>سريع</strong><span>وبخطوات بسيطة</span></div>
          <i></i>
          <div><strong>لك</strong><span>في أي وقت</span></div>
        </div>
      </div>

      <div class="hero-visual reveal" style="--d:.2s" aria-label="تصميم تطبيق Downly">
        <div class="orbit orbit-a"></div><div class="orbit orbit-b"></div>
        <div class="app-card" id="tilt">
          <div class="app-top"><span class="tiny-dot"></span><span class="tiny-dot"></span><span class="tiny-dot"></span><span class="app-top-label">DOWNLY APP</span></div>
          <div class="app-logo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12m0 0l-5-5m5 5l5-5M6 20h12"/></svg></div>
          <h2>Downly</h2>
          <p>Save what you love.</p>
          <div class="fake-input"><span class="typing">رابط الفيديو</span><span class="paste">لصق</span></div>
          <div class="fake-progress"><span></span></div>
          <div class="preview-bottom">
            <span class="preview-play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg></span>
            <span><b>جاهز للتحميل</b><small>بخطوات بسيطة</small></span>
            <span class="check"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>
          </div>
        </div>
        <div class="float-chip chip-one"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg></span> تحميل سهل</div>
        <div class="float-chip chip-two"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span> واجهة بسيطة</div>
      </div>
    </section>

    <section class="features wrap" id="features">
      <div class="section-heading reveal"><span>لماذا Downly؟</span><h2>كل شيء أبسط مما تتوقع.</h2><p>ثلاث مزايا أساسية صُمّمت لتوفّر عليك الوقت والجهد.</p></div>
      <div class="feature-grid">
        <article class="feature reveal">
          <div class="feature-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg></div>
          <h3>تحميل مباشر</h3>
          <p>ابدأ تنزيل التطبيق من زر واحد، ثم ثبّته على جهاز Android.</p>
        </article>
        <article class="feature reveal" style="--d:.1s">
          <div class="feature-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"/></svg></div>
          <h3>تجربة سهلة</h3>
          <p>تصميم واضح ومرتب يساعدك على الوصول إلى ما تحتاجه بسرعة.</p>
        </article>
        <article class="feature reveal" style="--d:.2s">
          <div class="feature-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="3"/><path d="M10 9.5v5l4.2-2.5L10 9.5z"/></svg></div>
          <h3>احتفظ بمقاطعك</h3>
          <p>حمّل المحتوى الذي تملك حق تنزيله، واحتفظ به لمشاهدته لاحقًا.</p>
        </article>
      </div>
    </section>

    <section class="how wrap" id="how">
      <div class="section-heading reveal"><span>كيف يعمل؟</span><h2>أربع خطوات وتبدأ.</h2><p>من التحميل إلى الحفظ في دقائق.</p></div>
      <ol class="steps">
        <li class="step reveal"><b>1</b><h3>حمّل التطبيق</h3><p>اضغط زر التحميل لتنزيل ملف Downly.apk.</p></li>
        <li class="step reveal" style="--d:.08s"><b>2</b><h3>ثبّته</h3><p>افتح الملف واسمح بالتثبيت من المصدر عند ظهور التنبيه.</p></li>
        <li class="step reveal" style="--d:.16s"><b>3</b><h3>الصق الرابط</h3><p>انسخ رابط الفيديو من موقع التواصل والصقه في التطبيق.</p></li>
        <li class="step reveal" style="--d:.24s"><b>4</b><h3>احتفظ به</h3><p>يُحفظ المقطع على جهازك لتشاهده متى شئت.</p></li>
      </ol>
    </section>

    <section class="faq wrap" id="faq">
      <div class="section-heading reveal"><span>أسئلة شائعة</span><h2>هل لديك سؤال؟</h2></div>
      <div class="faq-list reveal">
        <details>
          <summary>على أي أجهزة يعمل Downly؟<i aria-hidden="true"></i></summary>
          <p>يتوفر Downly حاليًا لأجهزة Android على شكل ملف APK.</p>
        </details>
        <details>
          <summary>لماذا يطلب جهازي السماح بالتثبيت من مصدر خارجي؟<i aria-hidden="true"></i></summary>
          <p>لأن التطبيق يُثبَّت من ملف APK مباشرة وليس من متجر التطبيقات. اسمح بالتثبيت لمتصفحك أو مدير الملفات عند ظهور التنبيه، ثم أكمل التثبيت.</p>
        </details>
        <details>
          <summary>ماذا أفعل إذا لم يبدأ التحميل؟<i aria-hidden="true"></i></summary>
          <p>تأكد من اتصالك بالإنترنت وأعد الضغط على زر التحميل. ويمكنك فتح الصفحة في متصفح آخر إن استمرت المشكلة.</p>
        </details>
        <details>
          <summary>هل يمكنني تحميل أي فيديو؟<i aria-hidden="true"></i></summary>
          <p>حمّل فقط المحتوى الذي تملك حق تنزيله، واحترم حقوق أصحاب المحتوى وشروط استخدام كل منصة.</p>
        </details>
      </div>
    </section>

    <section class="bottom-cta wrap reveal">
      <div><span class="cta-kicker">جاهز للتجربة؟</span><h2>ابدأ مع Downly الآن.</h2><p>حمّل ملف APK وثبّت التطبيق على جهازك.</p></div>
      <a class="download-button compact" href="https://github.com/souhaibff1/-Downly/releases/latest/download/Downly.apk" data-download>
        <span class="download-symbol"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg></span>
        <span class="button-copy"><strong>تحميل التطبيق</strong><small>Android · APK</small></span>
      </a>
    </section>
  </main>

  <footer class="footer wrap">
    <a class="brand footer-brand" href="#top"><img src="downly-icon.svg" alt="" class="brand-icon" width="28" height="28"><span>Downly</span></a>
    <span>© <span id="year"></span> Downly. جميع الحقوق محفوظة.</span>
    <span class="footer-note">احترم حقوق أصحاب المحتوى عند التنزيل.</span>
  </footer>
  <script src="script.js"></script>
</body>
</html>
