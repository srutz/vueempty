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
  <div class="flex flex-col gap-4 m-4 p-4 border-solid border-4 border-amber-700">
    <div class="flex justify-end">
      <div class="button" @click="onToggle()">
        {{ buttonText }}
      </div>
    </div>
    <div v-if="toggle">
      <slot></slot>
    </div>
  </div>
</template>

