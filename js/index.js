// {
//   console.log('Hello js file!')
//   console.log('Second string')
// }

// let name
// let age

// let count = 0,
//   capital = 'Kyiv'

// const price = 100

// age = 10
// name = 'Pavel'

// price = 200

// age = name = 'Ivan'  // Можливо через не жорстку типізацію

// console.log('Log:', age, name, count, capital, price)

// lesson 3
// console.log(' ')
// console.log('Lesson 3')

// let n = 10.555
// let b = -999999999999999999999999 / 'test' //NaN
// let x = -999999999999999999999999
// let y = -999999999999999999999999n
// let c = b ** 1
// let d = -Infinity

// console.log(n)

// console.log(b, c)

// console.log(-2 / 0)

// console.log(999999999999999999999999 > Infinity)

// console.log(x, y)

// const l = 'hello ' + `${x} ${n + 5}`
// const m = `hello ${x} ${n + 5}`
// console.log(l)
// console.log(m)
// console.log(typeof y)

// console.log(isNaN(x))
// console.log(isNaN(b)) //Чи є це NaN

// console.log(isFinite(d)) //Чи є це кінечним числом?
// console.log(isFinite(n))

//Lesson 4
// console.log(' ')
// console.log('Lesson 4')

// const a = 1
// const q = a + 2
// const k = 1 + '' //перетворення числа на рядок (застарілий варіант)
// const e = +'10' //перетворення рядка на число (застарілий варіант)
// const f = 5 ** 4
// const g = 10 % 3 //оператор остачі від цілого ділення на число

// let h = 20
// let i = 5

// console.log(h, i)

// console.log(q + 2)
// console.log(e)
// console.log(f)
// console.log(g)

// h = ++i

// console.log(h, i)

// h = i++

// console.log(h, i)

// j = j + 5 == j += 5

// Lesson 5
// console.log(' ')
// console.log('Lesson 5')

// const personAge = 10
// const dogAge = '10'

// console.log(personAge == dogAge)

// false = 0
// true = 1

// 'false' != 1    = NaN
// ''= 0

// null = undefined

// null == 0 false
// null >= 0 true

// NaN = error

// Lesson 6
console.log(' ')
console.log('Lesson 6')

const userRole = 1
const adminRole = 2
const productPrice = 100

const ivanRole = userRole
const ivanBalance = 300

// const isAdmin = ivanRole === adminRole
// const canBuy = ivanBalance >= productPrice

// const result = isAdmin === canBuy

// const isResultTrue = result === true

const result =
  ivanRole === adminRole || ivanBalance >= productPrice

console.log(result)

// const defaultUserName = null
// const ivanName = 'Ivan'

// const authorName = ivanName || defaultUserName || 'Автор'

// console.log(authorName)

// const isAdmin = ivanRole === adminRole && 'Admin'
// console.log(isAdmin)

// const productStockPrice = 99
// const defaultProductPrice = 150
// const adminPrice = 0
// const itemPrice =
//   adminPrice ??
//   productStockPrice ??
//   defaultProductPrice ??
//   100
// console.log('Item prise = ', itemPrice)

// console.log('Ivan Name is', !!ivanName)

// let productTitle = null
// productTitle ||= 'Product Name'

// console.log('Product title is', productTitle)

// Lesson 7
console.log(' ')
console.log('Lesson 7')

// & обидва
console.log('Обидва &')
let a = 11
let b = 12
let c = a & b

console.log(a, a.toString(2))
console.log(b, b.toString(2))
console.log(c, c.toString(2))

const canRead = true
const canWrite = false
const canDelete = false
const canEdit = true

let userPremission = 0b1001 // 0b - вказує на двійковий запис числа
let adminPremission = 0b1111
let user2Premission = 0b0110

let isAdminUser = userPremission & adminPremission
console.log(
  'Дозволи цього користувача R/W/D/E',
  isAdminUser.toString(2),
)

if (isAdminUser.toString(2) == 1111) {
  console.log(
    'Цей юзер є адміністратором з повним  доступом',
  )
} else {
  console.log(
    'У цього користувача не вистачає дозволів, щоб бути адміністратором',
  )
}

let isSamePremission =
  (userPremission & user2Premission) === userPremission
console.log('У юзерів однакові дозволи: ', isSamePremission)

let friendPremission =
  (userPremission | user2Premission) === adminPremission
