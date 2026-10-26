"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, MailOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { LETTER } from "@/config/story";

export default function LoveLetter() {
  const [opened, setOpened] = useState(false);
  const [typed, setTyped] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fullText = [
    LETTER.greeting,
    "",
    ...LETTER.paragraphs,
    "",
    LETTER.signoff,
    LETTER.from,
  ].join("\n");

  useEffect(() => {
    if (!opened) return;
    let i = 0;
    timerRef.current = setInterval(() => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, 28);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [opened, fullText]);

  return (
    <section
      id="letter"
      aria-label="Bức thư tình"
      className="relative overflow-hidden bg-[#3A2321] py-20 md:py-28"
    >
      {/* ambient decorations */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#C94F63]/15 blur-3xl" />
        <div className="absolute -right-20 bottom-6 h-96 w-96 rounded-full bg-[#D4A574]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#E8A0AC_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          dark
          eyebrow="Đọc chậm thôi, dễ lúng túng lắm"
          title="Gửi Hai Mẹ Con,"
          accent="Một Bức Thư Nhỏ"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Envelope side */}
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <motion.div
                animate={opened ? { rotate: -6, y: 10, opacity: 0.55, scale: 0.94 } : { rotate: -3, y: 0 }}
                transition={{ type: "spring", stiffness: 90, damping: 14 }}
                className="relative overflow-hidden rounded-[2rem] border-8 border-white/90 shadow-2xl shadow-black/40"
              >
                <Image
                  src="/images/love-envelope.png"
                  alt="Phong thư niêm phong bằng sáp đỏ hình trái tim"
                  width={1024}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </motion.div>

              <AnimatePresence>
                {!opened && (
                  <motion.button
                    key="open-btn"
                    exit={{ opacity: 0, scale: 0.7, y: 14 }}
                    onClick={() => setOpened(true)}
                    className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-[#E88A9A] to-[#C94F63] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#C94F63]/40 transition-transform hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E88A9A]"
                  >
                    <MailOpen className="h-4 w-4" aria-hidden="true" />
                    Bấm để mở thư nhé
                  </motion.button>
                )}
              </AnimatePresence>

              {opened && (
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => {
                    setOpened(false);
                    setTyped("");
                  }}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#E8A0AC]/40 bg-white/10 px-5 py-2.5 text-xs font-semibold text-[#F3D9D5] backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Gấp lại để đọc tiếp lần nữa ♡
                </motion.button>
              )}
            </div>
          </Reveal>

          {/* Letter side */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!opened ? (
                <motion.div
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -14 }}
                  className="flex h-full min-h-56 items-center justify-center rounded-3xl border border-dashed border-[#E8A0AC]/30 p-10 text-center"
                >
                  <p className="text-sm italic leading-relaxed text-[#E3CFC5]/70 md:text-base">
                    “Có những điều nói ra thì ngại…
                    <br />
                    nên anh viết hết vào đây.”
                    <br />
                    <span className="mt-3 inline-flex items-center gap-2 text-[#E8A0AC]">
                      <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
                      Mở phong thư để đọc nhé
                    </span>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="letter"
                  initial={{ opacity: 0, y: 30, rotate: -1.5 }}
                  animate={{ opacity: 1, y: 0, rotate: -0.75 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="letter-paper rounded-2xl p-7 md:p-10"
                >
                  <h3 className="font-display text-2xl font-bold italic text-[#8A4B44] md:text-3xl">
                    {LETTER.title}
                  </h3>
                  <div
                    className="mt-5 max-h-[420px] overflow-y-auto whitespace-pre-line pr-2 text-sm leading-[1.9] text-[#5C4237] md:text-[15px]"
                    aria-live="polite"
                  >
                    {typed}
                    {typed.length < fullText.length && (
                      <span className="typewriter-caret ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-[#C94F63]" />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
