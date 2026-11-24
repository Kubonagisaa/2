"use client";

import { motion } from "framer-motion";
import { ORDER_STEPS } from "@/data";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const t = { duration: 0.3, ease: "easeOut" as const };

export default function ProcessSection() {
  return (
    <section id="quy-trinh" className="scroll-mt-12 bg-[#F3EBDD] px-4 py-10 border-t border-[#A75C3D]/12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-7">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="h-[2px] w-7 bg-[#D8B77A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A75C3D] font-sans">
              3 Bước Đặt Hàng
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-[#3C342D] font-display sm:text-2xl">
            Đặt Hàng &amp; Giao Tận Vườn
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[26px] top-[26px] bottom-[26px] w-[2px] bg-[#D8B77A]/35" />

          <div className="space-y-0">
            {ORDER_STEPS.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                transition={{ ...t, delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="group relative flex gap-4 pb-6 last:pb-0"
              >
                <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-xl bg-[#A75C3D] text-lg font-extrabold text-[#F3EBDD] font-display shadow-md ring-4 ring-[#F3EBDD] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#D8B77A] group-hover:text-[#3C342D]">
                  {item.step}
                </div>
                <div className="flex-1 rounded-xl border border-[#A75C3D]/15 bg-white p-4 shadow-2xs transition-all duration-300 group-hover:border-[#A75C3D]/35 group-hover:shadow-xs">
                  <h3 className="text-base font-bold text-[#3C342D] font-display transition-colors group-hover:text-[#A75C3D]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-sans leading-relaxed text-[#3C342D]/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
