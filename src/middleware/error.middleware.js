// src/middleware/error.middleware.js
// Error handler global

// Middleware error handler harus memiliki 4 parameter (err, req, res, next)
module.exports = (err, req, res, next) => {
  // Menentukan status HTTP:
  // 1. Ambil dari err.status (untuk error kustom)
  // 2. Ambil dari err.response.status (untuk error dari Axios/API eksternal)
  // 3. Default ke 500 (Internal Server Error)
  const status = err.status || err.response?.status || 500;

  // Menentukan detail pesan error:
  // 1. Ambil dari err.detail (untuk detail kustom)
  // 2. Ambil dari err.response.data (untuk body error dari Axios/API eksternal)
  // 3. Ambil dari err.message
  // 4. Default ke 'Unknown error'
  const detail = err.detail || err.response?.data || err.message || 'Unknown error';

  // Mengirim respons error yang terformat ke klien
  res.status(status).json({
    message: 'Error',
    detail: detail
  });
};