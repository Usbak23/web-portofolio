import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "e-plantation-service-backend-api",
    title: "E-Plantation Service — RESTful API Backend untuk Sistem Manajemen Perkebunan",
    summary:
      "Backend API berbasis Node.js + TypeScript yang menyediakan 100+ endpoint untuk mengelola seluruh operasional perkebunan, mulai dari data master, panen, perencanaan kerja, keuangan, hingga laporan analitik dengan observability stack penuh.",
    description:
      "E-Plantation Service adalah layer backend dari sistem manajemen perkebunan terintegrasi. Dibangun dengan arsitektur berlapis (Controllers → Services → Repositories → Models), service ini menangani 40+ modul bisnis dengan 80+ entitas database PostgreSQL. Mendukung workflow approval multi-level, generate dokumen PDF/Excel, autentikasi JWT berbasis role, serta dilengkapi tracing, logging terstruktur, dan health check untuk keperluan production observability.",
    thumbnail: "/images/projects/project-management-system/thumbnail.jpg",
    images: [
      "/images/projects/project-management-system/screenshot-1.jpg",
      "/images/projects/project-management-system/screenshot-2.jpg",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "Docker",
      "Gitlab CI",
      "Redis",
      "JWT (jsonwebtoken)",
      "PDFKit / custom A5 template",
      "ExcelJS (import/export)",
      "Winston (structured, daily rotation)",
      "OpenTelemetry + Jaeger",
      "Jest (unit), custom integration tests",
      "Multer + MinIO (S3-compatible)",
      "Metabase JWT embedding",
      "Nginx"
    ],
    category: "API",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/project-management-system",
    startDate: "Juni 2025",
    endDate: "On Going",
    features: [
      "Auth & RBAC — JWT authentication dengan role-based access control per module",
      "Master Data — Organisasi, divisi, blok, karyawan, sub-aktivitat",
      "Operasi Panen — CRUD SPB (Surat Pengantar Buah), tonase kebun, tonase PKS",
      "Perencanaan Kerja — RKT (tahunan), RKB (bulanan), RKH (harian)",
      "Pemeliharaan — Pemupukan, perawatan item, checkup",
      "Keuangan — Budgeting, cost tracking, perpajakan",
      "Approval Matrix — Multi-level approval dengan audit trail dan email notifikasi",
      "Generate Dokumen — PDF A5 SPB dengan branding organisasi, export Excel",
      "Dashboard & Laporan — Analytics BJR, budget vs realisasi, performance report",
      "Strategy Pattern — PerformanceReportService dengan kalkulasi dinamis (BJR, AKP, Yield)",
      "Observability — Request ID tracking, distributed tracing, health check liveness/readiness",
      "Monitoring — Prometheus metrics, Grafana dashboards, Loki log aggregation"

    ],
    challenges: [
      "Kompleksitas domain bisnis — Ratusan aturan kalkulasi perkebunan (BJR, AKP, yield, tonase) yang harus akurat dan konsisten lintas modul",
      "Approval workflow yang fleksibel — Setiap organisasi punya level approval berbeda; harus bisa dikonfigurasi tanpa hardcode",
      "Performance pada query kompleks — Join antar 80+ tabel dengan filter dinamis (organisasi, divisi, blok, periode) berpotensi lambat",
      "PDF generation yang konsisten — Template A5 SPB harus akurat secara layout di berbagai konten, termasuk branding per organisasi",
      "Observability di production — Butuh korelasi antara log, trace, dan metrics dari request yang sama tanpa overhead signifikan",
      "Data migration bertahap — Migrasi schema database ke production tanpa downtime dengan SQL migration files manual"
    ],
    solutions: [
      "Strategy Pattern pada PerformanceReportService — setiap jenis kalkulasi (BJR, Yield, dll) dienkapsulasi sebagai strategi independen yang bisa di-swap",
      "Approval Matrix engine — konfigurasi level approval disimpan di database, service membaca dinamis berdasarkan role & organisasi",
      "Database indexing (common-indexes.sql) + Materialized Views untuk query dashboard berat",
      "Custom PDF mapper (SuratJalanMapper.ts) yang menormalisasi data sebelum render ke template PDFKit",
      "OpenTelemetry + Request ID middleware — setiap request mendapat UUID yang mengalir ke log Winston dan trace Jaeger",
      "SQL migration files versioned (sql/) untuk DDL changes yang bisa di-review sebelum dieksekusi"
    ],
    lessons: [
    "Pisahkan kalkulasi bisnis dari controller — menempatkan logika kalkulasi kompleks di service layer + strategy pattern jauh lebih mudah di-test dan di-maintain",
    "Structured logging dari awal — log tanpa correlation ID membuat debugging production nightmare; lebih baik setup Winston + requestId middleware di hari pertama",
    "TypeORM relations perlu hati-hati — lazy loading vs eager loading di entitas yang saling berelasi bisa menyebabkan N+1 query yang tidak disadari",
    "Migration manual lebih aman untuk data sensitif — auto-migration TypeORM di production terlalu berisiko; SQL files yang di-review manual lebih terkontrol",
    "Approval workflow butuh state machine yang jelas — tanpa mendefinisikan status transitions secara eksplisit, edge case approval/rejection mudah lolos"
    ],
  },
  {
    slug: "e-plantation-web-frontend",
    title: "E-Plantation Web — Dashboard & Manajemen Operasional Perkebunan",
    summary:
      "Aplikasi web frontend dengan 50+ halaman yang dibangun menggunakan Next.js 12 + TypeScript + Material-UI, menyediakan interface lengkap untuk operasional perkebunan mulai dari dashboard analitik, manajemen panen, perencanaan kerja, hingga laporan keuangan dengan state management Redux Toolkit.",
    description:
      "E-Plantation Web adalah antarmuka utama sistem E-Plantation. Dibangun dengan pendekatan component-based menggunakan Next.js sebagai SSR framework, Redux Toolkit untuk global state, dan Material-UI sebagai design system. Mencakup 50+ halaman aplikasi, 200+ komponen UI reusable, dan 30+ Redux module yang masing-masing mengatur state per fitur domain bisnis. Terintegrasi dengan Metabase untuk embedded analytics dashboard dan mendukun operasi file seperti upload, download Excel, serta cetak PDF langsung dari browser.",
    thumbnail: "/images/projects/eplant/eplant-ss-home.png",
    images: [
      "/images/projects/eplant/eplant-ss-dashboard.png",
      "/images/projects/eplant/eplant-ss-dashboard-prod.png",
      "/images/projects/eplant/eplant-ss-cardTph.png",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Redux Toolkit",
      "Redux Thunk",
      "Axios",
      "Formik + Yup validation",
      "React Table v7",
      "MUI Charts",
      "Jest + React Testing Library",
      "Cypress",
      "ESLint + Prettier",
      "GitLab CI",
      "Nginx"
    ],
    category: "Web",
    status: "In Progress",
    featured: true,
    githubUrl: "https://github.com/Usbak23/ecommerce-platform",
    startDate: "Juni 2025",
    endDate: "On Going",
    features: [
      "Dashboard Analitik — Overview KPI perkebunan dengan chart dan summary cards",
      "Manajemen SPB — CRUD Surat Pengantar Buah dengan cetak PDF langsung dari browser",
      "Tonase Kebun & PKS — Input dan tracking data panen per blok",
      "Perencanaan Kerja — Form RKT/RKB/RKH dengan validasi dan approval flow",
      "Approval Workflow UI — Interface untuk submit, approve, reject dokumen dengan history",
      "Pemeliharaan — Pemupukan, checkup item, maintenance tracking",
      "Manajemen Keuangan — Budgeting, cost, perpajakan dengan tabel interaktif",
      "Master Data — CRUD organisasi, divisi, blok, user, role berbasis permission",
      "Laporan & Analytics — Performance report, budget vs realisasi, BJR dashboard via Metabase",
      "Role-based UI — Komponen dan menu yang tampil dinamis sesuai permission user",
      "Export/Import Excel — Bulk upload data dengan template Excel terstandarisasi",
      "Responsive Design — Mobile-first layout dengan breakpoint MUI"
    ],
    challenges: [
      "State management yang kompleks — 30+ Redux module dengan interdependensi antar domain (contoh: filter organisasi memengaruhi data di puluhan halaman berbeda)",
      "Metabase embedding — JWT-signed URL untuk iframe Metabase harus di-generate server-side, sementara frontend Next.js perlu handle refresh token dan resolusi hostname (localhost vs container name)",
      "Permission-based rendering — Ratusan komponen dan menu harus dirender kondisional berdasarkan role + module permission, tanpa performa degradasi.",
      "Form kompleks dengan data relasional — Form RKH misalnya menghubungkan blok, sub-aktivitas, karyawan, dan biaya dalam satu transaksi",
      "Konsistensi tipe data — Puluhan interface TypeScript harus sinkron dengan response API backend yang terus berkembang",
    ],
    solutions: [
     "Feature-based Redux slices — setiap domain punya slice sendiri (rkt/, spb/, gardenTonnage/), dan filter global disimpan di shared state yang di-subscribe per module",
     "Custom metabase.ts util — men-generate JWT-signed URL di sisi backend, kemudian dikirim ke frontend sebagai signed token; hostname-nya di-resolve via environment variable",
     "accesses.ts utility — centralized permission check function yang digunakan di seluruh komponen untuk konsistensi guard logic",
     "Print-specific CSS + isolated print component — PrintSuratJalanButton.tsx menggunakan window.print() dengan stylesheet terpisah yang di-inject hanya saat print mode",
     "Formik + Yup schema — validasi multi-level field dengan schema terpisah per form kompleks; nested field array menggunakan FieldArray",
     "Centralized model types (src/model/) — 50+ TypeScript interface yang menjadi single source of truth untuk semua response shape dari API",
    ],
    lessons: [
      "Redux terlalu granular bisa jadi overhead — 30+ slice untuk project ini cukup manage, tapi untuk feature baru yang kecil, React local state + SWR/React Query lebih ringan",
      "Metabase iframe lebih mudah dari custom chart — untuk analytics kompleks seperti BJR, menggunakan Metabase embedded jauh lebih cepat daripada rebuild chart dari scratch",
      "Design system dari awal menghemat waktu — konsistensi MUI theme + custom component library (src/presentation/components/) membuat development page baru jauh lebih cepat",
      "Type-safety antara FE dan BE perlu dijaga aktif — tanpa contract testing atau shared types, perubahan response API backend sering menyebabkan runtime error di FE yang baru ketahuan saat testing",
      "Next.js SSR + Redux perlu setup hydration yang benar — state yang diinisialisasi di server harus match di client untuk menghindari hydration mismatch error yang susah di-debug",
    ],
  },
  {
    slug: "wedding-invitation-web",
    title: "Wedding Invitation Web — Platform Undangan Pernikahan Digital Berbasis Multi-Tenant",
    summary:
      "Platform SaaS untuk membuat dan mengelola undangan pernikahan digital. User dapat membuat undangan dengan URL unik, memilih template bertema Islami, mengunduh QR code per tamu, mengirim via WhatsApp, dan menerima konfirmasi kehadiran (RSVP) secara real-time.",
    description:
"Wedding Invitation Web adalah platform SaaS untuk membuat undangan pernikahan digital yang elegan dan personal. Setiap undangan memiliki URL publik unik berbasis slug, opening screen animatif bergaya Islami, dan nama tamu yang dipersonalisasi otomatis dari link. Dilengkapi fitur RSVP interaktif, QR code per tamu, kirim undangan via WhatsApp, background music, wedding gift cashless, countdown timer, dan integrasi Google Maps. Tersedia dashboard untuk mengelola undangan, tamu, dan analytics kehadiran, dengan sistem role admin dan user biasa.",
    thumbnail: "/images/projects/wedding-web/thumbnail.jpg",
    images: [
      "/images/projects/wedding-web/screenshot-1.jpg",
      "/images/projects/wedding-web/screenshot-2.jpg",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "NextJS 16",
      "Zustand",
      "XLSX",
      "Lucide React",
      "Axios",
      "react-hot-toast",
      "GitHub Actions",
      "REST API"
    ],
    category: "Web",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/wedding-invititation-web",
    startDate: "April 2026",
    endDate: "Mei 2026",
    features: [
      "Multi-template undangan — 3 tema siap pakai: Emerald (hijau Islami), Midnight Gold (gelap elegan), Sage Garden (earthy natural), masing-masing dengan palet warna dan ornamen yang konsisten",
      "Opening screen animatif — halaman intro bergaya surat fisik dengan ornamen SVG arabesque, kaligrafi Bismillah, nama tamu yang dipersonalisasi, dan animasi buka undangan",
      "URL publik per undangan — setiap undangan diakses via slug unik (/[slug]?to=nama_tamu)",
      "RSVP interaktif — tamu mengisi konfirmasi hadir/tidak/mungkin + jumlah orang + ucapan, dengan deteksi pengiriman duplikat",
      "QR Code per tamu — generate QR code berisi URL undangan yang sudah ter-encode nama tamu, bisa didownload atau langsung dikirim via WhatsApp",
      "Kirim via WhatsApp — template pesan WA yang sudah diformat otomatis dengan nama tamu, nama mempelai, dan link undangan",
      "Wedding gift / cashless — input rekening bank dan e-wallet (BCA, Mandiri, BNI, BRI, BSI, GoPay, OVO, DANA, dll.) dengan fitur salin nomor rekening",
      "Background music — pemutar musik floating dengan auto-play dan animasi equalizer",
      "Countdown timer — hitungan mundur menuju hari H",
      "Integrasi Google Maps — link lokasi akad dan resepsi",
      "Manajemen tamu — CRUD tamu, bulk import via Excel, pagination",
      "Save the date — bagian khusus pengingat tanggal",
      "Adab Walimah — konten edukasi Islam tentang tata krama menghadiri walimah",
      "Dashboard analytics — ringkasan total undangan, total tamu, status RSVP (hadir/tidak/mungkin), total views",
      "Role-based access — user biasa vs admin, admin dapat melihat semua undangan dan kelola seluruh user",
      "Publish/Draft — undangan bisa disimpan sebagai draft atau dipublikasikan",
      "File upload — upload foto mempelai dan cover photo"
    ],
    challenges: [
      "Personalisasi tamu di URL publik — Setiap tamu harus mendapatkan tampilan undangan yang sudah berisi namanya tanpa login, hanya dari query string URL, sekaligus tetap aman dari manipulasi.",
      "Konsistensi tema lintas komponen — Tiga template berbeda (warna, mode gelap/terang, aksen) harus diterapkan secara konsisten ke semua section (opening, konten, RSVP, gift) tanpa duplikasi kode berlebihan.",
      "Auto-play audio di mobile — Browser modern (terutama Safari dan Chrome mobile) memblokir auto-play audio sebelum ada interaksi pengguna, padahal musik didesain untuk langsung berjalan saat undangan dibuka.",
      "QR code + pengiriman WhatsApp — Template pesan WA harus diformat dengan baik (markdown WA, nama tamu, link), dan QR code harus bisa didownload sebagai gambar PNG langsung dari browser.",
      "RSVP duplikat — Mencegah tamu yang sama mengirim RSVP lebih dari sekali tanpa sistem autentikasi, hanya berdasarkan guest_id yang dikirim via URL.",
      "Multi-role dashboard — Satu halaman dashboard yang menampilkan data dan aksi berbeda tergantung apakah user adalah admin atau user biasa, tanpa membuat dua halaman terpisah."
    ],
    solutions: [
      "URL query string ?to= — Nama tamu diencode di URL sebagai query param, dibaca di sisi client oleh hook usePublicInvitation, lalu dipass ke komponen OpeningScreen untuk personalisasi. Guest ID dikirim juga via param untuk RSVP.",
      "Theme object pattern — Setiap template didefinisikan sebagai objek konstanta dengan properti warna lengkap (bg, accent, accentMuted, dll.), lalu diselect berdasarkan prop template. Semua komponen menerima prop theme dan accentColor untuk konsistensi.",
      "Interaksi pertama sebagai trigger — Music player menunggu event canplay lalu memanggil audio.play() setelah user melakukan interaksi pertama (klik tombol Buka Undangan), sehingga auto-play secara teknis terjadi setelah user",
      "qrcode library + Canvas API — QR code dirender ke <canvas> via QRCode.toCanvas(), lalu dikonversi ke data URL untuk tombol download. Template pesan WA dibuat dengan string template literal yang diencode via encodeURIComponent.",
      "Cek RSVP existing di server + UI guard — API mengembalikan data RSVP existing jika guest_id sudah pernah submit. Frontend mendeteksi existingRsvp prop dan langsung menampilkan status konfirmasi tanpa menampilkan form.",
      " Role check via Zustand store — useIsAdmin() selector membaca role dari auth store, lalu komponen DashboardPage merender <AdminOverview> atau <UserOverview> secara kondisional dalam satu file."
    ],
    lessons: [
      "App Router Next.js mengubah cara berpikir tentang data fetching — Pemisahan antara Server Component dan Client Component perlu dipertimbangkan sejak awal. Menaruh semua logika di client (use client) memang lebih mudah di awal, tapi melewatkan optimasi SSR",
      "TanStack Query + Axios adalah kombinasi solid untuk REST API — Caching, refetching, dan loading state menjadi sangat mudah dikelola tanpa boilerplate Redux",
      "Tailwind CSS v4 masih ada breaking change — Konfigurasi PostCSS berbeda dari v3, dan beberapa utility berubah. Penting membaca changelog sebelum upgrade.",
      "Mobile browser quirks tetap relevan — Auto-play audio, clipboard API, dan perilaku scroll di iOS Safari masih membutuhkan workaround khusus yang tidak dibutuhkan di desktop.",
      "Slug sebagai identifier publik lebih user-friendly — Menggunakan slug alih-alih ID database di URL publik membuat link undangan lebih bersih dan mudah dibagikan (/sarah-dan-ali vs /inv/abc123).",
      "Fitur Islami menambah nilai diferensiasi — Konten seperti Bismillah di opening, Adab Walimah, dan integrasi doa nikah bukan sekadar dekorasi — ini menjadi pembeda nyata yang relevan untuk target pasar undangan pernikahan Muslim di Indonesia."
    ],
  },
  {
    slug: "touravel-travel-landing-page",
    title: "Touravel — Travel Landing Page",
    summary:
      "Slicing desain landing page travel dari Figma ke HTML murni yang responsif, dilengkapi animasi scroll, slider destinasi interaktif, dan form pencarian trip.",
    description:
      "Touravel adalah proyek landing page bertema travel yang dibangun dengan cara men-slicing desain dari Figma ke dalam HTML, CSS, dan JavaScript vanilla. Halaman ini menampilkan pengalaman visual yang menarik dengan hero section yang memuat form pencarian destinasi, section layanan, daftar destinasi populer berbasis slider, statistik, testimoni pelanggan, hingga footer. Fokus utama proyek ini adalah ketepatan implementasi desain (pixel-perfect), responsivitas di  berbagai ukuran layar, serta pengalaman pengguna yang halus melalui animasi dan transisi.",
    thumbnail: "/images/projects/touravel-travel-landing-page/thumbnail.jpg",
    images: ["/images/projects/touravel-travel-landing-page/screenshot-1.jpg"],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Swiper.js",
      "AOS (Animate On Scroll)",
      "Boxicons"

    ],
    category: "Web",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/api-gateway-service",
    startDate: "April 2025",
    endDate: "April 2025",
    features: [
      "Hero section dengan headline, subheading, dan form pencarian (lokasi + tanggal)",
      "Navbar responsif dengan mobile menu toggle",
      "Section Top Values yang menampilkan 4 layanan utama (Lot of Choices, Tour Guide, Easy Booking, Luxury Hotel)",
      "Slider destinasi populer menggunakan Swiper.js dengan kontrol prev/next",
      "Section statistik untuk membangun kepercayaan pengguna",
      "Section testimoni pelanggan",
      "Animasi scroll berbasis AOS pada tiap section",
      "Layout fully responsive untuk mobile, tablet, dan desktop",
    ],
    challenges: [
      "Menjaga ketepatan desain (pixel-perfect) — Menerjemahkan detail desain Figma seperti spacing, tipografi, dan warna secara akurat ke CSS tanpa framework UI seperti Bootstrap atau Tailwind.",
      "Responsivitas kompleks — Beberapa section seperti hero dan card produk memiliki layout yang berbeda signifikan antara mobile dan desktop, membutuhkan media query yang cermat.",
      "Integrasi Swiper.js — Menyesuaikan konfigurasi Swiper agar sesuai dengan desain (jumlah slide per view, spacing, tombol navigasi custom) tanpa merusak layout keseluruhan.",
      "Performa animasi — Memastikan animasi AOS berjalan mulus tanpa menyebabkan layout shift atau jank pada perangkat yang lebih lambat.",

    ],
    solutions: [
      "Menggunakan CSS Custom Properties untuk warna dan ukuran yang konsisten, serta membandingkan langsung hasil browser dengan mockup Figma secara iteratif.",
      "Menerapkan pendekatan mobile-first dengan media query bertahap, menggunakan Flexbox dan Grid sesuai kebutuhan tiap section.",
      "Mengkonfigurasi Swiper dengan parameter slidesPerView, spaceBetween, dan breakpoint responsif, lalu menghubungkan tombol navigasi custom ke API Swiper.",
      "Mengatur data-aos hanya pada elemen yang benar-benar membutuhkan animasi dan memanfaatkan properti duration dan once agar animasi tidak diulang dan tetap ringan.",
    ],
    lessons: [
      "Slicing dari Figma melatih ketelitian dalam membaca desain — mulai dari padding, line-height, hingga shadow yang sering diabaikan.",
      "Memahami kapan menggunakan Flexbox vs Grid sangat memengaruhi kemudahan maintainability layout.",
      "Library pihak ketiga seperti Swiper dan AOS sangat powerful, tapi tetap perlu dipahami dokumentasinya agar bisa dikustomisasi sesuai kebutuhan desain.",
      "Proyek static site murni tanpa framework justru memperkuat pemahaman dasar HTML, CSS, dan DOM manipulation JavaScript."
    ],
  },
  {
    slug: "e-plantation-mobile",
    title: "E-Plantation Mobile — Palm Oil Plantation Management App",
    summary:
      "Aplikasi mobile manajemen perkebunan kelapa sawit yang mendukung operasional lapangan secara penuh, termasuk mode offline dengan sinkronisasi otomatis, mencakup fitur panen, perawatan, perencanaan, laporan, dan manajemen request.",
    description:
      "E-Plantation Mobile adalah aplikasi React Native yang dirancang untuk membantu mandor, asisten afdeling, dan manajer kebun dalam mengelola operasional perkebunan kelapa sawit secara efisien. Aplikasi ini mendukung alur kerja mulai dari pencatatan hasil panen (BPBKS, SPB), perencanaan kerja harian (RKH), pemantauan mandor (PMA), hingga manajemen permintaan material dan kas. Dengan kemampuan offline-first, seluruh aktivitas lapangan tetap bisa dicatat meski tanpa koneksi internet, dan data akan disinkronisasi secara otomatis saat koneksi kembali tersedia.",
    thumbnail: "/images/projects/touravel-travel-landing-page/thumbnail.jpg",
    images: ["/images/projects/touravel-travel-landing-page/screenshot-1.jpg"],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Redux Observable (RxJS)",
      "Redux Persist",
      "AsyncStorage",
      "WatermelonDB",
      "React Navigation v7",
      "Firebase",
      "React Native Vision Camera",
      "React Native Maps",
      "Codemagic"

    ],
    category: "Mobile",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/eplant-mobile",
    startDate: "Juni 2025",
    endDate: "April 2026",
    features: [
      "BPBKS & SPB Lokal — pencatatan bukti panen dan surat pengantar buah dengan full offline + auto-sync",
      "Monitoring TPH — monitoring Tempat Pengumpulan Hasil secara read-only (cached)",
      "BKM Harvest & Take Care — buku kas mandor untuk panen dan perawatan",
      "PMA — pemantauan mandor afdeling lengkap dengan form dan preview",
      "Tonnage Garden & PKS — pencatatan dan upload data tonase kebun dan pabrik",
      "RKH Harvest & Take Care — perencanaan rencana kerja harian",
      "AKP & Perpajakan — anggaran kerja perkebunan dan data perpajakan",
      "Realisasi Pemupukan — pencatatan realisasi kegiatan pemupukan",
      "My Request — permintaan material, kas, alat, dan transportasi",
      "Warehouse Management — manajemen gudang dan BPU",
      "Master Data — manajemen organisasi, divisi, blok, TPH, item, raw material, dan lainnya",
      "Field Report & Attendance — laporan lapangan dan absensi karyawan",
      "QR Scanner — scan QR code untuk validasi BPBKS",
      "Dashboard — ringkasan data produksi dan organisasi",
      "Push Notification — notifikasi real-time via Firebase",
      "Approval Flow — alur persetujuan dokumen",

    ],
    challenges: [
      "Sinkronisasi data offline yang kompleks — data yang dibuat saat offline harus tetap konsisten saat di-sync ke server, menghindari duplikasi dan konflik data.",
      "Performa lokal database — jumlah data transaksi harian yang besar (panen, TPH, tonase) membutuhkan query yang cepat meski disimpan secara lokal.",
      "Alur bisnis yang panjang dan kompleks — setiap modul memiliki aturan bisnis yang berbeda (validasi form, status dokumen, hierarki approval) yang harus diimplementasikan secara konsisten.",
      "Multi-role user — satu aplikasi digunakan oleh berbagai level jabatan (mandor, asisten, manajer) dengan akses dan tampilan yang berbeda.",
      "Stabilitas kamera dan file upload — pengambilan foto lapangan dan upload file tonnage harus andal di berbagai jenis perangkat Android."

    ],
    solutions: [
      "Sequential sync dengan concatMap (RxJS) — antrian sinkronisasi diproses secara berurutan untuk menghindari race condition dan memastikan urutan data tetap terjaga.",
      "WatermelonDB sebagai local-first storage — database lokal berbasis SQLite yang dioptimasi untuk React Native, memungkinkan query kompleks dengan performa tinggi.",
      "Epic pattern (Redux Observable) — setiap side effect bisnis dikelola dalam epic yang terisolasi, membuat logika per modul mudah di-maintain dan di-test.",
      "Role-based navigation & screen guard — akses screen dikontrol berdasarkan role dan permission yang disimpan di Redux state.",
      "React Native Vision Camera — library kamera modern yang memberikan kontrol penuh atas pengambilan foto dan kompatibel dengan berbagai versi Android/iOS.",

    ],
    lessons: [
      "Offline-first bukan fitur tambahan, tapi arsitektur — merancang offline support sejak awal jauh lebih mudah daripada menambahkannya belakangan; skema data lokal harus sejalan dengan skema API.",
      "RxJS sangat powerful tapi butuh disiplin — Redux Observable memudahkan penanganan async yang kompleks, tapi tanpa konvensi yang jelas bisa menjadi sulit di-debug.",
      "WatermelonDB membutuhkan perencanaan schema yang matang — migrasi schema di WatermelonDB lebih rigid dibanding ORM biasa; perubahan model di tengah development membutuhkan effort ekstra.",
      "Modularisasi domain lebih penting dari modularisasi UI — memisahkan logic per domain (harvest, takecare, plan) lebih memberikan maintainability dibanding hanya memisahkan per komponen UI.",
      "CI/CD dari awal mempercepat delivery — setup Codemagic sejak tahap awal mengurangi overhead distribusi build ke tim QA dan stakeholder secara signifikan."
    ],
  },
  {
    slug: "projectflow-project-ticket-management-system",
    title: "ProjectFlow — Project & Ticket Management System",
    summary:
      "Sistem manajemen proyek berbasis web yang dibangun dengan Laravel 12 dan Filament 4, memungkinkan tim mengelola proyek, tiket, sprint, dan anggota tim dalam satu platform terpadu dengan akses multi-role.",
    description:
      "ProjectFlow adalah aplikasi manajemen proyek dan tiket fullstack yang dibangun untuk membantu tim engineering dan project manager mengelola pekerjaan secara terstruktur. Sistem ini mendukung alur kerja lengkap dari perencanaan hingga penyelesaian proyek—mulai dari pembuatan proyek, pengelompokan tugas ke dalam epics, pelacakan tiket dengan status kustom, hingga pemantauan progres secara real-time. Dibangun di atas admin panel Filament dengan Livewire untuk interaktivitas tanpa reload, aplikasi ini menyediakan UI yang kaya fitur sekaligus performa tinggi berkat Laravel Octane (FrankenPHP). Sistem ini juga mendukung akses eksternal berbasis token untuk klien, sehingga klien dapat melihat progres proyek tanpa perlu akun internal.",
    thumbnail: "/images/projects/touravel-travel-landing-page/thumbnail.jpg",
    images: ["/images/projects/touravel-travel-landing-page/screenshot-1.jpg"],
    technologies: [
      "PHP 8.2",
      "Laravel 12",
      "Laravel Octane (FrankenPHP)",
      "Livewire 3",
      "Alpine.js",
      "Tailwind CSS",
      "MySQL",
      "SQLite",
      "patie Laravel Permission",
      "Filament Shield",
      "Laravel Socialite",
      "Maatwebsite Excel (XLSX)",
      "Gantt Timeline CSV",
      "Laravel Notifications",
      "Event & Listener system",
      "Docker",
      "Nginx",
      "Laravel Octane"

    ],
    category: "Web",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/eplant-mobile",
    startDate: "Juni 2025",
    endDate: "Januri 2026",
    features: [
      "Manajemen Proyek — Buat proyek dengan color-coding, pin project penting, timeline (start & end date), dan arsip proyek selesai",
      "Sistem Tiket — Tiket dengan status kustom (Kanban-style), prioritas berwarna (Low/Medium/High/Critical), multi-assignee, dan estimasi jam",
      "Epic Management — Kelompokkan tiket ke dalam epics dengan drag-and-drop sort order",
      "Gantt Timeline — Visualisasi jadwal tiket dalam format Gantt chart, dapat diekspor ke Excel",
      "Export & Import Tiket — Import tiket via CSV/XLSX template, export ke Excel",
      "Komentar Tiket — Rich text editor, internal/external comment, email notification",
      "Ticket History — Audit trail otomatis setiap perubahan status tiket",
      "External Access — Shared link berbasis token untuk akses klien tanpa login internal",
      "Role-Based Access Control — Multi-role (admin, member, viewer) dengan permission granular via Filament Shield",
      "Google OAuth — Login menggunakan akun Google",
      "Notifikasi — Real-time notification dalam app + email saat diassign ke proyek/tiket",
      "Project Notes — Catatan internal per proyek (private/public)",
      "Dashboard & Widget — Statistik proyek aktif, tiket overdue, progres tim",
    

    ],
    challenges: [
      "Manajemen permission yang kompleks — Setiap resource (proyek, tiket, komentar) memerlukan kebijakan akses yang berbeda tergantung role pengguna dan kepemilikan data.",
      "External client access tanpa autentikasi penuh — Klien perlu melihat progres proyek tanpa memiliki akun internal, tetapi akses tetap harus aman dan terbatas scope-nya.",
      "Performa query pada relasi bertingkat — Tiket memiliki banyak relasi (project, epic, status, priority, users, comments, history), berpotensi menyebabkan N+1 query pada list view.",
      "Gantt timeline export — Menghasilkan file Excel dengan layout Gantt yang benar memerlukan manipulasi sel, merge, dan styling programatik via PhpSpreadsheet.",
      "Multi-assignee pada tiket — Satu tiket dapat dikerjakan oleh beberapa orang sekaligus, memerlukan relasi many-to-many dengan tracking waktu assignment."

    ],
    solutions: [
      "Filament Shield + Spatie Permission — Menggunakan policy-based authorization yang dikombinasikan dengan Filament Shield untuk generate permission per resource secara otomatis, lalu mengontrolnya dari UI admin.",
      "Token-based external access — Membuat tabel external_access dengan token unik dan expiry date. Livewire component ExternalDashboard menangani sesi klien tanpa menyentuh sistem auth utama.",
      "Eager loading + Performance indexes — Menambahkan migration khusus (add_performance_indexes) untuk index pada kolom yang sering difilter (project_id, status_id, priority_id) dan menggunakan with() secara konsisten di semua query list",
      "Custom Maatwebsite Excel export class — Membuat TicketsTimelineGantt export class yang mengatur posisi kolom, warna cell, dan header timeline secara dinamis sesuai rentang tanggal tiket.",
      "Pivot table ticket_users — Relasi many-to-many dengan pivot yang menyimpan assigned_at dan created_by, memungkinkan tracking siapa yang mengassign dan kapan.",

    ],
    lessons: [
      "Filament 4 sangat fleksibel untuk membangun admin panel kompleks dengan cepat, tetapi customisasi di luar pola standar (seperti Livewire custom page) memerlukan pemahaman mendalam tentang lifecycle component-nya.",
      "Database index adalah investasi wajib sejak awal — query yang terasa cepat di data kecil bisa collapse di production dengan ribuan tiket.",
      "Pisahkan akses internal dan eksternal sejak arsitektur awal — menambahkan external access di tengah pengembangan memaksa refactor pada middleware dan route guard yang sudah ada.",
      "Event-driven notification membuat kode lebih bersih — menggunakan Laravel Events + Listeners alih-alih memanggil notifikasi langsung di controller membuat logika lebih mudah di-maintain dan di-test.",
      "Docker dari awal menghemat banyak waktu — environment yang konsisten antara development dan production menghilangkan masalah \"works on my machine\" terutama saat mengintegrasikan Octane dengan FrankenPHP."
    ],
  },
  {
    slug: "meet-doctor",
    title: "Meet Doctor — Aplikasi Booking Konsultasi Dokter Online",
    summary:
      "Platform digital untuk mempermudah pasien menemukan dokter spesialis, menjadwalkan appointment, dan melakukan pembayaran konsultasi secara transparan dalam satu sistem terintegrasi.",
    description:
      "Meet Doctor adalah aplikasi web berbasis Laravel yang dirancang untuk menjembatani pasien dengan dokter spesialis. Pasien dapat memilih dokter berdasarkan spesialisasi, menentukan jadwal konsultasi, memilih metode konsultasi, dan menyelesaikan pembayaran — semuanya dalam satu platform.Sistem ini dilengkapi dengan manajemen role & permission yang granular, memungkinkan pengaturan hak akses berbeda untuk pasien, dokter, dan admin. Autentikasi dibangun di atas Laravel Jetstream dengan dukungan two-factor authentication (2FA) untuk keamanan ekstra. API juga tersedia menggunakan Laravel Sanctum untuk integrasi dengan aplikasi mobile di masa mendatang.",
    thumbnail: "/images/projects/touravel-travel-landing-page/thumbnail.jpg",
    images: ["/images/projects/touravel-travel-landing-page/screenshot-1.jpg"],
    technologies: [
      "PHP 8.2",
      "Laravel 12",
      "Laravel Jetstream ",
      "Livewire 3",
      "Laravel Sanctum ",
      "Tailwind CSS",
      "MySQL",
      "Vite",

    ],
    category: "Web",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/eplant-mobile",
    startDate: "September 2024",
    endDate: "Januri 2025",
    features: [
      "Registrasi & login dengan verifikasi email dan two-factor authentication (2FA)",
      "Manajemen data dokter beserta foto, spesialisasi, dan tarif konsultasi",
      "Kategori spesialis dokter dengan konfigurasi harga per spesialisasi",
      "Pemilihan tipe konsultasi (tatap muka, online, dll.)",
      "Booking appointment dengan pemilihan tanggal, waktu, dan tingkat urgensi",
      "Sistem transaksi dengan breakdown biaya: fee dokter, fee spesialis, biaya RS, subtotal, PPN, dan total",
      "Role & permission system yang fleksibel untuk multi-tipe pengguna",
      "Detail profil pengguna terpisah dari data autentikasi",
      "API endpoint siap pakai untuk integrasi mobile",

    ],
    challenges: [
      "Kalkulasi biaya yang kompleks — Biaya konsultasi terdiri dari beberapa komponen (dokter, spesialis, RS, PPN) yang harus dihitung secara dinamis dan konsisten.",
      "Manajemen role & permission granular — Sistem harus mendukung hak akses berbeda untuk admin, dokter, dan pasien tanpa mengorbankan keamanan.",
      "Jadwal appointment yang fleksibel — Mengelola slot waktu dokter agar tidak terjadi double booking dan tetap user-friendly.",
      "Keamanan autentikasi — Menyediakan akses yang aman sekaligus mudah digunakan, termasuk 2FA untuk akun dengan privileged access",
      "Multi-assignee pada tiket — Satu tiket dapat dikerjakan oleh beberapa orang sekaligus, memerlukan relasi many-to-many dengan tracking waktu assignment."

    ],
    solutions: [
      "Memisahkan komponen biaya ke kolom tersendiri di tabel transactions sehingga mudah diaudit dan dihitung ulang secara programatik.",
      "Membangun sistem RBAC (Role-Based Access Control) custom dengan tabel role, permission, dan pivot permission_role & role_user yang saling terhubung via foreign key.",
      "Menggunakan kombinasi field date, time, dan status pada tabel appointment untuk mengontrol ketersediaan slot secara efisien.",
      "Memanfaatkan Laravel Jetstream yang sudah menyediakan 2FA siap pakai berbasis Google Authenticator (via pragmarx/google2fa), sehingga implementasi keamanan lebih andal dan teruji.",


    ],
    lessons: [
      "Merancang skema database yang baik sejak awal — memisahkan detail_user dari tabel users utama — membuat sistem lebih mudah dikembangkan tanpa breaking change.",
      "Jetstream + Livewire sangat mempercepat development fitur-fitur yang repetitif seperti form profil dan manajemen sesi, sehingga fokus bisa diarahkan ke business logic.",
      "Soft delete pada semua tabel domain penting (dokter, appointment, transaksi) adalah keputusan yang tepat untuk audit trail dan pemulihan data.",
      "Menyediakan API dari awal (meski belum digunakan penuh) membuka peluang integrasi mobile tanpa perlu refactor besar di kemudian hari.",

    ],
  },
  {
    slug: "aplikasi-penilaian-sitra-hmi",
    title: "Aplikasi Penilaian SITRA HMI — Sistem Manajemen Penilaian Pelatihan Berbasis Web",
    summary:
      "Sistem penilaian berbasis web untuk mendukung kegiatan SITRA (Sistem Instruktur dan Pelatihan) HMI, mencakup manajemen peserta, absensi QR Code, dan penilaian multi-aspek: kognitif, psikomotorik, dan afektif.",
    description:
      " Aplikasi Penilaian SITRA HMI adalah platform manajemen penilaian pelatihan berbasis web yang dibangun untuk mendukung penyelenggaraan kegiatan kaderisasi HMI (Himpunan Mahasiswa Islam), menggantikan proses penilaian manual yang rentan terhadap kesalahan dan tidak efisien. Sistem ini memiliki dua peran pengguna — Admin (Pemandu) yang bertugas mengelola data, mencatat nilai, dan memantau perkembangan peserta; serta Peserta yang dapat memantau nilai dan kehadiran mereka secara mandiri melalui dashboard personal. Penilaian dirancang secara komprehensif mengikuti taksonomi Bloom, mencakup tiga domain: kognitif (tugas, pre-test, mid-test, post-test, FGD, makalah), psikomotorik, dan afektif, dengan sistem absensi digital menggunakan QR Code yang di-scan langsung oleh peserta untuk mencatat kehadiran secara real-time.",
    thumbnail: "/images/projects/sistem-penilaian/thumbnail.jpg",
    images: ["/images/projects/sistem-penilaian/screenshot-1.jpg"],
    technologies: [
      "Node.js",
      "Express.js",
      "EJS (Embedded JavaScript Templates)",
      "MongoDB",
      "Mongoose ODM",
      "Express-Session ",
      "Bcrypt",
      "Cloudinary",
      "bwip-js",
      "jsQR",
      "AdminLTE 3",
      "XLSX",
      "Docker",
      "GitHub Actions",
      "Jest",
      "Super Test"

    ],
    category: "Web",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/eplant-mobile",
    startDate: "Januari 2024",
    endDate: "April 2024",
    features: [
      "Manajemen Peserta — CRUD data peserta dengan barcode unik yang di-generate otomatis per peserta.",
      "Absensi QR Code — Peserta melakukan scan QR Code untuk mencatat kehadiran secara real-time tanpa input manual.",
      "Penilaian Kognitif — Pencatatan nilai tugas, mid-test, post-test, FGD (Focus Group Discussion), dan makalah oleh admin",
      "Penilaian Psikomotorik — Penilaian aspek keterampilan peserta selama pelatihan.",
      "Penilaian Afektif — Penilaian aspek sikap dan perilaku peserta.",
      "Nilai Presensi & Kehadiran — Konversi data absensi menjadi nilai kehadiran secara otomatis.",
      "Rekapitulasi Nilai — Rekap nilai gabungan seluruh aspek, dengan fitur ekspor ke file Excel.",
      "Dashboard Admin — Ringkasan statistik jumlah user, peserta, materi, dan absensi.",
      "Dashboard Peserta — Peserta dapat melihat nilai dan kehadiran pribadi mereka.",
      "Manajemen Materi — Pengelolaan materi pelatihan dengan upload file ke Cloudinary.",
      "Multi-role Auth — Sistem login terpisah untuk admin dan peserta dengan proteksi middleware."

    ],
    challenges: [
      "Absensi digital yang akurat — Memastikan proses scan QR Code tidak bisa dimanipulasi dan data tercatat ke database secara konsisten, termasuk menangani kondisi jaringan yang tidak stabil saat kegiatan lapangan.",
      "Kompleksitas skema penilaian — Penilaian mencakup banyak komponen (6+ aspek kognitif, psikomotorik, afektif) yang harus direkap menjadi satu nilai akhir dengan bobot yang berbeda.",
      "Session-based auth dengan middleware — Middleware auth.js memvalidasi role dari session sebelum mengizinkan akses ke route tertentu, memisahkan akses admin dan peserta secara bersih.",
      "Upload dan penyimpanan file — Mengelola upload makalah peserta ke cloud storage (Cloudinary) dengan validasi tipe file dan ukuran yang tepat.",
      "Ekspor data ke Excel — Menyusun rekapitulasi nilai dari berbagai koleksi MongoDB menjadi satu sheet Excel yang terstruktur dan mudah dibaca.",
      
    ],
    solutions: [
      "QR Code per peserta — Setiap peserta mendapatkan barcode unik yang di-generate dengan bwip-js dan disimpan sebagai file PNG. Scan dilakukan via kamera browser menggunakan jsQR, sehingga tidak memerlukan perangkat khusus.",
      "Modular MVC architecture — Setiap modul penilaian dipisah menjadi folder mandiri (model, controller, router) sehingga perubahan di satu aspek penilaian tidak mempengaruhi modul lain.",
      "Session-based auth dengan middleware — Middleware auth.js memvalidasi role dari session sebelum mengizinkan akses ke route tertentu, memisahkan akses admin dan peserta secara bersih.",
      "Cloudinary integration — File upload menggunakan multer-storage-cloudinary sehingga file langsung tersimpan di cloud tanpa menyentuh storage server.",
      "XLSX export dari agregasi Mongoose — Data dari berbagai koleksi digabungkan di controller sebelum diproses library xlsx untuk menghasilkan file Excel yang siap diunduh.",
    ],
    lessons: [
     " Desain database yang matang di awal sangat krusial — Relasi antar koleksi (peserta, absensi, nilai) yang tidak dirancang dengan baik di awal menyebabkan query yang kompleks saat rekapitulasi. Perencanaan schema MongoDB sejak dini menghemat banyak waktu.",
     "Pisahkan view dan logic secara konsisten — Menggunakan pola MVC secara disiplin membuat penambahan fitur baru (seperti modul penilaian baru) jauh lebih mudah tanpa perlu menyentuh kode yang sudah berjalan.",
     "Middleware adalah kunci keamanan aplikasi multi-role — Mengandalkan hanya pada tampilan UI untuk membatasi akses tidak cukup; validasi role harus selalu dilakukan di sisi server sebelum controller berjalan.",
     "Docker mempercepat onboarding — Containerisasi memastikan aplikasi berjalan konsisten di environment berbeda tanpa masalah \"works on my machine\", sangat berguna saat deployment atau kolaborasi tim.",
     "Testing sejak awal mencegah regresi — Penambahan Jest + Supertest membantu memastikan endpoint kritis (login, absensi) tetap berfungsi setiap kali ada perubahan kode."
    ],
  },
]
