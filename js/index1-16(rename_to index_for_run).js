// // {
// //   console.log('Hello js file!')
// //   console.log('Second string')
// // }

// // let name
// // let age

// // let count = 0,
// //   capital = 'Kyiv'

// // const price = 100

// // age = 10
// // name = 'Pavel'

// // price = 200

// // age = name = 'Ivan'  // Можливо через не жорстку типізацію

// // console.log('Log:', age, name, count, capital, price)

// // lesson 3
// // console.log(' ')
// // console.log('Lesson 3')

// // let n = 10.555
// // let b = -999999999999999999999999 / 'test' //NaN
// // let x = -999999999999999999999999
// // let y = -999999999999999999999999n
// // let c = b ** 1
// // let d = -Infinity

// // console.log(n)

// // console.log(b, c)

// // console.log(-2 / 0)

// // console.log(999999999999999999999999 > Infinity)

// // console.log(x, y)

// // const l = 'hello ' + `${x} ${n + 5}`
// // const m = `hello ${x} ${n + 5}`
// // console.log(l)
// // console.log(m)
// // console.log(typeof y)

// // console.log(isNaN(x))
// // console.log(isNaN(b)) //Чи є це NaN

// // console.log(isFinite(d)) //Чи є це кінечним числом?
// // console.log(isFinite(n))

// //Lesson 4
// // console.log(' ')
// // console.log('Lesson 4')

// // const a = 1
// // const q = a + 2
// // const k = 1 + '' //перетворення числа на рядок (застарілий варіант)
// // const e = +'10' //перетворення рядка на число (застарілий варіант)
// // const f = 5 ** 4
// // const g = 10 % 3 //оператор остачі від цілого ділення на число

// // let h = 20
// // let i = 5

// // console.log(h, i)

// // console.log(q + 2)
// // console.log(e)
// // console.log(f)
// // console.log(g)

// // h = ++i

// // console.log(h, i)

// // h = i++

// // console.log(h, i)

// // j = j + 5 == j += 5

// // Lesson 5
// // console.log(' ')
// // console.log('Lesson 5')

// // const personAge = 10
// // const dogAge = '10'

// // console.log(personAge == dogAge)

// // false = 0
// // true = 1

// // 'false' != 1    = NaN
// // ''= 0

// // null = undefined

// // null == 0 false
// // null >= 0 true

// // NaN = error

// // Lesson 6
// console.log(' ')
// console.log('Lesson 6')

// const userRole = 1
// const adminRole = 2
// const productPrice = 100

// const ivanRole = userRole
// const ivanBalance = 300

// // const isAdmin = ivanRole === adminRole
// // const canBuy = ivanBalance >= productPrice

// // const result = isAdmin === canBuy

// // const isResultTrue = result === true

// const result =
//   ivanRole === adminRole || ivanBalance >= productPrice

// console.log(result)

// // const defaultUserName = null
// // const ivanName = 'Ivan'

// // const authorName = ivanName || defaultUserName || 'Автор'

// // console.log(authorName)

// // const isAdmin = ivanRole === adminRole && 'Admin'
// // console.log(isAdmin)

// // const productStockPrice = 99
// // const defaultProductPrice = 150
// // const adminPrice = 0
// // const itemPrice =
// //   adminPrice ??
// //   productStockPrice ??
// //   defaultProductPrice ??
// //   100
// // console.log('Item prise = ', itemPrice)

// // console.log('Ivan Name is', !!ivanName)

// // let productTitle = null
// // productTitle ||= 'Product Name'

// // console.log('Product title is', productTitle)

// // Lesson 7
// console.log(' ')
// console.log('Lesson 7')

// // & обидва
// console.log('Обидва &')
// // let a = 11
// // let b = 12
// // let c = a & b

// // console.log(a, a.toString(2))
// // console.log(b, b.toString(2))
// // console.log(c, c.toString(2))

// const canRead = true
// const canWrite = false
// const canDelete = false
// const canEdit = true

// let userPremission = 0b1001 // 0b - вказує на двійковий запис числа
// let adminPremission = 0b1111
// let user2Premission = 0b0110

// let isAdminUser = userPremission & adminPremission
// console.log(
//   'Дозволи цього користувача R/W/D/E',
//   isAdminUser.toString(2),
// )

// if (isAdminUser.toString(2) == 1111) {
//   console.log(
//     'Цей юзер є адміністратором з повним  доступом',
//   )
// } else {
//   console.log(
//     'У цього користувача не вистачає дозволів, щоб бути адміністратором',
//   )
// }

// let isSamePremission =
//   (userPremission & user2Premission) === userPremission
// console.log('У юзерів однакові дозволи: ', isSamePremission)

// let friendPremission =
//   (userPremission | user2Premission) === adminPremission
// console.log(
//   'Разом юзери можуть адмініструвати: ',
//   friendPremission,
// )
// // | Мінімум один
// console.log('Мінімум один |')
// // let d = 11
// // let e = 12
// // let f = d | e

// // console.log(d, d.toString(2))
// // console.log(e, e.toString(2))
// // console.log(f, f.toString(2))

// // ^ лише один
// console.log('Лише один ^')
// // let g = 9
// // let h = 6
// // let i = g ^ h

// // console.log(g, g.toString(2))
// // console.log(h, h.toString(2))
// // console.log(i, i.toString(2))

// // ~ протилежне
// let j
// let i = 1
// console.log('Протилежне ~')
// console.log(i, i.toString(2))
// j = ~i
// console.log(j, j.toString(2))

