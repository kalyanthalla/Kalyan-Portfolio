import { Noto_Sans, Roboto} from "next/font/google";
import "./globals.css";

const noto_sans = Noto_Sans({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const roboto = Roboto({
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
        className={`${noto_sans.className} ${roboto.className}  antialiased leading-8 
        overflow-x-hidden darkTheme whiteText`}
      >
        {children}
      </body>
    </html>
  );
}