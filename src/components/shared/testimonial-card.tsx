import { Quote, Star } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-7 ring-1 ring-border">
      <Quote className="size-8 text-gold" />
      <div className="mt-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-gold text-gold" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="font-heading text-sm font-semibold text-navy">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  );
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Newline West Africa delivered our estate road and drainage project on schedule, with a level of professionalism that gave us full confidence throughout.",
    name: "Estate Development Client",
    role: "Residential Estate, Abuja",
  },
  {
    quote:
      "Their water engineering team handled our borehole project from geophysical survey through to commissioning. The process was transparent and the borehole has performed reliably since.",
    name: "Facilities Manager",
    role: "Educational Institution, Enugu State",
  },
  {
    quote:
      "We engaged Newline West Africa for an internal electrification network and street lighting. The turnkey approach meant we dealt with one accountable team from start to finish.",
    name: "Project Sponsor",
    role: "Private Estate, FCT",
  },
];
