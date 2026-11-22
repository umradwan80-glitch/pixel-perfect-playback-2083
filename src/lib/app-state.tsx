import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dict, type Dict, type Lang } from "./i18n";
import { addLine, cartTotal, setQty, type CartLine } from "./cart-math";
import { getProduct } from "@/data/products";

type Theme = "light" | "dark";
type Ctx = {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  lines: CartLine[];
  add: (id: string, qty?: number) => void;
  update: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  price: (n: number) => string;
};

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("light");
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const l = localStorage.getItem("aroma-lang");
    if (l === "en" || l === "ar") setLang(l);
    if (localStorage.getItem("aroma-theme") === "dark") setTheme("dark");
    try {
      const c = JSON.parse(localStorage.getItem("aroma-cart") ?? "[]");
      if (Array.isArray(c)) setLines(c);
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (ready) localStorage.setItem("aroma-lang", lang);
  }, [lang, ready]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (ready) localStorage.setItem("aroma-theme", theme);
  }, [theme, ready]);

  useEffect(() => {
    if (ready) localStorage.setItem("aroma-cart", JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((id: string, qty = 1) => setLines((l) => addLine(l, id, qty)), []);
  const update = useCallback((id: string, qty: number) => setLines((l) => setQty(l, id, qty)), []);

  const value = useMemo<Ctx>(() => {
    const fmt = new Intl.NumberFormat(lang === "ar" ? "ar-SA" : "en-US", { maximumFractionDigits: 2 });
    return {
      lang,
      t: dict[lang] as Dict,
      toggleLang: () => setLang((l) => (l === "ar" ? "en" : "ar")),
      theme,
      toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
      lines,
      add,
      update,
      clear: () => setLines([]),
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal: cartTotal(lines, (id) => getProduct(id)?.price),
      price: (n) => `${fmt.format(n)} ${dict[lang].sar}`,
    };
  }, [lang, theme, lines, add, update]);

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const c = useContext(AppCtx);
  if (!c) throw new Error("useApp must be used inside AppProvider");
  return c;
}
