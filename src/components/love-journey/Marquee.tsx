"use client";

import { Heart } from "lucide-react";
import { MARQUEE_WORDS } from "@/config/story";

export default function Marquee() {
  const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[#EAD9CE] bg-white/60 py-4"
    >
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {words.map((w, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8">
                <span className="font-display text-lg italic text-[#B75A68] md:text-xl">{w}</span>
                <Heart className="h-3.5 w-3.5 fill-[#E8A0AC] text-[#E8A0AC]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
