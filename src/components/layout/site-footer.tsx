import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import { company } from "@/lib/data/company";
import { serviceCategories } from "@/lib/data/services";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/shared/social-icons";

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Industries", href: "/industries" },
  { title: "Why Choose Us", href: "/why-choose-us" },
  { title: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <div className="container-custom grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 items-center rounded-md bg-white px-2.5">
              <Image
                src="/newlinelogo.png"
                alt="Newline West Africa Limited"
                width={2172}
                height={724}
                className="h-8 w-auto object-contain"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-base font-bold text-white">
                Newline West Africa
              </span>
              <span className="text-[11px] tracking-[0.18em] text-gold uppercase">
                Limited
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            A wholly indigenous Nigerian engineering, construction,
            electrification, water resources and project management company,
            incorporated in 2010 ({company.rcNumber}).
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[FacebookIcon, LinkedInIcon, XIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
            Our Services
          </h3>
          <ul className="mt-5 space-y-2.5">
            {serviceCategories.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold">
            Get In Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span className="text-white/70">
                {company.offices[0].address}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" />
              <a
                href={`tel:${company.phones[0]}`}
                className="text-white/70 hover:text-white"
              >
                {company.phones[0]} / {company.phones[1]}
              </a>
            </li>
            {company.email && (
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-white/70 hover:text-white"
                >
                  {company.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex items-center justify-center py-6 text-xs text-white/50">
          <p>
            &copy; {year} Newline West Africa Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
