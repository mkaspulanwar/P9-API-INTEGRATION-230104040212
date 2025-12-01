// src/utils/cache.js

// Memuat (require) library node-cache
const NodeCache = require('node-cache');

// TTL default 60 detik, bisa disesuaikan per endpoint
// Inisialisasi instance cache
const cache = new NodeCache({
  // stdTTL: Standard Time-To-Live (Masa berlaku default) untuk setiap kunci (key) dalam detik (60 detik)
  stdTTL: 60,
  // checkperiod: Interval di mana cache akan memeriksa dan menghapus kunci yang sudah kadaluarsa (120 detik)
  checkperiod: 120
});

// Export instance cache agar dapat digunakan di seluruh aplikasi (sebagai singleton)
module.exports = cache;