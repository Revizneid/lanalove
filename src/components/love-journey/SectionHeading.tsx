"use client";

import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  desc,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <span
        className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] ${
          dark
            ? "border-[#D4A574]/40 bg-white/5 text-[#E9C9A3]"
            : "border-[#D96A7B]/30 bg-white/70 text-[#B75A68]"
        }`}
      >
        <span aria-hidden="true">♥</span>
        {eyebrow}
      </span>
      <h2
        className={`font-display text-3xl font-bold leading-tight md:text-5xl ${
          dark ? "text-[#FBF3EA]" : "text-[#43302B]"
        }`}
      >
        {title}{" "}
        <em className={`font-semibold italic ${dark ? "text-[#E8A0AC]" : "text-[#D96A7B]"}`}>
          {accent}
        </em>
      </h2>
      {desc ? (
        <p
          className={`mt-4 text-sm leading-relaxed md:text-base ${
            dark ? "text-[#E3CFC5]/80" : "text-[#7A6259]"
          }`}
        >
          {desc}
        </p>
      ) : null}
    </Reveal>
  );
}
