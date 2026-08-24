import type { Metadata } from "next";
import {
  Flag,
  Users,
  Wrench,
  KeySquare,
  ShieldCheck,
  HardHat,
  Clock,
  type LucideIcon,
} from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatCard } from "@/components/shared/stat-card";
import { CertificationsStrip } from "@/components/shared/certifications-strip";
import { CtaSection } from "@/components/shared/cta-section";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Indigenous Nigerian company, experienced engineers, modern equipment, turnkey delivery, quality assurance, safety standards and on-time delivery.",
};

const reasonIcons: Record<string, LucideIcon> = {
  "Indigenous Nigerian Company": Flag,
  "Experienced Engineers": Users,
  "Modern Equipment": Wrench,
  "Turnkey Project Delivery": KeySquare,
  "Quality Assurance": ShieldCheck,
  "Safety Standards": HardHat,
  "On-Time Delivery": Clock,
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        title="Why Choose Newline West Africa"
        description="Seven reasons clients across Nigeria trust us with their most important infrastructure projects."
        image="/images/stock/engineering-drawing-review.jpg"
        breadcrumb="Why Choose Us"
      />

      <section className="py-20 sm:py-28">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Track Record"
            title="The numbers behind our delivery"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {company.whyChooseUs.map((item) => (
              <StatCard key={item.label} {...item} light={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Strengths"
            title="What sets us apart"
            description="From indigenous market knowledge to disciplined safety practices, here is what clients can expect when they work with us."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.reasons.map((reason) => {
              const Icon = reasonIcons[reason.title] ?? ShieldCheck;
              return (
                <div
                  key={reason.title}
                  className="rounded-xl bg-white p-7 ring-1 ring-border"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-navy text-gold">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Registrations & Compliance"
            title="A company built on accountability"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <CertificationsStrip />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
