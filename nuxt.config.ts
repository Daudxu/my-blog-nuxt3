// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite'

export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'element-plus/dist/index.css',
    '@/assets/css/global.css'
  ],
  build: {
    transpile: ['element-plus/es'],
  },
  vite: {
      plugins: [
          ElementPlus()
      ],
  },
  ssr: true,
  pages: true,
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  piniaPersistedstate: {
      cookieOptions: {
          sameSite: 'strict',
          maxAge: 86400 * 90
      }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: {
    enabled: true,
  }
  // app: {
  //   head: {
  //     viewport: 'width=device-width,initial-scale=1',
  //     link: [
  //       { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
  //       { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
  //       { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  //     ],
  //     meta: [
  //       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //       { name: 'description', content: "appDescription" },
  //       { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
  //     ],
  //   },
  // }
})