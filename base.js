import { openForm, closeForm, renderTask, renderTaskList } from './app/app_modules/objRender.js';
import { Task } from './app/app_modules/classes.js';
import { saveList, loadList } from './app/app_modules/dataManagement.js';

const newTaskButton = document.getElementById('new-task');

const taskForm = document.querySelector('form');
const taskInput = document.getElementById('task-name');
const cancelTask = document.getElementById('cancel-task');

const taskList = document.querySelector('.task-list');

var listOfTasks = [];

let loadedData = await loadList();

function recover (data, container, array) {
    for (let i = 0; i < data.length; i++) {
        let task = new Task (data[i].name, container);
        array.push(task);
    }
}

if (loadedData.length > 0) {
    recover(loadedData, taskList, listOfTasks);

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
        renderTask(taskInput.value, taskList);
        closeForm(newTaskButton, taskForm);
    }
    taskInput.value = '';
});

cancelTask.addEventListener('click', (e) => {
    e.preventDefault();
    closeForm(newTaskButton, taskForm);
    taskInput.value = '';
});