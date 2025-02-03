import { onMounted, onUnmounted } from "vue"

export 
function useInterval(func: () => void, intervalMs: number) {
    onMounted(() => {
        const id = setInterval(func, intervalMs)
        onUnmounted(() => {
            clearInterval(id)
        })
    })
}

