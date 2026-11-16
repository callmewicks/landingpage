import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.techmediawhich.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Slot Gacor dan Deposit via DANA, GoPay, ShopeePay: Anatomi Promosi, Risiko, dan Literasi Digital yang Perlu Dipahami",
    template: "%s | Slot Gacor",
  },
  description:
    "Dalam konteks mesin slot, tidak ada mekanisme teknis yang bernama “gacor”. Yang ada adalah random number generator (RNG), sebuah sistem yang menghasilkan urutan hasil secara acak dan independen",
  applicationName: "Slot Gacor",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Slot Gacor dan Deposit via DANA, GoPay, ShopeePay: Anatomi Promosi, Risiko, dan Literasi Digital yang Perlu Dipahami",
    description:
      "Dalam konteks mesin slot, tidak ada mekanisme teknis yang bernama “gacor”. Yang ada adalah random number generator (RNG), sebuah sistem yang menghasilkan urutan hasil secara acak dan independen",
    url: siteUrl,
    siteName: "Slot Gacor",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slot Gacor",
    description: "Dalam konteks mesin slot, tidak ada mekanisme teknis yang bernama “gacor”. Yang ada adalah random number generator (RNG), sebuah sistem yang menghasilkan urutan hasil secara acak dan independen",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
