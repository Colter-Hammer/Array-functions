/******************
 * 1. What does it do?
 *     Returns a new array with the elements altered by whatever function is passed through. 
 * 2. Does it alter the array?
 *     No
 * 3. What does it return?
 *     It returns a new array. 
 * 4. What can I do with it?
 *  
 *******************/

 var arr1 = [1, 4, 9];

 var arr2 = arr1.map(Math.sqrt);

 console.log(arr2);

 var things = [{
   type: 'Yum',
   stuff: '40'
 },
{
type: 'Yuck',
stuff: 'other'
},
{
  type: 'eh',
stuff: '26'
}];

var otherThings = things.map(obj => {
  var stuff = {};
  stuff[obj.type] = obj.stuff;
  return stuff;
});

console.log(things);

console.log(otherThings);