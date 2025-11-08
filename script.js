const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const dateTime = taskDateTime.value;

  if (taskText === "" || dateTime === "") {
    alert("Please enter task and date/time!");
    return;
  }

  const li = document.createElement("li");
  const taskContent = document.createElement("span");
  taskContent.innerHTML = `${taskText} <br><small>${new Date(dateTime).toLocaleString()}</small>`;
  li.appendChild(taskContent);

  const btnDiv = document.createElement("div");

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✔️";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", taskText);
    if (newText) taskContent.innerHTML = `${newText} <br><small>${new Date(dateTime).toLocaleString()}</small>`;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);
  li.appendChild(btnDiv);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}