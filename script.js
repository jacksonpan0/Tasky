// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
let taskLimit = 10;
let taskAmount = 0;
// Event listener for adding a new task
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if(taskAmount < taskLimit) {
        if(taskText.trim() !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
        taskAmount++;
        updateTaskCount();
    }
});

// Event listener for adding a new task when the "Enter" key is pressed in the text input
taskInput.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        if(taskAmount < taskLimit) {
            const taskText = taskInput.value;
            if(taskText.trim() !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
        taskAmount++;
        updateTaskCount();
    }
});

// Function to update the task count in the HTML
function updateTaskCount() {
    const taskCountElement = document.getElementById('taskCount');
    taskCountElement.textContent = `Task Count: ${taskAmount}`;
}

// Function to add a new task
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskText}
        <button class="complete">Completed</button>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);

    // Add event listener to delete button
    taskItem.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(taskItem);
        taskAmount--;
        updateTaskCount();
    });

    // Add event listener to complete button
    taskItem.querySelector('.complete').addEventListener('click', function() {
        // Handle task completion here, e.g., change the style, move to a completed list, etc.
        // For now, let's just remove it
        taskList.removeChild(taskItem);
        taskAmount--;
        updateTaskCount();
    });
}

