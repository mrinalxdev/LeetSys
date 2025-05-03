import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "System Design Learning Dashboard",
  description: "Track your progress learning system design concepts and patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + `bg-background text-foreground`}>
        <ClientBody />
        {/* {children} */}
      </body>
    </html>
  );
}
