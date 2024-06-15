import type { Metadata } from "next";
import "./globals.css";
import { Epilogue } from "next/font/google";
import SessionProvider from "./Providers";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

import { Yeseva_One } from "next/font/google";
import Logo from "@/assets/images/Adgamus_Vaca.png";

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
      <script>
        {`
          document.addEventListener("DOMContentLoaded", function() {
            const toastWrapper = document.querySelector('[data-nextjs-toast-wrapper="true"]');
            if (toastWrapper) {
              toastWrapper.parentNode.removeChild(toastWrapper);
            }
          });
          window.addEventListener("load", function() {
            const toastWrapper = document.querySelector('[data-nextjs-toast-wrapper="true"]');
            if (toastWrapper) {
              toastWrapper.parentNode.removeChild(toastWrapper);
            }
          });
        `}
      </script>
    </html>
  );
}
