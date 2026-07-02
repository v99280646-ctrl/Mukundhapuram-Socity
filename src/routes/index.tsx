import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { TrendingUp, ShieldCheck, Clock, Check, Coins, PiggyBank, Wallet, Banknote, Phone, Star, ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡ് — വായ്പകൾ, പ്രതിമാസ സമ്പാദ്യ പദ്ധതി & നിക്ഷേപങ്ങൾ" },
      { name: "description", content: "തൽക്ഷണ വായ്പകൾ, ആകർഷകമായ സ്ഥിര നിക്ഷേപങ്ങൾ, സ്വർണ്ണ വായ്പകൾ, പ്രതിമാസ സമ്പാദ്യ പദ്ധതി." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <LoanCalculatorSection />
      <GoldLoanSection />
      <CalculatorAndCallback />
      <Services />
    </>
  );
}

function Hero() {
  const { t, lang } = useT();
  return (
    <section className="relative overflow-hidden text-primary-foreground min-h-[440px] sm:min-h-[500px] md:min-h-[560px] flex items-stretch">
      <div className="absolute inset-0">
        <img src="/her.jpeg" alt="Financial growth" className="hidden h-full w-full object-cover md:block" />
        <img src="/mob.png" alt="Financial growth" className="h-full w-full object-cover md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/88 via-navy/58 to-navy/10 md:from-navy/88 md:via-navy/58 md:to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent md:hidden" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14 md:py-20 relative flex items-center w-full">
        <div className="max-w-6xl">
          <h1
            className={`font-extrabold leading-[1.08] text-balance ${lang === "ml" ? "text-[2rem] sm:text-[2.6rem] md:text-5xl max-w-[18ch] sm:max-w-[24ch] md:max-w-[28ch] lg:max-w-[32ch]" : "text-3xl sm:text-4xl md:text-6xl max-w-[16ch] sm:max-w-none"}`}
            style={lang === "ml" ? { fontFamily: "'Noto Sans Malayalam', 'Manjari', sans-serif" } : undefined}
          >
            {t("home.hero.title1")}<br />
            <span className="text-gold">{t("home.hero.title2")}</span> {t("home.hero.title3")}
          </h1>
          <p className="mt-4 max-w-lg text-base sm:text-lg md:text-xl opacity-90">{t("home.hero.desc")}</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Link to="/apply" className="rounded-md bg-background px-5 py-2.5 text-sm font-semibold text-primary shadow-elegant hover:scale-[1.02] transition sm:px-6 sm:py-3 sm:text-base">
              {t("home.hero.apply")}
            </Link>
            <Link to="/about" className="rounded-md border border-primary-foreground/40 px-5 py-2.5 text-sm font-semibold hover:bg-primary-foreground/10 transition sm:px-6 sm:py-3 sm:text-base">
              {t("home.hero.learn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const { t } = useT();
  const items = [
    { icon: TrendingUp, title: t("home.features.f1.t"), desc: t("home.features.f1.d") },
    { icon: ShieldCheck, title: t("home.features.f2.t"), desc: t("home.features.f2.d") },
    { icon: Clock, title: t("home.features.f3.t"), desc: t("home.features.f3.d") },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t("home.features.title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("home.features.desc")}</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl border border-border bg-card p-7 shadow-card hover:-translate-y-1 hover:shadow-elegant transition">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground shadow-elegant">
                <it.icon size={22} />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoanCalculatorSection() {
  const { t } = useT();
  const [amount, setAmount] = useState(100000);
  const [tenure, setTenure] = useState(30);
  const rate = 12;
  const { emi, totalAmount, totalInterest } = useMemo(() => {
    const r = rate / 12 / 100;
    const n = tenure;
    const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    return { emi, totalAmount, totalInterest: totalAmount - amount };
  }, [amount, tenure, rate]);

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
  const bullets = [t("home.calc.b1"), t("home.calc.b2"), t("home.calc.b3"), t("home.calc.b4")];

  return (
    <section className="py-20 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">{t("home.calc.title1")}<br /><span className="text-gold">{t("home.calc.title2")}</span></h2>
          <p className="mt-4 opacity-85 max-w-md">
            {t("home.calc.desc1")} <span className="text-gold font-bold">{t("home.calc.desc2")}</span> {t("home.calc.desc3")}
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-base">
                <span className="h-5 w-5 rounded-full bg-success/20 text-success grid place-items-center"><Check size={12} /></span>
                {b}
              </li>
            ))}
          </ul>
          <Link to="/apply" className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant">
            {t("home.calc.applyNow")} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7">
          <h3 className="text-center font-semibold text-lg">{t("home.calc.heading")}</h3>
          <div className="mt-6 space-y-5">
            <Slider label={t("home.calc.amount")} value={fmt(amount)} min={10000} max={750000} step={10000} v={amount} setV={setAmount} />
            <Slider label={t("home.calc.tenure")} value={`${tenure} ${t("home.calc.months")}`} min={30} max={60} step={1} v={tenure} setV={setTenure} />
            <div className="flex justify-between text-base mb-1.5">
              <span className="opacity-80">{t("home.calc.rate")}</span>
              <span className="font-semibold text-gold">{rate}{t("home.calc.rateUnit")}</span>
            </div>
            <p className="text-sm text-muted-foreground">Fixed at 12% per annum with diminishing balance calculation.</p>
          </div>
          <div className="mt-6 rounded-lg bg-primary/15 border border-primary/30 p-4 space-y-2 text-base">
            <Row label={t("home.calc.emi")} value={fmt(emi)} highlight />
            <Row label={t("home.calc.total")} value={fmt(totalAmount)} />
            <Row label={t("home.calc.interest")} value={fmt(totalInterest)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step, v, setV }: { label: string; value: string; min: number; max: number; step: number; v: number; setV: (n: number) => void }) {
  return (
    <div>
      <div className="flex justify-between text-base mb-1.5"><span className="opacity-80">{label}</span><span className="font-semibold text-gold">{value}</span></div>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => setV(Number(e.target.value))} className="w-full accent-primary" />
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className={highlight ? "font-semibold" : "opacity-80"}>{label}</span>
      <span className={highlight ? "font-bold text-gold text-lg" : "font-medium"}>{value}</span>
    </div>
  );
}

function GoldLoanSection() {
  const { t } = useT();
  const stats = [
    { v: "0.75%", l: t("home.gold.s1") },
    { v: "90%", l: t("home.gold.s2") },
    { v: t("home.gold.s3v"), l: t("home.gold.s3") },
    { v: t("home.gold.s4v"), l: t("home.gold.s4") },
  ];
  return (
    <section className="py-20 bg-gradient-gold text-gold-foreground">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <img src="/gold.png" alt="Gold loan" width={1024} height={768} loading="lazy" className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]" />
        <div>
          <div className="flex items-center gap-2 text-base font-semibold tracking-wider uppercase">
            <Coins size={20} /> {t("home.gold.tag")}
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">{t("home.gold.title")}</h2>
          <p className="mt-3 opacity-85 max-w-md">{t("home.gold.desc")}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="rounded-lg bg-white/40 backdrop-blur px-4 py-3 border border-white/40">
                <div className="text-2xl font-bold">{s.v}</div>
                <div className="text-sm opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
          <Link to="/apply" className="mt-7 inline-flex rounded-md bg-background text-primary px-6 py-3 font-semibold shadow-elegant">{t("home.gold.cta")}</Link>
        </div>
      </div>
    </section>
  );
}

function CalculatorAndCallback() {
  const { t } = useT();
  const [investAmount, setInvestAmount] = useState(100000);
  const [tenureM, setTenureM] = useState(12);
  const rate = 4;
  const maturity = investAmount * Math.pow(1 + rate / 100, tenureM / 12);
  const earned = maturity - investAmount;

  const [callback, setCallback] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);

  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-card border border-border shadow-card p-7">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="h-9 w-9 rounded-md bg-gold/15 text-gold grid place-items-center"><PiggyBank size={18} /></span>
            {t("home.fd.title")}
          </div>
          <div className="mt-6 space-y-5 text-base">
            <div>
              <div className="flex justify-between mb-1.5"><span className="text-muted-foreground">{t("home.fd.amount")}</span><span className="font-semibold">₹{investAmount.toLocaleString("en-IN")}</span></div>
              <input type="range" min={10000} max={1000000} step={10000} value={investAmount} onChange={(e) => setInvestAmount(Number(e.target.value))} className="w-full accent-primary" />
            </div>
            <div>
              <div className="flex justify-between mb-1.5"><span className="text-muted-foreground">{t("home.fd.tenure")} {tenureM} {t("home.calc.months")}</span></div>
              <input type="range" min={3} max={60} step={3} value={tenureM} onChange={(e) => setTenureM(Number(e.target.value))} className="w-full accent-primary" />
            </div>
          </div>
          <div className="mt-5 rounded-lg bg-primary/10 border border-primary/20 p-4 space-y-1.5 text-base">
              <div className="flex justify-between"><span>{t("home.fd.rate")}</span><span className="font-semibold text-gold">{rate}% p.a.</span></div>
            <div className="flex justify-between"><span>{t("home.fd.maturity")}</span><span className="font-semibold text-success">₹{Math.round(maturity).toLocaleString("en-IN")}</span></div>
            <div className="flex justify-between"><span>{t("home.fd.earned")}</span><span className="font-semibold text-success">₹{Math.round(earned).toLocaleString("en-IN")}</span></div>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl bg-card border border-border shadow-card p-7">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="h-9 w-9 rounded-md bg-gold/15 text-gold grid place-items-center"><Phone size={18} /></span>
            {t("home.cb.title")}
          </div>
          <p className="mt-2 text-base text-muted-foreground">{t("home.cb.desc")}</p>
          <div className="mt-5 space-y-4">
            <Field label={t("home.cb.name")}><input required maxLength={100} value={callback.name} onChange={(e) => setCallback({ ...callback, name: e.target.value })} placeholder={t("home.cb.namePh")} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
            <Field label={t("home.cb.phone")}><input required type="tel" maxLength={15} value={callback.phone} onChange={(e) => setCallback({ ...callback, phone: e.target.value })} placeholder={t("home.cb.phonePh")} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-ring" /></Field>
          </div>
          <button type="submit" className="mt-5 w-full rounded-md bg-gradient-primary py-3 text-base font-semibold text-primary-foreground shadow-elegant">
            {sent ? t("home.cb.done") : t("home.cb.btn")}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-base font-medium">{label}</span><div className="mt-1.5">{children}</div></label>;
}

function Services() {
  const { t } = useT();
  const items = [
    { icon: Wallet, title: t("home.services.s1.t"), desc: t("home.services.s1.d") },
    { icon: Banknote, title: t("home.services.s2.t"), desc: t("home.services.s2.d") },
    { icon: Coins, title: t("home.services.s3.t"), desc: t("home.services.s3.d") },
    { icon: PiggyBank, title: t("home.services.s4.t"), desc: t("home.services.s4.d") },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gold">{t("home.services.title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("home.services.desc")}</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="text-center group">
              <div className="mx-auto h-16 w-16 rounded-full bg-gold grid place-items-center text-gold-foreground shadow-elegant group-hover:scale-110 transition">
                <it.icon size={26} />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

