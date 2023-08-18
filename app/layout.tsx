"use client";

import "./globals.css";
import { Gupter } from "next/font/google";
import Header from "@/components/header/Header";

const gupter = Gupter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${gupter.className} h-full`}> */}
      <body className="h-full">
        <div className="flex w-full flex-col justify-center h-full">
          <div className="md:mx-32 lg:mx-48 xl:mx-64 2xl:mx-96">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
