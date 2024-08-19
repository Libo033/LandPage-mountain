import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

// https://www.figma.com/community/file/788675347108478517/mntn-landing-page

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MNTN",
  description:
    "Landing Page - MNTN Mountain - Created by valentinlibonati33@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
