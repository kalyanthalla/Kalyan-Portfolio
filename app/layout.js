import { Noto_Sans, Poppins} from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const poppins = Poppins({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Kalyan-Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${noto_sans.className} ${poppins.className} antialiased leading-8 
        overflow-x-hidden darkTheme whiteText`}
      >
        {children}
      </body>
    </html>
  );
}