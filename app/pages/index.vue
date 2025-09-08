<script setup lang="ts">
const { data: products, error } = await useAsyncStorefront('products', `#graphql
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
    }
}, {
    transform: data => flattenConnection(data?.products),
})

if (error.value) console.error(error.value)
</script>

<template>
    <UContainer class="my-8">
        <h1 class="text-2xl font-bold mb-8">Products from Mock.shop ({{ products?.length }})</h1>

        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Product 
                v-for="product in products" 
                :key="product.id" 
                :product="product"
            />
        </div>
    </UContainer>
</template>
