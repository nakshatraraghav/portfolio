import type { Metadata } from "next";
import { GeistSans as font } from "geist/font/sans";
import { cx } from "@/lib/utils";

import { Navbar } from "@/components/navbar";
import Particles from "@/components/particles";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Nakshatra Raghav",
  description: "portfolio site for nakshatra raghav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
      )}
    >
      <body className={cx(font.className, "max-w-[950px] flex flex-col mx-auto my-16")}>
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <Navbar />
        <main className="mt-12 mx-8">{children}</main>
      </body>
    </html>
  );
}
