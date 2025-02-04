import { onMounted, onUnmounted, reactive, ref } from "vue"

export function useWindowSize() {
    const size = reactive({ width: window.innerWidth, height: window.innerHeight })
    onMounted(() => {
        const listener = () => {
            //console.log(window.innerWidth, window.innerHeight)
            //size.value = { width: window.innerWidth, height: window.innerHeight }
            size.width = window.innerWidth
            size.height = window.innerHeight
        }
        window.addEventListener("resize", listener)
        onUnmounted(() => {
            window.removeEventListener("resize", listener)
        })
    }) 
    return size
}