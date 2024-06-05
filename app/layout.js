import {  Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata = {
  title: "Mali Czarodzieje | Fundacja pomagająca dzieciom",
  description: "Fundacja pomagająca dzieciom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl-pl">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
