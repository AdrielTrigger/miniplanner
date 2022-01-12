import { openForm, closeForm, renderTask, renderTaskList, renderHabit, renderHabitList } from './app/app_modules/objRender.js';
import { Habit, Task } from './app/app_modules/classes.js';
import { saveTasks, loadTasks, saveHabits, loadHabits } from './app/app_modules/dataManagement.js';

// item creation buttons
const newTaskButton = document.querySelector('#new-task-button');
const newHabitButton = document.querySelector('#new-habit-button');

// task related objects
const taskForm = document.querySelector('.task-form');
const taskInput = document.querySelector('#task-name');
const cancelTask = document.querySelector('#cancel-task');

const taskList = document.querySelector('.task-list');

// habit related objects
const habitForm = document.querySelector('.habit-form');
const habitInput = document.querySelector('#habit-name');
const cancelHabit = document.querySelector('#cancel-habit');

const habitList = document.querySelector('.habit-list');

var taskArray = [];
var habitArray = [];

function recover (data, array) {
    if (data) {
        for (let i = 0; i < data.length; i++) {
            let name = data[i].name;
            let task = new Task (name);
            array.push(task);
        }
    }
}

if (loadTasks()) {
    let loadedData = loadTasks();

    recover(loadedData, taskArray);

    renderTaskList(taskArray, taskList);
}

if (loadHabits()) {
    let loadedData = loadHabits();

    recover(loadedData, habitArray);

    renderHabitList(habitArray, habitList);
}

newTaskButton.addEventListener('click', () => {
    openForm(newTaskButton, taskForm);
});

newHabitButton.addEventListener('click', () => {
    openForm(newHabitButton, habitForm);
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (taskInput.value != '') {
        taskArray.push(new Task(taskInput.value));
        renderTask(taskInput.value, taskList);
        closeForm(newTaskButton, taskForm);
        saveTasks(taskArray);
    }
    taskInput.value = '';
});

habitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (habitInput.value != '') {
        habitArray.push(new Habit(habitInput.value));
        renderHabit(habitInput.value, habitList);
        closeForm(newHabitButton, habitForm);
        saveHabits(habitArray);
    }
});

cancelTask.addEventListener('click', (e) => {
    e.preventDefault();
    closeForm(newTaskButton, taskForm);
    taskInput.value = '';
});

cancelHabit.addEventListener('click', (e) => {
    e.preventDefault();
    closeForm(newHabitButton, habitForm);
    habitInput.value = '';
});

// this allows for controlled removal of corresponding items from the task array and the GUI task list
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

habitList.addEventListener('click', (e) => {
    let array = document.querySelectorAll('.habit-item');
    for (let i = 0; i < array.length; i++) {
        if (e.target.parentElement === array[i] && e.target.classList.contains('deletion')) {
            habitArray.splice(i,1);
            saveHabits(habitArray);
            habitList.removeChild(e.target.parentElement);
            return;
        }
    }
});

export { taskArray, taskList }