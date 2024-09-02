<script setup lang="ts">

import {ref} from "vue";

const toggle = ref(false)
const buttonText = ref("Show")

const onToggle = () => {
  toggle.value = !toggle.value
  buttonText.value = toggle.value ? "Hide" : "Show"
}

</script>

<template>
  <div class="flex flex-col gap-4 m-4 p-4 border border-gray-400 rounded-lg shadow-lg">
    <div class="flex justify-end">
      <div class="button text-xs w-16 text-center" @click="onToggle()">
        {{ buttonText }}
      </div>
    </div>
    <div v-if="toggle">
      <slot></slot>
    </div>
  </div>
</template>

