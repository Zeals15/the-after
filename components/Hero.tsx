"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import heroImg from "@/public/images/hero.jpg";
import { trustedBy } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white sm:pt-36 lg:pb-28 lg:pt-44">
      <div className="grid-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden />
      <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-cyan/20 blur-[120px]" aria-hidden />
      <div className="absolute -right-32 top-40 h-[26rem] w-[26rem] rounded-full bg-brand-violet/25 blur-[120px]" aria-hidden />

      <div className="container relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-brand-gradient" />
            Ideas Today &bull; A Better Tomorrow
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Transforming Businesses Through <span className="text-gradient">Innovative Software</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-lg text-slate-300"
          >
            We deliver enterprise-grade web, mobile, cloud and AI solutions tailored to accelerate your digital
            transformation — engineered for scale, security and measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#services" className="btn-gradient px-7 py-3.5 text-base">
              Explore Services <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="btn-outline-light px-7 py-3.5 text-base">
              View Our Work
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400"
          >
            {["ISO-aligned processes", "NDA-first engagement", "Dedicated project manager"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-cyan" /> {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-3 rounded-[1.75rem] bg-brand-gradient opacity-40 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src={heroImg}
              alt="THE AFTER engineers collaborating on a software project"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 bottom-8 flex items-center gap-3 rounded-xl border border-white/10 bg-navy/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-bold leading-none text-white">3.2×</p>
              <p className="mt-1 text-xs text-slate-400">Avg. ROI for clients</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-8 flex items-center gap-3 rounded-xl border border-white/10 bg-navy/90 px-4 py-3 shadow-xl backdrop-blur sm:-right-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-cyan">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-bold leading-none text-white">99.9%</p>
              <p className="mt-1 text-xs text-slate-400">Uptime SLA</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container relative mt-20 lg:mt-24"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Trusted by industry leaders
        </p>
        <ul className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {trustedBy.map((name) => (
            <li
              key={name}
              className="text-center font-heading text-lg font-bold tracking-tight text-slate-500 grayscale transition-colors hover:text-slate-300"
            >
              {name}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
