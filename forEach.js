/********************
 * 1. What does it do?
 *      Does a function for each element in an array. 
 * 2. Does it alter the original array?
 *      No
 * 3. What does it return?
 *      Undefined.  Because you are performing a function, it will return whatever the return value of the function is. 
 * 4. How can I use this?
 * 
 ********************/


 let array = ['things', 'stuff', 'potato'];
 array.forEach(index => {
   console.log(`${index} is the best`);
 });
 console.log(array);