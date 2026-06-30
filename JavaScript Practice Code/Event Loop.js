
// =====================================================
// 1. SYNCHRONOUS CODE
// =====================================================

console.log("Start");

console.log("Middle");

console.log("End");

/*
Output:

Start
Middle
End
*/

// =====================================================
// 2. SINGLE THREADED NATURE
// =====================================================

function task1() {
  console.log("Task 1");
}

function task2() {
  console.log("Task 2");
}

task1();
task2();

/*
Output:

Task 1
Task 2
*/

// =====================================================
// 3. CALL STACK EXAMPLE
// =====================================================

function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
  three();
}

function three() {
  console.log("Three");
}

one();

/*

Call Stack:

one()
two()
three()

Output:

One
Two
Three

*/

// =====================================================
// 4. BLOCKING CODE
// =====================================================

console.log("Start");

for (let i = 0; i < 1000000000; i++) {
  // heavy work
}

console.log("End");

/*
Browser freezes until loop completes.
*/

// =====================================================
// 5. INTRODUCTION TO setTimeout
// =====================================================

console.log("Start");

setTimeout(() => {
  console.log("Timeout Finished");
}, 2000);

console.log("End");

/*
Output:

Start
End
Timeout Finished
*/

// =====================================================
// 6. WEB API FLOW
// =====================================================

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

/*
Output:

A
C
B

Reason:
setTimeout goes to Web API first.
*/

// =====================================================
// 7. CALLBACK QUEUE
// =====================================================

console.log("Program Started");

setTimeout(() => {
  console.log("Task From Queue");
}, 1000);

console.log("Program Ended");

/*
Output:

Program Started
Program Ended
Task From Queue
*/

// =====================================================
// 8. EVENT LOOP EXAMPLE
// =====================================================

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

console.log("4");

/*
Output:

1
3
4
2

Event Loop checks:
1. Is Call Stack empty?
2. If yes -> move callback to stack.
*/

// =====================================================
// 9. MULTIPLE TIMEOUTS
// =====================================================

setTimeout(() => {
  console.log("First");
}, 3000);

setTimeout(() => {
  console.log("Second");
}, 1000);

setTimeout(() => {
  console.log("Third");
}, 2000);

/*
Output:

Second
Third
First
*/

// =====================================================
// 10. INTERVAL
// =====================================================

let count = 0;

const id = setInterval(() => {
  count++;

  console.log("Running", count);

  if (count === 5) {
    clearInterval(id);
  }
}, 1000);

// =====================================================
// 11. EVENT LISTENER + WEB API
// =====================================================

document.addEventListener("click", () => {
  console.log("Document Clicked");
});

/*
Click event waits inside browser Web APIs.
*/

// =====================================================
// 12. INTERVIEW QUESTION
// =====================================================

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

/*
Output:

Start
End
Timeout
*/

// =====================================================
// 13. INTERVIEW QUESTION
// =====================================================

console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

setTimeout(() => {
  console.log("C");
}, 0);

console.log("D");

/*
Output:

A
D
C
B
*/

// =====================================================
// 14. NESTED CALLBACKS
// =====================================================

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

/*
Callback Hell Preview
*/

// =====================================================
// 15. EVENT LOOP VISUALIZATION
// =====================================================

console.log("Script Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

console.log("Script End");

/*

Call Stack:
------------
console.log(Start)
setTimeout()
console.log(End)

Web APIs:
------------
Timeout

Callback Queue:
------------
Timeout Callback

Event Loop:
------------
Moves callback to stack
when stack becomes empty.

Output:

Script Start
Script End
Timeout Callback

*/
