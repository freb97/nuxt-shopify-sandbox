<script setup lang="ts">
const { data: products, error } = await useStorefrontData('products', `#graphql
    query GetProducts($first: Int!) {
        products(first: $first) {
            nodes {
                ...ProductFields
            }
        }
    }
    ${PRODUCT_FRAGMENT}
    ${IMAGE_FRAGMENT}
    ${PRICE_FRAGMENT}
`, {
    variables: {
        first: 10,
    },

    transform: data => flattenConnection(data?.products),
})

if (error.value) console.error(error.value)
</script>

<template>
    <UContainer class="my-8 relative">
        <h1 class="text-2xl font-bold mb-8">Products from Mock.shop ({{ products?.length }})</h1>

        <UPageGrid>
            <Product 
                v-for="product in products" 
                :key="product.id" 
                :product="product"
            />
        </UPageGrid>

        <UButton
            icon="simple-icons-github"
            to="https://github.com/freb97/nuxt-shopify-sandbox"
            variant="outline"
            color="neutral"
            class="absolute top-0 right-4 sm:right-6 lg:right-8"
        />
    </UContainer>
</template>
