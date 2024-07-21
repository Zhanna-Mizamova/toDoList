const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTask(){
    const taskText = taskInput.value;
    const newTask = document.createElement('ol');
    newTask.textContent = taskText;
    taskList.append(newTask);
    taskInput.value= '';
}

function checkTask(event){
    if (event.target.tagName === 'OL') {
		event.target.classList.toggle('completed');
	}
}
addButton.addEventListener('click', checkTask);
taskList.addEventListener('click', checkTask);




