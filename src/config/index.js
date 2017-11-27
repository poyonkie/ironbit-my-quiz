export default {
  serverPort: 3000,
  baseUrl: 'http://localhost:3000',
  api: {
    clarovideo: {
      url: 'https://mfwkweb-api.clarovideo.net//services/',
    },
    local: {
      url: '/api/'
    }
  },
  views: {
    engine: '.hbs',
    extension: '.hbs',
    path: './views'
  }
}
