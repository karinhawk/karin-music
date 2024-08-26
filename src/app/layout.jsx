import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';

const roboto = Roboto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Karin Hawksworth | Composer",
  description: "Karin Hawksworth music website portfolio composer composition musician london birmingham cello cellist contemporary portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className={roboto.className}>
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      <Analytics mode="production"/>
      </body>
    </html>
  );
}
