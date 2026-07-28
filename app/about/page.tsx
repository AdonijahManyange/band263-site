import type { Metadata } from "next";

import AboutHero from "@/lib/content/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionSection from "@/components/about/MissionSection";
import MusicSection from "@/components/about/MusicSection";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import PerformanceSection from "@/components/about/PerformanceSection";
import AboutCTA from "@/components/about/AboutCTA";

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