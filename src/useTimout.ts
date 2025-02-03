import { onMounted, onUnmounted } from "vue";

export function useTimeout(func: () => void, timeoutMs: number) {
    onMounted(() => {
        const t = setTimeout(func, timeoutMs)
        onUnmounted(() => {
            clearTimeout(t)
        })
    })   
}

