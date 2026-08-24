"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";

const slides = [
  "/images/stock/construction-site-aerial.jpg",
  "/images/site/road-streetlights.png",
  "/images/stock/site-workers-rebar.jpg",
  "/images/site/piling-rig-excavator.png",
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-navy text-white sm:min-h-[720px]">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt="Newline West Africa engineering and construction projects"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      <div className="container-custom relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="font-heading text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Engineering Excellence.
            <br />
            <span className="text-gold">Infrastructure That Lasts.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {company.subTagline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
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
              className="h-12 border-white/25 bg-white/5 px-7 text-white hover:bg-white/15"
              render={
                <Link href="/services">
                  <PlayCircle className="size-4" />
                  View Services
                </Link>
              }
            />
          </div>
        </motion.div>

        <div className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
          {[
            { value: "15+", label: "Years Active" },
            { value: "7", label: "Service Divisions" },
            { value: "100%", label: "Indigenous Company" },
            { value: "2", label: "Regional Offices" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl font-bold text-gold sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-gold" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
