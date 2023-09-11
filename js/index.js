console.log('Lesson 17 Операції з масивами частина І')
console.log(`=====================================`)
console.log('Array.from(ArrayLike, (elem, index) => {})')

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

//lesson 18
console.log('')
console.log('Lesson 18 Операції з масивами частина ІІ')
console.log(`=====================================`)
console.log('find(callbackFn, thisArg)')

const userList = [
  { id: 1, name: 'Dima', age: 19 },
  { id: 2, name: 'Ivan', age: 35 },
  { id: 6412, name: 'Anton', age: 41 },
]
// let age = 0

// const userBigAge = userList.find((elem, index, array) => {
// 	if(elem.age > age) {
// age = elem.age
// }
// })

// const userBigAge = userList.find(
//   ({ age: userAge }, index, array) => {
//     if (userAge > age) {
//       age = userAge
//     }
//   },
// )

// console.log(age)

// const userBigAge2 = userList.sort((user1, user2) => {
//   return user2.age - user1.age
// })
// console.log(userBigAge2[0])

let minAge = 30
const userBigAge3 = userList.find(
  ({ age }) => age >= minAge,
)
console.log(userBigAge3)

console.log(`=====================================`)
console.log('findIndex(callbackFn, thisArg)')

console.log(userList)
const userBigAge4 = userList.findIndex(
  ({ age }) => age >= minAge,
)
console.log(userBigAge4)
console.log(`=====================================`)
console.log('findLast, findLastIndex(callbackFn, thisArg)')
const userBigAge5 = userList.findLast(
  ({ age }) => age >= minAge,
)
console.log(userBigAge5)

const userBigAge6 = userList.findLastIndex(
  ({ age }) => age >= minAge,
)
console.log(userBigAge6)

console.log(`=====================================`)
console.log('.keys(), .values(), .next ')

console.log(userList)
console.log(userList.keys())
console.log(userList.values())

const iter = userList.keys()
for (const elem of iter) {
  console.log(elem)
}

const iter2 = userList.values()
for (const elem of iter2) {
  console.log(elem)
}

const iter3 = userList.values()
console.log(iter3)
const result = iter3.next()
console.log(result)
const result2 = iter3.next()
console.log(result2)
const result3 = iter3.next()
console.log(result3)
const result4 = iter3.next()
console.log(result4)

console.log(`=====================================`)
console.log('join')

// console.log(userList.toString()) // [object Object],[object Object],[object Object]

const arr7 = ['Apple', 'Hotdog', 'Bread', 'Milk']
console.log(arr7.toString())
console.log(arr7.join(', '))
console.log(arr7.join('... '))
console.log(arr7.join(' -> '))
console.log(arr7.join(''))
console.log(arr7.join())

console.log(`=====================================`)
console.log(
  'splice(start, deleteCount, item1, item2, itemN)',
)
const arr8 = [...arr7]
const arr9 = [...arr8]
console.log(arr7)
const arrSmall = arr7.splice(1, 2, 'Tea', 'Cheese')
console.log(arrSmall)
console.log(arr7)
console.log(
  'щоб витягти значення без змін старого масиву (без видалення та без додавання нових елементів)',
)
console.log(arr8)
const arrSmall2 = [...arr8].splice(1, 2, 'Tea', 'Cheese')
console.log(arrSmall2)
console.log(arr8)
console.log(
  'Якщо не видаляти нічого (deleteCount = 0), а просто додати',
)
const arrSmall3 = arr9.splice(1, 0, ...userList)
console.log(arrSmall3) // масив буде пустим
console.log(arr9)

console.log(`=====================================`)
console.log('slice(start, end) не змінює вхідний масив')
console.log(arr8)
const arrSmall4 = arr8.slice(1, 3)
console.log(arrSmall4)
console.log(arr8)

console.log(`=====================================`)
console.log('reduce(callbackFn, initialValue)')
console.log(
  'callbackFn(accumulator, currentValue, currentIndex, array) => {}, initialValue',
)

console.log(userList)
const result5 = userList.reduce(
  (num, user, userIndex, array) => {
    // accumulator, currentValue, currentIndex, array
    console.log(num, user.age)
    return user.age > num ? user.age : num
  },
  0, // initValue
)
console.log(`${result5} - найбільший вік користувача`)

const userList2 = [
  { id: 1, name: 'Dima', age: 19, balance: 300 },
  { id: 2, name: 'Ivan', age: 35, balance: 0 },
  { id: 6412, name: 'Anton', age: 41, balance: 10200 },
]

const totalBalance = userList2.reduce(
  (num, user) => num + user.balance,
  0,
)
console.log(totalBalance)

console.log(`=====================================`)
console.log('reduceRight(callbackFn, initialValue)')
console.log(
  'callbackFn(accumulator, currentValue, currentIndex, array) => {}, initialValue',
)

// .reduceRight = .reverse().reduce

console.log(userList)
const result6 = userList.reduceRight(
  (num, user, userIndex, array) => {
    console.log(num, user.age)
    return user.age > num ? user.age : num
  },
  0,
)
console.log(`${result6} - найбільший вік користувача`)

console.log(`=====================================`)
console.log(
  'map(callbackFn, thisArg) - (не / ? /змінює)*** існуючий масив',
)

console.log(userList2)
// userList2.map((element, index, array) => {}, thisArg)
const result7 = userList2.map((user, index, array) => {
  return user.name
})
console.log(result7)
console.log(result7.join(', '))

const result8 = userList2.map((user, index, array) => {
  user.balanceLimit = 1000 - user.balance
  if (user.balanceLimit < 0) {
    user.balanceLimit = 0
  }
  return user
})
console.log(result8)
console.log(userList2)

