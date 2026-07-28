export const theme = {
  colors: {
    primary: "text-amber-400",
    primaryBg: "bg-amber-400",
    primaryBorder: "border-amber-400",

    background: "bg-white",
    backgroundDark: "bg-neutral-950",

    text: "text-gray-900",
    textLight: "text-gray-600",
    textDark: "text-white",
  },

  spacing: {
    section: "py-24",
    container: "mx-auto max-w-7xl px-6",
  },

  typography: {
    eyebrow:
      "mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-500",

    heading:
      "text-4xl font-bold text-gray-900 md:text-5xl",

    body:
      "text-lg leading-8 text-gray-600",
  },

  radius: {
    card: "rounded-3xl",
    button: "rounded-full",
  },

  shadow: {
    card:
      "shadow-lg hover:shadow-2xl transition-all duration-300",
  },

  animation: {
    hover:
      "transition-all duration-300 hover:-translate-y-2",
  },
} as const;