import type {
  Feature,
  Genre,
  MusicIcon,
  PerformanceEvent,
} from "@/lib/types/about";

export const aboutContent = {
  hero: {
    eyebrow: "About The Band",

    title: "Bringing African Music To Life",

    subtitle:
      "The Band 263 is an African live band based in Texas, delivering unforgettable performances inspired by the rich musical traditions of Zimbabwe and South Africa. From weddings and festivals to corporate events and church conferences, we bring authentic live entertainment to every stage.",

    image: "/images/about/about-hero.jpg",

    primaryButton: {
      text: "Book The Band",
      href: "/book",
    },

    secondaryButton: {
      text: "View Gallery",
      href: "/gallery",
    },
  },

  story: {
    heading: "Our Story",

    paragraphs: [
      "Founded in 2024, The Band 263 is an African live band based in Texas with a passion for bringing people together through music.",

      "Inspired by the vibrant sounds of Zimbabwe and South Africa, the band blends Urban Grooves, Afro Fusion, Gospel, and contemporary African music into unforgettable live performances.",

      "From weddings and festivals to church conferences, corporate events, and private celebrations, every performance is delivered with professionalism, energy, and a commitment to creating lasting memories.",
    ],
  },

  mission: {
    heading: "Our Mission",

    description:
      "To celebrate African music, inspire audiences, and create unforgettable live experiences through exceptional musicianship, professionalism, and authentic performances.",
  },

  music: {
    eyebrow: "Our Sound",

    title: "Music We Perform",

    description:
      "Every performance celebrates the richness and diversity of African music, bringing audiences together through timeless classics, contemporary favorites, and unforgettable live entertainment.",

    genres: [
      {
        title: "Zimbabwean Music",
        icon: "Music4",
        description:
          "Timeless Urban Grooves, contemporary hits, and beloved Zimbabwean classics performed live with energy and authenticity.",
      },
      {
        title: "South African Music",
        icon: "Drum",
        description:
          "From Afro Pop to Amapiano and crowd favorites, we bring the vibrant sounds of South Africa to every stage.",
      },
      {
        title: "Afro Fusion",
        icon: "Globe",
        description:
          "A unique blend of African rhythms, modern influences, and live musicianship that connects audiences of every background.",
      },
      {
        title: "Gospel",
        icon: "MicVocal",
        description:
          "Powerful worship music and inspirational performances delivered with excellence and passion.",
      },
    ] satisfies Genre[],
  },

  whyChoose: {
    eyebrow: "Why Choose Us",

    title: "More Than Just A Band",

    description:
      "We combine exceptional musicianship, professionalism, and authentic African music to create unforgettable live experiences.",

    features: [
      {
        title: "Professional Musicians",
        icon: "Award",
        description:
          "Experienced performers dedicated to delivering exceptional live entertainment.",
      },
      {
        title: "Authentic African Sound",
        icon: "Globe",
        description:
          "Celebrating the rich musical traditions of Zimbabwe and South Africa.",
      },
      {
        title: "Tailored Performances",
        icon: "Sparkles",
        description:
          "Every event is customized to perfectly match the atmosphere and audience.",
      },
      {
        title: "Memorable Experiences",
        icon: "Star",
        description:
          "Creating moments your guests will remember long after the final song.",
      },
    ] satisfies Feature[],
  },

  performance: {
    eyebrow: "Where We Perform",

    title: "Live Music For Every Occasion",

    description:
      "Whether you're planning an intimate celebration or a large public event, The Band 263 is ready to bring unforgettable live entertainment.",

    events: [
      {
        title: "Weddings",
        icon: "Heart",
        description:
          "Elegant live music that creates unforgettable moments for your special day.",
      },
      {
        title: "Corporate Events",
        icon: "Building2",
        description:
          "Professional entertainment for conferences, galas, and company celebrations.",
      },
      {
        title: "Festivals",
        icon: "CalendarDays",
        description:
          "High-energy performances that keep audiences engaged from start to finish.",
      },
      {
        title: "Church Conferences",
        icon: "Church",
        description:
          "Inspirational worship and live music that enriches church gatherings and conferences.",
      },
      {
        title: "Private Celebrations",
        icon: "PartyPopper",
        description:
          "Customized live entertainment for birthdays, anniversaries, and special occasions.",
      },
      {
        title: "Community Events",
        icon: "Users",
        description:
          "Bringing communities together through vibrant African live music and culture.",
      },
    ] satisfies PerformanceEvent[],
  },

  cta: {
    eyebrow: "Let's Make Your Event Unforgettable",

    title: "Ready To Book The Band?",

    description:
      "Whether you're planning a wedding, corporate event, festival, church conference, or private celebration, The Band 263 is ready to deliver an unforgettable live music experience.",

    image: "/images/about/about-cta.jpg",

    button: {
      text: "Book The Band",
      href: "/book",
    },
  },
};