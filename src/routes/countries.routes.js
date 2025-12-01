// src/routes/countries.routes.js
// Definisi endpoint

const express = require('express');
// Memuat controller untuk negara (countries.controller.js)
const controller = require('../controllers/countries.controller');

// Membuat instance router Express
const router = express.Router();

// 1. Endpoint GET / (Ambil semua negara)
router.get('/', controller.getAll);

// 2. Endpoint GET /region/:region (Ambil negara berdasarkan region)
// :region adalah parameter dinamis (path parameter)
router.get('/region/:region', controller.getByRegion);

// 3. Endpoint GET /name/:name (Cari negara berdasarkan nama)
// :name adalah parameter dinamis (path parameter)
router.get('/name/:name', controller.getByName);

// Export router agar dapat digunakan di server utama (server.js)
module.exports = router;