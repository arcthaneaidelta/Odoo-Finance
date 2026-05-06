import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Odoo Finance | Portuguese Scale-Up Implementation",
  description: "High-end financial management for the next generation of Portuguese unicorns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans selection:bg-brand-100 selection:text-brand-900">
        {children}
      </body>
    </html>
  );
}
