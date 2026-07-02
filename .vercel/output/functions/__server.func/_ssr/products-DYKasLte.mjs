import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as useT } from "./i18n-Co7DQvD3.mjs";
import { I as ArrowRight, P as Banknote, _ as Landmark, b as House, d as PiggyBank, j as CalendarRange, k as ChevronDown } from "../_libs/lucide-react.mjs";
import { _ as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DYKasLte.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fdRates = [
	{
		period: "15 Days",
		ordinary: "6.25",
		senior: "6.75"
	},
	{
		period: "46 Days",
		ordinary: "6.75",
		senior: "7.25"
	},
	{
		period: "91 Days",
		ordinary: "7.00",
		senior: "7.50"
	},
	{
		period: "6 Months",
		ordinary: "7.75",
		senior: "8.25"
	},
	{
		period: "1 Year",
		ordinary: "8.00",
		senior: "8.50"
	},
	{
		period: "24 months",
		ordinary: "8.10",
		senior: "8.60"
	}
];
function ProductsPage() {
	const { t } = useT();
	const location = useLocation();
	const [open, setOpen] = (0, import_react.useState)("fd");
	const items = [
		{
			key: "fd",
			icon: PiggyBank,
			accent: "border-sky-500 bg-sky-50 text-sky-700",
			pill: "bg-sky-500"
		},
		{
			key: "mss",
			icon: CalendarRange,
			accent: "border-emerald-500 bg-emerald-50 text-emerald-700",
			pill: "bg-emerald-500"
		},
		{
			key: "pl",
			icon: Banknote,
			accent: "border-amber-500 bg-amber-50 text-amber-700",
			pill: "bg-amber-500"
		},
		{
			key: "prop",
			icon: House,
			accent: "border-violet-500 bg-violet-50 text-violet-700",
			pill: "bg-violet-500"
		},
		{
			key: "rd",
			icon: Landmark,
			accent: "border-rose-500 bg-rose-50 text-rose-700",
			pill: "bg-rose-500"
		}
	];
	(0, import_react.useEffect)(() => {
		const hash = location.hash.replace("#", "");
		if (hash === "fd" || hash === "mss" || hash === "pl" || hash === "prop" || hash === "rd") {
			setOpen(hash);
			document.getElementById(hash)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
	}, [location.hash]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-primary text-primary-foreground py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl md:text-6xl font-black tracking-tight",
					style: { fontWeight: 950 },
					children: t("products.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-lg opacity-90",
					children: t("products.desc")
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: items.map((item) => {
						const isOpen = open === item.key;
						const label = t(`products.${item.key}.label`);
						const summary = t(`products.${item.key}.summary`);
						const points = [
							t(`products.${item.key}.p1`),
							t(`products.${item.key}.p2`),
							t(`products.${item.key}.p3`),
							t(`products.${item.key}.p4`),
							t(`products.${item.key}.p5`),
							t(`products.${item.key}.p6`),
							t(`products.${item.key}.p7`)
						];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: item.key,
							className: `rounded-xl border bg-card shadow-card overflow-hidden transition-colors ${isOpen ? item.accent : "border-border"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpen(isOpen ? "fd" : item.key),
								className: `flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${isOpen ? "bg-background/70" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `h-11 w-11 rounded-lg grid place-items-center text-white shadow-elegant ${item.pill}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { size: 20 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm uppercase tracking-[0.16em] text-foreground",
										style: { fontWeight: 950 },
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm text-muted-foreground",
										children: summary
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									size: 18,
									className: `shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`
								})]
							}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-border/70 px-5 py-5",
								children: item.key === "fd" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "overflow-hidden rounded-xl border border-border bg-background",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-b border-border px-4 py-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-lg font-bold text-foreground",
												children: "Fixed Deposit Interest With Effect From 2026-01-15"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-sm text-muted-foreground",
												children: "senior citizen"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "overflow-x-auto",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
												className: "w-full border-collapse text-left text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
													className: "bg-muted/60",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
															className: "border-b border-r border-border px-4 py-3 font-bold text-foreground",
															children: "Period"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
															className: "border-b border-r border-border px-4 py-3 font-bold text-foreground",
															children: "Ordinary(%)"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
															className: "border-b border-border px-4 py-3 font-bold text-foreground",
															children: "Senior Citizen(%)"
														})
													] })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: fdRates.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "odd:bg-background even:bg-muted/30",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "border-b border-r border-border px-4 py-3 font-medium text-foreground",
															children: row.period
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "border-b border-r border-border px-4 py-3 text-foreground/85",
															children: row.ordinary
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "border-b border-border px-4 py-3 text-foreground/85",
															children: row.senior
														})
													]
												}, row.period)) })]
											})
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground",
										children: "Key Features"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 grid gap-3 sm:grid-cols-2",
										children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
											className: "rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground/85",
											children: point
										}, point))
									})] })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid gap-3 sm:grid-cols-2",
									children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground/85",
										children: point
									}, point))
								})
							})]
						}, item.key);
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: t("products.cta.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: t("products.cta.desc")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant",
					children: ["Contact Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })]
				})]
			})
		})
	] });
}
//#endregion
export { ProductsPage as component };
