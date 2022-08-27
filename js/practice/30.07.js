// PRACTICE 30.07.2022

// const findBestEmployee = (employees) =>
//   Object.entries(employees).sort((a, b) => b[1] - a[1])[0][0];

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// );
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// );

// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const fn = (carsArray) => {
//   const newObject = cars.reduce((accum, car) => {
//     if (!accum.hasOwnProperty(car.type)) {
//       accum[car.type] = [car];
//     } else accum[car.type] = [...accum[car.type], car];
//     return accum;
//   }, {});
// };

// console.log(fn(cars));
// { 'suv': [{...}, {...}], 'sedan': [...], 'truck': [...] }

// Напиши функцию getAllPropValues(arr, prop), которая получает массив
// объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   return arr.reduce(
//     (accum, product) =>
//       product.hasOwnProperty(prop) ? [...accum, product[prop]] : accum,
//     []
//   );
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []

//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// const calculateAverage = (...args) => {
//   return (
//     args.reduce((total, number) => {
//       return typeof number === "number" ? total + number : total;
//     }, 0) / args.filter((number) => typeof number === "number").length;
//   );
// };

// console.log(calculateAverage(12, 43, 654, 23, 54, 78, "hello", "abchsakjbc"));

// const str = "aaabbbbbccccccc";

// function calculate(str) {
//   return str
//     .split("")
//     .reduce(
//       (acum, item) =>
//         !acum.hasOwnProperty(item)
//           ? { ...acum, [item]: 1 }
//           : { ...acum, [item]: (acum[item] += 1) },
//       {}
//     );
// }

// console.log(calculate(str));

// const arr = [
//   [23, 11, ["hello", "world", "Vasya"]],
//   "some str",
//   [
//     777,
//     "word",
//     [
//       "Привет",
//       ["как сюда добраться"],
//       ["John", [{ name: "Vasya", age: 18 }, ["finish"]]],
//     ],
//   ],
// ];

// const oneArray = arr.flat(Infinity);
// console.log(oneArray);

// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }

// console.log(descendingOrder(0));

// Codewars

// function lovefunc(flower1, flower2) {
//   return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//     (flower1 % 2 !== 0 && flower2 % 2 == 0)
//     ? true
//     : false;
// }

// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }
// console.log(lovefunc(9, 2));

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       return 0;
//   }
// }

// function invert(array) {
//   let arrayResult = [];
//   for (let number of array) {
//     number === 0 ? (number = -0) : (number -= number * 2);
//     arrayResult.push(number);
//   }
//   return arrayResult;
// }

// function invert(array) {
//   return array.map((x) => -x);
// }

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([-8, 9, -3, 0]));

// function points(games) {
//   let teamPoints = 0;
//   for (const game of games) {
//     const gameScore = game.split("");
//     if (gameScore[0] > gameScore[2]) {
//       teamPoints += 3;
//     } else if (gameScore[0] < gameScore[2]) {
//       teamPoints += 0;
//     } else if (gameScore[0] === gameScore[2]) {
//       teamPoints += 1;
//     }
//   }
//   return teamPoints;
// }

// const points = (games) =>
//   games.reduce((output, current) => {
//     return (output +=
//       current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
//   }, 0);

// console.log(points(["3:1", "2:2", "0:1"]));

// function getGrade(s1, s2, s3) {
//   const score = Math.round((s1 + s2 + s3) / 3);
//   console.log(score);
//   if (90 <= String(score) <= 100) {
//     return "A";
//   } else if (80 <= String(score) <= 90) {
//     return "B";
//   } else if (70 <= score <= 80) {
//     return "C";
//   } else if (60 <= score <= 70) {
//     return "D";
//   } else if (0 <= score <= 60) {
//     return "F";
//   } else return 0;
// }
// console.log(getGrade(80, 75, 65));

// class Storage {
//   constructor(array = []) {
//     this.items = array;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     if (this.items.includes(itemToRemove)) {
//       const indexOfElement = this.items.indexOf(itemToRemove);
//       this.items.splice(indexOfElement, 1);
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems());
// storage.addItem("Droid");
// console.log(storage.getItems());
// storage.removeItem("Prolonger");
// console.log(storage.getItems());

// class StringBuilder {
//   constructor(initialValue = "") {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
// let newArray = [];
// newArray = this.value.split("");
// newArray.push(str);
// this.value = newArray.join("");
// }
// padStart(str) {
//   this.value = str + this.value;
// }
// padBoth(str) {
// let newArray = [];
// newArray = this.value.split("");
// newArray.splice(0, 0, str);
// newArray.push(str);
// this.value = newArray.join("");
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//     // Change code above this line
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const obj = {
//   testKey: "testValue",
// };
// obj["newProp"] = "prop";
// // console.log(obj["testKey"]);

// const a = Object.values(obj);
// console.log(a);
// const b = Object.entries(obj);
// console.log(b);
// const c = Object.keys(obj);
// console.log(c);
// const d = obj.hasOwnProperty("testKey");
// console.log(d);
// // console.log(obj);

// function sum(numbers) {
//   return numbers.length === 0
//     ? 0
//     : numbers.reduce((element, nextElement) => element + nextElement, 0);
// }

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// console.log(sum([1, 5, 4, -2, 6.4]));
// console.log(sum([]));

// function abbrevName(name) {
//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
