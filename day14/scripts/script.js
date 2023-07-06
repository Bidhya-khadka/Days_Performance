// *******************************prime number**********************************************************
// prime number=>such number which can only be divisible by 1 and itself but not by other number
// remainder 0 means the number is exactly divisible by that number
// here 1 and 2 is not a prime number
// to check number 55 as it is either prime or not we have to check from 1-55
// prime huna  1 ra 55 bahek ko dividing number le remainder 0 dinu vayena
// vipppppppppppppp one number is divisible till reaching its half means 50 is divisible exactly by it's half i.e 25

// let num = 55;
// console.log(num);
// if (typeof num === "number") {
//   if (num < 2) {
//     console.log(`${num} not prime number`);
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         console.log(`${num}is not  a prime number`);
//       } else {
//         console.log(`${num}is a prime number`);
//       }
//     }
//   }
// } else {
//   console.log("${num} is not a prime number");
// }

// loop chairayera each number lai herere kaile prime kaile not prime diyo dherai
// so we have decided to gain one output by using boolean as isPrime here which results either true or false

// let num = 55;
// let isPrime = true;
// if (typeof num === "number") {
//   if (num < 2) {
//     console.log(`${num}-> not a primary number`);
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(`${num} is a prime number`);
//     } else {
//       console.log(`${num} is not a prime number`);
//     }
//   }
// } else {
//   console.log(`${num} is not a number`);
// }

// let num = 7;
// let isPrime = true;
// if (typeof num === "number") {
//   if (num < 2) {
//     console.log(`${num}-> not a primary number`);
//   } else {
//     // one number is divisible exactly till it's half only
//     for (let i = 2; i < num / 2; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(`${num} is a prime number`);
//     } else {
//       console.log(`${num} is not a prime number`);
//     }
//   }
// } else {
//   console.log(`${num} is not a number`);
// }

// trying to make dynamic by using function
// const ans = (num) => {
//   let isPrime = true;
//   if (typeof num === "number") {
//     if (num < 2) {
//       console.log(`${num}-> not a primary number`);
//     } else {
//       // one number is divisible exactly till it's half only
//       for (let i = 2; i < num / 2; i++) {
//         if (num % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         console.log(`${num} is a prime number`);
//       } else {
//         console.log(`${num} is not a prime number`);
//       }
//     }
//   } else {
//     console.log(`${num} is not a number`);
//   }
// };
// ans(55);

// *************************odd and even number*********************************
// odd even check
// 1
// let num = 12;
// if (num % 2 === 0) console.log(`${num} is even number`);
// else console.log(`${num} is odd number`);

// 2
// const num = 11;
// const result = num % 2 === 0 ? `${num} is even number` : `${num} is odd number`;
// console.log(result);

// 3
// let ans = (a) => {
//   if (a % 2 === 0) {
//     console.log(`${a} is even number`);
//   } else {
//     console.log(`${a} is odd number`);
//   }
// };
// ans(40);
// ans(11);

// ***************************************palindrome****************************
// 1
// let originStr = "madam";
// // for each loop we are not measuring it's length (as it doesnot change in each loop and it is neither be calculated for each loop)better we keep the string length in one variable at first
// const stringLength = originStr.length - 1; //2
// let reversedString = "";
// for (let i = stringLength; i >= 0; i--) {
//   reversedString = reversedString + originStr[i];
//   // debugger;
// }
// console.log(`the reversed of string ${originStr} is ${reversedString}`);
// const isPalindrome =
//   reversedString === originStr
//     ? `${originStr} is a palindrome`
//     : `${originStr} is not a palindrome`;
// console.log(isPalindrome);

//2 by using general arrow function
// const reverseValue = (str) => {
//   // yesari basxa yeta like let str='madam';
//   const stringLength = str.length - 1;
//   let reversedString = "";
//   for (let i = stringLength; i >= 0; i--) {
//     reversedString = reversedString + str[i];
//   }

//   let _palindrome =
//     str === reversedString
//       ? `${str}is a palindrome`
//       : `${str}is not a palindrome`;

