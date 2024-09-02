<script setup lang="ts">

import {ref, triggerRef} from "vue";

const a = ref(10)
const b = ref(10)

const doButton1 = () => { a.value++ }
const doButton2 = () => { b.value++ }

</script>

<template>
  <button @click="doButton1()" class="button">A={{a}}</button>
  <button @click="doButton2()" class="button">B={{b}}</button>
</template>

