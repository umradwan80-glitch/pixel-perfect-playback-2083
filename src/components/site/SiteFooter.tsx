import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone } from "lucide-react";
import { useApp } from "@/lib/app-state";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  const { t } = useApp();
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="size-10 object-contain" />
            <span className="font-display text-2xl font-semibold text-primary">{t.brand}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{t.footer.tag}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/menu" className="text-muted-foreground hover:text-gold">{t.nav.menu}</Link>
          <Link to="/about" className="text-muted-foreground hover:text-gold">{t.nav.about}</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-gold">{t.nav.contact}</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><MapPin className="size-4 text-gold" />{t.contact.address}</span>
          <span className="flex items-center gap-2" dir="ltr"><Phone className="size-4 text-gold" />+966 11 555 0123</span>
          <span className="flex items-center gap-2" dir="ltr"><Instagram className="size-4 text-gold" />@aromacafe.sa</span>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © 2026 {t.brand}. {t.footer.rights}
      </div>
    </footer>
  );
}
