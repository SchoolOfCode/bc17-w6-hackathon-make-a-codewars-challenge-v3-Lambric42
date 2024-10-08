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
const uniqueKeys = new Set(resultKeys);
//this allows us to check if the result object contains all the expected keys in any order, unlike toEqual which would have to be in the same order
test("groupNumbers returns object with only expected keys in any order", () => {
    console.log("Expected keys:", expectedKeys);
    console.log("Result keys:", Object.keys(result));
    expectedKeys.forEach((key) => {
        expect(Object.keys(result)).toContain(key);
    });
});

//this is checking if any unexpected keys are in the result object
test("groupNumbers does not return unexpected keys in result object", () => {  
    console.log('Expected keys:', expectedKeys);
    console.log('Result keys:', resultKeys);
        Object.keys(result).forEach(key => {
        expect(expectedKeys).toContain(key);
    });
});

//this is checking if the result object has the same number of keys as the expected keys
test("groupNumbers returns object with the same number of keys as expected keys", () => {
    console.log('Expected keys length:', expectedKeys.length);
    console.log('Result keys length:', resultKeys.length);
    expect(resultKeys.length).toBe(expectedKeys.length);
});

//check for duplicate keys
test("groupNumbers returns object with unique and correct keys", () => {
    console.log('Result keys:', resultKeys);
    console.log('Unique keys:', Array.from(uniqueKeys));
    console.log('Result keys length:', resultKeys.length);
    console.log('Unique keys size:', uniqueKeys.size);
    expect(resultKeys.length).toBe(uniqueKeys.size);
});

// test the key value type is an array
test("groupNumbers returns object with array values", () => {
    Object.values(result).forEach(value => {
        console.log('Value type:', Array.isArray(value));
        expect(Array.isArray(value)).toBe(true);
    });
});

//test the array for each key contains the correct numbers within the specified range of that group
test("groupNumbers returns object with array values containing correct numbers", () => {
    //iterate over each key in object
    resultKeys.forEach(key => {
        //split the key into an array of two strings, in this case split either side of hyphen
        const range = key.split("-");
        //convert the 2 strings to integers and set as min / max
        const min = parseInt(range[0]);
        const max = parseInt(range[1]);
        //get thearray of values from result object
        const values = result[key];
        //iterate over each value in array
        values.forEach(value => {
            console.log('Value:', value);
            console.log('Min:', min);
            console.log('Max:', max);
            expect(value >= min && value <= max).toBe(true);
        });
    });
});

// test array for each key contains only integers, no decimal numbers, strings, booleans, objects, arrays, null, undefined, NaN
test("groupNumbers returns object with array values containing only integers", () => {
    //iterate over each key in object
    resultKeys.forEach(key => {
        //get the array of values from result object
        const values = result[key];
        //iterate over each value in array
        values.forEach(value => {
            console.log('Value:', value);
            expect(Number.isInteger(value)).toBe(true);
        });
    });
});