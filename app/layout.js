import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";

import "./globals.css";

//const inter = Inter({ subsets: ["latin"] }); //régi betutipus
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Türr100",
  description: "100 éves lett a Türr!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
