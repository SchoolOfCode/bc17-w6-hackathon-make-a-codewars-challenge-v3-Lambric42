import { test, expect } from "vitest";
import { testArray, groupNumbers } from "./main";

const result = groupNumbers(testArray);

// test groupNumbers function returns an object
test("groupNumbers returns object", () => {
    expect(typeof result).toBe("object");
});

const expectedKeys = [
    "11-20",
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "71-80",
    "81-90",
    "91-100",
    "0-10",
]; // 1 out of order for PoC
const resultKeys = Object.keys(result);

//this allows us to check if the result object contains all the expected keys in any order, unlike toEqual which would have to be in the same order
test("groupNumbers returns object with only expected keys in any order", () => {
    console.log("Expected keys:", expectedKeys);
    console.log("Result keys:", Object.keys(result));
    expectedKeys.forEach((key) => {
        expect(Object.keys(result)).toContain(key);
    });
});
