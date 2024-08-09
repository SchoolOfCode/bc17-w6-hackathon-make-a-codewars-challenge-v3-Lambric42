# GroupNumbers CodeWars Kata 

## Getting started 

```js
npm install -D vitest
npm install (for any other dependencies)
```
Setup script in package.json "test": "vitest"

```npm run test
```
Write your function in main.js

## Plan 

Initially looked at codewars for inspiration, discussed with my team and asked chatGPT for some beginner JS examples. These ranged from ideas about removing duplicates, counting specific characters, sorting data, modifying values based on conditions and the classic FizzBuzz. Also read some articles on making your own kata, resigned myself to the likelihood that it wouldn't be entirely original so tried to come up with stretch goals to put a different spin on it.

Initially wanted user to generate an array of random values between 0-100 and then sort them into groups 
Discussed with mentor and realised this was less practical and didn't quite follow the format, i.e. this could arguably be 2 functions, generate random values and then another to sort. 
Also realised that random values is hard to make sure my tests are covering all possible inputs as i have no control. 
Decided to make my own test array with values i can control - allows me to add not just integers, but strings, booleans, decimals and other types as edge cases to ensure function made handles those cases.

Blocked out some basic things i wanted to test as an MVP and any ideas of what code I'd need/syntax.
The test should check that an object is returned. 
The object should contain the keys as expected group names. 
The values of each key should be arrays.
the values of each key array pair should match the values of the objects

Tried to use TDD to do basic tests and write function that solved them. 

Tested with edge cases. The function initially just returned the correct object format with correct keys with array values and some values that either did or didn't fit the criteria of each group. Very hard coded function, not using testArray as input. Iterated through each non-integer type in the array to check tests worked.

Realised I needed to check count of keys, keys were unique as I was able to input correct keys, but not all of them or duplicate keys (this i later saw didn't matter as JS doesnt care about duplicate keys in an object, it just takes latest keyand value and ignores others) - added some tests to handle this.


## Stretch goals and ideas of how i could achieve them 

Put the randomly generated numbers into their groups in ascending order - use some sort of comparator b/w each value in an array to check that index position 0 is smaller than 1, repeat incrementing each position to compare? then if no comparator (cos end of array) move to next key in ibject and check that array?

Don't add duplicates values to the grouped arrays - could use sets to check if a value was already seen and if so, check it only appears once in the returned object array?

Add the non-integer values to a separate object named "Other" - various tests to check it only contained non-integers and any integers that were outside the specified range - type !integer

Count the number of values in the returned object and ensure same as number of valid integers in the testArray





