// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/shopify',
        '@nuxt/ui', 
    ],

    compatibilityDate: '2025-07-15',

    css: [
        '~/assets/css/main.css'
    ],

    icon: {
        provider: 'iconify',
    },

    fonts: {
        provider: 'fontshare',
    },

    shopify: {
        name: 'nuxt-shopify-sandbox',

        clients: {
            storefront: {
                mock: true, // Use mock.shop for testing without a real store

                apiVersion: '2025-07',
            }
        }
    }
})
