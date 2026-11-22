import espresso from "@/assets/p-espresso.jpg";
import cappuccino from "@/assets/p-cappuccino.jpg";
import latte from "@/assets/p-latte.jpg";
import saudi from "@/assets/p-saudi.jpg";
import icedLatte from "@/assets/p-iced-latte.jpg";
import coldbrew from "@/assets/p-coldbrew.jpg";
import frappe from "@/assets/p-frappe.jpg";
import matcha from "@/assets/p-matcha.jpg";
import chocolate from "@/assets/p-chocolate.jpg";
import tea from "@/assets/p-tea.jpg";
import croissant from "@/assets/p-croissant.jpg";
import cheesecake from "@/assets/p-cheesecake.jpg";
import tiramisu from "@/assets/p-tiramisu.jpg";

export type Category = "hot" | "cold" | "tea" | "dessert";
export type Bi = { en: string; ar: string };
export type Product = {
  id: string;
  category: Category;
  price: number;
  image: string;
  name: Bi;
  desc: Bi;
  featured?: boolean;
};

export const categories: Category[] = ["hot", "cold", "tea", "dessert"];

export const products: Product[] = [
  { id: "espresso", category: "hot", price: 12, image: espresso, name: { en: "Double Espresso", ar: "إسبريسو دبل" }, desc: { en: "Intense, syrupy shot of our house single-origin blend with a hazelnut crema.", ar: "جرعة مركّزة من خلطتنا الخاصة بكريما غنية بنكهة البندق." } },
  { id: "cappuccino", category: "hot", price: 16, image: cappuccino, featured: true, name: { en: "Classic Cappuccino", ar: "كابتشينو كلاسيك" }, desc: { en: "Equal parts espresso, steamed milk and velvety foam, dusted with cocoa.", ar: "إسبريسو وحليب مبخّر ورغوة مخملية مع رشّة كاكاو." } },
  { id: "spanish-latte", category: "hot", price: 19, image: latte, featured: true, name: { en: "Spanish Latte", ar: "سبانش لاتيه" }, desc: { en: "Silky latte sweetened with condensed milk and a touch of cinnamon.", ar: "لاتيه ناعم محلّى بالحليب المكثّف ولمسة قرفة." } },
  { id: "saudi-coffee", category: "hot", price: 22, image: saudi, featured: true, name: { en: "Saudi Coffee & Dates", ar: "قهوة سعودية مع تمر" }, desc: { en: "Light-roast Arabic coffee with cardamom and saffron, served with premium dates.", ar: "قهوة عربية شقراء بالهيل والزعفران تُقدَّم مع تمر فاخر." } },
  { id: "iced-latte", category: "cold", price: 18, image: icedLatte, featured: true, name: { en: "Iced Latte", ar: "آيس لاتيه" }, desc: { en: "Chilled espresso poured over fresh milk and ice.", ar: "إسبريسو بارد يُسكب فوق الحليب الطازج والثلج." } },
  { id: "cold-brew", category: "cold", price: 20, image: coldbrew, name: { en: "Cold Brew", ar: "كولد برو" }, desc: { en: "Steeped for 18 hours for a smooth, chocolatey and low-acid cup.", ar: "منقوع لمدة ١٨ ساعة لطعم ناعم بنكهة الشوكولاتة وحموضة منخفضة." } },
  { id: "caramel-frappe", category: "cold", price: 23, image: frappe, name: { en: "Caramel Frappé", ar: "فرابيه كراميل" }, desc: { en: "Blended iced coffee with caramel, whipped cream and salted caramel drizzle.", ar: "قهوة مثلجة مخفوقة بالكراميل والكريمة وصوص الكراميل المملّح." } },
  { id: "matcha", category: "tea", price: 21, image: matcha, name: { en: "Matcha Latte", ar: "ماتشا لاتيه" }, desc: { en: "Ceremonial-grade Japanese matcha whisked with steamed milk.", ar: "ماتشا يابانية فاخرة مخفوقة مع الحليب المبخّر." } },
  { id: "hot-chocolate", category: "tea", price: 18, image: chocolate, name: { en: "Hot Chocolate", ar: "هوت تشوكلت" }, desc: { en: "Rich Belgian chocolate topped with toasted marshmallows.", ar: "شوكولاتة بلجيكية غنية مع حلوى المارشميلو." } },
  { id: "mint-tea", category: "tea", price: 12, image: tea, name: { en: "Mint Black Tea", ar: "شاي بالنعناع" }, desc: { en: "Fragrant black tea brewed with fresh garden mint.", ar: "شاي أسود عطِر محضّر مع النعناع الطازج." } },
  { id: "croissant", category: "dessert", price: 14, image: croissant, name: { en: "Butter Croissant", ar: "كرواسون بالزبدة" }, desc: { en: "Flaky, golden croissant baked fresh every morning.", ar: "كرواسون ذهبي هشّ يُخبز طازجاً كل صباح." } },
  { id: "basque-cheesecake", category: "dessert", price: 26, image: cheesecake, featured: true, name: { en: "San Sebastián Cheesecake", ar: "تشيز كيك سان سيباستيان" }, desc: { en: "Creamy burnt Basque cheesecake with a caramelised top.", ar: "تشيز كيك باسكي كريمي بسطح مكرمل." } },
  { id: "tiramisu", category: "dessert", price: 24, image: tiramisu, name: { en: "Tiramisu", ar: "تيراميسو" }, desc: { en: "Espresso-soaked ladyfingers layered with mascarpone cream.", ar: "بسكويت منقوع بالإسبريسو مع طبقات كريمة الماسكاربوني." } },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
