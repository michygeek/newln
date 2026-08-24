import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatCard } from "@/components/shared/stat-card";
import { company } from "@/lib/data/company";

export function HomeWhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <Image
        src="/images/stock/engineering-drawing-review.jpg"
        alt=""
        fill
        className="object-cover opacity-10"
      />
      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Why Choose Newline"
          title="Built on engineering discipline and accountability"
          description="From government infrastructure to private estate development, clients trust us for disciplined execution and transparent project delivery."
          align="center"
          light
          className="mx-auto"
        />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {company.whyChooseUs.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