// adminPremission = ~adminPremission
// console.log(adminPremission.toString(2))

// // <<х, >>х - зміщення на х бітів вліво, вправо
// console.log('Зміщення << >>')
// let freeTea = 0b00001

// freeTea = freeTea << 1
// console.log(freeTea.toString(2))

// freeTea = freeTea << 1
// console.log(freeTea.toString(2))

// freeTea <<= 1
// console.log(freeTea.toString(2))

// freeTea <<= 1
// console.log(freeTea.toString(2))

// console.log(freeTea === 0b10000)

// // не враховує від'ємні числа при зміщені >>>

// let k = -10
// console.log(k, k.toString(2))
// let l = k >> 2
// console.log(l, l.toString(2))
// let m = k >>> 2
// console.log(m, m.toString(2))

// // приклади чи увмикнено всі кнопоки (перевіряємо 3ю кнопку) у двійковій системі
// console.log('Налаштування')
// const firstButton = 0b0001
// const secondButton = 0b0010
// const thirdButton = 0b0100

// let settings = 0b0000

// settings |= firstButton //вмиаємо першу кнопку

// // console.log(settings, settings.toString(2))

// settings |= secondButton // вмикаємо другу кнопку

// // console.log(settings, settings.toString(2))

// isButtonOn = !((settings & thirdButton) === 0b0000)
// console.log(isButtonOn)

// console.log((-10 >>> -3).toString(2))

// // Lesson 8
// console.log(' ')
// console.log('Lesson 8')

// //World
// // let age = 18
// // let message = age >= 18 ? 'you can wote' : 'You can`t wote'
// // console.log(message)

// const productName = 'Мікрофон'
// const productDefault = 'Назва товару'

// const newProductName = 'Мікрофон 3000'
// const user3Role = 'admin'

// const updateProductName =
//   user3Role === 'admin'
//     ? console.log('isAdmin') || newProductName
//     : console.log('noAdmin') || productName
// console.log(updateProductName)

// //Ukraine
// {
//   let test = 'test'
//   test = productName // можна звертатись до зовнішніх змінних
//   //   test = test2 // test2 не досяжна для цього блоку, бо заявлена лише для іншого блоку
// }

// //USA
// {
//   const test = 'test' // test не буде плутатись із test із іншого блоку коду
//   const test2 = 'test'
// }

// //приклад1

// // const CUSTOM_NAME = 'My robot'
// // const MODE = 0
// // const ROOM = 'Вітальня'

// // const COMAND = 'change name'

// // if (COMAND === 'change name' && MODE !== 0) {
// //   const name = CUSTOM_NAME || 'Robot v134t1'
// //   console.log(`Start ${name}`)
// // }

// // if (MODE === 0) {
// //   console.log(`Robot is offline`)
// // }

// // if (COMAND === 'work') {
// //   const room = ROOM
// //   const mode = MODE
// //   console.log(`Mode: ${mode}; Прибираю кімнату: ${room}`)
// // }

// //приклад2

// // const login = 'user'
// // const password = '123qwe12331'
// // const isAdmin = true
// // const isLoggedIn = true

// // if (isLoggedIn === true) {
// //   if (isAdmin) {
// //     console.log('Переходимо на сторінку /admin')
// //   } else if (login === 'demo') {
// //     console.log('Переходимо на сторінку /demo')
// //   } else {
// //     console.log('Переходимо на сторінку /home')
// //   }
// // } else if (isLoggedIn === false) {
// //   if (login && password) {
// //     console.log('Token:', 87943280452346)

// //     if (isAdmin) {
// //       console.log('Переходимо на сторінку /admin')
// //     } else {
// //       console.log('Переходимо на сторінку /home')
// //     }
// //   }
// // } else if (isLoggedIn === null) {
// //   console.log('Помилка')
// // }

// // приклад 3

// // const price = 100
// // let cashbackAmount = null
// // let cashbackLevel = 4
// // let totalPrice = null
// // const useCashback = true

// // if (price < 100) {
// //   console.log(
// //     'Кешбек нараховується для товарів від 100 грн.',
// //   )
// //   cashbackAmount = 0
// // } else {
// //   if (cashbackLevel > 0) {
// //     cashbackAmount = price * (cashbackLevel * 0.01)
// //   }

// //   cashbackLevel++

// //   if (cashbackLevel > 5) {
// //     cashbackLevel = 1
// //   }

// //   if (cashbackLevel > 0 && useCashback) {
// //     totalPrice = price - cashbackAmount
// //   }
// // }

// // console.log(totalPrice)

// // приклад 4

// const buttonType = 'primary'

// // if (buttonType === 'primary') {
// //   console.log('primary button')
// // } else if (buttonType === 'secondary') {
// //   console.log('secondary button')
// // } else if (buttonType === 'basic') {
// //   console.log('basic button')
// // } else {
// //   console.log('default button')
// // }

// switch (buttonType) {
//   case 'primary':
//     console.log('primary button')
//     break
//   case 'secondary':
//     console.log('secondary button')
//     break
//   case 'basic':
//     console.log('basic button')
//     break
//   default:
//     console.log('default button')
// }

// // if ('O') {
// //   alert('Привіт')
// // }

// // Lesson 9
// console.log(' ')
// console.log('Lesson 9')

// // 1
// // let count = 0
// // while (count < 5) {
// //   console.log('Hello world!', count)
// //   count++
// // }

// // 2
// // const PRODUCT_AMOUNT = 6
// // const DISCOUNT_ADDITIONAL = 2

