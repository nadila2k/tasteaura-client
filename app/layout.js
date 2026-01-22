import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/toastProvider/ToastProvider";

// Elegant restaurant font pairing
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
