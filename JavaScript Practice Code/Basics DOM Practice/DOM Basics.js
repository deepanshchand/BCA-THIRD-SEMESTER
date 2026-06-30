// =====================================================
// WINDOW & DOCUMENT
// =====================================================

console.log(window);
console.log(document);

console.log(document.title);

// =====================================================
// getElementById()
// =====================================================

const heading = document.getElementById("heading");

console.log(heading);

// =====================================================
// getElementsByClassName()
// =====================================================

const boxes = document.getElementsByClassName("box");

console.log(boxes);

// =====================================================
// getElementsByTagName()
// =====================================================

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);

// =====================================================
// querySelector()
// =====================================================

const firstBox = document.querySelector(".box");

console.log(firstBox);

const heading2 = document.querySelector("#heading");

console.log(heading2);

// =====================================================
// querySelectorAll()
// =====================================================

const allBoxes = document.querySelectorAll(".box");

allBoxes.forEach((box) => {
  console.log(box.textContent);
});

// =====================================================
// DOM Traversing
// =====================================================

const child = document.querySelector(".child");

console.log(child.parentElement);

const parent = document.querySelector(".parent");

console.log(parent.children);

console.log(child.nextElementSibling);

console.log(child.previousElementSibling);

// =====================================================
// innerHTML
// =====================================================

const content = document.getElementById("content");

console.log(content.innerHTML);

content.innerHTML = "<h2>Changed Using innerHTML</h2>";

// =====================================================
// textContent
// =====================================================

content.textContent = "Changed Using textContent";

// =====================================================
// innerText
// =====================================================

content.innerText = "Changed Using innerText";

// =====================================================
// XSS Example
// =====================================================

// Dangerous
content.innerHTML = "<b>Bold Text</b>";

// Safe
content.textContent = "<script>alert('Hack')</script>";

// =====================================================
// Attributes
// =====================================================

const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://google.com");

// =====================================================
// id Property
// =====================================================

const section = document.querySelector("section");

console.log(section.id);

section.id = "newSection";

// =====================================================
// className
// =====================================================

console.log(section.className);

section.className = "container";

// =====================================================
// classList
// =====================================================

section.classList.add("active");

section.classList.add("dark");

section.classList.remove("dark");

section.classList.toggle("hidden");

console.log(section.classList);

// =====================================================
// style Property
// =====================================================

heading.style.color = "red";

heading.style.backgroundColor = "yellow";

heading.style.padding = "10px";

// =====================================================
// createElement()
// =====================================================

const newHeading = document.createElement("h2");

newHeading.textContent = "Created by JavaScript";

// =====================================================
// append()
// =====================================================

document.body.append(newHeading);

// =====================================================
// prepend()
// =====================================================

const topText = document.createElement("p");

topText.textContent = "Inserted at top";

document.body.prepend(topText);

// =====================================================
// appendChild()
// =====================================================

const list = document.getElementById("list");

const li = document.createElement("li");

li.textContent = "JavaScript";

list.appendChild(li);

// =====================================================
// Multiple Elements
// =====================================================

for (let i = 1; i <= 5; i++) {
  const item = document.createElement("li");

  item.textContent = `Item ${i}`;

  list.appendChild(item);
}

// =====================================================
// remove()
// =====================================================

const removeItem = document.querySelector(".removeMe");

removeItem.remove();

// =====================================================
// DocumentFragment
// =====================================================

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
  const li = document.createElement("li");

  li.textContent = `Fragment Item ${i}`;

  fragment.appendChild(li);
}

list.appendChild(fragment);
