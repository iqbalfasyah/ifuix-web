# Rencana Implementasi IFUIX dan Platform Edukasi

Tanggal: 18 September 2026. Pemilik produk: Iqbal / IFUIX.

## Keputusan saat ini

Website utama tetap React + Vite dan GitHub Pages. Fokus pembaruan ini adalah katalog Fuira dan KebunPintar, tampilan yang lebih rapi, screenshot, unduhan APK, dan panduan pemasangan. Login, pembayaran otomatis, database, serta PWA edukasi merupakan tahap berikutnya, bukan fitur yang sudah tersedia di ifuix.com.

Proyek website: `D:\ifuix\Web\ifuix-web`.
Proyek KebunPintar yang menjadi sumber: `D:\Personal\Projects\Desktop\KebunPintar`.
Repositori website: `https://github.com/iqbalfasyah/ifuix-web`.
Repositori sumber KebunPintar masih privat; tidak perlu menjadikannya publik untuk menyediakan APK.

## Tahap 0 — Website dan distribusi Android

- Beranda yang memperkenalkan produktivitas dan edukasi, dengan kartu Fuira dan KebunPintar.
- `/products`: katalog bersama, dikelola melalui `src/data/products.ts`.
- `/products/kebunpintar`: fitur aktual, screenshot aplikasi, serta informasi trial dan aktivasi.
- `/download`: pemilihan aplikasi; `/download/fuira`: unduhan Fuira yang sudah ada.
- `/download/kebunpintar`: APK, versi, ukuran, persyaratan Android, SHA-256, tutorial, dan bantuan.
- Screenshot diambil dari `assets/www` dalam APK yang akan didistribusikan, bukan mockup. Screenshot browser menampilkan materi APK; UI native Android untuk aktivasi tidak disimulasikan.
- Sediakan konten Indonesia dan Inggris, navigasi mobile, fokus keyboard, galeri dengan tombol tutup/Escape, dan dukungan preferensi gerakan berkurang.
- Buat HTML entry point untuk rute utama saat build agar tautan langsung di GitHub Pages tidak mengembalikan 404.
- Publikasikan hanya aset pemasaran dan APK. Jangan menyalin `.private`, signing key, kode aktivasi, atau data anak ke website/repo publik.

### Rilis Android yang digunakan

- Nama file: `Kebun-Pintar-3.2.1-Android.apk`.
- Sumber: folder `dist` proyek KebunPintar lokal.
- Ukuran: 10,361,545 byte, ditampilkan sebagai 10.36 MB desimal.
- Package: `id.kebunpintar.android`; versionCode `30201`; versionName `3.2.1`.
- Minimum Android 8.0 / API 26; target API 36.
- SHA-256: `8715292fab0f324bf3ffe84f4bf992408ac004c9809703c8a820bfc44c9583c2`.
- APK rilis berhasil diverifikasi dengan Android apksigner (v2 signature).
- Trial 24 jam dimulai pada pembukaan pertama dan berjalan saat aplikasi ditutup. Setelah trial, aktivasi khusus perangkat melalui WhatsApp resmi 0852 1122 5262. Harga tidak ditentukan di website karena belum ada harga yang dikonfirmasi.
- Materi A–Z, angka 0–20, narasi Indonesia, dan kegiatan latihan tersedia offline selama trial atau setelah aktivasi. Pengaturan orang tua dan kemajuan disimpan lokal.
- Menulis lebih lanjut/mewarnai merupakan arah pengembangan. Jangan mengiklankan semua rencana itu sebagai fitur rilis saat ini; aktivitas menelusuri bentuk sudah ada dalam aplikasi.

APK disimpan di `public/downloads` agar pengunjung tidak memerlukan akun GitHub atau akses ke repositori privat. Untuk pertumbuhan distribusi, pindahkan binary ke repositori rilis publik khusus atau object storage dan perbarui URL di metadata produk. Jangan simpan banyak versi APK lama di repo website.

### Pemeliharaan rilis

1. Verifikasi APK rilis baru: identitas paket, versi, SDK minimum, tanda tangan, ukuran, dan hash.
2. Pertahankan signing key aplikasi agar pembaruan dapat dipasang di atas rilis lama. Build debug dan release dapat memiliki tanda tangan berbeda.
3. Perbarui berkas APK, metadata `kebunRelease`, screenshot bila antarmuka berubah, dan teks versi dalam `scripts/static-routes.mjs`.
4. Jalankan build, lint, pemeriksaan browser, serta unduhan tanpa autentikasi. APK yang diunduh harus mempunyai hash sama dengan sumber.
5. Commit hanya perubahan website yang telah ditinjau, push ke branch deployment, dan tunggu GitHub Actions selesai.

### Pemasangan Android

Orang tua mengunduh APK, membukanya dari Chrome/Files, memberi izin "Instal aplikasi tidak dikenal" hanya pada aplikasi sumber jika diminta, lalu memasang. Tetap aktifkan Play Protect; jika terdeteksi ancaman atau diblokir, hentikan dan hubungi pengembang. Setelah pemasangan, nonaktifkan kembali izin sumber. Menu serta verifikasi tambahan dapat berbeda antarperangkat. Menghapus aplikasi/data dapat menghapus kemajuan lokal.

