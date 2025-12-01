// Menggunakan dotenv untuk memuat environment variables dari file .env
require('dotenv').config();

// Memuat (require) dependencies utama
const express = require('express');
const morgan = require('morgan'); // Untuk logging request HTTP
const swaggerUi = require('swagger-ui-express'); // Untuk dokumentasi API

// Memuat routes dan middleware
const countriesRoutes = require('./src/routes/countries.routes');
const weatherRoutes = require('./src/routes/weather.routes');
const notFound = require('./src/middleware/notfound.middleware');
const errorHandler = require('./src/middleware/error.middleware');

// Memuat spesifikasi OpenAPI/Swagger
const openApiSpec = require('./src/docs/openapi');

// Inisialisasi aplikasi Express
const app = express();
// Menentukan PORT, menggunakan environment variable atau default 3000
const PORT = process.env.PORT || 3000;

// --- Middlewares Umum ---

// Middleware untuk mem-parsing body request sebagai JSON
app.use(express.json());
// Middleware untuk logging request (format 'dev' untuk output yang ringkas)
app.use(morgan('dev'));

// --- Definisi Routes (Endpoints) ---

// Memasang routes negara di base path /api/countries
app.use('/api/countries', countriesRoutes);
// Memasang routes cuaca di base path /api/weather
app.use('/api/weather', weatherRoutes);

// Memasang UI dokumentasi Swagger di base path /docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

// --- Error Handlers ---

// Middleware 404 Not Found (harus diletakkan setelah semua routes)
app.use(notFound);
// Middleware Global Error Handler (harus memiliki 4 parameter)
app.use(errorHandler);

// --- Menjalankan Server ---

// Mendengarkan koneksi di port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});