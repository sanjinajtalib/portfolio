"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-md bg-foreground text-background flex items-center justify-center font-heading text-[13px]">
            ST
          </span>
          <span className="font-heading text-[15px]">Sanjina Talib</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-8 text-[14px] text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="sm:hidden text-sm border border-border rounded-md px-3 py-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      {open && (
        <nav className="sm:hidden flex flex-col gap-4 px-6 pb-5 text-[14px] text-muted border-t border-border">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-foreground pt-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
