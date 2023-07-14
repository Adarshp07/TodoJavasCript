// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const descriptionInput = document.getElementById('descriptionInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Counter for generating unique task IDs
let taskId = 1;

// Function to create a new task item
function createTaskItem(id, task, description) {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', id);

    const taskText = document.createElement('span');
    taskText.innerText = task;

    const descriptionText = document.createElement('span');
    descriptionText.innerText = description;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    listItem.appendChild(taskText);
    listItem.appendChild(descriptionText);
    listItem.appendChild(deleteButton);

    return listItem;
}