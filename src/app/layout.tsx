import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vườn Ươm & Nông Sản Đắk Nông — Cây Giống, Cà Phê, Hồ Tiêu",
  description:
    "Chuyên cây giống cà phê ghép, hồ tiêu, sầu riêng chuẩn dòng và thu mua cung ứng cà phê nhân, hồ tiêu Đắk Nông sỉ số lượng lớn. Giá tận vườn, giao toàn Tây Nguyên.",
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#75866A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${bricolage.variable} ${jakarta.variable}`}>
      <body className="bg-[#F3EBDD] font-sans antialiased text-[#3C342D]">
        {children}
      </body>
    </html>
  );
}
