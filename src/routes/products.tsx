import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ArrowRight, PiggyBank, CalendarRange, Banknote, Home, Landmark } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products - Mukundhapuram Socity Limited" },
      { name: "description", content: "Explore our savings and loan products." },
    ],
  }),
  component: ProductsPage,
});

type ProductKey = "fd" | "mss" | "pl" | "prop" | "rd";

const fdRates = [
  { period: "15 Days", ordinary: "6.25", senior: "6.75" },
  { period: "46 Days", ordinary: "6.75", senior: "7.25" },
  { period: "91 Days", ordinary: "7.00", senior: "7.50" },
  { period: "6 Months", ordinary: "7.75", senior: "8.25" },
  { period: "1 Year", ordinary: "8.00", senior: "8.50" },
  { period: "24 months", ordinary: "8.10", senior: "8.60" },
];

function ProductsPage() {
  const { t } = useT();
  const location = useLocation();
  const [open, setOpen] = useState<ProductKey>("fd");

  const items = [
    { key: "fd" as const, icon: PiggyBank, accent: "border-sky-500 bg-sky-50 text-sky-700", pill: "bg-sky-500" },
    { key: "mss" as const, icon: CalendarRange, accent: "border-emerald-500 bg-emerald-50 text-emerald-700", pill: "bg-emerald-500" },
    { key: "pl" as const, icon: Banknote, accent: "border-amber-500 bg-amber-50 text-amber-700", pill: "bg-amber-500" },
    { key: "prop" as const, icon: Home, accent: "border-violet-500 bg-violet-50 text-violet-700", pill: "bg-violet-500" },
    { key: "rd" as const, icon: Landmark, accent: "border-rose-500 bg-rose-50 text-rose-700", pill: "bg-rose-500" },
  ];

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "fd" || hash === "mss" || hash === "pl" || hash === "prop" || hash === "rd") {
      setOpen(hash);
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-7xl px-4 text-left">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight" style={{ fontWeight: 950 }}>{t("products.title")}</h1>
          <p className="mt-4 max-w-3xl text-lg opacity-90">{t("products.desc")}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-4">
            {items.map((item) => {
              const isOpen = open === item.key;
              const label = t(`products.${item.key}.label`);
              const summary = t(`products.${item.key}.summary`);
              const points = [
                t(`products.${item.key}.p1`),
                t(`products.${item.key}.p2`),
                t(`products.${item.key}.p3`),
                t(`products.${item.key}.p4`),
              ];
              return (
                <div
                  key={item.key}
                  id={item.key}
                  className={`rounded-xl border bg-card shadow-card overflow-hidden transition-colors ${isOpen ? item.accent : "border-border"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? "fd" : item.key)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${isOpen ? "bg-background/70" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-11 w-11 rounded-lg grid place-items-center text-white shadow-elegant ${item.pill}`}>
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm uppercase tracking-[0.16em] text-foreground" style={{ fontWeight: 950 }}>{label}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{summary}</div>
                      </div>
                    </div>
                    <ChevronDown size={18} className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border/70 px-5 py-5">
                      {item.key === "fd" ? (
                        <div className="space-y-4">
                          <div className="overflow-hidden rounded-xl border border-border bg-background">
                            <div className="border-b border-border px-4 py-3">
                              <div className="text-lg font-bold text-foreground">Fixed Deposit Interest With Effect From 2026-01-15</div>
                              <div className="mt-1 text-sm text-muted-foreground">senior citizen</div>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full border-collapse text-left text-sm">
                                <thead className="bg-muted/60">
                                  <tr>
                                    <th className="border-b border-r border-border px-4 py-3 font-bold text-foreground">Period</th>
                                    <th className="border-b border-r border-border px-4 py-3 font-bold text-foreground">Ordinary(%)</th>
                                    <th className="border-b border-border px-4 py-3 font-bold text-foreground">Senior Citizen(%)</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {fdRates.map((row) => (
                                    <tr key={row.period} className="odd:bg-background even:bg-muted/30">
                                      <td className="border-b border-r border-border px-4 py-3 font-medium text-foreground">{row.period}</td>
                                      <td className="border-b border-r border-border px-4 py-3 text-foreground/85">{row.ordinary}</td>
                                      <td className="border-b border-border px-4 py-3 text-foreground/85">{row.senior}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <ul className="grid gap-3 sm:grid-cols-2">
                            {points.map((point) => (
                              <li key={point} className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground/85">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {points.map((point) => (
                            <li key={point} className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground/85">
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{t("products.cta.title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("products.cta.desc")}</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
