/*********************
 * 1. What does it do?
 *
 * 2. Does it alter the array?
 *
 * 3. What does it return?
 *
 * 4. How can I use it?
 *********************/

var stringArray = ['Blue', 'Humpback', 'Beluga', 'Belu', 'belua', 'Belgium']

var mapped = stringArray.map((el, i) => {
  return {
    index: i,
    value: el.toLowerCase()
  }
})

mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1
  }
  if (a.value < b.value) {
    return -1
  }
  return 0
})

var result = mapped.map(el => stringArray[el.index])

console.log('stringArray:', stringArray)
console.log('Sorted:', result)
