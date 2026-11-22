import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products } from "@/data/products";
import { useApp } from "@/lib/app-state";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return { id: p.id, title: p.name.en, desc: p.desc.en };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Aroma Café` },
          { name: "description", content: loaderData.desc },
          { property: "og:title", content: `${loaderData.title} — Aroma Café` },
          { property: "og:description", content: loaderData.desc },
          { property: "og:type", content: "product" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Unavailable — Aroma Café" }, { name: "robots", content: "noindex" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useLoaderData();
  const p = getProduct(id)!;
  const { lang, t, add, price } = useApp();
  const [qty, setQty] = useState(1);
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <Link to="/menu" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
        <ArrowLeft className="size-4 rtl:rotate-180" />{t.product.back}
      </Link>
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <img src={p.image} alt={p.name[lang]} className="aspect-square w-full rounded-3xl object-cover shadow-soft" />
        <div className="flex flex-col justify-center">
          <p className="eyebrow">{t.cats[p.category]}</p>
          <h1 className="mt-3 text-5xl font-semibold">{p.name[lang]}</h1>
          <p className="mt-1 text-muted-foreground">{p.name[lang === "ar" ? "en" : "ar"]}</p>
          <p className="mt-6 text-lg text-muted-foreground">{p.desc[lang]}</p>
          <p className="mt-6 text-3xl font-semibold text-gold">{price(p.price)}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium">{t.product.qty}</span>
            <div className="flex items-center rounded-full border border-border">
              <button aria-label="-" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid size-11 place-items-center"><Minus className="size-4" /></button>
              <span className="w-8 text-center font-semibold">{qty}</span>
              <button aria-label="+" onClick={() => setQty((q) => q + 1)} className="grid size-11 place-items-center"><Plus className="size-4" /></button>
            </div>
            <button
              onClick={() => { add(p.id, qty); toast.success(t.product.added, { description: `${qty} × ${p.name[lang]}` }); }}
              className="h-12 flex-1 rounded-full bg-primary px-8 font-semibold text-primary-foreground hover:opacity-90"
            >
              {t.product.add} · {price(p.price * qty)}
            </button>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="text-3xl font-semibold">{t.product.related}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <ProductCard key={r.id} p={r} />)}
          </div>
        </section>
      )}
    </div>
  );
}
