document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    let tasks = [];

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;

        const newTask = {
            id: Date.now(),
            title,
            description,
            dueDate
        };

        tasks.push(newTask);
        taskForm.reset();
        displayTasks();
    });

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item';
            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Due Date: ${task.dueDate}</p>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(taskElement);
        });
    }

    window.editTask = function(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            document.getElementById('title').value = task.title;
            document.getElementById('description').value = task.description;
            document.getElementById('dueDate').value = task.dueDate;
            taskForm.removeEventListener('submit', addTask);
            taskForm.addEventListener('submit', function updateTask(event) {
                event.preventDefault();
                task.title = document.getElementById('title').value;
                task.description = document.getElementById('description').value;
                task.dueDate = document.getElementById('dueDate').value;
                tasks = tasks.map(t => t.id === id ? task : t);
                taskForm.reset();
                taskForm.removeEventListener('submit', updateTask);
                taskForm.addEventListener('submit', addTask);
                displayTasks();
            });
        }
    };

    window.deleteTask = function(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks = tasks.filter(t => t.id !== id);
            displayTasks();
        }
    };
});
