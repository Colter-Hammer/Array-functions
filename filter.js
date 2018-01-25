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

var arr = ['potato', 'things', 'stuff', 'tacos', 'yo mama'];

var thing = arr.filter(word => word.length > 5);

console.log(thing);