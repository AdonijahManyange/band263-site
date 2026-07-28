import Link from "next/link";

import { aboutContent } from "@/lib/content/about";

export default function AboutCTA() {
  const { cta } = aboutContent;

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-32"
      style={{
        backgroundImage: `url(${cta.image})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
          {cta.eyebrow}
        </p>

        <h2 className="text-4xl font-bold text-white md:text-6xl">
          {cta.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          {cta.description}
        </p>

        <div className="mt-10">
          <Link
            href={cta.button.href}
            className="inline-flex items-center rounded-full bg-amber-400 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
          >
            {cta.button.text}
          </Link>
        </div>
      </div>
    </section>
  );
}