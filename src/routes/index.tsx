import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import { useApp } from "@/lib/app-state";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aroma Café — Every Cup Tells a Story" },
      { name: "description", content: "Specialty coffee shop in Riyadh: small-batch roasts, fresh pastries and a warm, welcoming space." },
      { property: "og:title", content: "Aroma Café — Every Cup Tells a Story" },
      { property: "og:description", content: "Small-batch specialty coffee, fresh pastries and a warm welcome." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useApp();
  const featured = products.filter((p) => p.featured).slice(0, 3);
  return (
    <>
      <section className="relative isolate flex min-h-[86vh] items-end overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="fade-up mx-auto w-full max-w-6xl px-5 pb-20">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-cream md:text-7xl">{t.hero.title}</h1>
          <p className="mt-5 max-w-xl text-lg text-cream/85">{t.hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/menu">{t.hero.cta}</Link></Button>
            <Button asChild variant="heroOutline" size="xl"><Link to="/about">{t.hero.secondary}</Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{t.featured.eyebrow}</p>
            <h2 className="mt-2 text-4xl font-semibold md:text-5xl">{t.featured.title}</h2>
          </div>
          <Link to="/menu" className="text-sm font-semibold text-gold hover:underline">{t.featured.all}</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <img src={interior} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
          <div>
            <p className="eyebrow">{t.atmosphere.eyebrow}</p>
            <h2 className="mt-2 text-4xl font-semibold md:text-5xl">{t.atmosphere.title}</h2>
            <p className="mt-5 text-muted-foreground">{t.atmosphere.body}</p>
            <ul className="mt-6 space-y-3">
              {t.atmosphere.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3"><span className="grid size-7 place-items-center rounded-full bg-gold/20 text-gold"><Check className="size-4" /></span>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 text-center">
        <p className="eyebrow">{t.testimonials.eyebrow}</p>
        <h2 className="mt-2 text-4xl font-semibold md:text-5xl">{t.testimonials.title}</h2>
        <div className="mt-12 grid gap-6 text-start md:grid-cols-3">
          {t.testimonials.items.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-7">
              <Quote className="size-7 text-gold" />
              <blockquote className="mt-4 text-card-foreground">{r.text}</blockquote>
              <figcaption className="mt-5 flex items-center justify-between text-sm">
                <span className="font-semibold">{r.name}</span>
                <span className="flex text-gold">{[0, 1, 2, 3, 4].map((i) => <Star key={i} className="size-4 fill-current" />)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="text-4xl font-semibold md:text-5xl">{t.ctaBlock.title}</h2>
          <p className="mx-auto mt-4 max-w-lg opacity-80">{t.ctaBlock.body}</p>
          <Button asChild variant="hero" size="xl" className="mt-8"><Link to="/menu">{t.ctaBlock.button}</Link></Button>
        </div>
      </section>
    </>
  );
}
