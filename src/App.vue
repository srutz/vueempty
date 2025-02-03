<script setup lang="ts">
import Box from "./Box.vue" 
import Product from "./Product.vue"
import { useProduct } from "./useProduct"

const { product } = useProduct(20)

const format = new Intl.NumberFormat("de-DE", {
    currency: "EUR",
})
const f = (n?: number) => n ? format.format(n) : "-"

</script>

<template>
    <div class="grow bg-gray-300">
        <Box :title='"Produkt " + product?.id' expanded 
                :footer="f(product?.price) + ' €'">
            <Product :product="product"></Product>
        </Box>
    </div>
</template>

