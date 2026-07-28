import {
  Heart,
  Building2,
  CalendarDays,
  Church,
  PartyPopper,
  Users,
} from "lucide-react";

import Card from "@/components/shared/Card";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";

import { aboutContent } from "@/lib/content/about";

const icons = {
  Heart,
  Building2,
  CalendarDays,
  Church,
  PartyPopper,
  Users,
};

export default function PerformanceSection() {
  const { performance } = aboutContent;

  return (
    <Section className="bg-neutral-950">
      <SectionHeader
        theme="dark"
        eyebrow={performance.eyebrow}
        title={performance.title}
        description={performance.description}
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {performance.events.map((event) => {
          const Icon = icons[event.icon];

          return (
            <Card
                key={event.title}
                variant="glass"
            >
                <div className="mb-6">
                    <Icon className="h-12 w-12 text-amber-400" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                    {event.title}
                </h3>

                <p className="leading-7 text-gray-300">
                    {event.description}
                </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}