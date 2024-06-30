import type { Metadata } from "next";
import { Allerta_Stencil } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components";
import { Toaster } from "sonner";
// import dynamic from "next/dynamic";

const allerta = Allerta_Stencil({
  weight: ["400"],
  subsets: ["latin"],
  preload: false,
});

// const DynamicNavbar = dynamic(() => import("../components/Navbar"), {
//   ssr: false,
//   loading: () => <p>Loading..</p>,
// });

export const metadata: Metadata = {
  title: "Missing",
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
    <html lang="en">
      <body
        className={`${allerta.className} bg-dark-100 text-primary-600 relative `}
      >
        <Toaster position="bottom-right" />
        {/* <DynamicNavbar /> */}
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
