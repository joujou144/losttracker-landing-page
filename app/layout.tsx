import type { Metadata } from "next";
import { Allerta_Stencil } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Toaster } from "sonner";
// import dynamic from "next/dynamic";

const allerta = Allerta_Stencil({
  weight: ["400"],
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "LostTracker",
  description: "Missing Persons App",
  icons: {
    icon: ["./favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${allerta.className} bg-dark-100 text-primary-600 relative`}
      >
        <Toaster position="bottom-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
