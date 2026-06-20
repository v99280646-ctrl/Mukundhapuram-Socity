import { Link } from "@tanstack/react-router";
import { Phone, Mail, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useT, type Lang } from "@/lib/i18n";
import logoImg from "@/assets/new.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useT();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/team", label: t("nav.team") },
    { to: "/products", label: t("nav.products") },
    { to: "/events", label: t("nav.events") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;
  const productMenu = [
    { hash: "fd", label: t("nav.products.fd") },
    { hash: "mss", label: t("nav.products.mss") },
    { hash: "pl", label: t("nav.products.pl") },
    { hash: "prop", label: t("nav.products.prop") },
    { hash: "rd", label: t("nav.products.rd") },
  ] as const;

  const langs: { code: Lang; label: string }[] = [
    { code: "ml", label: t("lang.malayalam") },
    { code: "en", label: t("lang.english") },
  ];
  const current = langs.find((l) => l.code === lang)!;

  const LangSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div ref={mobile ? undefined : langRef} className="relative">
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-muted transition"
        aria-label={t("nav.language")}
      >
        <Globe size={15} /> {current.label} <ChevronDown size={14} />
      </button>
      {langOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md border border-border bg-popover shadow-elegant z-50 overflow-hidden">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setLangOpen(false); }}
              className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition ${l.code === lang ? "bg-primary/10 text-primary font-semibold" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone size={12} /> +91-9876543210</span>
            <span className="hidden sm:flex items-center gap-1.5"><Mail size={12} /> info@mukundhapuramsocity.com</span>
          </div>
          <span className="hidden md:block opacity-90">{t("brand.tagline")}</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt={t("brand.name")}
            className="h-12 w-auto max-w-[240px] object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) =>
            n.to === "/products" ? (
              <div key={n.to} className="relative group">
                <Link
                  to={n.to}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1"
                  activeProps={{ className: "text-primary" }}
                >
                  {n.label} <ChevronDown size={14} />
                </Link>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  <div className="w-56 overflow-hidden rounded-md border border-border bg-popover shadow-elegant">
                    {productMenu.map((item) => (
                      <Link
                        key={item.hash}
                        to="/products"
                        hash={item.hash}
                        className="block px-4 py-2.5 text-sm text-foreground/85 hover:bg-muted hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            )
          )}
          <LangSwitcher />
          <Link
            to="/apply"
            className="rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-95 transition"
          >
            {t("nav.apply")}
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LangSwitcher mobile />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-4 py-3 flex flex-col gap-3">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm font-medium">
              {n.label}
            </Link>
          ))}
          <Link to="/apply" onClick={() => setOpen(false)} className="rounded-md bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground text-center">
            {t("nav.apply")}
          </Link>
        </div>
      )}
    </header>
  );
}
