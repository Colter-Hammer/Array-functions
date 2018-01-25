/***********************
 * 1. What does it do?
 *      Creates a new array from array-like things.
 * 2. Does it alter the array?
 *      No
 * 3. What does it return?
 *      A new array. 
 * 4. How can I use this?
 * 
 ***********************/

var str = 'I like pie';

console.log(Array.from(str));

var arr = [1, 2, 3, 4, 1, 2, 5, 6, 4, 7, 8, 6, 4, 2, 8, 9, 3, 1];

var set = new Set(arr);

console.log(set);

var newArr = [...set];

console.log(newArr);

var thing = Array.from({length: 10}, (elm,i,a) => i + 1);

console.log(thing);
