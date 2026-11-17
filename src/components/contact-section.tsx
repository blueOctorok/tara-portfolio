import { profile } from "@/content/profile";

const quietLink =
  "text-paper underline decoration-lilac underline-offset-4 transition-colors hover:text-glow hover:decoration-glow";

export function ContactSection() {
  return (
    <section id="contact" className="bg-dusk">
      <div className="shell py-20 sm:py-28">
        <p className="rise-in eyebrow text-glow">
          06 <span className="text-quiet">/ Contact</span>
        </p>
        <h2 className="rise-in display mt-4 max-w-3xl text-5xl sm:text-7xl">
          Have a project that needs a steady hand.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="rise-in display mt-10 block text-3xl text-glow italic transition-colors hover:text-paper sm:text-5xl"
        >
          {profile.email}
        </a>
        <ul className="rise-in mt-10 flex flex-col gap-4 sm:flex-row sm:gap-10">
          <li>
            <a href={profile.phoneHref} className={quietLink}>
              {profile.phone}
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={quietLink}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={quietLink}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
