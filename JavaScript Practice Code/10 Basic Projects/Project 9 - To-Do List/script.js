const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Enter a task");

    return;
  }

  const li = document.createElement("li");

  const taskText = document.createElement("span");

  taskText.textContent = task;

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "Delete";

  deleteBtn.classList.add("deleteBtn");

  li.appendChild(taskText);

  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";

  taskText.addEventListener("click", () => {
    taskText.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
});
