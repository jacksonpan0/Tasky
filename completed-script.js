document.addEventListener('DOMContentLoaded', function () {
    loadCompletedTasks();
});

function loadCompletedTasks() {
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    const completedList = document.getElementById('completedList');

    completedTasks.forEach(function (completedTaskText) {
        const completedTaskItem = document.createElement('li');
        completedTaskItem.textContent = completedTaskText;
        completedList.appendChild(completedTaskItem);
    });
}

// Function to clear all completed tasks
function clearAllCompletedTasks() {
    localStorage.removeItem('completedTasks');
    // Clear the displayed completed tasks on the page
    const completedList = document.getElementById('completedList');
    completedList.innerHTML = '';
}

// Add event listener to the "Clear All Completed Tasks" button
const clearCompletedButton = document.getElementById('clearCompleted');
clearCompletedButton.addEventListener('click', clearAllCompletedTasks);