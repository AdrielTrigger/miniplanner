import { openForm, closeForm, renderTask, renderTaskList } from './app/app_modules/objRender.js';
import { Task } from './app/app_modules/classes.js';
import { saveList, loadList } from './app/app_modules/dataManagement.js';

const newTaskButton = document.querySelector('#new-task-button');

const taskForm = document.querySelector('.task-form');
const taskInput = document.querySelector('#task-name');
const cancelTask = document.querySelector('#cancel-task');

const taskList = document.querySelector('.task-list');

var taskArray = [];

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

    recover(loadedData, taskArray);

    renderTaskList(taskArray, taskList);
}

newTaskButton.addEventListener('click', () => {
    openForm(newTaskButton, taskForm);
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value != '') {
        taskArray.push(new Task(taskInput.value));
        saveList(taskArray);
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

taskList.addEventListener('click', (e) => {
    let array = document.querySelectorAll('.task-item');
    for (let i = 0; i < array.length; i++) {
        if (e.target.parentElement === array[i] && e.target.classList.contains('deletion')) {
            taskArray.splice(i,1);
            saveList(taskArray);
            taskList.removeChild(e.target.parentElement);
            return;
        }
    }
});

export { taskArray, taskList }