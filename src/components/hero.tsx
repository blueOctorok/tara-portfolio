import { CropMarks } from "@/components/crop-marks";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="intro" className="relative min-h-svh overflow-clip">
      <div aria-hidden className="orb orb-a" />
      <div aria-hidden className="orb orb-b" />
      <CropMarks />

      <div className="shell relative flex min-h-svh flex-col justify-between pt-28 pb-16">
        <div className="motion-safe:animate-rise flex items-start justify-between gap-6">
          <p className="eyebrow text-quiet">{profile.location}</p>
          <p className="eyebrow hidden text-right text-quiet sm:block">{profile.focus}</p>
        </div>

        <div>
          <p
            className="eyebrow text-glow motion-safe:animate-rise"
            style={{ animationDelay: "120ms" }}
          >
            {profile.role}
          </p>
          <h1 className="display mt-5 text-6xl sm:text-8xl lg:text-[8.25rem]">
            <span className="wipe-in block">Tara</span>
            <span
              className="motion-safe:animate-rise mt-1 block text-glow italic"
              style={{ animationDelay: "280ms" }}
            >
              Andow
            </span>
          </h1>
          <p
            className="mt-8 max-w-xl text-lg leading-relaxed font-light text-soft motion-safe:animate-rise"
            style={{ animationDelay: "460ms" }}
          >
            {profile.pitch}
          </p>
          <div
            aria-hidden
            className="draw-x mt-8 h-px w-full max-w-xl bg-lilac"
            style={{ animationDelay: "620ms" }}
          />
          <div
            className="mt-8 flex flex-wrap gap-3 motion-safe:animate-rise"
            style={{ animationDelay: "700ms" }}
          >
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-glow px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
            >
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="border border-lilac px-5 py-3 text-sm text-paper transition-colors hover:border-glow hover:text-glow"
            >
              Email Tara
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="scroll-cue absolute bottom-0 left-1/2 hidden h-14 w-px -translate-x-1/2 bg-lilac sm:block"
      />
    </section>
  );
}
