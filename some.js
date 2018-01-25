/****************
 * 1. What does it do?
 * 
 * 2. Does it alter the array?
 * 
 * 3. What does it return?
 * 
 * 4. How can I use this?
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

//That's not working. What is wrong with it? It keeps on showing that things are true when they obviously aren't. What could be a possible reason for them not working correctly. 

console.log(array.some(prop => prop.stuff = 2 ));
