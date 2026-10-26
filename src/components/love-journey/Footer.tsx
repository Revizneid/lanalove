"use client";

import { Heart } from "lucide-react";
import { STORY } from "@/config/story";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#EAD9CE] bg-[#FBEFE8] py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="font-display text-lg font-semibold italic text-[#43302B]">
            {STORY.himName}
          </span>
          <Heart className="h-4 w-4 animate-heartbeat fill-[#D96A7B] text-[#D96A7B]" aria-hidden="true" />
          <span className="font-display text-lg font-semibold italic text-[#43302B]">
            {STORY.herName}
          </span>
          <span className="text-[#D9BFA8]">•</span>
          <span className="font-display text-lg font-semibold italic text-[#C94F63]">
            {STORY.babyName}
          </span>
        </div>
        <p className="text-xs leading-relaxed text-[#9A7E71] md:text-sm">
          Được làm bằng tất cả yêu thương — kể về hai năm bên nhau và thiên thần nhỏ của chúng mình.
          <br className="hidden md:block" />
          24.10.2024 → hôm nay → và mãi mãi về sau ♡
        </p>
      </div>
    </footer>
  );
}
