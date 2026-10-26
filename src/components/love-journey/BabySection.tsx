"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { Cake, Ruler, Smile, Weight, MoonStar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { BABY, STORY } from "@/config/story";

function subscribe(cb: () => void) {
  const id = setInterval(cb, 60_000);
  return () => clearInterval(id);
}
const getSnapshot = () => Math.floor(Date.now() / 60_000);
const getServerSnapshot = () => -1;

function babyAgeText(from: string, now: number | null) {
  if (now === null) return null;
  const start = new Date(from);
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  let days = now.getDate() - start.getDate();
  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) return null;
  if (months === 0) return `${days} ngày tuổi`;
  return `${months} tháng ${days} ngày tuổi`;
}

export default function BabySection() {
  const nowMin = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const age = babyAgeText(STORY.babyBirthday, nowMin >= 0 ? new Date(nowMin * 60_000) : null);

  return (
    <section
      id="baby"
      aria-label="Thiên thần nhỏ của chúng mình"
      className="relative overflow-hidden bg-gradient-to-b from-[#FBE9E5] via-[#FDF8F3] to-[#FBEFE8] py-20 md:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -right-32 top-16 h-96 w-96 rounded-full bg-[#F7C8CE]/40 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#F3D9B8]/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Điều kỳ diệu nhất của hai năm"
          title="Thiên Thần Nhỏ"
          accent="Của Chúng Mình"
          desc={BABY.intro}
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image with rotating badge */}
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="animate-floaty relative">
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl shadow-[#C98A7A]/25">
                <Image
                  src="/images/baby-portrait.png"
                  alt={`Minh họa ${STORY.babyName} hơn 7 tháng tuổi đang cười với chiếc nơ hồng trên đầu`}
                  width={1024}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -right-2 -top-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg md:-right-10 md:-top-10 md:h-28 md:w-28"
              >
                <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
                  <defs>
                    <path id="circlePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text className="fill-[#C94F63] text-[10.5px] font-semibold tracking-[0.18em]">
                    <textPath href="#circlePath">CÔNG CHÚA NHỎ • 7+ THÁNG TUỔI •</textPath>
                  </text>
                </svg>
                <Cake className="h-6 w-6 fill-[#F7C8CE] text-[#C94F63]" aria-hidden="true" />
              </div>
            </div>
          </Reveal>

          {/* Age + stats + milestones */}
          <div>
            <Reveal>
              <div className="rounded-3xl border border-[#EAD9CE] bg-white/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9A7E71]">
                  {STORY.babyName} hiện tại đã được
                </p>
                <p className="font-display mt-2 text-4xl font-black text-[#C94F63] md:text-5xl" aria-live="polite">
                  {age ?? "7+ tháng tuổi"}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {BABY.stats.map((s) => (
                    <div key={s.label} className="rounded-2xl bg-[#FBEFE8] px-4 py-3">
                      <div className="font-display text-xl font-bold text-[#C94F63]">{s.value}</div>
                      <div className="mt-0.5 text-[11px] leading-snug text-[#7A6259] md:text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#9A7E71]">
                  <span className="inline-flex items-center gap-1.5">
                    <Weight className="h-3.5 w-3.5" aria-hidden="true" /> Cân nặng
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="h-3.5 w-3.5" aria-hidden="true" /> Chiều cao
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Smile className="h-3.5 w-3.5" aria-hidden="true" /> Tiếng cười
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MoonStar className="h-3.5 w-3.5" aria-hidden="true" /> Và cả những đêm thức trắng đáng yêu
                  </span>
                </div>
              </div>
            </Reveal>

            {/* milestones mini timeline */}
            <Reveal delay={0.15} className="mt-6">
              <ol className="relative space-y-4 border-l-2 border-dashed border-[#E8A0AC]/60 pl-6">
                {BABY.milestones.map((m, i) => (
                  <li key={m.time} className="relative">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-white ${
                        i === BABY.milestones.length - 1
                          ? "animate-pulse bg-[#D96A7B]"
                          : "bg-[#E8A0AC]"
                      }`}
                    />
                    <p className="text-sm leading-relaxed text-[#7A6259]">
                      <span className="mr-2 inline-block rounded-full bg-[#C94F63]/10 px-2.5 py-0.5 text-xs font-bold text-[#C94F63]">
                        {m.time}
                      </span>
                      {m.text}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
