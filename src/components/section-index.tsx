"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "proof", label: "Proof" },
  { id: "work", label: "Work" },
  { id: "path", label: "Path" },
  { id: "practice", label: "Practice" },
  { id: "contact", label: "Contact" },
];

/**
 * A band across the middle of the window, not the whole window.
 * "Anything on screen" flickers when two tall sections overlap.
 * The one crossing the middle is the one being read.
 */
export function SectionIndex() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    // The observer only reports sections that changed. A tall section can
    // already be in the band when the previous one leaves, and that batch
    // will not mention it. Remember every section currently in the band,
    // then take the earliest one still there.
    const inBand = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        }
        const current = sections.find((section) => inBand.has(section.id));
        if (current) setActive(current.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ol className="flex flex-col items-end gap-3">
        {sections.map((section) => {
          const current = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "true" : undefined}
                className="group flex items-center gap-3"
              >
                <span
                  className={`eyebrow hidden text-quiet transition-opacity duration-300 2xl:block ${current ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`}
                >
                  {section.label}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${current ? "h-6 w-1.5 bg-glow" : "size-1.5 bg-lilac"}`}
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
