
// Creating Objects

let student = {
  name: "Deepansh",
  age: 19,
  course: "BCA",
};

console.log(student);

// Printing Objects

console.log(student);

// Dot Notation

console.log(student.name);
console.log(student.age);
console.log(student.course);

// CRUD Operations

let user = {
  name: "Rahul",
  age: 20,
};

user.city = "Aligarh";

console.log(user.name);

user.age = 21;

delete user.city;

console.log(user);

// Keys Are Strings

let obj = {
  name: "Deepansh",
};

console.log(obj["name"]);
console.log(obj.name);

// Bracket Notation

let key = "age";

let person = {
  name: "Deepansh",
  age: 19,
};

console.log(person[key]);

// Keys with Spaces

let employee = {
  "full name": "Deepansh Chand",
  salary: 50000,
};

console.log(employee["full name"]);

// Copy By Reference

let original = {
  name: "Deepansh",
};

let copy = original;

copy.name = "Boss";

console.log(original);
console.log(copy);

// Object.keys()

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2025,
};

console.log(Object.keys(car));

// Object.values()

console.log(Object.values(car));

// Object.entries()

console.log(Object.entries(car));

// for...in Loop

for (let key in car) {
  console.log(key);
}

// for...in Values

for (let key in car) {
  console.log(car[key]);
}

// Object Destructuring

let laptop = {
  brand: "HP",
  ram: "16GB",
  ssd: "512GB",
};

let { brand, ram, ssd } = laptop;

console.log(brand);
console.log(ram);
console.log(ssd);

// Renaming Variables

let student2 = {
  name: "Deepansh",
  age: 19,
};

let { name: studentName, age: studentAge } = student2;

console.log(studentName);
console.log(studentAge);

// Array Destructuring

let colors = ["Red", "Green", "Blue"];

let [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

// for...of with Object

let product = {
  name: "Laptop",
  price: 50000,
};

for (let [key, value] of Object.entries(product)) {
  console.log(key, value);
}

// Adding Methods

let person2 = {
  name: "Deepansh",

  greet: function () {
    console.log("Hello Boss");
  },
};

person2.greet();

// this Keyword

let user2 = {
  name: "Deepansh",

  intro: function () {
    console.log(this.name);
  },
};

user2.intro();

// Nested Objects

let student3 = {
  name: "Deepansh",

  address: {
    city: "Aligarh",
    state: "UP",
  },
};

console.log(student3.address.city);
console.log(student3.address.state);

// Shallow Copy

let obj1 = {
  name: "Deepansh",
  address: {
    city: "Aligarh",
  },
};

let obj2 = { ...obj1 };

obj2.address.city = "Delhi";

console.log(obj1);
console.log(obj2);

// Deep Copy

let deepCopy = structuredClone(obj1);

deepCopy.address.city = "Mumbai";

console.log(obj1);
console.log(deepCopy);

// Number Keys

let marks = {
  1: "One",
  2: "Two",
};

console.log(marks[1]);
console.log(marks["1"]);

// Arrays Are Objects

let arr = [10, 20, 30];

console.log(typeof arr);

console.log(Object.keys(arr));

console.log(Object.entries(arr));

// Symbol Keys

let secret = Symbol("id");

let account = {
  name: "Deepansh",
  [secret]: 12345,
};

console.log(account.name);
console.log(account[secret]);

// References in Arrays

let objectArray = [{ name: "A" }, { name: "B" }];

objectArray[0].name = "Changed";

console.log(objectArray);

// const Array Push Example

const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);

// Extra Practice

let mobile = {
  brand: "Samsung",
  model: "S25",
  price: 80000,

  showInfo() {
    console.log(this.brand);
    console.log(this.model);
    console.log(this.price);
  },
};

mobile.showInfo();
