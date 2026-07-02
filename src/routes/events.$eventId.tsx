import { createFileRoute, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchEventPostDetails, type EventPostDetails } from "@/lib/event-api";

export const Route = createFileRoute("/events/$eventId")({
  ssr: false,
  head: () => ({
    meta: [{ title: "Event Details - Mukundhapuram Society Limited" }],
  }),
  component: EventDetailsPage,
});

function EventDetailsPage() {
  const { eventId } = useParams({ from: "/events/$eventId" });

  const [event, setEvent] = useState<EventPostDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEventDetails() {
      try {
        setLoading(true);

        const data = await fetchEventPostDetails(eventId);
        setEvent(data?.post ?? null);
      } catch (error) {
        console.error("Failed to fetch event details:", error);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    }

    if (eventId) {
      getEventDetails();
    }
  }, [eventId]);

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-muted-foreground">Loading event...</p>
        </div>
      </section>
    );
  }

  if (!event) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-bold">Event not found</h1>
          <p className="mt-3 text-muted-foreground">
            The event you requested is not available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <h1 className="mt-2 max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            {event.title}
          </h1>
        </div>
      </section>

      <section className="bg-background py-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div>
            {event.media?.length ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {event.media.map((media, index) => (
                    <CarouselItem key={`${event._id}-${index}`}>
                      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                        <img
                          src={media.url}
                          alt={`${event.title} ${index + 1}`}
                          className="h-[240px] w-full object-cover sm:h-[320px] md:h-[500px]"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {event.media.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2 hidden sm:flex" />
                    <CarouselNext className="right-2 hidden sm:flex" />
                  </>
                )}
              </Carousel>
            ) : (
              <div className="flex h-[240px] items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground shadow-card sm:h-[320px] md:h-[500px]">
                No image available
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-card sm:p-6">
            <h2 className="mt-2 text-xl font-bold sm:mt-4 sm:text-2xl">
              Description
            </h2>

            <div
              className="prose prose-slate mt-3 max-w-none prose-p:leading-7 prose-li:leading-7 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: event.content ?? "" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
