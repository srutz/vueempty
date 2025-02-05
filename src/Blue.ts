import { defineComponent, h, ref } from "vue";


export default defineComponent({
    setup: () => {
        const count = ref(10)
        return () => {
            return h("div", { class: "shrink-0 w-32 h-32 bg-red-500"}, count.value)
        }
    },
})