import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchEventPosts, type EventPostListItem } from "@/lib/event-api";

export const Route = createFileRoute("/events")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Events - Mukundhapuram Society Limited" },
      {
        name: "description",
        content:
          "Upcoming and recent events, meetings, and member programs from Mukundhapuram Society Limited.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const [events, setEvents] = useState<EventPostListItem[]>([]);
  const [loading, setLoading] = useState(true);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isIndex = pathname === "/events";

  useEffect(() => {
    async function getEvents() {
      try {
        setLoading(true);

        const data = await fetchEventPosts("69280bcd5ec9adaee4326afc", 1);
        setEvents(data?.posts ?? []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    getEvents();
  }, []);

  if (!isIndex) {
    return <Outlet />;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
              Events
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Event Highlights and Community Moments
            </h1>

            <p className="mt-4 max-w-2xl text-base text-primary-foreground/90 sm:text-lg">
              Stay updated with meetings, celebrations, and community programs from Mukundhapuram Society Limited.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          {loading ? (
            <p className="text-muted-foreground">Loading events...</p>
          ) : events.length === 0 ? (
            <p className="text-muted-foreground">No events available.</p>
          ) : (
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              {events.map((event) => (
                <article
                  key={event._id}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
                >
                  {event.media?.[0]?.url && (
                    <img
                      src={event.media[0].url}
                      alt={event.title}
                      className="h-40 w-full object-cover sm:h-44 md:h-48"
                    />
                  )}

                  <div className="p-4 sm:p-5">
                    <h2 className="text-lg font-bold sm:text-xl">
                      {event.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {event.content}
                    </p>

                    <Link
                      to="/events/$eventId"
                      params={{ eventId: event.slug }}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                    >
                      View Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
