import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaSection } from "@/components/shared/cta-section";
import { industries } from "@/lib/data/industries";
import { iconMap } from "@/lib/icon-map";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Newline West Africa Limited serves government, infrastructure, oil & gas, education, commercial, agriculture, water resources and energy sectors.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Industries We Serve"
        description="Delivering tailored engineering and construction solutions across Nigeria's most critical sectors."
        image="/images/stock/power-transmission-sunset.jpg"
        breadcrumb="Industries"
      />

      <section className="py-20 sm:py-28">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Sectors We Support"
            title="Trusted across government and private industry"
            description="Our multidisciplinary capability allows us to serve a wide range of sectors with tailored engineering and project delivery solutions."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] ?? Building2;
              return (
                <div
                  key={industry.title}
                  className="group rounded-xl border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex size-14 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
