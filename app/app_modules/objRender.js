import { taskList } from '../../base.js';

function openForm (button, form) {
    form.style.setProperty('display', 'flex');
    button.style.setProperty('display', 'none');
}

function closeForm(button, form) {
    form.style.setProperty('display', 'none');
    button.style.setProperty('display', 'flex');
}

function renderTask (taskName, container, number) {
    // taskName comes from the task form's text input
    // container is the DOM element that houses the task list
    let task = document.createElement('div');
    task.innerHTML = taskName;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('deletion');
    task.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        container.removeChild(task);
    });

    task.setAttribute('id', number);
    container.appendChild(task);
}

function renderTaskList (list, container) {
    for (let i = 0; i < list.length; i++) {
        renderTask(list[i].name, container, i+1);
    }
}

export { openForm, closeForm, renderTask, renderTaskList };