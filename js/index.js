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

console.log('')
console.log('Lesson 20 Множина Set')
console.log(`=====================================`)
console.log('new Set([value1, value2, ...., valueN])')

const set = new Set(['123', 123, '123', null])
console.log(set)
const userIdList = new Set([
  76432, 82349898, 8374987, 723424, 23445,
])
console.log(userIdList)

console.log(`=====================================`)
console.log('for, for of, forEach')

for (const value of userIdList) {
  console.log(value)
}
console.log(' .forEach(callbackFn, thisArg)')
userIdList.forEach((value, key, set) => console.log(value))

console.log(`=====================================`)
console.log('.size')

console.log(userIdList.size)

console.log(`=====================================`)
console.log('.add(value)')

console.log(userIdList)
console.log(userIdList.size)

userIdList.add(23445) // вже існує, не додасть новий
console.log(userIdList)
console.log(userIdList.size)

userIdList.add(64325823)
console.log(userIdList)
console.log(userIdList.size)

console.log(`=====================================`)
console.log('.delete(value)')

userIdList.delete(64325823)
console.log(userIdList)
console.log(userIdList.size)

console.log(`=====================================`)
console.log('.has(value)')

console.log(userIdList)
console.log(userIdList.size)

console.log(userIdList.has(64325823))
console.log(userIdList.has(23445))

const result1 = userIdList.delete(23445)
const result10 = userIdList.delete('23445')

console.log(result1, result10)

console.log(userIdList)
console.log(userIdList.size)

console.log(`=====================================`)
console.log('.clear()')

console.log(set)
set.clear()
console.log(set)

console.log(`=====================================`)
console.log('.keys()')

console.log(userIdList)
const key = userIdList.keys()
console.log(key)
console.log(key.next().value)
console.log(key.next().value)
console.log(key.next().value)
console.log(key.next().value)
console.log(key.next().value)

console.log(`=====================================`)
console.log('.values()')

console.log(userIdList)
const iterator = userIdList.values()
console.log(iterator)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

const valueList = userIdList.values()
const arrayList = Array.from(valueList)
console.log(arrayList)

console.log(`=====================================`)
console.log('.entries()')

console.log(userIdList)
const entry = userIdList.entries()
console.log(entry)
//

const objOfEntry = Object.fromEntries(entry) // після першого звертання до ітератора він зникає
console.log(objOfEntry)

// console.log(entry.next().value) //  вже undefined, бо вже був виклик всього entry
// console.log(entry.next().value)
// console.log(entry.next().value)
// console.log(entry.next().value)
// console.log(entry.next().value)

console.log(`=====================================`)
console.log('Приклади використання множини')
console.log('Приклад 1')

const arr10 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
const set10 = new Set(arr10)
const arr11 = [...set10] // деструктуризація множини
const arr12 = Array.from(set10.values()) // пряме перетворення
const arr13 = Array.from(set10) // скорочений запис прямого перетворення
console.log(arr11)
console.log(arr12)
console.log(arr13)

console.log('Приклад 2')

const categoryList = new Set()

function addCategory(category) {
  if (categoryList.has(category)) {
    console.log('Ця категорія вже є')
    return false
  }
  categoryList.add(category)
  return true
}
console.log(addCategory('Name'))
console.log(addCategory('Name'))
console.log(addCategory('Adress'))

console.log('Приклад 3')

const students = [
  { id: 1, name: 'John', course: 'Math' },
  { id: 2, name: 'Jane', course: 'Science' },
  { id: 3, name: 'Adam', course: 'Math' },
  { id: 4, name: 'Eve', course: 'English' },
  { id: 5, name: 'Kate', course: 'Science' },
]

// const course = students.map((student) => student.course)
// console.log(course)
// const courseList = new Set(course)
const courseList = new Set(
  students.map((student) => student.course),
)
console.log(Array.from(courseList))

console.log('')
console.log('Lesson 21 Словник Map')
console.log(`=====================================`)
console.log(`new Map ([  ['key', 'value']  ])`)

const map = new Map()
console.log(map)
const dictionary = new Map([
  ['color', 'red'],
  ['size', '32px'],
])
console.log(dictionary)

const obj3 = {
  color: 'red',
  size: 32 + 'px',
}
const button2 = new Map(Object.entries(obj3))
console.log(button2)

const set3 = new Set(['red', '32px'])
const button3 = new Map(set3.entries())
console.log(button3)

const button4 = new Map(
  Object.entries(Object.fromEntries(set3.entries())),
)
console.log(button4)

console.log(`=====================================`)
console.log(`.entries()`)

console.log(button2.entries())

console.log(`=====================================`)
console.log(`.keys() values()`)

const button = new Map([
  ['color', 'red'],
  ['size', '32px'],
])
const set2 = new Set(button)
console.log(set2)
const set4 = new Set(button.keys())
console.log(set4)
const set5 = new Set(button.values())
console.log(set5)

console.log(`=====================================`)
console.log(`for (const [key, value]) of map`)

