import { aboutContent } from "@/lib/content/about";

export default function MissionSection() {
  const { mission } = aboutContent;

  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
          Our Mission
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          {mission.heading}
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          {mission.description}
        </p>
      </div>
    </section>
  );
}