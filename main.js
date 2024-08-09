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
  const groups = {
    "0-10": [],
    "11-20": [],
    "21-30": [],
    "31-40": [],
    "41-50": [],
    "51-60": [],
    "61-70": [],
    "71-80": [],
    "81-90": [],
    "91-100": []
  };

  // Loop through the array to group integers into their respective ranges
  testArray.forEach(item => {
    if (typeof item === 'number' && Number.isInteger(item)) {
      if (item >= 0 && item <= 10) {
        groups["0-10"].push(item);
      } else if (item >= 11 && item <= 20) {
        groups["11-20"].push(item);
      } else if (item >= 21 && item <= 30) {
        groups["21-30"].push(item);
      } else if (item >= 31 && item <= 40) {
        groups["31-40"].push(item);
      } else if (item >= 41 && item <= 50) {
        groups["41-50"].push(item);
      } else if (item >= 51 && item <= 60) {
        groups["51-60"].push(item);
      } else if (item >= 61 && item <= 70) {
        groups["61-70"].push(item);
      } else if (item >= 71 && item <= 80) {
        groups["71-80"].push(item);
      } else if (item >= 81 && item <= 90) {
        groups["81-90"].push(item);
      } else if (item >= 91 && item <= 100) {
        groups["91-100"].push(item);
      }
    }
  });

  return groups;
}
console.log(groupNumbers(testArray));