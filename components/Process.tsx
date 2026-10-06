import { processSteps } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-blue/20 blur-[120px]" aria-hidden />
      <div className="container relative">
        <SectionHeading
          dark
          eyebrow="Our Process"
          title="How We Deliver Excellence"
          subtitle="A proven, transparent methodology that keeps you in control from the first workshop to long after launch."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden border-t-2 border-dashed border-white/15 lg:block"
            aria-hidden
          />
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map(({ icon: Icon, title, text }, i) => (
              <StaggerItem key={title} className="relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow">
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.75} />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-navy bg-white font-heading text-xs font-bold text-navy">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg text-white">{title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm text-slate-400">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
