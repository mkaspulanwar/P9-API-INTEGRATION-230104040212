// src/controllers/weather.controller.js
// Validasi ringan dan respons

// Memuat (require) fungsi dari service layer cuaca
const { fetchWeatherByCity } = require('../services/weather.service');

// Fungsi Controller: Mengambil data cuaca berdasarkan kota
async function getByCity(req, res, next) {
  try {
    // Mengambil parameter 'city' dari query string (misal: ?city=PalangkaRaya)
    // Jika 'city' tidak ada, gunakan default 'Palangkaraya'
    const city = req.query.city || 'Palangkaraya';

    // Mengambil API key dari environment variables
    const apiKey = process.env.OWM_API_KEY;

    // Memanggil service untuk mengambil data cuaca
    const data = await fetchWeatherByCity(city, apiKey);

    // Mengirimkan data sebagai respons JSON
    res.json(data);
  } catch (err) {
    // Meneruskan error ke error handler global (middleware)
    next(err);
  }
}

// Export fungsi controller
module.exports = { getByCity };