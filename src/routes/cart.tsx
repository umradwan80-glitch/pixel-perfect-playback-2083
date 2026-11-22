import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/products";
import { useApp } from "@/lib/app-state";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Aroma Café" },
      { name: "description", content: "Review your Aroma Café order and place it for pickup." },
      { property: "og:title", content: "Your Cart — Aroma Café" },
      { property: "og:description", content: "Review your order at Aroma Café." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { t, lang, lines, update, clear, subtotal, price } = useApp();
  const [orderNo, setOrderNo] = useState<number | null>(null);
  const vat = subtotal * 0.15;

  if (orderNo) {
    return (
      <div className="mx-auto max-w-lg px-5 py-24 text-center">
        <CheckCircle2 className="mx-auto size-16 text-gold" />
        <h1 className="mt-6 text-4xl font-semibold">{t.cart.confirmTitle}</h1>
        <p className="mt-4 text-muted-foreground">{t.cart.confirmBody.replace("{n}", String(orderNo))}</p>
        <Button asChild size="xl" className="mt-8 rounded-full"><Link to="/menu">{t.cart.again}</Link></Button>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-5 py-24 text-center">
        <h1 className="text-4xl font-semibold">{t.cart.title}</h1>
        <p className="mt-4 text-muted-foreground">{t.cart.empty}</p>
        <Button asChild size="xl" className="mt-8 rounded-full"><Link to="/menu">{t.cart.browse}</Link></Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="text-5xl font-semibold">{t.cart.title}</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <ul className="h-fit divide-y divide-border rounded-2xl border border-border bg-card">
          {lines.map((l) => {
            const p = getProduct(l.id);
            if (!p) return null;
            return (
              <li key={l.id} className="flex items-center gap-4 p-4">
                <img src={p.image} alt="" className="size-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <p className="font-semibold">{p.name[lang]}</p>
                  <p className="text-sm text-muted-foreground">{price(p.price)}</p>
                </div>
                <div className="flex items-center rounded-full border border-border">
                  <button aria-label="-" onClick={() => update(l.id, l.qty - 1)} className="grid size-9 place-items-center"><Minus className="size-4" /></button>
                  <span className="w-6 text-center text-sm font-semibold">{l.qty}</span>
                  <button aria-label="+" onClick={() => update(l.id, l.qty + 1)} className="grid size-9 place-items-center"><Plus className="size-4" /></button>
                </div>
                <span className="hidden w-24 text-end font-semibold sm:block">{price(p.price * l.qty)}</span>
                <button aria-label={t.cart.remove} onClick={() => update(l.id, 0)} className="text-muted-foreground hover:text-destructive"><Trash2 className="size-5" /></button>
              </li>
            );
          })}
        </ul>
        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold">{t.cart.summary}</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">{t.cart.subtotal}</dt><dd>{price(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">{t.cart.vat}</dt><dd>{price(vat)}</dd></div>
            <div className="flex justify-between border-t border-border pt-3 text-lg font-semibold"><dt>{t.cart.total}</dt><dd className="text-gold">{price(subtotal + vat)}</dd></div>
          </dl>
          <Button size="xl" className="mt-6 w-full rounded-full" onClick={() => { setOrderNo(Math.floor(1000 + Math.random() * 9000)); clear(); }}>
            {t.cart.place}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">{t.cart.note}</p>
        </aside>
      </div>
    </div>
  );
}
