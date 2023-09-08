console.log('Lesson 17 Операції з масивами частина І')
console.log(`=====================================`)
console.log('Array.from')

console.log(Array.from('Hello World'))
// console.log(Array.from('124534'))
// console.log(Array.from(124534))
// console.log(Array.from({ a: 1, b: 2, c: 3 }))
// console.log(Array.from({ 0: 1, 1: 2, 2: 3 }))
// console.log(Array.from({ 0: 1, 1: 2, 2: 3, length: 3 }))
// console.log(
//   Array.from({
//     0: 'Hello',
//     1: 'World',
//     2: '!!!',
//     length: 3,
//   }),
// )
// console.log(Array.from({ length: 3 }))

// console.log(
//   Array.from(
//     { 0: 1, 1: 2, 2: 3, length: 3 },
//     (elem, index) => {
//       console.log(elem, index)
//       return elem
//     },
//   ),
// )

const obj = {
  0: 'First',
  1: 'Second',
  2: 'Third',
  length: 3,
  prefix: '():',
}

// console.log(
//   Array.from(obj, (elem, index) => {
//     console.log(elem, index)
//     return elem
//   }),
// )

console.log(
  Array.from(
    obj,
    function (elem, index) {
      //   console.log(this)
      //   console.log(elem, index)
      return `${this.prefix}${elem}`
    },
    obj,
  ),
)

console.log(`=====================================`)
console.log('Arrray.isArray')

const arr = Array.from(
  obj,
  function (elem, index) {
    return `${this.prefix}${elem}`
  },
  obj,
)
console.log(Array.isArray(arr))
console.log(Array.isArray('123154'))
console.log(Array.isArray(obj))

console.log(`=====================================`)
console.log('Array.of')

console.log(Array.of('Hello World'))
console.log(Array.of(1, 2, 3, 'Mama', 'Papa', 'Family'))
let arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
console.log(Array.of(arr1, arr2))
console.log(Array.of(...arr1, ...arr2))
console.log([...arr1, ...arr2])

console.log(`=====================================`)
console.log('.at')

console.log(arr1.at(1))
console.log(arr1.at(3))

console.log(`=====================================`)
console.log('push(), pop()')
// const arr3 = arr1
// arr1 = [...arr1, 10]
// console.log(arr1, arr3)

console.log(arr1.push(10, 20, 30, 40)) // виведе кілкість елементів у оновленному масиві
console.log(arr1)
console.log(arr1.pop()) // виведе значення видаленого елементу
console.log(arr1)

console.log(`=====================================`)
console.log('shift(), unshift()')

console.log(arr1.shift()) // виведе значення видаленого елементу
console.log(arr1)

console.log(arr1.unshift(0, 1)) // виведе кілкість елементів у оновленному масиві
console.log(arr1)

console.log(`=====================================`)
console.log('includes(searchElement, fromindex) true/false')
console.log(arr2)
console.log(arr2.includes(5))
console.log(arr2.includes(7))

console.log(`=====================================`)
console.log('indexOf(searchElement, fromindex) index/-1')

console.log(arr2.indexOf(4))
console.log(arr2.indexOf(5))
console.log(arr2.indexOf(6))
console.log(arr2.indexOf(7))
console.log(arr2.indexOf('World'))

console.log(`=====================================`)
console.log(
  'lastIndexOf(searchElement, fromindex) index/-1',
)

console.log(arr2.unshift(6))
console.log(arr2)
console.log(arr2.lastIndexOf(6))
console.log(arr2.lastIndexOf(7))

console.log(`=====================================`)
console.log('concat(value0, value1,... valueN)')
console.log(arr1)
console.log(arr2)

const arr3 = [...arr1, ...arr2]
console.log(arr3)
const arr4 = arr1.concat(...arr2)
console.log(arr4)

console.log(`=====================================`)
console.log('copyWithin(target, start, end)')

let arr5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr5)
arr5.copyWithin(2, 6, 9)
console.log(arr5)

console.log(`=====================================`)
console.log('fill(value, start, end)')
arr5.fill(2, 6, 9)
console.log(arr5)

console.log(`=====================================`)
console.log('.reverse()')
arr5.reverse()
console.log(arr5)

console.log(`=====================================`)
console.log(' .filter(callbackFn, thisArg)')

console.log(arr5)

// const filteredArr = arr5.filter((value, index, array) => {})

// const filteredArr = arr5.filter(
//   (value, index, array) => value % 2 === 0,
// )

const filterFn = (value, index, array) => value % 2 === 0

const filteredArr = arr5.filter(filterFn)

console.log(filteredArr)

console.log(`=====================================`)
console.log(' .sort(compareFn)')

console.log(arr5)
const sortedArr = arr5.sort()
console.log(sortedArr)

console.log([1, 2, 3, 40, 20, 30, 10, 4].sort())

const sortFn = (elem1, elem2) => elem1 - elem2
const sortFn2 = (elem1, elem2) => {
  return elem1 > elem2 ? 1 : -1
}

const sortFn3 = (elem1, elem2) => {
  if (elem1 === 10) {
    return 1
  }
  return elem1 > elem2 ? 1 : -1
}

const sortFn4 = (elem1, elem2) => {
  let result = elem1 - elem2
  if (elem1 % 2 === 0) {
    result += 10
  }

  return result
}

const sortFn5 = (elem1, elem2) => {
  if (elem1 % 2 === elem2 % 2) {
    return 0
  } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
    return 1
  } else {
    return -1
  }
}

console.log([1, 2, 3, 40, 20, 30, 10, 4].sort(sortFn))
console.log([20, 1, 2, 40, 30, 3, 10, 4].sort(sortFn2))
console.log([20, 1, 2, 40, 30, 3, 10, 4].sort(sortFn3))
console.log([20, 1, 2, 40, 30, 3, 10, 4].sort(sortFn4))
console.log(
  [20, 1, 2, 40, 30, 3, 10, 4, 5, 6, 7, 8, 9, 11].sort(
    sortFn5,
  ),
)

console.log(['arabic', 'Info', 'Zero', 'city'].sort())

console.log(`=====================================`)
console.log(' .every(callbackFn, thisArg), some(~~) ')
const arr6 = [-1, 5, 0, 15, -3, 7, -9, 11, -5, 1]
console.log(arr6)
console.log(arr6.every((elem, index, array) => elem >= 0))
console.log(arr6.some((elem, index, array) => elem >= 0))
