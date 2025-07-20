import { Noto_Sans, Poppins } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap", 
});

export const metadata = {
  title: "Kalyan-Portfolio",
  description: "Created using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${notoSans.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}