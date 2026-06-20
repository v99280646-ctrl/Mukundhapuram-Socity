import { createFileRoute } from "@tanstack/react-router";
import { Shield, Users, TrendingUp, Award, Eye, Target } from "lucide-react";
import { useT } from "@/lib/i18n";

const datePattern = /(?:\b\d{1,2}\.\d{1,2}\.\s*\d{2,4}\b|\b\d{1,2}\s*(?:ജനുവരി|ഫെബ്രുവരി|മാര്‍ച്ച്|മാർച്ച്|ഏപ്രില്‍|ഏപ്രിൽ|മേയ്|ജൂണ്‍|ജൂണ്‍|ജൂലൈ|ആഗസ്റ്റ്|സെപ്റ്റംബര്‍|സെപ്റ്റംബർ|ഒക്ടോബര്‍|ഒക്ടോബർ|നവംബര്‍|നവംബർ|ഡിസംബര്‍|ഡിസംബർ)\s*\d{4}\b|\b\d{4}\b)/g;

function emphasizeDates(text: string) {
  const parts = text.split(datePattern);
  const matches = text.match(datePattern) ?? [];
  return parts.flatMap((part, index) => {
    const out: React.ReactNode[] = [];
    if (part) out.push(part);
    const match = matches[index];
    if (match) out.push(<strong key={`${match}-${index}`} className="font-semibold text-foreground">{match}</strong>);
    return out;
  });
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "ഞങ്ങളെക്കുറിച്ച് — മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡ്" },
      { name: "description", content: "മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡിന്റെ കഥ, കാഴ്ചപ്പാട്, ദൗത്യം, പ്രതിബദ്ധത." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useT();
  const values = [
    { icon: Shield, title: t("about.values.v1.t"), desc: t("about.values.v1.d") },
    { icon: Users, title: t("about.values.v2.t"), desc: t("about.values.v2.d") },
    { icon: TrendingUp, title: t("about.values.v3.t"), desc: t("about.values.v3.d") },
    { icon: Award, title: t("about.values.v4.t"), desc: t("about.values.v4.d") },
  ];
  const history = [
    t("about.history.p1"),
    t("about.history.p2"),
    t("about.history.p3"),
    t("about.history.p4"),
    t("about.history.p5"),
    t("about.history.p6"),
    t("about.history.p7"),
    t("about.history.p8"),
    t("about.history.p9"),
    t("about.history.p10"),
    t("about.history.p11"),
  ];
  const promoters = [
    "അഡ്വ ഡി ശങ്കരന്‍കുട്ടി",
    "എംപി അജിത് കുമാര്‍",
    "ശശിചക്രമത്ത്",
    "കെ ശേഖരന്‍",
    "ആര്‍ ബാലകൃഷ്ണന്‍",
    "എം.സുരേഷ്",
  ];
  const stats = [
    { v: "10K+", l: t("about.stats.1") },
    { v: "₹50Cr+", l: t("about.stats.2") },
    { v: "98%", l: t("about.stats.3") },
    { v: "3+", l: t("about.stats.4") },
  ];

  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">{t("about.hero.title")}</h1>
          <p className="mt-4 text-lg opacity-90">{t("about.hero.desc")}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">{t("about.story.title")}</h2>
            <p className="mt-4 text-muted-foreground">{emphasizeDates(t("about.story.p1"))}</p>
            <p className="mt-3 text-muted-foreground">{emphasizeDates(t("about.story.p2"))}</p>
            <p className="mt-3 text-muted-foreground">{emphasizeDates(t("about.story.p3"))}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl bg-gradient-navy text-navy-foreground p-10 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-bold text-gold">{s.v}</div>
                    <div className="text-sm opacity-80 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
          {[
            { icon: Eye, title: t("about.vision.t"), desc: t("about.vision.d") },
            { icon: Target, title: t("about.mission.t"), desc: t("about.mission.d") },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl bg-card border border-border p-8 shadow-card">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground shadow-elegant">
                <v.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold">{t("about.history.title")}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 text-muted-foreground leading-8">
              {history.map((item) => (
                <p key={item} className="rounded-xl border border-border bg-card p-5 shadow-card">
                  {emphasizeDates(item)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">നേതൃത്വം</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">മുന്‍ പ്രസിഡണ്ടുമാരും വൈസ്പ്രസിഡണ്ടുമാരും</h2>
            <p className="mt-3 text-muted-foreground">സംഘത്തിന്റെ മുന്‍കാല നേതൃത്വത്തെ സുതാര്യമായ രീതിയില്‍ അവതരിപ്പിക്കുന്ന വിഭാഗം.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">മുന്‍ പ്രസിഡണ്ടുമാര്‍</p>
              <div className="mt-5 space-y-3">
                {[
                  "ശശിചക്രമത്ത്",
                  "സി ചന്ദ്രശേഖരമേനോന്‍",
                ].map((name, index) => (
                  <div key={name} className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
                    <span className="font-semibold text-foreground">{name}</span>
                    <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">മുന്‍ വൈസ്പ്രസിഡണ്ടുമാര്‍</p>
              <div className="mt-5 space-y-3">
                {[
                  "സൗമ്യ മേനോന്‍",
                  "കെ. മനോജ്",
                  "ശ്രീദേവി നന്ദകുമാര്‍",
                ].map((name, index) => (
                  <div key={name} className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
                    <span className="font-semibold text-foreground">{name}</span>
                    <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">പ്രമോട്ടര്‍മാര്‍</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">ആദ്യഘട്ട നേതൃത്വം</h2>
            <p className="mt-3 text-muted-foreground">സംഘത്തിന്റെ ആരംഭത്തില്‍ നേതൃനിരയില്‍ ഉണ്ടായിരുന്ന പ്രമോട്ടര്‍മാരുടെ പട്ടിക.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "അഡ്വ ഡി ശങ്കരന്‍കുട്ടി",
              "എംപി അജിത് കുമാര്‍",
              "ശശിചക്രമത്ത്",
              "കെ ശേഖരന്‍",
              "ആര്‍ ബാലകൃഷ്ണന്‍",
              "എം.സുരേഷ്",
            ].map((name, index) => (
              <div key={name} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">0{index + 1}</div>
                <div className="mt-2 text-base font-semibold text-foreground">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">ഭരണഘടന</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">ആദ്യകാല ഡയറക്ടര്‍മാര്‍</h2>
            <p className="mt-3 text-muted-foreground">സംഘത്തിന്റെ ആരംഭകാല ഭരണസമിതിയില്‍ ഉണ്ടായിരുന്ന ഡയറക്ടര്‍മാരുടെ പട്ടിക.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "എം. പി. അജിത് കുമാര്‍",
              "അഡ്വ. ഡി. ശങ്കരന്‍കുട്ടി",
              "എം സുരേഷ്",
              "കെ ശേഖരന്‍",
              "സിനി സുരേഷ്",
              "ബിന്ദു പ്രകാശ്",
              "ഷൈലജ രാധാകൃഷ്ണന്‍",
              "ആര്‍ ബാലകൃഷ്ണന്‍",
              "എ. ഉണ്ണികൃഷ്ണന്‍",
              "കെ.ബി ശ്രീധരന്‍",
              "മിനി ടി കെ",
              "സുമതി കെ കെ",
              "പ്രവീണ്‍കുമാര്‍",
              "ശ്രീദേവി നന്ദകുമാര്‍",
            ].map((name, index) => (
              <div key={name} className="rounded-xl border border-border bg-card p-5 shadow-card">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">0{index + 1}</div>
                <div className="mt-2 text-base font-semibold text-foreground">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">{t("about.values.title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("about.values.desc")}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-card hover:shadow-elegant transition">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
