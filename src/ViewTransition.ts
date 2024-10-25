
export function useViewTransition() {
    const supportsViewTransitions = 'startViewTransition' in document

    const updateWithTransition = async (callback: () => void) => {
        if (supportsViewTransitions) {
            await (document as any).startViewTransition(() => {
                callback()
            }).finished
        } else {
            callback()
        }
    }

    return {
        updateWithTransition
    }
}
