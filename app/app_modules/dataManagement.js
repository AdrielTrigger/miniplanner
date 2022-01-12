const fs = window.require('fs');

function saveTasks (array) {
    let list = JSON.stringify(array);
    fs.writeFile('tasks.json', list, (err) => {
        if (err) throw err;
    });
}

function saveHabits (array) {
    let list = JSON.stringify(array);
    fs.writeFile('habits.json', list, (err) => {
        if (err) throw err;
    });
}

function loadTasks () {
    if (fs.existsSync('./tasks.json')) {
        let loadedData = fs.readFileSync('./tasks.json');
        return JSON.parse(loadedData);
    }
}

function loadHabits () {
    if (fs.existsSync('./habits.json')) {
        let loadedData = fs.readFileSync('./habits.json');
        return JSON.parse(loadedData);
    }
}

export { saveTasks, loadTasks, saveHabits, loadHabits }