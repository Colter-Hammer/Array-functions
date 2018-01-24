/*************
 * 1. What does it do?
 *    Makes a new array with any elements that pass the test provided
 * 2. Does it alter the original array?
 *    No
 * 3. What does it return?
 *    A new array with the elements that pass the test.
 * 4. How can I use this?
 * 
 *************/

 var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var thing = arr.filter(num => num >= 5);
console.log(thing);