const button5 = new Map([
  ['color', 'red'],
  ['size', '32px'],
])
for (const [key, value] of button5) {
  console.log(key, value)
}
for (const elem of button5) {
  console.log(elem)
}
for (const [key] of button5) {
  console.log(key)
}
for (const [key, value] of button5) {
  console.log(value)
}

console.log(`=====================================`)
console.log(`for (const [key, value]) in ....`)

for (const value in Object.fromEntries(button5.entries())) {
  console.log(value)
}

console.log(`=====================================`)
console.log(`.forEach(callbackFn, thisArg)`)

button5.forEach((value, key, map) =>
  console.log(value, key, map),
)

console.log(`=====================================`)
console.log(`.size)`)

console.log(button5.size)

console.log(`=====================================`)
console.log(`.set(key, value)  .get(key)`)

button5.set('weight', 600)
console.log(button5)
console.log(button5.get('weight'))

console.log(`=====================================`)
console.log(`.delete(key)`)

console.log(button5.delete('weight'))
console.log(button5.delete('weight'))
console.log(button5)

console.log(`=====================================`)
console.log(`.hay(key)`)

console.log(button5.has('weight'))
console.log(button5.has('color'))

console.log(`=====================================`)
console.log(`.clear()`)

button5.clear()
console.log(button5)

console.log(`=====================================`)
console.log(`Приклади використання словників`)
console.log(`Приклад 1`)

const LANG_LIST = {
  UA: 'uk-UA',
  EU: 'en-US',
}

const activeLang = LANG_LIST.EU

const product = {
  price: 100,
  amount: 3,
  info: new Map([
    [
      LANG_LIST.UA,
      {
        title: 'Заголовок',
        info: 'Інформаця',
      },
    ],
    [
      LANG_LIST.EU,
      {
        title: 'Title',
        info: 'Info',
      },
    ],
  ]),
}
console.log(product)

const info = product.info.get(activeLang)
console.log(info)
console.log(product.info.has(activeLang))

console.log(`Приклад 2`)

const user1 = {
  id: 1234,
  name: 'Ivan',
}

const user2 = {
  id: 4321,
  name: 'Anton',
}

const product1 = {
  id: 54232,
  title: 'Mobile phone',
}

const product2 = {
  id: 51234,
  title: 'Apple',
}

const userProduct = new Map()
userProduct.set(user1, product1).set(user2, product2)
console.log(userProduct)
console.log(userProduct.has(user1))
console.log(userProduct.get(user1))

const productClientList = new Map()
productClientList.set(product1, new Set())
// const productClientList = new Map([[product1, new Set()]])
console.log(productClientList)

productClientList.set(
  product1,
  productClientList.get(product1).add(user1),
),
  console.log(productClientList)

productClientList.set(
  product1,
  productClientList.get(product1).add(user2),
),
  console.log(productClientList)

const has = productClientList.get(product1).has(user1)
console.log(has)

console.log(``)
console.log('Lesson 21 JSON та URL')
console.log(`=====================================`)
console.log(`JSON.stringify(value, replacer, space)`)

const roleField = 'roleName'
const data = {
  id: 1234,
  login: 'user86513',
  password: '12351erq@',
  [roleField]: 'Admin',
  go() {
    // функції нема у форматі JSON, проускається при перетворенні
    console.log('GO')
  },
  test1: {
    test2: 78545,
  },
}

console.log(data.toString())
const jsonData = JSON.stringify(data)
console.log(jsonData)

const jsonData1 = JSON.stringify(data, (key, value) => {
  //   console.log(key, value)
  if (key === roleField) {
    return null
  }
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  if (typeof value === 'number') {
    return value * 10
  }
  return value
})
console.log(jsonData1)

const jsonData2 = JSON.stringify(
  data,
  (key, value) => {
    //   console.log(key, value)
    if (key === roleField) {
      return null
    }
    if (typeof value === 'string') {
      return value.toUpperCase()
    }
    if (typeof value === 'number') {
      return value * 10
    }
    return value
  },
  4,
)
console.log(jsonData2)

console.log(`=====================================`)
console.log(`JSON.parse(text, reviver)`)

console.log(jsonData)
const parseData = JSON.parse(jsonData)
console.log(parseData)

const parseData2 = JSON.parse(jsonData2, (key, value) => {
  //   console.log(key, value)
  if (key === roleField) {
    return 'Admin'
  }
  if (typeof value === 'string') {
    return value.toLowerCase()
  }
  if (typeof value === 'number') {
    return value / 10
  }
  return value
})
console.log(parseData2)

console.log(`=====================================`)
console.log(`URL.  new URL(url, base)`)

const url = new URL('/about', 'https://balkantravel.me')
const url1 = new URL(
  'https://admin:434536475@balkantravel.me:4000/about?q=hello&q=helloWorld&oq=hello&aqs=chrome..69i57j46i433i512j46i131i433i512l5j0i131i433i512j0i512.2977j0j7&sourceid=chrome&ie=UTF-8#top',
)
const url2 = new URL('https://balkantravel.me/about')

console.log(url)
console.log(url2)

console.log(url === url2)

console.log(url1)

