Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

Here we have a testArray which contains 250 values ranging between integers, decimal values, and other non-integers. 

Write a function which takes in the testArray and separates out integer values into groups based on the following inclusive ranges;
"0-10" - Numbers between 0 and 10
"11-20" - Numbers between 11 and 20
"21-30" - Numbers between 21 and 30
etc ...
"91-100" - Numbers between 91 and 100

The function should return an object where each key is the group name (e.g. "0-10", "11-20") and the value of each object is an array containing all integers which fall into that range. Remember, the range of the array is inclusive.



Stretch goal - put the randomly generated numbers into their groups in ascending order.
Don't add duplicates values to the grouped arrays
Add the non-integer values to a separate object named "Other"


The test should check that an object is returned. 
The object should contain the keys as expected group names. 
the values of each key should be arrays. - arrayisarray
the values of each key array pair should match the values of the objects - this is gonna be hard. each group name to have an individual condition? expect 0-10 value min max to be 0, 10. hard code for each group?

unsure how i'd test numbers are in ascending order. some sort of comparator b/w each value in an array to check that index position 0 is smaller than 1, repeat incrementing each position to compare? then if no comparator (cos end of array) move to next object array?

duplicates? check if any value occurs multiple times, could i add it to a regex that we check or some other form of adding to a list of numbers and checking against that list of numbers? could also do that in an index tbh.

maybe skip random as jhard to test. specify array input, cover edge cases, negatives, decimals/floating point, letters, other characters ~@}{} 
. could try putting the array in reverse order.

Laid out some basic tests. e.g. is it an object. So i just returned an object

when doing the check for correct number of keys of returned object being equal to length of array of expected keys, i realised it wouldn't work for correct duplicate keys. so i had to learn about sets as a way to store unique values. i also realised that yo ucan't have an object with duplicate keys, it takes the last key and value and ignores the first instance of that key even if different value, so unique test isn't super relevant.