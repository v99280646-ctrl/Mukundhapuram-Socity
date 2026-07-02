import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { _ as Link, p as Outlet, u as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./events-Dc_B9_Pw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-DcqRYSpm.js
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	const events = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: useRouterState({ select: (state) => state.location.pathname }) === "/events" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-gradient-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80",
						children: "Events"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl",
						children: "Event Highlights and Community Moments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-base text-primary-foreground/90 sm:text-lg",
						children: "Stay updated with meetings, celebrations, and community programs from Mukundhapuram Socity Limited."
					})
				]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 sm:py-16 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4",
				children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: event.media?.[0]?.url,
						alt: event.title,
						className: "h-40 w-full object-cover sm:h-44 md:h-48"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold sm:text-xl",
								children: event.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-sm text-muted-foreground leading-6",
								children: event.content
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/events/$eventId",
								params: { eventId: event.slug },
								className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold",
								children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
							})
						]
					})]
				}, event._id))
			})
		})
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { EventsPage as component };
