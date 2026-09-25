import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="container-custom relative flex flex-col items-center gap-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Let&apos;s Build Together
        </span>
        <h2 className="max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
          Ready to start your next infrastructure project?
        </h2>
        <p className="max-w-xl text-white/70">
          Speak with our project management team about your construction,
          electrification, water resources or procurement requirements.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            nativeButton={false}
            className="h-12 bg-gold px-7 text-navy hover:bg-gold-light"
            render={
              <Link href="/contact">
                Request Consultation
                <ArrowRight className="size-4" />
              </Link>
            }
          />
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="h-12 border-white/20 bg-transparent px-7 text-white hover:bg-white/10"
            render={
              <a href={`mailto:${company.email}`}>
                <Mail className="size-4" />
                {company.email}
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}