console.log(`=====================================`)
console.log(`.href`)
console.log(url1.href)
console.log(`=====================================`)
console.log(`.ptotocol`)
console.log(url1.protocol)
console.log(`=====================================`)
console.log(`.pathname`)
console.log(url1.pathname)
console.log(`=====================================`)
console.log(`.origin`)
console.log(url1.origin)
console.log(`=====================================`)
console.log(`.host`)
console.log(url1.host)
console.log(`=====================================`)
console.log(`.hostname`)
console.log(url1.hostname)
console.log(`=====================================`)
console.log(`.port`)
console.log(url1.port)
console.log(`=====================================`)
console.log(`.hash`)
console.log(url1.hash)
console.log(url1.hash.slice(1))
console.log(`=====================================`)
console.log(`.password`)
console.log(url1.password)
console.log(`=====================================`)
console.log(`.username`)
console.log(url1.username)

console.log(`=====================================`)
console.log(`.search`)
console.log(url1.search)
console.log(`=====================================`)
console.log(`.searchParams`)
console.log(url1.searchParams)
console.log(url1.searchParams.has('q'))
console.log(url1.searchParams.append('name', 'google'))
console.log(url1.searchParams)
console.log(url1.searchParams.delete('name'))
console.log(url1.searchParams)
console.log(url1.searchParams.get('q'))
console.log(url1.searchParams.getAll('q'))
// url1.searchParams.sort()
// console.log(url1.searchParams)

const url3 = new URL('https://www.google.com/search')
url3.searchParams.append('q', 'dog photo')
console.log(url3.href)

console.log('')
console.log('Lesson 23 Датат та час Date')
console.log(`=====================================`)
console.log(`new Date(arg)`)

const date1 = new Date()
console.log(date1) // time local + gmt 0

console.log(`=====================================`)
console.log(`toISOString()`)

const dateString = date1.toISOString()
console.log(dateString) // string in gmt 0
console.log(new Date(dateString))

console.log(`=====================================`)
console.log(`Date.parse()`)

const date2 = Date.parse(dateString)
console.log(date2) //in ms since 01.01.1970 00:00:00 =

const date3 = Date.parse(dateString) + 1000 * 60 * 5 // додаєм 5хв до часу, що зараз (new Date())
console.log(date2)
console.log(date3)

console.log(`=====================================`)
console.log(
  `.toString(), .toUTCString(), .toTimeString(), .toDateString()`,
)

console.log(date1) // 2023-09-17T12:07:23.527Z
console.log(date1.toISOString()) // 2023-09-17T12:07:23.527Z
console.log(date1.toString()) //Sun Sep 17 2023 15:07:23 GMT+0300 (за східноєвропейським літнім часом)
console.log(date1.toUTCString()) //Sun, 17 Sep 2023 12:07:23 GMT
console.log(date1.toTimeString()) //15:07:23 GMT+0300 (за східноєвропейським літнім часом)
console.log(date1.toDateString()) //Sun Sep 17 2023

console.log(`=====================================`)
console.log(`.getTimezoneOffset() / -60`)

let zone = date1.getTimezoneOffset() / -60
console.log(zone)

console.log(`=====================================`)
console.log(`Date.now()`)
const user = -3
function getUserTimeZone(timezone) {
  let date = Date.now() // in millieconds since 01.01.1970 00:00:00
  const myTimezone = new Date().getTimezoneOffset() / -60
  //   console.log(myTimezone)
  date -= 1000 * 60 * 60 * myTimezone
  date += 1000 * 60 * 60 * timezone
  return date
}
// console.log(getUserTimeZone(user))
// console.log(new Date(1694953618664).toString())
console.log(new Date(getUserTimeZone(user)).toString()) // час user
console.log(new Date().toUTCString()) // час  GMT 0
console.log(new Date().toString()) // мій час

console.log(`=====================================`)

function getUserTime(timezone) {
  let date = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0)) // створюємо конкретну датут та час у форматі UTC
  console.log(date)
  console.log(date.toString()) // створена дата та час, але час з поправкою на мій часовий пояс Mon Jun 26 2023 15:30:00 GMT+0300 (за східноєвропейським літнім часом)
  console.log(date.toUTCString()) // створена дата у UTC з GMT 0 (час збігається зі створенним у UTC)
  console.log(date.getTime()) // 1687782600000
  console.log(new Date(1687782600000).toUTCString()) // зворотнє перетворення

  console.log('year', date.getFullYear())
  //   date.setFullYear(2020)
  //   console.log(date.getFullYear())

  console.log('month', date.getMonth())
  //   date.setMonth(0)
  //   console.log('month', date.getMonth())

  console.log('Date', date.getDate())
  //   date.setDate(31)						//Jun has 30 days
  //   console.log('Date', date.getDate()) // 1st Jul

  console.log('Day', date.getDay()) // 0-6 1=tuesday

  console.log('minutes', date.getMinutes())
  //   date.setMinutes(59)
  //   console.log('minutes', date.getMinutes())

  console.log('seconds', date.getSeconds())
  //   date.setSeconds(59)
  //   console.log('seconds', date.getseconds())

  console.log('Milliseconds', date.getMilliseconds())
  //   date.setMilliseconds(59)
  //   console.log('Milliseconds', date.getMilliseconds()) 0-999

  //   console.log(
  //     new Date(
  //       date.setTime(
  //         date.getTime() + 1000 * 60 * 60 * timezone,
  //       ),
  //     ).toUTCString(),
  //   ) // час користувача за UTC враховуючи його часовий пояс

  console.log('Hours of my timezone', date.getHours()) //години створенного часу з мого часового поясу
  console.log('UTC Hours', date.getUTCHours()) //години з UTC

  date.setHours(date.getUTCHours() + timezone)
  return date
}
const UserDate = getUserTime(user)
console.log(UserDate)
console.log(UserDate.toString())

