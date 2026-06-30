// -----------------------------------------------------
// Global Scope
// -----------------------------------------------------

let globalVariable = "I am Global";

console.log(globalVariable);

function showGlobal() {
  console.log(globalVariable);
}

showGlobal();

// -----------------------------------------------------
// Function Scope
// -----------------------------------------------------

function testScope() {
  let localVariable = "I am Local";

  console.log(localVariable);
}

testScope();

// console.log(localVariable); // Error

// -----------------------------------------------------
// Block Scope (let)
// -----------------------------------------------------

{
  let age = 19;

  console.log(age);
}

// console.log(age); // Error

// -----------------------------------------------------
// Block Scope (const)
// -----------------------------------------------------

{
  const country = "India";

  console.log(country);
}

// console.log(country); // Error

// -----------------------------------------------------
// var is NOT Block Scoped
// -----------------------------------------------------

{
  var city = "Aligarh";
}

console.log(city);

// -----------------------------------------------------
// var Inside Function
// -----------------------------------------------------

function demoVar() {
  var course = "BCA";

  console.log(course);
}

demoVar();

// console.log(course); // Error

// -----------------------------------------------------
// let vs var Example
// -----------------------------------------------------

for (var i = 1; i <= 3; i++) {}

console.log(i);

for (let j = 1; j <= 3; j++) {}

// console.log(j); // Error

// -----------------------------------------------------
// Closure Example 1
// -----------------------------------------------------

function outer() {
  let message = "Hello Boss";

  function inner() {
    console.log(message);
  }

  return inner;
}

const result1 = outer();

result1();

// -----------------------------------------------------
// Closure Example 2
// -----------------------------------------------------

function parent() {
  let name = "Deepansh";

  function child() {
    console.log(name);
  }

  return child;
}

const childFunction = parent();

childFunction();

// -----------------------------------------------------
// Closure Example 3
// -----------------------------------------------------

function counter() {
  let count = 0;

  return function () {
    count++;

    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();

// -----------------------------------------------------
// Independent Closures
// -----------------------------------------------------

const counter1 = counter();
const counter2 = counter();

counter1();
counter1();

counter2();
counter2();

// -----------------------------------------------------
// Private Variable Example
// -----------------------------------------------------

function createUser() {
  let password = "12345";

  return {
    getPassword() {
      console.log(password);
    },
  };
}

const user = createUser();

user.getPassword();

// console.log(password); // Error

// -----------------------------------------------------
// Bank Account Example
// -----------------------------------------------------

function createBankAccount() {
  let balance = 1000;

  return {
    checkBalance() {
      console.log("Balance:", balance);
    },

    deposit(amount) {
      balance += amount;

      console.log(`Deposited ₹${amount}`);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient Balance");
        return;
      }

      balance -= amount;

      console.log(`Withdrawn ₹${amount}`);
    },
  };
}

const account = createBankAccount();

account.checkBalance();

account.deposit(500);

account.checkBalance();

account.withdraw(300);

account.checkBalance();

// -----------------------------------------------------
// Another Private Variable Example
// -----------------------------------------------------

function secretBox() {
  let secret = "JavaScript";

  return function () {
    console.log(secret);
  };
}

const revealSecret = secretBox();

revealSecret();

// -----------------------------------------------------
// Higher Order Function
// -----------------------------------------------------

function greet(callback) {
  console.log("Welcome");

  callback();
}

function sayBye() {
  console.log("Good Bye");
}

greet(sayBye);

// -----------------------------------------------------
// Higher Order Function with Arrow Function
// -----------------------------------------------------

greet(() => {
  console.log("Arrow Callback");
});

// -----------------------------------------------------
// Returning Function
// -----------------------------------------------------

function multiplyBy(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = multiplyBy(2);

console.log(double(10));

const triple = multiplyBy(3);

console.log(triple(10));

// -----------------------------------------------------
// Doubling Value Example
// -----------------------------------------------------

function operation(value, callback) {
  return callback(value);
}

function doubleValue(num) {
  return num * 2;
}

console.log(operation(10, doubleValue));

// -----------------------------------------------------
// Higher Order Function Example
// -----------------------------------------------------

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log(calculate(10, 20, add));

console.log(calculate(20, 5, subtract));

// -----------------------------------------------------
// Arrow Function Callback
// -----------------------------------------------------

console.log(calculate(10, 5, (a, b) => a * b));

// -----------------------------------------------------
// Array forEach (Higher Order Function)
// -----------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (value) {
  console.log(value);
});

// -----------------------------------------------------
// forEach with Arrow Function
// -----------------------------------------------------

numbers.forEach((value) => {
  console.log(value * 10);
});

// -----------------------------------------------------
// Practice Closure
// -----------------------------------------------------

function scoreTracker() {
  let score = 0;

  return {
    increase() {
      score++;
      console.log(score);
    },

    decrease() {
      score--;
      console.log(score);
    },
  };
}

const game = scoreTracker();

game.increase();
game.increase();
game.decrease();

// -----------------------------------------------------
// Practice Scope Example
// -----------------------------------------------------

let university = "AKTU";

function showUniversity() {
  console.log(university);
}

showUniversity();
