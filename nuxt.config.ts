// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json"
      },
      {
        code: "ar",
        iso: "ar",
        name: "Arabic",
        file: "ar.json"
      },
    ],
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: "en-US"
    }
    // vueI18n: {
    //   fallbacklocale: "en-US"
    // }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        {charset: "utf-8"},
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        },
        {name: "description", content: "A super app that delivers anything into your doorstep. You order, we serve."},
        {name: "author", content: "Presto"}
      ]
    }
  }
})
