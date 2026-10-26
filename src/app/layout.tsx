import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const fontDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const fontBody = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hành Trình Của Chúng Mình ♥ 2 Năm Yêu Thương",
  description:
    "Một câu chuyện nhỏ về hai năm bên nhau và thiên thần nhỏ hơn 7 tháng tuổi — nơi tình yêu được kể bằng những khoảnh khắc.",
  keywords: ["hành trình", "tình yêu", "gia đình", "kỷ niệm", "2 năm"],
  openGraph: {
    title: "Hành Trình Của Chúng Mình ♥",
    description: "Hai năm bên nhau và một thiên thần nhỏ hơn 7 tháng tuổi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${fontDisplay.variable} ${fontBody.variable} antialiased bg-[#FDF8F3] text-[#43302B]`}
      >
        {children}
      </body>
    </html>
  );
}
