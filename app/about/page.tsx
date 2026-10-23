import type { Metadata } from "next";

import AboutHero from "@/app/components/about/AboutHero";
import StorySection from "@/app/components/about/StorySection";
import MissionSection from "@/app/components/about/MissionSection";
import MusicSection from "@/app/components/about/MusicSection";
import WhyChooseSection from "@/app/components/about/WhyChooseSection";
import PerformanceSection from "@/app/components/about/PerfomanceSection";
import AboutCTA from "@/app/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The Band 263, an African live band based in Texas performing Zimbabwean and South African music for weddings, festivals, churches, corporate events, and private celebrations.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionSection />
      <MusicSection />
      <WhyChooseSection />
      <PerformanceSection />
      <AboutCTA />
    </>
  );
}