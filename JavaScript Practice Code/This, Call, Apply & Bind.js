// =====================================================
// 1. GLOBAL THIS
// =====================================================

console.log(this);

/*

Browser:
window

Node.js:
{}

*/

// =====================================================
// 2. THIS INSIDE OBJECT
// =====================================================

const user = {
  name: "Deepansh",

  greet() {
    console.log(this.name);
  },
};

user.greet();

/*

Output:

Deepansh

*/

// =====================================================
// 3. THIS INSIDE REGULAR FUNCTION
// =====================================================

function show() {
  console.log(this);
}

show();

/*

Browser:
window

Strict mode:
undefined

*/

// =====================================================
// 4. THIS INSIDE OBJECT METHOD
// =====================================================

const student = {
  name: "Rahul",

  age: 21,

  info() {
    console.log(this.name);
    console.log(this.age);
  },
};

student.info();

// =====================================================
// 5. ARROW FUNCTION THIS
// =====================================================

const obj1 = {
  name: "Aman",

  greet: () => {
    console.log(this);
  },
};

obj1.greet();

/*

Arrow functions
do NOT have their own this

*/

// =====================================================
// 6. REGULAR FUNCTION VS ARROW
// =====================================================

const obj2 = {
  name: "Rohit",

  regularFunction: function () {
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log(this.name);
  },
};

obj2.regularFunction();
obj2.arrowFunction();

// =====================================================
// 7. NESTED FUNCTION PROBLEM
// =====================================================

const person = {
  name: "Deepansh",

  greet() {
    function inner() {
      console.log(this);
    }

    inner();
  },
};

person.greet();

// =====================================================
// 8. SOLUTION USING ARROW
// =====================================================

const person2 = {
  name: "Deepansh",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

person2.greet();

// =====================================================
// 9. CALL()
// =====================================================

function introduce(city) {
  console.log(this.name, city);
}

const user1 = {
  name: "Deepansh",
};

introduce.call(user1, "Aligarh");

/*

Output:

Deepansh Aligarh

*/

// =====================================================
// 10. CALL WITH MULTIPLE ARGUMENTS
// =====================================================

function details(age, city) {
  console.log(this.name, age, city);
}

const emp = {
  name: "Rahul",
};

details.call(emp, 22, "Delhi");

// =====================================================
// 11. APPLY()
// =====================================================

function info(age, city) {
  console.log(this.name, age, city);
}

const user2 = {
  name: "Amit",
};

info.apply(user2, [25, "Mumbai"]);

/*

Difference:

call -> arguments separately

apply -> arguments array

*/

// =====================================================
// 12. BIND()
// =====================================================

function greet() {
  console.log("Hello", this.name);
}

const user3 = {
  name: "Karan",
};

const newFunction = greet.bind(user3);

newFunction();

// =====================================================
// 13. BIND RETURNS NEW FUNCTION
// =====================================================

function showName() {
  console.log(this.name);
}

const user4 = {
  name: "Aman",
};

const boundFunction = showName.bind(user4);

boundFunction();

// =====================================================
// 14. CALL BORROWING
// =====================================================

const personA = {
  name: "Rahul",

  greet() {
    console.log("Hello", this.name);
  },
};

const personB = {
  name: "Mohit",
};

personA.greet.call(personB);

/*

Output:

Hello Mohit

*/

// =====================================================
// 15. APPLY BORROWING
// =====================================================

const personC = {
  name: "Deepansh",
};

function printInfo(age) {
  console.log(this.name, age);
}

printInfo.apply(personC, [20]);

// =====================================================
// 16. BIND FOR LATER EXECUTION
// =====================================================

const player = {
  name: "Virat",
};

function welcome() {
  console.log("Welcome", this.name);
}

const welcomePlayer = welcome.bind(player);

welcomePlayer();

// =====================================================
// 17. SETTIMEOUT PROBLEM
// =====================================================

const obj3 = {
  name: "Boss",

  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

obj3.greet();

/*

undefined

*/

// =====================================================
// 18. SETTIMEOUT FIX USING ARROW
// =====================================================

const obj4 = {
  name: "Boss",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj4.greet();

// =====================================================
// 19. SETTIMEOUT FIX USING BIND
// =====================================================

const obj5 = {
  name: "Boss",

  greet() {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000,
    );
  },
};

obj5.greet();

// =====================================================
// 20. INTERVIEW QUESTION
// =====================================================

const test = {
  name: "JavaScript",

  show() {
    console.log(this.name);
  },
};

const fn = test.show;

fn();

/*

undefined (strict mode)

*/

// =====================================================
// 21. FIX INTERVIEW QUESTION
// =====================================================

const fixedFn = test.show.bind(test);

fixedFn();

// =====================================================
// 22. CALL VS APPLY VS BIND
// =====================================================

function display(age) {
  console.log(this.name, age);
}

const candidate = {
  name: "Deepansh",
};

display.call(candidate, 20);

display.apply(candidate, [20]);

const boundDisplay = display.bind(candidate, 20);

boundDisplay();
