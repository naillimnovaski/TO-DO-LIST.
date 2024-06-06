document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = document.getElementById('new-task').value.trim();
    if (taskText === '') {
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', function () {
        taskItem.remove();
    });

    taskItem.appendChild(deleteBtn);
    taskItem.addEventListener('click', function () {
        taskItem.classList.toggle('done');
    });

    document.getElementById('task-list').appendChild(taskItem);
    document.getElementById('new-task').value = '';
}