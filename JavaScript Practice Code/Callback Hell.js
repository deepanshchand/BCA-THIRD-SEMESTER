
// =====================================================
// 1. SIMPLE CALLBACK
// =====================================================

function greet(name, callback) {
  console.log("Hello", name);

  callback();
}

function sayBye() {
  console.log("Good Bye");
}

greet("Deepansh", sayBye);

/*

Output:

Hello Deepansh
Good Bye

*/

// =====================================================
// 2. CALLBACK WITH ARROW FUNCTION
// =====================================================

function processData(callback) {
  console.log("Processing Data...");

  callback();
}

processData(() => {
  console.log("Data Processed");
});

// =====================================================
// 3. WHY CALLBACKS ARE NEEDED
// =====================================================

console.log("Order Received");

setTimeout(() => {
  console.log("Pizza Prepared");
}, 2000);

console.log("Continue Other Work");

/*

Output:

Order Received
Continue Other Work
Pizza Prepared

*/

// =====================================================
// 4. FOOD DELIVERY EXAMPLE
// =====================================================

function placeOrder(callback) {
  setTimeout(() => {
    console.log("Order Placed");

    callback();
  }, 1000);
}

function prepareFood(callback) {
  setTimeout(() => {
    console.log("Food Prepared");

    callback();
  }, 2000);
}

function deliverFood(callback) {
  setTimeout(() => {
    console.log("Food Delivered");

    callback();
  }, 1500);
}

function paymentDone() {
  console.log("Payment Received");
}

placeOrder(() => {
  prepareFood(() => {
    deliverFood(() => {
      paymentDone();
    });
  });
});

/*

Order Placed
Food Prepared
Food Delivered
Payment Received

*/

// =====================================================
// 5. CALLBACK HELL
// =====================================================

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Step 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/*

This pyramid structure is called:

CALLBACK HELL

*/

// =====================================================
// 6. USER REGISTRATION EXAMPLE
// =====================================================

function register(callback) {
  setTimeout(() => {
    console.log("User Registered");

    callback();
  }, 1000);
}

function login(callback) {
  setTimeout(() => {
    console.log("User Logged In");

    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Loaded");

    callback();
  }, 1000);
}

function displayDashboard() {
  console.log("Dashboard Opened");
}

register(() => {
  login(() => {
    getUserData(() => {
      displayDashboard();
    });
  });
});

// =====================================================
// 7. PROBLEM OF CALLBACK HELL
// =====================================================

setTimeout(() => {
  console.log("Task A");

  setTimeout(() => {
    console.log("Task B");

    setTimeout(() => {
      console.log("Task C");

      setTimeout(() => {
        console.log("Task D");

        setTimeout(() => {
          console.log("Task E");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/*

Problems:

1. Hard to Read
2. Hard to Debug
3. Hard to Maintain
4. Hard to Test
5. Deep Nesting
6. Error Handling Difficult
7. Code Duplication
8. Scalability Issues

*/

// =====================================================
// 8. REAL LIFE EXAMPLE
// =====================================================

function wakeUp(callback) {
  console.log("Wake Up");

  callback();
}

function brush(callback) {
  console.log("Brush Teeth");

  callback();
}

function breakfast(callback) {
  console.log("Eat Breakfast");

  callback();
}

function goCollege() {
  console.log("Go To College");
}

wakeUp(() => {
  brush(() => {
    breakfast(() => {
      goCollege();
    });
  });
});

// =====================================================
// 9. INTERVIEW QUESTION
// =====================================================

console.log("Start");

setTimeout(() => {
  console.log("Callback");
}, 0);

console.log("End");

/*

Output:

Start
End
Callback

*/
