
// -----------------------------------------------------
// Creating Arrays
// -----------------------------------------------------

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);

// -----------------------------------------------------
// Printing Array Elements
// -----------------------------------------------------

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// -----------------------------------------------------
// Array Length
// -----------------------------------------------------

console.log(fruits.length);

// -----------------------------------------------------
// Heterogeneous Arrays
// -----------------------------------------------------

let mixed = ["Deepansh", 19, true, null, undefined];

console.log(mixed);

// -----------------------------------------------------
// Accessing Elements by Index
// -----------------------------------------------------

let colors = ["Red", "Green", "Blue"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// Last Element

console.log(colors[colors.length - 1]);

// -----------------------------------------------------
// Arrays Are Mutable
// -----------------------------------------------------

let arr = [10, 20, 30];

arr[1] = 999;

console.log(arr);

// -----------------------------------------------------
// push()
// Add Element at End
// -----------------------------------------------------

let numbers = [1, 2, 3];

numbers.push(4);
numbers.push(5);

console.log(numbers);

// -----------------------------------------------------
// pop()
// Remove Element from End
// -----------------------------------------------------

numbers.pop();

console.log(numbers);

// -----------------------------------------------------
// unshift()
// Add Element at Beginning
// -----------------------------------------------------

numbers.unshift(0);

console.log(numbers);

// -----------------------------------------------------
// shift()
// Remove First Element
// -----------------------------------------------------

numbers.shift();

console.log(numbers);

// -----------------------------------------------------
// for Loop
// -----------------------------------------------------

let marks = [80, 90, 70, 60];

for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

// -----------------------------------------------------
// for...of Loop
// -----------------------------------------------------

for (let value of marks) {
  console.log(value);
}

// -----------------------------------------------------
// Copy By Reference
// -----------------------------------------------------

let original = [10, 20, 30];

let copy = original;

copy.push(40);

console.log(original);
console.log(copy);

// -----------------------------------------------------
// Using const with Array
// -----------------------------------------------------

const cities = ["Delhi", "Mumbai"];

cities.push("Bangalore");

console.log(cities);

// cities = []; // Error

// -----------------------------------------------------
// slice()
// -----------------------------------------------------

let nums = [10, 20, 30, 40, 50];

console.log(nums.slice(1, 4));

console.log(nums.slice(2));

console.log(nums.slice());

// Original Array Unchanged

console.log(nums);

// -----------------------------------------------------
// splice()
// -----------------------------------------------------

let data = [10, 20, 30, 40, 50];

data.splice(1, 2);

console.log(data);

// -----------------------------------------------------
// splice() Insert
// -----------------------------------------------------

let values = [10, 20, 50];

values.splice(2, 0, 30, 40);

console.log(values);

// -----------------------------------------------------
// splice() Replace
// -----------------------------------------------------

let items = [1, 2, 3, 4];

items.splice(1, 2, 100, 200);

console.log(items);

// -----------------------------------------------------
// Spread Operator
// -----------------------------------------------------

let a = [1, 2, 3];
let b = [4, 5, 6];

let merged = [...a, ...b];

console.log(merged);

// -----------------------------------------------------
// Copy Using Spread
// -----------------------------------------------------

let array1 = [10, 20, 30];

let array2 = [...array1];

array2.push(40);

console.log(array1);
console.log(array2);

// -----------------------------------------------------
// Array to String
// -----------------------------------------------------

let names = ["Deepansh", "Rahul", "Aman"];

console.log(names.toString());

console.log(names.join(" "));

console.log(names.join("-"));

// -----------------------------------------------------
// Searching
// -----------------------------------------------------

let fruitsList = ["Apple", "Mango", "Banana"];

console.log(fruitsList.includes("Mango"));

console.log(fruitsList.includes("Orange"));

console.log(fruitsList.indexOf("Banana"));

console.log(fruitsList.indexOf("Orange"));

// -----------------------------------------------------
// String Sorting
// -----------------------------------------------------

let languages = ["Java", "Python", "C", "JavaScript"];

languages.sort();

console.log(languages);

// -----------------------------------------------------
// Reverse
// -----------------------------------------------------

languages.reverse();

console.log(languages);

// -----------------------------------------------------
// Number Sort Problem
// -----------------------------------------------------

let nums2 = [100, 2, 25, 9, 1];

nums2.sort();

console.log(nums2);

// Output:
// [1,100,2,25,9]

// -----------------------------------------------------
// Ascending Sort
// -----------------------------------------------------

let asc = [100, 2, 25, 9, 1];

asc.sort((a, b) => a - b);

console.log(asc);

// -----------------------------------------------------
// Descending Sort
// -----------------------------------------------------

let desc = [100, 2, 25, 9, 1];

desc.sort((a, b) => b - a);

console.log(desc);

// -----------------------------------------------------
// Flatten Nested Array
// -----------------------------------------------------

let nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(nested.flat());

// -----------------------------------------------------
// Deep Flatten
// -----------------------------------------------------

let deepNested = [[1, [2, [3, [4]]]]];

console.log(deepNested.flat(Infinity));

// -----------------------------------------------------
// Arrays Behave Like Objects
// -----------------------------------------------------

let studentMarks = [80, 90, 70];

console.log(typeof studentMarks);

// -----------------------------------------------------
// Custom Properties
// -----------------------------------------------------

studentMarks.name = "Deepansh";

console.log(studentMarks);

console.log(studentMarks.name);

// -----------------------------------------------------
// Array Keys
// -----------------------------------------------------

console.log(Object.keys(studentMarks));

// -----------------------------------------------------
// Array Entries
// -----------------------------------------------------

console.log(Object.entries(studentMarks));

// -----------------------------------------------------
// Extra Practice
// -----------------------------------------------------

let practice = [10, 20, 30];

practice.push(40);

practice.unshift(5);

practice.pop();

console.log(practice);

for (let value of practice) {
  console.log(value);
}

// -----------------------------------------------------
// Sum of Array
// -----------------------------------------------------

let sumArray = [10, 20, 30, 40];

let sum = 0;

for (let value of sumArray) {
  sum += value;
}

console.log("Sum =", sum);

// -----------------------------------------------------
// Largest Number
// -----------------------------------------------------

let largest = [5, 15, 50, 25];

let max = largest[0];

for (let value of largest) {
  if (value > max) {
    max = value;
  }
}

console.log("Largest =", max);
