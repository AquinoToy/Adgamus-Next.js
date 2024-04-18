import type { Metadata } from "next";
import "./globals.css";
import { Epilogue } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {};
const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={
          `${epilogue.className} ${process.env.NODE_ENV == "development"}`
            ? "debug-screens"
            : ""
        }
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
