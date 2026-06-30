// -----------------------------------------------------
// Basic Function
// -----------------------------------------------------

function greet() {
  console.log("Hello Boss");
}

greet();

// -----------------------------------------------------
// Function Reusability
// -----------------------------------------------------

function sayHello() {
  console.log("Hello");
}

sayHello();
sayHello();
sayHello();

// -----------------------------------------------------
// Parameters & Arguments
// -----------------------------------------------------

function add(a, b) {
  console.log(a + b);
}

add(10, 20);
add(50, 30);

// -----------------------------------------------------
// Returning Values
// -----------------------------------------------------

function multiply(a, b) {
  return a * b;
}

let result = multiply(5, 4);

console.log(result);

// -----------------------------------------------------
// Default Values
// -----------------------------------------------------

function welcome(name = "Guest") {
  console.log(`Welcome ${name}`);
}

welcome("Deepansh");
welcome();

// -----------------------------------------------------
// Rest Operator
// -----------------------------------------------------

function collectValues(...values) {
  console.log(values);
}

collectValues(10, 20, 30);
collectValues("A", "B", "C", "D");

// -----------------------------------------------------
// Sum Using Rest Operator
// -----------------------------------------------------

function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));

// -----------------------------------------------------
// Rest with Normal Parameters
// -----------------------------------------------------

function studentInfo(name, course, ...skills) {
  console.log(name);
  console.log(course);
  console.log(skills);
}

studentInfo("Deepansh", "BCA", "HTML", "CSS", "JavaScript");

// -----------------------------------------------------
// Spread Operator
// -----------------------------------------------------

let numbers = [10, 20, 30];

console.log(...numbers);

// -----------------------------------------------------
// Spread with Function
// -----------------------------------------------------

function addition(a, b, c) {
  return a + b + c;
}

let arr = [10, 20, 30];

console.log(addition(...arr));

// -----------------------------------------------------
// Function Declaration
// -----------------------------------------------------

function greetUser() {
  console.log("Function Declaration");
}

greetUser();

// -----------------------------------------------------
// Function Expression
// -----------------------------------------------------

const greetExpression = function () {
  console.log("Function Expression");
};

greetExpression();

// -----------------------------------------------------
// Arrow Function
// -----------------------------------------------------

const hello = () => {
  console.log("Hello from Arrow Function");
};

hello();

// -----------------------------------------------------
// Arrow Function with Parameters
// -----------------------------------------------------

const square = (num) => {
  return num * num;
};

console.log(square(5));

// -----------------------------------------------------
// Arrow Implicit Return
// -----------------------------------------------------

const cube = (num) => num * num * num;

console.log(cube(3));

// -----------------------------------------------------
// Arrow Single Parameter
// -----------------------------------------------------

const double = (num) => num * 2;

console.log(double(10));

// -----------------------------------------------------
// Arrow Multiple Parameters
// -----------------------------------------------------

const subtract = (a, b) => a - b;

console.log(subtract(20, 5));

// -----------------------------------------------------
// Arrow Return Object
// -----------------------------------------------------

const createUser = () => ({
  name: "Deepansh",
  age: 19,
});

console.log(createUser());

// -----------------------------------------------------
// Calling Arrow Functions
// -----------------------------------------------------

const message = () => {
  console.log("Arrow Function Called");
};

message();

// -----------------------------------------------------
// IIFE
// -----------------------------------------------------

(function () {
  console.log("IIFE Executed");
})();

// -----------------------------------------------------
// IIFE with Parameters
// -----------------------------------------------------

(function (name) {
  console.log(`Hello ${name}`);
})("Deepansh");

// -----------------------------------------------------
// Arrow Function IIFE
// -----------------------------------------------------

(() => {
  console.log("Arrow IIFE Executed");
})();

// -----------------------------------------------------
// Callback Function
// -----------------------------------------------------

function processUser(callback) {
  console.log("Processing User...");
  callback();
}

function completed() {
  console.log("User Processed");
}

processUser(completed);

// -----------------------------------------------------
// Callback with Anonymous Function
// -----------------------------------------------------

processUser(function () {
  console.log("Anonymous Callback");
});

// -----------------------------------------------------
// Callback with Arrow Function
// -----------------------------------------------------

processUser(() => {
  console.log("Arrow Callback");
});

// -----------------------------------------------------
// Callback Example
// -----------------------------------------------------

function downloadFile(callback) {
  console.log("Downloading File...");
  callback();
}

downloadFile(() => {
  console.log("Download Complete");
});

// -----------------------------------------------------
// Payment and Order Example
// -----------------------------------------------------

function makePayment(amount, callback) {
  console.log(`Payment of ₹${amount} Successful`);

  callback();
}

function placeOrder() {
  console.log("Order Placed Successfully");
}

makePayment(999, placeOrder);

// -----------------------------------------------------
// Callback Chain Example
// -----------------------------------------------------

function login(callback) {
  console.log("User Logged In");
  callback();
}

function fetchProfile(callback) {
  console.log("Profile Fetched");
  callback();
}

function showDashboard() {
  console.log("Dashboard Opened");
}

login(() => {
  fetchProfile(() => {
    showDashboard();
  });
});

// -----------------------------------------------------
// Function Returning Function
// -----------------------------------------------------

function outerFunction() {
  return function () {
    console.log("Inner Function");
  };
}

const inner = outerFunction();

inner();

// -----------------------------------------------------
// Practice Examples
// -----------------------------------------------------

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));

// -----------------------------------------------------
// Largest Number
// -----------------------------------------------------

function findMax(a, b) {
  return a > b ? a : b;
}

console.log(findMax(10, 20));

// -----------------------------------------------------
// Greeting Function
// -----------------------------------------------------

function greetStudent(name = "Student") {
  console.log(`Welcome ${name}`);
}

greetStudent("Deepansh");
greetStudent();

// -----------------------------------------------------
// Sum Using Arrow Function
// -----------------------------------------------------

const addNumbers = (a, b) => a + b;

console.log(addNumbers(100, 200));

// -----------------------------------------------------
// Array and Callback
// -----------------------------------------------------

let nums = [1, 2, 3, 4, 5];

nums.forEach(function (value) {
  console.log(value);
});

// -----------------------------------------------------
// Arrow Callback with forEach
// -----------------------------------------------------

nums.forEach((value) => {
  console.log(value * 2);
});
