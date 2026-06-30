
// -----------------------------------------------------
// forEach()
// -----------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (value) {
  console.log(value);
});

// -----------------------------------------------------
// forEach with Arrow Function
// -----------------------------------------------------

numbers.forEach((value) => {
  console.log(value * 2);
});

// -----------------------------------------------------
// forEach Index
// -----------------------------------------------------

numbers.forEach((value, index) => {
  console.log(index, value);
});

// -----------------------------------------------------
// filter()
// -----------------------------------------------------

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

// -----------------------------------------------------
// filter Odd Numbers
// -----------------------------------------------------

const oddNumbers = nums.filter((num) => num % 2 !== 0);

console.log(oddNumbers);

// -----------------------------------------------------
// filter Greater Than
// -----------------------------------------------------

const greaterThanFive = nums.filter((num) => num > 5);

console.log(greaterThanFive);

// -----------------------------------------------------
// Custom filter Implementation
// -----------------------------------------------------

function customFilter(array, callback) {
  const result = [];

  for (let value of array) {
    if (callback(value)) {
      result.push(value);
    }
  }

  return result;
}

const answer = customFilter([10, 20, 30, 40, 50], (value) => value > 25);

console.log(answer);

// -----------------------------------------------------
// Prototype Example
// -----------------------------------------------------

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let value of this) {
    if (callback(value)) {
      result.push(value);
    }
  }

  return result;
};

const test = [1, 2, 3, 4, 5];

console.log(test.myFilter((value) => value > 2));

// -----------------------------------------------------
// map()
// -----------------------------------------------------

const arr = [1, 2, 3, 4, 5];

const doubled = arr.map((value) => value * 2);

console.log(doubled);

// -----------------------------------------------------
// map String Transformation
// -----------------------------------------------------

const names = ["deepansh", "rahul", "aman"];

const upperNames = names.map((name) => name.toUpperCase());

console.log(upperNames);

// -----------------------------------------------------
// map Objects
// -----------------------------------------------------

const users = [
  { name: "Deepansh", age: 19 },
  { name: "Rahul", age: 20 },
];

const userNames = users.map((user) => user.name);

console.log(userNames);

// -----------------------------------------------------
// Product Filtering
// -----------------------------------------------------

const products = [
  {
    name: "Laptop",
    price: 50000,
  },
  {
    name: "Mouse",
    price: 500,
  },
  {
    name: "Keyboard",
    price: 1500,
  },
];

const expensiveProducts = products.filter((product) => product.price > 1000);

console.log(expensiveProducts);

// -----------------------------------------------------
// Product Sorting
// -----------------------------------------------------

products.sort((a, b) => {
  return a.price - b.price;
});

console.log(products);

// -----------------------------------------------------
// Transform Product Data
// -----------------------------------------------------

const productNames = products.map((product) => {
  return product.name;
});

console.log(productNames);

// -----------------------------------------------------
// reduce()
// -----------------------------------------------------

const values = [10, 20, 30, 40];

const total = values.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);

// -----------------------------------------------------
// reduce Maximum Value
// -----------------------------------------------------

const maximum = values.reduce((max, current) => {
  return current > max ? current : max;
});

console.log(maximum);

// -----------------------------------------------------
// reduce Minimum Value
// -----------------------------------------------------

const minimum = values.reduce((min, current) => {
  return current < min ? current : min;
});

console.log(minimum);

// -----------------------------------------------------
// Total Product Price
// -----------------------------------------------------

const cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);

console.log(totalPrice);

// -----------------------------------------------------
// Set
// -----------------------------------------------------

const set1 = new Set();

set1.add(10);
set1.add(20);
set1.add(30);

console.log(set1);

// -----------------------------------------------------
// Duplicate Removal
// -----------------------------------------------------

const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(duplicateNumbers)];

console.log(uniqueNumbers);

// -----------------------------------------------------
// Set Has
// -----------------------------------------------------

const uniqueSet = new Set([1, 2, 3, 4]);

console.log(uniqueSet.has(2));
console.log(uniqueSet.has(10));

// -----------------------------------------------------
// Set Delete
// -----------------------------------------------------

uniqueSet.delete(2);

console.log(uniqueSet);

// -----------------------------------------------------
// Set Size
// -----------------------------------------------------

console.log(uniqueSet.size);

// -----------------------------------------------------
// Iterating Set
// -----------------------------------------------------

for (let value of uniqueSet) {
  console.log(value);
}

// -----------------------------------------------------
// Map
// -----------------------------------------------------

const studentMap = new Map();

studentMap.set("name", "Deepansh");
studentMap.set("age", 19);
studentMap.set("course", "BCA");

console.log(studentMap);

// -----------------------------------------------------
// Map Get
// -----------------------------------------------------

console.log(studentMap.get("name"));

// -----------------------------------------------------
// Map Has
// -----------------------------------------------------

console.log(studentMap.has("age"));

// -----------------------------------------------------
// Map Delete
// -----------------------------------------------------

studentMap.delete("course");

console.log(studentMap);

// -----------------------------------------------------
// Map Size
// -----------------------------------------------------

console.log(studentMap.size);

// -----------------------------------------------------
// Iterating Map
// -----------------------------------------------------

for (let [key, value] of studentMap) {
  console.log(key, value);
}

// -----------------------------------------------------
// Advanced Map Example
// -----------------------------------------------------

const countryCodes = new Map();

countryCodes.set("India", "+91");
countryCodes.set("USA", "+1");
countryCodes.set("UK", "+44");

console.log(countryCodes);

console.log(countryCodes.get("India"));

// -----------------------------------------------------
// Object Keys vs Map Keys
// -----------------------------------------------------

const objKey = { id: 1 };

const mapExample = new Map();

mapExample.set(objKey, "Student");

console.log(mapExample.get(objKey));

// -----------------------------------------------------
// Chaining Map Methods
// -----------------------------------------------------

const chainMap = new Map();

chainMap.set("A", 1).set("B", 2).set("C", 3);

console.log(chainMap);

// -----------------------------------------------------
// Practice: Square Numbers
// -----------------------------------------------------

const squareNumbers = [1, 2, 3, 4, 5];

const squares = squareNumbers.map((num) => num * num);

console.log(squares);

// -----------------------------------------------------
// Practice: Filter Adults
// -----------------------------------------------------

const people = [
  { name: "A", age: 15 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);

// -----------------------------------------------------
// Practice: Total Marks
// -----------------------------------------------------

const marks = [80, 90, 70, 60];

const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

console.log(totalMarks);
