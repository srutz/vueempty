
import { onMounted, onUnmounted, ref } from 'vue';

export function useWindowSize() {
    const width = ref(window.innerWidth)
    const height = ref(window.innerHeight)
    
    // variante 1
    const listener = () => {
        width.value = window.innerWidth
        height.value = window.innerHeight
    }
    
    onMounted(() => {
        window.addEventListener("resize", listener)
    })
    
    onUnmounted(() => {
        window.removeEventListener("resize", listener)
    })
    return { width, height }
}
