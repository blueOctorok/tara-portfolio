import { SectionHeading } from "@/components/section-heading";
import { earlier, roles } from "@/content/work";

export function PathSection() {
  return (
    <section id="path" className="bg-dusk">
      <div className="shell py-20 sm:py-28">
        <SectionHeading index="04" kicker="Path" title="Present, then back to the first site.">
          The same person, from permits on a downtown build to the regional desk.
        </SectionHeading>

        <div className="relative mt-16">
          <div aria-hidden className="absolute top-2 bottom-2 left-[4px] w-px bg-violet" />
          <div aria-hidden className="plumbline absolute top-2 bottom-2 left-[4px] w-px bg-glow" />

          <ol>
            {roles.map((role) => (
              <li
                key={`${role.years}-${role.title}`}
                className="rise-in relative border-t border-lilac/30 py-8 pl-8"
              >
                <span className="mark absolute top-10 left-0 size-2.5 rounded-full" />
                <div className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <p className="eyebrow text-quiet sm:pt-1">{role.years}</p>
                  <div>
                    <h3 className="text-xl font-medium">{role.title}</h3>
                    <p className="mt-1 text-glow">
                      {role.org}
                      <span className="text-quiet"> · {role.place}</span>
                    </p>
                    <p className="mt-3 max-w-xl leading-relaxed font-light text-soft">
                      {role.summary}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="rise-in mt-10 max-w-2xl text-sm leading-relaxed text-quiet">{earlier}</p>
      </div>
    </section>
  );
}
