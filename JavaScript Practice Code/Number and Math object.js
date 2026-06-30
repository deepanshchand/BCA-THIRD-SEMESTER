
// -----------------------------------------------------
// Number Data Type
// -----------------------------------------------------

let num = 123;
let decimal = 99.99;

console.log(num);
console.log(decimal);

console.log(typeof num);
console.log(typeof decimal);

// -----------------------------------------------------
// Basic Operations
// -----------------------------------------------------

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);

// -----------------------------------------------------
// toFixed()
// -----------------------------------------------------

let price = 123.456789;

console.log(price.toFixed(0));
console.log(price.toFixed(1));
console.log(price.toFixed(2));
console.log(price.toFixed(3));

// -----------------------------------------------------
// toFixed() Returns String
// -----------------------------------------------------

let result = price.toFixed(2);

console.log(result);
console.log(typeof result);

// -----------------------------------------------------
// Immutability
// -----------------------------------------------------

let original = 45.6789;

original.toFixed(2);

console.log(original);

// -----------------------------------------------------
// toPrecision()
// -----------------------------------------------------

let number = 123.456789;

console.log(number.toPrecision(1));
console.log(number.toPrecision(2));
console.log(number.toPrecision(3));
console.log(number.toPrecision(5));
console.log(number.toPrecision(8));

// -----------------------------------------------------
// toString()
// -----------------------------------------------------

let marks = 95;

let strMarks = marks.toString();

console.log(strMarks);
console.log(typeof strMarks);

// -----------------------------------------------------
// Number Object
// -----------------------------------------------------

let primitiveNumber = 100;

let objectNumber = new Number(100);

console.log(primitiveNumber);
console.log(objectNumber);

console.log(typeof primitiveNumber);
console.log(typeof objectNumber);

// -----------------------------------------------------
// Object Comparison Issue
// -----------------------------------------------------

let a = new Number(100);
let b = new Number(100);

console.log(a == b);
console.log(a === b);

// -----------------------------------------------------
// Primitive Comparison
// -----------------------------------------------------

let x = 100;
let y = 100;

console.log(x == y);
console.log(x === y);

// -----------------------------------------------------
// Truthy Object Example
// -----------------------------------------------------

let value = new Number(0);

if (value) {
  console.log("Object is Truthy");
} else {
  console.log("Falsy");
}

// -----------------------------------------------------
// Primitive 0 is Falsy
// -----------------------------------------------------

let zero = 0;

if (zero) {
  console.log("Truthy");
} else {
  console.log("0 is Falsy");
}

// -----------------------------------------------------
// Methods on Primitives
// -----------------------------------------------------

let n = 123;

console.log(n.toString());
console.log(n.toFixed(2));

// -----------------------------------------------------
// Copy By Value
// -----------------------------------------------------

let p1 = 10;
let p2 = p1;

p2 = 20;

console.log(p1);
console.log(p2);

// -----------------------------------------------------
// Copy By Reference
// -----------------------------------------------------

let obj1 = {
  name: "Deepansh",
};

let obj2 = obj1;

obj2.name = "Boss";

console.log(obj1);
console.log(obj2);

// -----------------------------------------------------
// Math Object
// -----------------------------------------------------

console.log(Math);

// -----------------------------------------------------
// Math.ceil()
// -----------------------------------------------------

console.log(Math.ceil(4.1));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.9));

// -----------------------------------------------------
// Math.floor()
// -----------------------------------------------------

console.log(Math.floor(4.1));
console.log(Math.floor(4.5));
console.log(Math.floor(4.9));

// -----------------------------------------------------
// Math.round()
// -----------------------------------------------------

console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.8));

// -----------------------------------------------------
// Math.abs()
// -----------------------------------------------------

console.log(Math.abs(-10));
console.log(Math.abs(-100));

// -----------------------------------------------------
// Math.max()
// -----------------------------------------------------

console.log(Math.max(10, 20, 30, 40, 50));

// -----------------------------------------------------
// Math.min()
// -----------------------------------------------------

console.log(Math.min(10, 20, 30, 40, 50));

// -----------------------------------------------------
// Math.pow()
// -----------------------------------------------------

console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

// -----------------------------------------------------
// Math.sqrt()
// -----------------------------------------------------

console.log(Math.sqrt(25));
console.log(Math.sqrt(144));

// -----------------------------------------------------
// Math.random()
// -----------------------------------------------------

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// -----------------------------------------------------
// Random Number 0 to 9
// -----------------------------------------------------

let random0to9 = Math.floor(Math.random() * 10);

console.log(random0to9);

// -----------------------------------------------------
// Random Number 1 to 10
// -----------------------------------------------------

let random1to10 = Math.floor(Math.random() * 10) + 1;

console.log(random1to10);

// -----------------------------------------------------
// Dice Roll (1 to 6)
// -----------------------------------------------------

let dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice:", dice);

// -----------------------------------------------------
// General Formula
// -----------------------------------------------------

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(1, 100));
console.log(randomBetween(50, 60));
console.log(randomBetween(1000, 9999));

// -----------------------------------------------------
// OTP Generation
// -----------------------------------------------------

let otp = Math.floor(Math.random() * 9000) + 1000;

console.log("OTP:", otp);

// -----------------------------------------------------
// Multiple OTPs
// -----------------------------------------------------

for (let i = 1; i <= 5; i++) {
  let otp = Math.floor(Math.random() * 9000) + 1000;
  console.log("Generated OTP:", otp);
}

// -----------------------------------------------------
// Password Length Example
// -----------------------------------------------------

let passwordLength = randomBetween(8, 16);

console.log(passwordLength);

// -----------------------------------------------------
// Random Array Element
// -----------------------------------------------------

let fruits = ["Apple", "Banana", "Mango", "Orange"];

let randomIndex = Math.floor(Math.random() * fruits.length);

console.log(fruits[randomIndex]);

// -----------------------------------------------------
// Homework Practice
// -----------------------------------------------------

console.log(randomBetween(1, 50));
console.log(randomBetween(100, 500));
console.log(randomBetween(-10, 10));

let luckyNumber = Math.floor(Math.random() * 100) + 1;

console.log("Lucky Number:", luckyNumber);

