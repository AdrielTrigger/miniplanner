const fs = window.require('fs');

function saveList (array) {
    let list = JSON.stringify(array);
    fs.writeFile('list.json', list, (err) => {
        if (err) throw err;
    });
}

function loadList () {
    if (fs.existsSync('./list.json')) {
        let loadedData = fs.readFileSync('./list.json');
        return JSON.parse(loadedData);
    }
}

export { saveList, loadList }