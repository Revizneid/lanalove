"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import { HERO, STORY } from "@/config/story";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <header className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-[#FBEFE8] via-[#FDF8F3] to-[#FBE9E5]">
      {/* decorative blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#F7C8CE]/50 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#F3D9B8]/50 blur-3xl" />
        <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
      </div>

      <FloatingHearts density={24} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-28 md:grid-cols-2 md:gap-6 md:pt-32"
      >
        {/* Left: text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D96A7B]/25 bg-white/60 px-4 py-2 text-xs font-medium tracking-wide text-[#B75A68] shadow-sm backdrop-blur-sm md:text-sm"
          >
            <Heart className="h-3.5 w-3.5 fill-[#D96A7B] text-[#D96A7B]" aria-hidden="true" />
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-black leading-[1.05] text-[#43302B] md:text-7xl"
          >
            {HERO.titleTop}
            <br />
            <em className="bg-gradient-to-r from-[#D96A7B] via-[#C94F63] to-[#D4A574] bg-clip-text font-semibold italic text-transparent">
              {HERO.titleAccent}
            </em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[#7A6259] md:mx-0 md:text-base"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex items-center justify-center gap-3 md:justify-start"
          >
            <span className="font-display text-2xl font-semibold italic text-[#43302B]">
              {STORY.himName}
            </span>
            <span className="animate-heartbeat inline-flex">
              <Heart className="h-6 w-6 fill-[#D96A7B] text-[#D96A7B]" aria-hidden="true" />
            </span>
            <span className="font-display text-2xl font-semibold italic text-[#43302B]">
              {STORY.herName}
            </span>
            <span className="mx-1 text-[#D9BFA8]">và</span>
            <span className="font-display text-2xl font-semibold italic text-[#C94F63]">
              {STORY.babyName}
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {HERO.chips.map((chip) => (
              <div
                key={chip.label}
                className="rounded-2xl border border-[#EAD9CE] bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm"
              >
                <div className="font-display text-xl font-bold text-[#C94F63]">{chip.value}</div>
                <div className="text-[11px] text-[#7A6259] md:text-xs">{chip.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9">
            <a
              href="#counter"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D96A7B] to-[#C94F63] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#D96A7B]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#D96A7B]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C94F63]"
            >
              {HERO.cta}
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Right: illustration */}
        <motion.div
          variants={item}
          className="relative order-1 mx-auto w-full max-w-md md:order-2 md:max-w-none"
        >
          <div className="animate-floaty relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-[#F7C8CE]/60 via-transparent to-[#F3D9B8]/60 blur-md"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl shadow-[#C98A7A]/30">
              <Image
                src="/images/hero-couple.png"
                alt="Minh họa cặp đôi yêu thương ngồi trên vầng trăng non giữa những đám mây và trái tim lơ lửng"
                width={1152}
                height={864}
                priority
                className="h-auto w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-[#C94F63]/10"
              />
            </div>

            {/* floating mini card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 120 }}
              className="absolute -bottom-5 -left-4 rounded-2xl border border-[#EAD9CE] bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-sm md:-left-8"
            >
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 animate-heartbeat fill-[#D96A7B] text-[#D96A7B]" aria-hidden="true" />
                <span className="text-xs font-semibold text-[#43302B]">Kể từ 24.10.2024</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.a
        href="#counter"
        aria-label="Cuộn xuống phần đếm ngày yêu nhau"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[#B75A68]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </header>
  );
}
