import { SectionHeading } from "@/components/section-heading";
import { competencies, credentials, profile, tools } from "@/content/profile";

export function PracticeSection() {
  return (
    <section id="practice">
      <div className="shell py-20 sm:py-28">
        <SectionHeading index="05" kicker="Practice" title="What the day actually is.">
          Coordination, the building, and the books. The same three, on a tower or a campus.
        </SectionHeading>
        <p className="rise-in mt-8 max-w-3xl text-lg leading-relaxed font-light text-soft">
          {profile.bio}
        </p>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">
          <ol className="spec-list">
            {competencies.map((item, index) => (
              <li
                key={item}
                className="spec-row flex gap-4 border-b border-lilac/30 px-3 py-4"
                style={{ animationDelay: `${index * 2}s` }}
              >
                <span className="eyebrow w-8 shrink-0 text-glow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-paper">{item}</span>
              </li>
            ))}
          </ol>

          <div className="rise-in">
            <dl className="space-y-6">
              {credentials.map((item) => (
                <div key={item.label}>
                  <dt className="eyebrow text-glow">{item.label}</dt>
                  <dd className="mt-2 text-soft">{item.detail}</dd>
                </div>
              ))}
            </dl>
            <p className="eyebrow mt-10 text-glow">Tools</p>
            <p className="mt-3 leading-relaxed text-soft">{tools.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
