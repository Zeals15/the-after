"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-navy/85 shadow-lg shadow-black/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-[4.5rem] items-center justify-between gap-6" aria-label="Main navigation">
        <a href="#home" className="shrink-0" aria-label="THE AFTER home">
          <Logo priority className="h-8 w-auto sm:h-9" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.href ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-gradient hidden px-5 py-2.5 sm:inline-flex">
            Get a Consultation
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col bg-navy p-6 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <Logo className="h-8 w-auto" />
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="mt-10 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 opacity-40" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gradient mt-auto w-full">
                Get a Consultation
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
