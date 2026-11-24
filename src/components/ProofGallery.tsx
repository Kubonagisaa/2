"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { GARDEN_PROOFS } from "@/data";
import type { GardenProof } from "@/types";

function ProofSlide({ photo }: { photo: GardenProof }) {
  return (
    <div className="group relative w-[72vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-xl border border-[#F3EBDD]/15 bg-[#2C2621] shadow-sm">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={photo.image}
          alt={photo.caption}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#3C342D]/95 via-[#75866A]/30 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />
      <span className="absolute inset-x-0 bottom-0 p-3.5 text-sm font-semibold font-sans leading-tight text-[#F3EBDD] drop-shadow-xs transition-transform duration-300 group-hover:-translate-y-0.5">
        {photo.caption}
      </span>
    </div>
  );
}

export default function ProofGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="thuc-te" className="scroll-mt-12 bg-[#3C342D] py-10 overflow-hidden">
      <div className="mx-auto max-w-3xl px-4">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="h-[2px] w-7 bg-[#D8B77A]" />
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D8B77A] font-sans">
                <Camera className="h-3 w-3" />
                Ảnh Thực Tế
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-[#F3EBDD] font-display sm:text-2xl">
              Tại Vườn &amp; Giao Hàng
            </h2>
          </div>
          <div className="flex gap-1.5 shrink-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("left")}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#F3EBDD]/10 text-[#F3EBDD]/80 transition-colors hover:bg-[#F3EBDD]/25 hover:text-white"
              aria-label="Trượt trái"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll("right")}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#F3EBDD]/10 text-[#F3EBDD]/80 transition-colors hover:bg-[#F3EBDD]/25 hover:text-white"
              aria-label="Trượt phải"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex gap-3 overflow-x-auto px-4 pb-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {GARDEN_PROOFS.map((photo) => (
          <ProofSlide key={photo.id} photo={photo} />
        ))}
      </motion.div>
    </section>
  );
}
