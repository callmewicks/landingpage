import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.namatokoanda.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://www.namatokoanda.com/artikel/memilih-spesifikasi-pc", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.namatokoanda.com/artikel/ssd-atau-hdd", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.namatokoanda.com/artikel/merawat-laptop", changeFrequency: "monthly", priority: 0.7 }
  ];
}
