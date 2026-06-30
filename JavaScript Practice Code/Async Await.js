
// =====================================================
// 1. BASIC ASYNC FUNCTION
// =====================================================

async function greet() {
  return "Hello Boss";
}

greet().then((result) => {
  console.log(result);
});

/*

Output:

Hello Boss

*/

// =====================================================
// 2. ASYNC ALWAYS RETURNS A PROMISE
// =====================================================

async function getNumber() {
  return 100;
}

console.log(getNumber());

/*

Output:

Promise { 100 }

*/

// =====================================================
// 3. SIMPLE AWAIT
// =====================================================

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

async function getData() {
  const result = await fetchData();

  console.log(result);
}

getData();

// =====================================================
// 4. WITHOUT ASYNC AWAIT
// =====================================================

fetchData().then((result) => {
  console.log(result);
});

// =====================================================
// 5. PROMISE CHAINING
// =====================================================

function register() {
  return Promise.resolve("Registered");
}

function login() {
  return Promise.resolve("Logged In");
}

function dashboard() {
  return Promise.resolve("Dashboard Opened");
}

register()
  .then((msg) => {
    console.log(msg);

    return login();
  })

  .then((msg) => {
    console.log(msg);

    return dashboard();
  })

  .then((msg) => {
    console.log(msg);
  });

// =====================================================
// 6. SAME CODE USING ASYNC AWAIT
// =====================================================

async function startApp() {
  const r1 = await register();

  console.log(r1);

  const r2 = await login();

  console.log(r2);

  const r3 = await dashboard();

  console.log(r3);
}

startApp();

// =====================================================
// 7. ERROR HANDLING
// =====================================================

function getUser() {
  return new Promise((resolve, reject) => {
    reject("User Not Found");
  });
}

async function loadUser() {
  try {
    const result = await getUser();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

loadUser();

// =====================================================
// 8. FINALLY
// =====================================================

async function testFinally() {
  try {
    const data = await Promise.resolve("Success");

    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Always Executes");
  }
}

testFinally();

// =====================================================
// 9. MULTIPLE AWAIT
// =====================================================

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2");
    }, 1000);
  });
}

async function executeTasks() {
  const result1 = await task1();

  console.log(result1);

  const result2 = await task2();

  console.log(result2);
}

executeTasks();

// =====================================================
// 10. FOOD DELIVERY EXAMPLE
// =====================================================

function placeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Order Placed");
    }, 1000);
  });
}

function prepareFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Food Prepared");
    }, 2000);
  });
}

function deliverFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Food Delivered");
    }, 1000);
  });
}

async function foodDelivery() {
  const order = await placeOrder();

  console.log(order);

  const food = await prepareFood();

  console.log(food);

  const delivery = await deliverFood();

  console.log(delivery);
}

foodDelivery();

// =====================================================
// 11. TOP LEVEL AWAIT DEMO
// =====================================================

function slowTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Task Done");
    }, 3000);
  });
}

/*

Modern JavaScript Modules:

const result = await slowTask();

console.log(result);

This blocks the module until completion.

*/

// =====================================================
// 12. BETTER APPROACH
// =====================================================

async function runTask() {
  const result = await slowTask();

  console.log(result);
}

runTask();

console.log("Other Code Running");

/*

Output:

Other Code Running

(wait)

Slow Task Done

*/

// =====================================================
// 13. INTERVIEW QUESTION
// =====================================================

async function demo() {
  return "JavaScript";
}

demo().then((result) => {
  console.log(result);
});

/*

Output:

JavaScript

*/

// =====================================================
// 14. INTERVIEW QUESTION
// =====================================================

async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

test();

console.log("C");

/*

Output:

A
C
B

*/

