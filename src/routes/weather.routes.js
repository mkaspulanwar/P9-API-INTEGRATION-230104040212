// src/routes/weather.routes.js
// Definisi endpoint

const express = require('express');
// Memuat controller untuk cuaca (weather.controller.js)
const controller = require('../controllers/weather.controller');

// Membuat instance router Express
const router = express.Router();

// 1. Endpoint GET / (Ambil cuaca berdasarkan kota)
// Endpoint yang diharapkan: /api/weather?city=Palangkaraya
router.get('/', controller.getByCity);

// Export router agar dapat digunakan di server utama (server.js)
module.exports = router;