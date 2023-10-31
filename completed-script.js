// Save a completed task to localStorage
function saveCompletedTask(taskText) {
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    completedTasks.push(taskText);
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
}

// Retrieve and display completed tasks
function displayCompletedTasks() {
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

    // Loop through completedTasks and display them in the HTML
    completedTasks.forEach(function (taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        completedList.appendChild(taskItem);
    });
}

// Call displayCompletedTasks when the "completed-tasks.html" page loads
window.addEventListener('load', function () {
    if (window.location.href.endsWith('completed-tasks.html')) {
        displayCompletedTasks();
    }
});
