// src/controllers/countries.controller.js
// Validasi ringan dan respons

// Memuat (require) service layer untuk mengakses logic data
const service = require('../services/countries.service');

// Fungsi Controller: Mengambil semua negara
async function getAll(req, res, next) {
  try {
    const data = await service.fetchAllCountries();
    res.json(data);
  } catch (err) {
    // Meneruskan error ke error handler global (middleware)
    next(err);
  }
}

// Fungsi Controller: Mengambil negara berdasarkan region
async function getByRegion(req, res, next) {
  try {
    const { region } = req.params;

    // Validasi ringan: memastikan parameter 'region' ada
    if (!region) return res.status(400).json({ message: 'Region is required' });

    const data = await service.fetchByRegion(region);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

// Fungsi Controller: Mengambil negara berdasarkan nama
async function getByName(req, res, next) {
  try {
    const { name } = req.params;

    // Validasi ringan: memastikan parameter 'name' ada
    if (!name) return res.status(400).json({ message: 'Name is required' });

    const data = await service.fetchByName(name);
    // Jika API eksternal mengembalikan 404, akan masuk error handler global
    res.json(data);
  } catch (err) {
    // Kustomisasi 404 jika perlu (ini berasal dari service layer)
    if (err.response?.status === 404) {
      return res.status(404).json({ message: `Country ${req.params.name} not found` });
    }
    next(err);
  }
}

// Export fungsi-fungsi controller
module.exports = {
  getAll,
  getByRegion,
  getByName,
};