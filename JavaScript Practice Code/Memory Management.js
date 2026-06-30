// -----------------------------------------------------
// Primitive Data Types (Stored by Value)
// -----------------------------------------------------

let age = 19;
let marks = 95;
let isStudent = true;

console.log(age);
console.log(marks);
console.log(isStudent);

// -----------------------------------------------------
// Pass By Value
// -----------------------------------------------------

let x = 10;
let y = x;

y = 20;

console.log("x =", x);
console.log("y =", y);

// x remains unchanged

// -----------------------------------------------------
// String Example
// -----------------------------------------------------

let name1 = "Deepansh";
let name2 = name1;

name2 = "Boss";

console.log(name1);
console.log(name2);

// -----------------------------------------------------
// Objects (Stored in Heap)
// -----------------------------------------------------

let student = {
  name: "Deepansh",
  age: 19,
};

console.log(student);

// -----------------------------------------------------
// Reference Copy
// -----------------------------------------------------

let student2 = student;

student2.age = 20;

console.log(student);
console.log(student2);

// Both changed because they point to same object

// -----------------------------------------------------
// Array Reference Example
// -----------------------------------------------------

let arr1 = [10, 20, 30];

let arr2 = arr1;

arr2.push(40);

console.log(arr1);
console.log(arr2);

// -----------------------------------------------------
// Separate Copy using Spread Operator
// -----------------------------------------------------

let original = [1, 2, 3];

let copy = [...original];

copy.push(4);

console.log(original);
console.log(copy);

// -----------------------------------------------------
// Heap Allocation Example
// -----------------------------------------------------

let person = {
  name: "Deepansh",
  city: "Aligarh",
};

console.log(person);

// -----------------------------------------------------
// Dynamic Allocation
// -----------------------------------------------------

let dynamicArray = [];

dynamicArray.push(10);
dynamicArray.push(20);
dynamicArray.push(30);

console.log(dynamicArray);

// -----------------------------------------------------
// Null Assignment
// -----------------------------------------------------

let user = {
  name: "John",
};

console.log(user);

user = null;

console.log(user);

// Old object becomes eligible for garbage collection

// -----------------------------------------------------
// Garbage Collection Demo
// -----------------------------------------------------

let data = {
  course: "JavaScript",
};

console.log(data);

data = null;

// Memory can be cleaned automatically

// -----------------------------------------------------
// Loop Example
// -----------------------------------------------------

for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// -----------------------------------------------------
// Small Integers Example
// -----------------------------------------------------

let smallNumber = 10;
let anotherSmallNumber = 25;

console.log(smallNumber);
console.log(anotherSmallNumber);

// -----------------------------------------------------
// Large Number Example
// -----------------------------------------------------

let largeNumber = 999999999999999;

console.log(largeNumber);

// -----------------------------------------------------
// Primitive Comparison
// -----------------------------------------------------

let a = 100;
let b = 100;

console.log(a === b);

// -----------------------------------------------------
// Object Comparison
// -----------------------------------------------------

let obj1 = { value: 100 };
let obj2 = { value: 100 };

console.log(obj1 === obj2);

// false because references are different

// -----------------------------------------------------
// Same Reference Comparison
// -----------------------------------------------------

let obj3 = obj1;

console.log(obj1 === obj3);

// true because both reference same object

// -----------------------------------------------------
// Extra Practice
// -----------------------------------------------------

let courseName = "JavaScript";

let anotherCourse = courseName;

anotherCourse = "Node.js";

console.log(courseName);
console.log(anotherCourse);

let laptop = {
  brand: "HP",
  ram: "16GB",
};

let laptopCopy = laptop;

laptopCopy.ram = "32GB";

console.log(laptop);
console.log(laptopCopy);