console.log(``)
console.log('Lesson 24 Math')
console.log(`=====================================`)
console.log(`Math.PI`)
console.log(Math.PI)

console.log(`=====================================`)
console.log(`Math.max() Math.min()`)

const a = 5
const b = 10
const c = -5
const d = 0
const e = -0
const text = 'text'
const arr14 = [11, 14, 13]
console.log(Math.max(a, b, c, ...arr14))
console.log(Math.min(a, b, c, ...arr14))

console.log(`=====================================`)
console.log(`Math.sign(x)`)

console.log(Math.sign(a))
console.log(Math.sign(c))
console.log(Math.sign(text))
console.log(Math.sign(d))
console.log(Math.sign(e))

console.log(`=====================================`)
console.log(`Math.pow(base, exponent)`)

console.log(Math.pow(3, 2))
console.log(Math.pow(3, 3))
console.log(Math.pow(3, 4))

console.log(Math.pow(a, 3))

console.log(`=====================================`)
console.log(`Math.sqrt(x)`)

console.log(Math.sqrt(25))

console.log(`=====================================`)
console.log(
  `Math.floor(x), Math.ceil(x), Math.round(x), Math.trunc(x) `,
)
console.log(
  `Math.floor(x) - округлення до найменшого цілого`,
)
console.log(Math.floor(-5.6))
console.log(Math.floor(-5.5))
console.log(Math.floor(-5.4))
console.log(Math.floor(-5))
console.log(Math.floor(-0))
console.log(Math.floor(5))
console.log(Math.floor(5.4))
console.log(Math.floor(5.5))
console.log(Math.floor(5.6))

console.log(
  `Math.ceil(x) - округлення до найбільшого цілого`,
)
console.log(Math.ceil(-5.6))
console.log(Math.ceil(-5.5))
console.log(Math.ceil(-5.4))
console.log(Math.ceil(-5))
console.log(Math.ceil(-0))
console.log(Math.ceil(5))
console.log(Math.ceil(5.4))
console.log(Math.ceil(5.5))
console.log(Math.ceil(5.6))

console.log(
  `Math.round(x) - округлення до цілого стандартне (0.5 - у більшу)`,
)
console.log(Math.round(-5.6))
console.log(Math.round(-5.5))
console.log(Math.round(-5.4))
console.log(Math.round(-5))
console.log(Math.round(-0))
console.log(Math.round(5))
console.log(Math.round(5.4))
console.log(Math.round(5.5))
console.log(Math.round(5.6))

console.log(
  `Math.trunc(x) - відкидає десяткові числа (після крапки)`,
)
console.log(Math.trunc(-5.6))
console.log(Math.trunc(-5.5))
console.log(Math.trunc(-5.4))
console.log(Math.trunc(-5))
console.log(Math.trunc(-0))
console.log(Math.trunc(5))
console.log(Math.trunc(5.4))
console.log(Math.trunc(5.5))
console.log(Math.trunc(5.6))

console.log(`=====================================`)
console.log(`Math.random() від 0(включно) до 1(виключно)`)

console.log(Math.random())
console.log(Math.round(Math.random() * 100)) // 0- 100

const random = Math.trunc(Math.random() * 10) + 1 //від 1 до 10
console.log(random)

console.log(`=====================================`)
console.log(`Math.fround(x)`)

const f = 0.1
const g = 0.2
const h = 0.3

console.log(0.1 + 0.2)
console.log(f + g === h)
console.log(Math.fround(f + g) === Math.fround(h))
console.log(f + g)
console.log(Math.fround(f + g))
console.log(h)
console.log(Math.fround(h))

console.log(``)
console.log('Lesson 25 Console')
console.log(`=====================================`)
console.log(
  `.error() .exception() .info() .warn() .log() .debug()`,
)

console.log('see it in browser!')
console.error(`Error! Червоним у консолі браузера`)
console.exception //() Взагалі незрозуміла річ. ніде не працює
console.info(`Info`)
console.warn(`Warn! Жовтим у консолі браузера`)
console.log(`Log`)
console.debug(`Debug`)

console.log(`=====================================`)
console.log(
  `.group(label) .groupCollapsed(label) .groupEnd()`,
)

console.group('Group1')
console.log('Це повідомлення у групі')
console.groupEnd()
console.groupCollapsed('group2')
console.log('Це повідомлення у групі')
console.groupEnd()

