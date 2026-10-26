"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Baby, Home, HeartHandshake, Sparkles, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TIMELINE, type TimelineItem } from "@/config/story";

function PregnancyArt() {
  return (
    <div className="flex h-full min-h-44 w-full items-center justify-center rounded-3xl bg-gradient-to-br from-[#FBE9E5] to-[#F7D8DC] p-6">
      <div className="relative flex w-44 rotate-6 items-end justify-center gap-3 rounded-2xl border border-[#EAD9CE] bg-white px-5 pb-5 pt-8 shadow-lg">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C94F63] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          Test
        </span>
        <span className="h-10 w-2.5 rounded-full bg-[#F3C1C9]" aria-hidden="true" />
        <span className="h-10 w-2.5 rounded-full bg-[#D96A7B]" aria-hidden="true" />
        <motion.span
          className="absolute -right-6 -top-6"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <HeartHandshake className="h-7 w-7 fill-[#E88A9A] text-[#E88A9A]" aria-hidden="true" />
        </motion.span>
      </div>
    </div>
  );
}

function CardBody({ item }: { item: TimelineItem }) {
  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-[#EAD9CE] shadow-md shadow-[#C98A7A]/10">
        {item.special === "pregnancy" ? (
          <PregnancyArt />
        ) : item.image ? (
          <Image
            src={item.image}
            alt={`Minh họa: ${item.title}`}
            width={item.special === "now" ? 1344 : 1024}
            height={item.special === "now" ? 768 : 1024}
            className={`h-auto w-full object-cover ${item.special === "now" ? "aspect-[16/9]" : "aspect-square"}`}
          />
        ) : null}
      </div>
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#C94F63]/10 px-3 py-1 text-xs font-bold tracking-wider text-[#C94F63]">
        <Star className="h-3 w-3 fill-current" aria-hidden="true" />
        {item.date}
      </div>
      <h3 className="font-display mt-2 text-2xl font-bold text-[#43302B]">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#7A6259]">{item.desc}</p>
    </>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" aria-label="Hành trình hai năm" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Mỗi mốc là một điều đáng nhớ"
          title="Hành Trình"
          accent="Hai Năm"
          desc="Từ hai người lạ đến một mái nhà có tiếng cười của bé — cùng xem lại từng chặng nhé."
        />

        <div className="relative">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#E8A0AC] via-[#D4A574] to-[#E8A0AC] md:left-1/2"
          />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE.map((item, idx) => {
              const leftSide = idx % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid grid-cols-1 items-center gap-6 pl-14 md:grid-cols-2 md:gap-14 md:pl-0 ${
                    leftSide ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* node on line */}
                  <span
                    aria-hidden="true"
                    className="absolute left-5 top-2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#FDF8F3] bg-gradient-to-br from-[#E88A9A] to-[#C94F63] text-white shadow-lg md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                  >
                    {item.special === "pregnancy" ? (
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    ) : item.special === "now" ? (
                      <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                    ) : idx === 2 ? (
                      <Home className="h-4 w-4" aria-hidden="true" />
                    ) : idx === 4 ? (
                      <Baby className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>

                  <div className={`[direction:ltr] ${leftSide ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <Reveal>
                      <CardBody item={item} />
                    </Reveal>
                  </div>
                  <div className="hidden [direction:ltr] md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
