<script setup lang="ts">

const props = defineProps<{
  text: string;
  flavor?: "standard" | "small";
}>()

let classes = "button w-24 text-center"
if (!props.flavor || props.flavor == "small") {
  classes += " text-xs"
}

const emit = defineEmits<{
  (event: "pressed", payload: void): void
}>()

const onClick = () => {
  emit("pressed")
}
</script>

<template>
  <div :class="classes" @click="onClick()">
    {{ text }}
  </div>
</template>

