// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/shopify',
        '@nuxt/ui', 
    ],

    compatibilityDate: '2026-08-09',

    css: [
        '~/assets/css/main.css'
    ],

    ui: {
        fonts: false,
    },

    shopify: {
        name: 'nuxt-shopify-sandbox',

        clients: {
            storefront: {
                mock: true, // Use mock.shop for testing without a real store
            }
        }
    }
})
