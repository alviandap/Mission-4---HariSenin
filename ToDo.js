document.addEventListener('DOMContentLoaded', () => {
    const todoItems = document.getElementById('todoItems');
    const doneItems = document.getElementById('doneItems');
    const taskInput = document.getElementById('task');
    const priorityInput = document.getElementById('priority');
    const addTaskButton = document.getElementById('addTask');
    const deleteAllButton = document.getElementById('deleteAll');
    const timeElement = document.getElementById('time');

    // Display time
    const updateTime = () => {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        timeElement.textContent = now.toLocaleDateString('id-ID', options);
    };
    updateTime();

    // Add task
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        const priority = priorityInput.value;

        if (task !== "") {
            addTask(task, priority);
            taskInput.value = '';
        }
    });

    const addTask = (task, priority) => {
        const li = document.createElement('li');
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', () => markAsDone(li));

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const priorityTag = document.createElement('span');
        priorityTag.classList.add('priority', priority);
        priorityTag.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

        taskInfo.appendChild(checkbox);
        taskInfo.appendChild(taskText);
        taskInfo.appendChild(priorityTag);

        li.appendChild(taskInfo);
        todoItems.appendChild(li);
    };

    // Mark as done
    const markAsDone = (item) => {
        item.querySelector('input[type="checkbox"]').disabled = true;
        doneItems.appendChild(item);
    };

    // Delete all tasks
    deleteAllButton.addEventListener('click', () => {
        todoItems.innerHTML = '';
        doneItems.innerHTML = '';
    });
});
