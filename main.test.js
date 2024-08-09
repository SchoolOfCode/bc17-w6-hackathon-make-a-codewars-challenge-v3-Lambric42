import { test, expect, } from "vitest";
import { testArray, groupNumbers } from "./main";

const result = groupNumbers(testArray);

// test groupNumbers function returns an object
test("groupNumbers returns object", () => {
    expect(typeof result).toBe("object");
    })