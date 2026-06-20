import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { n as useT, t as LanguageProvider } from "./i18n-NC86inAF.mjs";
import { E as Facebook, N as ChevronDown, _ as MapPin, g as Menu, h as Phone, s as Twitter, t as X, v as Mail, w as Globe, x as Instagram, y as Linkedin } from "../_libs/lucide-react.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-al7pC_wn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-eH7J6ha2.css";
var fav_default = "/assets/fav-BBVpO2_2.png";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var new_default = "/assets/new-BNqxX6WI.png";
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [langOpen, setLangOpen] = (0, import_react.useState)(false);
	const { lang, setLang, t } = useT();
	const langRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);
	const nav = [
		{
			to: "/",
			label: t("nav.home")
		},
		{
			to: "/about",
			label: t("nav.about")
		},
		{
			to: "/team",
			label: t("nav.team")
		},
		{
			to: "/products",
			label: t("nav.products")
		},
		{
			to: "/events",
			label: t("nav.events")
		},
		{
			to: "/contact",
			label: t("nav.contact")
		}
	];
	const productMenu = [
		{
			hash: "fd",
			label: t("nav.products.fd")
		},
		{
			hash: "mss",
			label: t("nav.products.mss")
		},
		{
			hash: "pl",
			label: t("nav.products.pl")
		},
		{
			hash: "prop",
			label: t("nav.products.prop")
		},
		{
			hash: "rd",
			label: t("nav.products.rd")
		}
	];
	const langs = [{
		code: "ml",
		label: t("lang.malayalam")
	}, {
		code: "en",
		label: t("lang.english")
	}];
	const current = langs.find((l) => l.code === lang);
	const LangSwitcher = ({ mobile = false }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: mobile ? void 0 : langRef,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setLangOpen(!langOpen),
			className: "flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-muted transition",
			"aria-label": t("nav.language"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { size: 15 }),
				" ",
				current.label,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
			]
		}), langOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute right-0 mt-2 w-40 rounded-md border border-border bg-popover shadow-elegant z-50 overflow-hidden",
			children: langs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setLang(l.code);
					setLangOpen(false);
				},
				className: `block w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition ${l.code === lang ? "bg-primary/10 text-primary font-semibold" : ""}`,
				children: l.label
			}, l.code))
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-primary text-primary-foreground text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 12 }), " +91-9876543210"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden sm:flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 12 }), " info@mukundhapuramsocity.com"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden md:block opacity-90",
						children: t("brand.tagline")
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-3 flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: new_default,
							alt: t("brand.name"),
							className: "h-12 w-auto max-w-[240px] object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden md:flex items-center gap-6",
						children: [
							nav.map((n) => n.to === "/products" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: n.to,
									className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1",
									activeProps: { className: "text-primary" },
									children: [
										n.label,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 14 })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-56 overflow-hidden rounded-md border border-border bg-popover shadow-elegant",
										children: productMenu.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/products",
											hash: item.hash,
											className: "block px-4 py-2.5 text-sm text-foreground/85 hover:bg-muted hover:text-primary transition-colors",
											children: item.label
										}, item.hash))
									})
								})]
							}, n.to) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
								activeProps: { className: "text-primary" },
								children: n.label
							}, n.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitcher, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/apply",
								className: "rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-95 transition",
								children: t("nav.apply")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:hidden flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitcher, { mobile: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "p-2",
							onClick: () => setOpen(!open),
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:hidden border-t border-border px-4 py-3 flex flex-col gap-3",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "text-sm font-medium",
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/apply",
					onClick: () => setOpen(false),
					className: "rounded-md bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground text-center",
					children: t("nav.apply")
				})]
			})
		]
	});
}
function Footer() {
	const { t } = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-navy-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center font-bold",
							children: "MS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold",
								children: t("brand.name")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] tracking-[0.2em] opacity-70",
								children: t("brand.suffix")
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-75 max-w-xs",
						children: t("footer.about")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3 mt-5",
						children: [
							Facebook,
							Twitter,
							Linkedin,
							Instagram
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "h-8 w-8 rounded-md bg-white/10 grid place-items-center hover:bg-primary transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 15 })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-4",
					children: t("footer.quick")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm opacity-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: t("nav.home")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: t("nav.about")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/team",
							children: t("nav.team")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							children: t("nav.products")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							children: t("nav.events")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: t("nav.contact")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/apply",
							children: t("nav.apply")
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-4",
					children: t("footer.services")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm opacity-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("footer.s1") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("footer.s2") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("footer.s3") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("footer.s4") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("footer.s5") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("footer.products") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("footer.team") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t("footer.events") })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-4",
					children: t("footer.contact")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm opacity-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 16,
									className: "text-primary shrink-0 mt-0.5"
								}),
								" ",
								t("footer.addr")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 16,
								className: "text-primary shrink-0 mt-0.5"
							}), " +91-9876543210"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								size: 16,
								className: "text-primary shrink-0 mt-0.5"
							}), " info@mukundhapuramsocity.com"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs opacity-70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					t("brand.name"),
					". ",
					t("footer.rights")
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: t("footer.privacy")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: t("footer.terms")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: t("footer.disclaimer")
						})
					]
				})]
			})
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 inline-flex rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground",
					children: "Try again"
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Mukundhapuram Socity Limited — Trusted Financial Partner" },
			{
				name: "description",
				content: "Loans, kuries, gold loans and fixed deposits with attractive rates from Mukundhapuram Socity Limited."
			},
			{
				property: "og:title",
				content: "Mukundhapuram Socity Limited"
			},
			{
				property: "og:description",
				content: "Your trusted partner for loans, kuries, and fixed deposits."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: fav_default,
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=Noto+Sans+Malayalam:wght@400;500;600;700;800&family=Manjari:wght@400;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		}) })
	});
}
var $$splitComponentImporter$6 = () => import("./team-CLlsH0-h.mjs");
var Route$6 = createFileRoute("/team")({
	head: () => ({ meta: [{ title: "Our Team - Mukundhapuram Socity Limited" }, {
		name: "description",
		content: "Meet our current board, staff, and heritage leaders."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./products-CCAnitkD.mjs");
var Route$5 = createFileRoute("/products")({
	head: () => ({ meta: [{ title: "Products - Mukundhapuram Socity Limited" }, {
		name: "description",
		content: "Explore our savings and loan products."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./events-Chim1tT1.mjs");
var Route$4 = createFileRoute("/events")({
	head: () => ({ meta: [{ title: "Events - Mukundhapuram Socity Limited" }, {
		name: "description",
		content: "Upcoming and recent events, meetings, and member programs from Mukundhapuram Socity Limited."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-C2Tx1C1T.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "ബന്ധപ്പെടുക — മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡ്" }, {
		name: "description",
		content: "വായ്പകൾ, കുറികൾ, നിക്ഷേപങ്ങൾ — ഞങ്ങളുടെ വിദഗ്ധരുമായി ബന്ധപ്പെടുക."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./apply-CcqVXJpX.mjs");
var Route$2 = createFileRoute("/apply")({
	head: () => ({ meta: [{ title: "വായ്പ അപേക്ഷ — മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡ്" }, {
		name: "description",
		content: "₹4 ലക്ഷം വരെ വ്യക്തിഗത വായ്പയ്ക്ക് അപേക്ഷിക്കുക. കുറഞ്ഞ രേഖകളിൽ വേഗത്തിലുള്ള അംഗീകാരം."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-B75V_PhK.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "ഞങ്ങളെക്കുറിച്ച് — മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡ്" }, {
		name: "description",
		content: "മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡിന്റെ കഥ, കാഴ്ചപ്പാട്, ദൗത്യം, പ്രതിബദ്ധത."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-D3Xa0IQv.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: "മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡ് — വായ്പകൾ, കുറികൾ & നിക്ഷേപങ്ങൾ" }, {
		name: "description",
		content: "തൽക്ഷണ വായ്പകൾ, ആകർഷകമായ സ്ഥിര നിക്ഷേപങ്ങൾ, സ്വർണ്ണ വായ്പകൾ, വിശ്വസ്ത കുറികൾ."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var TeamRoute = Route$6.update({
	id: "/team",
	path: "/team",
	getParentRoute: () => Route$7
});
var ProductsRoute = Route$5.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$7
});
var EventsRoute = Route$4.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var ApplyRoute = Route$2.update({
	id: "/apply",
	path: "/apply",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ApplyRoute,
	ContactRoute,
	EventsRoute,
	ProductsRoute,
	TeamRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
