export type Lang = "en" | "ar";

export const dict = {
  en: {
    brand: "Aroma Café",
    nav: { home: "Home", menu: "Menu", about: "About", contact: "Contact", cart: "Cart" },
    langSwitch: "عربي",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
    hero: { eyebrow: "Specialty Coffee · Riyadh", title: "Every Cup Tells a Story.", intro: "At Aroma Café we roast in small batches, brew with care, and serve every cup in a space made for slowing down.", cta: "Explore Our Menu", secondary: "Our Story" },
    featured: { eyebrow: "House favourites", title: "Featured drinks & treats", all: "View full menu" },
    atmosphere: { eyebrow: "The space", title: "A warm corner for every moment", body: "Soft brass light, the hum of the grinder, and the smell of fresh pastry. Whether you're meeting friends, working through the afternoon or stealing a quiet hour, there's a seat waiting for you.", points: ["Freshly roasted beans every week", "Pastries baked each morning", "Free Wi‑Fi & quiet corners"] },
    testimonials: { eyebrow: "Kind words", title: "What our guests say", items: [
      { name: "Noura A.", text: "The Spanish latte is the best I've had in the city, and the atmosphere is so calm." },
      { name: "James R.", text: "Perfect place to work for a few hours. Great cold brew and friendly baristas." },
      { name: "Faisal M.", text: "Their Saudi coffee with dates feels like home. The cheesecake is a must." },
    ] },
    ctaBlock: { title: "Your next favourite cup is waiting", body: "Order ahead and pick it up fresh, or come stay a while.", button: "Start your order" },
    menu: { eyebrow: "Our menu", title: "Crafted with care", search: "Search drinks & desserts…", all: "All", empty: "No items match your search.", add: "Add to cart", details: "Details" },
    cats: { hot: "Hot Coffee", cold: "Cold Coffee", tea: "Tea & Other Drinks", dessert: "Desserts & Pastries" },
    product: { back: "Back to menu", qty: "Quantity", add: "Add to cart", added: "Added to cart", related: "You may also like" },
    cart: { title: "Your cart", empty: "Your cart is empty.", browse: "Browse the menu", summary: "Order summary", subtotal: "Subtotal", vat: "VAT (15%)", total: "Total", place: "Place order", remove: "Remove", note: "This is a demo — no payment is taken.", confirmTitle: "Order confirmed!", confirmBody: "Thank you! Your order #{n} is being prepared and will be ready in about 10 minutes.", again: "Back to menu" },
    about: { eyebrow: "About us", title: "Born from a love of coffee", p1: "Aroma Café began in 2019 with a simple idea: great coffee should feel personal. We source beans directly from farms in Ethiopia, Colombia and Yemen, roast them in small batches, and brew each cup by hand.", p2: "Our team of baristas and bakers share one goal — to make every visit feel like a warm welcome, whether it's your first cup or your thousandth.", values: [
      { t: "Quality", d: "Specialty-grade beans, roasted fresh every week." },
      { t: "Hospitality", d: "Rooted in the Arabian tradition of generous welcome." },
      { t: "Sustainability", d: "Direct trade, compostable cups, and zero-waste baking." },
    ] },
    contact: { eyebrow: "Visit us", title: "We'd love to hear from you", address: "King Fahd Road, Al Olaya, Riyadh", hoursT: "Opening hours", hours: "Daily · 7:00 AM – 12:00 AM", name: "Your name", email: "Email", message: "Message", send: "Send message", sent: "Thanks! We'll get back to you soon." },
    footer: { tag: "Specialty coffee, made with heart.", rights: "All rights reserved." },
    sar: "SAR",
  },
  ar: {
    brand: "أروما كافيه",
    nav: { home: "الرئيسية", menu: "المنيو", about: "من نحن", contact: "تواصل معنا", cart: "السلة" },
    langSwitch: "English",
    themeLight: "التبديل إلى الوضع الفاتح",
    themeDark: "التبديل إلى الوضع الداكن",
    hero: { eyebrow: "قهوة مختصة · الرياض", title: "كل كوب يحكي قصة.", intro: "في أروما كافيه نحمّص القهوة بكميات صغيرة، ونحضّرها بعناية، ونقدّم كل كوب في مكان صُمّم لتستمتع بلحظتك.", cta: "استكشف قائمتنا", secondary: "قصتنا" },
    featured: { eyebrow: "المفضّلة لدينا", title: "مشروبات وحلويات مميزة", all: "عرض المنيو كاملاً" },
    atmosphere: { eyebrow: "المكان", title: "ركن دافئ لكل لحظة", body: "إضاءة نحاسية هادئة، وصوت المطحنة، ورائحة المعجنات الطازجة. سواء كنت تلتقي بأصدقائك أو تعمل أو تبحث عن ساعة هادئة، هناك مقعد بانتظارك.", points: ["حبوب محمّصة طازجة كل أسبوع", "معجنات تُخبز كل صباح", "واي فاي مجاني وزوايا هادئة"] },
    testimonials: { eyebrow: "آراء ضيوفنا", title: "ماذا يقول ضيوفنا", items: [
      { name: "نورة ع.", text: "السبانش لاتيه هنا الأفضل في المدينة، والأجواء هادئة جداً." },
      { name: "جيمس ر.", text: "مكان مثالي للعمل لساعات. كولد برو رائع وفريق ودود." },
      { name: "فيصل م.", text: "القهوة السعودية مع التمر تشعرني وكأنني في البيت. والتشيز كيك لا يُفوَّت." },
    ] },
    ctaBlock: { title: "كوبك المفضّل القادم بانتظارك", body: "اطلب مسبقاً واستلمه طازجاً، أو تعال واستمتع بوقتك معنا.", button: "ابدأ طلبك" },
    menu: { eyebrow: "قائمتنا", title: "محضّرة بعناية", search: "ابحث عن مشروب أو حلى…", all: "الكل", empty: "لا توجد أصناف مطابقة لبحثك.", add: "أضف إلى السلة", details: "التفاصيل" },
    cats: { hot: "قهوة ساخنة", cold: "قهوة باردة", tea: "شاي ومشروبات أخرى", dessert: "حلويات ومعجنات" },
    product: { back: "العودة إلى المنيو", qty: "الكمية", add: "أضف إلى السلة", added: "تمت الإضافة إلى السلة", related: "قد يعجبك أيضاً" },
    cart: { title: "سلة الطلبات", empty: "سلتك فارغة.", browse: "تصفّح المنيو", summary: "ملخص الطلب", subtotal: "المجموع الفرعي", vat: "ضريبة القيمة المضافة (١٥٪)", total: "الإجمالي", place: "تأكيد الطلب", remove: "حذف", note: "هذا عرض تجريبي — لا يتم الدفع فعلياً.", confirmTitle: "تم تأكيد طلبك!", confirmBody: "شكراً لك! طلبك رقم #{n} قيد التحضير وسيكون جاهزاً خلال ١٠ دقائق تقريباً.", again: "العودة إلى المنيو" },
    about: { eyebrow: "من نحن", title: "وُلدنا من حب القهوة", p1: "بدأ أروما كافيه عام ٢٠١٩ بفكرة بسيطة: القهوة الرائعة يجب أن تكون تجربة شخصية. نستورد حبوبنا مباشرة من مزارع إثيوبيا وكولومبيا واليمن، ونحمّصها بكميات صغيرة، ونحضّر كل كوب يدوياً.", p2: "يجمع فريقنا من الباريستا والخبّازين هدف واحد — أن تشعر بالترحيب في كل زيارة، سواء كان هذا كوبك الأول أو الألف.", values: [
      { t: "الجودة", d: "حبوب مختصة تُحمّص طازجة كل أسبوع." },
      { t: "الضيافة", d: "متجذّرة في تقاليد الكرم العربي الأصيل." },
      { t: "الاستدامة", d: "تجارة مباشرة وأكواب قابلة للتحلل وخَبز بلا هدر." },
    ] },
    contact: { eyebrow: "زورونا", title: "يسعدنا تواصلك معنا", address: "طريق الملك فهد، العليا، الرياض", hoursT: "ساعات العمل", hours: "يومياً · ٧:٠٠ صباحاً – ١٢:٠٠ منتصف الليل", name: "الاسم", email: "البريد الإلكتروني", message: "رسالتك", send: "إرسال", sent: "شكراً! سنتواصل معك قريباً." },
    footer: { tag: "قهوة مختصة تُصنع من القلب.", rights: "جميع الحقوق محفوظة." },
    sar: "ر.س",
  },
} as const;

export type Dict = (typeof dict)["en"];