console.log(
  'Разом юзери можуть адмініструвати: ',
  friendPremission,
)
// | Мінімум один
console.log('Мінімум один |')
let d = 11
let e = 12
let f = d | e

console.log(d, d.toString(2))
console.log(e, e.toString(2))
console.log(f, f.toString(2))

// ^ лише один
console.log('Лише один ^')
let g = 9
let h = 6
let i = g ^ h

console.log(g, g.toString(2))
console.log(h, h.toString(2))
console.log(i, i.toString(2))

// ~ протилежне
let j
console.log('Протилежне ~')
console.log(i, i.toString(2))
j = ~i
console.log(j, j.toString(2))

adminPremission = ~adminPremission
console.log(adminPremission.toString(2))

// <<х, >>х - зміщення на х бітів вліво, вправо
console.log('Зміщення << >>')
let freeTea = 0b00001

freeTea = freeTea << 1
console.log(freeTea.toString(2))

freeTea = freeTea << 1
console.log(freeTea.toString(2))

freeTea <<= 1
console.log(freeTea.toString(2))

freeTea <<= 1
console.log(freeTea.toString(2))

console.log(freeTea === 0b10000)

// не враховує від'ємні числа при зміщені >>>

let k = -10
console.log(k, k.toString(2))
let l = k >> 2
console.log(l, l.toString(2))
let m = k >>> 2
console.log(m, m.toString(2))

// приклади чи увмикнено всі кнопоки (перевіряємо 3ю кнопку) у двійковій системі
console.log('Налаштування')
const firstButton = 0b0001
const secondButton = 0b0010
const thirdButton = 0b0100

let settings = 0b0000

settings |= firstButton //вмиаємо першу кнопку

// console.log(settings, settings.toString(2))

settings |= secondButton // вмикаємо другу кнопку

// console.log(settings, settings.toString(2))

isButtonOn = !((settings & thirdButton) === 0b0000)
console.log(isButtonOn)

console.log((-10 >>> -3).toString(2))

// Lesson 8
console.log(' ')
console.log('Lesson 8')

//World
// let age = 18
// let message = age >= 18 ? 'you can wote' : 'You can`t wote'
// console.log(message)

const productName = 'Мікрофон'
const productDefault = 'Назва товару'

const newProductName = 'Мікрофон 3000'
const user3Role = 'admin'

const updateProductName =
  user3Role === 'admin'
    ? console.log('isAdmin') || newProductName
    : console.log('noAdmin') || productName
console.log(updateProductName)

//Ukraine
{
  let test = 'test'
  test = productName // можна звертатись до зовнішніх змінних
  //   test = test2 // test2 не досяжна для цього блоку, бо заявлена лише для іншого блоку
}

//USA
{
  const test = 'test' // test не буде плутатись із test із іншого блоку коду
  const test2 = 'test'
}

//приклад1

// const CUSTOM_NAME = 'My robot'
// const MODE = 0
// const ROOM = 'Вітальня'

// const COMAND = 'change name'

// if (COMAND === 'change name' && MODE !== 0) {
//   const name = CUSTOM_NAME || 'Robot v134t1'
//   console.log(`Start ${name}`)
// }

// if (MODE === 0) {
//   console.log(`Robot is offline`)
// }

// if (COMAND === 'work') {
//   const room = ROOM
//   const mode = MODE
//   console.log(`Mode: ${mode}; Прибираю кімнату: ${room}`)
// }

//приклад2

// const login = 'user'
// const password = '123qwe12331'
// const isAdmin = true
// const isLoggedIn = true

// if (isLoggedIn === true) {
//   if (isAdmin) {
//     console.log('Переходимо на сторінку /admin')
//   } else if (login === 'demo') {
//     console.log('Переходимо на сторінку /demo')
//   } else {
//     console.log('Переходимо на сторінку /home')
//   }
// } else if (isLoggedIn === false) {
//   if (login && password) {
//     console.log('Token:', 87943280452346)

//     if (isAdmin) {
//       console.log('Переходимо на сторінку /admin')
//     } else {
//       console.log('Переходимо на сторінку /home')
//     }
//   }
// } else if (isLoggedIn === null) {
//   console.log('Помилка')
// }

// приклад 3

// const price = 100
// let cashbackAmount = null
// let cashbackLevel = 4
// let totalPrice = null
// const useCashback = true

