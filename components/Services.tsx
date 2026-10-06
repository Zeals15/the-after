import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Technology Services"
          subtitle="End-to-end engineering capabilities to take your product from idea to scale — delivered by senior, certified specialists."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, tags }) => (
            <StaggerItem key={title} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-card-hover">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-brand-blue/15 bg-brand-blue/5 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-xl">{title}</h3>
                <p className="mt-3 text-[0.95rem]">{text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <li key={t} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-ink-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-blue"
                  aria-label={`Learn more about ${title}`}
                >
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
