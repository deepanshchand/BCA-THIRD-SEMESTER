
// =====================================================
// SELECTING ELEMENTS
// =====================================================

const heading = document.getElementById("heading");

console.log(heading);

const children = document.getElementsByClassName("child");

console.log(children);

const listItems = document.getElementsByTagName("li");

console.log(listItems);

const firstChild = document.querySelector(".child");

console.log(firstChild);

const allChildren = document.querySelectorAll(".child");

console.log(allChildren);

// =====================================================
// DOM TRAVERSING
// =====================================================

console.log(firstChild.parentElement);

console.log(firstChild.nextElementSibling);

console.log(firstChild.parentElement.children);

// =====================================================
// READING CONTENT
// =====================================================

const content = document.getElementById("content");

console.log(content.innerHTML);

console.log(content.innerText);

console.log(content.textContent);

// =====================================================
// UPDATING CONTENT
// =====================================================

content.innerHTML = "<h2>Updated Using innerHTML</h2>";

content.textContent = "Updated Using textContent";

content.innerText = "Updated Using innerText";

// =====================================================
// ATTRIBUTES
// =====================================================

const link = document.getElementById("link");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://github.com");

console.log(link.getAttribute("href"));

// =====================================================
// CLASSNAME
// =====================================================

const section = document.getElementById("section1");

console.log(section.className);

section.className = "box active";

// =====================================================
// CLASSLIST
// =====================================================

section.classList.add("highlight");

section.classList.remove("active");

section.classList.toggle("hidden");

section.classList.toggle("hidden");

console.log(section.classList);

// =====================================================
// STYLE PROPERTY
// =====================================================

heading.style.color = "blue";

heading.style.backgroundColor = "lightyellow";

heading.style.padding = "10px";

heading.style.border = "2px solid black";

// =====================================================
// CREATE ELEMENT
// =====================================================

const newHeading = document.createElement("h2");

newHeading.textContent = "Created Using JavaScript";

console.log(newHeading);

// =====================================================
// APPEND
// =====================================================

document.body.append(newHeading);

// =====================================================
// PREPEND
// =====================================================

const topParagraph = document.createElement("p");

topParagraph.textContent = "Inserted Using prepend()";

document.body.prepend(topParagraph);

// =====================================================
// APPEND CHILD
// =====================================================

const list = document.getElementById("list");

const jsItem = document.createElement("li");

jsItem.textContent = "JavaScript";

list.appendChild(jsItem);

// =====================================================
// BEFORE
// =====================================================

const beforeItem = document.createElement("li");

beforeItem.textContent = "Before CSS";

list.children[1].before(beforeItem);

// =====================================================
// AFTER
// =====================================================

const afterItem = document.createElement("li");

afterItem.textContent = "After CSS";

list.children[2].after(afterItem);

// =====================================================
// insertBefore
// =====================================================

const newItem = document.createElement("li");

newItem.textContent = "Inserted Using insertBefore";

list.insertBefore(newItem, list.firstElementChild);

// =====================================================
// REMOVE
// =====================================================

const removeElement = document.querySelector(".removeMe");

removeElement.remove();

// =====================================================
// CREATE MULTIPLE ITEMS
// =====================================================

for (let i = 1; i <= 5; i++) {
  const item = document.createElement("li");

  item.textContent = `Dynamic Item ${i}`;

  list.appendChild(item);
}

// =====================================================
// DOCUMENT FRAGMENT
// =====================================================

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++) {
  const li = document.createElement("li");

  li.textContent = `Fragment Item ${i}`;

  fragment.appendChild(li);
}

list.appendChild(fragment);

// =====================================================
// PRACTICE CRUD OBJECT
// =====================================================

// CREATE

const card = document.createElement("div");

card.classList.add("box");

card.textContent = "I am a dynamically created card";

// ADD

document.body.append(card);

// UPDATE

card.textContent = "Card Updated Successfully";

// DELETE (after 5 seconds)

setTimeout(() => {
  card.remove();
}, 5000);

// =====================================================
// XSS SAFE EXAMPLE
// =====================================================

const safeDiv = document.createElement("div");

safeDiv.textContent = "<script>alert('hack')</script>";

document.body.append(safeDiv);
