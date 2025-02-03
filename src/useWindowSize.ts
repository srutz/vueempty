import { onMounted, onUnmounted, ref } from "vue"

export function useWindowSize() {
    const size = ref({ width: window.innerWidth, height: window.innerHeight })
    onMounted(() => {
        const listener = () => {
            console.log(window.innerWidth, window.innerHeight)
            size.value = { width: window.innerWidth, height: window.innerHeight }
            //size.value.width = window.innerWidth
            //size.value.height = window.innerHeight
        }
        window.addEventListener("resize", listener)
        onUnmounted(() => {
            window.removeEventListener("resize", listener)
        })
    }) 
    return size
}