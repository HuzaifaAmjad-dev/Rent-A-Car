import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";

import Process from "@/components/about/Process";
import Stats from "@/components/about/Stats";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />

      <Process />
      {/* <Stats /> */}
      <AboutCTA />
    </>
  );
}