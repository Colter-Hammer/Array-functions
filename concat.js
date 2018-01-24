/******************
 * 1. What does it do?
 *    Merges arrays.
 * 2. Does it edit the current array?
 *    no. Instead, it returns a new array.
 * 3. What does it return?
 *    A new array consisiting of the value of the merged arrays. 
 * 4. How can I use this?
 * 
 * If you do this with a string, boolean, or number, the new array will only hold the value of the old arrays. But if you do it with an object, it is only referencing the object. so if you change something in the object, it will also change in the new array. If you change a value of a normal array, it doesn't effect the value of the new array. 
 * Also, if you alter a value within the new array, it won't affect any of the previous arrays, unless it is an object reference. 
 ******************/

 var thing1 = {
     name: 'Theron',
     bday: 'July 8',
 }

 var thing2 = ['stuffs', 'guys', 'george'];

 //concat the two strings together. 
 var thing3 = thing2.concat(thing1);
 console.log(thing3);

 //changing things within an object that has been concatinated will alter the new array. 
 thing1.name = "otherThings"
 console.log(thing3);

 //Changing things that are an object reference within the new array will alter the original objects.
 thing3[3].name = 'Theron';
 thing3[3].bday = 'Tomorrow';
 console.log(thing3);

 //Changing anything within the new array that is not an object reference will not have an effect on the old values. 
 thing3[2] = 'Yo mama';
console.log(thing3);
 console.log(thing2);