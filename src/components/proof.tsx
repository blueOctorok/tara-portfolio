import { StatValue } from "@/components/stat-value";
import { stats } from "@/content/work";

export function Proof() {
  return (
    <section id="proof" className="border-y border-lilac/40 bg-dusk">
      <div className="shell py-16 sm:py-24">
        <p className="rise-in eyebrow text-glow">
          02 <span className="text-quiet">/ Proof</span>
        </p>
        <p className="rise-in mt-4 max-w-xl text-lg font-light text-soft">
          Four numbers from eleven years at The King Group.
        </p>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rise-in border-lilac/40 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <p className="display text-5xl sm:text-6xl">
                {stat.count ? (
                  <>
                    <span className="sr-only">{stat.value}</span>
                    <StatValue
                      from={stat.count.from}
                      to={stat.count.to}
                      suffix={stat.count.suffix}
                    />
                  </>
                ) : (
                  stat.value
                )}
              </p>
              <p className="eyebrow mt-4 text-glow">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-soft">{stat.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
