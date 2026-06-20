import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useT } from "./i18n-NC86inAF.mjs";
import { _ as MapPin, h as Phone, j as Clock, p as Send, v as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C2Tx1C1T.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { t } = useT();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	const cards = [
		{
			icon: MapPin,
			title: t("contact.c1.t"),
			lines: [
				t("contact.c1.l1"),
				t("contact.c1.l2"),
				t("contact.c1.l3")
			]
		},
		{
			icon: Phone,
			title: t("contact.c2.t"),
			lines: [
				"+91-9876543210",
				"+91-9876543211",
				t("contact.c2.l3")
			]
		},
		{
			icon: Mail,
			title: t("contact.c3.t"),
			lines: ["info@mukundhapuramsocity.com", "support@mukundhapuramsocity.com"]
		},
		{
			icon: Clock,
			title: t("contact.c4.t"),
			lines: [t("contact.c4.l1"), t("contact.c4.l2")]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-primary text-primary-foreground py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl font-extrabold",
					children: t("contact.hero.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg opacity-90",
					children: t("contact.hero.desc")
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-6 text-center shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-14 w-14 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-semibold",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-muted-foreground space-y-0.5",
							children: c.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l }, l))
						})
					]
				}, c.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-card border border-border p-8 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold",
							children: t("contact.form.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: t("contact.form.desc")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setSent(true);
								setForm({
									name: "",
									email: "",
									phone: "",
									subject: "",
									message: ""
								});
							},
							className: "mt-6 grid sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("contact.form.name"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										maxLength: 100,
										value: form.name,
										onChange: (e) => setForm({
											...form,
											name: e.target.value
										}),
										className: inputCls
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("contact.form.email"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										maxLength: 255,
										value: form.email,
										onChange: (e) => setForm({
											...form,
											email: e.target.value
										}),
										className: inputCls
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("contact.form.phone"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "tel",
										maxLength: 15,
										value: form.phone,
										onChange: (e) => setForm({
											...form,
											phone: e.target.value
										}),
										className: inputCls
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("contact.form.subject"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										maxLength: 120,
										value: form.subject,
										onChange: (e) => setForm({
											...form,
											subject: e.target.value
										}),
										className: inputCls
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t("contact.form.message"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											required: true,
											maxLength: 1e3,
											rows: 5,
											value: form.message,
											onChange: (e) => setForm({
												...form,
												message: e.target.value
											}),
											className: inputCls
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary py-3 font-semibold text-primary-foreground shadow-elegant",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }),
										" ",
										sent ? t("contact.form.sent") : t("contact.form.send")
									]
								})
							]
						})
					]
				})
			})
		})
	] });
}
var inputCls = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5",
			children
		})]
	});
}
//#endregion
export { ContactPage as component };
