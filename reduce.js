/************************
 * 1. What does it do?
 *
 * 2. Does it alter the array?
 *
 * 3. What does it return?
 *
 * 4. How can I use this?
 ************************/
//variables
let arr1, arr2, thing, names, countedNames;
let friends, allbooks, ages, array, results;

arr1 = [1, 2, 3, 4, 5];

arr2 = [5, 4, 3, 2, 1];

function doThings(acc, cur, index) {
    return acc + cur + arr2[index];
}

thing = arr1.reduce(doThings, 5);

console.log(thing);

//  MDN example for counting instances in an array

names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});

console.log(countedNames);

// friends - an array of objects

friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
allbooks = friends.reduce(function (prev, curr) {
    return [...prev, ...curr.books];
}, []);

ages = friends.reduce(function (prev, curr) {
    return [...prev, curr.age];
}, []);

console.log(allbooks);
console.log(ages);

// var array = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

// //sort puts all of it in order so that reduce can then
// //get rid of any of the duplicates.

// var result = array.sort().reduce((init, current) => {
//   if (init.length === 0 || init[init.length - 1] !== current) {
//     init.push(current);
//   }
//   return init;
// }, []);

// console.log(result);

//  how can I do this with Map and filter?
array = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

results = array.sort().map((curr, index) => {
    if (curr.length === 0 || curr[curr.length - 1] !== array[index]) {
        curr.shift(array[index]);
    }
    return curr;
});

console.log(results);