<script setup lang="ts">
import {useRoute} from "vue-router"
import {MetaDataType} from "../main.ts";

const route = useRoute()
const meta = route.meta as MetaDataType

</script>
<template>
  <div class="flex items-center justify-center grow text-3xl">
    ABOUT PAGE
    {{meta.title}}
  </div>
</template>
