// https://nuxt.com/docs/api/configuration/nuxt-config
// import ElementPlus from 'unplugin-element-plus/vite'

export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/index.css',
    'element-plus/theme-chalk/el-menu-item.css',
    'vue3-emoji-picker/css',
    '@/assets/css/global.css'
  ],
  ssr: true,
  pages: true,
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
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
  plugins: [ { src:'@/plugins/baidu',mode:'client' }],
  devtools: {
    enabled: true,
  },
  buildModules: [
    // 其他模块
    '@nuxt/http',
  ],
  // http: {
  //   // Axios 配置
  //   baseURL: 'https://api.example.com', // 你的 API 地址
  //   credentials: true, // 允许发送跨域认证凭据 (cookies、HTTP 认证)。
  //   headers: {
  //     common: {
  //       'Accept': 'application/json, text/plain, */*',
  //     },
  //   },
  // },
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