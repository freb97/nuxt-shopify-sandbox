<script setup lang="ts">
import type { ProductFieldsFragment } from '#shopify/storefront'

const props = defineProps<{
    product: ProductFieldsFragment
}>()

const getPrice = (amount: string) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(Number.parseFloat(amount))

const src = computed(() => props.product.featuredImage?.url || '')
const alt = computed(() => props.product.featuredImage?.altText || props.product.title)
</script>

<template>
    <UCard
        variant="soft" 
        :ui="{ header: 'p-0 -mx-6 rounded-b-0 border-b-0'}"
    >
        <template #header>
            <img 
                :src="src" 
                :alt="alt" 
                class="aspect-square w-full bg-gray-800 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
        </template>

        <h2 class="text-xl">
            {{ props.product.title }}
        </h2>

        <p class="mt-2 text-sm font-medium text-gray-300">
            from {{ getPrice(props.product.priceRange.minVariantPrice.amount) }}
        </p>
    </UCard>
</template>
