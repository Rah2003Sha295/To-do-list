var tasks = [];
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  var taskText = taskInput.value.trim(); 

  if (taskText !== "") {
    tasks.push(taskText);
    taskInput.value = "";
    renderTasks();
  } else {
    alert("Please enter a task!");
  }
}

function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; 
  tasks.forEach(function(taskText, index) {
    var li = document.createElement("li");
    var input = document.createElement("input");
    input.type = "text";
    input.value = taskText;
    input.classList.add("edit-input");
    input.disabled = true;
    var editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.classList.add("edit-btn");
    editButton.addEventListener("click", function() {
      input.disabled = false; 
      input.focus(); 
    });
    input.addEventListener("blur", function() {
      tasks[index] = input.value; 
      input.disabled = true; 
      renderTasks(); 
    });
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function() {
      deleteTask(index); 
    });
    li.appendChild(editButton);
    li.appendChild(input);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}