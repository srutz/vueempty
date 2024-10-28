import { bench, describe } from "vitest"

describe("Simple test", () => {
    bench("should run fast", () => {
        for (let i = 0; i < 1000; i++) {
                console.log(i)
        }
    })
    bench("should take a while ", () => {
        function fib(n: number): number {
            if (n <= 1) return n
            return fib(n - 1) + fib(n - 2)
        }
        fib(40)
    })
})