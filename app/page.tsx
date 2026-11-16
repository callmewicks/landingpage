import Link from "next/link";

const products = [
  { tag: "PC RAKITAN", name: "Nexa Creator", desc: "Ruang kerja kreatif untuk desain, editing, dan multitasking.", price: "Mulai Rp8.500.000", icon: "▦" },
  { tag: "LAPTOP", name: "Laptop Produktif", desc: "Teman kerja dan kuliah yang praktis untuk mobilitas harian.", price: "Mulai Rp6.200.000", icon: "▱" },
  { tag: "KOMPONEN", name: "Upgrade Komputer", desc: "Prosesor, RAM, SSD, kartu grafis, dan komponen pilihan.", price: "Sesuai kebutuhan", icon: "⌘" },
];

const benefits = [
  ["01", "Konsultasi sebelum membeli", "Ceritakan kebutuhan dan anggaran. Tim kami bantu menyusun pilihan yang masuk akal."],
  ["02", "Pilihan produk terkurasi", "Spesifikasi dijelaskan dengan bahasa sederhana agar Anda tahu apa yang dibeli."],
  ["03", "Dukungan setelah transaksi", "Kami siap membantu pertanyaan dasar seputar penggunaan dan peningkatan perangkat."],
];

const articles = [
  { category: "PANDUAN", title: "Cara Memilih Spesifikasi PC Sesuai Aktivitas", excerpt: "Kenali komponen utama dan tentukan prioritas sebelum merakit komputer.", href: "/artikel/memilih-spesifikasi-pc" },
  { category: "EDUKASI", title: "SSD atau HDD: Mana yang Tepat untuk Komputer Anda?", excerpt: "Pahami perbedaan kecepatan, kapasitas, dan kegunaan kedua media penyimpanan.", href: "/artikel/ssd-atau-hdd" },
  { category: "TIPS", title: "Kebiasaan Sederhana agar Laptop Tetap Terawat", excerpt: "Langkah praktis untuk menjaga kebersihan, suhu, dan daya tahan laptop.", href: "/artikel/merawat-laptop" },
];

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  name: "Nexa Komputer",
  url: "https://www.namatokoanda.com",
  description: "Toko komputer, laptop, komponen PC, dan aksesori.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Isi alamat toko Anda",
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    addressCountry: "ID"
  },
  telephone: "+62-812-0000-0000"
};

