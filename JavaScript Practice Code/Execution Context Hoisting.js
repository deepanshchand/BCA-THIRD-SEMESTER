
// -----------------------------------------------------
// Global Execution Context
// -----------------------------------------------------

console.log("Program Started");

let user = "Deepansh";

console.log(user);

console.log("Program Ended");

// -----------------------------------------------------
// Memory Allocation Phase Example
// -----------------------------------------------------

var a;

console.log(a);

a = 10;

console.log(a);

// -----------------------------------------------------
// Execution Phase Example
// -----------------------------------------------------

var x = 20;

var y = 30;

console.log(x + y);

// -----------------------------------------------------
// Function Execution Context
// -----------------------------------------------------

function greet() {
  console.log("Hello Boss");
}

greet();

// -----------------------------------------------------
// Function Call Execution Context
// -----------------------------------------------------

function add(num1, num2) {
  let result = num1 + num2;

  console.log(result);
}

add(10, 20);

add(50, 50);

// -----------------------------------------------------
// Nested Function Calls
// -----------------------------------------------------

function first() {
  console.log("First Function");

  second();
}

function second() {
  console.log("Second Function");

  third();
}

function third() {
  console.log("Third Function");
}

first();

// -----------------------------------------------------
// Call Stack Demo
// -----------------------------------------------------

function one() {
  console.log("One");
}

function two() {
  one();

  console.log("Two");
}

function three() {
  two();

  console.log("Three");
}

three();

// -----------------------------------------------------
// Stack Memory (Primitive)
// -----------------------------------------------------

let age = 19;

let copiedAge = age;

copiedAge = 20;

console.log(age);

console.log(copiedAge);

// -----------------------------------------------------
// Heap Memory (Objects)
// -----------------------------------------------------

let student = {
  name: "Deepansh",
};

let studentCopy = student;

studentCopy.name = "Boss";

console.log(student);

console.log(studentCopy);

// -----------------------------------------------------
// Interpreter Running Code Line By Line
// -----------------------------------------------------

let num = 10;

num = num + 5;

num = num * 2;

console.log(num);

// -----------------------------------------------------
// Hoisting with var
// -----------------------------------------------------

console.log(city);

var city = "Aligarh";

// Equivalent Internally:

// var city;
// console.log(city);
// city = "Aligarh";

// -----------------------------------------------------
// Another Hoisting Example
// -----------------------------------------------------

console.log(score);

var score = 100;

console.log(score);

// -----------------------------------------------------
// var Hoisting
// -----------------------------------------------------

var language;

console.log(language);

language = "JavaScript";

console.log(language);

// -----------------------------------------------------
// let and Temporal Dead Zone
// -----------------------------------------------------

// console.log(course);

let course = "BCA";

console.log(course);

// -----------------------------------------------------
// const and Temporal Dead Zone
// -----------------------------------------------------

// console.log(pi);

const pi = 3.14;

console.log(pi);

// -----------------------------------------------------
// var vs let
// -----------------------------------------------------

var college = "KITM";

var college = "New KITM";

console.log(college);

let branch = "BCA";

// let branch = "BBA"; // Error

console.log(branch);

// -----------------------------------------------------
// Function Declaration Hoisting
// -----------------------------------------------------

sayHello();

function sayHello() {
  console.log("Hello from Function Declaration");
}

// -----------------------------------------------------
// Function Expression Hoisting
// -----------------------------------------------------

// greetUser();

var greetUser = function () {
  console.log("Hello from Function Expression");
};

greetUser();

// -----------------------------------------------------
// Another Function Expression Example
// -----------------------------------------------------

// multiply(10, 20);

var multiply = function (a, b) {
  return a * b;
};

console.log(multiply(10, 20));

// -----------------------------------------------------
// Arrow Function Hoisting
// -----------------------------------------------------

// square(5);

const square = (num) => {
  return num * num;
};

console.log(square(5));

// -----------------------------------------------------
// Hoisting with undefined
// -----------------------------------------------------

console.log(test);

var test = "Hoisting";

console.log(test);

// -----------------------------------------------------
// Variable Initialization
// -----------------------------------------------------

var value;

console.log(value);

value = 500;

console.log(value);

// -----------------------------------------------------
// Multiple Variables
// -----------------------------------------------------

console.log(firstName);
console.log(lastName);

var firstName = "Deepansh";
var lastName = "Chand";

console.log(firstName);
console.log(lastName);

// -----------------------------------------------------
// Function and Variable Hoisting
// -----------------------------------------------------

function display() {
  console.log("Function Executed");
}

display();

var message = "JavaScript";

console.log(message);

// -----------------------------------------------------
// Execution Context Example
// -----------------------------------------------------

let globalValue = 100;

function demo() {
  let localValue = 200;

  console.log(globalValue);

  console.log(localValue);
}

demo();

// -----------------------------------------------------
// Scope Example
// -----------------------------------------------------

let outside = "Global";

function checkScope() {
  let inside = "Local";

  console.log(outside);

  console.log(inside);
}

checkScope();

// -----------------------------------------------------
// Stack Order Example
// -----------------------------------------------------

function A() {
  console.log("A Start");

  B();

  console.log("A End");
}

function B() {
  console.log("B Start");

  C();

  console.log("B End");
}

function C() {
  console.log("C");
}

A();

// -----------------------------------------------------
// Practice Example
// -----------------------------------------------------

console.log(number);

var number = 50;

console.log(number);

// -----------------------------------------------------
// Practice Example
// -----------------------------------------------------

function welcome() {
  console.log("Welcome Boss");
}

welcome();

// -----------------------------------------------------
// Practice Example
// -----------------------------------------------------

let marks = 90;

function showMarks() {
  console.log(marks);
}

showMarks();

