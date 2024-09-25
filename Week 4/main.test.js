import { describe, test, expect } from "vitest";
import { fixed } from "./main";

describe("fixed()", () => {
    test("successfully returns 2", () => {
        expect(fixed()).toEqual(2)
    })
})