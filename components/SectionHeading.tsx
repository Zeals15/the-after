import { Reveal } from "./motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className={`eyebrow ${dark ? "text-brand-cyan" : ""}`}>
        <span className="h-px w-6 bg-current" aria-hidden />
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${dark ? "text-slate-300" : "text-ink-muted"}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
