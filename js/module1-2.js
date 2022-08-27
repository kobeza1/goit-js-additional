// МОДУЛЬ 1-2

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } left`;
  }
  // Change code above this line
  return message;
}

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(500, 10, 5000));

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else result = message.slice(0, maxLength) + "...";

  /// Change code above this line
  return result;
}

//console.log(formatMessage("Curabitur ligula sapien", 16));
//console.log(formatMessage("Vestibulum facilisis purus nec", 20));
//console.log(formatMessage("Vestibulum facilisis purus nec", 30));

function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase();
  result = message.includes("spam") || message.includes("sale");

  // Change code above this line
  return result;
}

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

function getExtremeElements(array) {
  // Change code below this line
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  return [firstElement, lastElement];

  // Change code above this line
}

//console.log(getExtremeElements([1, 2, 3, 4, 5]));

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line

  return message.split(" ").length * pricePerWord;

  // Change code above this line
}

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

function slugify(title) {
  // Change code below this line
  const titleNormalize = title.toLowerCase().split(" ");
  const slug = titleNormalize.join("-");
  return slug;

  // Change code above this line
}
// console.log(slugify("Arrays for begginers"));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     newArray.length = maxLength;
//     return newArray;
//   }

//   return newArray;
//   // Change code above this line
// }

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
  // Change code above this line
}

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }

// const r1 = calculateTotal(18);
// console.log(r1);

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];

//   for (const word of words) {
//     console.log(word);

//     if (word.length >= longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function getEvenNumbers(start, end) {
//   let arrayEvenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arrayEvenNumbers.push(i);
//     }
//   }
//   return arrayEvenNumbers;
// }
// console.log(getEvenNumbers(2, 5));

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (value === array[i]) {
//       return true;
//     }
//   }
//   return false;
// }