// // let discountAmount = 0
// // let productCount = 0

// // while (
// //   productCount < PRODUCT_AMOUNT &&
// //   DISCOUNT_ADDITIONAL <= 5 &&
// //   discountAmount <= 10
// // ) {
// //   productCount++

// //   if (productCount <= 0) {
// //     break
// //   }

// //   if (productCount <= 3) {
// //     discountAmount += 1
// //   } else if (productCount > 3 && productCount <= 5) {
// //     discountAmount += 1.5
// //   } else if (productCount > 5 && productCount <= 8) {
// //     discountAmount += 2
// //   } else if (productCount > 8) {
// //     discountAmount += 2.5
// //   }

// //   if (DISCOUNT_ADDITIONAL) {
// //     discountAmount += DISCOUNT_ADDITIONAL
// //   }

// //   console.log(productCount, discountAmount)
// // }

// // console.log('Знижка', discountAmount, '%')

// // 3

// // a
// // let sum = 0
// // let count = 1

// // while (count <= 5) {
// //   sum += count
// //   console.log(count, sum)
// //   count++
// // }

// // b
// // sum = 0
// // count = 1

// // do {
// //   sum += count
// //   console.log(count, sum)
// //   count++
// // } while (count <= 5)

// // c
// let container = 5
// let storage = 20

// let car = 0

// do {
//   car++
//   storage -= container
// } while (car < 3)

// console.log(storage)

// // d bicycle

// // let start = 40
// // let goal = 100

// // let step = 0
// // let set = 8
// // let rest = 10

// // do {
// //   start++

// //   if (step === 0) {
// //     console.log('Початок тренування')
// //   }

// //   step++

// //   if (step === goal || start === goal) {
// //     console.log('Кінец тренування')
// //     break
// //   }

// //   if (step === goal / 2) {
// //     console.log(`Середина тренування`)
// //   }

// //   if (step % rest === 0) {
// //     console.log(`Зробіть перерву`)
// //     continue
// //   }

// //   console.log(`Поточний прогрес ${step}`)

// //   if (step % set === 0) {
// //     console.log(`Ви зробили `, step / set, ` сет(-и/-ів)`)
// //   }
// // } while (step < goal && start < goal)

// // e
// let q = 0

// main: for (let i = 0, j = 5; i <= j; i++) {
//   console.log('Test', i, j)

//   if (i === 3) {
//     j++
//   }

//   for (;;) {
//     console.log('Q', q)

//     if (q >= i) {
//       break main
//     }

//     q++
//   }
// }

// // f

// // let age = 25
// // let hasExp = true
// // let hasEdu = false

// // form: {
// //   if (age >= 18) {
// //     if (hasExp) {
// //       if (hasEdu) {
// //         console.log('Ви підходите')
// //       }

// //       if (!hasEdu) {
// //         console.log('Ви не підходите. Нема освіти')
// //       }
// //     }

// //     if (!hasExp) {
// //       console.log('Ви не підходите. Нема досвіду')
// //     }
// //   }

// //   if (age < 18) {
// //     console.log('Ви не підходите. Маленький вік')
// //   }
// // }

// // g

// table: for (let i = 1; i < 10; i++) {
//   if (i === 1) {
//     continue
//   }

//   console.log(`Число ${i} =====================`)
//   for (let j = 1; j < 10; j++) {
//     if (j === 1) {
//       continue
//     }

//     if (i === 9) {
//       break table
//     }
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }

// // Lesson 10
// console.log(' ')
// console.log('Lesson 10')

// function usePrefix(role) {
//   const prefix = `${role} каже:`

//   function sayInChat(msg) {
//     console.log(`${prefix} ${msg}`)
//   }

//   return sayInChat
// }
// const sendMsg = usePrefix('Admin')
// sendMsg('Як воно викликалось?')

// // a

// // те що обчислюється у функції є параметрами, але вони називаються аргументами, коли функція викликається

// // function calcSpce(
// //   amount = 0,
// //   unit = console.log(
// //     'parametr unit is not set. default is px',
// //   ) || 'px',
// // ) {
// //   // задаємо значення параметрів за замовченням після знаку =
// //   return `${amount * 4}${unit}` // функція повинна щось повертати
// // }
// // console.log(calcSpce(3)) // якщо не задано якись аргумент, то буде значення за замовченням

// // b player

// function playTrackById(trackId) {
//   /// отримати файл треку та програти його
// }

// function stopTrackById(trackId) {
//   /// отримати файл треку та зупинити його
//   console.log(
//     `отримати файл треку з  ID ${trackId} та поставити його на паузу`,
//   )
// }

// function play(trackName, trackId) {
//   console.log(`Запускаємо ${trackName}`)
//   playTrackById(trackId)
// }

// function end(oldTrackName, newTrackNname) {
//   console.log(`завершили грати ${oldTrackName}`)
//   console.log(`Наступний трек ${newTrackNname}`)
// }

// function pausePlay(currentTrackName) {
//   console.log(`Трек ${currentTrackName} на паузі`)
//   reloadDataTrack()
//   play
// }

// // с

// let counter = 0
// function reloadDataTrack(amount) {
//   counter++
//   if (amount <= 0) {
//     console.log(`Дані оновлені ${counter} разів`)
//     counter = 0
//   } else {
//     console.log(`Спроба оновлення ${counter}`)
//     /// певний код для оновлення даних
//     reloadDataTrack(amount - 1) // РЕКУРСІЯ
//   }
// }

// reloadDataTrack(5)

