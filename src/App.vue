<script setup lang="ts">
import { computed, ref } from "vue"
import Box from "./Box.vue"
import Product from "./Product.vue"
import H1 from "./H1.vue"
import VCol from "./VCol.vue"
import VRow from "./VRow.vue"
import { useProduct } from "./useProduct"

const { product } = useProduct(20)

const format = new Intl.NumberFormat("de-DE", {
    currency: "EUR",
})
const f = (n?: number) => n ? format.format(n) : "-"

const boxOpen = ref(true)
const handleExpanded = (open: boolean, n: number) => {
    console.log('expanded changed', open, n)
    boxOpen.value = open
}

</script>

<template>
    <div class="grow bg-gray-300 flex flex-col gap-4"  >
        <H1>Überschrift 123</H1>
        <Box :title='"Produkt " + product?.id' expanded
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

