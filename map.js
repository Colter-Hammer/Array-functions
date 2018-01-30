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

var arr2 = [2, 4, 3, 6, 4, 5, 7, 6];

var arr3 = arr1.map((num, index) => {
    return arr2[index] * Math.pow(Math.PI, 12);
});

var things;

let otherThings;

console.log(arr3);

console.log(arr2);

things = [{
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
    }
];

otherThings = things.map(obj => {
    var stuff = {};
    stuff[obj.type] = obj.stuff;
    return stuff;
});

console.log(things);

console.log(otherThings);