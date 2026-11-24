"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  ShieldCheck,
  Sprout,
  Camera,
  FileText,
  Send,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: "tong-quan", label: "Tổng quan", icon: Home },
  { id: "cam-ket", label: "Cam kết", icon: ShieldCheck },
  { id: "danh-muc", label: "Sản phẩm", icon: Sprout },
  { id: "thuc-te", label: "Thực tế", icon: Camera },
  { id: "quy-trinh", label: "Quy trình", icon: FileText },
  { id: "bao-gia", label: "Báo giá", icon: Send },
];

export default function HotbarNav() {
  const [activeId, setActiveId] = useState<string>("tong-quan");
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const centerActiveTab = (id: string) => {
    const activeBtn = itemRefs.current[id];
    const container = containerRef.current;
    if (activeBtn && container) {
      const btnLeft = activeBtn.offsetLeft;
      const btnWidth = activeBtn.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: btnLeft - containerWidth / 2 + btnWidth / 2,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickingRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 140;
          for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
            const el = document.getElementById(NAV_ITEMS[i].id);
            if (el && el.offsetTop <= scrollPos) {
              if (activeId !== NAV_ITEMS[i].id) {
                setActiveId(NAV_ITEMS[i].id);
                centerActiveTab(NAV_ITEMS[i].id);
              }
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, [activeId]);

  const scrollToSection = (id: string) => {
    setActiveId(id);
    centerActiveTab(id);
    isClickingRef.current = true;

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 700);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-[#3C342D]/15 bg-[#75866A] shadow-md">
      <div className="mx-auto max-w-3xl px-2 py-0">
        <div
          ref={containerRef}
          className="flex items-center gap-0 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;

            return (
              <motion.button
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
                whileTap={{ scale: 0.92 }}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex shrink-0 flex-col items-center gap-0.5 px-4 py-2.5 text-[10px] font-semibold font-sans transition-colors duration-200 ${
                  isActive
                    ? "text-[#D8B77A]"
                    : "text-[#F3EBDD]/70 hover:text-[#F3EBDD]"
                }`}
              >
                <Icon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isActive ? "scale-110 text-[#D8B77A]" : "text-[#F3EBDD]/75"
                  }`}
                />
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="agriHotbarUnderline"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#D8B77A]"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
