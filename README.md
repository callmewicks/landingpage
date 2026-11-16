# Nexa Komputer — Next.js Landing Page

Landing page toko komputer berbahasa Indonesia, responsive, dengan metadata SEO, Open Graph, canonical, sitemap, robots, dan structured data `ComputerStore`.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Sebelum dipublikasikan

Cari dan ganti semua data contoh berikut:
- `Nexa Komputer` → nama toko Anda.
- `https://www.namatokoanda.com` → domain resmi.
- `6281200000000` → nomor WhatsApp format internasional tanpa `+`.
- `halo@namatokoanda.com` → email toko.
- Alamat pada schema `ComputerStore` → alamat lengkap toko.
- Harga produk, deskripsi, layanan, dan kota → data aktual.

## SEO yang sudah disiapkan

- Bahasa dokumen `id`.
- Metadata title dan description.
- Canonical URL dan Open Graph.
- Structured data schema.org `ComputerStore`.
- `sitemap.xml` dan `robots.txt` melalui route Next.js.
- Heading terstruktur, tautan internal artikel, layout responsif, dan konten berorientasi kebutuhan pencari.

## Artikel

Kartu artikel pada halaman depan sudah disiapkan. Buat route artikel sesuai URL pada `app/page.tsx` (misalnya `app/artikel/memilih-spesifikasi-pc/page.tsx`) sebelum mengaktifkan tautannya. Naskah awal yang orisinal dapat dikembangkan dari outline berikut:

1. Memilih spesifikasi PC: mulai dari aplikasi utama, kebutuhan prosesor, RAM, grafis, penyimpanan, lalu anggaran.
2. SSD atau HDD: bandingkan kecepatan, kapasitas, biaya per GB, dan skenario penggunaan.
3. Merawat laptop: kebersihan ventilasi, suhu, baterai, pembaruan perangkat lunak, dan kebiasaan membawa perangkat.

Konten contoh dibuat baru untuk starter ini, bukan salinan artikel pihak lain. Tetap lakukan pemeriksaan editorial dan pengecekan kemiripan sebelum publikasi; tidak ada cara yang dapat menjamin skor plagiarisme 0% untuk semua alat.

## Catatan

Harga dan klaim layanan pada template adalah placeholder. Sesuaikan dengan katalog, stok, garansi, dan kebijakan toko sebenarnya. Font Google dimuat dari stylesheet eksternal; hapus impor tersebut jika ingin seluruh aset font di-host sendiri.
