// src/services/weather.service.js
// Panggilan ke API Eksternal

// Memuat utilitas HTTP client
const httpClient = require('../utils/httpClient');
// Memuat utilitas cache
const cache = require('../utils/cache');

// Definisi Time-To-Live (TTL) untuk cache cuaca (dalam detik, misalnya 300 detik = 5 menit)
const WEATHER_TTL = 300;

// Fungsi Service: Mengambil data cuaca berdasarkan kota
async function fetchWeatherByCity(city, apiKey) {
  // 1. Validasi API Key
  if (!apiKey) {
    // Membuat error kustom jika API Key tidak diset
    const err = new Error('OWM_API_KEY is not set');
    err.status = 400; // Mengatur status HTTP menjadi Bad Request
    throw err;
  }

  // 2. Cek Cache
  const key = `weather_${city.toLowerCase()}`;
  if (cache.has(key)) return cache.get(key);

  // 3. Jika tidak ada di cache, lakukan panggilan API
  // Menggunakan encodeURIComponent untuk memastikan nama kota diparsing dengan benar di URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  const { data } = await httpClient.get(url);

  // 4. Simpan hasil ke Cache dengan TTL yang ditentukan
  cache.set(key, data, WEATHER_TTL);

  // 5. Kembalikan data
  return data;
}

// Export fungsi service
module.exports = {
  fetchWeatherByCity
};