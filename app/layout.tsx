import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.namatokoanda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexa Komputer | Toko Komputer, Laptop & Aksesori",
    template: "%s | Nexa Komputer",
  },
  description:
    "Temukan komputer rakitan, laptop, komponen PC, dan aksesori pilihan di Nexa Komputer. Konsultasi kebutuhan perangkat dan dapatkan rekomendasi yang tepat.",
  applicationName: "Nexa Komputer",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nexa Komputer | Solusi Komputer untuk Kerja, Belajar & Gaming",
    description:
      "Belanja komputer, laptop, komponen, dan aksesori dengan panduan produk yang mudah dipahami.",
    url: siteUrl,
    siteName: "Nexa Komputer",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexa Komputer",
    description: "Temukan perangkat komputer yang sesuai kebutuhan Anda.",
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
