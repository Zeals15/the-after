"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { services, site } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion";

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Consultation request from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "-"}`,
      `Service: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const details = [
    { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Visit us", value: site.address },
    { icon: Clock, label: "Business hours", value: site.hours },
  ];

  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-28">
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Let's Build What Comes After"
            subtitle="Tell us about your project and a solution architect will get back to you within one business day."
          />
          <Reveal delay={0.1} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-card">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium text-ink hover:text-brand-blue">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-ink">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="h-14 w-14 text-emerald-500" />
                  <h3 className="mt-5 text-2xl">Thank you!</h3>
                  <p className="mt-2 max-w-sm">
                    Your email client should open with your message. If it didn&apos;t, write to us at{" "}
                    <a className="font-semibold text-brand-blue" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                    .
                  </p>
                  <button type="button" onClick={() => setSent(false)} className="btn-primary mt-8">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" exit={{ opacity: 0 }}>
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                      Full name *
                    </label>
                    <input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Work email *
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
                      Company
                    </label>
                    <input id="company" name="company" autoComplete="organization" placeholder="Company Inc." className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                      Service of interest
                    </label>
                    <select id="service" name="service" className={inputCls} defaultValue={services[0].title}>
                      {services.map((s) => (
                        <option key={s.title}>{s.title}</option>
                      ))}
                      <option>Something else</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                      Project details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your goals, timeline and budget..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                  <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">We respect your privacy. Your details are never shared.</p>
                    <button type="submit" className="btn-gradient px-7">
                      Request Consultation <Send className="h-4 w-4" />
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
