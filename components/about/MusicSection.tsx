import {
  Music4,
  Drum,
  Globe,
  MicVocal,
} from "lucide-react";

import Card from "@/components/shared/Card";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

import { aboutContent } from "@/lib/content/about";

const icons = {
  Music4,
  Drum,
  Globe,
  MicVocal,
};

export default function MusicSection() {
  const { music } = aboutContent;

  return (
    <Section className="bg-neutral-50">
      <SectionHeader
        eyebrow={music.eyebrow}
        title={music.title}
        description={music.description}
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {music.genres.map((genre) => {
          const Icon = icons[genre.icon];

          return (
            <Card key={genre.title}>
              <div className="mb-6">
                <Icon className="h-12 w-12 text-amber-400" />
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                {genre.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {genre.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}