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
    let task = document.createElement('li');
    task.classList.add('task-item');
    task.innerHTML = taskName;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Excluir';
    deleteButton.classList.add('deletion');
    task.appendChild(deleteButton);

    container.appendChild(task);
}

function renderTaskList (list, container) {
    // list is an array
    // container is the DOM element that will receive the rendered content
    for (let i = 0; i < list.length; i++) {
        renderTask(list[i].name, container);
    }
}

function renderHabit (habitName, container) {
    let habit = document.createElement('li');
    habit.classList.add('habit-item');
    habit.innerHTML = habitName;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Excluir';
    deleteButton.classList.add('deletion');
    habit.appendChild(deleteButton);

    container.appendChild(habit);
}

function renderHabitList (list, container) {
    for (let i = 0; i < list.length; i++) {
        renderHabit(list[i].name, container);
    }
}

export { openForm, closeForm, renderTask, renderTaskList, renderHabit, renderHabitList };