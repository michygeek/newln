import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Newline West Africa Limited. Offices in Abuja and Enugu, Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Speak with our team about your next construction, electrification or water resources project."
        image="/images/site/site-street-view.png"
        breadcrumb="Contact"
      />

      <section className="py-20 sm:py-28">
        <div className="container-custom grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Get In Touch" title="We'd love to hear from you" />

            <div className="mt-8 space-y-5">
              {company.offices.map((office) => (
                <div key={office.label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-navy">
                      {office.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-navy">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    {company.phones.join(" / ")}
                  </p>
                </div>
              </div>

              {company.email && (
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-navy">Email</p>
                    <p className="text-sm text-muted-foreground">{company.email}</p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-navy">Office Hours</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                    {company.officeHours.map((h) => (
                      <li key={h.day} className="flex gap-2">
                        <span className="w-28">{h.day}</span>
                        <span>{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Newline West Africa Limited - Head Office Location"
                src="https://www.google.com/maps?q=Suez+Crescent+Abacha+Estate+Wuse+Zone+4+Abuja+Nigeria&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Send a Message"
              title="Request a consultation"
              description="Fill out the form and our team will get back to you within 1-2 business days."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
