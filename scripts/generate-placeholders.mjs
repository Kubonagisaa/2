import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const dir = join(process.cwd(), 'public', 'images');
mkdirSync(dir, { recursive: true });

function makeSVG(w, h, label, bgColor = '#e2e8f0') {
  const lines = label.split('\\n');
  const lineHeight = 20;
  const startY = h / 2 - ((lines.length - 1) * lineHeight) / 2;
  const textElements = lines
    .map((line, i) => `<text x="${w/2}" y="${startY + i * lineHeight}" font-family="sans-serif" font-size="14" fill="#44403c" text-anchor="middle" dominant-baseline="central">${line}</text>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="${bgColor}"/>${textElements}</svg>`;
}

const images = [
  { name: 'hero-vuon-uom.svg', w: 800, h: 500, label: 'Vườn ươm cây giống\\nGia Nghĩa, Đắk Nông', bg: '#bbf7d0' },
  { name: 'sp-cafe-giong.svg', w: 400, h: 300, label: 'Cà phê ghép\\nTR4 / TRS1', bg: '#d9f99d' },
  { name: 'sp-tieu-giong.svg', w: 400, h: 300, label: 'Hồ tiêu giống\\nVĩnh Linh', bg: '#a7f3d0' },
  { name: 'sp-cafe-nhan.svg', w: 400, h: 300, label: 'Cà phê nhân\\nsàng 16–18', bg: '#fde68a' },
  { name: 'sp-tieu-hat.svg', w: 400, h: 300, label: 'Tiêu đen\\nchắc hạt', bg: '#fed7aa' },
  { name: 'sp-sau-rieng.svg', w: 400, h: 300, label: 'Sầu riêng\\nRi6 / Monthong', bg: '#c7d2fe' },
  { name: 'proof-vuon-uom.svg', w: 400, h: 300, label: 'Toàn cảnh\\nvườn ươm', bg: '#bbf7d0' },
  { name: 'proof-bo-re.svg', w: 400, h: 300, label: 'Kiểm tra\\nbộ rễ bầu', bg: '#d9f99d' },
  { name: 'proof-phan-loai.svg', w: 400, h: 300, label: 'Phân loại\\nhạt cà phê', bg: '#fde68a' },
  { name: 'proof-boc-xep.svg', w: 400, h: 300, label: 'Bốc xếp\\ncây giống', bg: '#bae6fd' },
  { name: 'proof-tieu-phoi.svg', w: 400, h: 300, label: 'Sân phơi\\nhồ tiêu', bg: '#fed7aa' },
  { name: 'proof-giao-hang.svg', w: 400, h: 300, label: 'Giao hàng\\ntận vườn', bg: '#a7f3d0' },
];

for (const img of images) {
  writeFileSync(join(dir, img.name), makeSVG(img.w, img.h, img.label, img.bg));
  console.log(`Created: ${img.name}`);
}
console.log('Done!');
