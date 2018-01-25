/******************
 * 1. What does it do?
 *    It removes the last index of an array and returns the removed index. 
 * 2. Does it edit the current array?
 *    Yes.
 * 3. What does it return?
 *    Returns the removed index.
 * 4. How can I use it?
 *    That is the question isn't it?
 ******************/

var array = ['Things', 'Potato', 'tacos', 'other stuff'];
var array2 = [];
for (var i = array.length; i >= array.length; i--) {
  array2 += [array.pop()] + ', ';
  console.log(array);
  console.log(array2);
}