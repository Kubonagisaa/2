"use client";

import { Phone, Leaf, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_NUMBER, PHONE_DISPLAY, ZALO_LINK } from "@/data";

const slideUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const t = { duration: 0.5, ease: "easeOut" as const };

export default function HeroSection() {
  return (
    <section id="tong-quan" className="relative min-h-[85vh] flex flex-col">
      {/* ── Top Identity Bar ── */}
      <header className="relative z-20 flex items-center justify-between bg-[#75866A] px-4 py-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8B77A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8B77A]"></span>
          </span>
          <Leaf className="h-4 w-4 shrink-0 text-[#D8B77A]" />
          <span className="truncate text-[11px] font-semibold tracking-[0.12em] text-[#F3EBDD]/95 uppercase font-sans">
            Vườn Ươm &amp; Nông Sản Đắk Nông
          </span>
        </div>
        <motion.a
          href={`tel:${PHONE_NUMBER}`}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.94 }}
          className="ml-2 shrink-0 rounded-md bg-[#A75C3D] px-3 py-1 text-[11px] font-bold text-[#F3EBDD] font-sans shadow-xs transition-colors hover:bg-[#934f33]"
        >
          {PHONE_DISPLAY}
        </motion.a>
      </header>

      {/* ── Full-bleed hero image ── */}
      <div className="relative flex-1 flex items-end overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=960&h=800&fit=crop&q=80"
          alt="Vườn ươm cây giống xanh tốt tại Đắk Nông"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Brand-colored gradient overlay: Earth Brown to Sage */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3C342D] via-[#3C342D]/80 to-[#75866A]/45" />

        {/* Text content overlaid on image */}
        <div className="relative z-10 w-full px-4 pb-6 pt-24">
          {/* Kicker — clean line + uppercase text, NO pill badge */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={t}
            className="flex items-center gap-2.5 mb-3"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 28 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2px] bg-[#D8B77A]"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B77A] font-sans">
              Giá Sỉ Tận Vườn • Bao Sống 95%
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ ...t, delay: 0.1 }}
            className="text-[26px] font-extrabold leading-[1.2] text-[#F3EBDD] font-display sm:text-3xl"
          >
            Cà Phê — Hồ Tiêu
            <br />
            <span className="text-[#D8B77A]">Cây Giống Đắk Nông</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ ...t, delay: 0.15 }}
            className="mt-2.5 max-w-sm text-base font-sans leading-relaxed text-[#F3EBDD]/90"
          >
            Cây giống cà phê ghép, hồ tiêu, sầu riêng chuẩn dòng. Thu mua &amp; cung ứng
            nông sản sỉ toàn Tây Nguyên.
          </motion.p>

          {/* CTA row — Terracotta + Warm Ivory buttons */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ ...t, delay: 0.2 }}
            className="mt-5 flex gap-3"
          >
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-[#A75C3D] px-5 py-3 text-sm font-bold text-[#F3EBDD] shadow-lg shadow-black/25 font-sans transition-colors hover:bg-[#934f33]"
            >
              <motion.div
                animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 3.5, duration: 0.8 }}
              >
                <Phone className="h-4 w-4" />
              </motion.div>
              <span>Gọi Ngay</span>
            </motion.a>
            <motion.a
              href={`${ZALO_LINK}?text=${encodeURIComponent("Chào chị Thanh, em muốn hỏi giá sỉ cây giống / nông sản Đắk Nông ạ.")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-lg bg-[#F3EBDD] px-5 py-3 text-sm font-bold text-[#3C342D] shadow-lg shadow-black/25 font-sans transition-colors hover:bg-white"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-xs bg-[#0068FF] text-[9px] font-black text-white">
                Z
              </span>
              <span>Zalo Báo Giá Sỉ</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
