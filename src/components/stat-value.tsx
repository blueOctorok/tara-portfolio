"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

type StatValueProps = {
  from: number;
  to: number;
  suffix: string;
};

/**
 * The server renders the final number, which is also what a no-JavaScript
 * visit and a reduced-motion visit should show. With motion on, we rewind
 * the text before the first paint and count up once the figure is on screen.
 *
 * The node is updated directly. A React setState on every frame would
 * re-render the tree sixty times a second for one number.
 */
export function StatValue({ from, to, suffix }: StatValueProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.textContent = `${from}${suffix}`;
  }, [from, suffix]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1300;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          // Cubic ease-out: the last numbers, the ones a person reads, arrive slowest.
          const eased = 1 - (1 - progress) ** 3;
          const current = Math.round(from + (to - from) * eased);
          node.textContent = `${current}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [from, to, suffix]);

  return (
    <span ref={ref} aria-hidden className="inline-block min-w-[4ch] tabular-nums">
      {to}
      {suffix}
    </span>
  );
}
