let taskId = 0;

// Add new task
function addTask(columnId) {
  const text = prompt("Enter task:");
  if (!text) return;

  const task = document.createElement("div");
  task.className = "task";
  task.id = "task-" + taskId++;
  task.draggable = true;
  task.innerText = text;

  task.addEventListener("dragstart", drag);

  document.querySelector(`#${columnId} .task-list`).appendChild(task);
}

// Drag functions
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const task = document.getElementById(data);

  if (event.target.classList.contains("task-list")) {
    event.target.appendChild(task);
  } else {
    event.target.closest(".task-list").appendChild(task);
  }
}
