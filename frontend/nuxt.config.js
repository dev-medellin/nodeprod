var env = require('./config');

process.env.APP_NAME        = env.config.APP_NAME
process.env.APP_URL         = env.config.APP_URL 
process.env.API_URL         = env.config.API_URL
process.env.FILE_URL        = env.config.FILE_URL
process.env.FILE_BASE_URL   = env.config.FILE_BASE_URL
process.env.APP_FB          = env.config.APP_FB
process.env.APP_HOST        = env.config.APP_HOST



export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  axios: {
      baseUrl : process.env.API_URL,
      credentials: false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: null, 
    extend (config, ctx) {
    }
  },
  publicRuntimeConfig: {
    app_name    : process.env.APP_NAME,
    host        : process.env.APP_HOST,
    app_url     : process.env.APP_URL,
    api_url     : process.env.API_URL,
    // file_url    : process.env.FILE_URL,
    // base_url    : { 
        // base    : process.env.FILE_BASE_URL,
        // quote   : process.env.FILE_BASE_URL+'images/quote/',
        // icons   : process.env.FILE_BASE_URL+'images/icons/',
        // inquiry : process.env.FILE_URL+'attachments/inquiry/',
    // },
    currency    : 'S$',
  }
}
