import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    // '@primevue/nuxt-module',
    '@nuxt/image',
    'nuxt-aos',
    'nuxt-swiper'
  ],
//   primevue: {
//     options: {
//         theme: {
//             preset: Aura,
//             options: {
//               prefix: 'p',
//               darkModeSelector: 'light-dark',
//               cssLayer: false
//           }
//         },
        
//     }
// }
 devServer: {
    host: '172.16.16.16',
    port: 3000
  }
})