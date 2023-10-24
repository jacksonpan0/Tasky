// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Event listener for adding a new task
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

// Function to add a new task
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskText}
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);

    // Add event listener to delete button
    taskItem.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
}