// if (price < 100) {
//   console.log(
//     'Кешбек нараховується для товарів від 100 грн.',
//   )
//   cashbackAmount = 0
// } else {
//   if (cashbackLevel > 0) {
//     cashbackAmount = price * (cashbackLevel * 0.01)
//   }

//   cashbackLevel++

//   if (cashbackLevel > 5) {
//     cashbackLevel = 1
//   }

//   if (cashbackLevel > 0 && useCashback) {
//     totalPrice = price - cashbackAmount
//   }
// }

// console.log(totalPrice)

// приклад 4

const buttonType = 'primary'

// if (buttonType === 'primary') {
//   console.log('primary button')
// } else if (buttonType === 'secondary') {
//   console.log('secondary button')
// } else if (buttonType === 'basic') {
//   console.log('basic button')
// } else {
//   console.log('default button')
// }

switch (buttonType) {
  case 'primary':
    console.log('primary button')
    break
  case 'secondary':
    console.log('secondary button')
    break
  case 'basic':
    console.log('basic button')
    break
  default:
    console.log('default button')
}

// if ('O') {
//   alert('Привіт')
// }

// Lesson 9
console.log(' ')
console.log('Lesson 9')

// 1
// let count = 0
// while (count < 5) {
//   console.log('Hello world!', count)
//   count++
// }

// 2
// const PRODUCT_AMOUNT = 6
// const DISCOUNT_ADDITIONAL = 2

// let discountAmount = 0
// let productCount = 0

// while (
//   productCount < PRODUCT_AMOUNT &&
//   DISCOUNT_ADDITIONAL <= 5 &&
//   discountAmount <= 10
// ) {
//   productCount++

//   if (productCount <= 0) {
//     break
//   }

//   if (productCount <= 3) {
//     discountAmount += 1
//   } else if (productCount > 3 && productCount <= 5) {
//     discountAmount += 1.5
//   } else if (productCount > 5 && productCount <= 8) {
//     discountAmount += 2
//   } else if (productCount > 8) {
//     discountAmount += 2.5
//   }

//   if (DISCOUNT_ADDITIONAL) {
//     discountAmount += DISCOUNT_ADDITIONAL
//   }

//   console.log(productCount, discountAmount)
// }

// console.log('Знижка', discountAmount, '%')

// 3

// a
let sum = 0
let count = 1

while (count <= 5) {
  sum += count
  console.log(count, sum)
  count++
}

// b
sum = 0
count = 1

do {
  sum += count
  console.log(count, sum)
  count++
} while (count <= 5)

// c
let container = 5
let storage = 20

let car = 0

do {
  car++
  storage -= container
} while (car < 3)

console.log(storage)

// d bicycle

let start = 40
let goal = 100

let step = 0
let set = 8
let rest = 10

do {
  start++

  if (step === 0) {
    console.log('Початок тренування')
  }

  step++

  if (step === goal || start === goal) {
    console.log('Кінец тренування')
    break
  }

  if (step === goal / 2) {
    console.log(`Середина тренування`)
  }

  if (step % rest === 0) {
    console.log(`Зробіть перерву`)
    continue
  }

  console.log(`Поточний прогрес ${step}`)

  if (step % set === 0) {
    console.log(`Ви зробили `, step / set, ` сет(-и/-ів)`)
  }
} while (step < goal && start < goal)

// e
let q = 0

main: for (let i = 0, j = 5; i <= j; i++) {
  console.log('Test', i, j)

  if (i === 3) {
    j++
  }

  for (;;) {
    console.log('Q', q)

    if (q >= i) {
      break main
    }

    q++
  }
}

// f

// let age = 25
// let hasExp = true
// let hasEdu = false

// form: {
//   if (age >= 18) {
//     if (hasExp) {
//       if (hasEdu) {
//         console.log('Ви підходите')
//       }

//       if (!hasEdu) {
//         console.log('Ви не підходите. Нема освіти')
//       }
//     }

//     if (!hasExp) {
//       console.log('Ви не підходите. Нема досвіду')
//     }
//   }

//   if (age < 18) {
//     console.log('Ви не підходите. Маленький вік')
//   }
// }

// g

table: for (let i = 1; i < 10; i++) {
  if (i === 1) {
    continue
  }

  console.log(`Число ${i} =====================`)
  for (let j = 1; j < 10; j++) {
    if (j === 1) {
      continue
    }

    if (i === 9) {
      break table
    }
    console.log(`${i} * ${j} = ${i * j}`)
  }
}

