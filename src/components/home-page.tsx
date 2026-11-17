import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { PathSection } from "@/components/path-section";
import { PracticeSection } from "@/components/practice-section";
import { Proof } from "@/components/proof";
import { SectionIndex } from "@/components/section-index";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/** The page, in the order the sections appear. */
export function HomePage() {
  return (
    <>
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-glow focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      <SectionIndex />
      <main>
        <Hero />
        <Proof />
        <SelectedWork />
        <PathSection />
        <PracticeSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
