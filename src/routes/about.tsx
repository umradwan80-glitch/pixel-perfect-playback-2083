import { createFileRoute } from "@tanstack/react-router";
import { Coffee, HeartHandshake, Leaf } from "lucide-react";
import { useApp } from "@/lib/app-state";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Aroma Café" },
      { name: "description", content: "The story of Aroma Café: direct-trade beans, small-batch roasting and Arabian hospitality." },
      { property: "og:title", content: "About Us — Aroma Café" },
      { property: "og:description", content: "Born from a love of coffee — meet Aroma Café." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const icons = [Coffee, HeartHandshake, Leaf];

function About() {
  const { t } = useApp();
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h1 className="mt-2 text-5xl font-semibold">{t.about.title}</h1>
          <p className="mt-6 text-muted-foreground">{t.about.p1}</p>
          <p className="mt-4 text-muted-foreground">{t.about.p2}</p>
        </div>
        <img src={interior} alt="" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {t.about.values.map((v, i) => {
          const Icon = icons[i] ?? Coffee;
          return (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid size-12 place-items-center rounded-full bg-gold/15 text-gold"><Icon className="size-6" /></span>
              <h3 className="mt-5 text-2xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
