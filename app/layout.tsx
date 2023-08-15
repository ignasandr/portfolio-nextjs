import "./globals.css";
import type { Metadata } from "next";
import { Gupter } from "next/font/google";

const gupter = Gupter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Ignas Andriuškevičius Portfolio",
  description:
    "Portfolio website of an audiovisual artist Ignas Andriuškevičius",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gupter.className}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