console.log(`=====================================`)
console.log(`.time(label) .timeLog(label) .timeEnd(label)`)

const counterLabel = 'Timer'
console.time(counterLabel)
console.log(
  'Код, час виконання якого вимірюється таймерром',
)
const time = new Date()
console.log('Додатковий таймер')
console.timeLog(counterLabel)
console.log(time.toUTCString())
console.log('Остаточний таймер')
console.timeEnd(counterLabel)

console.log(`=====================================`)
console.log(`.count(label) .countReset(label)`)

const counter = 'лічильник'
console.log('Код кількість виконання якого рахується')
let a1 = 0
for (i = 0; i <= 3; i++) {
  console.count(counter)
  a1 = new Date()
}
console.log(a1)
console.countReset(counter)

console.log(`=====================================`)
console.log('Стек виклику')
console.log(`.trace(value1, value2, ...valueN)`)

const test1 = () => console.trace('Hello')
const test2 = () => test1()
const test3 = () => test2()
test3()

console.log(`=====================================`)
console.log(`.table(data, columns)`)

console.log(data)
console.table(data)
const data1 = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Alice', age: 30, city: 'London' },
]
console.log(data1)
console.table(data1, ['name', 'city'])

console.log(`=====================================`)
console.log(`.assert(assertion, value1, value2, ...valueN)`)

const a2 = 5
const b2 = 10
if (a2 > b2) {
  //.......
} else {
  console.warn('Умова не виконалася!')
}

const a3 = 5
const b3 = 10
const result11 = a > b
console.assert(result11, 'Умова не виконалася!')

console.log(`=====================================`)
console.log(`.clear()`)

// console.clear()  //відчищає вивід консолі

console.log(`=====================================`)
console.log('Стилізація')
console.log(`%с`)

console.log(
  '%cСлава Україні',
  'font-size: 50px; color: blue; background: yellow',
)

console.log('')
console.log('Lesson 26 RegExp')
console.log(`=====================================`)
console.log(`https://regex101.com/`)

console.log('')
console.log('Lesson 27 RegExp')
console.log(`=====================================`)
console.log(
  `new RegExp (pattern, flags), RegExp(pattern, flags)`,
)
console.log(`/pattern/flags`)

const regexp = /test/gims
console.log(regexp)

const regexp1 = RegExp('test', 'g')
console.log(regexp1)

console.log(`=====================================`)
console.log('.flags')

console.log(regexp.flags)

console.log(`=====================================`)
console.log('.global')

console.log(regexp.global)

console.log(`=====================================`)
console.log('.multiline')

console.log(regexp.multiline)
console.log(regexp1.multiline)

console.log(`=====================================`)
console.log('.dotAll')

console.log(regexp.dotAll)
console.log(regexp1.dotAll)

console.log(`=====================================`)
console.log('.ignoreCase')

console.log(regexp.ignoreCase)
console.log(regexp1.ignoreCase)

console.log(`=====================================`)
console.log('.exec(str)')

const result12 = regexp.exec('This is test')
console.log(result12)

const regexp2 = /(?<group1>.e)(?<group2>st)/gims
const result13 = regexp2.exec('This is test and est')
console.log(result13)
console.log(result13[0])
console.log(result13[1])
console.log(result13[2])

console.log(`=====================================`)
console.log('.groups')
console.log(result13.groups)

console.log(`=====================================`)
console.log('.exec .test')
// console.log(regexp2.exec('This is test and est')) // повторний виклик .exec із флагом global(g) продовжуе шукати індекс наступного збігу
// console.log(regexp2.exec('This is test and est')) // null, коли закінчились збіги

// console.log(regexp2.test('This is test and est')) // true поки знаходить збіги
// console.log(regexp2.test('This is test and est')) // null, коли закінчились збіги

console.log(`=====================================`)
console.log('.source')

console.log(regexp2.source)

console.log(`=====================================`)
console.log('.lastIndex')

regexp2.lastIndex = 9
console.log(regexp2.exec('This is test and est')) // пропусте індекс 8 та знайде 16й
console.log(regexp2.exec('This is test and est')) // після 16 буе null

console.log(`=====================================`)
console.log(
  'replace(pattern, replacement) replaceAll(pattern, replacement)',
)

const teststr = 'This is test and est'
console.log(teststr.replace(regexp2, '###'))

console.log(`=====================================`)
console.log('.search()')

console.log(teststr.search(regexp2)) // індекс першого знайденого

console.log(`=====================================`)
console.log('.match(), matchAll()')

console.log(teststr.match(regexp2))
console.log(teststr.matchAll(regexp2)) // iterator
const result14 = teststr.matchAll(regexp2)
console.log(result14.next())
console.log(result14.next())
console.log(result14.next())

console.log('')
console.log('Lesson 28 Errors')
console.log(`=====================================`)
console.log('Обробка помилок try catch finaly')

try {
  const aa = 10
  aa = 5
  console.log(
    `Місце у блоці try після винекнення помилки вже не виконується`,
  )
  console.log('try block - no errors')
} catch (err) {
  console.log('Сталася помилка у блоці try')
  console.log(err)
} finally {
  console.log(
    `Обов'язково спрацює після перевірки помилки, не залежно від того чи виникла помилка.`,
    `частіше за все вкористовують для логування виконання обробки помилки`,
  )
}

