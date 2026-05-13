import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: "Amit Kumar | Semiconductor & Electronics Engineer | %s",
    default: "Amit Kumar | Semiconductor & Electronics Engineer",
  },
  description:
    "M.Sc. Electronics graduate specializing in semiconductor devices, thin film technology, spintronics, VLSI, and embedded systems. Research focus on FeCo/CoFe thin films fabrication and characterization.",
  keywords: ["semiconductor", "electronics", "VLSI", "embedded systems", "thin film", "spintronics", "electronics engineer"],
  authors: [{ name: "Amit Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amitkr26.blogspot.com",
    siteName: "Amit Kumar - Semiconductor Engineer",
    title: "Amit Kumar | Semiconductor & Electronics Engineer",
    description: "M.Sc. Electronics graduate specializing in semiconductor devices, thin film technology, spintronics, VLSI, and embedded systems.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <div id="my-modal" />
      </body>
    </html>
  );
}
