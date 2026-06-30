
// =====================================================
// 1. NORMAL OBJECT
// =====================================================

const person = {
  name: "Deepansh",

  age: 20,
};

console.log(person);

// =====================================================
// 2. OBJECT METHOD
// =====================================================

const student = {
  name: "Rahul",

  greet() {
    console.log("Hello");
  },
};

student.greet();

// =====================================================
// 3. PROTOTYPE CHAIN
// =====================================================

const arr = [1, 2, 3];

console.log(arr.toString());

/*

Question:

Where did toString()
come from?

Answer:

Array Prototype

Array
   ↓
Array.prototype
   ↓
Object.prototype
   ↓
null

*/

// =====================================================
// 4. CHECK PROTOTYPE
// =====================================================

const user = {
  name: "Aman",
};

console.log(Object.getPrototypeOf(user));

// =====================================================
// 5. CUSTOM PROTOTYPE
// =====================================================

const animal = {
  eat() {
    console.log("Eating...");
  },
};

const dog = Object.create(animal);

dog.name = "Tommy";

dog.eat();

console.log(dog.name);

/*

dog
 ↓
animal
 ↓
Object.prototype
 ↓
null

*/

// =====================================================
// 6. PROTOTYPE PROPERTY
// =====================================================

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};

const p1 = new Person("Deepansh");

p1.sayHello();

// =====================================================
// 7. CONSTRUCTOR FUNCTION
// =====================================================

function Student(name, age) {
  this.name = name;

  this.age = age;
}

const s1 = new Student("Rahul", 21);

console.log(s1);

// =====================================================
// 8. HOW NEW WORKS
// =====================================================

function Car(brand) {
  this.brand = brand;
}

const c1 = new Car("BMW");

console.log(c1);

/*

new does:

1. Creates object
2. Links prototype
3. Binds this
4. Returns object

*/

// =====================================================
// 9. MULTIPLE OBJECTS
// =====================================================

function Employee(name) {
  this.name = name;
}

Employee.prototype.work = function () {
  console.log(this.name + " Working");
};

const e1 = new Employee("Rohit");

const e2 = new Employee("Mohit");

e1.work();
e2.work();

// =====================================================
// 10. CLASS SYNTAX
// =====================================================

class User {
  constructor(name, age) {
    this.name = name;

    this.age = age;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const u1 = new User("Deepansh", 20);

u1.greet();

// =====================================================
// 11. CLASS WITH METHODS
// =====================================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " Makes Sound");
  }
}

const a1 = new Animal("Dog");

a1.speak();

// =====================================================
// 12. INHERITANCE
// =====================================================

class Parent {
  greet() {
    console.log("Parent Method");
  }
}

class Child extends Parent {}

const child = new Child();

child.greet();

// =====================================================
// 13. EXTENDS
// =====================================================

class Vehicle {
  start() {
    console.log("Vehicle Started");
  }
}

class Bike extends Vehicle {}

const bike = new Bike();

bike.start();

// =====================================================
// 14. SUPER KEYWORD
// =====================================================

class Person2 {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person2 {
  constructor(name, subject) {
    super(name);

    this.subject = subject;
  }
}

const t1 = new Teacher("Amit", "Math");

console.log(t1);

// =====================================================
// 15. METHOD OVERRIDING
// =====================================================

class Shape {
  draw() {
    console.log("Drawing Shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing Circle");
  }
}

const circle = new Circle();

circle.draw();

// =====================================================
// 16. PROOF CLASS IS SYNTACTIC SUGAR
// =====================================================

class Test {
  sayHi() {
    console.log("Hi");
  }
}

function Test2() {}

Test2.prototype.sayHi = function () {
  console.log("Hi");
};

/*

Both work almost same.

Class internally uses
prototype system.

*/

// =====================================================
// 17. OBJECT.CREATE()
// =====================================================

const parent = {
  greet() {
    console.log("Hello");
  },
};

const childObj = Object.create(parent);

childObj.greet();

// =====================================================
// 18. HAS OWN PROPERTY
// =====================================================

const obj = {
  name: "Deepansh",
};

console.log(obj.hasOwnProperty("name"));

console.log(obj.hasOwnProperty("toString"));

/*

true
false

*/

// =====================================================
// 19. INTERVIEW QUESTION
// =====================================================

function Human(name) {
  this.name = name;
}

Human.prototype.walk = function () {
  console.log(this.name + " Walking");
};

const h1 = new Human("Rahul");

h1.walk();

// =====================================================
// 20. INTERVIEW QUESTION
// =====================================================

class Student2 {
  constructor(name) {
    this.name = name;
  }

  study() {
    console.log(this.name + " Studying");
  }
}

const st = new Student2("Aman");

st.study();

