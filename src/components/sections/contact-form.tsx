"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceCategories } from "@/lib/data/services";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl border border-border bg-white p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-engineering-blue/10 text-engineering-blue">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-5 font-heading text-xl font-bold text-navy">
          Message Sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out to Newline West Africa Limited. A
          member of our team will respond within 1-2 business days.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" required placeholder="John Doe" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="080..." className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="service">Service of Interest</Label>
          <select
            id="service"
            defaultValue=""
            className="mt-1.5 h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceCategories.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / General Inquiry</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          required
          placeholder="Tell us about your project..."
          className="mt-1.5"
          rows={5}
        />
      </div>
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 h-11 w-full bg-gold text-navy hover:bg-gold-light sm:w-auto sm:px-8"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