// function pauseStopByTrack(trackName, trackId) {
//   let isPause = null
//   //   let originTrackName = trackName
//   //   let originTrackId = trackId
//   return () => {
//     //function pauseStop забираємо перед дужками//
//     // міняємо назву функції та її об'явлення на стрілковий запис

//     if (isPause == true) {
//       return
//     }

//     stopTrackById(trackId) // каррірована функція (до якої немає доступу з зовні блоку), вкладена функція для внутрішнього використання всередині іншої функції
//     console.log(`Трек ${trackName} на паузі`) // композиція функцій, коли параметри первинної функції використовуються всередені іншої вкладеної функції як аргументи
//     isPause = true
//   }
// }
// const pauseStop123 = pauseStopByTrack('IT - Hello wold', 10)
// pauseStop123()
// const pauseStop456 = pauseStopByTrack(
//   'IT - Console Log',
//   11,
// )
// pauseStop456()
// pauseStop456()
// pauseStop456()

// const runCommnd = function (command, errorFn) {
//   const result = command()
//   if (!result) {
//     return errorFn()
//   }
// }

// runCommnd(
//   function () {
//     console.log('Зауск команди')
//     return 1 - 1
//   },
//   function () {
//     console.log('Помилка')
//   },
// )

// const testFunc = () => {
//   if (true) {
//     var test = 10
//     test += 30
//   }
//   return test
// }

// console.log(testFunc())

// // d
// console.log('Приклад мемоізації попереднього результату')
// const memocalcSpace = (
//   oldAmount = null,
//   oldUnit = null,
//   oldResult = null,
// ) => {
//   return (amount = 0, unit = 'px') => {
//     if (oldAmount === amount && oldUnit === unit) {
//       console.log('Memo')
//       return oldResult
//     }
//     oldResult = `${amount * 4}${unit}`
//     oldAmount = amount
//     oldUnit = unit

//     return oldResult
//   }
// }

// const calcSpace = memocalcSpace()
// console.log(calcSpace(5))
// console.log(calcSpace(5)) // результат буде взято з попереднього запиту

// const getSpaceFromDesign = (componentName) => {
//   switch (componentName) {
//     case 'button':
//       return 4
//     case 'card':
//       return 3
//     default:
//       return 2
//   }
// }

// const isMobile = true

// const amount = getSpaceFromDesign('button')
// const amountMobile = isMobile ? amount / 2 : amount
// const amountInPx = calcSpace(amountMobile)
// // або
// const calcSpaceFromDesign = (componentName) => {
//   const result = getSpaceFromDesign(componentName)
//   return calcSpace(isMobile ? result / 2 : result)
// }

// console.log(calcSpaceFromDesign('card'))

// // Lesson 11
// console.log(' ')
// console.log('Lesson 11')

// //eval eval(script)
// let s = 10
// let t = 20
// let code = 'console.log(s + t)'
// eval(code)

// const code2 = '(5 + 5) % 5 === 0'
// console.log(eval(code2))

// const code3 = `console.log('Hello')`
// eval(code3)

// //isFinite
// function calcScreenRation(w, h) {
//   let result = w / h
//   return isFinite(result) ? result : null
// }
// console.log(calcScreenRation(1920, '1080'))

// //isNaN

// function calcScreenRation(w, h) {
//   let result = w / h
//   if (isNaN(result)) {
//     return 'Error'
//   } else if (!isFinite(result)) {
//     return 'Is Infinity'
//   } else {
//     return result
//   }
// }
// console.log(calcScreenRation(1920, '1080'))

// //parseInt

// const num = parseInt('0101', 2) // після коми вказується система (двійкова), з якої треба робити перетворення у ціле число
// console.log(num)

// function calcScreenRation(w, h) {
//   w = parseInt(w)
//   h = parseInt(h)
//   let result = w / h
//   if (isNaN(result)) {
//     return 'Error'
//   } else if (!isFinite(result)) {
//     return 'Is Infinity'
//   } else {
//     return result
//   }
// }
// console.log(calcScreenRation('1920px', '1080px'))

// //parseFloat
// const num2 = parseFloat('1.5555')
// console.log(num2)

// //URI
// // encodeURI
// // encodeURIComponent
// // decodeURI
// // decodeURIComponent
// const domain = 'it-brains.com.ua'
// function redirectToPath(path) {
//   const link = encodeURI(`https://${domain}/${path}`)
//   // робимо перехід на сторінку
//   console.log(link)
//   return link
// }

// const URI =
//   'https://it-brains.com.ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9/info'
// function getUrl(urlInURI) {
//   urlInURI = decodeURI(urlInURI)
//   console.log(urlInURI)
//   //   return urlInURI
// }

// const path = 'product/Мікрофон рожевий/info'
// const link = `https://${domain}/${path}`
// let link1 = redirectToPath(path)
// let link2 = getUrl(link1)

// console.log(link === link2)

// // Lesson 12
// console.log(' ')
// console.log('Lesson 12')

// const a = Number(10)
// const b = 10
// const c = Number('10')

// console.log(a === b && b === c && a === c)

// // Number.EPSILON
// const d = 0.1
// const e = 0.2
// const f = 0.3

// const g = d + e

// console.log(g)
// console.log(Number.EPSILON)
// console.log(
//   g - f < Number.EPSILON && f - g < Number.EPSILON,
// )

// // Number.MAX_SAFE_INTEGER
// // Number.MIN_SAFE_INTEGER
// // Number.MIN_VALUE
// // Number.MAX_VALUE

// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)

// // Number.isInteger

// function reviewNumber(num) {
//   if (isNaN(num)) {
//     return console.log('Is not a number', num)
//   } else if (!num && num !== 0) {
//     return console.log('Bad number', num)
//   } else if (!Number.isInteger(num)) {
//     return console.log('Дробове число', num)
//   } else if (!Number.isSafeInteger(num)) {
//     return console.log('Небезпечне число', num)
//   }

//   return console.log('Ціле число', num)
// }

// reviewNumber(Number.MAX_SAFE_INTEGER + 12)

// // Скорочений запис

// const a1 = Number(10.567)
// const a2 = a1.toFixed(2)
// const a3 = a2.length
// console.log(a3)

// console.log((10.567).toFixed(2).length)

// const a4 = Number('1.9999')
// const a5 = parseInt('232543 sdf')

// console.log(a4, a5)

// // .toFixed(x) x - кількість знаків після коми
// const a6 = 1.543657657
// const a7 = parseFloat(a6.toFixed(2))
// console.log(a7)

// // .toPrecision(x) x - кількість знаків у числі
// const a8 = 15839.896856
// const a9 = parseFloat(a8.toPrecision(1))
// const a10 = parseFloat(a8.toPrecision(6))
// const a11 = parseFloat(a8.toPrecision(4))
// console.log(a9, a11, a10)

// //toExponential(x) x - знаків після коми у експоненті
// const a12 = 755466999999999
// const a13 = a12.toExponential(4)
// console.log(a13)

// // .toString(x) x - система запису числа
// const a14 = 8766987
// const a15 = a14.toString(2)
// console.log(a15)

// // Lesson 13
// console.log(' ')
// console.log('Lesson 13')

// //String
// console.log(String(6435679))

// // .length
// const b1 = 'HelloWorld'
// console.log(b1.length)

// // String.fromCodePoint - пудтримує більше символів, ніж .fromCharCode()
// console.log(String.fromCodePoint(128514))

// //.charCodeAt .codePointAt зворотні функції
// const b2 = '0ǂ234567'
// console.log(b2.codePointAt(1))
// console.log(String.fromCodePoint(450))

// // String.raw
// console.log(`www.test.com/home/catalog/category/new`)
// console.log(`www.test.com\home\catalog\category\new`) // деякі спецсимволи windows виводяться обробляються некоректно
// console.log(
//   String.raw`www.test.com\home\catalog\category\new`, // виведе "сирий" рядок
// )

// // .concat
// console.log(b1.concat(', ', b2, ' ', '!'))

// // .includes
// console.log(b1)
// console.log(b1.includes('lo'))
// console.log(b1.includes('lo', 4))
// console.log(b1.includes('o', 6))

// // .idexOf  .lastIndexOf
// console.log(b1.indexOf('o', 6))
// console.log(b1.indexOf('o'))
// console.log(b1.indexOf('q', 6))
// console.log(b1.indexOf('r', 6))

// console.log(b1.lastIndexOf('o'))

// // .startWith .endWith
// console.log(b1.startsWith('He'))
// console.log(b1.startsWith('He', 2))
// console.log(b1.startsWith('lo', 3))
// console.log(b1.endsWith('ld'))
// console.log(b1.endsWith('ld', 8))
// console.log(b1.endsWith('ld', 10))

// // .at .charAt
// console.log(b1.at('0'))
// console.log(b1.at('1'))
// console.log(b1.at('2'))
// console.log(b1.at('3'))
// console.log(b1.at('4'))

// console.log(b1.at('9'))
// console.log(b1.at('10'))

// // .padStart .padEnd
// const c1 = 'HelloWorld' // 10 знаків
// console.log(c1.padStart(15, 'Start'))
// console.log(c1.padEnd(13, 'End'))
// console.log(c1.padEnd(15, 'End'))

// // .repeat
// console.log(c1.repeat(3))

// // .slice .sustring
// console.log(c1.slice(3))
// console.log(c1.slice(-3))
// console.log(c1.slice(3, 6))

// // .toLowerCase .toUpperCase

// console.log(c1.toLowerCase())
// console.log(c1.toUpperCase())

// // .trim .trimStart .trimEnd1
// const d1 = '    User Name     '
// console.log(d1.trim(), '1')
// console.log(d1.trimStart(), '1')
// console.log(d1.trimEnd(), '1')

// // Lesson 14
// console.log(' ')
// console.log('Lesson 14')

// const x1 = 1
// const x2 = 2
// const x3 = 3

// const getOne = () => 1

// let list = [
//   function first() {},
//   100,
//   'Text',
//   null,
//   undefined,
//   1 + 2,
//   5 < 6,
//   getOne(),
// ]
// console.log(list)

// let listX = [x1, x2, x3]
// console.log(listX)

// const testArr = Array(5)
// console.log(testArr)
// testArr[0] = 'Start'
// testArr[1] = 2
// testArr[20] = 20
// console.log(testArr)
// console.log('++++++++++++++++++++++++++')
// // .length
// console.log(testArr.length)
// testArr[testArr.length] = 21
// testArr[testArr.length] = 22
// console.log(testArr.length)
// console.log(testArr)

// console.log(testArr[testArr.length - 1]) // виведе останній елемент масиву

// testArr['test'] = 'Test123' // комірка має назву test не рекомендується так робити
// console.log(testArr)
// console.log(testArr.test)
// console.log(testArr.length) // не бачить іменовану комірку
// console.log(testArr[testArr.length - 1]) // не виведе іменовану комірку
// console.log('++++++++++++++++++++++++++')
// //delete

