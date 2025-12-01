# Panduan Kontribusi

Terima kasih telah tertarik untuk berkontribusi pada proyek **P9-API-INTEGRATION-230104040212**!

## 💡 Cara Berkontribusi

1.  **Fork** repositori ini ke akun GitHub Anda.
2.  **Clone** repositori yang sudah Anda *fork* ke mesin lokal.
    ```bash
    git clone https://github.com/mkaspulanwar/P9-API-INTEGRATION-230104040212/new/main
    ```
3.  **Buat Branch Baru** untuk fitur atau perbaikan Anda.
    ```bash
    git checkout -b fitur/nama-fitur-baru
    # atau
    git checkout -b perbaikan/bug-fix-deskripsi
    ```
4.  **Lakukan Perubahan** dan **Commit** dengan pesan yang jelas.
    ```bash
    git commit -m "feat: Menambahkan integrasi API baru untuk X"
    ```
5.  **Push** *branch* Anda ke repositori GitHub Anda.
    ```bash
    git push origin fitur/nama-fitur-baru
    ```
6.  **Buka Pull Request (PR)** ke *branch* utama (`main` atau `master`) repositori ini.

## 📌 Pedoman Umum

* Pastikan kode Anda mengikuti **Arsitektur Modular** (`routes`, `controllers`, `services`, dsb.) yang sudah ada.
* Uji perubahan Anda secara lokal sebelum mengajukan PR.
* Jika memungkinkan, perbarui atau tambahkan dokumentasi **Swagger** di `src/docs/openapi.js` jika Anda menambahkan *endpoint* baru.
