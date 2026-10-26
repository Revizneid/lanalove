"use client";

import { useSyncExternalStore } from "react";
import { Heart, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { STORY } from "@/config/story";

function subscribe(cb: () => void) {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
}
// Làm tròn tới giây để snapshot ổn định trong 1 giây (tránh re-render vô hạn)
const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => -1;

function diffParts(from: number, to: number) {
  const ms = Math.max(0, to - from);
  const seconds = Math.floor(ms / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return { days, hours, minutes, secs };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function LoveCounter() {
  const nowSec = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const start = new Date(STORY.anniversary).getTime();
  const parts =
    nowSec >= 0 ? diffParts(start, nowSec * 1000) : null;

  const cells = [
    { value: parts ? parts.days.toLocaleString("vi-VN") : "—", label: "ngày" },
    { value: parts ? pad(parts.hours) : "—", label: "giờ" },
    { value: parts ? pad(parts.minutes) : "—", label: "phút" },
    { value: parts ? pad(parts.secs) : "—", label: "giây" },
  ];

  return (
    <section id="counter" aria-label="Đếm thời gian bên nhau" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7C8CE]/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D96A7B]/30 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#B75A68]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Đồng hồ tình yêu
          </span>
          <h2 className="font-display text-3xl font-bold text-[#43302B] md:text-5xl">
            Chúng Mình Đã <em className="italic text-[#D96A7B]">Bên Nhau</em> Được…
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 md:mt-14">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-6">
            {cells.map((c, i) => (
              <div
                key={c.label}
                className={`rounded-3xl border border-[#EAD9CE] bg-white/80 px-4 py-6 shadow-sm backdrop-blur-sm md:py-8 ${
                  i === 0 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="font-display text-4xl font-black tabular-nums text-[#C94F63] md:text-6xl">
                  {c.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-[#9A7E71] md:text-sm">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 text-sm text-[#7A6259] md:text-base">
            <Heart className="h-4 w-4 animate-heartbeat fill-[#D96A7B] text-[#D96A7B]" aria-hidden="true" />
            Kể từ ngày 24.10.2024 — và sẽ còn rất rất nhiều ngày nữa chứ!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
