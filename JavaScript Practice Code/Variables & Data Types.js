// -----------------------------------------------------
// VARIABLES
// -----------------------------------------------------

let name = "Deepansh";
console.log(name);

name = "Deepansh Chand";
console.log(name);

// -----------------------------------------------------
// CONSTANTS
// -----------------------------------------------------

const pi = 3.14159;
console.log(pi);

// pi = 5; // Error

// -----------------------------------------------------
// OLD METHOD : var
// -----------------------------------------------------

var age = 19;
console.log(age);

age = 20;
console.log(age);

// -----------------------------------------------------
// NUMBER
// -----------------------------------------------------

let marks = 95;
let price = 99.99;

console.log(marks);
console.log(price);

// -----------------------------------------------------
// STRING
// -----------------------------------------------------

let firstName = "Deepansh";
let city = "Aligarh";

console.log(firstName);
console.log(city);

// -----------------------------------------------------
// BOOLEAN
// -----------------------------------------------------

let isStudent = true;
let isPlaced = false;

console.log(isStudent);
console.log(isPlaced);

// -----------------------------------------------------
// UNDEFINED
// -----------------------------------------------------

let course;

console.log(course);
console.log(typeof course);

// -----------------------------------------------------
// CONST AND UNDEFINED
// -----------------------------------------------------

const country = "India";
console.log(country);

// -----------------------------------------------------
// BIGINT
// -----------------------------------------------------

let bigNumber = 1234567890123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);

// -----------------------------------------------------
// NULL
// -----------------------------------------------------

let data = null;

console.log(data);
console.log(typeof data);

// -----------------------------------------------------
// SYMBOL
// -----------------------------------------------------

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1);
console.log(id2);
console.log(id1 === id2);

// -----------------------------------------------------
// ARRAY
// -----------------------------------------------------

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
console.log(typeof fruits);

// -----------------------------------------------------
// OBJECT
// -----------------------------------------------------

let student = {
  name: "Deepansh",
  age: 19,
  course: "BCA",
};

console.log(student);
console.log(typeof student);

// -----------------------------------------------------
// FUNCTION
// -----------------------------------------------------

function greet() {
  console.log("Hello Boss");
}

greet();

console.log(typeof greet);

// -----------------------------------------------------
// FUNCTIONS AS VARIABLES
// -----------------------------------------------------

let sayHello = function () {
  console.log("Hello from Variable Function");
};

sayHello();

// -----------------------------------------------------
// TYPEOF PRIMITIVE DATATYPES
// -----------------------------------------------------

console.log(typeof 100);
console.log(typeof "Deepansh");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof 123n);

// -----------------------------------------------------
// TYPEOF NULL BUG
// -----------------------------------------------------

console.log(typeof null); // object (historical bug)

// -----------------------------------------------------
// TYPEOF NON-PRIMITIVE DATATYPES
// -----------------------------------------------------

console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});

// -----------------------------------------------------
// IMMUTABILITY OF PRIMITIVES
// -----------------------------------------------------

let str = "Hello";

let copyStr = str;

copyStr = "World";

console.log(str);
console.log(copyStr);

// -----------------------------------------------------
// MUTABILITY OF NON-PRIMITIVES
// -----------------------------------------------------

let arr1 = [1, 2, 3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);

// -----------------------------------------------------
// PASS BY VALUE (PRIMITIVE)
// -----------------------------------------------------

let x = 10;
let y = x;

y = 20;

console.log(x);
console.log(y);

// -----------------------------------------------------
// PASS BY REFERENCE (NON-PRIMITIVE)
// -----------------------------------------------------

let obj1 = {
  name: "Deepansh",
};

let obj2 = obj1;

obj2.name = "Boss";

console.log(obj1);
console.log(obj2);

// -----------------------------------------------------
// EXTRA PRACTICE
// -----------------------------------------------------

let college = "KITM";
let semester = 3;
let cgpa = 8.5;
let passed = true;

console.log(college);
console.log(semester);
console.log(cgpa);
console.log(passed);
