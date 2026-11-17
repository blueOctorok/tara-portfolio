"use client";

import { useState } from "react";

import { profile } from "@/content/profile";

const links = [
  { href: "#proof", label: "Proof" },
  { href: "#work", label: "Work" },
  { href: "#path", label: "Path" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

const linkClass =
  "relative py-1 text-soft transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-glow after:transition-transform after:duration-300 hover:text-paper hover:after:scale-x-100";

/**
 * Fixed, so the section index and the scroll line have something to sit
 * with. The menu is a grid row that animates from 0fr to 1fr: max-height
 * would need a guess, and this one is the height of the links.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lilac/40 bg-ink/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#intro" className="display text-xl tracking-normal text-paper">
          {profile.name}
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="eyebrow flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow hidden border border-lilac/70 px-3 py-2 text-paper transition-colors hover:border-glow hover:text-glow sm:inline-block"
          >
            Resume
          </a>
          <button
            type="button"
            className="eyebrow px-2 py-2 text-paper md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-settle md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="shell border-t border-lilac/30 pb-5">
            <ul className="eyebrow flex flex-col gap-1 pt-3 text-soft">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 hover:text-paper"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-glow"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div aria-hidden className="scroll-progress absolute inset-x-0 bottom-0 h-px bg-glow" />
    </header>
  );
}