//   console.log(_palindrome);
// };
// reverseValue("dog");
// reverseValue("mom");
// reverseValue("lama");
// reverseValue("madam");

// 3 palindrome can be either number or string
// const reverseValue = (value) => {
//   let str;
//   if (typeof value === "number") {
//     str = value.toString();
//   } else {
//     str = value;
//   }

//   const length = str.length - 1;
//   let reversedString = "";
//   for (let i = length; i >= 0; i--) {
//     reversedString = reversedString + str[i];
//   }
//   let _palindrome =
//     str === reversedString
//       ? `${str}is a palindrome`
//       : `${str}is not a palindrome`;

//   console.log(_palindrome);
// };
// reverseValue("sam");
// reverseValue(122222201);

//3 by passing call by value in function with return because outside function any returned variable inside the block is undefined outside the block
// viiiiippppppp one function can only solve one problem so here we are making 2 function for solving a palindrome problem
// one is reverse function and another one is palindrome function

// reverse function
// const reverseValue = (value) => {
//   let str;
//   if (typeof value === "number") {
//     str = value.toString();
//   } else {
//     str = value; //if user passes value as string
//   }
//   const strLength = str.length - 1;
//   let reversedString = "";

//   for (let i = strLength; i >= 0; i--) {
//     reversedString = reversedString + str[i];
//   }
//   return { reversedString, str };
// };
// let data = reverseValue("madam");
// console.log(data); //gives reversedstring value by this way

// // palindrome function
// let _palindrome = (reversedString, str) => {
//   let result =
//     reversedString === str ? `${str} is palindrome` : `${str} is palindrome`;
//   console.log(result);
// };
// _palindrome(data.reversedString, data.str);

// *************************hw***************************************************************
//Q1. Find maximum and minimum numbers in an array. eg:
// 	[7, 2, 9, 1, 5] : Output should be:
// 	9 is the maximum number
// 	1 is the minimum number

// 1. using method
// let arr = [7, 2, 9, 1, 5];
// console.log(`original array : ${arr}`);
// arr.sort();
// console.log(`array sorted in ascending order : ${arr}`);
// arr.reverse();
// console.log(
//   `array sorted in reverse order (which means descending order) : ${arr}`
// );
// let ans = arr.filter((value, i) => {
//   if (arr.indexOf(value) == 0) {
//     console.log(`${value} is the maximum number`);
//   } else if (arr.indexOf(value) == arr.length - 1) {
//     console.log(`${value} is the mininum number`);
//   }
// });

// 2.using forEach method loop lagayera lopp mai end garnu xa vaney use forEach method of array
// let arr = [7, 2, 9, 1, 5];
// const findMaxAndMinValue = (array1) => {
//   // conditional operation gardi chalnu paryo so here we are supposing two variable min and max to add conditions in loop
//   let min = array1[0]; //supposing min and max value as 7
//   let max = array1[0];
//   array1.forEach((item, index) => {
//     if (item < min) {
//       min = item;
//     }
//     if (item > max) {
//       max = item;
//     }
//   });
//   return {
//     min,
//     max,
//   };
// };

// let value = findMaxAndMinValue(arr);
// console.log(`${value.min} is the minimum element of a given array`);
// console.log(`${value.max} is the minimum element of a given array`);

// 3.using for loop
// [7, 2, 9, 1, 5] as we dont need to compare the first index number in itself,use for loop
// let array1 = [7, 2, 9, 1, 5];
// const findMaxAndMinValue = (array1) => {
//   let min = array1[0];
//   let max = array1[0];
//   const length = array1.length;
//   for (let i = 1; i < length; i++) {
//     if (array1[i] < min) {
//       min = array1[i];
//     }
//     if (array1[i] > max) {
//       max = array1[i];
//     }
//   }
//   return {
//     minimum: min,
//     maximum: max,
//   };
// };
// let result = findMaxAndMinValue(array1);
// console.log(`${result.minimum} is the minimum value of an array`);
// console.log(`${result.maximum} is the maximum value of an array`);

