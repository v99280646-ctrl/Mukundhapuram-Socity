import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useT } from "./i18n-NC86inAF.mjs";
import { A as Coins, H as ArrowRight, P as Check, c as TrendingUp, f as ShieldCheck, h as Phone, j as Clock, m as PiggyBank, n as Wallet, u as Star, z as Banknote } from "../_libs/lucide-react.mjs";
import { n as hero_finance_default, t as gold_loan_default } from "./gold-loan-BMT7_T_D.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D3Xa0IQv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoanCalculatorSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLoanSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalculatorAndCallback, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
	] });
}
function Hero() {
	const { t } = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-gradient-primary text-primary-foreground overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-20 pointer-events-none",
			style: {
				backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)",
				backgroundSize: "32px 32px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-4xl md:text-6xl font-extrabold leading-[1.15]",
					children: [
						t("home.hero.title1"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: t("home.hero.title2")
						}),
						" ",
						t("home.hero.title3")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xl opacity-90 max-w-lg",
					children: t("home.hero.desc")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/apply",
						className: "rounded-md bg-background text-primary px-6 py-3 font-semibold shadow-elegant hover:scale-[1.02] transition",
						children: t("home.hero.apply")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold hover:bg-primary-foreground/10 transition",
						children: t("home.hero.learn")
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-primary-foreground/10 rounded-3xl blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_finance_default,
					alt: "Financial growth",
					width: 1280,
					height: 896,
					className: "relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
				})]
			})]
		})]
	});
}
function Features() {
	const { t } = useT();
	const items = [
		{
			icon: TrendingUp,
			title: t("home.features.f1.t"),
			desc: t("home.features.f1.d")
		},
		{
			icon: ShieldCheck,
			title: t("home.features.f2.t"),
			desc: t("home.features.f2.d")
		},
		{
			icon: Clock,
			title: t("home.features.f3.t"),
			desc: t("home.features.f3.d")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-bold",
					children: t("home.features.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: t("home.features.desc")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid md:grid-cols-3 gap-6",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group rounded-xl border border-border bg-card p-7 shadow-card hover:-translate-y-1 hover:shadow-elegant transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground shadow-elegant",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-semibold text-lg",
							children: it.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base text-muted-foreground",
							children: it.desc
						})
					]
				}, it.title))
			})]
		})
	});
}
function LoanCalculatorSection() {
	const { t } = useT();
	const [amount, setAmount] = (0, import_react.useState)(2e5);
	const [tenure, setTenure] = (0, import_react.useState)(24);
	const [rate, setRate] = (0, import_react.useState)(12);
	const { emi, totalAmount, totalInterest } = (0, import_react.useMemo)(() => {
		const r = rate / 12 / 100;
		const n = tenure;
		const emi = amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
		const totalAmount = emi * n;
		return {
			emi,
			totalAmount,
			totalInterest: totalAmount - amount
		};
	}, [
		amount,
		tenure,
		rate
	]);
	const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
	const bullets = [
		t("home.calc.b1"),
		t("home.calc.b2"),
		t("home.calc.b3"),
		t("home.calc.b4")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-navy text-navy-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-4xl font-bold",
					children: [
						t("home.calc.title1"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: t("home.calc.title2")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 opacity-85 max-w-md",
					children: [
						t("home.calc.desc1"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold font-bold",
							children: t("home.calc.desc2")
						}),
						" ",
						t("home.calc.desc3")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2.5 text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-5 w-5 rounded-full bg-success/20 text-success grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 12 })
						}), b]
					}, b))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/apply",
					className: "mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant",
					children: [
						t("home.calc.applyNow"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-center font-semibold text-lg",
						children: t("home.calc.heading")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								label: t("home.calc.amount"),
								value: fmt(amount),
								min: 5e4,
								max: 4e5,
								step: 1e4,
								v: amount,
								setV: setAmount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								label: t("home.calc.tenure"),
								value: `${tenure} ${t("home.calc.months")}`,
								min: 6,
								max: 60,
								step: 6,
								v: tenure,
								setV: setTenure
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								label: t("home.calc.rate"),
								value: `${rate}${t("home.calc.rateUnit")}`,
								min: 8,
								max: 18,
								step: .5,
								v: rate,
								setV: setRate
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-lg bg-primary/15 border border-primary/30 p-4 space-y-2 text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: t("home.calc.emi"),
								value: fmt(emi),
								highlight: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: t("home.calc.total"),
								value: fmt(totalAmount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: t("home.calc.interest"),
								value: fmt(totalInterest)
							})
						]
					})
				]
			})]
		})
	});
}
function Slider({ label, value, min, max, step, v, setV }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between text-base mb-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "opacity-80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold text-gold",
			children: value
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "range",
		min,
		max,
		step,
		value: v,
		onChange: (e) => setV(Number(e.target.value)),
		className: "w-full accent-primary"
	})] });
}
function Row({ label, value, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: highlight ? "font-semibold" : "opacity-80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: highlight ? "font-bold text-gold text-lg" : "font-medium",
			children: value
		})]
	});
}
function GoldLoanSection() {
	const { t } = useT();
	const stats = [
		{
			v: "0.75%",
			l: t("home.gold.s1")
		},
		{
			v: "90%",
			l: t("home.gold.s2")
		},
		{
			v: t("home.gold.s3v"),
			l: t("home.gold.s3")
		},
		{
			v: t("home.gold.s4v"),
			l: t("home.gold.s4")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-gradient-gold text-gold-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: gold_loan_default,
				alt: "Gold loan",
				width: 1024,
				height: 768,
				loading: "lazy",
				className: "rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-base font-semibold tracking-wider uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { size: 20 }),
						" ",
						t("home.gold.tag")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl md:text-4xl font-bold",
					children: t("home.gold.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 opacity-85 max-w-md",
					children: t("home.gold.desc")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-3",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-white/40 backdrop-blur px-4 py-3 border border-white/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-bold",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm opacity-80",
							children: s.l
						})]
					}, s.l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/apply",
					className: "mt-7 inline-flex rounded-md bg-background text-primary px-6 py-3 font-semibold shadow-elegant",
					children: t("home.gold.cta")
				})
			] })]
		})
	});
}
function CalculatorAndCallback() {
	const { t } = useT();
	const [investAmount, setInvestAmount] = (0, import_react.useState)(1e5);
	const [tenureM, setTenureM] = (0, import_react.useState)(12);
	const rate = 8.5;
	const maturity = investAmount * Math.pow(1.085, tenureM / 12);
	const earned = maturity - investAmount;
	const [callback, setCallback] = (0, import_react.useState)({
		name: "",
		phone: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card border border-border shadow-card p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-semibold text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-9 w-9 rounded-md bg-primary/15 text-primary grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PiggyBank, { size: 18 })
						}), t("home.fd.title")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-5 text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: t("home.fd.amount")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: ["₹", investAmount.toLocaleString("en-IN")]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 1e4,
							max: 1e6,
							step: 1e4,
							value: investAmount,
							onChange: (e) => setInvestAmount(Number(e.target.value)),
							className: "w-full accent-primary"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-between mb-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [
									t("home.fd.tenure"),
									" ",
									tenureM,
									" ",
									t("home.calc.months")
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 3,
							max: 60,
							step: 3,
							value: tenureM,
							onChange: (e) => setTenureM(Number(e.target.value)),
							className: "w-full accent-primary"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-lg bg-primary/10 border border-primary/20 p-4 space-y-1.5 text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("home.fd.rate") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-primary",
									children: [rate, "% p.a."]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("home.fd.maturity") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-success",
									children: ["₹", Math.round(maturity).toLocaleString("en-IN")]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("home.fd.earned") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-success",
									children: ["₹", Math.round(earned).toLocaleString("en-IN")]
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				className: "rounded-2xl bg-card border border-border shadow-card p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-semibold text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-9 w-9 rounded-md bg-primary/15 text-primary grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 })
						}), t("home.cb.title")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base text-muted-foreground",
						children: t("home.cb.desc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("home.cb.name"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								maxLength: 100,
								value: callback.name,
								onChange: (e) => setCallback({
									...callback,
									name: e.target.value
								}),
								placeholder: t("home.cb.namePh"),
								className: "w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-ring"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("home.cb.phone"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "tel",
								maxLength: 15,
								value: callback.phone,
								onChange: (e) => setCallback({
									...callback,
									phone: e.target.value
								}),
								placeholder: t("home.cb.phonePh"),
								className: "w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-ring"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-5 w-full rounded-md bg-gradient-primary py-3 text-base font-semibold text-primary-foreground shadow-elegant",
						children: sent ? t("home.cb.done") : t("home.cb.btn")
					})
				]
			})]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-base font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5",
			children
		})]
	});
}
function Services() {
	const { t } = useT();
	const items = [
		{
			icon: Wallet,
			title: t("home.services.s1.t"),
			desc: t("home.services.s1.d")
		},
		{
			icon: Banknote,
			title: t("home.services.s2.t"),
			desc: t("home.services.s2.d")
		},
		{
			icon: Coins,
			title: t("home.services.s3.t"),
			desc: t("home.services.s3.d")
		},
		{
			icon: PiggyBank,
			title: t("home.services.s4.t"),
			desc: t("home.services.s4.d")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-bold",
					children: t("home.services.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: t("home.services.desc")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-16 w-16 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground shadow-elegant group-hover:scale-110 transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { size: 26 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-semibold",
							children: it.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base text-muted-foreground",
							children: it.desc
						})
					]
				}, it.title))
			})]
		})
	});
}
function Testimonials() {
	const { t } = useT();
	const items = [
		{
			quote: t("home.test.q1"),
			name: "രാജേഷ് കുമാർ"
		},
		{
			quote: t("home.test.q2"),
			name: "പ്രിയ ശർമ്മ"
		},
		{
			quote: t("home.test.q3"),
			name: "അമിത് പട്ടേൽ"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl font-bold",
					children: t("home.test.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: t("home.test.desc")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid md:grid-cols-3 gap-6",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-card border border-border p-6 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-0.5 text-gold",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								size: 16,
								fill: "currentColor"
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-base text-foreground/80",
							children: [
								"\"",
								it.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-base font-semibold text-primary",
							children: ["— ", it.name]
						})
					]
				}, it.name))
			})]
		})
	});
}
//#endregion
export { HomePage as component };
