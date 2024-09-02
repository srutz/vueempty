<script setup lang="ts">

import {ref} from "vue";

const count = ref(8)


const doCount = () => {
  count.value++
  console.log("button was clicked. newvalue=" + count.value)
}

</script>

<template>
  <button @click="doCount()" class="button">Count is {{ count }}</button>
</template>

