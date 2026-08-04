"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="font-heading text-3xl mb-2">Contact</h1>
      <p className="text-muted text-sm mb-8">
        Reach out directly, or use the form below.
      </p>

      <div className="border border-border rounded-xl divide-y divide-border mb-10 readout text-[13px]">
        <div className="flex justify-between px-4 py-3">
          <span className="text-muted">EMAIL</span>
          <a href="mailto:sanjinajtalib@gmail.com" className="text-primary">
            sanjinajtalib@gmail.com
          </a>
        </div>
        <div className="flex justify-between px-4 py-3">
          <span className="text-muted">PHONE</span>
          <span>03063212028</span>
        </div>
        <div className="flex justify-between px-4 py-3">
          <span className="text-muted">LINKEDIN</span>
          <a
            href="https://www.linkedin.com/in/sanjinatalib-052175285"
            className="text-primary"
          >
            sanjinatalib
          </a>
        </div>
      </div>

      {sent ? (
        <p className="text-sm text-signal">Thanks — this is a placeholder confirmation.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your email"
            required
            className="border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-foreground"
          />
          <textarea
            placeholder="Message"
            required
            rows={4}
            className="border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-foreground"
          />
          <button
            type="submit"
            className="bg-foreground text-background rounded-md px-4 py-2.5 text-sm font-medium mt-1"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
