
---

### Proyek: Game Simulasi Metrologi: Flowmeter

Dokumentasi ini mencakup pengembangan platform pelatihan berbasis web yang dirancang untuk memberikan pemahaman praktis mengenai konsep metrologi, kalibrasi meter air, dan audit instalasi instrumen di lapangan.

---

#### 1. Deskripsi Proyek

Proyek ini dikembangkan untuk memfasilitasi mahasiswa Teknik Mesin atau praktisi instrumentasi dalam memahami dinamika aliran fluida dan standar instalasi alat ukur secara interaktif. Menggunakan teknologi web modern (HTML5, CSS3, JavaScript, dan SVG), platform ini mensimulasikan tantangan nyata yang sering ditemukan dalam proses kalibrasi dan audit metrologi.

#### 2. Struktur Modul Pelatihan

Proyek terdiri dari 4 sesi utama yang dapat diakses melalui `index.html`:

* **Sesi 1: The Reynolds Tuner**
* **Fokus:** Dinamika Fluida & Bilangan Reynolds ($Re$).
* **Tujuan:** Peserta harus mengatur variabel kecepatan aliran dan diameter pipa untuk mencapai kondisi aliran laminer, transisi, atau turbulen sesuai target.


* **Sesi 2: The Tools Matcher**
* **Fokus:** Klasifikasi Instrumen.
* **Tujuan:** Melatih kecepatan identifikasi komponen alat ukur seperti *strainer*, *air eliminator*, dan jenis-jenis flowmeter (elektromagnetik vs mekanik).


* **Sesi 3: The Faraday's Voltage Catcher**
* **Fokus:** Prinsip Hukum Induksi Faraday pada *Electromagnetic Flowmeter* (EMF).
* **Tujuan:** Simulasi penangkapan sinyal tegangan yang dihasilkan oleh fluida konduktif yang melewati medan magnet.


* **Sesi 4: The Installation Auditor**
* **Fokus:** Audit P&ID (Piping & Instrumentation Diagram).
* **Tujuan:** Sesi ini menggunakan **Inline SVG Advance** untuk mensimulasikan instalasi lapangan. Peserta harus menemukan kesalahan teknis seperti *air pockets* di puncak pipa, turbulensi akibat jarak *upstream* yang pendek, atau kesalahan orientasi pemasangan.



#### 3. Teknologi yang Digunakan

* **Frontend:** HTML5, CSS3 (Advanced Animation), JavaScript (ES6+).
* **Grafis:** SVG (Scalable Vector Graphics) untuk diagram instalasi yang presisi dan ringan.
* **Backend & Database:** Google Firebase Real-time Database untuk sistem *Live Leaderboard*.
* **Rendering Matematika:** MathJax untuk menampilkan persamaan fisika (seperti rumus Reynolds dan Faraday) secara rapi.

#### 4. Fitur Utama

* **Real-time Leaderboard:** Menggunakan `leaderboard.html` untuk menampilkan 10 besar skor tertinggi secara langsung dari database Firebase.
* **Visualisasi Aliran:** Animasi CSS yang mensimulasikan pergerakan fluida di dalam pipa berdasarkan input pengguna.
* **Audit Berbasis Logika:** Pada Sesi 4, sistem tidak hanya mendeteksi klik, tetapi memberikan edukasi instan mengenai *mengapa* sebuah instalasi dianggap salah berdasarkan standar metrologi.

#### 5. Cara Penggunaan

1. Pastikan Anda telah mengonfigurasi `firebaseConfig` pada file `sesi*.html` dan `leaderboard.html`.
2. Buka `index.html` pada browser (disarankan Chrome atau Firefox versi terbaru).
3. Pilih modul yang ingin dipelajari.
4. Hasil audit atau simulasi akan secara otomatis terunggah ke *Live Leaderboard* setelah sesi berakhir.

#### 6. Pengembangan Mendatang

* Integrasi Modul 8: Elektromagnetika dan Aktuator (khusus untuk praktikum mahasiswa semester 2).
* Penambahan mode "Multiplayer" untuk kompetisi audit antar kelompok mahasiswa.

---

**Pengembang:** ShakiDC - Jurusan Teknik Mesin Universitas Malikussaleh

**Kontak:** [Sesuai Profil Pengguna]

**OS Environment:** Linux Debian 12 (Development Environment)

---