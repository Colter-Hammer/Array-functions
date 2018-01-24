/********************
 * 1. What does it do?
 *      Does a function for each element in an array. 
 * 2. Does it alter the original array?
 *      No
 * 3. What does it return?
 *      Undefined.  Because you are performing a function, it will return whatever the return value of the function is. 
 * 4. How can I use this?
 * 
 * 
 * What are each of the parameters used for?
 * currentValue = the value being used in the function. Because it's a forEach, it will be passed through as each of the values one after the other. 
 * index|optional| = the index of the element being processed in the array. 
 * array|optional| = The array being worked on
 * 
 * 
 * ******When would you use the parameters? I feel like the array parameter would already be used just by calling the arr.forEach function******
 * 
 * 
 ********************/
 let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 array.forEach(index => {
   console.log(`${index} is the best`);
 });
console.log(array);

 for(let i = 0; i < array.length; i++) {
   console.log(`${array[i]} is the best`);
 };
 console.log(array);
