import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import MotionProvider from "@/components/ui/MotionProvider";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Click & Code — Digital Marketing & Software Development Company in Lahore",
    template: "%s · Click & Code",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "digital marketing agency Lahore",
    "software development company Lahore",
    "SEO services",
    "AEO GEO",
    "Google Ads management",
    "Meta Ads",
    "custom website development",
    "WordPress development",
    "custom app development",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Click & Code — Digital solutions that turn your ideas into growth",
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Click & Code",
    description: site.description,
  },
};

export const viewport = {
  themeColor: "#0e0d0c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body className="grain min-h-dvh overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-on-accent"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
