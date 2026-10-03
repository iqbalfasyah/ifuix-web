import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, HeartHandshake, Lock, EyeOff, Sparkles, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const KebunPrivacy = () => {
  return (
    <>
      <div className="pt-20 md:pt-24 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <Link
            to="/products/kebunpintar"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Kembali ke Kebun Pintar
          </Link>

          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 md:p-10 border border-emerald-100 shadow-sm mb-10"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
              <img
                src="/images/kebunpintar/icon.png"
                alt="Kebun Pintar Icon"
                className="w-20 h-20 rounded-2xl shadow-md border border-emerald-50 object-cover"
              />
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
                  <ShieldCheck size={14} />
                  Program Dirancang untuk Keluarga &amp; Anak
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Kebijakan Privasi Kebun Pintar
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Nama Paket: <code className="text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded">com.ifuix.kebunpintar</code> · Pengembang: <strong>IFUIX</strong>
                </p>
                <p className="text-xs text-gray-400 mt-1">Terakhir diperbarui: 21 September 2026</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Di <strong>IFUIX</strong>, kami memprioritaskan keamanan dan kenyamanan anak-anak serta ketenangan pikiran orang tua. Aplikasi edukasi <strong>Kebun Pintar: Huruf &amp; Angka</strong> dirancang khusus untuk anak usia dini (usia 3–8 tahun) dengan filosofi <em>offline-first</em>, tanpa iklan, dan tanpa pengumpulan data pribadi apa pun.
            </p>
          </motion.div>

          {/* Key Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5">
              <EyeOff className="text-emerald-600 mb-3" size={24} />
              <h3 className="font-bold text-gray-900 text-sm mb-1">0% Pengumpulan Data</h3>
              <p className="text-xs text-gray-600">Tidak melacak nama, email, identitas perangkat, mikrofon, atau lokasi Anda.</p>
            </div>
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5">
              <Sparkles className="text-emerald-600 mb-3" size={24} />
              <h3 className="font-bold text-gray-900 text-sm mb-1">100% Bebas Iklan</h3>
              <p className="text-xs text-gray-600">Bebas dari iklan pihak ketiga, banner pengganggu, atau pelacak perilaku anak.</p>
            </div>
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5">
              <Lock className="text-emerald-600 mb-3" size={24} />
              <h3 className="font-bold text-gray-900 text-sm mb-1">Penyimpanan Lokal</h3>
              <p className="text-xs text-gray-600">Bintang dan progres belajar tersimpan secara privat di memori perangkat Anda sendiri.</p>
            </div>
          </div>

          {/* Main Content (Indonesian) */}
          <div className="space-y-10 text-gray-700 leading-relaxed bg-white rounded-3xl p-6 md:p-12 border border-gray-100 shadow-sm">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <HeartHandshake className="text-emerald-600" size={22} />
                1. Kepatuhan Privasi Anak (COPPA &amp; Kebijakan Keluarga Google Play)
              </h2>
              <p>
                Aplikasi <em>Kebun Pintar: Huruf &amp; Angka</em> sepenuhnya mematuhi ketentuan <strong>Children’s Online Privacy Protection Act (COPPA)</strong> dan <strong>Kebijakan Keluarga Google Play (Designed for Families)</strong>. Kami tidak mengumpulkan, meminta, membagikan, atau memperjualbelikan informasi identitas pribadi apa pun dari anak-anak di bawah umur.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                2. Jenis Data yang Digunakan dan Disimpan
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>Kemajuan Belajar:</strong> Poin bintang, stiker hadiah, dan progres huruf/angka disimpan secara lokal di ruang penyimpanan internal aplikasi (<em>local storage sandbox</em>) di perangkat pengguna. Data ini tidak pernah diunggah ke server eksternal.
                </li>
                <li>
                  <strong>Status Pembelian:</strong> Jika orang tua memilih untuk membuka akses penuh melalui Google Play, status tanda terima pembelian diverifikasi secara aman melalui layanan resmi <strong>Google Play In-App Billing</strong>. Kami tidak menerima atau menyimpan nomor kartu kredit atau detail pembayaran pengguna.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                3. Kebijakan Bebas Iklan &amp; Tanpa SDK Pihak Ketiga
              </h2>
              <p>
                Kebun Pintar didedikasikan untuk lingkungan belajar yang bersih dan aman. Aplikasi ini <strong>tidak menyertakan jaringan iklan pihak ketiga</strong> (seperti Google AdMob, Unity Ads, atau sejenisnya) dan tidak memiliki SDK pelacakan perilaku (<em>behavioral analytics</em>). Anak Anda dapat belajar tanpa terdistraksi dan tanpa risiko mengklik iklan yang tidak pantas.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                4. Pembelian Dalam Aplikasi (In-App Purchases)
              </h2>
              <p>
                Kebun Pintar menyediakan konten gratis (Huruf A–F, Angka 0–4, dan permainan edukasi) tanpa batas waktu. Orang tua dapat memilih untuk membeli langganan atau lisensi permanen untuk membuka kurikulum lengkap (A–Z dan 0–20).
              </p>
              <p className="mt-2">
                Seluruh proses transaksi dilakukan melalui Google Play Store yang dilindungi oleh sistem otentikasi biometrik / kata sandi Google milik orang tua, sesuai dengan standar perlindungan konsumen Google Play.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                5. Izin Perangkat (Permissions)
              </h2>
              <p>
                Aplikasi ini tidak meminta izin-izin sensitif atau berbahaya, seperti:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                <li>Tidak ada akses Kamera atau Mikrofon.</li>
                <li>Tidak ada akses Lokasi (GPS / Jaringan).</li>
                <li>Tidak ada akses Buku Alamat / Kontak telepon.</li>
                <li>Tidak ada akses SMS atau Panggilan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                6. Hak Orang Tua &amp; Penghapusan Data
              </h2>
              <p>
                Karena seluruh progres belajar hanya disimpan secara lokal di HP Anda, Anda memiliki kendali penuh atas data tersebut kapan saja:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
                <li>Untuk menghapus seluruh riwayat belajar, Anda cukup memilih <em>Hapus Data Aplikasi</em> melalui menu Pengaturan Android, atau menghapus (<em>uninstall</em>) aplikasi Kebun Pintar.</li>
                <li>Orang tua dapat menghubungi kami setiap saat jika memiliki pertanyaan tentang privasi anak Anda.</li>
              </ul>
            </section>

            <section className="border-t border-gray-100 pt-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Mail className="text-emerald-600" size={20} />
                7. Kontak Pengembang (Contact Us)
              </h2>
              <p>
                Jika Anda memiliki pertanyaan, saran, atau masukan mengenai kebijakan privasi ini, silakan hubungi tim IFUIX melalui:
              </p>
              <div className="mt-3 bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm space-y-1">
                <p><strong>Pengembang:</strong> IFUIX Studio</p>
                <p><strong>Email Kontak:</strong> <a href="mailto:hello@ifuix.com" className="text-emerald-600 hover:underline">hello@ifuix.com</a> / <a href="mailto:support@ifuix.com" className="text-emerald-600 hover:underline">support@ifuix.com</a></p>
                <p><strong>Situs Web Resmi:</strong> <a href="https://ifuix.com" className="text-emerald-600 hover:underline">https://ifuix.com</a></p>
              </div>
            </section>

            {/* English Summary for Google Play Reviewers */}
            <section className="border-t border-gray-100 pt-8 mt-10">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm text-slate-700">
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  English Summary (For Google Play Policy Compliance &amp; Review)
                </h3>
                <p className="mb-2">
                  <strong>Kebun Pintar: Huruf &amp; Angka</strong> (Package: <code>com.ifuix.kebunpintar</code>), developed by <strong>IFUIX</strong>, is an offline educational application designed for young children (ages 3–8).
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>Zero Personal Data Collection:</strong> We do not collect, transmit, store, or share any Personally Identifiable Information (PII) from children or parents.</li>
                  <li><strong>Designed for Families Compliance:</strong> Compliant with COPPA and Google Play Designed for Families policies.</li>
                  <li><strong>Ad-Free:</strong> Contains no third-party advertisements or tracking SDKs.</li>
                  <li><strong>In-App Purchases:</strong> Content upgrades are processed securely through Google Play In-App Billing. Financial data is never handled by IFUIX.</li>
                  <li><strong>Permissions:</strong> Requires no sensitive device permissions (no camera, microphone, GPS, or contacts).</li>
                  <li><strong>Contact:</strong> For privacy inquiries, contact <a href="mailto:hello@ifuix.com" className="text-emerald-600 underline">hello@ifuix.com</a>.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