console.log(`=====================================`)
console.log('flat(depth)')

const flatArray = [[[[[[[[[[[[[[100]]]]]]]]]]]]]]
console.log(flatArray.flat())
console.log(flatArray.flat(30))

const coordsArray = [
  [
    [
      [100, 200],
      [150, 200],
    ],
    [200, 205],
  ],
  [220, 230],
  [430, 455],
]
console.log(coordsArray.flat(0))
console.log(coordsArray.flat(1))
console.log(coordsArray.flat(2))
console.log(coordsArray.flat(3))

console.log(`=====================================`)
console.log('flatMap(callbackFn, thisArg)')

const someArray = [
  [100, 105],
  [200, 210],
  [150, 170],
  [430, 500],
]

// .flatMap = .map().flat()

console.log(someArray.map((el) => [...el, el[0] - el[1]]))
console.log(
  someArray.map((el) => [...el, el[0] - el[1]]).flat(),
)
console.log(
  someArray.flatMap((el) => [...el, el[0] - el[1]]),
)
console.log(someArray) // *** .map не змінило існуючий масив
console.log('')

const someArray2 = [
  [
    [100, 105],
    [200, 210],
  ],
  [
    [150, 170],
    [430, 500],
  ],
]

const result9 = someArray2.flatMap((el) => {
  //   console.log(el)
  return el.map((it) => {
    // console.log(it)
    return it[0] - it[1]
  })
})
// .flat()
console.log(result9)
console.log(someArray2)

console.log(`=====================================`)
console.log('forEach(callbackFn, thisArg)')

console.log(result9)

result9.forEach((elem, index, array) => {
  console.log(elem)
})

console.log('')
console.log(`Lesson 19 Операції з об'єктами`)
console.log(`=====================================`)
console.log(
  'Object.assign(targetObj, sourseObj1, ...., sourseObjN)',
)

const article = {
  info: {
    title: 'My article',
    description: 'This is info about article',
  },
  id: 105423,

  categoryId: 1423,
  likeAmount: 442,
}

articlePhoto = {
  photoUrl: '...url',
  photoId: 100,
  photoType: 'big',
}

articleCommentsList = {
  list: [
    { id: 4323, user: 'Ivan', message: 'Rhenbq rjyntyn' },
  ],
}

Object.assign(article, articlePhoto, articleCommentsList)
console.log(article)

console.log(`=====================================`)
console.log('Object.entries(obj)')

console.log(Object.entries(article.info))

const ARTICLE_FIELD = {
  title: 'ID статті',
  description: 'Заголовок статті',
}

const fromList = Object.entries(article.info)
const fromListLayout = fromList.map(([key, value]) => {
  //   return `${ARTICLE_FIELD[key]} : ${value}`
  //   return [ARTICLE_FIELD[key], value]
  return `<p> <strong> ${ARTICLE_FIELD[key]} </strong> <br> <span> ${value} </span> </p>`
})
console.log(fromListLayout)

console.log(`=====================================`)
console.log('Object.fromEntries(value)')

const objArr = [
  ['id', 2243547],
  ['title', 'My product name'],
  ['price', 1230],
]

console.log(objArr)
console.log(Object.fromEntries(objArr))

console.log(`=====================================`)
console.log('.hasOwnProperty(prop)')

console.log(article)
console.log(article.hasOwnProperty('id'))
console.log(article.hasOwnProperty('book'))

console.log(`=====================================`)
console.log(
  '.propertyIsEnumerable(prop)    cat it do for in?',
)

console.log(article.propertyIsEnumerable('id'))
console.log(article.propertyIsEnumerable('list'))
console.log(article.propertyIsEnumerable('ihasOwnProperty'))

console.log(`=====================================`)
console.log('Object.freeze(obj)')

console.log(ARTICLE_FIELD)
ARTICLE_FIELD.property = 'hello'
console.log(ARTICLE_FIELD)

delete ARTICLE_FIELD.property
Object.freeze(ARTICLE_FIELD)
ARTICLE_FIELD.property2 = 'Afer freeze'
delete ARTICLE_FIELD.title
console.log(ARTICLE_FIELD)

console.log(`=====================================`)
console.log('Object.isFrozen(obj)')

console.log(Object.isFrozen(ARTICLE_FIELD))
console.log(Object.isFrozen(article))

console.log(`=====================================`)
console.log('Object.preventExtensions(obj)')

console.log(article)
Object.preventExtensions(article)
article.property = 'Add New Property' //can`t
article.id = 6576465465434 // can if exist
console.log(article)
delete article.id // can
console.log(article)

console.log(`=====================================`)
console.log('Object.isExtensible(obj)')

console.log(Object.isExtensible(article))
console.log(Object.isExtensible(articlePhoto))

console.log(`=====================================`)
console.log('Object.seal(obj) rename only existing')

console.log(articlePhoto)
Object.seal(articlePhoto)
articlePhoto.property = 'New'
articlePhoto.photoId = 101
delete articlePhoto.photoId
console.log(articlePhoto)

console.log(`=====================================`)
console.log('Object.isSealed(obj)')

console.log(Object.isSealed(articlePhoto))
console.log(Object.isSealed(ARTICLE_FIELD))
console.log(Object.isSealed(article))
console.log(Object.isExtensible(articlePhoto))

console.log(`=====================================`)
console.log('Object.keys(obj)')
console.log(article)
console.log(Object.keys(article))

console.log(`=====================================`)
console.log('Object.values(obj)')

console.log(Object.values(article))
