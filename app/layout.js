import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/toastProvider/ToastProvider";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./providers";



const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "TasteAura | Restaurant",
  description: "Premium dining experience",
  icons: {
    icon: "/tasteaura-logo.png",
    shortcut: "/tasteaura-logo.png",
    apple: "/tasteaura-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <ToastProvider />
      </body>
    </html>
  );
}
