import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: "light" | "dark";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  theme = "light",
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-16",
        centered && "mx-auto max-w-3xl text-center"
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 text-sm font-semibold uppercase tracking-[0.35em]",
            theme === "light"
              ? "text-amber-500"
              : "text-amber-400"
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={clsx(
          "text-4xl font-bold md:text-5xl",
          theme === "light"
            ? "text-gray-900"
            : "text-white"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={clsx(
            "mt-6 text-lg leading-8",
            theme === "light"
              ? "text-gray-600"
              : "text-gray-300"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}