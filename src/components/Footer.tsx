"use client";

import { Phone, MessageCircle, MapPin, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_NUMBER, PHONE_DISPLAY, ZALO_LINK } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-[#2C2621] text-[#F3EBDD]">
      <div className="mx-auto max-w-3xl px-4 py-8">
        {/* Brand */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A75C3D]/25">
            <Leaf className="h-4 w-4 text-[#D8B77A]" />
          </div>
          <span className="text-sm font-bold tracking-wide text-[#F3EBDD]/90 font-display">
            Vườn Ươm &amp; Nông Sản Đắk Nông
          </span>
        </div>

        <p className="text-sm font-sans leading-relaxed text-[#F3EBDD]/60 mb-4">
          Chuyên cây giống cà phê ghép, hồ tiêu, sầu riêng chuẩn dòng. Cung ứng
          cà phê nhân, hồ tiêu Đắk Nông sỉ giá tận vườn. Giao tận nơi toàn Tây Nguyên.
        </p>

        <div className="flex items-center gap-2 text-xs font-sans text-[#F3EBDD]/50 mb-5">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-[#D8B77A]/75" />
          <span>Gia Nghĩa / Đắk R&apos;Moan, tỉnh Đắk Nông</span>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          <motion.a
            href={`tel:${PHONE_NUMBER}`}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#A75C3D] px-4 py-2 text-sm font-bold text-[#F3EBDD] font-sans shadow-xs transition-colors hover:bg-[#934f33]"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </motion.a>
          <motion.a
            href={`${ZALO_LINK}?text=${encodeURIComponent("Chào chị Thanh, em cần báo giá sỉ nông sản Đắk Nông.")}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0068FF] px-4 py-2 text-sm font-bold text-white font-sans shadow-xs transition-colors hover:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            Chat Zalo
          </motion.a>
        </div>

        {/* Divider + credit */}
        <div className="border-t border-[#F3EBDD]/10 pt-5 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-between">
          <p className="text-[11px] font-sans text-[#F3EBDD]/40">
            © {new Date().getFullYear()} Vườn Ươm Trịnh Thị Thanh. Cây giống chuẩn dòng.
          </p>
          <div className="inline-flex items-center gap-1.5 rounded-md border border-[#D8B77A]/20 bg-[#F3EBDD]/5 px-3 py-1 text-[11px] font-sans text-[#F3EBDD]/60">
            <span>Thiết kế bởi</span>
            <span className="font-bold tracking-wide text-[#D8B77A]">
              NeaGiSea Studio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
