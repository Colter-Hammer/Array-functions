/*********************
 * 1. What does it do?
 *      Removes and replaces elements of an array at the given location, and however many are specified.
 * 2. Does it alter the array?
 *      Yes
 * 3. What does it return?
 *      An array with the removed items. If the array is empty, it returns an empty array.
 * 4. How can I use this?
 *********************/

let arr1;

arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr1.splice(1, 2, 11, 12));
console.log(arr1);

let otherThings;

otherThings = ['Cheese', 'Pizza', 'Other stuff', 'No sir'];

console.log(otherThings.splice(3, 2, 'yes', 'Walter', 'Sauce'));
console.log(otherThings);

/****************
 * How is splice() different than slice()?
 *      Splice removes some elements, but it can also add some elements into the array. It also alters the array that it's currently in to reflect the changes made. Whereas slice can't add things into the array, it only removes elements. It returns a new array with the removed elements. The Old array is not altered. 
 ************/