// delete testArr[20]
// console.log(testArr)
// console.log('++++++++++++++++++++++++++')
// // вкладені масиви
// const big = [[[1], [2, 3, 4, 5], [6]], [[7]], [[8]]]
// console.log(big[0][1][2])
// console.log('++++++++++++++++++++++++++')
// // for of  for in for i,j

// const location = [
//   [100, 200],
//   [105, 205],
//   [110, 190],
// ]
// console.log(' ')
// console.log(
//   'for of - найкоротший запис зі значеннями масиву',
// )
// for (const point of location) {
//   //   console.log(point)
//   for (const coord of point) {
//     console.log(coord)
//   }
// }
// console.log(' ')
// console.log('for in -  для роботи з індексами')
// for (const pointIndex in location) {
//   //   console.log(location[pointIndex])
//   for (const coordIndex in location[pointIndex]) {
//     console.log(location[pointIndex][coordIndex])
//   }
// }
// console.log(' ')
// console.log('for i,j - класичний цикл з індексами')
// for (let i = 0; i < location.length; i++) {
//   // console.log(location[i])
//   for (let j = 0; j < location[i].length; j++)
//     console.log(location[i][j])
// }

// //порівняння масивів === за допомогою .toString String
// console.log('++++++++++++++++++++++++++')

// const l1 = [1, 2, 3]
// const l2 = [1, 2, 3]

// console.log(l1 === l2)
// console.log(l1.toString === l2.toString)
// console.log(String(l1) === String(l2))

// // посилання на масив замість копіювання при присоєнні значення
// console.log('++++++++++++++++++++++++++')
// const l3 = [5, 6, 7]
// const l4 = l3
// console.log(l3, l4)
// delete l3[0]
// console.log(l3, l4)

// //деструктуризація
// console.log('++++++++++++++++++++++++++')
// console.log('деструктуризація')
// // location[location.length] = [120, 180] // додаємо 4 локацію
// console.log(location)
// // довгий варіант
// const loc1 = location[0]
// const loc2 = location[1]
// console.log(loc1, loc2)
// // швидкий варіант
// const [xy1, xy2] = location
// console.log(xy1, xy2)

// const [point1, , point3] = location // пропуск значення
// console.log(point1, point3)

// const [item1, ...rest] = location // залишок масиву у одну змінну
// console.log(item1, rest)

// const [[p1, p2], r3, r4 = ['New X', 'New Y']] = rest //якщо не існує значення r4(четвертої локації у location, тоді присвоїть значення за замовчуванням після знаку =)
// console.log(r4)
// console.log(p1, p2) // кокретні координати 2 локації (першої у rest)

// const [...l5] = l1
// const l6 = [...l1]
// const l7 = [100, ...(l1 || [])] // якщо l1 не існує, тоді присвоїть пустий масив
// console.log(
//   l5.toString === l6.toString &&
//     l6.toString === l1.toString,
// )
// console.log(l1, l7)

// let l8 = [7, 8, 9]
// let l9 = [4, 5, 6]
// console.log(l8, l9)
// ;[l8, l9] = [l9, l8] //міняємо місцями значення
// console.log(l8, l9)

// function printFullname(name, surname, lastname) {
//   return `${name} ${surname} ${lastname}`
// }
// console.log(printFullname('Ivan', 'Ivanenko', 'Ivanov'))

// function printFullname2(...arg) {
//   // console.log(arg)
//   return arg.toString()
//   //   return `${name} ${surname} ${lastname}`
// }
// console.log(printFullname2('Ivan', 'Ivanenko', 'Ivanov'))

// function sumAllNum(...nums) {
//   let sum = 0
//   for (const n of nums) {
//     sum += n
//   }

//   return [sum, nums.length]
// }
// const [sum, numLength] = sumAllNum(
//   1,
//   2,
//   3,
//   435,
//   5,
//   5,
//   6,
//   63,
//   66,
//   67676,
// )
// console.log(sum, numLength)

// function printFullname3([name, surname, lastname, ...arg]) {
//   //   console.log(arg)
//   //   return arg.toString()
//   return `${name} ${surname} ${lastname} ${
//     arg.length ? `(${arg.toString()})` : ''
//   }`
// }
// console.log(
//   printFullname3([
//     'Ivan',
//     'Ivanenko',
//     'Ivanov',
//     'Admin',
//     18,
//   ]),
// )

// // Позакласні самостійні заняття
// console.log('')
// console.log('Позакласні самостійні заняття')
// console.log('Різниця між === та ==')
// console.log('')
// console.log(
//   '=== більш точніше порівняння (враховує типізацію):',
// )
// console.log(`1 === '1'`, 1 === '1')
// console.log(`1 !== '1'`, 1 !== '1')
// console.log(`null === undefined`, null === undefined)
// console.log('')
// console.log(
//   `== більш грубе порівняння (не враховує типізацію):`,
// )
// console.log(`1 == '1'`, 1 == '1')
// console.log(`1 != '1'`, 1 != '1')
// console.log(`null == undefined`, null == undefined)
// console.log('')
// console.log(
//   `More details you can see here:`,
//   `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#:~:text=the%20equality%20operators-,.,-x`,
// )
// console.log(
//   'P.S. Better copy link and paste it in your browser',
// )

// Lesson 15  Об'єкти
// console.log(' ')
// console.log('Lesson 15')
// console.log(`=====================================`)

// const key = 'Key 1'

