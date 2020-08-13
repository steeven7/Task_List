const form = document.querySelector('.task-form');
const input = document.querySelector('#taskInput');
const submit = document.querySelector('#add');
const clear = document.querySelector('#clear');
const taskList = document.querySelector('.list');

loadEventListeners();

function loadEventListeners() {
  
  form.addEventListener("submit", addTask);
  clear.addEventListener("click", clearTasks);
    taskList.addEventListener("click", removeTask);

}

function addTask(e) {
  if (input.value === '') {
    alert('Add a task');
  }

  const li = document.createElement('li');

  li.className = ('addtasks')
  li.appendChild(document.createTextNode(input.value));
  taskList.appendChild(li);

  const link = document.createElement('a');
  link.className = ('deleteTask');
  link.innerHTML = '<i class="far fa-times-circle"></i>';
  li.appendChild(link);
  

    taskInput.value = "";

  
  e.preventDefault();

}

// Clear Tasks
function clearTasks(e) {

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  e.preventDefault()
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('deleteTask')) {
    if (confirm('Remove Task?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}