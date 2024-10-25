<script setup lang="ts">
import { provide, ref } from 'vue';
import Child from './Child.vue'
import GrandChild from './GrandChild.vue'

const globalState = ref({
  user: 'Max',
  age: 30
})

export type GlobalStateType = typeof globalState

provide('globalState', globalState)


</script>

<template>
    <div>Hello World</div>
    <Child>
        <GrandChild></GrandChild>
    </Child>
    <button @click="globalState.age++">Change Age</button>
</template>

