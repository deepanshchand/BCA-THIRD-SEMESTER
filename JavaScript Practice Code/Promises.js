
// =====================================================
// 1. SIMPLE PROMISE
// =====================================================

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// =====================================================
// 2. PENDING → FULFILLED
// =====================================================

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 2000);
});

promise1.then((data) => {
  console.log(data);
});

// =====================================================
// 3. PENDING → REJECTED
// =====================================================

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Server Error");
  }, 1000);
});

promise2.catch((error) => {
  console.log(error);
});

// =====================================================
// 4. CALLBACK HELL VS PROMISE
// =====================================================

// BAD

/*
register(() => {

    login(() => {

        getUserData(() => {

            dashboard();

        });

    });

});
*/

// GOOD

function register() {
  return Promise.resolve("Registered");
}

function login() {
  return Promise.resolve("Logged In");
}

function getUserData() {
  return Promise.resolve("User Data");
}

register()
  .then((msg) => {
    console.log(msg);

    return login();
  })
  .then((msg) => {
    console.log(msg);

    return getUserData();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });

// =====================================================
// 5. PROMISE CHAINING
// =====================================================

Promise.resolve(10)

  .then((value) => {
    return value * 2;
  })

  .then((value) => {
    return value + 5;
  })

  .then((value) => {
    console.log(value);
  });

/*

10
20
25

*/

// =====================================================
// 6. CATCH ERROR
// =====================================================

Promise.resolve()

  .then(() => {
    throw new Error("Something Wrong");
  })

  .catch((error) => {
    console.log(error.message);
  });

// =====================================================
// 7. FINALLY
// =====================================================

Promise.resolve("Success")

  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  })

  .finally(() => {
    console.log("Always Runs");
  });

// =====================================================
// 8. PROMISE.ALL
// =====================================================

const p1 = Promise.resolve("A");

const p2 = Promise.resolve("B");

const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])

  .then((result) => {
    console.log(result);
  });

/*

["A","B","C"]

*/

// =====================================================
// 9. PROMISE.RACE
// =====================================================

const race1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fast");
  }, 1000);
});

const race2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Slow");
  }, 3000);
});

Promise.race([race1, race2])

  .then((result) => {
    console.log(result);
  });

/*

Fast

*/

// =====================================================
// 10. PROMISE.ALLSETTLED
// =====================================================

const settle1 = Promise.resolve("Success");

const settle2 = Promise.reject("Failed");

Promise.allSettled([settle1, settle2])

  .then((result) => {
    console.log(result);
  });

// =====================================================
// 11. PROMISE.ANY
// =====================================================

const any1 = Promise.reject("Error 1");

const any2 = Promise.resolve("Winner");

const any3 = Promise.reject("Error 2");

Promise.any([any1, any2, any3])

  .then((result) => {
    console.log(result);
  });

/*

Winner

*/

// =====================================================
// 12. FOOD DELIVERY USING PROMISES
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

placeOrder()
  .then((msg) => {
    console.log(msg);

    return prepareFood();
  })

  .then((msg) => {
    console.log(msg);

    return deliverFood();
  })

  .then((msg) => {
    console.log(msg);
  });

// =====================================================
// 13. JSON vs JS OBJECT
// =====================================================

const user = {
  name: "Deepansh",
  age: 20,
};

console.log(user);

// JSON STRING

const jsonData = '{"name":"Deepansh","age":20}';

console.log(jsonData);

// =====================================================
// 14. OBJECT TO JSON
// =====================================================

const student = {
  name: "Rahul",
  age: 21,
};

const jsonString = JSON.stringify(student);

console.log(jsonString);

// =====================================================
// 15. JSON TO OBJECT
// =====================================================

const jsonText = '{"city":"Delhi","population":20000000}';

const obj = JSON.parse(jsonText);

console.log(obj);
