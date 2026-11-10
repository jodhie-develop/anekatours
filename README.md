# Aneka Kartika Tours & Travel — Indonesia DMC (React + Vite)

Website aneka-tours (6 halaman) dibangun ulang dari desain Framer (`handsome-writers-147194.framer.app`) jadi project React + Vite + TypeScript.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # hasil di folder dist/
npm run preview    # cek hasil build
npm run typecheck  # opsional, cek TypeScript
```

Deploy ke Vercel: push ke GitHub lalu import project-nya. Vercel otomatis mendeteksi Vite (build `npm run build`, output `dist`).

## Halaman

| URL | Halaman |
|---|---|
| `/` | Home |
| `/destinations` | Destinations |
| `/programs` | Tour Programs (dengan filter group type) |
| `/services` | Services |
| `/about` | About Us |
| `/contact` | Request a Quote (form terisi otomatis dari link `?program=`, `?destination=`, `?group=`) |

Routing pakai router kecil tanpa library (`src/router.tsx`). `vercel.json` sudah menyertakan rewrite supaya URL seperti `/about` tidak 404 saat di-refresh.
Untuk menambah halaman: buat komponen di `src/pages.tsx`, daftarkan di `routes` dalam `src/App.tsx`, dan tambahkan ke `navLinks` di `site.ts`.

## Struktur

```
public/images/            foto destinasi (East Java, Bali, dll.)
src/data/site.ts          ← SEMUA teks, foto, kontak, program, isi tiap halaman. Edit di sini.
src/pages.tsx             komponen tiap halaman
src/App.tsx               daftar route + judul tab
src/router.tsx            router mini (Link, navigate)
src/components/
  Header.tsx              navbar + menu mobile (hamburger)
  Sections.tsx            Hero, Intro, Destinations, Services, Programs, Team, Testimonial
  QuoteForm.tsx           form Request a Quote
  Footer.tsx              footer + tombol WhatsApp melayang
  Reveal.tsx              animasi fade-up saat scroll (pengganti efek "appear" Framer)
src/styles.css            warna, font, layout, responsive
```

Warna dan font ada sebagai variabel di bagian atas `styles.css`:
hijau `#153f35`, krem `#f8f5ed`, sage `#e9eee4`, oranye `#ed9a54`; font Milonga (judul) + Nunito (teks).

## Sebelum publish

- Ganti semua placeholder `[...]` di `src/data/site.ts` (tahun, statistik, alamat, lisensi, email, telepon, WhatsApp, testimoni).
- `company.whatsapp`: isi format internasional tanpa `+` (mis. `6281234567890`) supaya tombol WhatsApp aktif.
- `company.salesEmail`: kalau sudah diisi, form akan membuka aplikasi email pengunjung dengan brief yang sudah terisi.
  Untuk kirim langsung tanpa aplikasi email, sambungkan ke Formspree / EmailJS / API sendiri di `QuoteForm.tsx`.
- `team.photo`: isi path foto tim (mis. `/images/team.jpg`) untuk mengganti kotak placeholder.
- `programs[].itineraryUrl` / `pdfUrl`: isi link itinerary & PDF.

## Catatan

Halaman detail per destinasi (mis. /destinations/bali) dan detail itinerary per program tidak ada di file yang di-download,
jadi kartu destinasi untuk sementara mengarah ke form quote dengan destinasi terisi otomatis, dan link "View itinerary" masih `#` (isi `itineraryUrl` di `site.ts`).
