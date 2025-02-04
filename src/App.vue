<script setup lang="ts">
import Box from "./Box.vue"
import Product from "./Product.vue"
import { useProduct, useProducts } from "./useProduct"

const { products } = useProducts([ 20, 33, 16, 13 ])

const format = new Intl.NumberFormat("de-DE", {
    currency: "EUR",
})
const f = (n?: number) => n ? format.format(n) : "-"

// event handler für custom-emit "expanded" der Box
const handleExpanded = (open: boolean, n: number) => {
    console.log('expanded changed', open, n)
}


</script>

<template>
    <div class="h-1 grow bg-gray-300 flex flex-col gap-4 overflow-y-auto">
        <Box v-for="product in products" :title='"Produkt " + (product?.id || "")' expanded
                @expanded="handleExpanded">
            <template #content>
                <Product :product="product" />
            </template>
            <template #footer>
                <div class="text-lg text-red-600">
                    {{ 
                        f(product?.price) + ' €'
                    }}
                </div>
            </template>
        </Box>
    </div>
</template>

