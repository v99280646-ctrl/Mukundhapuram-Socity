import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useT } from "./i18n-NC86inAF.mjs";
import { D as Eye, V as Award, c as TrendingUp, d as Shield, l as Target, r as Users } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-B75V_PhK.js
var import_jsx_runtime = require_jsx_runtime();
var datePattern = /(?:\b\d{1,2}\.\d{1,2}\.\s*\d{2,4}\b|\b\d{1,2}\s*(?:ജനുവരി|ഫെബ്രുവരി|മാര്‍ച്ച്|മാർച്ച്|ഏപ്രില്‍|ഏപ്രിൽ|മേയ്|ജൂണ്‍|ജൂണ്‍|ജൂലൈ|ആഗസ്റ്റ്|സെപ്റ്റംബര്‍|സെപ്റ്റംബർ|ഒക്ടോബര്‍|ഒക്ടോബർ|നവംബര്‍|നവംബർ|ഡിസംബര്‍|ഡിസംബർ)\s*\d{4}\b|\b\d{4}\b)/g;
function emphasizeDates(text) {
	const parts = text.split(datePattern);
	const matches = text.match(datePattern) ?? [];
	return parts.flatMap((part, index) => {
		const out = [];
		if (part) out.push(part);
		const match = matches[index];
		if (match) out.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-semibold text-foreground",
			children: match
		}, `${match}-${index}`));
		return out;
	});
}
function AboutPage() {
	const { t } = useT();
	const values = [
		{
			icon: Shield,
			title: t("about.values.v1.t"),
			desc: t("about.values.v1.d")
		},
		{
			icon: Users,
			title: t("about.values.v2.t"),
			desc: t("about.values.v2.d")
		},
		{
			icon: TrendingUp,
			title: t("about.values.v3.t"),
			desc: t("about.values.v3.d")
		},
		{
			icon: Award,
			title: t("about.values.v4.t"),
			desc: t("about.values.v4.d")
		}
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
		t("about.history.p11")
	];
	const stats = [
		{
			v: "10K+",
			l: t("about.stats.1")
		},
		{
			v: "₹50Cr+",
			l: t("about.stats.2")
		},
		{
			v: "98%",
			l: t("about.stats.3")
		},
		{
			v: "3+",
			l: t("about.stats.4")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-primary text-primary-foreground py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl font-extrabold",
					children: t("about.hero.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg opacity-90",
					children: t("about.hero.desc")
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold",
						children: t("about.story.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: emphasizeDates(t("about.story.p1"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: emphasizeDates(t("about.story.p2"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: emphasizeDates(t("about.story.p3"))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative rounded-2xl bg-gradient-navy text-navy-foreground p-10 shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-6",
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-bold text-gold",
								children: s.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm opacity-80 mt-1",
								children: s.l
							})] }, s.l))
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6",
				children: [{
					icon: Eye,
					title: t("about.vision.t"),
					desc: t("about.vision.d")
				}, {
					icon: Target,
					title: t("about.mission.t"),
					desc: t("about.mission.d")
				}].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card border border-border p-8 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground shadow-elegant",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl font-bold",
							children: v.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: v.desc
						})
					]
				}, v.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold",
						children: t("about.history.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-5 md:grid-cols-2 text-muted-foreground leading-8",
						children: history.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl border border-border bg-card p-5 shadow-card",
							children: emphasizeDates(item)
						}, item))
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
							children: "നേതൃത്വം"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl md:text-4xl font-bold",
							children: "മുന്‍ പ്രസിഡണ്ടുമാരും വൈസ്പ്രസിഡണ്ടുമാരും"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "സംഘത്തിന്റെ മുന്‍കാല നേതൃത്വത്തെ സുതാര്യമായ രീതിയില്‍ അവതരിപ്പിക്കുന്ന വിഭാഗം."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "മുന്‍ പ്രസിഡണ്ടുമാര്‍"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-3",
							children: ["ശശിചക്രമത്ത്", "സി ചന്ദ്രശേഖരമേനോന്‍"].map((name, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-muted-foreground",
									children: ["0", index + 1]
								})]
							}, name))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: "മുന്‍ വൈസ്പ്രസിഡണ്ടുമാര്‍"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-3",
							children: [
								"സൗമ്യ മേനോന്‍",
								"കെ. മനോജ്",
								"ശ്രീദേവി നന്ദകുമാര്‍"
							].map((name, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-muted-foreground",
									children: ["0", index + 1]
								})]
							}, name))
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
							children: "പ്രമോട്ടര്‍മാര്‍"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl md:text-4xl font-bold",
							children: "ആദ്യഘട്ട നേതൃത്വം"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "സംഘത്തിന്റെ ആരംഭത്തില്‍ നേതൃനിരയില്‍ ഉണ്ടായിരുന്ന പ്രമോട്ടര്‍മാരുടെ പട്ടിക."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						"അഡ്വ ഡി ശങ്കരന്‍കുട്ടി",
						"എംപി അജിത് കുമാര്‍",
						"ശശിചക്രമത്ത്",
						"കെ ശേഖരന്‍",
						"ആര്‍ ബാലകൃഷ്ണന്‍",
						"എം.സുരേഷ്"
					].map((name, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-5 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: ["0", index + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-base font-semibold text-foreground",
							children: name
						})]
					}, name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-[0.2em] text-primary",
							children: "ഭരണഘടന"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl md:text-4xl font-bold",
							children: "ആദ്യകാല ഡയറക്ടര്‍മാര്‍"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "സംഘത്തിന്റെ ആരംഭകാല ഭരണസമിതിയില്‍ ഉണ്ടായിരുന്ന ഡയറക്ടര്‍മാരുടെ പട്ടിക."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
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
						"ശ്രീദേവി നന്ദകുമാര്‍"
					].map((name, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-5 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
							children: ["0", index + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-base font-semibold text-foreground",
							children: name
						})]
					}, name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-4xl font-bold",
						children: t("about.values.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: t("about.values.desc")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-6 text-center shadow-card hover:shadow-elegant transition",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto h-14 w-14 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { size: 22 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-semibold",
								children: v.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: v.desc
							})
						]
					}, v.title))
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
