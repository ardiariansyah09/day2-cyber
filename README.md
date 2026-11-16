# SCI / Security Lab

Presentasi Web Application Penetration Testing berbahasa Indonesia dan Inggris.

- 11 modul utama, 55 soal dengan pembahasan.
- 11 praktik browser dengan 34 percobaan dan instruksi per percobaan.
- 11 gambar penjelas SVG, diagram proses, dan contoh request/response.
- 14 studi kasus dari tiga PDF, dengan panduan analisis dan tautan halaman sumber.
- Navigasi keyboard, daftar materi, mode gelap/terang, serta layar penuh.

## Menjalankan

Sajikan folder ini melalui server HTTP statis, misalnya VS Code Live Server, lalu buka index.html melalui alamat server. Membuka file:// tidak didukung karena data materi dimuat melalui fetch. Sertakan folder bahan saat memindahkan atau mengunggah proyek agar tautan PDF tetap tersedia.

## Pemeriksaan

Jalankan `node tools/check-content.cjs`. Hasil audit dan batas cakupan ada dalam docs/CONTENT-AUDIT.md. Pemeriksaan browser tambahan berada di tools/browser-review.cjs; alat tersebut memakai instalasi lokal Playwright dan Chrome pada lingkungan pengembangan.
