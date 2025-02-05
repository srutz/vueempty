<script setup lang="ts">
import {useRoute, useRouter} from "vue-router"
import {MetaDataType} from "../main.ts";

const route = useRoute()
const meta = route.meta as MetaDataType
const router = useRouter()
const showBed = () => {
    //router.push("/product/11")
    router.push({
      name: "SingleProduct",
      params: {
        id: 11
      }
    })
}

</script>
<template>
  <div class="flex items-center justify-center grow text-3xl">
    ABOUT PAGE
    {{meta.title}}
    <button @click="showBed">Show the bed</button>
  </div>
</template>
