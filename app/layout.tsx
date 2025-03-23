import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slack | Where the future works",
  description:
    "Transform the way you work with one place for everyone and everything you need to get stuff done.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" sticky top-0">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
