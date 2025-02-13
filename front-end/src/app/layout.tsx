import type { Metadata } from "next";
import { Exo_2, Geist } from "next/font/google";
import { ToastProvider } from "./components/toast/toast-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Exo_2({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} antialiased bg-[#080810] text-neutral-300`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
