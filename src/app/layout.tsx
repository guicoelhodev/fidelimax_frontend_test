import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import QueryProvider from "@/utils/QueryProvider";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Fidelimax test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
