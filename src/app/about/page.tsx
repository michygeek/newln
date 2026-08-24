import type { Metadata } from "next";
import Image from "next/image";
import { Target, Compass } from "lucide-react";

import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/shared/timeline";
import { ValueCard } from "@/components/shared/value-card";
import { CtaSection } from "@/components/shared/cta-section";
import { DownloadProfileButton } from "@/components/shared/download-profile-button";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Newline West Africa Limited (RC867472) is a wholly indigenous Nigerian engineering, construction and project management company, incorporated in 2010.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Newline West Africa"
        description="A wholly indigenous Nigerian engineering and construction company built on technical competence and accountability."
        image="/images/stock/building-renovation-interior.jpg"
        breadcrumb="About Us"
      />

      {/* Company Overview */}
      <section className="py-20 sm:py-28">
        <div className="container-custom grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title="Engineering, construction & infrastructure since 2010"
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
              <p>
                Newline West Africa Limited is duly registered with the
                Corporate Affairs Commission of Nigeria as a private limited
                liability company under the Companies and Allied Matters Act,
                with registration number {company.rcNumber}. We are one of
                the foremost indigenous Rural Electrification, Residential
                Electrification, Building Engineering Construction,
                Consultancy, Procurement, Installation, Supply, Maintenance
                and General Contracting companies in Nigeria.
              </p>
              <p>
                We render services to the different tiers of government,
                corporate bodies, educational and professional institutions,
                and private individuals across Nigeria — a result of
                complete dedication to the protection of industrial
                institutions and facilities, ensuring our clients&apos;
                continued availability on stream.
              </p>
              <p>
                Our expertise reflects itself in many ways, and our
                competence is well established and generally recognized by
                our clients. We are aided by modern construction equipment
                and a team of professionals whose principal aim is to solve
                the more complex problems connected with modern engineering
                design and project execution.
              </p>
            </div>
            <div className="mt-8">
              <DownloadProfileButton />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/site/drilling-rig-workers.png"
                alt="Newline West Africa drilling and piling works"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/site/road-roller-compaction-1.png"
                alt="Newline West Africa road construction works"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brief History */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Brief History"
            title="Our journey since 2010"
            description={`Newline West Africa Limited was conceived on ${company.foundedDate}, following the need for reputable construction firms to handle the various aspects of construction works in Nigeria.`}
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-14 max-w-2xl">
            <Timeline items={company.timeline} />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 sm:py-28">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-navy p-8 text-white sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-lg bg-gold text-navy">
              <Compass className="size-6" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-bold">Our Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              {company.vision}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-lg bg-navy text-gold">
              <Target className="size-6" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-bold text-navy">
              Our Mission
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {company.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Core Values"
            title="A system of shared belief that defines what we do"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {company.values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
