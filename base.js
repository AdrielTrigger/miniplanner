import { openForm, closeForm, renderTask, renderTaskList } from './app/app_modules/objRender.js';
import { Task } from './app/app_modules/classes.js';
import { saveList, loadList } from './app/app_modules/dataManagement.js';

const newTaskButton = document.getElementById('new-task');

const taskForm = document.querySelector('form');
const taskInput = document.getElementById('task-name');
const cancelTask = document.getElementById('cancel-task');

const taskList = document.querySelector('.task-list');

var listOfTasks = [];

function recover (data, array) {
    if (data) {
        for (let i = 0; i < data.length; i++) {
            let name = data[i].name;
            let task = new Task (name);
            array.push(task);
        }
    }
}

if (loadList()) {
    let loadedData = loadList();

    recover(loadedData, listOfTasks);

    renderTaskList(listOfTasks, taskList);
}

newTaskButton.addEventListener('click', () => {
    openForm(newTaskButton, taskForm);
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value != '') {
        listOfTasks.push(new Task(taskInput.value));
        saveList(listOfTasks);
        renderTask(taskInput.value, taskList, listOfTasks.length);
        closeForm(newTaskButton, taskForm);
    }
    taskInput.value = '';
});

cancelTask.addEventListener('click', (e) => {
    e.preventDefault();
    closeForm(newTaskButton, taskForm);
    taskInput.value = '';
});

taskList.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('deletion')) {
        listOfTasks.splice(e.target.parentElement.id - 1, 1);
        saveList(listOfTasks);
        console.log(e.target.parentElement.id);
    }
});

export { listOfTasks, taskList }