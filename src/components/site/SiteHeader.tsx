import { Link } from "@tanstack/react-router";
import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { useState } from "react";
import { useApp } from "@/lib/app-state";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const { t, toggleLang, theme, toggleTheme, count } = useApp();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: t.nav.home },
    { to: "/menu", label: t.nav.menu },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  const ThemeBtn = (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.themeLight : t.themeDark}
      className="grid size-10 place-items-center rounded-full border border-border text-foreground transition hover:border-gold hover:text-gold"
    >
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" className="size-10 object-contain" />
          <span className="font-display text-2xl font-semibold tracking-wide text-primary">{t.brand}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="text-sm font-medium text-muted-foreground transition hover:text-foreground data-[status=active]:text-gold">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggleLang} className="h-10 rounded-full border border-border px-4 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold">
            {t.langSwitch}
          </button>
          {ThemeBtn}
          <Link to="/cart" aria-label={t.nav.cart} className="relative grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -top-1 -end-1 grid min-w-5 place-items-center rounded-full bg-gold px-1 text-xs font-bold text-accent-foreground">{count}</span>
            )}
          </Link>
          <button onClick={() => setOpen((o) => !o)} className="grid size-10 place-items-center md:hidden" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 font-medium text-foreground hover:bg-muted">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
