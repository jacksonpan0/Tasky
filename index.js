// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
let taskLimit = 10;
let taskAmount = 0;
// Function to handle user input and add a new task
function handleAddTask() {
    const taskText = taskInput.value.trim();
    if (taskAmount < taskLimit && taskText !== '') {
        addTask(taskText);
        clearInput();
        taskAmount++;
        updateTaskCount();
    }
}
// Event listener for adding a new task (button click)
addTaskButton.addEventListener('click', handleAddTask);

// Event listener for adding a new task when the "Enter" key is pressed in the text input
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleAddTask();
    }
});

// Function to clear the input field
function clearInput() {
    taskInput.value = '';
}

// Function to update the task count in the HTML
function updateTaskCount() {
    const taskCountElement = document.getElementById('taskCount');
    taskCountElement.textContent = `Task Count: ${taskAmount}`;
}

// Function to add a new task
function addTask(taskText) {
    const taskItem = document.createElement('li');
    // Create the task text element
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    // Create the complete and delete buttons
    const completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.classList.add('complete');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete');
    // Append elements to the task item
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    // Append the task item to the task list
    taskList.appendChild(taskItem);
    // Add event listener to delete button
    taskItem.querySelector('.delete').addEventListener('click', function() {
        removeTask(taskItem)
    });
    // Add event listener to complete button
    taskItem.querySelector('.complete').addEventListener('click', function() {
        markComplete(taskText);
        removeTask(taskItem);
    });
}

// Function to remove a task from the task list
function removeTask(taskItem) {
    taskList.removeChild(taskItem);
    taskAmount--;
    updateTaskCount();
}

// Function to mark a task as completed
function markComplete(taskText) {
    saveCompletedTask(taskText);
}

// Function to save completed task to local storage
function saveCompletedTask(completedTaskText) {
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    completedTasks.push(completedTaskText);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
}