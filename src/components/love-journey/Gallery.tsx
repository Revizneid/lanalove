"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GALLERY } from "@/config/story";

export default function Gallery() {
  return (
    <section id="gallery" aria-label="Những khoảnh khắc đáng nhớ" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Lưu giữ từng khoảnh khắc"
          title="Album"
          accent="Kỷ Niệm"
          desc="Những bức ảnh đầu tiên của album nhà mình — sẽ dần được thay bằng hình thật của ba mẹ con đấy!"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.caption}
              initial={{ opacity: 0, y: 44, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: g.tilt }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              className="group relative cursor-default rounded-sm bg-white p-3 pb-4 shadow-lg shadow-[#C98A7A]/15 transition-shadow hover:shadow-2xl hover:shadow-[#C98A7A]/25"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={g.image}
                  alt={`Kỷ niệm: ${g.caption}`}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between px-1">
                <span className="font-display text-base font-semibold italic text-[#43302B]">
                  {g.caption}
                </span>
                <Camera className="h-4 w-4 text-[#D4A574]" aria-hidden="true" />
              </figcaption>
              {/* tape decoration */}
              <span
                aria-hidden="true"
                className={`absolute -top-2.5 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-4deg] bg-[#F3D9B8]/80 shadow-sm ${
                  i % 2 === 0 ? "rotate-[-4deg]" : "rotate-[5deg]"
                }`}
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
