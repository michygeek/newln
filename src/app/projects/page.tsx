import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { ProjectsExplorer } from "@/components/sections/projects-explorer";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore construction, road, water resources and electrification projects delivered by Newline West Africa Limited across Nigeria.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Projects"
        description="A portfolio of construction, water resources, and infrastructure projects delivered for government and private clients across Nigeria."
        image="/images/site/road-civil-works.png"
        breadcrumb="Projects"
      />
      <section className="py-20 sm:py-28">
        <div className="container-custom">
          <ProjectsExplorer />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
