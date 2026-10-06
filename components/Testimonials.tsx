import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Long-term partnerships built on trust, transparency and results."
        />
        <Stagger className="-mx-5 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="w-[85%] shrink-0 snap-center md:w-auto">
              <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-gradient text-white">
                    <Quote className="h-5 w-5" fill="currentColor" />
                  </span>
                  <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 text-[0.95rem] text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-white">
                    {t.name
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div className="flex-1">
                    <p className="font-heading text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <span className="font-heading text-sm font-extrabold tracking-tight text-slate-400">{t.company}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
