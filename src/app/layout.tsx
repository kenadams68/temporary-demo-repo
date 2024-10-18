import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To-do list app demo",
  description: "Demo for trying some AI features",
};

export const viewport: Viewport = {
  themeColor: "#fff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        <header className="p-4 border-b w-full font-bold text-xl">
          Todo App
        </header>
        <div className="w-full">{children}</div>
        <footer className="border-t p-6 text-center">
          &copy; {new Date().getFullYear()} &middot; All rights reserved
        </footer>
      </body>
    </html>
  );
}
