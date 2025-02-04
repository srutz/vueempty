import { ref } from "vue"


export function useForceUpdate() {
    const trigger = ref(false)
    const forceUpdate = () => trigger.value = !trigger.value
    return { forceUpdate, trigger }
}