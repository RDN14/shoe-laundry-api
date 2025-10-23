# 👟 Shoe Laundry API

Shoe Laundry API adalah layanan backend sederhana untuk mengelola data pelanggan dan status laundry sepatu. Proyek ini dibangun menggunakan Node.js (Express.js) sebagai backend utama, Supabase sebagai database PostgreSQL, dotenv untuk pengelolaan environment variable, dan Vercel sebagai platform deployment. API ini menyediakan fitur CRUD sederhana seperti menambahkan data sepatu baru, menampilkan daftar sepatu, memperbarui status, serta menghapus data. Struktur proyek terdiri dari file utama `index.js` untuk server Express, `package.json` untuk konfigurasi dependensi, file `.env` berisi Supabase URL dan API Key, serta `README.md` untuk dokumentasi.  

Untuk menjalankan proyek di lokal, clone repositori dengan `git clone https://github.com/RDN14/shoe-laundry-api.git`, masuk ke direktori proyek, lalu jalankan `npm install` untuk menginstal dependensi. Buat file `.env` dan isi dengan `SUPABASE_URL` serta `SUPABASE_KEY` dari akun Supabase kamu. Jalankan server menggunakan perintah `node index.js`. Jika berhasil, server akan berjalan di `http://localhost:3000`.  

Endpoint utama meliputi:  
1️⃣ `GET /items` untuk menampilkan semua data sepatu,  
2️⃣ `POST /items` untuk menambahkan data baru dengan body JSON seperti `{"nama_pelanggan": "Ardan", "jenis_sepatu": "Nike Air Force 1", "status": "Proses"}`,  
3️⃣ `PUT /items/:id` untuk memperbarui status sepatu, dan  
4️⃣ `DELETE /items/:id` untuk menghapus data sepatu.  

Struktur tabel di Supabase bernama `items` dengan kolom `id` (integer, primary key), `nama_pelanggan` (text), `jenis_sepatu` (text), `status` (text), `tanggal_masuk` (date), dan `tanggal_selesai` (date/null). Pastikan fitur Row Level Security (RLS) dalam keadaan nonaktif agar API dapat melakukan operasi insert dan select.  

Proyek ini diujikan menggunakan Postman untuk memastikan setiap endpoint berfungsi dengan benar, dan seluruh kode dikembangkan di Visual Studio Code. File `.env` wajib dijaga agar tidak diunggah ke GitHub. Setelah pengujian berhasil, proyek dideploy ke Vercel agar dapat diakses publik melalui URL: [https://shoe-laundry-api.vercel.app](https://shoe-laundry-api.vercel.app).  

🌐 **API Deploy:** [https://shoe-laundry-api.vercel.app](https://shoe-laundry-api.vercel.app)

Dibuat oleh **Muhammad Ardan Fadli (RDN14)** sebagai bagian dari responsi backend API. Teknologi utama: Node.js, Express.js, Supabase, dan Vercel.  