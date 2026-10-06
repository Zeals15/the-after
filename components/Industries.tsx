import { industries } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Empower"
          subtitle="Deep domain knowledge across regulated and high-growth sectors means faster delivery and fewer surprises."
        />
        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, name, text }) => (
            <StaggerItem key={name}>
              <div className="group flex h-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-deep hover:shadow-card-hover">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-brand-deep transition-colors duration-300 group-hover:bg-brand-deep group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-base">{name}</h3>
                  <p className="mt-1 text-sm leading-snug">{text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
