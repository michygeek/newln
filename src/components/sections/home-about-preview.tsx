import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const points = [
  "Wholly indigenous Nigerian company, incorporated in 2010",
  "Experienced engineers across civil, electrical, mechanical and water disciplines",
  "Turnkey project delivery from design to commissioning",
  "Modern construction equipment and disciplined quality control",
];

export function HomeAboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/site/building-construction-1.png"
              alt="Newline West Africa Limited building construction project"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden w-56 rounded-xl bg-navy p-5 text-white shadow-xl sm:block">
            <p className="font-heading text-3xl font-bold text-gold">2010</p>
            <p className="mt-1 text-sm text-white/70">
              Incorporated under CAMA, RC867472
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Newline West Africa"
            title="A trusted partner for Nigeria's infrastructure development"
            description="Newline West Africa Limited is a wholly indigenous Nigerian company specializing in engineering, construction, electrification, water resources, procurement and project management — rendering services to government, corporate bodies, institutions and private individuals across Nigeria."
          />
          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-engineering-blue" />
                <span className="text-sm text-foreground/80">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-navy hover:text-engineering-blue"
          >
            More About Our Company
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
