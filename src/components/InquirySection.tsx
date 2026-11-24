"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, PhoneCall } from "lucide-react";
import type { WholesaleQuoteForm } from "@/types";

const fadeUp = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const t = { duration: 0.3, ease: "easeOut" as const };

export default function InquirySection() {
  const [form, setForm] = useState<WholesaleQuoteForm>({
    name: "",
    phone: "",
    need: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="bao-gia" className="scroll-mt-12 bg-[#F3EBDD] px-4 py-10 border-t border-[#A75C3D]/12">
      <div className="mx-auto max-w-3xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={t}
          className="overflow-hidden rounded-xl border border-[#A75C3D]/15 bg-white shadow-xs"
        >
          {/* Top image banner */}
          <div className="relative h-32 overflow-hidden sm:h-40">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=300&fit=crop&q=80"
              alt="Vườn ươm cây giống xanh tốt"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#75866A]/60 to-[#3C342D]/90" />
            <div className="absolute inset-0 flex flex-col justify-center px-5">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="h-[2px] w-5 bg-[#D8B77A]" />
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D8B77A] font-sans">
                  <PhoneCall className="h-3 w-3" />
                  Báo Giá Tận Vườn
                </span>
              </div>
              <h2 className="text-lg font-extrabold text-[#F3EBDD] font-display sm:text-xl">
                Nhận Báo Giá Sỉ Nhanh
              </h2>
            </div>
          </div>

          {/* Form body */}
          <div className="p-5 sm:p-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="rounded-xl bg-[#75866A]/10 p-6 text-center border border-[#75866A]/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 400, damping: 20 }}
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#75866A]" />
                </motion.div>
                <p className="mt-2 text-base font-bold text-[#3C342D] font-display">
                  Gửi thành công!
                </p>
                <p className="mt-1 text-sm font-sans text-[#3C342D]/70">
                  Chị Thanh sẽ gọi hoặc nhắn Zalo báo giá sỉ ngay.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="mb-1 block text-xs font-bold text-[#A75C3D] uppercase font-sans tracking-wide">
                    Tên anh/chị:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Chú Bảy, Đại lý ABC..."
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 w-full rounded-lg border border-[#A75C3D]/20 bg-[#F3EBDD]/40 px-4 text-base font-sans text-[#3C342D] placeholder:text-[#3C342D]/35 transition-all focus:border-[#A75C3D] focus:bg-white focus:ring-2 focus:ring-[#A75C3D]/15 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-[#A75C3D] uppercase font-sans tracking-wide">
                    Số điện thoại / Zalo:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Số liên hệ tiện nhất..."
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-12 w-full rounded-lg border border-[#A75C3D]/20 bg-[#F3EBDD]/40 px-4 text-base font-sans text-[#3C342D] placeholder:text-[#3C342D]/35 transition-all focus:border-[#A75C3D] focus:bg-white focus:ring-2 focus:ring-[#A75C3D]/15 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-bold text-[#A75C3D] uppercase font-sans tracking-wide">
                    Loại cây / nông sản &amp; số lượng:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: 1000 bầu cà phê TR4, 5 tạ tiêu đen..."
                    value={form.need}
                    onChange={(e) => setForm({ ...form, need: e.target.value })}
                    className="h-12 w-full rounded-lg border border-[#A75C3D]/20 bg-[#F3EBDD]/40 px-4 text-base font-sans text-[#3C342D] placeholder:text-[#3C342D]/35 transition-all focus:border-[#A75C3D] focus:bg-white focus:ring-2 focus:ring-[#A75C3D]/15 focus:outline-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#A75C3D] text-base font-bold text-[#F3EBDD] font-sans shadow-md transition-colors hover:bg-[#934f33]"
                >
                  <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  <span>Gửi Yêu Cầu Báo Giá Sỉ</span>
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
