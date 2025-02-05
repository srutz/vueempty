import { defineStore, PiniaPluginContext } from "pinia";
import { watch } from "vue";

// context for inject and provide.{
// inject and provide are not used directly

// Real Piniastore


export const useUserContext = defineStore("xyz", {
    state: () => ({
        user: "Stepan",
        loggedIn: false
    }),
})