console.log('Продовжуємо працювати')

console.log(`=====================================`)
console.log(
  'Error(message, options). options - stack, cause.  throw',
)

function getUserData(userId) {
  try {
    const a = 10
    a = 5
    // ...робить запит до БД
  } catch (err) {
    // - помилка про те, що данні з сервера не можуть бути отримані
    throw new Error(
      `Помилка. Неможливо отримати данні користувача ${userId}`,
      {
        cause: err,
      },
    )
  }
}

function updateUserData(userId) {
  try {
    const data = getUserData(userId)
    data.name = 'Ivan'
    //...
  } catch (err) {
    const newError1 = new Error(
      `Помилка. Неможливо оновити данні користувача ${userId}`,
      {
        cause: err,
      },
    )
    console.log(newError1)
    //   console.log(newError1.message)
  }
}

updateUserData('Микола')

console.log(`=====================================`)
console.log('.message .name')

const ERROR_ID_LIST = {
  NOT_NUMBER: 'Помилка!',
}

function sumNum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    const error = new TypeError(
      'Всі аргументи повинні бути числами',
      {
        cause: 'Бо так треба',
      },
    )
    error.name = ERROR_ID_LIST.NOT_NUMBER
    throw error
  }
  return a + b
}

try {
  sumNum(1, 'abc')
} catch (err) {
  console.log(err.name) // Помилка!
  console.log(err.message) // Всі аргументи повинні бути числами
  console.log(err.cause) // Бо так треба
  console.log(err.stack)
  console.log(err.toString()) // .name+.message
  //   if (err.name === ERROR_ID_LIST.NOT_NUMBER) {
  //     console.log(sumNum(10, 0))
  //   }
}

console.log('')
console.log('Lesson 29 Prototype ООП')
console.log(`=====================================`)
console.log('Object.create(proto, properties)')
console.log('')

let Animal = {
  name: `Тваринка`,
  voice: 'Звук',
  say() {
    console.log(`${this.name} каже ${this.voice}`)
  },
}

const dog = { ...Animal, name: 'Бобік' }
// dog.name = 'Бобік'
dog.voice = 'Гав'

dog.say()
console.log(dog)

Animal.go = function () {
  console.log(`${this.name} біжить`)
}
// dog.go() // буде помилка, бо нема такої функції у dog

const cat = Object.create(Animal)
cat.name = 'Мурзік'
cat.voice = `М'яв`

cat.say()
console.log(cat)
cat.go()

console.log(`=====================================`)
console.log(`obj.__proto__  = Object.getPrototypeOf(obj)`)

console.log(cat.__proto__)
console.log(Object.getPrototypeOf(cat))

console.log(`=====================================`)
console.log(`.isPrototypeOf(obj)`)

console.log(Object.getPrototypeOf(cat) === Animal)
console.log(Animal.isPrototypeOf(cat))

console.log(`=====================================`)
console.log(`Object.setPrototypeOf(obj, prototype)`)

Object.setPrototypeOf(cat, null) // Видаляємо прототип у cat
console.log(Object.getPrototypeOf(cat))
console.log(Object.getPrototypeOf(dog))

Object.setPrototypeOf(cat, { asd: '1243' })
console.log(Object.getPrototypeOf(cat))

console.log(`=====================================`)
console.log(`Інкапсуляція - приховування властивостей`)
console.log(
  `Object.defineProperty(obj, prop, descriptor)  Object.defineProperties(obj, props)`,
)

const duck = Object.create(Animal)
duck.name = 'Утя'
duck.voice = `Кря`

duck.say()
console.log(duck)

Object.defineProperty(duck, '_age', {
  // Приховування _age
  value: 7,
  writable: true,
})

Object.defineProperty(duck, 'age', {
  set(value) {
    this._age = value * 2
  },
  get() {
    return `${this._age} років`
  },
})

console.log(duck._age)

console.log(duck.age)
duck.age = 3
console.log(duck.age)
duck.age = 5
console.log(duck.age)
// delete duck.age
// console.log(duck.age)

console.log(duck._age)

console.log(duck)
// delete duck._age
console.log(Object.keys(duck))

Object.defineProperty(duck, 'location', {
  value: 'Ukraine',
  writable: true, // дозволяє змінювати
  //   configurable: true, // дозволяє видаляти та змінюати
  enumerable: true, // чи буде перераховуватись при ітерації
})

console.log(duck.location)
delete duck.location
console.log(duck.location)

console.log(Object.keys(duck))

console.log(`=====================================`)
console.log(
  `Object.getOwnPropertyDescriptor(obj, prop)  Object.getOwnPropertyDescriptors(obj)`,
)

Object.defineProperty(duck, '_space', {
  // Приховування _space
  value: 1,
  writable: true,
})

Object.defineProperty(duck, 'space', {
  set(value) {
    this._space = value * 4
  },
  get() {
    return `${this._space}px`
  },
})
console.log(duck.space)
duck.space = 4
console.log(duck.space)