// const a = {
//   ключ: 'значення',
//   x: 100, // змінна оголошується прямо у об'єкті
//   ['text']: 'HelloWorld',
//   [key]: 'Some text', //змінна у квадратних дужках повинна бути оголошенною раніше. використовується для динамічних ключів
//   [console.log()]: 'Console Log', // функція у якості ключа без попереднього оголошення поверне undefined у назву ключа
// }

// console.log(a.x)
// console.log(a.text)
// console.log(a[key]) // звернення до динамічного ключа лише через квадратні дужки
// console.log(a[console.log()])
// console.log(a)

// // пустий об'єкт
// console.log(`=====================================`)
// console.log(`Створюємо пустий об'єкт та виводимо його`)
// const b = Object()
// console.log(b)
// const b1 = {}
// console.log(b1)

// //delete
// console.log(`=====================================`)
// delete a.text
// console.log(a)

// //вкладений об'єкт
// console.log(`=====================================`)
// const sex = 'Gender'
// const info = 'About'
// console.log(`вкладений об'єкт`)
// const a1 = {
//   ключ: 'значення',
//   x: 100,
//   [key]: 'Some text',
//   //вкладений об'єкт з динамічним клюем info
//   [info]: {
//     name: 'Ivan',
//     age: 35,
//     [sex]: 'male',
//   },
//   // вкладений об'єкт з клюем info
//   info: {
//     name: 'Ann',
//     age: 35,
//     [sex]: 'female',
//   },
// }

// console.log(a1[info].age)
// console.log(a1[info][sex])
// console.log(a1.info[sex])
// console.log(a1.info.name)
// console.log(a1)

// //for in
// console.log(`=====================================`)
// console.log('for in:')
// const person = {
//   name: 'Іван',
//   age: 25,
//   occupation: 'Розробник програмного забеспечення',
//   address: {
//     city: 'Київ',
//     street: 'Вулиця Шевченка',
//     houseNumber: 10,
//   },
// }

// for (const key in person) {
//   console.log(key)
// }

// for (const key in person) {
//   const item = person[key]

//   if (typeof item === 'object') {
//     for (const key2 in item) {
//       console.log(item[key2])
//     }
//   } else {
//     console.log(item)
//   }
// }

// // compare /  порівняння
// console.log(`=====================================`)
// console.log(`Порівняння об'єктів`)
// const a3 = { test: 1 }
// const b3 = { test: 1 }
// const c3 = a3 //передається послання на об'єкт
// console.log(a3 === b3)
// console.log(a3 === c3)

// // деструктуризація
// console.log(`=====================================`)
// console.log(`деструктуризація`)
// const {
//   age,
//   name,
//   address: { city, street, zipcode = 41023 },
//   ...rest
// } = person
// console.log(age, name, zipcode, city, street)
// console.log(rest)

// // через person
// function getAddress({
//   address: {
//     zipcode = 41023,
//     city,
//     street = 'Не вказано',
//     houseNumber,
//   },
// }) {
//   return `Ваша адреса: ${zipcode} ${city} ${street} ${houseNumber}`
// }
// const test = getAddress(person)
// console.log(test)

// // без person тільки внутрішня змінна функції adress
// function getAddress2({ address }) {
//   if (address) {
//     const {
//       zipcode = 10000,
//       city,
//       street = 'NOT SET',
//       houseNumber = 10,
//     } = address
//     return `Ваша адреса: ${zipcode} ${city} ${street} ${houseNumber}`
//   }

//   return 'Нема даних'
// }

// const test2 = getAddress2({
//   address: { street: 'Hello', city: 'Kyiv' },
// })
// console.log(test2)

// // Додавання даних у об'єкт
// console.log(`=====================================`)
// console.log(`додавання у об'єкт даних`)
// const role = {
//   value: 'admin',
//   status: 3,
// }

// const person2 = {
//   name: 'Іван',
//   age: 25,
//   occupation: 'Розробник програмного забеспечення',
//   ...role, // тільки значення іншого об'єкту role

//   address: {
//     city: 'Київ',
//     street: 'Вулиця Шевченка',
//     houseNumber: 10,
//   },
//   getAddress: function () {
//     // функція як значення
//     return this.address // звернення до даних всередині об'єкта у якому така функція за допомогою this (не працює напряму зі стрілковими функціями)
//   },
// }
// console.log(person2)

// const person3 = {
//   name: 'Іван',
//   age: 25,
//   occupation: 'Розробник програмного забеспечення',
//   role, // якщо окремою властивісттю (об'єктом)

//   //варіанти:
//   // role: role, - варіант попереднього запису
//   // info: role, - варіант з іншим ключем

//   address: {
//     city: 'Київ',
//     street: 'Вулиця Шевченка',
//     houseNumber: 10,
//   },
// }
// console.log(person3)

// // в - перевірка наявності елементу в об'єкті
// console.log(`=====================================`)
// console.log(`перевірка наявності елементу в об'єкті`)

// console.log(!!person2.value)
// console.log(!!person2.surname)

// console.log('value' in person2)
// console.log('surname' in person2)

// // функція як значення витягає дані за допомогою this
// console.log(`=====================================`)
// console.log(
//   `функція як значення витягає дані за допомогою this`,
// )
// console.log(person2.getAddress())

// // Літерал
// console.log(`=====================================`)
// console.log(
//   `Літерал - створення зміних без використання конструктора`,
// )

// const s = String('Test') // створення за допомогою конструктора
// console.log(s)
// const s1 = 'Test' // Використання літералу
// console.log(s1)

