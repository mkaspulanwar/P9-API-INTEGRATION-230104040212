// src/utils/httpClient.js

// Memuat (require) library Axios
const axios = require('axios');

// Membuat instance kustom dari Axios (httpClient)
const httpClient = axios.create({
  // Menetapkan batas waktu (timeout) untuk setiap permintaan (15000ms = 15 detik)
  timeout: 15000 // 15 detik
});

// Export instance httpClient agar dapat digunakan di service layer
module.exports = httpClient;