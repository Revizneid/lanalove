"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { PROMISES } from "@/config/story";

export default function PromiseHeart() {
  const [msg, setMsg] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const next = PROMISES[Math.floor(Math.random() * PROMISES.length)];
    setMsg(next);
    setCount((c) => c + 1);
  };

  return (
    <section
      id="promise"
      aria-label="Lời hứa nhỏ"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7C8CE]/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-[#43302B] md:text-4xl">
          Một Điều Nhỏ <em className="italic text-[#D96A7B]">Muốn Nói</em>
        </h2>
        <p className="mt-3 text-sm text-[#7A6259] md:text-base">
          Chạm vào trái tim để nhận một lời hứa nhỏ từ chúng mình nhé ♡
        </p>

        <div className="mt-10 flex flex-col items-center gap-8">
          <motion.button
            onClick={handleClick}
            aria-label="Bấm để nhận một lời nhắn yêu thương"
            whileTap={{ scale: 0.88 }}
            className="animate-heartbeat relative rounded-full p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C94F63]"
          >
            <Heart className="h-24 w-24 fill-[#D96A7B] text-[#C94F63] drop-shadow-xl md:h-28 md:w-28" aria-hidden="true" />
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-[#E88A9A]/40 blur-xl"
            />
          </motion.button>

          <div className="min-h-[4.5rem]">
            <AnimatePresence mode="wait">
              {msg ? (
                <motion.div
                  key={`${msg}-${count}`}
                  initial={{ opacity: 0, y: 16, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#EAD9CE] bg-white/85 px-6 py-4 shadow-lg shadow-[#C98A7A]/10 backdrop-blur-sm"
                >
                  <Heart className="h-4 w-4 shrink-0 fill-[#D96A7B] text-[#D96A7B]" aria-hidden="true" />
                  <p className="font-display text-lg italic text-[#43302B] md:text-xl">{msg}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
