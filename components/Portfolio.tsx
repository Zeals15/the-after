import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { caseStudies } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-50 py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title="Recent Success Stories"
            subtitle="A selection of products we've designed, built and scaled for ambitious organisations."
          />
          <a href="#contact" className="btn border border-slate-300 bg-white text-ink hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue">
            Discuss Your Project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <Stagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.title}
                    placeholder="blur"
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-deep shadow-sm">
                    {c.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg leading-snug">{c.title}</h3>
                  <p className="mt-2 text-sm">{c.outcome}</p>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-blue"
                    aria-label={`Read case study: ${c.title}`}
                  >
                    Read Case Study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
