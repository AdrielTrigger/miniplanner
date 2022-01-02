function openForm (button, form) {
    form.style.setProperty('display', 'flex');
    button.style.setProperty('display', 'none');
}

function closeForm(button, form) {
    form.style.setProperty('display', 'none');
    button.style.setProperty('display', 'flex');
}

function renderTask (taskName, container) {
    // taskName comes from the task form's text input
    // container is the DOM element that houses the task list
    let task = document.createElement('div');
    task.innerHTML = taskName;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    task.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        container.removeChild(task);
    });

    container.appendChild(task);
}

function renderTaskList (list, container) {
    for (i = 0; i < list.length; i++) {
        renderTask(list[i].name, container);
    }
}

export { openForm, closeForm, renderTask, renderTaskList };