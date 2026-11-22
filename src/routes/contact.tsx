import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useApp } from "@/lib/app-state";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aroma Café" },
      { name: "description", content: "Visit Aroma Café on King Fahd Road, Riyadh. Open daily 7 AM to midnight." },
      { property: "og:title", content: "Contact — Aroma Café" },
      { property: "og:description", content: "Find us in Al Olaya, Riyadh — open daily." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useApp();
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold";
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow">{t.contact.eyebrow}</p>
      <h1 className="mt-2 text-5xl font-semibold">{t.contact.title}</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <p className="flex items-center gap-3"><MapPin className="size-5 text-gold" />{t.contact.address}</p>
          <p className="flex items-center gap-3"><Phone className="size-5 text-gold" /><span dir="ltr">+966 11 555 0123</span></p>
          <p className="flex items-center gap-3"><Clock className="size-5 text-gold" />{t.contact.hoursT}: {t.contact.hours}</p>
        </div>
        {sent ? (
          <p className="rounded-2xl border border-border bg-card p-8 text-center font-medium">{t.contact.sent}</p>
        ) : (
          <form className="space-y-4 rounded-2xl border border-border bg-card p-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder={t.contact.name} className={field} />
            <input required type="email" placeholder={t.contact.email} className={field} />
            <textarea required rows={5} placeholder={t.contact.message} className={field} />
            <Button type="submit" size="xl" className="w-full rounded-full">{t.contact.send}</Button>
          </form>
        )}
      </div>
    </div>
  );
}
