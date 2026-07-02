import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useT } from "@/lib/i18n";
import logoImg from "/2-1.png";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoImg} alt={t("brand.name")} className="h-10 w-auto max-w-[180px] object-contain" />
          </div>
          <p className="text-sm opacity-75 max-w-xs">{t("footer.about")}</p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-8 w-8 rounded-md bg-white/10 grid place-items-center text-gold hover:bg-primary transition">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">{t("footer.quick")}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/">{t("nav.home")}</Link></li>
            <li><Link to="/about">{t("nav.about")}</Link></li>
            <li><Link to="/team-year">{t("nav.team")}</Link></li>
            <li><Link to="/products">{t("nav.products")}</Link></li>
            <li><Link to="/events">{t("nav.events")}</Link></li>
            <li><Link to="/contact">{t("nav.contact")}</Link></li>
            <li><Link to="/apply">{t("nav.apply")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>{t("footer.s1")}</li>
            <li>{t("footer.s2")}</li>
            <li>{t("footer.s3")}</li>
            <li>{t("footer.s4")}</li>
            <li>{t("footer.s5")}</li>
            <li>{t("footer.products")}</li>
            <li>{t("footer.team")}</li>
            <li>{t("footer.events")}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin size={16} className="text-gold shrink-0 mt-0.5" /> {t("footer.addr")}</li>
            <li className="flex gap-2"><Phone size={16} className="text-gold shrink-0 mt-0.5" /> +91 92070 89753</li>
            <li className="flex gap-2"><Mail size={16} className="text-gold shrink-0 mt-0.5" /> mkmt.gv.cs.2014@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs opacity-70">
          <span>© {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}</span>
          <div className="flex gap-5">
            <a href="#">{t("footer.privacy")}</a>
            <a href="#">{t("footer.terms")}</a>
            <a href="#">{t("footer.disclaimer")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
