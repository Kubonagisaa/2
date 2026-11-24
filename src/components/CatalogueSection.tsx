"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle, ChevronRight } from "lucide-react";
import { AGRO_PRODUCTS, ZALO_LINK } from "@/data";
import type { AgroProduct } from "@/types";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const t = { duration: 0.35, ease: "easeOut" as const };

function ProductCard({ item, index }: { item: AgroProduct; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...t, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
      className="group overflow-hidden rounded-xl border border-[#A75C3D]/15 bg-white shadow-2xs transition-all duration-300 hover:border-[#A75C3D]/35 hover:shadow-md"
    >
      {/* Horizontal layout: image left, info right */}
      <div className="flex gap-0">
        {/* Image — fixed width left panel */}
        <div className="relative w-[42%] shrink-0 overflow-hidden bg-stone-100">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
          />
        </div>

        {/* Info — right side */}
        <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4">
          <div>
            <h3 className="text-[15px] font-bold font-display leading-snug text-[#3C342D] line-clamp-2 transition-colors group-hover:text-[#A75C3D] sm:text-base">
              {item.name}
            </h3>
            <p className="mt-1.5 text-sm font-bold font-sans text-[#A75C3D] sm:text-base">
              {item.specification}
            </p>
            <div className="mt-1 flex items-center gap-1 text-xs font-semibold font-sans text-[#75866A]">
              <CheckCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{item.availability}</span>
            </div>
          </div>

          <motion.a
            href={`${ZALO_LINK}?text=${encodeURIComponent(item.zaloPrefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0068FF] px-4 py-2 text-xs font-bold text-white font-sans shadow-xs transition-colors hover:bg-blue-700 sm:text-sm"
          >
            <MessageCircle className="h-3.5 w-3.5 shrink-0" />
            <span>Hỏi giá sỉ</span>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function CatalogueSection() {
  return (
    <section id="danh-muc" className="scroll-mt-12 bg-[#F3EBDD] px-4 py-10 border-t border-[#A75C3D]/12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="h-[2px] w-7 bg-[#D8B77A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A75C3D] font-sans">
              Danh Mục Chủ Lực
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-[#3C342D] font-display sm:text-2xl">
            Cây Giống &amp; Nông Sản Đắk Nông
          </h2>
          <p className="mt-1 text-sm font-sans text-[#3C342D]/70">
            Bấm Zalo để nhận video thực tế &amp; báo giá sỉ theo số lượng
          </p>
        </div>
        <div className="space-y-3.5">
          {AGRO_PRODUCTS.map((item, i) => (
            <ProductCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
