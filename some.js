/****************
 * 1. What does it do?
 *    Checks to see if at least one of the elements in an array matches the function given
 * 2. Does it alter the array?
 *    No
 * 3. What does it return?
 *     True if at least 1 element is true. False if none are true. 
 * 4. How can I use this?
 * 
 ****************/

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

var object = {
  name: 'lo mein',
  type: 'Chinese',
  stuff: 'soy'
}

console.log(array.some(prop => prop.stuff == 'beans' ));

console.log(array.every(thing => thing.type == 'Mexican'))

console.log(array);
console.log(object);
