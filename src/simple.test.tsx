import { describe, expect, test } from "vitest";

describe("Simple test", () => {
    test("should pass", () => {
        expect(1 + 1).toBe(2)
    })
    test("should also pass", () => {
        expect(2 + 2).toBe(4)
    })
})