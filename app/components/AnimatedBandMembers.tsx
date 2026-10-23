"use client";

import { motion } from "framer-motion";

const bandMembers = [
  {
    name: "Dumisani Manyange",
    role: "Piano",
    image: "/images/members/dumela.png",
  },
  {
    name: "Tendekai Mano",
    role: "Bass",
    image: "/images/members/tende2.png",
  },
  {
    name: "Nigel Kutepa",
    role: "Guitar",
    image: "/images/members/Tepaz22.jpeg",
  },
  {
    name: "Simbarashe Dembedza",
    role: "Lead Drummer",
    image: "/images/members/bond11.png",
  },
  {
    name: "Judah Nortey",
    role: "Drums",
    image: "/images/members/Judah Nortey.jpg",
  },
  {
    name: "MacDonald Charles",
    role: "Audio Engineer",
    image: "/images/members/Chandoz.png",
  },
  {
    name: "Adonijah Manyange",
    role: "Media Management",
    image: "/images/members/ado2.png",
  },
];

function MemberCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="flex shrink-0 gap-6 pr-6"
      aria-hidden={duplicate ? true : undefined}
    >
      {bandMembers.map((member, index) => (
        <article
          key={`${duplicate ? "duplicate-" : ""}${member.name}-${index}`}
          className="group w-[190px] shrink-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-colors duration-500 hover:border-yellow-400 sm:w-[240px] md:w-[290px]"
        >
          <div className="h-[190px] overflow-hidden sm:h-[260px] md:h-[300px]">
            <img
              src={member.image}
              alt={duplicate ? "" : member.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="p-4 sm:p-5">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {member.name}
            </h3>

            <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
              {member.role}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function AnimatedBandMembers() {
  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto mb-14 max-w-6xl px-6 text-center">
        <p className="mb-4 uppercase tracking-[0.3em] text-yellow-400">
          The Band
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          The Faces Behind The Music
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
          Seven musicians. One sound. Bringing Zimbabwean music and live
          energy to every stage.
        </p>
      </div>

      <div className="band-marquee overflow-hidden">
        <div className="band-marquee-track flex w-max">
          <MemberCards />
          <MemberCards duplicate />
        </div>
      </div>
    </section>
  );
}