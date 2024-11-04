// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap'
        }
      ]
      // script: [
      //   { src: 'https://js.stripe.com/v3' },
      // ]
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"]
})