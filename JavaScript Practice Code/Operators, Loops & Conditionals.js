// -----------------------------------------------------
// Arithmetic Operators
// -----------------------------------------------------

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

// -----------------------------------------------------
// Assignment Operators
// -----------------------------------------------------

let x = 10;

x += 5;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

x /= 4;
console.log(x);

x %= 3;
console.log(x);

// -----------------------------------------------------
// Comparison Operators
// -----------------------------------------------------

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);

console.log(10 == 10);
console.log(10 != 5);

// -----------------------------------------------------
// Double Equals vs Triple Equals
// -----------------------------------------------------

console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log(true == 1); // true
console.log(true === 1); // false

console.log(false == 0); // true
console.log(false === 0); // false

// -----------------------------------------------------
// String to Number Conversion
// -----------------------------------------------------

let str1 = "100";

console.log(Number(str1));
console.log(parseInt(str1));

let str2 = "99.99";

console.log(parseFloat(str2));

// -----------------------------------------------------
// NaN (Not a Number)
// -----------------------------------------------------

let invalid = Number("Deepansh");

console.log(invalid);
console.log(typeof invalid);

console.log(isNaN(invalid));
console.log(Number.isNaN(invalid));

// -----------------------------------------------------
// Number to String
// -----------------------------------------------------

let num = 123;

console.log(String(num));
console.log(num.toString());

// -----------------------------------------------------
// Boolean Conversion
// -----------------------------------------------------

console.log(Number(true));
console.log(Number(false));

console.log(String(true));
console.log(String(false));

// -----------------------------------------------------
// Null Conversion
// -----------------------------------------------------

console.log(Number(null));
console.log(String(null));

// -----------------------------------------------------
// Undefined Conversion
// -----------------------------------------------------

console.log(Number(undefined));
console.log(String(undefined));

// -----------------------------------------------------
// Floating Point Precision Problem
// -----------------------------------------------------

console.log(0.1 + 0.2);

console.log(0.1 + 0.2 === 0.3);

// -----------------------------------------------------
// Floating Point Solution
// -----------------------------------------------------

let result = (0.1 * 10 + 0.2 * 10) / 10;

console.log(result);

console.log(Number((0.1 + 0.2).toFixed(2)));

// -----------------------------------------------------
// Loose Equality Rules
// -----------------------------------------------------

console.log(null == undefined);
console.log(null === undefined);

console.log(null == 0);
console.log(undefined == 0);

// -----------------------------------------------------
// Comparisons with Null
// -----------------------------------------------------

console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);

// -----------------------------------------------------
// String Comparison (ASCII / Unicode)
// -----------------------------------------------------

console.log("A" > "B");
console.log("B" > "A");

console.log("apple" > "banana");

console.log("cat" > "car");

console.log("z" > "a");

// -----------------------------------------------------
// For Loop
// -----------------------------------------------------

for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

// -----------------------------------------------------
// Reverse Loop
// -----------------------------------------------------

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// -----------------------------------------------------
// While Loop
// -----------------------------------------------------

let i = 1;

while (i <= 5) {
  console.log("While Loop:", i);
  i++;
}

// -----------------------------------------------------
// Do While Loop
// -----------------------------------------------------

let j = 1;

do {
  console.log("Do While:", j);
  j++;
} while (j <= 5);

// -----------------------------------------------------
// If Condition
// -----------------------------------------------------

let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
}

// -----------------------------------------------------
// If Else
// -----------------------------------------------------

let marks = 40;

if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// -----------------------------------------------------
// Else If Ladder
// -----------------------------------------------------

let score = 78;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// -----------------------------------------------------
// Logical AND (&&)
// -----------------------------------------------------

let isLoggedIn = true;
let isAdmin = true;

console.log(isLoggedIn && isAdmin);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// -----------------------------------------------------
// AND Short Circuiting
// -----------------------------------------------------

console.log(false && "Hello");

console.log(true && "JavaScript");

let money = 1000;

money > 500 && console.log("You can buy the product");

// -----------------------------------------------------
// Logical OR (||)
// -----------------------------------------------------

console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("" || "Default Value");

console.log(null || "Guest User");

console.log(undefined || "Anonymous");

// -----------------------------------------------------
// OR Short Circuiting
// -----------------------------------------------------

console.log("Deepansh" || "Boss");

console.log(false || "Fallback");

// -----------------------------------------------------
// Not Equal (!=)
// -----------------------------------------------------

console.log(10 != 5);

console.log(10 != "10");

console.log(10 !== "10");

// -----------------------------------------------------
// Practice Questions
// -----------------------------------------------------

let number = 25;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

for (let k = 1; k <= 10; k++) {
  console.log(k);
}

let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}
