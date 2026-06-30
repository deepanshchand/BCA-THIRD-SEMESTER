
// -----------------------------------------------------
// Creating Strings
// -----------------------------------------------------

let name = "Deepansh";
let city = "Aligarh";
let course = `BCA`;

console.log(name);
console.log(city);
console.log(course);

// -----------------------------------------------------
// Why Backticks Are Modern (Template Literals)
// -----------------------------------------------------

let age = 19;

console.log("My name is " + name + " and age is " + age);

console.log(`My name is ${name} and age is ${age}`);

// Multi-line String

let message = `Hello Boss
Welcome to JavaScript
Happy Coding`;

console.log(message);

// -----------------------------------------------------
// String Length
// -----------------------------------------------------

let str = "JavaScript";

console.log(str.length);

// -----------------------------------------------------
// Accessing Characters by Index
// -----------------------------------------------------

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

console.log(str[str.length - 1]);

// -----------------------------------------------------
// Strings Are Immutable
// -----------------------------------------------------

let text = "Hello";

// text[0] = "Y"; // Not possible

console.log(text);

// -----------------------------------------------------
// Uppercase
// -----------------------------------------------------

let language = "javascript";

console.log(language.toUpperCase());

// -----------------------------------------------------
// Lowercase
// -----------------------------------------------------

let upper = "JAVASCRIPT";

console.log(upper.toLowerCase());

// -----------------------------------------------------
// Finding Substrings
// -----------------------------------------------------

let sentence = "I am learning JavaScript";

console.log(sentence.includes("Java"));
console.log(sentence.includes("Python"));

console.log(sentence.indexOf("learning"));
console.log(sentence.indexOf("Boss"));

// -----------------------------------------------------
// slice()
// -----------------------------------------------------

let word = "JavaScript";

console.log(word.slice(0, 4));
console.log(word.slice(4));
console.log(word.slice(0, 10));

// -----------------------------------------------------
// Negative Indices in slice()
// -----------------------------------------------------

console.log(word.slice(-6));
console.log(word.slice(-4));
console.log(word.slice(-10, -4));

// -----------------------------------------------------
// substring()
// -----------------------------------------------------

console.log(word.substring(0, 4));
console.log(word.substring(4, 10));

// Difference Example

console.log(word.substring(-3, 4));
console.log(word.slice(-3));

// -----------------------------------------------------
// Concatenation
// -----------------------------------------------------

let firstName = "Deepansh";
let lastName = "Chand";

console.log(firstName + " " + lastName);

console.log(firstName.concat(" ", lastName));

// -----------------------------------------------------
// Concatenation with Numbers
// -----------------------------------------------------

console.log("Age: " + 19);

console.log("10" + 5);

console.log(10 + "5");

console.log("10" + "5");

// -----------------------------------------------------
// replace()
// -----------------------------------------------------

let line = "I love Java";

console.log(line.replace("Java", "JavaScript"));

let sentence2 = "Hello World";

console.log(sentence2.replace("World", "Boss"));

// -----------------------------------------------------
// trim()
// -----------------------------------------------------

let username = "     Deepansh     ";

console.log(username);

console.log(username.trim());

// -----------------------------------------------------
// split()
// -----------------------------------------------------

let fruits = "Apple,Mango,Banana,Orange";

console.log(fruits.split(","));

let fullName = "Deepansh Chand";

console.log(fullName.split(" "));

let skills = "HTML CSS JavaScript";

console.log(skills.split(" "));

// -----------------------------------------------------
// DATE OBJECT
// -----------------------------------------------------

let currentDate = new Date();

console.log(currentDate);

// -----------------------------------------------------
// Current Date & Time
// -----------------------------------------------------

console.log(new Date());

// -----------------------------------------------------
// UTC Time
// -----------------------------------------------------

let now = new Date();

console.log(now.toUTCString());

// -----------------------------------------------------
// Local Time
// -----------------------------------------------------

console.log(now.toLocaleString());

console.log(now.toLocaleDateString());

console.log(now.toLocaleTimeString());

// -----------------------------------------------------
// ISO Format
// -----------------------------------------------------

console.log(now.toISOString());

// -----------------------------------------------------
// Extracting Date Components
// -----------------------------------------------------

console.log(now.getFullYear());

console.log(now.getMonth());

console.log(now.getDate());

console.log(now.getDay());

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getSeconds());

// -----------------------------------------------------
// Creating Custom Dates
// -----------------------------------------------------

let birthday = new Date("2006-12-20");

console.log(birthday);

let customDate = new Date(2025, 11, 25);

console.log(customDate);

// -----------------------------------------------------
// More Date Methods
// -----------------------------------------------------

console.log(birthday.getFullYear());

console.log(birthday.getMonth());

console.log(birthday.getDate());

// -----------------------------------------------------
// Date.now()
// -----------------------------------------------------

console.log(Date.now());

// -----------------------------------------------------
// Milliseconds Since Epoch
// -----------------------------------------------------

let epochMilliseconds = Date.now();

console.log(epochMilliseconds);

// -----------------------------------------------------
// Converting Epoch to Date
// -----------------------------------------------------

let dateFromEpoch = new Date(epochMilliseconds);

console.log(dateFromEpoch);

// -----------------------------------------------------
// Date Difference Example
// -----------------------------------------------------

let start = Date.now();

// Some operation

for (let i = 0; i < 1000000; i++) {}

let end = Date.now();

console.log("Execution Time:", end - start, "ms");

// -----------------------------------------------------
// Browser Automatic UTC Conversion Demo
// -----------------------------------------------------

let utcDate = new Date("2025-01-01T00:00:00Z");

console.log(utcDate);

console.log(utcDate.toLocaleString());

// -----------------------------------------------------
// Homework Practice
// -----------------------------------------------------

let college = "KITM";

console.log(college.length);

console.log(college.toUpperCase());

console.log(college.toLowerCase());

console.log(college.slice(0, 2));

console.log(college.includes("IT"));

let today = new Date();

console.log(today.getDate());

console.log(today.getMonth() + 1);

console.log(today.getFullYear());
