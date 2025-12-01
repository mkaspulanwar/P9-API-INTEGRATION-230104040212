// src/services/countries.service.js
// Panggilan ke API Eksternal

// Memuat utilitas HTTP client (misalnya, Axios yang sudah dikonfigurasi)
const httpClient = require('../utils/httpClient');
// Memuat utilitas cache
const cache = require('../utils/cache');

// Fungsi Service: Mengambil semua negara
async function fetchAllCountries() {
  const key = 'countries_all';
  // 1. Cek Cache
  if (cache.has(key)) return cache.get(key);

  // 2. Jika tidak ada di cache, lakukan panggilan API
  const url = 'https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags';
  const { data } = await httpClient.get(url);

  // 3. Simpan hasil ke Cache
  cache.set(key, data);

  // 4. Kembalikan data
  return data;
}

// Fungsi Service: Mengambil negara berdasarkan region
async function fetchByRegion(region) {
  // Buat key cache dengan huruf kecil untuk konsistensi
  const key = `countries_region_${region.toLowerCase()}`;
  // 1. Cek Cache
  if (cache.has(key)) return cache.get(key);

  // 2. Jika tidak ada di cache, lakukan panggilan API
  const url = `https://restcountries.com/v3.1/region/${region}?fields=name,region,capital,population,flags`;
  const { data } = await httpClient.get(url);

  // 3. Simpan hasil ke Cache
  cache.set(key, data);

  // 4. Kembalikan data
  return data;
}

// Fungsi Service: Mengambil negara berdasarkan nama
async function fetchByName(name) {
  // Buat key cache dengan huruf kecil untuk konsistensi
  const key = `countries_name_${name.toLowerCase()}`;
  // 1. Cek Cache
  if (cache.has(key)) return cache.get(key);

  // 2. Jika tidak ada di cache, lakukan panggilan API
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,region,capital,population,flags`;
  const { data } = await httpClient.get(url);

  // 3. Simpan hasil ke Cache
  cache.set(key, data);

  // 4. Kembalikan data
  return data;
}

// Export semua fungsi service
module.exports = {
  fetchAllCountries,
  fetchByRegion,
  fetchByName
};