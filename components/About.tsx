import { Check, Target } from "lucide-react";
import Image from "next/image";
import aboutImg from "@/public/images/about.jpg";
import officeImg from "@/public/images/office.jpg";
import { stats, values } from "@/lib/content";
import { Counter, Reveal, Stagger, StaggerItem } from "./motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <Image
              src={aboutImg}
              alt="THE AFTER team in a planning session"
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[5/4] h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 hidden w-56 overflow-hidden rounded-xl border-4 border-white shadow-card-hover sm:block lg:-right-10">
            <Image src={officeImg} alt="Modern THE AFTER workspace" placeholder="blur" sizes="224px" className="aspect-[4/3] h-auto w-full object-cover" />
          </div>
          <div className="absolute -left-4 -top-4 hidden rounded-xl bg-navy px-5 py-4 text-white shadow-card-hover sm:block">
            <p className="font-heading text-3xl font-extrabold">
              <span className="text-gradient">10+</span>
            </p>
            <p className="text-xs text-slate-300">Years of expertise</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-current" aria-hidden />
              About The After
            </span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              Your Strategic Partner for Digital Transformation
            </h2>
            <p className="mt-5 text-base sm:text-lg">
              THE AFTER was founded by a team of engineers, designers and strategists with one belief: the ideas you act on
              today shape the business you become tomorrow. We partner with startups, SMEs and enterprises to design, build
              and scale software that solves real business problems.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base">Our Mission</h3>
                <p className="mt-1 text-sm">
                  To turn bold ideas into reliable, future-ready technology that helps our clients grow faster, operate smarter
                  and serve their customers better.
                </p>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-6 space-y-4">
            {values.map((v) => (
              <StaggerItem key={v.title} className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <p className="text-sm sm:text-base">
                  <strong className="font-semibold text-ink">{v.title}:</strong> {v.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      <div className="container mt-20 lg:mt-28">
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="bg-white px-6 py-8 text-center">
              <p className="font-heading text-4xl font-extrabold text-ink sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink-muted">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
