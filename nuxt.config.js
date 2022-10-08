export default {
  head: {
    title: 'quwi-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
    ]
  },

  css: ['./assets/styles/base/index.scss'],

  styleResources: { scss: ['./assets/styles/common/index.scss'] },

  loading: {
    color: '#2668c1'
  },

  plugins: [
    '@/plugins/axios',
    '@/plugins/services',
    { src: "~/plugins/vue-js-modal", mode: "client" },
    { src: "@/plugins/v-click-outside", ssr: false },
  ],

  components: [{ path: '~/components', pathPrefix: false }],

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/device'
  ],

  modules: [
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookies' }]
  ],

  axios: {
    baseURL: process.env.API_URL
  },

  router: {
    prefetchLinks: false
  },

  build: {
    postcss: null
  }
}
