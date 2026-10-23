import { aboutContent } from "@/lib/content/about";

export default function StorySection() {
  const { story } = aboutContent;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Our Story
            </p>

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              {story.heading}
            </h2>
          </div>

          {/* Right */}

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}