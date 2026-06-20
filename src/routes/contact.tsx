import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "ബന്ധപ്പെടുക — മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡ്" },
      { name: "description", content: "വായ്പകൾ, കുറികൾ, നിക്ഷേപങ്ങൾ — ഞങ്ങളുടെ വിദഗ്ധരുമായി ബന്ധപ്പെടുക." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useT();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const cards = [
    { icon: MapPin, title: t("contact.c1.t"), lines: [t("contact.c1.l1"), t("contact.c1.l2"), t("contact.c1.l3")] },
    { icon: Phone, title: t("contact.c2.t"), lines: ["+91-9876543210", "+91-9876543211", t("contact.c2.l3")] },
    { icon: Mail, title: t("contact.c3.t"), lines: ["info@mukundhapuramsocity.com", "support@mukundhapuramsocity.com"] },
    { icon: Clock, title: t("contact.c4.t"), lines: [t("contact.c4.l1"), t("contact.c4.l2")] },
  ];

  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">{t("contact.hero.title")}</h1>
          <p className="mt-4 text-lg opacity-90">{t("contact.hero.desc")}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
              <div className="mx-auto h-14 w-14 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground">
                <c.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <div className="mt-2 text-sm text-muted-foreground space-y-0.5">
                {c.lines.map((l) => <p key={l}>{l}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl bg-card border border-border p-8 shadow-card">
            <h2 className="text-2xl font-bold">{t("contact.form.title")}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("contact.form.desc")}</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
              className="mt-6 grid sm:grid-cols-2 gap-4"
            >
              <Field label={t("contact.form.name")}><input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} /></Field>
              <Field label={t("contact.form.email")}><input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} /></Field>
              <Field label={t("contact.form.phone")}><input required type="tel" maxLength={15} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} /></Field>
              <Field label={t("contact.form.subject")}><input required maxLength={120} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputCls} /></Field>
              <div className="sm:col-span-2">
                <Field label={t("contact.form.message")}><textarea required maxLength={1000} rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls} /></Field>
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary py-3 font-semibold text-primary-foreground shadow-elegant">
                <Send size={16} /> {sent ? t("contact.form.sent") : t("contact.form.send")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="text-sm font-medium">{label}</span><div className="mt-1.5">{children}</div></label>;
}
