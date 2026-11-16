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
  name: "Slot Gacor",
  url: "https://www.techmediawhich.com/",
  description: "Dalam konteks mesin slot, tidak ada mekanisme teknis yang bernama “gacor”. Yang ada adalah random number generator (RNG), sebuah sistem yang menghasilkan urutan hasil secara acak dan independen",
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
          <Link className="brand" href="/" aria-label="Nexa Komputer beranda"><span className="brand-mark">S</span><span>SLOT<span className="brand-light">GACOR</span></span></Link>
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
            <h1>Slot Gacor dan Deposit via DANA, GoPay, ShopeePay:<br /><em>Anatomi Promosi, Risiko, dan Literasi Digital yang Perlu Dipahami</em></h1>
            <p className="hero-desc">Istilah “slot gacor” telah menjadi salah satu frasa paling agresif dalam lanskap konten digital Indonesia dalam beberapa tahun terakhir. </p>
            <div className="hero-actions"><a className="button button-primary" href="#produk">Daftar Sekarang<span>↗</span></a><a className="text-link" href="https://wa.me/6281200000000" target="_blank" rel="noreferrer">Tanya tim kami <span>→</span></a></div>
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

      <section className="section seo-content-section" id="panduan-komputer">
        <div className="container seo-content-layout">
          <aside className="seo-content-aside">
            <p className="eyebrow dark">PUSAT INFORMASI / 04</p>
            <h2>Panduan memilih komputer yang <em>tepat guna.</em></h2>
            <p className="seo-aside-note">Bekal sederhana sebelum memilih PC, laptop, atau komponen komputer.</p>
            <nav className="seo-toc" aria-label="Daftar isi panduan">
              <a href="#tentukan-kebutuhan">01. Tentukan kebutuhan</a>
              <a href="#kenali-komponen">02. Kenali komponen</a>
              <a href="#sesuaikan-anggaran">03. Sesuaikan anggaran</a>
              <a href="#perawatan-komputer">04. Rawat perangkat</a>
              <a href="#faq-komputer">05. Pertanyaan umum</a>
            </nav>
          </aside>
          <article className="long-form-article">
            <p className="article-lead">Slot Gacor dan Deposit via DANA, GoPay, ShopeePay: Anatomi Promosi, Risiko, dan Literasi Digital yang Perlu Dipahami</p>

            <h3 id="tentukan-kebutuhan">Istilah “slot gacor” telah menjadi salah satu frasa paling agresif dalam lanskap konten digital Indonesia dalam beberapa tahun terakhir. Frasa ini muncul di story media sosial, bio profil, caption unggahan singkat, hingga halaman web yang menyamar sebagai situs berita atau portal hiburan. Bersamaan dengan itu, metode deposit melalui dompet digital seperti DANA, GoPay, dan ShopeePay disebut-sebut sebagai “cara mudah” untuk mulai bermain. Artikel ini tidak bertujuan mempromosikan praktik tersebut. Sebaliknya, artikel ini membedah apa yang sebenarnya terjadi di balik promosi “slot gacor”, mengapa klaim teknisnya tidak berdasar, bagaimana modus deposit via e-wallet dan QRIS bekerja, serta apa yang dapat dilakukan untuk melindungi diri dan keluarga dari kerugian finansial maupun hukum.</p>

            <h3 id="kenali-komponen">1. “Gacor” Bukan Istilah Teknis: Anatomi Sebuah Strategi Pemasaran</h3>
            <p>Kata “gacor” dalam bahasa sehari-hari merujuk pada suara burung yang lantang dan sering berkicau—sebuah metafora yang kemudian dipinjam untuk memberi kesan bahwa suatu permainan “sedang panas” atau “sering memberi kemenangan”. Namun, dalam konteks mesin slot, tidak ada mekanisme teknis yang bernama “gacor”. Yang ada adalah random number generator (RNG), sebuah sistem yang menghasilkan urutan hasil secara acak dan independen.

Penggunaan kata “gacor” adalah trik manipulasi bahasa untuk menyamarkan aktivitas ilegal agar terlihat sah dan dapat dipercaya. Pemasar menggunakan frasa seperti “gacor hari ini” untuk memicu fear of missing out (FOMO)—rasa takut kehilangan momen—agar calon pengguna mengambil keputusan secara impulsif tanpa sempat berpikir kritis. Influencer dan akun media sosial menjadi sasaran utama penyebaran frasa ini, dengan label “game penghasil uang” atau “slot gacor” yang ditempatkan di story atau tautan profil.

Dengan kata lain, “slot gacor” bukan deskripsi tentang kondisi mesin. Ia adalah produk pemasaran yang dirancang untuk menurunkan kewaspadaan dan mendorong tindakan cepat: daftar, deposit, mainkan.</p>

            <h3 id="sesuaikan-anggaran">2. Realitas Teknis: Mengapa Hasil Slot Tidak Dapat “Diprediksi”</h3>
            <p>Mesin slot modern—baik yang beroperasi secara legal di yurisdiksi tertentu maupun yang dipromosikan secara ilegal—mengandalkan RNG untuk menentukan hasil setiap putaran. RNG menerima sebuah nilai awal (seed) sebagai input dan menghasilkan angka “acak” sebagai output melalui algoritma pseudo-random. Pada mesin slot, urutan hasil dirancang agar secara virtual tidak dapat diprediksi, bahkan oleh operator sekalipun, selama nilai seed yang tepat digunakan.

Implikasinya jelas: hasil putaran sebelumnya tidak mempengaruhi putaran berikutnya. Tidak ada “pola” yang bisa dibaca dari kekalahan beruntun, dan tidak ada “waktu yang tepat” untuk bertaruh. Klaim bahwa deposit melalui DANA, GoPay, atau ShopeePay pada waktu tertentu dapat “meningkatkan peluang menang” tidak memiliki dasar dalam cara kerja mesin. Yang sering terjadi justru sebaliknya: platform memanfaatkan fluktuasi dopamin dan variable reward—pola imbalan yang tidak terduga—untuk membuat pengguna terus mencoba, bahkan setelah kerugian berulang.

Pemahaman tentang realitas teknis ini penting bukan untuk “mengalahkan” sistem, melainkan untuk membongkar premis dasar yang digunakan promosi “slot gacor”. Jika hasil tidak dapat diprediksi, maka janji kemenangan yang dikaitkan dengan metode deposit tertentu adalah ilusi pemasaran, bukan peluang nyata.</p>

          

          
          </article>
        </div>
      </section>

      <section className="cta-section"><div className="container cta-inner"><div><p className="eyebrow">MULAI DARI KEBUTUHAN ANDA</p><h2>Setup yang tepat<br /><em>dimulai dari obrolan.</em></h2></div><a className="button button-light" href="https://wa.me/6281200000000" target="_blank" rel="noreferrer">Hubungi Nexa Komputer <span>↗</span></a></div></section>

      <footer className="footer"><div className="container footer-top"><Link className="brand footer-brand" href="/"><span className="brand-mark">N</span><span>NEXA<span className="brand-light">KOMPUTER</span></span></Link><p>Teknologi tepat untuk setiap kemungkinan.</p><a href="mailto:halo@namatokoanda.com">halo@namatokoanda.com ↗</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Nexa Komputer. Hak cipta dilindungi.</span><span>Jakarta, Indonesia</span><a href="#top">Kembali ke atas ↑</a></div></footer>
    </main>
  );
}
