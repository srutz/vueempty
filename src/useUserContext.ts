import { provide } from "vue";

export type UserContextType = {
    user: string,
    loggedIn: boolean
}

export function useUserContext() {
    provide("usercontext", {
        user: "Stepan",
        loggedIn: false
    } satisfies UserContextType)
}