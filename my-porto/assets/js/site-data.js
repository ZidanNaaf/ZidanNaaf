// Sumber data tunggal untuk index.html, projects.html, dan certificates.html.
// Ubah project/sertifikat di sini — otomatis konsisten di semua halaman.

window.SITE_PROJECTS = [
  {
    icon: "solar:cart-large-bold-duotone",
    title: "GreenHill Mart",
    description:
      "Marketplace lokal berbasis Laravel dengan transaksi multi-seller, QRIS, wallet GreenSmartPay, chat buyer-seller, dan PWA untuk operasional marketplace.",
    tags: ["Laravel", "QRIS", "PWA", "Multi-seller"],
    photos: [
      { src: "assets/projects/greenhill-mart/landing-page.png", caption: "Landing page" },
      { src: "assets/projects/greenhill-mart/dashboard-admin.png", caption: "Dashboard admin" },
      { src: "assets/projects/greenhill-mart/mobile-dashboard-admin.png", caption: "Dashboard admin (mobile)" },
    ],
  },
  {
    icon: "solar:clipboard-list-bold-duotone",
    title: "CBT System",
    description:
      "Platform Computer Based Test dengan bank soal premium, pembayaran, voucher, dan pembahasan soal berbasis CodeIgniter 4 — untuk sekolah, bimbel, dan penyelenggara ujian.",
    tags: ["CodeIgniter 4", "Vue.js", "MySQL", "Payment Gateway"],
    photos: [
      { src: "assets/projects/cbt-system/landing-page.png", caption: "Landing page" },
      { src: "assets/projects/cbt-system/dashboard-admin.png", caption: "Dashboard admin" },
      { src: "assets/projects/cbt-system/lock-pelanggaran.png", caption: "Lock pelanggaran saat ujian" },
    ],
  },
  {
    icon: "solar:user-check-rounded-bold-duotone",
    title: "E-Voting Pemilihan Ketua",
    description:
      "Sistem e-voting untuk pemilihan ketua organisasi (Pilketos IPNU/IPPNU) berbasis PHP native dan MySQL — real count suara, admin panel, import peserta via Excel, data suara anonim, serta verifikasi wajah pemilih agar tidak bisa memilih dua kali.",
    tags: ["PHP Native", "MySQL", "Face Verification", "Real Count"],
    photos: [
      { src: "assets/projects/e-voting/landing-page.jpg", caption: "Landing page" },
      { src: "assets/projects/e-voting/login-pilketos.jpg", caption: "Login pemilih" },
      { src: "assets/projects/e-voting/dashboard-admin.png", caption: "Dashboard admin" },
      { src: "assets/projects/e-voting/panel-admin.png", caption: "Panel admin" },
      { src: "assets/projects/e-voting/login-admin.jpg", caption: "Login admin" },
      { src: "assets/projects/e-voting/kelola-siswa.png", caption: "Kelola data siswa" },
      { src: "assets/projects/e-voting/kelola-paslon.png", caption: "Kelola paslon" },
      { src: "assets/projects/e-voting/real-count.jpg", caption: "Real count suara" },
      { src: "assets/projects/e-voting/detail-suara-pemilih.jpg", caption: "Detail suara pemilih" },
    ],
  },
  {
    icon: "solar:book-bold-duotone",
    title: "LMS System",
    description:
      "Aplikasi manajemen pembelajaran untuk bimbel dan les privat — jadwal, materi, tugas, dan absensi, dibangun dengan CodeIgniter 4, Tailwind CSS, Vite, dan Vue.",
    tags: ["CodeIgniter 4", "Vue.js", "Tailwind CSS", "Vite"],
    photos: [
      { src: "assets/projects/lms-system/landing-page-login.png", caption: "Halaman login" },
      { src: "assets/projects/lms-system/dashboard-admin.png", caption: "Dashboard admin" },
    ],
  },
  {
    icon: "solar:letter-bold-duotone",
    title: "Administrasi Surat Organisasi",
    description:
      "Sistem pengelolaan surat masuk dan keluar organisasi — penomoran otomatis, disposisi, dan arsip digital agar tertib administrasi.",
    tags: ["PHP", "MySQL", "Admin Panel"],
    photos: [],
  },
  {
    icon: "solar:wallet-money-bold-duotone",
    title: "Dashboard Organisasi & Kas",
    description:
      "Dashboard kas dan kegiatan organisasi — catat pemasukan, pengeluaran, dan laporan keuangan secara transparan.",
    tags: ["PHP", "MySQL", "Dashboard"],
    photos: [],
  },
  {
    icon: "solar:square-academic-cap-bold-duotone",
    title: "Website Organisasi Sekolah",
    description:
      "Website profil organisasi sekolah — informasi kegiatan, galeri, struktur pengurus, dan kontak resmi.",
    tags: ["Landing Page", "SEO", "Responsive"],
    photos: [],
  },
  {
    icon: "solar:code-square-bold-duotone",
    title: "Website CodeBoost Creative",
    description:
      "Landing page studio CodeBoost Creative — layanan jasa website, sistem custom, dan solusi digital dari Gresik.",
    tags: ["Landing Page", "Branding", "SEO"],
    photos: [],
  },
  {
    icon: "solar:user-id-bold-duotone",
    title: "Website Portofolio Pribadi",
    description:
      "Website portofolio personal — profil, daftar project, tech stack, sertifikat, dan kontak untuk kolaborasi.",
    tags: ["Portfolio", "Vue.js", "Tailwind CSS"],
    photos: [],
  },
  {
    icon: "solar:qr-code-bold-duotone",
    title: "Sistem QR Generator",
    description:
      "Generator kode QR untuk link, teks, dan kebutuhan operasional — cepat, praktis, dan bisa diunduh sebagai gambar.",
    tags: ["Tools", "QR Code", "Web App"],
    photos: [],
  },
  {
    icon: "solar:earth-bold-duotone",
    title: "Monitoring Tanah IoT",
    description:
      "Prototype monitoring kondisi tanah berbasis IoT — sensor terhubung ke dashboard web untuk pantau data secara berkala.",
    tags: ["ESP32", "Sensor", "IoT"],
    photos: [],
  },
  {
    icon: "solar:mixer-bold-duotone",
    title: "Digital Mixer ESP32",
    description:
      "Prototype digital mixer berbasis ESP32 — kontrol audio sederhana yang terhubung dengan perangkat embedded.",
    tags: ["ESP32", "Audio", "Embedded"],
    photos: [],
  },
  {
    icon: "solar:bill-list-bold-duotone",
    title: "Sistem Invoice Online",
    description:
      "Pembuatan dan pengelolaan invoice online — data pelanggan, rincian tagihan, dan status pembayaran yang rapi.",
    tags: ["PHP", "MySQL", "Invoice"],
    photos: [],
  },
  {
    icon: "solar:wifi-router-bold-duotone",
    title: "Sistem Billing ISP",
    description:
      "Sistem penagihan layanan internet — data pelanggan, paket langganan, dan pencatatan pembayaran untuk operasional ISP/RT-RW Net.",
    tags: ["PHP", "MySQL", "Billing"],
    photos: [],
  },
  {
    icon: "solar:link-bold-duotone",
    title: "URL Shortener",
    description:
      "Pemendek tautan sederhana — ubah link panjang jadi pendek agar mudah dibagikan dan dilacak.",
    tags: ["Tools", "Web App", "PHP"],
    photos: [],
  },
  {
    icon: "solar:upload-bold-duotone",
    title: "Sistem Upload Lomba",
    description:
      "Portal pengumpulan karya lomba — peserta mengunggah berkas, panitia memverifikasi dan mengelola data dalam satu dashboard.",
    tags: ["PHP", "MySQL", "File Upload"],
    photos: [],
  },
  {
    icon: "solar:face-scan-square-bold-duotone",
    title: "Sistem Absensi Wajah",
    description:
      "Prototype absensi berbasis pengenalan wajah — pencatatan kehadiran otomatis tanpa kartu atau sidik jari.",
    tags: ["Face Recognition", "Python", "Web Dashboard"],
    photos: [],
  },
];

