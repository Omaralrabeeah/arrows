//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
// 1/
function filterIt(x) {
  return x >= 25;
}
const Check1 = numbers.filter(filterIt);
console.log(Check1);
// 2/
function divisibleBy(x) {
  return x % 5 == 0;
}
const Check2 = numbers.filter(divisibleBy);
console.log(Check2);
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
// 3/
function squareIt(x) {
  return x * x;
}
const squaredArray = numbers.map(squareIt);
// 4/
function multipliedby2(x) {
  return x * 2;
}
const multipliedArray = numbers.map(multipliedby2);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
function largerThan20(x) {
  return x >= 20;
}
const q5Array = numbers.filter(largerThan20).map(squareIt);

function multipliedBy3(x) {
  return x * 3;
}
const q6Array = numbers.filter(divisibleBy).map(multipliedBy3);
