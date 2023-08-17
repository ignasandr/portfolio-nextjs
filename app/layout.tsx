"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Gupter } from "next/font/google";
import Header from "@/components/header/Header";

const gupter = Gupter({ subsets: ["latin"], weight: ["400", "500", "700"] });

// export const metadata: Metadata = {
//   title: "Ignas Andriuškevičius Portfolio",
//   description:
//     "Portfolio website of an audiovisual artist Ignas Andriuškevičius",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function handleClick() {
    console.log("click");
  }
  // one big button that just says PORTFOLIO or CONTACTS

  return (
    <html lang="en">
      <body className={`${gupter.className}`}>
        {/* <body className="md:h-screen"> */}
        <div className="md:mx-32 lg:mx-48 xl:mx-96">
          <Header active onClick={handleClick} />
          {children}
        </div>
      </body>
    </html>
  );
}
