import {ref,onMounted,onUnmounted} from "vue";

export function useWindowSize() {
    const width = ref(window.innerWidth)
    const height = ref(window.innerHeight)
    const l = () => {
        width.value = window.innerWidth
        height.value = window.innerHeight
    }
    onMounted(() => { window.addEventListener("resize", l) })
    onUnmounted(() => { window.removeEventListener("resize", l) })
    return {
        width: width,
        height: height,
    }
}