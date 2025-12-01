// src/middleware/notfound.middleware.js

// Middleware ini dijalankan setelah semua route lainnya,
// sehingga jika kode mencapai bagian ini, artinya endpoint tidak ditemukan.
// Middleware error handler 404 hanya membutuhkan parameter (req, res).
module.exports = (req, res) => {
  // Mengatur status HTTP menjadi 404 (Not Found)
  // dan mengirimkan respons JSON
  res.status(404).json({
    message: 'Endpoint not found'
  });
};