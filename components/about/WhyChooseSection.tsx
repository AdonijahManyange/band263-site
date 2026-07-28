import {
  Award,
  Globe,
  Sparkles,
  Star,
} from "lucide-react";

import Card from "@/components/shared/Card";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

import { aboutContent } from "@/lib/content/about";

const icons = {
  Award,
  Globe,
  Sparkles,
  Star,
};

export default function WhyChooseSection() {
  const { whyChoose } = aboutContent;

  return (
    <Section className="bg-black">
      <SectionHeader
        eyebrow={whyChoose.eyebrow}
        title={whyChoose.title}
        description={whyChoose.description}
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {whyChoose.features.map((feature) => {
          const Icon = icons[feature.icon];

          return (
            <Card
              key={feature.title}
              variant="glass"
            >
              <div className="mb-6">
                <Icon className="h-12 w-12 text-amber-400" />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-300">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}