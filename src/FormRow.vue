<template>
    <div class="flex gap-2">
        <label class="w-32" :style="style" :for="labelfor" @click="onLabelClick">{{ label }}</label>
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
import { computed, CSSProperties, ref } from 'vue';


type FormRowProps = {
    label?: string
    labelfor: string
    bold?: boolean
}
let { label, labelfor, bold } = defineProps<FormRowProps>()

const fontSize = ref(16)

const style = computed(() => {
    return {
        fontWeight: bold ? "900" : undefined,
        fontSize: fontSize.value + "px",
    } satisfies CSSProperties
})

const onLabelClick = () => {
    fontSize.value += 4
}


</script>
