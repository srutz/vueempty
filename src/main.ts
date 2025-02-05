import { createApp, watch } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia, PiniaPluginContext } from 'pinia'

export function piniaLocalStoragePlugin({ store }: PiniaPluginContext) {
    // Get the store ID as the storage key
    const storageKey = "pinia-" + store.$id

    // Load initial state from localStorage if it exists
    const savedState = localStorage.getItem(storageKey)
    if (savedState) {
        store.$patch(JSON.parse(savedState))
    }

    // Watch for changes and save to localStorage
    watch(
        () => store.$state,
        (state) => {
            localStorage.setItem(storageKey, JSON.stringify(state, null, 4))
        },
        { deep: true }
    )
}



const app = createApp(App).use(createPinia().use(piniaLocalStoragePlugin))
app.mount('#app')
