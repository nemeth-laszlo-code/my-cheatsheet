// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
  ],

  devtools: {
    enabled: true,
  },
  content: {
    highlight: {
      theme: "github-dark",
      langs: [
        "css",
        "javascript",
        "typescript",
        "html",
        "bash",
        "json",
        "vue",
        "markdown",
      ],
    },
  },
  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-01-15",
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
