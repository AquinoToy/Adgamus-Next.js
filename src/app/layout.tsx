import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}