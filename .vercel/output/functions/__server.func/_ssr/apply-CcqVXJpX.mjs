import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useT } from "./i18n-NC86inAF.mjs";
import { L as Briefcase, M as CircleCheckBig, S as IndianRupee, T as FileText, _ as MapPin, a as User, d as Shield, h as Phone, k as CreditCard, p as Send, v as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apply-CcqVXJpX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	name: "",
	phone: "",
	email: "",
	workplace: "",
	salary: "",
	security: "",
	aadharNumber: "",
	panNumber: "",
	address: ""
};
function ApplyPage() {
	const { t } = useT();
	const [step, setStep] = (0, import_react.useState)(1);
	const [data, setData] = (0, import_react.useState)(empty);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const set = (k) => (e) => setData({
		...data,
		[k]: e.target.value
	});
	const stepComplete = (s) => {
		if (s === 1) return data.name && data.phone && data.workplace && data.salary && data.security;
		if (s === 2) return data.aadharNumber.length >= 12 && data.panNumber.length >= 10;
		if (s === 3) return data.address.trim().length > 5;
		return false;
	};
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[70vh] grid place-items-center px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center rounded-2xl border border-border bg-card p-10 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto h-16 w-16 rounded-full bg-success/15 text-success grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 36 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-2xl font-bold",
					children: t("apply.done.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: t("apply.done.desc")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setSubmitted(false);
						setData(empty);
						setStep(1);
					},
					className: "mt-6 rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
					children: t("apply.done.again")
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-primary text-primary-foreground py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl md:text-5xl font-extrabold",
				children: t("apply.hero.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-lg opacity-90",
				children: [
					t("apply.hero.desc1"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t("apply.hero.desc2") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					t("apply.hero.desc3"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold font-bold text-2xl",
						children: t("apply.hero.desc4")
					}),
					" ",
					t("apply.hero.desc5")
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, { step }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					if (stepComplete(3)) setSubmitted(true);
				},
				className: "mt-8 rounded-2xl bg-card border border-border shadow-card p-8",
				children: [
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							icon: User,
							children: t("apply.s1.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("apply.f.name"),
									icon: User,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										maxLength: 100,
										value: data.name,
										onChange: set("name"),
										className: inputCls
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("apply.f.phone"),
									icon: Phone,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "tel",
										maxLength: 15,
										value: data.phone,
										onChange: set("phone"),
										className: inputCls,
										placeholder: "+91 XXXXXXXXXX"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("apply.f.email"),
									icon: Mail,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										maxLength: 255,
										value: data.email,
										onChange: set("email"),
										className: inputCls
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("apply.f.workplace"),
									icon: Briefcase,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										maxLength: 100,
										value: data.workplace,
										onChange: set("workplace"),
										className: inputCls,
										placeholder: t("apply.f.workplacePh")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("apply.f.salary"),
									icon: IndianRupee,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										value: data.salary,
										onChange: set("salary"),
										className: inputCls,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: t("apply.f.salary.select")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("apply.f.salary.o1") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("apply.f.salary.o2") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("apply.f.salary.o3") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("apply.f.salary.o4") })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("apply.f.security"),
									icon: Shield,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										value: data.security,
										onChange: set("security"),
										className: inputCls,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: t("apply.f.salary.select")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("apply.f.security.o1") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("apply.f.security.o2") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("apply.f.security.o3") }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("apply.f.security.o4") })
										]
									})
								})
							]
						})]
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								icon: CreditCard,
								children: t("apply.s2.title")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("apply.f.aadhar"),
									icon: CreditCard,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										minLength: 12,
										maxLength: 12,
										value: data.aadharNumber,
										onChange: set("aadharNumber"),
										className: inputCls,
										placeholder: t("apply.f.aadharPh")
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("apply.f.pan"),
									icon: FileText,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										minLength: 10,
										maxLength: 10,
										value: data.panNumber.toUpperCase(),
										onChange: (e) => setData({
											...data,
											panNumber: e.target.value.toUpperCase()
										}),
										className: inputCls,
										placeholder: "ABCDE1234F"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { size: 14 }),
									" ",
									t("apply.encrypted")
								]
							})
						]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							icon: MapPin,
							children: t("apply.s3.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("apply.f.address"),
							icon: MapPin,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								maxLength: 500,
								rows: 4,
								value: data.address,
								onChange: set("address"),
								className: inputCls,
								placeholder: t("apply.f.addressPh")
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: step === 1,
							onClick: () => setStep(step - 1),
							className: "rounded-md border border-border px-5 py-2.5 text-sm font-medium disabled:opacity-40",
							children: t("apply.back")
						}), step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: !stepComplete(step),
							onClick: () => setStep(step + 1),
							className: "rounded-md bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant disabled:opacity-50",
							children: t("apply.next")
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: !stepComplete(3),
							className: "inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant disabled:opacity-50",
							children: [
								t("apply.submit"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 15 })
							]
						})]
					})
				]
			})]
		})
	})] });
}
function Stepper({ step }) {
	const { t } = useT();
	const labels = [
		t("apply.step.personal"),
		t("apply.step.identity"),
		t("apply.step.address")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-between",
		children: labels.map((l, i) => {
			const n = i + 1;
			const active = n === step;
			const done = n < step;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `h-10 w-10 rounded-full grid place-items-center text-sm font-semibold ${done ? "bg-success text-white" : active ? "bg-gradient-primary text-primary-foreground shadow-elegant" : "bg-card border border-border text-muted-foreground"}`,
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { size: 18 }) : n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `mt-2 text-xs ${active ? "text-primary font-semibold" : "text-muted-foreground"}`,
						children: l
					})]
				}), i < labels.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `flex-1 h-0.5 mx-2 ${done ? "bg-success" : "bg-border"}` })]
			}, l);
		})
	});
}
var inputCls = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
function SectionTitle({ icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 pb-3 border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-9 w-9 rounded-md bg-primary/15 text-primary grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-semibold text-lg",
			children
		})]
	});
}
function Field({ label, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-sm font-medium flex items-center gap-1.5",
			children: [
				Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 14,
					className: "text-primary"
				}),
				" ",
				label
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5",
			children
		})]
	});
}
//#endregion
export { ApplyPage as component };
