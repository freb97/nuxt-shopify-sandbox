<script setup lang="ts">
import type { ProductFieldsFragment } from '#shopify/storefront'

const props = defineProps<{
    product: ProductFieldsFragment
}>()

const getPrice = (amount: string) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(Number.parseFloat(amount))
</script>

<template>
    <div class="group">
        <img 
            :src="props.product.featuredImage?.url" 
            :alt="props.product.featuredImage?.altText || product.title" 
            class="aspect-square w-full rounded-lg bg-gray-800 object-cover group-hover:opacity-75 xl:aspect-7/8"
        />

        <h2 class="mt-4 text-xl text-gray-100">
            {{ props.product.title }}
        </h2>

        <p class="mt-1 text-sm font-medium text-gray-300">
            from {{ getPrice(props.product.priceRange.minVariantPrice.amount) }}
        </p>
    </div>
</template>
