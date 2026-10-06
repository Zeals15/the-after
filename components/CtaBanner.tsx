import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from "next/image";
import ctaImg from "@/public/images/cta.jpg";
import { Reveal } from "./motion";

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 lg:py-24">
      <Image src={ctaImg} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-deep/95 via-navy-950/85 to-brand-violet/60" />
      <Reveal className="container text-center">
        <h2 className="mx-auto max-w-3xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to accelerate your digital journey?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Book a free 30-minute consultation with our solution architects. Get expert advice, a high-level roadmap and a
          transparent estimate — no obligation.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="btn bg-white px-8 py-4 text-base text-navy shadow-xl hover:-translate-y-0.5 hover:bg-slate-100">
            <CalendarCheck className="h-5 w-5 text-brand-blue" />
            Schedule a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
