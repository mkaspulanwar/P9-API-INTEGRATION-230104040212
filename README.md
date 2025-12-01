# 🚀 P9-API-Integration-NimAnda: Modular API Gateway (WSE)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

## 📖 Deskripsi Praktikum

[cite_start]Repositori ini adalah hasil dari **Praktikum #9 Web Service Engineering** [cite: 1] [cite_start]yang berfokus pada pembangunan _API Gateway_ modular [cite: 7] [cite_start]menggunakan **Node.js** dan **Express**[cite: 38].

[cite_start]Tujuan proyek ini adalah untuk mengintegrasikan dan mengelola panggilan ke dua API eksternal: **REST Countries** dan **OpenWeatherMap** [cite: 9, 10, 17][cite_start], dengan menerapkan struktur kode yang terorganisir, _caching_ untuk performa [cite: 18][cite_start], _logging_ [cite: 19][cite_start], _error handling_ [cite: 19][cite_start], dan dokumentasi interaktif **Swagger UI**[cite: 20].

## ✨ Fitur Utama

[cite_start]Berdasarkan tujuan praktikum[cite: 15, 45], fitur-fitur yang diimplementasikan meliputi:

* [cite_start]**Arsitektur Modular** [cite: 16][cite_start]: Pemisahan kode yang ketat menjadi `routes`, `controllers`, `services`, `middleware`, `utils`, dan `docs`[cite: 27].
* [cite_start]**API Integration (Countries)**[cite: 28]: Endpoint untuk mengambil semua negara, negara berdasarkan region, dan pencarian berdasarkan nama, dari REST Countries.
* [cite_start]**API Integration (Weather)**[cite: 29]: Endpoint untuk mengambil data cuaca dari OpenWeatherMap menggunakan *API Key* dari variabel lingkungan (`.env`).
* [cite_start]**Caching** [cite: 18][cite_start]: Menggunakan `node-cache` [cite: 40] [cite_start]untuk menyimpan respons API, memastikan panggilan kedua lebih cepat.
* [cite_start]**Global Error Handling** [cite: 19][cite_start]: Middleware terpusat untuk menangani *error* dan mengembalikan respons JSON yang rapi dan konsisten (termasuk *error* 404/500)[cite: 344].
* [cite_start]**Logging** [cite: 19][cite_start]: Menggunakan `morgan` [cite: 41] [cite_start]untuk memonitor setiap *request* yang masuk ke server[cite: 342].
* [cite_start]**Dokumentasi API** [cite: 20][cite_start]: Menyajikan dokumentasi interaktif di `/docs` menggunakan **Swagger UI**[cite: 345].

## 📂 Struktur Proyek

```bash
P9-API-Integration-NimAnda/
├── docs/
│   └── openapi.js         # Spesifikasi OpenAPI/Swagger
├── src/
│   ├── controllers/
│   │   ├── countries.controller.js # Logika Request/Response negara
│   │   └── weather.controller.js   # Logika Request/Response cuaca
│   ├── middleware/
│   │   ├── error.middleware.js     # Global Error Handler (500)
│   │   └── notfound.middleware.js  # Middleware 404 Not Found
│   ├── routes/
│   │   ├── countries.routes.js     # Definisi Endpoint Negara
│   │   └── weather.routes.js       # Definisi Endpoint Cuaca
│   ├── services/
│   │   ├── countries.service.js    # Logic pemanggilan REST Countries (dengan cache)
│   │   └── weather.service.js      # Logic pemanggilan OpenWeatherMap (dengan cache)
│   └── utils/
│       ├── cache.js              # Konfigurasi NodeCache
│       └── httpClient.js         # Konfigurasi Axios/HTTP Client
├── .env                     # Variabel lingkungan (OWM_API_KEY, PORT)
├── package.json
├── README.md
└── server.js                # File utama Express App & inisialisasi
```