console.log(Object.getOwnPropertyDescriptor(duck, 'space'))
console.log(Object.getOwnPropertyDescriptor(duck, '_space'))

console.log(`=====================================`)
console.log(`.hasOwnProperty(prop)`)

console.log(Object.keys(duck))
console.log(duck.hasOwnProperty('space'))
console.log(duck.hasOwnProperty('_space'))

console.log(`=====================================`)
console.log(
  `Поліморфізм - у різних об'єктів однакові методи, але їх дії різні`,
)
console.log(``)

const Tag = {
  render(value) {
    return `<>${value}<>`
  },
}

const Button = Object.create(Tag)
Button.render = function (value = '') {
  return `<button style="${this.style}">${value}</button>`
}

const mainButton = Object.create(Button, {
  style: {
    value: 'background: red',
    writable: true,
  },
})

console.log(mainButton.render('Кнопка'))

const Input = Object.create(Tag)
Input.render = function () {
  return `<input placeholder="${this.placeholder}" style="${this.style}"/>`
}

const loginInput = Object.create(Input, {
  style: {
    value: 'background: grey; border: 1px solid red',
    writable: true,
  },
  placeholder: {
    value: 'input your login (email or tel)',
  },
})

console.log(loginInput.render())

const serverRequest = {
  data: null,
  getData() {
    ////....
  },
  render() {
    this.data = this.getData()

    return `.......`
  },
}

console.log(`=====================================`)
console.log(
  `Абстракція - загалні властивості та методи об'єктів`,
)

const Page = {
  components: [],
  path: '/.../.../ ',
  render() {
    //....
  },
}

console.log('')
console.log('Lesson 30 Функція-конструктор')
console.log(`=====================================`)
console.log('Синтетеичний цукор)')
console.log('')

const User = {
  login: null,
  password: null,
  role: null,
  age: null,
  //...
  //...
  //...
  //...
}

// Для короткого запису робимо функцію
function createUser({ login, password, isAdmin }) {
  return Object.create(User, {
    login: {
      value: login,
    },
    password: {
      value: password,
    },
    role: {
      value: this.isAdmin ? 'Admin' : 'User',
    },
    verify: {
      value(password) {
        return this.password === password
      },
    },
  })
}

const rgisterData = {
  login: 'Ivan',
  password: '123qwe342',
}

// короткий запис
const user3 = createUser(rgisterData)
// або:
// const user3 = Object.create(User, {
//   login: {
//     value: rgisterData.login,
//   },
//   password: {
//     value: rgisterData.password,
//   },
//   verify: {
//     value(password) {
//       return this.password === password
//     },
//   },
// })

console.log(user3.login)
console.log(user3.verify('iydiclxj'))

const adminData = {
  login: 'Artem',
  password: '123qwe300000042',
  isAdmin: true,
  age: 50,
}

// короткий запис
const admin = createUser(adminData)
// або:
// const adminUser3 = Object.create(User, {
//   login: {
//     value: adminData.login,
//   },
//   password: {
//     value: adminData.password,
//   },
//   role: {
//     value: adminData.isAdmin ? 'Admin' : 'User',
//   },
//   verify: {
//     value(password) {
//       return this.password === password
//     },
//   },
// })

const testData = {
  login: 'Vasil',
  password: '288sfrt564',
}
const testUser = createUser(testData)
console.log(testUser.login)
console.log(testUser.password)
console.log(testUser.role)

// Функція-конструктор
function MakeUser({
  login = null,
  password = null,
  isAdmin = null,
  age = 0,
}) {
  console.log('new', new.target)
  this.login = login
  this.password = password
  this.role = isAdmin ? 'Admin' : 'User'
  this.age = age
  this.verify = function (password) {
    return this.password === password
  }
  //...
  //...
  //...
  //...
}

const user4 = new MakeUser(rgisterData)
console.log(user4.login)

console.log(`=====================================`)
console.log('new.target')

// Функція-конструктор
function MakeAdmin(data) {
  if (new.target) {
    const {
      login = null,
      password = null,
      isAdmin = null,
      age = 0,
    } = data

    const role = isAdmin ? 'Admin' : 'User'

    const object = Object.assign(this, {
      login,
      password,
      role,
      age,
    })

    if (role === 'Admin') {
      object.verify = function (password) {
        console.debug(password, this.password)
        return this.password === password
      }
    }
    if (age >= 50) {
      object.login = String(object.login).toUpperCase()
    }

    //   переназначення функції toString()
    object.toString = function () {
      return `Користувач ${this.login}`
    }

    //...
    //...
    //...
    //...

    return object
  } else {
    return new MakeAdmin(data) // передбачаємо, що можуть забути поставити new при виклику
  }
}

const admin1 = MakeAdmin(adminData) // забули поставити new
console.log(admin1.login)
console.log(admin1.password)
console.log(admin1.role)

console.log(`=====================================`)
console.log('prototype  Object.assign(this, obj) ')

console.log(
  Object.getPrototypeOf(admin1) === MakeAdmin.prototype,
)

