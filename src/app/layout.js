import "./globals.css";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { cn } from "@/lib/utils";
import Navbar from "@/components/Shared/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Shared/Footer";

export const metadata = {
  title: "Gang Shalik",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="">
        <Navbar />
        </div>
        <div className="min-h-screen">
        <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
