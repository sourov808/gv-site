import type { Metadata } from "next";
import { Bodoni_Moda, Unbounded } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/layout/PageTransition";
import SiteLoader from "@/components/ui/SiteLoader";

import { LoadingProvider } from "@/lib/LoadingContext";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GV - Global Exploration",
  description: "Discover breathtaking landscapes and adventures around the world with GV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${unbounded.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <LoadingProvider>
          <SiteLoader />
          <PageTransition>
            {children}
          </PageTransition>
        </LoadingProvider>
      </body>
    </html>
  );
}
