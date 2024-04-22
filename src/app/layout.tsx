import type { Metadata } from "next";
import "./globals.css";
import { Epilogue } from "next/font/google";
import SessionProvider from "./Providers";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
