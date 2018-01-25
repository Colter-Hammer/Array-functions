/*****************
 * 1. What does it do?
 *      Adds an index to the end of the array. 
 * 2. Does it edit the current array?
 *      Yes it does. 
 * 3. What does it return?
 *      Returns the array.length.
 * 4. How can I use this?
 *      Any time you want to add something to the end of the array, you can use this to do so. ie/ When doing the date-idea site,
 *      when people add an idea, it adds it to the end of the array of objects with a .push(). 
 *****************/
var array = ['things', 'stuff', 'whatever', 'and such'];
console.log(array);

console.log(array.push('potato'));