const form = document.querySelector(".task-form");
const input = document.querySelector("#taskInput");
const submit = document.querySelector("#add");
const clear = document.querySelector("#clear");
const taskList = document.querySelector(".list");
const nav = document.querySelector("#nav");
const date = new Date().toLocaleDateString();
const completedBy = document.querySelector('#schedule');

loadEventListeners();

function loadEventListeners() {
	form.addEventListener("submit", addTask);
	clear.addEventListener("click", clearTasks);
	taskList.addEventListener("click", removeTask);
}

function addTask(e) {
	if (input.value === "") {
		if ((nav.innerHTML = "Please Add A Task"))
			setTimeout(() => (nav.innerHTML = ""), 3000);
	} else {
		const li = document.createElement("li");
		li.className = "addtasks";
    li.appendChild(document.createTextNode(input.value));
    taskList.appendChild(li);
     
    const schedules =  document.createElement("span");
    schedules.className = "completedBy";
    schedules.innerHTML = "to be completed by: "
    schedules.appendChild(document.createTextNode(completedBy.value));
    li.appendChild(schedules);

		const link = document.createElement("a");
		link.className = "deleteTask";
		link.innerHTML = '<i class="far fa-times-circle"></i>';
    li.appendChild(link);
    
    taskInput.value = "";
    schedule.value = "";
	}
	e.preventDefault();
}

function clearTasks(e) {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
	e.preventDefault();
}

function removeTask(e) {
	if (e.target.parentElement.classList.contains("deleteTask")) {
		if ((nav.innerHTML = "Task Deleted"))
			setTimeout(() => (nav.innerHTML = ""), 3000);
		{
			e.target.parentElement.parentElement.remove();
		}
	}
}
