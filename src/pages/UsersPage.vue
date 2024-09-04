<script setup lang="ts">

import {useRouter} from "vue-router";

const router = useRouter()

const showAbout = () => {
  router.push('/about')
}

</script>/
<template>
  <div class="flex flex-col gap-2 items-center justify-center grow text-3xl">
    USERS PAGE
    <button @click="showAbout()">Show About Page</button>
  </div>
</template>
