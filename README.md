# 💕 Hành Trình Của Chúng Mình

Một website kể chuyện (scrollytelling) một trang bằng tiếng Việt, ghi lại **hai năm bên nhau** và sự xuất hiện của **thiên thần nhỏ hơn 7 tháng tuổi** — từ lần gặp gỡ đầu tiên đến ngày cả nhà thành "ba người".

![Tech](https://img.shields.io/badge/Next.js-16-black) ![Tech](https://img.shields.io/badge/TypeScript-5-blue) ![Tech](https://img.shields.io/badge/TailwindCSS-4-cyan) ![Tech](https://img.shields.io/badge/Framer%20Motion-12-pink)

---

## ✨ Tính năng

| # | Section | Mô tả |
|---|---------|-------|
| 1 | **Hero** | Minh họa cặp đôi watercolor trên vầng trăng non, hiệu ứng trái tim & cánh hoa bay (canvas particles) |
| 2 | **Marquee** | Dải chữ yêu thương chạy vô hạn |
| 3 | **Đồng hồ tình yêu** | Đếm **live từng giây** số ngày/giờ/phút/giây bên nhau kể từ ngày kỷ niệm |
| 4 | **Timeline 2 năm** | 6 cột mốc xen kẽ trái/phải, có "card que test 2 vạch hồng" vẽ thuần CSS |
| 5 | **Thiên Thần Nhỏ** | Tuổi bé **tự động cập nhật** ("7 tháng X ngày"), badge xoay tròn, cột mốc phát triển của bé |
| 6 | **Album Kỷ Niệm** | Ảnh kiểu polaroid nghiêng ngẫu nhiên, dính băng keo, hover phóng to |
| 7 | **Bức thư tình** | Bấm mở phong thư → nội dung hiện dần với hiệu ứng **đánh máy** |
| 8 | **Lời hứa nhỏ** | Bấm trái tim để nhận ngẫu nhiên một lời nhắn ngọt ngào |

## 🛠 Công nghệ sử dụng

- **Next.js 16** (App Router) + **TypeScript 5**
- **Tailwind CSS 4** + shadcn/ui
- **Framer Motion** cho mọi hiệu ứng scroll-reveal
- **Google Fonts**: Playfair Display + Be Vietnam Pro (hỗ trợ đầy đủ tiếng Việt)
- **8 ảnh minh họa** phong cách watercolor trong `public/images/`
- Prisma + SQLite (chỉ là scaffold mẫu, website **không bắt buộc** dùng database)

## 📁 Cấu trúc thư mục

```
├── src/
│   ├── app/                  # Trang chính (page.tsx, layout.tsx, globals.css)
│   ├── components/
│   │   ├── love-journey/     # 12 components của website (Hero, Timeline, LoveLetter...)
│   │   └── ui/               # Bộ shadcn/ui
│   ├── config/
│   │   └── story.ts          # ⭐ TOÀN BỘ nội dung câu chuyện — sửa tại đây!
│   └── lib/
├── public/images/            # ⭐ 8 ảnh minh họa watercolor
├── prisma/schema.prisma      # Schema mẫu (không bắt buộc)
├── scripts/generate-images.ts# Script sinh lại ảnh minh họa bằng AI (tùy chọn)
└── package.json
```

## 🎨 Tùy chỉnh nội dung (quan trọng!)

Bạn gần như **không cần đụng vào code** để cá nhân hóa:

1. **Tên, ngày kỷ niệm, ngày sinh bé, các mốc thời gian, thư tình, lời hứa…**
   → sửa một file duy nhất: [`src/config/story.ts`](src/config/story.ts)

2. **Thay ảnh minh họa bằng ảnh thật của gia đình**
   → đặt ảnh của bạn vào `public/images/` **giữ nguyên tên file** hiện có
   (`hero-couple.png`, `timeline-meeting.png`, `baby-portrait.png`, `family-portrait.png`…)
   hoặc đổi đường dẫn tương ứng trong `src/config/story.ts`.

3. **Đổi bảng màu** (hồng đào – kem – nâu ấm)
   → tìm trong `src/app/globals.css` và các component tại `src/components/love-journey/`.

---

## 💻 1. Cài đặt & chạy tại LOCAL

### Yêu cầu

- **Node.js ≥ 20** (khuyến nghị bản LTS 20 hoặc 22) — tải tại [nodejs.org](https://nodejs.org)
- Một trong các package manager: **npm** (có sẵn cùng Node), **bun** hoặc **pnpm**
- Git (nếu tải qua GitHub)

### Các bước chạy

```bash
# 1. Tải mã nguồn (giải nén file zip, hoặc clone từ GitHub)
cd hanh-trinh-cua-chung-minh

# 2. Cài đặt thư viện — chọn MỘT trong ba cách
npm install
# hoặc: bun install
# hoặc: pnpm install

# 3. Tạo file môi trường (website chạy bình thường ngay cả khi bỏ qua bước này,
#    vì database chỉ là scaffold mẫu)
cp .env.example .env          # macOS/Linux
# copy .env.example .env      # Windows CMD

# 4. Chạy chế độ phát triển
npm run dev                   # hoặc: bun dev

# 5. Mở trình duyệt
# http://localhost:3000
```

### Build production chạy tại máy

```bash
npm run build
npm run start:dev             # chạy server production đơn giản
# hoặc bản tối ưu cho VPS/Docker:
npm run build:standalone
npm run start
```

> 💡 **Ghi chú:** nếu muốn dùng database (Prisma + SQLite), chạy `npm run db:generate && npm run db:push` trước. Website hiện tại không lưu dữ liệu nên có thể bỏ qua.

---

## 🐙 2. Đưa dự án lên GITHUB

File `.gitignore` đã được thiết lập sẵn (loại trừ `node_modules`, `.next`, `.env`, file log…).

```bash
# 1. Khởi tạo git trong thư mục dự án (nếu chưa có)
cd hanh-trinh-cua-chung-minh
git init

# 2. Thêm toàn bộ file và commit đầu tiên
git add .
git commit -m "feat: website hành trình 2 năm bên nhau ❤️"

# 3. Tạo repository mới trên GitHub
#    → vào https://github.com/new
#    → đặt tên repo (ví dụ: hanh-trinh-cua-chung-minh)
#    → KHÔNG tick "Add a README file"
#    → Create repository

# 4. Kết nối local với GitHub (thay YOUR_USERNAME bằng tên tài khoản của bạn)
git remote add origin https://github.com/YOUR_USERNAME/hanh-trinh-cua-chung-minh.git

# 5. Đẩy code lên
git branch -M main
git push -u origin main
```

### Cập nhật code sau này

```bash
git add .
git commit -m "mô tả thay đổi"
git push
```

> 🔐 **Lưu ý bảo mật:** file `.env` nằm trong `.gitignore` nên sẽ không bị đẩy lên GitHub — đây là hành vi đúng. Nếu repo public, đừng commit file `.env` chứa thông tin nhạy cảm.

---

## ▲ 3. Triển khai lên VERCEL

### Cách 1: Qua giao diện web (khuyên dùng, ~2 phút)

1. Đẩy code lên GitHub như [phần 2](#-2-đưa-dự-án-lên-github).
2. Truy cập **[vercel.com/new](https://vercel.com/new)** và đăng nhập (có thể dùng tài khoản GitHub).
3. Bấm **Import** chọn repository `hanh-trinh-cua-chung-minh`.
4. Vercel tự động nhận diện **Next.js** — giữ nguyên mọi thiết lập mặc định:
   - Framework Preset: `Next.js` (tự động)
   - Build Command: `next build` (tự động)
   - **Không cần khai báo biến môi trường** (website không dùng database)
5. Bấm **Deploy** và chờ ~1-2 phút.
6. Nhận link dạng `https://hanh-trinh-cua-chung-minh.vercel.app` 🎉

### Cách 2: Qua Vercel CLI

```bash
# 1. Cài Vercel CLI
npm install -g vercel

# 2. Đăng nhập
vercel login

# 3. Deploy môi trường preview (chạy thử)
vercel

# 4. Deploy lên production
vercel --prod
```

### Sau khi deploy

- Mỗi lần `git push` nhánh `main` → Vercel **tự động build và cập nhật** website.
- Mỗi Pull Request sẽ có link preview riêng để xem thử trước khi merge.
- Tên miền riêng: **Settings → Domains** → thêm domain và trỏ DNS theo hướng dẫn.

> ⚠️ **Chú ý:** `next.config.ts` có `output: "standalone"` — Vercel sẽ tự động bỏ qua thiết lập này, không ảnh hưởng gì đến deploy. Thiết lập đó chỉ hữu ích khi tự host bằng Docker/VPS.

---

## 🔧 Xử lý sự cố thường gặp

| Vấn đề | Cách xử lý |
|--------|-----------|
| Port 3000 đang bị chiếm | `npm run dev -- -p 3001` hoặc tắt tiến trình cũ |
| Lỗi phiên bản Node | Kiểm tra `node -v` ≥ 20, nâng cấp tại nodejs.org |
| Lỗi Prisma client chưa generate | `npm run db:generate` (chỉ cần khi dùng DB) |
| Ảnh không hiển thị | Kiểm tra ảnh nằm đúng `public/images/` và tên file khớp với `src/config/story.ts` |
| `bun install` bị treo | Dùng `npm install` thay thế |
| Build lỗi trên Windows | Dùng PowerShell (hỗ trợ `cp` qua Git Bash) hoặc WSL |

---

Made with ❤️ — *24.10.2024 → hôm nay → và mãi mãi về sau*