window.SITE_CERTIFICATES = [
  {
    title: "Juara I - Olimpiade Bahasa Arab (OBA) ke-8 Tahun 2025",
    issuer: "Forum MGMP Bahasa Arab Se-Indonesia",
    date: "5 Juli 2025",
    tags: ["Tingkat Kabupaten/Kota", "Bahasa Arab"],
    file: "assets/certificates/oba-8-2025-juara-1.png",
    pdf: "assets/certificates/oba-8-2025-juara-1.pdf",
    rank: 1,
  },
  {
    title: "Juara II - Olimpiade Bahasa Arab (OBA) ke-7 Tahun 2024",
    issuer: "Forum MGMP Bahasa Arab Se-Indonesia",
    date: "24 Agustus 2024",
    tags: ["Tingkat Kabupaten/Kota", "Bahasa Arab"],
    file: "assets/certificates/oba-7-2024-juara-2.png",
    pdf: "assets/certificates/oba-7-2024-juara-2.pdf",
    rank: 2,
  },
  {
    title: "Juara 3 - Lomba Kompetensi Siswa (LKS) SMK Tingkat Kabupaten Gresik",
    issuer: "Cabang Dinas Pendidikan Wilayah Kabupaten Gresik",
    date: "19 Februari 2025",
    tags: ["IT Network System Administration", "Networking"],
    file: "assets/certificates/lks-smk-2025-juara-3-network-admin.jpg",
    rank: 3,
  },
];

window.SITE_HELPERS = {
  isImageFile(file) {
    return !!file && /\.(png|jpe?g|webp|gif|avif)$/i.test(file);
  },
  rankMeta(rank) {
    const map = {
      1: { label: "Juara 1", classes: "bg-amber-400 text-amber-950" },
      2: { label: "Juara 2", classes: "bg-slate-300 text-slate-900" },
      3: { label: "Juara 3", classes: "bg-orange-400 text-orange-950" },
    };
    return map[rank] || { label: "Penghargaan", classes: "bg-blue-100 text-brand" };
  },
  placeholderImage(project, index) {
    const palettes = [
      ["#2563eb", "#0f766e"],
      ["#7c3aed", "#2563eb"],
      ["#0f766e", "#0891b2"],
    ];
    const [from, to] = palettes[index % palettes.length];
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${from}" />
            <stop offset="100%" stop-color="${to}" />
          </linearGradient>
        </defs>
        <rect width="600" height="600" fill="url(#g)" />
        <text x="50%" y="52%" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="700" fill="rgba(255,255,255,0.92)">${project.title}</text>
        <text x="50%" y="60%" text-anchor="middle" font-family="sans-serif" font-size="16" fill="rgba(255,255,255,0.75)">Foto menyusul</text>
      </svg>
    `;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  },
};
