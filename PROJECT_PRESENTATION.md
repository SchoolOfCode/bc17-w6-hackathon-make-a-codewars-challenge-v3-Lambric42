Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

I want you to write a function that generates an array containing 30 random numbers between 0-100 inclusive.
The function should then separate those numbers out into groups based on the following inclusive ranges;
Group 0-10 - Numbers between 0 and 10
Group 11-20 - Numbers between 11 and 20
Group 21-30 - Numbers between 21 and 30
etc ...
Group 91-100 - Numbers between 91 and 100

The function should return an object where each key is the group name (e.g. "Group 0-10", "Group 11-20") and the value of each object is an array containing all numbers which fall into that range. Reminder, the range of the array is inclusive 
The arrays should contain duplicates if any are randomly generated.


Stretch goal - put the randomly generated numbers into their groups in ascending order.
Increase the number of generated values to 1000. Don't add duplicates to the grouped arrays