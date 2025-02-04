<script setup lang="ts">
import Box from "./Box.vue" 
import Product from "./Product.vue"
import { useProduct } from "./useProduct"
import { useForceUpdate } from "./useForceUpdate"
import { computed, ref } from "vue"

const { product } = useProduct(20)

const format = new Intl.NumberFormat("de-DE", {
    currency: "EUR",
})
const f = (n?: number) => n ? format.format(n) : "-"

const { forceUpdate, trigger} = useForceUpdate()

const boxOpen = ref(true)
const classes = computed(() => boxOpen.value ? "text-3xl" : "")
const handleExpanded = (open: boolean, n: number) => {
    console.log('expanded changed', open, n)
    boxOpen.value = open
    forceUpdate()
}

</script>

<template>
    <div class="grow bg-gray-300 flex flex-col gap-4"  >
        <div :class='classes'>
            Box offen? = {{  boxOpen }}
        </div>
        <Box :title='"Produkt " + product?.id' expanded
                @expanded="handleExpanded"
                :footer="f(product?.price) + ' €'">
            <Product :product="product" ></Product>
        </Box>
    </div>
</template>

