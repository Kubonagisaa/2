"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_NUMBER, PHONE_DISPLAY, ZALO_LINK } from "@/data";

export default function StickyBottomBar() {
  return (
    <motion.aside
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 280 }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#A75C3D]/25 bg-[#3C342D]/95 p-2.5 backdrop-blur-md md:hidden"
    >
      <div className="grid grid-cols-2 gap-2.5">
        <motion.a
          href={`tel:${PHONE_NUMBER}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.94 }}
          className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#A75C3D] text-sm font-bold text-[#F3EBDD] font-sans shadow-xs transition-colors hover:bg-[#934f33]"
        >
          <motion.div
            animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 3.5, duration: 0.8 }}
          >
            <Phone className="h-4 w-4 shrink-0" />
          </motion.div>
          <span className="truncate">Gọi {PHONE_DISPLAY}</span>
        </motion.a>
        <motion.a
          href={`${ZALO_LINK}?text=${encodeURIComponent("Chào chị Thanh, em muốn hỏi giá sỉ cây giống / nông sản Đắk Nông.")}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.94 }}
          className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0068FF] text-sm font-bold text-white font-sans shadow-xs transition-colors hover:bg-blue-700"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span>Chat Zalo</span>
        </motion.a>
      </div>
    </motion.aside>
  );
}
