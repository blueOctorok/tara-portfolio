type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  children: string;
};

export function SectionHeading({ index, kicker, title, children }: SectionHeadingProps) {
  return (
    <header className="rise-in max-w-3xl">
      <p className="eyebrow text-glow">
        {index}
        <span className="text-quiet"> / {kicker}</span>
      </p>
      <h2 className="display mt-4 text-4xl sm:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-relaxed font-light text-soft">{children}</p>
    </header>
  );
}
