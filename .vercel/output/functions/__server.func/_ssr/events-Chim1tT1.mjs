import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useT } from "./i18n-NC86inAF.mjs";
import { H as ArrowRight, I as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as hero_finance_default, t as gold_loan_default } from "./gold-loan-BMT7_T_D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Chim1tT1.js
var import_jsx_runtime = require_jsx_runtime();
function EventsPage() {
	const { t } = useT();
	const events = [
		{
			image: hero_finance_default,
			title: t("events.e1.t"),
			desc: t("events.e1.d")
		},
		{
			image: gold_loan_default,
			title: t("events.e2.t"),
			desc: t("events.e2.d")
		},
		{
			image: hero_finance_default,
			title: t("events.e3.t"),
			desc: t("events.e3.d")
		},
		{
			image: gold_loan_default,
			title: t("events.e4.t"),
			desc: t("events.e4.d")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-primary text-primary-foreground py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] opacity-90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 16 }),
						" ",
						t("events.badge")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl md:text-5xl font-extrabold",
					children: t("events.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg opacity-90",
					children: t("events.desc")
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4",
				children: events.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-border bg-card shadow-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: event.image,
						alt: event.title,
						className: "h-48 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: event.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-6",
								children: event.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary",
								children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
							})
						]
					})]
				}, event.title))
			})
		})
	})] });
}
//#endregion
export { EventsPage as component };