Referensi: https://support.google.com/pixelphone/answer/7391672

## Tahap 1 — Validasi aplikasi edukasi web

Bangun satu aplikasi PWA dengan modul/paket kegiatan, tidak perlu satu aplikasi terpisah untuk setiap mata pelajaran. Awali huruf dan angka, lalu tambahkan paket menulis, mewarnai, bentuk, atau hitung dasar sesuai hasil uji bersama keluarga.

Struktur domain yang disarankan:

- `ifuix.com`: studio, katalog, dukungan, dan unduhan.
- `learn.ifuix.com`: aplikasi belajar/PWA, termasuk orang tua dan paket kegiatan.
- KebunPintar dapat menjadi produk pertama di platform tersebut; nama final platform diputuskan sebelum peluncuran.

Target awal: beberapa kegiatan yang lengkap dan mudah digunakan. Uji dengan keluarga di ponsel Android kelas menengah/rendah sebelum memperbanyak konten. Instalasi dari browser tidak memerlukan proses penerbitan Play Store. Bila nanti diterbitkan di Play Store, persyaratan toko tetap berlaku.

Kriteria selesai:

- Tautan dapat dibuka langsung di browser tanpa akun untuk kegiatan contoh.
- Pengguna dapat memasang PWA pada perangkat/browser yang mendukungnya; tampilkan petunjuk sesuai platform.
- Satu paket bisa diunduh hingga selesai dengan ukuran dan status yang jelas.
- Setelah mengaktifkan mode pesawat dan menutup/membuka ulang aplikasi, paket tersebut tetap dapat dimainkan.
- Audio, gambar, font, dan navigasi paket tidak memerlukan jaringan.
- Kemajuan bertahan setelah reload/restart dan kegagalan penyimpanan ditangani dengan jelas.
- Browser storage yang dihapus tidak dianggap sebagai backup permanen; jelaskan pengunduhan ulang dan pemulihan data yang sudah tersinkron.

## Tahap 2 — Akun orang tua dan pembelian

Pilihan awal yang menghemat waktu pengembang: Cloudflare Pages untuk frontend, Supabase Auth + Postgres untuk akun/data, serta fungsi backend untuk pembayaran. Backend diperlukan untuk memverifikasi transaksi dan hak akses; rahasia pembayaran tidak boleh berada di JavaScript publik.

- Akun dimiliki orang tua; profil anak cukup menggunakan nama panggilan dan informasi minimum yang diperlukan.
- Contoh tabel: `parent_profiles`, `child_profiles`, `products`, `content_packs`, `orders`, `entitlements`, `progress_events`, `device_registrations`.
- Aktifkan pembatasan akses per pengguna/keluarga (row-level security); uji bahwa keluarga A tidak dapat membaca atau mengubah data keluarga B.
- Backend menghitung harga berdasarkan katalog yang dikelola penerbit. Jangan mempercayai harga, status berbayar, atau masa akses dari browser.
- Integrasikan payment provider yang menerima model bisnis dan negara target. Untuk Indonesia, evaluasi Midtrans dan biaya kategori produk digital/game.
- Verifikasi signature webhook/status transaksi, tangani retry secara idempotent, dan simpan catatan refund/cancellation. Jangan membuka akses hanya karena pengguna kembali ke halaman "berhasil".
- Siapkan email autentikasi produksi melalui penyedia email sesuai kebutuhan dan biaya; jangan menganggap email produksi tanpa batas termasuk paket gratis.
- Tentukan harga, aturan refund, jumlah perangkat, serta akses anak/keluarga sebelum pembayaran publik diaktifkan.

Untuk katalog awal yang kecil, pembelian satu paket dapat lebih sederhana daripada membership. Membership dipertimbangkan saat manfaat berulang jelas, misalnya penambahan kegiatan teratur dan laporan orang tua. Aktivasi Android 3.2.1 yang sudah ada tetap merupakan alur tersendiri sampai migrasi lisensi dirancang.

## Tahap 3 — Offline, sinkronisasi, dan membership

