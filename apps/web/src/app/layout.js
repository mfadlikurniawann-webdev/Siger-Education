import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Siger Education | Solusi Pendidikan Terpercaya",
  description: "Solusi pendidikan terpercaya di Lampung. Kami mendampingi Anda meraih masa depan gemilang melalui pendidikan berkualitas di dalam dan luar negeri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
