"use client";

import { Sprout, Truck, BookOpen, HandCoins } from "lucide-react";
import { motion } from "framer-motion";
import { TRUST_BADGES } from "@/data";
import type { TrustBadge } from "@/types";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  sprout: Sprout,
  truck: Truck,
  "book-open": BookOpen,
  "hand-coins": HandCoins,
};

const slideIn = { hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } };
const t = { duration: 0.35, ease: "easeOut" as const };

function TrustRow({ item, index }: { item: TrustBadge; index: number }) {
  const Icon = ICON_MAP[item.icon] ?? Sprout;
  return (
    <motion.div
      variants={slideIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      transition={{ ...t, delay: index * 0.08 }}
      whileHover={{ x: 5 }}
      className="group flex items-start gap-3.5 rounded-xl border border-[#A75C3D]/15 bg-white p-4 shadow-2xs transition-all duration-300 hover:border-[#A75C3D]/35 hover:shadow-xs"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#75866A]/15 text-[#75866A] transition-all duration-300 group-hover:bg-[#75866A] group-hover:text-[#F3EBDD]">
        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" strokeWidth={2.2} />
      </div>
      <div className="min-w-0">
        <h3 className="text-[15px] font-bold leading-snug text-[#3C342D] font-display transition-colors group-hover:text-[#A75C3D]">
          {item.title}
        </h3>
        <p className="mt-0.5 text-sm font-sans leading-relaxed text-[#3C342D]/70">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section id="cam-ket" className="scroll-mt-12 bg-[#F3EBDD] px-4 py-10 border-t border-[#A75C3D]/12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="h-[2px] w-7 bg-[#D8B77A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A75C3D] font-sans">
              Nhà Vườn Uy Tín
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-[#3C342D] font-display sm:text-2xl">
            Vì Sao Chọn Vườn Ươm Chúng Tôi?
          </h2>
        </div>
        <div className="space-y-3">
          {TRUST_BADGES.map((item, i) => (
            <TrustRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
