// МОДУЛЬ 3. ОБЪЕКТЫ;

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key);
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   propCount = keys.length;

//   // for (const key of keys) {
//   //   propCount += 1;
//   // }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// const animal = {
//   legs: 4,
//   name: "Richard",
//   country: "Ukraine",
// };

// const dog = Object.create(animal);
// dog.type = "animal";
// dog.size = "medium";
// console.log(dog);

// for (const key in dog) {
//   const a = dog.hasOwnProperty(key);
//   console.log(a);
// }

// const keys = Object.keys(dog);
// const values = Object.values(dog);
// const entries = Object.entries(dog);
// console.log(keys);
// console.log(values);
// console.log(entries);

// const array = [1, 7, 0, null, undefined, 8];
// console.log(array);
// const arrayX = array;
// array.push(9);
// const arrayY = [...array];
// array.push(9);
// array.pop();
// array.shift();
// array.unshift(5, 6);
// array.splice(4, 1);
// array.splice(4, 2, 6, 7);
// const b = array.join("");
// console.log(arrayX);
// console.log(arrayY);
// console.log(array);
// console.log(b);

// console.log(arrayX === array);
// console.log(arrayY === array);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salaryArray = Object.values(salaries);

//   for (const salary of salaryArray) {
//     totalSalary += salary;
//   }

//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let valuesArray = [];

//   for (const product of products) {
//     const productKeyArray = Object.keys(product);
//     for (const productKey of productKeyArray) {
//       if (propName === productKey) {
//         valuesArray.push(product[productKey]);
//       }
//     }
//   }
//   return valuesArray;
// }

// function getAllPropValues(propName) {
//   let propValuesArray = [];
//   for (const product of products) {
//     if (propName === p) propValuesArray.push(product.propName);
//   }
//   return propValuesArray;
// }
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// function makeTask(data) {
//   const defaultData = {
//     completed: false,
//     category: "General",
//     priority: "Normal",
//   };

//   return { ...defaultData, ...data };
// }

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   const defaultData = {
//     completed,
//     category,
//     priority,
//   };
//   return { ...defaultData, ...data };
// }

// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (this.books.includes(oldName)) {
//       this.books.splice(index, 1, newName);
//     }
//     return this.books;
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         if (potionIndex === -1) {
//           return `Potion ${potionName} is not in inventory!`;
//         }
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
