<script setup lang="ts">
import {ref,computed} from "vue";
import AppButton from "./AppButton.vue"
import BorderBox from "./BorderBox.vue";
import Header from "./Header.vue";
/*
 * Toggle Panel mit einem Slot für den Inhalt
 *
 * - Buttontext ist eine berechnete ref und hat keinen
 *   eigenen Wert, sondern nur einen abgeleiteten Wert
 * - Die Komponent definiert ihre Props mittels defineProps
 *   auf typsichere Art
 */
const props = defineProps<{
  caption: string;  // caption ist ein required-attribute
}>()

const toggle = ref(false)  // mein Zustand
const buttonText = computed(() => {
  return toggle.value ? "Hide" : "Show"
}) // abgeleiter zustand

const onToggle = () => { toggle.value = !toggle.value }
</script>

<template>
  <BorderBox>
    <Header>{{props.caption}}</Header>
    <div v-if="toggle">
      <slot></slot>
    </div>
    <div class="flex justify-end">
      <AppButton :text="buttonText" @pressed="onToggle()" />
    </div>
  </BorderBox>
</template>

