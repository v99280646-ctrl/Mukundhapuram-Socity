import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Phone, Mail, CreditCard, FileText, MapPin, Send, CheckCircle, Shield, Briefcase, IndianRupee } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "വായ്പ അപേക്ഷ — മുകുന്ദപുരം സൊസൈറ്റി ലിമിറ്റഡ്" },
      { name: "description", content: "₹4 ലക്ഷം വരെ വ്യക്തിഗത വായ്പയ്ക്ക് അപേക്ഷിക്കുക. കുറഞ്ഞ രേഖകളിൽ വേഗത്തിലുള്ള അംഗീകാരം." },
    ],
  }),
  component: ApplyPage,
});

type FormData = {
  name: string; phone: string; email: string;
  workplace: string; salary: string; security: string;
  aadharNumber: string; panNumber: string; address: string;
};

const empty: FormData = { name: "", phone: "", email: "", workplace: "", salary: "", security: "", aadharNumber: "", panNumber: "", address: "" };

function ApplyPage() {
  const { t } = useT();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setData({ ...data, [k]: e.target.value });

  const stepComplete = (s: number) => {
    if (s === 1) return data.name && data.phone && data.workplace && data.salary && data.security;
    if (s === 2) return data.aadharNumber.length >= 12 && data.panNumber.length >= 10;
    if (s === 3) return data.address.trim().length > 5;
    return false;
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] grid place-items-center px-4 py-20">
        <div className="max-w-md text-center rounded-2xl border border-border bg-card p-10 shadow-card">
          <div className="mx-auto h-16 w-16 rounded-full bg-success/15 text-success grid place-items-center">
            <CheckCircle size={36} />
          </div>
          <h1 className="mt-5 text-2xl font-bold">{t("apply.done.title")}</h1>
          <p className="mt-2 text-muted-foreground">{t("apply.done.desc")}</p>
          <button onClick={() => { setSubmitted(false); setData(empty); setStep(1); }} className="mt-6 rounded-md bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
            {t("apply.done.again")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">{t("apply.hero.title")}</h1>
          <p className="mt-4 text-lg opacity-90">
            {t("apply.hero.desc1")} <strong>{t("apply.hero.desc2")}</strong><br />
            {t("apply.hero.desc3")} <span className="text-gold font-bold text-2xl">{t("apply.hero.desc4")}</span> {t("apply.hero.desc5")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-3xl px-4">
          <Stepper step={step} />

          <form
            onSubmit={(e) => { e.preventDefault(); if (stepComplete(3)) setSubmitted(true); }}
            className="mt-8 rounded-2xl bg-card border border-border shadow-card p-8"
          >
            {step === 1 && (
              <div className="space-y-5">
                <SectionTitle icon={User}>{t("apply.s1.title")}</SectionTitle>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("apply.f.name")} icon={User}><input required maxLength={100} value={data.name} onChange={set("name")} className={inputCls} /></Field>
                  <Field label={t("apply.f.phone")} icon={Phone}><input required type="tel" maxLength={15} value={data.phone} onChange={set("phone")} className={inputCls} placeholder="+91 XXXXXXXXXX" /></Field>
                  <Field label={t("apply.f.email")} icon={Mail}><input type="email" maxLength={255} value={data.email} onChange={set("email")} className={inputCls} /></Field>
                  <Field label={t("apply.f.workplace")} icon={Briefcase}><input required maxLength={100} value={data.workplace} onChange={set("workplace")} className={inputCls} placeholder={t("apply.f.workplacePh")} /></Field>
                  <Field label={t("apply.f.salary")} icon={IndianRupee}>
                    <select required value={data.salary} onChange={set("salary")} className={inputCls}>
                      <option value="">{t("apply.f.salary.select")}</option>
                      <option>{t("apply.f.salary.o1")}</option>
                      <option>{t("apply.f.salary.o2")}</option>
                      <option>{t("apply.f.salary.o3")}</option>
                      <option>{t("apply.f.salary.o4")}</option>
                    </select>
                  </Field>
                  <Field label={t("apply.f.security")} icon={Shield}>
                    <select required value={data.security} onChange={set("security")} className={inputCls}>
                      <option value="">{t("apply.f.salary.select")}</option>
                      <option>{t("apply.f.security.o1")}</option>
                      <option>{t("apply.f.security.o2")}</option>
                      <option>{t("apply.f.security.o3")}</option>
                      <option>{t("apply.f.security.o4")}</option>
                    </select>
                  </Field>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <SectionTitle icon={CreditCard}>{t("apply.s2.title")}</SectionTitle>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={t("apply.f.aadhar")} icon={CreditCard}><input required minLength={12} maxLength={12} value={data.aadharNumber} onChange={set("aadharNumber")} className={inputCls} placeholder={t("apply.f.aadharPh")} /></Field>
                  <Field label={t("apply.f.pan")} icon={FileText}><input required minLength={10} maxLength={10} value={data.panNumber.toUpperCase()} onChange={(e) => setData({ ...data, panNumber: e.target.value.toUpperCase() })} className={inputCls} placeholder="ABCDE1234F" /></Field>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5"><Shield size={14} /> {t("apply.encrypted")}</p>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <SectionTitle icon={MapPin}>{t("apply.s3.title")}</SectionTitle>
                <Field label={t("apply.f.address")} icon={MapPin}>
                  <textarea required maxLength={500} rows={4} value={data.address} onChange={set("address")} className={inputCls} placeholder={t("apply.f.addressPh")} />
                </Field>
              </div>
            )}

            <div className="mt-8 flex justify-between gap-3">
              <button type="button" disabled={step === 1} onClick={() => setStep(step - 1)} className="rounded-md border border-border px-5 py-2.5 text-sm font-medium disabled:opacity-40">{t("apply.back")}</button>
              {step < 3 ? (
                <button type="button" disabled={!stepComplete(step)} onClick={() => setStep(step + 1)} className="rounded-md bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant disabled:opacity-50">{t("apply.next")}</button>
              ) : (
                <button type="submit" disabled={!stepComplete(3)} className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant disabled:opacity-50">
                  {t("apply.submit")} <Send size={15} />
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Stepper({ step }: { step: number }) {
  const { t } = useT();
  const labels = [t("apply.step.personal"), t("apply.step.identity"), t("apply.step.address")];
  return (
    <div className="flex items-center justify-between">
      {labels.map((l, i) => {
        const n = i + 1;
        const active = n === step;
        const done = n < step;
        return (
          <div key={l} className="flex-1 flex items-center">
            <div className="flex flex-col items-center">
              <div className={`h-10 w-10 rounded-full grid place-items-center text-sm font-semibold ${done ? "bg-success text-white" : active ? "bg-gradient-primary text-gold-foreground shadow-elegant" : "bg-card border border-border text-muted-foreground"}`}>
                {done ? <CheckCircle size={18} /> : n}
              </div>
              <span className={`mt-2 text-xs ${active ? "text-primary font-semibold" : "text-muted-foreground"}`}>{l}</span>
            </div>
            {i < labels.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${done ? "bg-success" : "bg-border"}`} />}
          </div>
        );
      })}
    </div>
  );
}

const inputCls = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function SectionTitle({ icon: Icon, children }: { icon: React.ComponentType<{ size?: number }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 pb-3 border-b border-border">
      <span className="h-9 w-9 rounded-md bg-gold/15 text-gold grid place-items-center"><Icon size={18} /></span>
      <h2 className="font-semibold text-lg">{children}</h2>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon?: React.ComponentType<{ size?: number; className?: string }>; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium flex items-center gap-1.5">
        {Icon && <Icon size={14} className="text-gold" />} {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
