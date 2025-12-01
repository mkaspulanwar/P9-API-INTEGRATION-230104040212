// src/docs/openapi.js
// Dokumentasi OpenAPI (Swagger)

// Mengambil port dari environment variable atau menggunakan default 3000
const PORT = process.env.PORT || 3000;

// Export objek konfigurasi OpenAPI
module.exports = {
  // Versi spesifikasi OpenAPI
  openapi: '3.0.0',
  // Informasi dasar API
  info: {
    title: 'Praktikum #9 - API Integration (Modular)',
    version: '1.0.0',
    description: 'Web Service modular untuk mengintegrasikan API eksternal (REST Countries + OWM)',
  },
  // Konfigurasi server
  servers: [
    {
      url: `http://localhost:${PORT}`, // URL dasar API
    },
  ],
  // Definisi semua endpoint (path)
  paths: {
    // Endpoint: GET /api/countries
    '/api/countries': {
      get: {
        summary: 'Ambil semua negara',
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    // Endpoint: GET /api/countries/region/{region}
    '/api/countries/region/{region}': {
      get: {
        summary: 'Ambil negara berdasarkan region',
        parameters: [
          {
            name: 'region',
            in: 'path', // Parameter berada di URL path
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
          '400': {
            description: 'Bad Request',
          },
        },
      },
    },
    // Endpoint: GET /api/countries/name/{name}
    '/api/countries/name/{name}': {
      get: {
        summary: 'Cari negara berdasarkan nama',
        parameters: [
          {
            name: 'name',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
          '404': {
            description: 'Not Found',
          },
        },
      },
    },
    // Endpoint: GET /api/weather
    '/api/weather': {
      get: {
        summary: 'Ambil cuaca kota (butuh OWM_API_KEY di environment)',
        parameters: [
          {
            name: 'city',
            in: 'query', // Parameter berada di query string (misal: ?city=Jakarta)
            required: false, // Parameter opsional (ada nilai default di controller)
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
          },
          '400': {
            description: 'API key tidak diset', // Menjelaskan kemungkinan error jika API key tidak ada
          },
        },
      },
    },
  },
};