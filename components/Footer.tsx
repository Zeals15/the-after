import { Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, site } from "@/lib/content";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-slate-400">
      <div className="h-1 bg-brand-gradient" />
      <div className="container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1.2fr] lg:gap-10">
        <div>
          <Logo className="h-10 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Software development and IT consulting for businesses that build for tomorrow. Ideas today, a better tomorrow.
          </p>
          <div className="mt-6">
            <SocialIcons />
          </div>
        </div>

        <nav aria-label="Services">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.services.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.company.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Info</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>&copy; {year} THE AFTER&trade;. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
