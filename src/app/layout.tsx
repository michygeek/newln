import type { Metadata } from "next";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.newlinewestafrica.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Newline West Africa Limited | Engineering, Construction & Infrastructure",
    template: "%s | Newline West Africa Limited",
  },
  description:
    "Newline West Africa Limited (RC867472) is a wholly indigenous Nigerian engineering, construction, electrification, water resources, procurement, and project management company delivering infrastructure since 2010.",
  keywords: [
    "Newline West Africa Limited",
    "Nigerian construction company",
    "engineering procurement Nigeria",
    "rural electrification Nigeria",
    "borehole drilling Nigeria",
    "road construction Abuja",
    "EPC contractor Nigeria",
  ],
  authors: [{ name: "Newline West Africa Limited" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Newline West Africa Limited",
    title: "Newline West Africa Limited | Engineering Excellence. Infrastructure That Lasts.",
    description:
      "Delivering construction, electrification, water resources engineering, procurement, and project management solutions across Nigeria since 2010.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newline West Africa Limited",
    description:
      "Engineering, construction, electrification, water resources and project management across Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