// Lesson 10
console.log(' ')
console.log('Lesson 10')

function usePrefix(role) {
  const prefix = `${role} каже:`

  function sayInChat(msg) {
    console.log(`${prefix} ${msg}`)
  }

  return sayInChat
}
const sendMsg = usePrefix('Admin')
sendMsg('Як воно викликалось?')

// a

// те що обчислюється у функції є параметрами, але вони називаються аргументами, коли функція викликається

// function calcSpce(
//   amount = 0,
//   unit = console.log(
//     'parametr unit is not set. default is px',
//   ) || 'px',
// ) {
//   // задаємо значення параметрів за замовченням після знаку =
//   return `${amount * 4}${unit}` // функція повинна щось повертати
// }
// console.log(calcSpce(3)) // якщо не задано якись аргумент, то буде значення за замовченням

// b player

function playTrackById(trackId) {
  /// отримати файл треку та програти його
}

function stopTrackById(trackId) {
  /// отримати файл треку та зупинити його
  console.log(
    `отримати файл треку з  ID ${trackId} та поставити його на паузу`,
  )
}

function play(trackName, trackId) {
  console.log(`Запускаємо ${trackName}`)
  playTrackById(trackId)
}

function end(oldTrackName, newTrackNname) {
  console.log(`завершили грати ${oldTrackName}`)
  console.log(`Наступний трек ${newTrackNname}`)
}

function pausePlay(currentTrackName) {
  console.log(`Трек ${currentTrackName} на паузі`)
  reloadDataTrack()
  play
}

// с

let counter = 0
function reloadDataTrack(amount) {
  counter++
  if (amount <= 0) {
    console.log(`Дані оновлені ${counter} разів`)
    counter = 0
  } else {
    console.log(`Спроба оновлення ${counter}`)
    /// певний код для оновлення даних
    reloadDataTrack(amount - 1) // РЕКУРСІЯ
  }
}

reloadDataTrack(5)

function pauseStopByTrack(trackName, trackId) {
  let isPause = null
  //   let originTrackName = trackName
  //   let originTrackId = trackId
  return () => {
    //function pauseStop забираємо перед дужками//
    // міняємо назву функції та її об'явлення на стрілковий запис

    if (isPause == true) {
      return
    }

    stopTrackById(trackId) // каррірована функція (до якої немає доступу з зовні блоку), вкладена функція для внутрішнього використання всередині іншої функції
    console.log(`Трек ${trackName} на паузі`) // композиція функцій, коли параметри первинної функції використовуються всередені іншої вкладеної функції як аргументи
    isPause = true
  }
}
const pauseStop123 = pauseStopByTrack('IT - Hello wold', 10)
pauseStop123()
const pauseStop456 = pauseStopByTrack(
  'IT - Console Log',
  11,
)
pauseStop456()
pauseStop456()
pauseStop456()

const runCommnd = function (command, errorFn) {
  const result = command()
  if (!result) {
    return errorFn()
  }
}

runCommnd(
  function () {
    console.log('Зауск команди')
    return 1 - 1
  },
  function () {
    console.log('Помилка')
  },
)

const testFunc = () => {
  if (true) {
    var test = 10
    test += 30
  }
  return test
}

console.log(testFunc())

// d
console.log('Приклад мемоізації попереднього результату')
const memocalcSpace = (
  oldAmount = null,
  oldUnit = null,
  oldResult = null,
) => {
  return (amount = 0, unit = 'px') => {
    if (oldAmount === amount && oldUnit === unit) {
      console.log('Memo')
      return oldResult
    }
    oldResult = `${amount * 4}${unit}`
    oldAmount = amount
    oldUnit = unit

    return oldResult
  }
}

const calcSpace = memocalcSpace()
console.log(calcSpace(5))
console.log(calcSpace(5)) // результат буде взято з попереднього запиту

const getSpaceFromDesign = (componentName) => {
  switch (componentName) {
    case 'button':
      return 4
    case 'card':
      return 3
    default:
      return 2
  }
}

const isMobile = true

const amount = getSpaceFromDesign('button')
const amountMobile = isMobile ? amount / 2 : amount
const amountInPx = calcSpace(amountMobile)
// або
const calcSpaceFromDesign = (componentName) => {
  const result = getSpaceFromDesign(componentName)
  return calcSpace(isMobile ? result / 2 : result)
}

console.log(calcSpaceFromDesign('card'))
