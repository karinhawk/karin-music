import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karin Hawksworth | Composer",
  description: "Karin Hawksworth music website portfolio composer composition musician london birmingham cello cellist contemporary portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