console.log(`=====================================`)
console.log('valueOf()  toString()')

console.log(admin1.toString()) // див. вище переназначення функції toString() для MakeAdmin

console.log(`=====================================`)
console.log('.length')

console.log(MakeAdmin.length)

console.log(`=====================================`)
console.log('.name')

const testAdm = MakeAdmin
console.log(testAdm.name)

console.log(`=====================================`)
console.log('Просунута робота з функціями .apply ')

console.log(user4.verify(`123qwe342`))
const verifyUser = user4.verify
console.log(verifyUser`123qwe342`) // загубилася прив'язка this

console.log(admin1.verify(`123qwe300000042`))
const verifyAdm = admin1.verify
console.log(verifyAdm.apply(admin1, [`123qwe300000042`])) // повертаємо зв'язок this функції з об'єктом admin1

console.log(`=====================================`)
console.log(
  `При створенні нової функції, щоб прив'язати її ("вмонтувати") до певного об'єкта .bind`,
)

const verifyUser2 = user4.verify.bind(user4, `123qwe342`)
console.log(verifyUser2())

console.log(`=====================================`)
console.log(`Приклади використання .call та .apply`)

function Animal2(name) {
  this.name = name
}

function Person(name, age) {
  Animal2.call(this, name)
  this.age = age
}

function Person2(name, age) {
  Animal2.apply(this, [name])
  this.age = age
}

const Person3 = function (name, age) {
  Animal2.apply(this, [name])
  this.age = age
}

const user5 = new Person('Kate', 32)
console.log(user5.name)
const user6 = new Person2('Nasty', 35)
console.log(user6.name)
const user7 = new Person3('Nata', 36)
console.log(user7.name)

console.log('')
console.log('Lesson 31 Класи')
console.log(`=====================================`)
console.log(`class Name { ... }`)
console.log('')

// const User2 = {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
// }

// function Animal2() {
//   this.test = 'Hello world'
// }

// function UserF({ login, password, role, age }) {
//   Animal2.call(this)

//   this.login = login
//   this.password = password
//   this.role = role
//   this.age = age

//   Object.defineProperties(this, {
//     name: {
//       get() {},
//       set() {},
//     },
//   })
// }

// console.log(new UserF({}).test)

class Person1 {
  constructor(name) {
    this.name = name
  }
  test = () => {
    console.log('Hello World', this.name)
  }
}

class User1 extends Person1 {
  constructor(login, password) {
    super(login)
    this.login = login
    this.password = password
  }
  //   login = null
  //   password = null
  #role = null
  static age = null
  id = null
  #id = 1000
  age = null
  //   isAdmin() {
  //     return this.role === 'Admin'
  //   }
  isAdmin = () => {
    // Додаємо стрілкову функцію, щоб не загубити внутрішній this при створенні нової змінної за допомогою цього класу
    console.log(this.#id)
    this.#createAdminUser()
    return this.role === 'Admin'
  }
  //   verify(user1, user2) {
  //     return user1.login === user2.login
  //   }
  #createAdminUser = (login) => {
    // const password = this.generateRandomPassword()
    return new User1()
  }

  static generateRandomPassword = () => {
    //......
    return `Новий пароль сгенеровано`
  }
  get admin() {
    return this.#role === 'Admin'
  }
  set admin(value) {
    this.#role = 'Admin'
  }
}

const user8 = new User1()

console.log(user8)
console.log(typeof user8)
console.log(user8.__proto__)
console.log(user8.prototype)
console.log(User1.prototype)
console.log(User1.prototype === user8.__proto__) // true
console.log(User1.prototype.isPrototypeOf(user8)) //true

console.log(user8.isAdmin())

function verifyAdmin(fn) {
  const result = fn()
  if (!result) {
    throw new Error('Не адмін')
  }
  return true
}

// verifyAdmin(user8.isAdmin) // не знайде відв'язаний this без стрілкової функції
// verifyAdmin(user8.isAdmin.bind(this)) // працює без стрілкової функції, але не зручно
// verifyAdmin(user8.isAdmin) //працює зі стрілковою функцією

console.log(`=====================================`)
console.log(`static назва метода або властивості`)
console.log('')

console.log(user8)
console.log(User1)

console.log(User1.generateRandomPassword()) // використання статичної функції класу (доступна з зовні)

console.log(`=====================================`)
console.log(
  `# приватне поле (недоступне з зовні). Працюють з get та set`,
)
console.log('')

console.log(user8.admin)
user8.admin = 'value'
console.log(user8.admin)
console.log(`=====================================`)
console.log(`constructor (аргументи) { ... }`)
console.log('')

console.log(user8)

const user9 = new User1('dtrtd@iuokl.com', 'tsm;omi7865765')
console.log(user9)

console.log(`=====================================`)
console.log(`class Name extends ParentClassName`)
console.log('')

console.log(user9.test())

console.log(`=====================================`)
console.log(`Object.assign`)
console.log('')

console.log(`=====================================`)
console.log(`instanceof`)
console.log('')

console.log(user8 instanceof User1) //true
