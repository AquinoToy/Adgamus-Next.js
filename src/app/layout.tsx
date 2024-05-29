import type { Metadata } from "next";
import "./globals.css";
import { Epilogue } from "next/font/google";
import SessionProvider from "./Providers";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

import { Yeseva_One } from "next/font/google";

const yesevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yeseva_one",
});
export const metadata: Metadata = {};
//const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={
          `${yesevaOne.className} ${process.env.NODE_ENV == "development"}`
            ? "debug-screens"
            : ""
        }
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <Navbar />
            <div>{children}</div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
