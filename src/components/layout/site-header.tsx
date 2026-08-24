"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/lib/data/nav";
import { serviceCategories } from "@/lib/data/services";
import { company } from "@/lib/data/company";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-navy text-white/80 lg:block">
        <div className="container-custom flex h-9 items-center gap-6 text-xs">
          <a
            href={`tel:${company.phones[0]}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone className="size-3" />
            {company.phones[0]}
          </a>
          {company.email && (
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail className="size-3" />
              {company.email}
            </a>
          )}
        </div>
      </div>

      {/* Main nav */}
      <div className="relative border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/90">
        <div className="container-custom flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="flex h-12 items-center rounded-md bg-white px-2.5">
              <Image
                src="/newlinelogo.png"
                alt="Newline West Africa Limited"
                width={2172}
                height={724}
                priority
                className="h-8 w-auto object-contain"
              />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-heading text-base font-bold text-white">
                Newline West Africa
              </span>
              <span className="text-[11px] tracking-[0.18em] text-gold uppercase">
                Limited
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.hasMega ? (
                <div
                  key={item.href}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold",
                      megaOpen && "text-gold"
                    )}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        megaOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute inset-x-0 top-full border-t border-white/10 bg-white shadow-2xl"
                      >
                        <div className="container-custom grid grid-cols-4 gap-6 py-8">
                          <div className="col-span-3 grid grid-cols-2 gap-3">
                            {serviceCategories.map((service) => {
                              const Icon = iconMap[service.icon] ?? Building2;
                              return (
                                <Link
                                  key={service.slug}
                                  href={`/services#${service.slug}`}
                                  className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                                >
                                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy group-hover:bg-gold group-hover:text-navy transition-colors">
                                    <Icon className="size-5" />
                                  </span>
                                  <span>
                                    <span className="block font-heading text-sm font-semibold text-navy">
                                      {service.title}
                                    </span>
                                    <span className="mt-0.5 block text-xs text-muted-foreground line-clamp-2">
                                      {service.summary}
                                    </span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="col-span-1 rounded-lg bg-navy p-6 text-white">
                            <p className="font-heading text-sm font-semibold text-gold uppercase tracking-wide">
                              Turnkey Delivery
                            </p>
                            <p className="mt-3 text-sm text-white/80">
                              From design to commissioning, we manage every
                              phase of your project under a single point of
                              accountability.
                            </p>
                            <Link
                              href="/services"
                              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline"
                            >
                              View all services
                              <ArrowRight className="size-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:text-gold",
                    pathname === item.href && "text-gold"
                  )}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              nativeButton={false}
              className="bg-gold text-navy hover:bg-gold-light font-medium"
              render={<Link href="/contact">Request Consultation</Link>}
            />
          </div>

          {/* Mobile trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <button
                  className="flex size-10 items-center justify-center rounded-md text-white lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </button>
              }
            />
            <SheetContent side="right" className="w-[88%] max-w-sm bg-white p-0">
              <SheetHeader className="border-b px-5 py-4">
                <SheetTitle className="flex items-center gap-2.5 font-heading text-navy">
                  <Image
                    src="/newlinelogo.png"
                    alt="Newline West Africa Limited"
                    width={2172}
                    height={724}
                    className="h-7 w-auto object-contain"
                  />
                  Newline West Africa
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 overflow-y-auto p-4">
                {mainNav.map((item) =>
                  item.hasMega ? (
                    <div key={item.href}>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-navy"
                      >
                        {item.title}
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-0.5 pb-2 pl-3">
                              {serviceCategories.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services#${service.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-navy"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-3 py-3 text-base font-medium text-navy hover:bg-muted"
                    >
                      {item.title}
                    </Link>
                  )
                )}
                <Button
                  nativeButton={false}
                  className="mt-4 bg-gold text-navy hover:bg-gold-light"
                  onClick={() => setMobileOpen(false)}
                  render={<Link href="/contact">Request Consultation</Link>}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
