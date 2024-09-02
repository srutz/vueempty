<script setup lang="ts">

import {ref,computed} from "vue";

/*
 * Toggle Panel mit einem Slot für den Inhalt
 *
 * - Buttontext ist eine berechnete ref und hat keinen
 *   eigenen Wert, sondern nur einen abgeleiteten Wert
 */

defineProps<{
  caption: string;  // caption ist ein required-attribut
}>()

const toggle = ref(false)
const buttonText = computed(() => {
  return toggle.value ? "Hide" : "Show"
})

const onToggle = () => {
  toggle.value = !toggle.value
}

</script>

<template>
  <div class="flex flex-col gap-4 m-4 p-4 border border-gray-300 rounded-lg shadow-lg">
    <div class="text-center text-xl pb-2 border-b border-gray-300">Mein Togglepanel</div>
    <div v-if="toggle">
      <slot></slot>
    </div>
    <div class="flex justify-end">
      <div class="button text-xs w-16 text-center" @click="onToggle()">
        {{ buttonText }}
      </div>
    </div>
  </div>
</template>

