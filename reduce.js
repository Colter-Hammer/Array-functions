/************************
 * 1. What does it do?
 * 
 * 2. Does it alter the array?
 * 
 * 3. What does it return?
 * 
 * 4. How can I use this?
 ************************/

// var arr1 = [1, 2, 3, 4, 5];

// var arr2 = [5, 4, 3, 2, 1];

// var thing = arr1.reduce((prev, cur, index) => {
// //  var arr3 = cur + arr2[index];
//  var arr3 = [...prev, cur, arr2[index]];
//  return arr3.sort();
// },[]);

// console.log(thing);

var group1 = [{
  name: 'Theron',
  age: 24,
  food: 'Tacos'
},
{
  name: 'Bekah',
  age: 21,
  food: 'Pasta'
}];

var group2 = [{
  name: 'Zach',
  age: 'dirt',
  food: 'things'
},
{
  name: 'Em',
  age: 21,
  food: 'stuff'
}];

var combGroup = group1.concat(group2);
console.log(combGroup);
var things = combGroup.reduce((prev, curr) => {
  return [...prev, curr.name];
}, []);
console.log(things);


group2.push({name: 'Tacos', age: 'time itself', food: 'potatos'})
console.log(combGroup);

group2[0].name = 'stuff';
console.log(combGroup);