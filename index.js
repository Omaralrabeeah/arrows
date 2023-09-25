// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello ${name}`;
console.log(greet("omar"));
// Q2) Write a simple arrow function that takes two parameters and returns their sum.
// 1st way
const sum = (x, y) => {
  return x + y;
};
console.log(sum(7, 8));
// // 2nd way and easy
// const twoNumbers = (x, y) => a+b:

// Q3) Write a simple arrow function that squares a number.
// 1st way
const squaredNumber = (num1) => {
  return num1 * num1;
};
// // 2nd way

// const multipliedBy2 = (num) => num*num
// console.log(squaredNumber(9))

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const squareArray = (arr) => {
  let newArray = [];
  for (counter = 0; counter < arr.length; counter++) {
    newArray.push(squaredNumber(arr[counter]));
  }
  return newArray;
};
squareArray([1, 2, 3, 4]);
