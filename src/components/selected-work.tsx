import { SectionHeading } from "@/components/section-heading";
import { currentRoles, studies } from "@/content/work";

export function SelectedWork() {
  return (
    <section id="work">
      <div className="shell py-20 sm:py-28">
        <SectionHeading index="03" kicker="Work" title="What I would walk you through.">
          Two roles I hold now, then four jobs that show how I run a building.
        </SectionHeading>

        {/* 1px gap, with the lilac showing through, so the shared edge is one line. */}
        <ul className="mt-14 grid gap-px bg-lilac/40 sm:grid-cols-2">
          {currentRoles.map((role) => (
            <li key={role.title} className="rise-in bg-plum p-6 sm:p-8">
              <p className="eyebrow text-glow">Now · {role.since}</p>
              <h3 className="mt-4 text-2xl font-medium">{role.title}</h3>
              <p className="mt-2 text-soft">{role.org}</p>
              <p className="text-quiet">{role.place}</p>
              <p className="mt-4 leading-relaxed font-light text-soft">{role.summary}</p>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          {studies.map((study) => (
            <article
              key={study.sheet}
              className="group rise-in relative border-t border-lilac/30 py-10 last:border-b sm:py-14"
            >
              <span
                aria-hidden
                className="absolute top-0 left-0 h-px w-full origin-left scale-x-0 bg-glow transition-transform duration-700 ease-settle group-hover:scale-x-100"
              />
              <div className="grid items-start gap-6 sm:grid-cols-12">
                <p className="sheet-num display text-5xl sm:col-span-3 sm:text-6xl">
                  {study.sheet}
                </p>
                <div className="sm:col-span-9">
                  <p className="eyebrow text-quiet">
                    {study.context} · {study.years}
                  </p>
                  <h3 className="display mt-3 text-4xl transition-transform duration-500 ease-settle group-hover:translate-x-2 sm:text-5xl">
                    {study.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed font-light text-soft">
                    {study.summary}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {study.notes.map((note) => (
                      <li
                        key={note}
                        className="border border-lilac/60 px-3 py-1 text-sm text-soft"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