export default function Home() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }} />
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" href="/" aria-label="Nexa Komputer beranda"><span className="brand-mark">N</span><span>NEXA<span className="brand-light">KOMPUTER</span></span></Link>
          <nav aria-label="Navigasi utama">
            <a href="#produk">Produk</a><a href="#keunggulan">Keunggulan</a><a href="#artikel">Artikel</a>
          </nav>
          <a className="nav-cta" href="https://wa.me/6281200000000" target="_blank" rel="noreferrer">Konsultasi <span>↗</span></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse" /> PARTNER DIGITAL ANDA</p>
            <h1>Teknologi tepat.<br /><em>Potensi tanpa batas.</em></h1>
            <p className="hero-desc">Temukan komputer, laptop, dan komponen yang sesuai dengan cara Anda bekerja, belajar, dan berkarya. Pilih dengan lebih yakin bersama Nexa Komputer.</p>
            <div className="hero-actions"><a className="button button-primary" href="#produk">Jelajahi produk <span>↗</span></a><a className="text-link" href="https://wa.me/6281200000000" target="_blank" rel="noreferrer">Tanya tim kami <span>→</span></a></div>
            <div className="hero-note"><span className="note-line" /> Rekomendasi berdasarkan kebutuhan, bukan sekadar tren.</div>
          </div>
          <div className="hero-art" aria-label="Ilustrasi komputer desktop">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="screen"><div className="screen-top"><i /><i /><i /></div><div className="screen-inner"><div className="screen-kicker">BUILD YOUR<br />NEXT IDEA</div><div className="screen-graphic"><b /><b /><b /><b /><b /></div><div className="screen-caption">PERFORMANCE / PRECISION / POSSIBILITY</div></div></div>
            <div className="monitor-stand" /><div className="monitor-base" />
            <div className="floating-chip"><span>CPU</span><strong>POWER</strong><small>READY TO PERFORM</small></div>
            <div className="art-label">FIG. 01 — YOUR NEXT SETUP</div>
          </div>
        </div>
        <div className="hero-bottom container"><span>01 / 03</span><span className="hero-bottom-line" /><span>COMPUTING MADE CLEAR</span></div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>UNTUK SETIAP KEBUTUHAN</span><strong>WORK<span>✳</span></strong><strong>CREATE<span>✳</span></strong><strong>PLAY<span>✳</span></strong><strong>LEARN<span>✳</span></strong></div></section>

      <section className="section products-section" id="produk">
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow dark">PILIHAN KAMI / 01</p><h2>Perangkat untuk<br /><em>langkah berikutnya.</em></h2></div><p className="section-intro">Mulai dari perangkat siap pakai hingga komponen untuk membangun setup impian. Temukan titik awal yang paling sesuai.</p></div>
          <div className="product-grid">
            {products.map((p, i) => <article className={`product-card product-${i + 1}`} key={p.name}><div className="product-visual"><span className="product-tag">{p.tag}</span><span className="product-icon">{p.icon}</span><span className="product-index">0{i + 1}</span></div><div className="product-info"><h3>{p.name}</h3><p>{p.desc}</p><div className="product-bottom"><strong>{p.price}</strong><a href="https://wa.me/6281200000000" target="_blank" rel="noreferrer" aria-label={`Tanyakan ${p.name}`}>↗</a></div></div></article>)}
          </div>
        </div>
      </section>

      <section className="feature-section" id="keunggulan"><div className="container feature-layout"><div className="feature-heading"><p className="eyebrow">KENAPA NEXA / 02</p><h2>Belanja teknologi<br />tanpa <em>tebak-tebakan.</em></h2><p>Kami percaya perangkat yang baik bukan selalu yang paling mahal, melainkan yang paling pas untuk kebutuhan penggunanya.</p><a className="button button-outline" href="https://wa.me/6281200000000" target="_blank" rel="noreferrer">Diskusikan kebutuhan <span>↗</span></a></div><div className="benefit-list">{benefits.map(([num, title, desc]) => <div className="benefit" key={num}><span className="benefit-num">{num}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="benefit-arrow">↗</span></div>)}</div></div></section>

      <section className="section article-section" id="artikel"><div className="container"><div className="section-heading article-heading"><div><p className="eyebrow dark">WAWASAN DIGITAL / 03</p><h2>Kenali teknologi.<br /><em>Putuskan dengan yakin.</em></h2></div><p className="section-intro">Artikel ringan dan panduan praktis untuk membantu Anda memahami perangkat sebelum menentukan pilihan.</p></div><div className="article-grid">{articles.map((a, i) => <article className="article-card" key={a.title}><div className={`article-art article-art-${i + 1}`}><span>{["PC / GUIDE", "STORAGE / 101", "CARE / TIPS"][i]}</span><b>0{i + 1}</b></div><div className="article-copy"><p className="article-category">{a.category}</p><h3><Link href={a.href}>{a.title}</Link></h3><p>{a.excerpt}</p><Link className="article-link" href={a.href}>Baca artikel <span>→</span></Link></div></article>)}</div></div></section>

      <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow">MULAI DARI KEBUTUHAN ANDA</p><h2>Setup yang tepat<br /><em>dimulai dari obrolan.</em></h2></div><a className="button button-light" href="https://wa.me/6281200000000" target="_blank" rel="noreferrer">Hubungi Nexa Komputer <span>↗</span></a></div></section>

      <footer className="footer"><div className="container footer-top"><Link className="brand footer-brand" href="/"><span className="brand-mark">N</span><span>NEXA<span className="brand-light">KOMPUTER</span></span></Link><p>Teknologi tepat untuk setiap kemungkinan.</p><a href="mailto:halo@namatokoanda.com">halo@namatokoanda.com ↗</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexa Komputer. Hak cipta dilindungi.</span><span>Jakarta, Indonesia</span><a href="#top">
  Kembali ke atas ↑
</a></div></footer>
    </main>
  );
}
