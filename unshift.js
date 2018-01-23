/***************
 * 1. What does it do?
 *    Adds an index to the front of an array
 * 2. Does it edit the current array?
 *    Yes. 
 * 3. What does it return?
 *    Returns the new length of the array.
 * 4. How can I use this?
 *    Whenever you want to add something to an array, but at the front. Perhaps you are removing things from the back of the array, and you want to replace them with things at the front. 
 ***************/

 var storage = [['potato', 2018, 'russett'], ['flour', 2017, 'white']];
 console.log(storage);
 /* remove the last index of the array as if the flour had gone bad*/
 console.log(storage.pop());
 console.log(storage);
 /**replace it with new flour by adding it to the beginning of the array. 
  * A better way to do this would be to not have arrays, but rather objects containing all the different types of food, and replace those objects with new objects containing the correct information. 
  */
 console.log(storage.unshift(['flour', 2019, 'bread']));
 console.log(storage);