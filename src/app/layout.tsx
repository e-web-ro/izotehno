import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { QuickContact } from "@/components/quick-contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://izotehno.ro"),
  title: {
    default: "Izotehno — Izolații cu spumă poliuretanică",
    template: "%s — Izotehno",
  },
  description:
    "Izolații cu spumă poliuretanică: termoizolații mansarde, poduri, acoperișuri, pereți și hale. Consultanță, măsurători și ofertare rapidă.",
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: "Izotehno",
    title: "Izotehno — Izolații cu spumă poliuretanică",
    description:
      "Izolații cu spumă poliuretanică pentru locuințe și industrial: aplicare rapidă, eficiență energetică, etanșare excelentă.",
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
      lang="ro"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <QuickContact />
      </body>
    </html>
  );
}
