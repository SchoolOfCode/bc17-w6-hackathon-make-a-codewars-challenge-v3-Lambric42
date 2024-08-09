//Here we have a testArray which contains 250 values ranging between integers, decimal values, and other non-integers. 

// Write a function called groupNumbers which takes in the testArray and separates out integer values into groups based on the following inclusive ranges;
// "0-10" - Numbers between 0 and 10
// "11-20" - Numbers between 11 and 20
// "21-30" - Numbers between 21 and 30
// etc ...
// "91-100" - Numbers between 91 and 100

// The function should return an object where each key is the group name (e.g. "0-10", "11-20") 
//and the value of each object is an array containing only integers which fall into that range. Remember, the range of the array is inclusive.

//here is an example of the expected output format:
// {
//     "0-10": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     "11-20": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//     "etc": ...
// }

export const testArray = [
    25, 9, 45, 10, -3, 11, 99, 55, 23, 100, 65, 32, 20, 
    77, 90, 44, 6, 21, 50, 38, 7, 15, -10, 0, 8, 1, 22, 
    83, 12, 5, 18, 0, 88, 9, 43, 71, 82, 2, 3, 4, 11, 
    67, 73, 10, 13, 78, 64, 19, 6, 0, 31, 0, 80, 25, 36, 
    95, 48, 20, 70, 49, 26, 7, 61, 34, 15, 21, 37, 57, 
    74, 10, 22, 97, 16, 98, 99, 77, 84, 29, 23, 91, 41, 
    63, 81, 44, 50, 33, 69, 72, 14, 8, 59, 99, 90, 17, 
    30, 6, 28, 100, 100, 38, 49, 30, 21, 23, 88, 4, 2, 
    52, 40, 12, 90, 68, 77, 81, 32, 27, 16, 45, 21, 83, 
    29, 1, 35, 3, 99, 0, 93, 56, 24, 41, 91, 17, 19, 42, 
    20, 72, 58, 30, 6, 94, 22, 12, 86, 85, 79, 18, 50, 
    9, 2, 43, 21, 37, 13, 31, 87, 8, 4, 26, 25, 5, 33, 
    99, 41, 32, 47, 7, 71, 10, 0, 100, 78, 91, 100, 92, 
    11, 6, 67, 15, 74, 60, 57, 8, 95, 55, 5, 40, 36, 29, 
    35, 23, 20, 1, 27, 3, 64, 44, 30, 0, 6, 91, 92, 77, 
    43, 4, 48, 5, 120, 200, !NaN, -10.5, 20.7, 30.3, -40.8, 
    50.1, 'a', 'z', '@', '#', NaN, undefined, null, {}, 
    [], -1, -10, -20, -30, -5, true, false
  ];
  
  //write a function that correctly groups numbers into the expected ranges using the testArray above as input
export function groupNumbers (testArray) {
   
  };