- Service worker + Cache Storage: kerangka aplikasi dan aset paket yang diberi versi.
- IndexedDB: kemajuan lokal, antrean sinkronisasi, status unduhan, dan metadata akses offline.
- Manifest paket: ID, versi, daftar berkas, ukuran, serta hash untuk pemeriksaan integritas.
- Tandai paket siap offline hanya setelah seluruh berkas wajib tersimpan. Tangani penyimpanan penuh/unduhan terputus tanpa menghilangkan versi lama yang masih dapat dipakai.
- Minta persistent storage bila didukung, tetapi jangan menjanjikan browser tidak pernah menghapus data.
- Sinkronkan ketika aplikasi terbuka dan jaringan tersedia; background sync tidak boleh menjadi satu-satunya jalur karena dukungan browser bervariasi.
- Beri event kemajuan ID unik untuk retry idempotent. Tentukan penggabungan kegiatan yang selesai serta konflik pengaturan/profil antarperangkat.
- Untuk membership, usulan awal akses offline maksimum 7 hari sejak verifikasi, tidak melampaui akhir hak akses. Ini keputusan produk yang harus dikonfirmasi, bukan batas teknis tetap.
- Backend dapat menandatangani bukti hak akses dengan expiry; browser memeriksa sebelum membuka paket. Pembatalan tidak dapat diketahui seketika saat offline, dan pemeriksaan di klien tidak memberikan perlindungan antipembajakan sempurna.
- Pembelian paket permanen dapat tetap mengizinkan konten yang telah dibeli selama offline, dengan pemulihan pembelian saat kembali online.

Pemisahan operasi:

| Operasi | Perlu internet |
| --- | --- |
| Kunjungan pertama, login baru, pembayaran | Ya |
| Unduh/perbarui paket | Ya |
| Mainkan paket yang sudah lengkap diunduh | Tidak |
| Simpan kemajuan lokal | Tidak |
| Sinkronisasi/perangkat baru | Ya |
| Verifikasi perpanjangan membership | Ya |

## Hosting dan anggaran

Angka berikut adalah estimasi perencanaan, bukan invoice. Tidak termasuk tenaga pengembangan, komputer/internet yang sudah dimiliki, langganan alat kerja, promosi, pajak, biaya transaksi, dan domain renewal. Kurs perencanaan: USD 1 = Rp18.000, bukan jaminan kurs tagihan.

| Tahap/komponen | Estimasi |
| --- | --- |
| Pembaruan website statis saat ini | Tidak perlu tambahan server/database berbayar |
| Pilot PWA: Cloudflare Pages + Supabase Free | USD 0 dalam kuota |
| Cadangan awal aset/email/keperluan kecil | Rp500.000–Rp1.000.000 opsional |
| Supabase Pro satu project dasar | Mulai USD 25/bulan, sekitar Rp450.000 sebelum pajak/biaya lain |
| Anggaran operasional awal dengan Pro | Rp500.000–Rp650.000/bulan; kelebihan kuota dan transaksi terpisah |
| Cadangan tiga bulan dengan Pro | Rp1.500.000–Rp2.000.000, di luar belanja awal opsional |
| Alternatif Workers + D1 | Gratis dalam kuota; Workers Paid mulai USD 5/bulan, dengan biaya pemakaian tambahan bila melewati kuota |

Supabase Free dapat pause setelah seminggu tidak aktif dan tidak menyertakan automatic backups. Sebelum pelanggan berbayar bergantung pada layanan, siapkan backup/pemulihan dan pertimbangkan Pro. Workers + D1 lebih murah pada tagihan dasar, tetapi pekerjaan autentikasi/otorisasi/operasional lebih besar; biaya waktu pengembang perlu dipertimbangkan.

Midtrans tidak memiliki biaya implementasi/maintenance standar, tetapi memotong biaya per transaksi berhasil. Kategori game/digital bisa berbeda dari tarif umum QRIS/e-wallet. Verifikasi syarat onboarding, kategori bisnis, pajak, serta metode recurring sebelum menentukan harga.

GitHub Pages membatasi penggunaan yang terutama memfasilitasi transaksi komersial atau commercial SaaS. Sebelum membuka checkout/membership publik, pindahkan pengalaman komersial ke hosting yang sesuai seperti Cloudflare. Katalog tidak membutuhkan database hanya karena lokasi hosting berubah. Tinjau pula kesesuaian katalog unduhan dengan ketentuan hosting saat bisnis berkembang.

Sumber harga/teknis (diperiksa dalam pembahasan 18 September 2026):

- https://www.cloudflare.com/products/pages/
- https://supabase.com/pricing
- https://developers.cloudflare.com/workers/platform/pricing/
- https://developers.cloudflare.com/d1/platform/pricing/
- https://midtrans.com/pricing
- https://docs.midtrans.com/docs/how-much-does-midtrans-charge-for-its-payment-service
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://web.dev/learn/pwa/installation
- https://web.dev/learn/pwa/offline-data
- https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
- https://support.google.com/googleplay/android-developer/answer/14151465

## Urutan pengerjaan setelah website

1. Pilih kegiatan awal dan validasi dengan keluarga.
2. Bangun paket offline dan penyimpanan kemajuan lokal.
3. Tambahkan akun orang tua, sinkronisasi, dan pengujian akses antar akun.
4. Tentukan model jual/harga, lalu integrasikan pembayaran sandbox.
5. Uji webhook, pemulihan pembelian, kegagalan jaringan, membership kedaluwarsa, backup, dan perangkat berganti.
6. Pindahkan hosting pengalaman komersial, lalu buka pilot berbayar kecil.
7. Tambahkan kegiatan baru berdasarkan penggunaan dan masukan; pertimbangkan Play Store setelah kebutuhan distribusi jelas.
