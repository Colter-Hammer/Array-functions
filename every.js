/*****************
 * 1. What does it do?
 *     Checks to see if ALL the elements of an array match the given criteria.
 * 2. Does it alter the array?
 *     No.
 * 3. What does it return?
 *     True if everything in the array passes, otherwise false
 * 4. How can I use this?
 *     
 *****************/


var array = [{
    name: 'tacos',
    type: 'Mexican',
    stuff: 'cheese'
  },
  {
    name: 'burritos',
    type: 'Mexican',
    stuff: 'beans'
  },
  {
    name: 'ravioli',
    type: 'Italian',
    stuff: 'pasta'
  }
];

var array2 = ['Mexican', 'Mexican', 'Mexican']

console.log(array.every(thing => thing.name.length > 4));


console.log(array);