const axios = require('axios')

module.exports = axios.create({
  baseURL: 'https://tossaas.vercel.app'
})
