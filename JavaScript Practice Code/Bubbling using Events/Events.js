
// =====================================================
// BASIC EVENT
// =====================================================

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log("Button Clicked");
});

// =====================================================
// EVENT OBJECT
// =====================================================

button.addEventListener("click", (event) => {
  console.log(event);

  console.log(event.type);

  console.log(event.target);
});

// =====================================================
// MOUSE EVENTS
// =====================================================

button.addEventListener("mouseenter", () => {
  console.log("Mouse Enter");
});

button.addEventListener("mouseleave", () => {
  console.log("Mouse Leave");
});

// =====================================================
// INPUT EVENT
// =====================================================

const username = document.getElementById("username");

username.addEventListener("input", (event) => {
  console.log(event.target.value);
});

// =====================================================
// KEYBOARD EVENT
// =====================================================

username.addEventListener("keydown", (event) => {
  console.log(event.key);
});

// =====================================================
// CHANGE EVENT
// =====================================================

username.addEventListener("change", (event) => {
  console.log("Final Value:", event.target.value);
});

// =====================================================
// BUBBLING
// =====================================================

const parent = document.querySelector(".parent");

const child = document.querySelector(".child");

const grandchild = document.querySelector(".grandchild");

parent.addEventListener("click", () => {
  console.log("Parent Clicked");
});

child.addEventListener("click", () => {
  console.log("Child Clicked");
});

grandchild.addEventListener("click", () => {
  console.log("Grandchild Clicked");
});

// Click Grandchild
// Output:
//
// Grandchild
// Child
// Parent

// =====================================================
// stopPropagation()
// =====================================================

grandchild.addEventListener("dblclick", (event) => {
  event.stopPropagation();

  console.log("Propagation Stopped");
});

// =====================================================
// EVENT CAPTURING
// =====================================================

parent.addEventListener(
  "click",
  () => {
    console.log("Parent Capturing");
  },
  true,
);

child.addEventListener(
  "click",
  () => {
    console.log("Child Capturing");
  },
  true,
);

grandchild.addEventListener(
  "click",
  () => {
    console.log("Grandchild Capturing");
  },
  true,
);

// Output:
//
// Parent Capturing
// Child Capturing
// Grandchild Capturing

// =====================================================
// EVENT TARGET
// =====================================================

const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  console.log("Target:", event.target);
});

// =====================================================
// EVENT CURRENT TARGET
// =====================================================

list.addEventListener("click", (event) => {
  console.log("Current Target:", event.currentTarget);
});

// =====================================================
// EVENT DELEGATION
// =====================================================

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.textContent);
  }
});

// =====================================================
// DYNAMIC LIST ITEM
// =====================================================

const newItem = document.createElement("li");

newItem.textContent = "React";

list.appendChild(newItem);

// Event Delegation still works
// No new listener required

// =====================================================
// PRACTICAL EXAMPLE
// =====================================================

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.color = "red";
  }
});

// =====================================================
// MULTIPLE EVENTS
// =====================================================

button.addEventListener("click", () => {
  console.log("Listener 1");
});

button.addEventListener("click", () => {
  console.log("Listener 2");
});

button.addEventListener("click", () => {
  console.log("Listener 3");
});

// =====================================================
// REMOVE EVENT LISTENER
// =====================================================

function greet() {
  console.log("Hello Boss");
}

button.addEventListener("click", greet);

button.removeEventListener("click", greet);

// =====================================================
// PREVENT DEFAULT
// =====================================================

const link = document.createElement("a");

link.href = "https://google.com";

link.textContent = "Google";

document.body.append(link);

link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log("Navigation Prevented");
});

