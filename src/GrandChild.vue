<template>
    <div>
        <div>{{ user }}, {{ age }}</div>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
</template>
<script setup lang="ts">

import { inject, ref, toRefs } from 'vue';
import { type GlobalStateType } from './App.vue'

const globalState = inject('globalState') as GlobalStateType
const { user, age } = toRefs(globalState.value)

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
])

</script>

