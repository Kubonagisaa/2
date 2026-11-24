import type { AgroProduct, TrustBadge, GardenProof } from "./types";

export const PHONE_NUMBER = "0943686968";
export const PHONE_DISPLAY = "0943.686.968";
export const ZALO_LINK = `https://zalo.me/${PHONE_NUMBER}`;

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "badge-1",
    icon: "sprout",
    title: "Nguồn giống tuyển chọn chuẩn dòng",
    description: "Giống đầu dòng kiểm định, tỷ lệ sống trên 95%",
  },
  {
    id: "badge-2",
    icon: "truck",
    title: "Giao hàng tận vườn toàn Tây Nguyên",
    description: "Xe tải chở cây giống, nông sản đến tận rẫy",
  },
  {
    id: "badge-3",
    icon: "book-open",
    title: "Hỗ trợ kỹ thuật trồng & chăm sóc",
    description: "Tư vấn kỹ thuật ghép, xử lý bệnh miễn phí",
  },
  {
    id: "badge-4",
    icon: "hand-coins",
    title: "Giá sỉ tận gốc không qua trung gian",
    description: "Mua trực tiếp tại vườn, không phát sinh phí",
  },
];

export const AGRO_PRODUCTS: AgroProduct[] = [
  {
    id: "sp-1",
    name: "Cây Giống Cà Phê Ghép (TR4, TRS1, Xanh Lùn)",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=450&fit=crop&q=80",
    photoCaption: "Vườn ươm cà phê ghép — Đắk R'Moan",
    specification: "Bầu đất lớn · rễ khỏe · cao 35–45cm",
    availability: "Sẵn hàng số lượng lớn",
    zaloPrefill: "Chào chị Thanh, em muốn hỏi giá sỉ cây giống cà phê ghép TR4/TRS1 ạ.",
  },
  {
    id: "sp-2",
    name: "Cây Giống Hồ Tiêu (Vĩnh Linh, Sri Lanka)",
    image: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=600&h=450&fit=crop&q=80",
    photoCaption: "Bầu tiêu ươm chuẩn — Gia Nghĩa",
    specification: "Dây lươn / dây ác ươm bầu · sạch bệnh",
    availability: "Tỷ lệ sống cao, giao từ 500 bầu",
    zaloPrefill: "Chào chị Thanh, em cần báo giá cây giống hồ tiêu Vĩnh Linh ạ.",
  },
  {
    id: "sp-3",
    name: "Cà Phê Nhân Xanh & Rang Xay Đắk Nông",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=450&fit=crop&q=80",
    photoCaption: "Cà phê nhân sàng 16–18 — Đắk Nông",
    specification: "Hạt sàng 16–18 · phơi đạt chuẩn độ ẩm",
    availability: "Bán sỉ từ 50kg – theo tấn",
    zaloPrefill: "Chào chị Thanh, em muốn hỏi giá sỉ cà phê nhân xanh Đắk Nông ạ.",
  },
  {
    id: "sp-4",
    name: "Hồ Tiêu Đen & Tiêu Sọ Đắk Nông",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=450&fit=crop&q=80",
    photoCaption: "Tiêu chắc hạt phơi khô — Đắk Nông",
    specification: "Tiêu chắc hạt · dung trọng 550–600g/l",
    availability: "Giá sỉ cập nhật theo ngày",
    zaloPrefill: "Chào chị Thanh, em cần báo giá sỉ hồ tiêu đen Đắk Nông ạ.",
  },
  {
    id: "sp-5",
    name: "Cây Giống Sầu Riêng & Cây Ăn Trái Xen Canh",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=450&fit=crop&q=80",
    photoCaption: "Sầu riêng Ri6, Monthong ghép — Đắk Nông",
    specification: "Ri6, Monthong ghép chui cành chuẩn",
    availability: "Giao xe tận rẫy toàn Tây Nguyên",
    zaloPrefill: "Chào chị Thanh, em muốn hỏi giá cây giống sầu riêng Ri6/Monthong ạ.",
  },
];

export const GARDEN_PROOFS: GardenProof[] = [
  {
    id: "proof-1",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=450&fit=crop&q=80",
    caption: "Toàn cảnh vườn ươm cây giống lưới che",
  },
  {
    id: "proof-2",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=450&fit=crop&q=80",
    caption: "Kiểm tra bộ rễ bầu cà phê ghép chuẩn",
  },
  {
    id: "proof-3",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&h=450&fit=crop&q=80",
    caption: "Phân loại hạt cà phê nhân sàng 16–18",
  },
  {
    id: "proof-4",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=450&fit=crop&q=80",
    caption: "Bốc xếp cây giống lên xe giao cho khách",
  },
  {
    id: "proof-5",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=450&fit=crop&q=80",
    caption: "Sân phơi hạt tiêu đạt chuẩn độ ẩm",
  },
  {
    id: "proof-6",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=450&fit=crop&q=80",
    caption: "Giao cây giống tận vườn tại Tây Nguyên",
  },
];

export const ORDER_STEPS = [
  {
    step: "01",
    title: "Chọn loại cây giống / nông sản",
    description: "Xem danh mục hoặc gửi hình ảnh loại cây/nông sản cần tìm qua Zalo.",
  },
  {
    step: "02",
    title: "Nhận ảnh lô hàng & báo giá sỉ",
    description: "Vườn ươm gửi video thực tế lô hàng đang có và báo giá sỉ tốt nhất theo số lượng.",
  },
  {
    step: "03",
    title: "Giao tận vườn — kiểm tra rồi thanh toán",
    description: "Xếp xe giao tận nơi toàn Tây Nguyên. Nhận hàng kiểm tra rễ khỏe, chuẩn cây mới thanh toán.",
  },
];
