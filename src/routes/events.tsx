import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-finance.jpg";
import goldImg from "@/assets/gold-loan.jpg";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events - Mukundhapuram Socity Limited" },
      { name: "description", content: "Upcoming and recent events, meetings, and member programs from Mukundhapuram Socity Limited." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { t } = useT();
  const events = [
    {
      image: heroImg,
      title: t("events.e1.t"),
      desc: t("events.e1.d"),
    },
    {
      image: goldImg,
      title: t("events.e2.t"),
      desc: t("events.e2.d"),
    },
    {
      image: heroImg,
      title: t("events.e3.t"),
      desc: t("events.e3.d"),
    },
    {
      image: goldImg,
      title: t("events.e4.t"),
      desc: t("events.e4.d"),
    },
  ];

  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] opacity-90">
            <CalendarDays size={16} /> {t("events.badge")}
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">{t("events.title")}</h1>
          <p className="mt-4 text-lg opacity-90">{t("events.desc")}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {events.map((event) => (
              <article key={event.title} className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
                <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h2 className="text-xl font-bold">{event.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-6">{event.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View Details <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