// Будь-які дані у JS - то є об'єкт!

// Number.prototype.toString = function () {
//   // Перезапис існуючих функцій toString перетворили у об'єкт Number, але через те, що перезаисуються вбудовані функції відображає не коректно як масив з іменованою коміркою
//   console.log(this)
//   //   return `Число ${this}` // Зламає JS
// }
// const t = 1
// t.toString()

// console.log('xxx')

// Number.prototype.toOwnString = function () {
//   // Створення власної функції так само не рекомендується?
//   console.log(this)
//   return `Число ${this}`
// }
// const t1 = 1
// const u1 = t1.toOwnString()
// console.log(u1)

// function Test() {
//   this.world = 'World'
//   return 'Hello' + this.world
// }

// Test.hello = 'Hello' // додавання значення змінної у функцію як у об'єкт
// console.log(Test.hello)

// Lesson 16  Об'єкти
console.log(' ')
console.log('Lesson 16')
console.log(`=====================================`)
console.log('Symbol')

// const a = {
//   name: 'Olga',
//   age: 34,
// }
// console.log(a)

// const key = 'name'
// a[key] = 'user'
// console.log(a)

const phoneBook = {
  0: 1,
  olga: '+380931234567',
}
function addToPhoneBook(phone, id) {
  const key = Symbol(id + phoneBook[0])
  phoneBook[key] = phone
  phoneBook[0]++
}
addToPhoneBook('+380937654321', 'olga') // інша Ольга з іншим номером
//...
addToPhoneBook('+380631234567', 'olga') // ще одна Ольга з іншим номером
//
console.log(phoneBook)

const phoneBook2 = {
  Kate: '+380939234567',
}
function addToPhoneBook2(phone, id) {
  const key = Symbol(id)
  phoneBook2[key] = phone
  return key //  буде передано до змінної при її створенні через запуск функції
}
const kate1Id = addToPhoneBook2('+380939654321', 'kate') // інша Катя з іншим номером  отримує key при звертанні до функції
//...
const kate2Id = addToPhoneBook2('+380639234567', 'kate') // ще одна Катя з іншим номером отримує інший key при звертанні до функції
//
console.log(phoneBook2)
console.log('Зверення до даних конкретної Каті:')
console.log(phoneBook2[kate1Id])
console.log(
  'Звернення до конкретної Каті через description',
)
console.log(kate1Id.description)

console.log('')

console.log(`=====================================`)
console.log(
  'Перезапис Symbol.to та витягання ID через Symbol.keyFor',
)

// const user = {
//   name: 'Vika',
//   id: 328746873,
//   bookId: null,

//   getPhone(book) {
//     return book[this.bookId]
//   },
// }
// const phoneBook3 = {
//   vika: '+3807777777',
// }
// function addToPhoneBook3(phone, user) {
//   const symId = Symbol.for(user.id)
//   phoneBook3[symId] = phone
//   user.bookId = symId
// }
// addToPhoneBook3('+380935555555', user)
// addToPhoneBook3('+380930000000', user)
// console.log(phoneBook3)
// console.log(user.getPhone(phoneBook3))

// const symId = user.bookId
// console.log(Symbol.keyFor(symId))

//порівняння символів
console.log(`=====================================`)
console.log('порівняння символів')
const sym1 = Symbol('test')
const sym2 = Symbol('test')
console.log(sym1 === sym2)

// Створення неунікальних символів
console.log(`=====================================`)
console.log(
  'Створення неунікальних символів через Symbol.for',
)
const a = Symbol('1')
const b = Symbol('1')
console.log(a === b)
console.log(String(a) === String(b))
console.log(a.toString === b.toString)
console.log(a.description === b.description)

const a2 = Symbol.for('2')
const b2 = Symbol.for('2')
console.log(a2 === b2)

//цикл for in/of з Symbol у ключах та Символьний ітератор
console.log(`=====================================`)
const user = {
  name: 'Vika',
  id: 328746873,
  bookId: null,

  getPhone(book) {
    return book[this.bookId]
  },
}
const phoneBook3 = {
  me: '+3807777777',
  name: 'Phone Book',
}
function addToPhoneBook3(phone, user) {
  const symId = Symbol.for(user.id)
  phoneBook3[symId] = phone
  user.bookId = symId
}
addToPhoneBook3('+380935555555', user)
addToPhoneBook3('+380930000000', user)
console.log(phoneBook3)

//звичайні цикли не працюють коректно

for (const index in phoneBook3) {
  console.log(index)
}

// for (const item of phoneBook3) {
//   console.log(item)
// }

// Символьний ітератор Symbol.iterator
console.log(`=====================================`)
console.log('Символьний ітератор Symbol.iterator')

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from
    return this
  },

  next() {
    return this.current <= this.to
      ? { done: false, value: this.current++ }
      : { done: true }
  },
}

for (let num of range) {
  console.log(num)
}

// const iterator = range[Symbol.iterator]()
// do {
//   console.log(iterator.current)
//   result = iterator.next()
// } while (!result.done)

// const arr = [1, 2, 3, 4, 5]
// const iterator2 = arr[Symbol.iterator]()
// do {
//   result = iterator2.next()
//   console.log(result.value)
// } while (!result.done)

//Додатково про символний ітератор у відео

// Lesson 17 Операції з масивами частина І
console.log('Next lesson see in index 17-xx.js')
console.log('rename this file to index1-16.js first')
console.log('Then rename index17-xx.js to index.js for run')
