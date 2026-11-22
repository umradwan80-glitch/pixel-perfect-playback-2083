import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useApp } from "@/lib/app-state";
import type { Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  const { lang, t, add, price } = useApp();
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1">
      <Link to="/product/$id" params={{ id: p.id }} className="relative block aspect-square overflow-hidden">
        <img src={p.image} alt={p.name[lang]} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute start-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground">{t.cats[p.category]}</span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground">{p.name[lang]}</h3>
            <p className="text-xs text-muted-foreground">{p.name[lang === "ar" ? "en" : "ar"]}</p>
          </div>
          <span className="whitespace-nowrap font-semibold text-gold">{price(p.price)}</span>
        </div>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{p.desc[lang]}</p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => { add(p.id); toast.success(t.product.added, { description: p.name[lang] }); }}
            className="flex flex-1 items-center justify-center gap-1 rounded-full bg-primary py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Plus className="size-4" />{t.menu.add}
          </button>
          <Link to="/product/$id" params={{ id: p.id }} className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-gold">
            {t.menu.details}
          </Link>
        </div>
      </div>
    </article>
  );
}