//Q2. Find if an array consists of duplicate values or not.
// 	['John', 'Jane', 'John', 'Alice'] -> true
// 	[1, 2, 3, 4, 5] -> false

// let name = ["John", "Jane", "Alice", "Alice", "John"];
// let isDuplicate = false;

// function hasDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // console.log(arr[i], arr[j], i, j);
//       if (arr[i] === arr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//   }
// }
// hasDuplicate(name);

// if (isDuplicate) {
//   console.log(`array has a duplicate value`);
// } else {
//   console.log(`array does not have a duplicate value`);
// }

//Q3.Find duplicate count
// let name = ["John", "Jane", "Alice", "Alice", "John"];
// let isDuplicate = false;
// let count = 0;

// function hasDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // console.log(arr[i], arr[j], i, j);
//       if (arr[i] === arr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//   }
// }
// hasDuplicate(name);

// if (isDuplicate) {
//   count++;
//   console.log(count);
//   console.log(`array has a duplicate value`);
// } else {
//   console.log(`array does not have a duplicate value`);
// }

//Q4.odd number/ even with help of filter method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddOrEven = (num) => {
//   let ans = num.filter((value, i) => {
//     if (value % 2 === 0) console.log(`even number: ${value}`);
//     else return console.log(`odd number: ${value}`);
//   });
//   console.log(ans);
// };
// oddOrEven(arr);

// ****************
// const oddOrEven = (num) => {
//   let evenNUm = num.filter((val) => {
//     return val % 2 === 0;
//   });
//   console.log(`even number filtered array :[${evenNUm}]`);
//   let oddNum = num.filter((val) => {
//     return val % 2 != 0;
//   });
//   console.log(`odd number filtered array :[${oddNum}]`);
// };
// oddOrEven(arr);

//Q5. Given an array of strings, write a function that filters out all the strings with a length less than 5 characters and returns a new array with only the filtered strings. Then, loop through the resulting array and concatenate each filtered string with the word "is a short string" and print the resulting sentence.
// 	eg: ["Hello", "This", "is", "a", "test", "string"]
// 	expected result: a is a short string

// let arr = ["Hello", "This", "is", "a", "test", "string"];
// const example = (str) => {
//   let filterStringArray = str.filter((val) => {
//     return val.length < 5;
//   });
//   console.log(filterStringArray);

//   for (let i = 0; i < filterStringArray.length; i++) {
//     console.log(filterStringArray[i] + `is a short string`);
//   }
// };
// example(arr);

// *****************************************************
// let a = [1, 2, 3, "bidhya", "kali", 4];
// let b = [];
// // every data needs to be looped
// // data gives array
// // loop lagako for forEach jastai
// for (let data of a) {
//   if (typeof data === "string") {
//     b.push(data);
//   }
// }
// console.log(b);

// let a = [1, 2, 3, "bidhya", "kali", 4];
// let b = [];
// a.forEach((val) => {
//   if (typeof val === `string`) {
//     return b.push(val);
//   }
// })
// console.log(b);

// customize garera ni value return garna milxa map but filter ma mildaina

////****************************************************************************
// Missing Number: Write a function that takes an array of numbers from 1 to n, with one number missing, and returns the missing number.
// let array = [1, 9];
// let n = 20;
// let outputArray = [];
// const missingNumberFun = (arr) => {
//   for (let index = 1; index < n; index++) {
//     // check

//     !arr.includes(index) ? outputArray.push(index) : "";
//   }
//   console.log(outputArray);
// };
// missingNumberFun(array);

// let array = [1, 9];
// let n = 20;
// let outputArray = [];
// const missingNumberFun = (arr) => {
//   for (let i = 1; i < n; i++) {
//     // check

//     // !arr.includes(index) ? outputArray.push(index) : "";
//     arr.filter((val) => {
//       return i !== val ? outputArray.push(i) : "";
//     });
//   }
//   console.log(outputArray);
// };
// missingNumberFun(array);
