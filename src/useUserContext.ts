import { inject, provide, Ref, ref } from "vue";

// context for inject and provide.
// inject and provide are not used directly

// Poor man's Piniastore

const KEY = "usercontext"

export type UserContextType = {
    user: string,
    loggedIn: boolean
}

export function provideUserContext() {
    provide(KEY, ref({
        user: "Stepan",
        loggedIn: false
    } satisfies UserContextType))
}

export function useUserContext() {
    const context = inject<Ref<UserContextType>>(KEY)
    if (!context) {
        throw "no user context provided"
    }
    return context.value
}