import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products, type Category } from "@/data/products";
import { useApp } from "@/lib/app-state";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Aroma Café" },
      { name: "description", content: "Hot and cold coffee, tea, desserts and pastries at Aroma Café. Prices in SAR." },
      { property: "og:title", content: "Menu — Aroma Café" },
      { property: "og:description", content: "Explore our coffee, tea, desserts and pastries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t } = useApp();
  const [cat, setCat] = useState<Category | "all">("all");
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return products.filter((p) =>
      (cat === "all" || p.category === cat) &&
      (!s || [p.name.en, p.name.ar, p.desc.en, p.desc.ar].some((x) => x.toLowerCase().includes(s))),
    );
  }, [cat, q]);

  const chip = (active: boolean) =>
    `rounded-full px-5 py-2 text-sm font-medium transition ${active ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:border-gold"}`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">{t.menu.eyebrow}</p>
      <h1 className="mt-2 text-5xl font-semibold">{t.menu.title}</h1>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button className={chip(cat === "all")} onClick={() => setCat("all")}>{t.menu.all}</button>
          {categories.map((c) => (
            <button key={c} className={chip(cat === c)} onClick={() => setCat(c)}>{t.cats[c]}</button>
          ))}
        </div>
        <label className="relative md:w-72">
          <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.menu.search} className="h-11 w-full rounded-full border border-input bg-card ps-10 pe-4 text-sm outline-none focus:border-gold" />
        </label>
      </div>
      {list.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">{t.menu.empty}</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  );
}
