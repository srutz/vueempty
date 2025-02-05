<script setup lang="ts">
import { vAutoAnimate } from "@formkit/auto-animate"
import Box from "./Box.vue"

import Menubar from './Menubar.vue'
import ProductPanel from "./Product.vue"
import { Product, useProducts } from "./useProduct"
import { provideUserContext } from "./useUserContext"
import { defineComponent, h, ref } from "vue"

provideUserContext()

const { products } = useProducts([ 20, 33, 16, 13 ])

const format = new Intl.NumberFormat("de-DE", {
    currency: "EUR",
})

/*
const RedHello = defineComponent({
    setup: () => {
        const counter = ref(1)
        return { counter }
    },
    template: `<div @click='counter++' class='bg-red-600 w-32 min-h-32 flex 
        flex-col justify-center items-center text-white'>
            RED HELLO {{ counter }}</div>`
})
*/

const f = (n?: number) => n ? format.format(n) : "-"

// event handler für custom-emit "expanded" der Box
const handleExpanded = (open: boolean, n: number) => {
    console.log('expanded changed', open, n)
}
const closeProduct = (product: Product) => {
    products.value = products.value.filter(p => p.id != product.id)
}

const Counter = defineComponent({
    setup: () => {
        const count = ref(99)
        return () => {
            const tree = h("div", {}, [
                h("div", { onClick: () => count.value++ }, count.value),
                h("div", { onClick: () => count.value++ }, count.value),
                h("div", { onClick: () => count.value++ }, count.value),
            ])
            console.log(tree)
            console.log(count)
            return tree
        }
    },
})


</script>

<template>
    <div class="h-1 grow flex flex-col">
        <Menubar></Menubar>
        <div class="h-1 grow bg-gray-300 flex flex-wrap gap-4 overflow-y-auto" v-auto-animate>
            <Counter></Counter>
            <Box v-for="product in products" :title='"Produkt " + (product?.id || "")' expanded
                    @expanded="handleExpanded">
                <template #content>
                    <ProductPanel :product="product" />
                    <button class="button" @click="closeProduct(product)">Close</button>
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
    </div>
</template>

