import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://amitkr26.github.io"),
  title: {
    template: "%s | Amit Kumar - Semiconductor & Electronics Engineer",
    default: "Amit Kumar | Semiconductor Fabrication & Electronics Research",
  },
  description:
    "Engineering platform of Amit Kumar, specializing in semiconductor thin-film fabrication, spintronics research, and embedded systems design. Transitions into VLSI and RTL verification.",
  keywords: [
    "Amit Kumar",
    "Semiconductor Engineer",
    "Thin Film Technology",
    "Spintronics Research",
    "DC Magnetron Sputtering",
    "XRD Characterization",
    "VSM Analysis",
    "Embedded Systems",
    "VLSI Design",
    "RTL Verification",
    "Verilog",
    "Electronics Engineering Delhi",
  ],
  authors: [{ name: "Amit Kumar" }],
  creator: "Amit Kumar",
  publisher: "Amit Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amitkr26.github.io",
    siteName: "Amit Kumar - Engineering Platform",
    title: "Amit Kumar | Semiconductor & Electronics Engineer",
    description:
      "Research-focused engineering profile with expertise in semiconductor fabrication and material characterization.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
